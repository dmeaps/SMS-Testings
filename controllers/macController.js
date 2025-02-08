import  os from "os";

export const getMacAddress = async(req,res) => {
    const clientIP = req.query.ip;
    if(!clientIP){
        return res.status(400).json({
            message:"IP Address missing from query"
        })
    }
    try{
        let interfaces = os.networkInterfaces();
        let mac = "Unknown";
        Object.keys(interfaces).forEach(key => {
            interfaces[key].forEach(iFace => {
                if(iFace.address === clientIP){
                    mac = iFace.mac
                }
            })
        });
        return res.json({
            ip: clientIP,
            mac: mac
        })
    }catch(error){
        console.error('Error fetching MAC address',error);
        return res.status(500).json({
            message:`Something went wrong while fetching MAC address`,
            error: error
        })
    }
}