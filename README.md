# Simple Torrent-like Application

## Overview
This is a simple torrent-like application designed for file sharing within a LAN (Local Area Network). Follow the steps below to set it up and use it effectively.

---

## Prerequisites
1. Install **Node.js** on your system and add it to your PATH. [Download Node.js](https://nodejs.org/en/download/package-manager)
2. On Windows:
   - Open a terminal and execute the following command to enable ICMP ping requests:
     ```bash
     netsh advfirewall firewall add rule name="ICMPv4 Allow Ping Requests" protocol=icmpv4:8,any dir=in action=allow
     ```
   - Ensure your network connection is set to **Private**:
     - Go to **Settings > Network & Internet > Ethernet/Wi-Fi > Connection Properties**.
     - Set the connection to **Private**.

---

## Installation & Setup

### Step 1: Clone or Download the Repository
Download the source code to your local machine or clone the repository using:
```bash
git clone <repository-url>
```

### Step 2: Install Dependencies
1. Open a terminal and navigate to the project directory:
   ```bash
   cd manage_torrent
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Step 3: Start the Application
1. Run the following commands:
   ```bash
   npm start
   node index.js
   ```
2. In the terminal, select **Server Options (2: LAN)**.  
   This ensures the application works within the same network.

3. Register an account via this [link](https://tracker-server-467x.onrender.com/user/register).

---

## File Uploading (Uploader's PC)
1. Complete the setup steps (1–3 above).
2. Add files to the `manage_torrent/storage` folder that you wish to upload.
3. Open the previous terminal:
   - From the MENU, select **1. Upload Files**.
   - Enter the file name located in the `storage` folder.
4. You can view your uploaded files [here](https://tracker-server-467x.onrender.com/home).

---

## File Downloading (Downloader's PC)
1. Complete the setup steps (1–3 above).
2. Access the [file list](https://tracker-server-467x.onrender.com/home).
3. Download the desired `.torrent` files and move them to the `manage_torrent/torrent` folder.
4. Open the previous terminal:
   - From the MENU, select **2. Download Files**.
   - Enter the `.torrent` file name (e.g., `filename.torrent`) and press Enter.
5. The file will begin downloading. And appears to the `storage` folder after succeeded.

---

## Notes
- This application works exclusively within a **LAN** environment.
- Ensure all participating devices are connected to the same network for optimal performance.
