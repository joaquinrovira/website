import { init } from "@lib/mongo";

export async function get(req, res) {
  const { func } = req.params;
  const { db } = await init();
  if (func === "searching") {
    let searching = (await db.collection("job").findOne()).searching || false;
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(searching));
  } else if (func === "tgljob") {
    let searching = false;
    let job = await db.collection("job").findOne();
    if (job === null) {
      await db.collection("job").insertOne({ searching: searching });
    } else {
      searching = job.searching;
    }
    await db
      .collection("job")
      .updateOne({ searching: searching }, { $set: { searching: !searching } }, { upsert: true });
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(!searching));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
