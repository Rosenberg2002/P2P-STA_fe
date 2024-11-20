# Simple Torrent-like Application
## How to run
### Step 1
Download this source code to your PC, or clone it.

### Step 2
There is some adjustment to do on your PC:
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
1. Choose server options (2. Lan) then access this [link](https://tracker-server-467x.onrender.com/user/register).
2. Create your account.

## Uploading files
1. Add files that you wanna upload to the "manage_torrent/storage" folder.
2. In MENU after step 4.1, choose 1 to upload file. Type file name that exists in storage folder.
3. Done!

## Downloading files
1. Navigate to the link in the MENU, login your account then you will see list of uploaded files.
2. Click download to download torrent file.
3. Add torrent files you just downloaded to "manage_torrent/torrent" folder.
4. In MENU, choose 2, type the torrent file name
