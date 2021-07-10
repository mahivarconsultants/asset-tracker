// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "GET") {
    const devices = [
      {
        deviceId: "abc-1",
        name: "Device 1",
        distance: 3.6,
        lastSignalDateTime: new Date(),
        address: "1, Indira Nagar, Chennai 97",
      },
      {
        deviceId: "abc-2",
        name: "device 2",
        distance: 5.6,
        lastSignalDateTime: new Date(),
        address: "90, Ashok Nagar, Chennai 17",
      },
      {
        deviceId: "abc-3",
        name: "Device 3",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
      {
        deviceId: "abc-4",
        name: "Device 4",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
      {
        deviceId: "abc-5",
        name: "Device 5",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
      {
        deviceId: "abc-6",
        name: "Device 6",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
      {
        deviceId: "abc-7",
        name: "Device 7",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
      {
        deviceId: "abc-8",
        name: "Device 8",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "81, Wonder Nagar, Chennai 27",
      },
    ];
    res.json({
      success: true,
      data: devices,
    });
  }
};
