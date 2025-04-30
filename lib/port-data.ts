import type { PortData } from "./types"

export const portData: PortData[] = [
  {
    port: "20",
    protocol: "TCP",
    service: "FTP (Data)",
    description: "File Transfer Protocol data channel used for transferring files between client and server.",
  },
  {
    port: "21",
    protocol: "TCP",
    service: "FTP (Control)",
    description: "File Transfer Protocol control channel used for authentication and sending commands.",
  },
  {
    port: "22",
    protocol: "TCP/UDP",
    service: "SSH / SCP / SFTP",
    description: "Secure Shell protocol for encrypted remote login, file transfers, and command execution.",
  },
  {
    port: "23",
    protocol: "TCP",
    service: "Telnet",
    description: "Unencrypted text communications protocol for interactive terminal sessions (considered insecure).",
  },
  {
    port: "25",
    protocol: "TCP",
    service: "SMTP",
    description: "Simple Mail Transfer Protocol for sending email between servers.",
  },
  {
    port: "53",
    protocol: "TCP/UDP",
    service: "DNS",
    description: "Domain Name System for translating domain names to IP addresses.",
  },
  {
    port: "67",
    protocol: "UDP",
    service: "DHCP (Server to Client)",
    description: "Dynamic Host Configuration Protocol server port for automatic IP address assignment.Client port is 67",
  },
  {
    port: "68",
    protocol: "UDP",
    service: "DHCP (Client to Server)",
    description: "Dynamic Host Configuration Protocol client port for receiving IP configuration.Server port is 66",
  },
  {
    port: "69",
    protocol: "UDP",
    service: "TFTP",
    description: "Trivial File Transfer Protocol for simple, connectionless file transfers.",
  },
  {
    port: "80",
    protocol: "TCP",
    service: "HTTP",
    description: "Hypertext Transfer Protocol for transmitting web pages and other content.",
  },
  {
    port: "110",
    protocol: "TCP",
    service: "POP3",
    description: "Post Office Protocol version 3 for retrieving emails from a server.",
  },
  {
    port: "111",
    protocol: "TCP/UDP",
    service: "RPC",
    description: "Remote Procedure Call for client-server communication in distributed systems.",
  },
  {
    port: "123",
    protocol: "UDP",
    service: "NTP",
    description: "Network Time Protocol for clock synchronization between computer systems.",
  },
  {
    port: "135",
    protocol: "TCP/UDP",
    service: "Microsoft RPC (DCOM)",
    description: "Microsoft Remote Procedure Call for distributed component object model services.",
  },
  {
    port: "137",
    protocol: "UDP",
    service: "NetBIOS Name Service",
    description: "Network Basic Input/Output System for name registration and resolution.",
  },
  {
    port: "138",
    protocol: "UDP",
    service: "NetBIOS Datagram",
    description: "Network Basic Input/Output System for connectionless communication.",
  },
  {
    port: "139",
    protocol: "TCP",
    service: "NetBIOS Session",
    description: "Network Basic Input/Output System for connection-oriented communication.",
  },
  {
    port: "143",
    protocol: "TCP",
    service: "IMAP",
    description: "Internet Message Access Protocol for accessing email on a remote server.",
  },
  {
    port: "161",
    protocol: "UDP",
    service: "SNMP",
    description: "Simple Network Management Protocol for collecting and organizing information about managed devices.",
  },
  {
    port: "162",
    protocol: "UDP",
    service: "SNMP Trap",
    description: "Simple Network Management Protocol for sending notifications from agent to manager.",
  },
  {
    port: "179",
    protocol: "TCP",
    service: "BGP",
    description: "Border Gateway Protocol for exchanging routing information between gateway hosts.",
  },
  {
    port: "389",
    protocol: "TCP/UDP",
    service: "LDAP",
    description: "Lightweight Directory Access Protocol for accessing and maintaining directory services.",
  },
  {
    port: "443",
    protocol: "TCP",
    service: "HTTPS",
    description: "HTTP Secure for encrypted web communication using SSL/TLS.",
  },
  {
    port: "445",
    protocol: "TCP",
    service: "Microsoft SMB",
    description: "Server Message Block for file and printer sharing in Windows networks.",
  },
  {
    port: "465",
    protocol: "TCP",
    service: "SMTP",
    description: "SMTP over SSL for secure email transmission between servers.",
  },
  {
    port: "514",
    protocol: "UDP",
    service: "Syslog",
    description: "Standard protocol for message logging, often used for system management and security auditing.",
  },
  {
    port: "515",
    protocol: "TCP",
    service: "LPD",
    description: "Line Printer Daemon protocol for submitting print jobs to a printer or print server.",
  },
  {
    port: "520",
    protocol: "UDP",
    service: "RIP",
    description: "Routing Information Protocol for exchanging routing information between routers.",
  },
  {
    port: "587",
    protocol: "TCP",
    service: "SMTP (Submission)",
    description: "SMTP port specifically for email client submission with authentication.",
  },
  {
    port: "636",
    protocol: "TCP",
    service: "LDAPS",
    description: "LDAP over SSL for secure directory access.",
  },
  {
    port: "873",
    protocol: "TCP",
    service: "Rsync",
    description: "Remote file synchronization protocol for efficiently transferring and synchronizing files.",
  },
  {
    port: "993",
    protocol: "TCP",
    service: "IMAP(TLS/SSL)",
    description: "IMAP over SSL for secure email access on a remote server.",
  },
  {
    port: "995",
    protocol: "TCP",
    service: "POP3(TLS/SSL)",
    description: "POP3 over SSL for secure email retrieval.",
  },
  {
    port: "1080",
    protocol: "TCP",
    service: "SOCKS Proxy",
    description: "SOCKS protocol for handling traffic through a proxy server.",
  },
  {
    port: "1194",
    protocol: "TCP/UDP",
    service: "OpenVPN",
    description: "Open source VPN solution using custom security protocol.",
  },
  {
    port: "1433",
    protocol: "TCP",
    service: "Microsoft SQL Server",
    description: "Default port for Microsoft SQL Server database connections.",
  },
  {
    port: "1434",
    protocol: "UDP",
    service: "Microsoft SQL Monitor",
    description: "SQL Server Browser service for providing information about SQL Server instances.",
  },
  {
    port: "1701",
    protocol: "UDP",
    service: "L2TP",
    description: "Layer 2 Tunneling Protocol for supporting virtual private networks.",
  },
  {
    port: "1812",
    protocol: "UDP",
    service: "RADIUS (Auth)",
    description: "Remote Authentication Dial-In User Service for authentication and authorization.",
  },
  {
    port: "1813",
    protocol: "UDP",
    service: "RADIUS (Acct)",
    description: "RADIUS accounting port for collecting and processing accounting data.",
  },
  {
    port: "2049",
    protocol: "TCP/UDP",
    service: "NFS",
    description: "Network File System for distributed file system access across a network.",
  },
  {
    port: "3306",
    protocol: "TCP",
    service: "MySQL",
    description: "Default port for MySQL database server connections.",
  },
  {
    port: "3389",
    protocol: "TCP",
    service: "RDP",
    description: "Remote Desktop Protocol for remote desktop connections to Windows systems.",
  },
  {
    port: "5060",
    protocol: "TCP/UDP",
    service: "SIP (Unencrypted)",
    description: "Session Initiation Protocol for voice and video calls and instant messaging.",
  },
  {
    port: "5061",
    protocol: "TCP",
    service: "SIP (TLS Encrypted)",
    description: "Secure Session Initiation Protocol using TLS encryption.",
  },
  {
    port: "5432",
    protocol: "TCP",
    service: "PostgreSQL",
    description: "Default port for PostgreSQL database server connections.",
  },
  {
    port: "5900",
    protocol: "TCP",
    service: "VNC",
    description: "Virtual Network Computing for remote desktop sharing and control.",
  },
  {
    port: "6379",
    protocol: "TCP",
    service: "Redis",
    description: "In-memory data structure store used as a database, cache, and message broker.",
  },
  {
    port: "8080",
    protocol: "TCP",
    service: "HTTP (Alternate)",
    description: "Commonly used alternate port for web servers and proxies.",
  },
  {
    port: "3306",
    protocol: "TCP",
    service: "MySQL",
    description: "MySQL is an open-source relational database management system commonly used for web applications and storage of data."
  },
  {
    port: "88",
    protocol: "TCP/UDP",
    service: "Kerberos",
    description: "Kerberos is a network authentication protocol that uses secret-key cryptography to provide secure authentication over a non-secure network."
  },
  {
    port: "4444",
    protocol: "TCP",
    service: "Metasploit",
    description: "Metasploit is a penetration testing tool that allows for remote access to a compromised machine and exploits vulnerabilities using port 4444 for reverse shells."
  },
  {
    port: "50",
    protocol: "ESP (Encapsulating Security Payload)",
    service: "SIP",
    description: "SIP (Session Initiation Protocol) is used in VoIP for establishing, maintaining, and terminating multimedia communication sessions."
  },
  {
    port: "5432",
    protocol: "TCP",
    service: "PostgreSQL",
    description: "PostgreSQL is an open-source relational database system that provides advanced data management features and is widely used for data storage and analytics."
  },
  {
    port: "5900",
    protocol: "TCP",
    service: "VNC",
    description: "VNC (Virtual Network Computing) allows remote desktop access, enabling users to interact with a computer's graphical desktop environment over a network."
  },
  {
    port: "6665-6669",
    protocol: "TCP",
    service: "IRC",
    description: "IRC (Internet Relay Chat) is a protocol used for real-time text communication, often associated with group chats and channels in a network."
  },
  {
    port: "31337",
    protocol: "TCP/UDP",
    service: "Back Orifice / ncat",
    description: "Back Orifice is a remote administration tool, while ncat is a network utility for reading and writing data across networks. Port 31337 is historically used by these tools for backdoor access."
  },
  {
    port: "1433",
    protocol: "TCP",
    service: "Microsoft SQL Server",
    description: "Microsoft SQL Server is a relational database management system that uses port 1433 for its default SQL server connections for querying and managing databases."
  },
  {
    port: "1434",
    protocol: "UDP",
    service: "Microsoft SQL Monitor",
    description: "Microsoft SQL Server Monitor uses port 1434 to provide status and configuration information for SQL Server instances running on a network."
  },
  {
    port: "1521",
    protocol: "TCP",
    service: "Oracle Database",
    description: "Oracle Database is a multi-model database management system, and port 1521 is the default port for connecting to Oracle's database services using Oracle Net Listener."
  }
  {
    port: "8443",
    protocol: "TCP",
    service: "HTTPS (Alternate)",
    description: "Commonly used alternate port for secure web communication.",
  },
  
]
