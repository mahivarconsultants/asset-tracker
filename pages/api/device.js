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
        address: "Karapakkam, Chennai",
      },
      {
        deviceId: "abc-3",
        name: "Device 3",
        distance: 3.7,
        lastSignalDateTime: new Date(),
        address: "Bengaluru, India",
      },
      {
        deviceId: "abc-4",
        name: "Device 4",
        distance: 3444.74,
        lastSignalDateTime: new Date(),
        address: "New Delhi, India",
      },
      {
        deviceId: "abc-5",
        name: "Device 5",
        distance: 1233.7,
        lastSignalDateTime: new Date(),
        address: "Mumbai, India",
      },
      {
        deviceId: "abc-6",
        name: "Device 6",
        distance: 3212.7,
        lastSignalDateTime: new Date(),
        address: "Kolkatta, India",
      },
      {
        deviceId: "abc-7",
        name: "Device 7",
        distance: 378.5,
        lastSignalDateTime: new Date(),
        address: "Madurai, Tamil nadu, India",
      },
      {
        deviceId: "abc-8",
        name: "Device 8",
        distance: 30.7,
        lastSignalDateTime: new Date(),
        address: "37B, Annai Indira Nagar, Chennai 600097",
      },
    ];
    res.json({
      success: true,
      data: devices,
    });
  }
};
