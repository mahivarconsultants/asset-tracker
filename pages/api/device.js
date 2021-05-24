// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "GET") {
    const devices = [
      { deviceId: "abc-1", name: "" },
      { deviceId: "abc-1", name: "device 2" },
      { deviceId: "abc-3", name: "Device 3" },
    ];
    res.json({
      success: true,
      data: devices,
    });
  }
};
