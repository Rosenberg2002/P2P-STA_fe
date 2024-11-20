# Simple Torrent-like Application
## How to run
### Step 1
Download this source code to your PC, or clone it.

### Step 2
There is some adjustments to do on your PC:
1. Make sure you've installed Node.js (https://nodejs.org/en/download/package-manager) and add to PATH
2. If you're using windows, copy this to terminal "netsh advfirewall firewall add rule name="ICMPv4 Allow Ping Requests" protocol=icmpv4:8,any dir=in action=allow"
3. Settings > Network & internet > Ethernet (Wifi if you're using laptop) > "Wifi name" properties > Private network. 

### Step 3
Navigate to terminal:
1. cd manage_torrent
2. npm install
3. npm start
4. node index.js

### Step 4
1. Choose server options (2. LAN)
Since this is LAN so it only works on devices that connect to the same network.
3. Access this [link](https://tracker-server-467x.onrender.com/user/register).
4. Create your account.

## Uploading files (on uploader PC)
1. Do step 1 to 4.
2. Add files that you wanna upload to the "manage_torrent/storage" folder.
3. In MENU after step 4.1, choose 1 to upload file. Type file name that exists in storage folder.
4. Done! You can check your uploaded files in [here](https://tracker-server-467x.onrender.com/user/home).

## Downloading files (on downloader PC)
1. Do step 1 to 4.
2. Navigate to the [link](https://tracker-server-467x.onrender.com/user/home) in the MENU.
3. Download torrent files that you want.
4. Move torrent files you just downloaded to "manage_torrent/torrent" folder.
5. In MENU, choose "2. Download files".
6. Type the torrent file's name then hit enter. ("filename.torrent")
7. Done!
