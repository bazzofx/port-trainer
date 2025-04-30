import type { Scenario } from "@/lib/types"

export const scenarioData: Scenario[] = [
  {
    scenario:
      "You detect repeated authentication attempts over a secure shell connection. What port is being targeted?",
    question: "Identify the abused port",
    choices: ["22", "80", "443", "23"],
    answer: "SSH - 22",
    explanation:
      "Port 22 is the default port used by SSH (Secure Shell) for encrypted remote login. Repeated authentication attempts may indicate a brute-force attack targeting this port.",
  },
  {
    scenario: "An attacker is exfiltrating data via a DNS tunneling technique. Which port is likely being misused?",
    question: "Identify the port",
    choices: ["53", "110", "143", "80"],
    answer: "DNS - 53",
    explanation:
      "Port 53 is used for DNS (Domain Name System) traffic, and attackers often misuse it for DNS tunneling to exfiltrate data covertly by encoding it in DNS queries.",
  },
  {
    scenario:
      "A company experiences printer spoofing attacks on their legacy print servers. Which port is a likely target?",
    question: "Choose the port",
    choices: ["515", "25", "110", "161"],
    answer: "LPD - 515",
    explanation:
      "Port 515 is used by the Line Printer Daemon (LPD) protocol for printing services. Printer spoofing attacks typically target this port on legacy print servers.",
  },
  {
    scenario: "A misconfigured SQL database is exposed to the public internet. Which port should you monitor?",
    question: "Identify the port",
    choices: ["3306", "389", "445", "21"],
    answer: "MySQL - 3306",
    explanation:
      "Port 3306 is the default port used by MySQL databases. Exposing this port to the public internet can result in unauthorized access if not properly secured.",
  },
  {
    scenario:
      "A remote attacker is trying to brute force access to the corporate email submission server. Which port is being used?",
    question: "Select the port",
    choices: ["587", "143", "993", "110"],
    answer: "SMTP Submission - 587",
    explanation:
      "Port 587 is used for the submission of emails via SMTP (Simple Mail Transfer Protocol). It's commonly targeted in brute force attacks against email servers.",
  },
  {
    scenario: "Suspicious encrypted VoIP traffic is observed bypassing your SIP gateway. Which port is likely in use?",
    question: "Identify the port",
    choices: ["5061", "69", "443", "3389"],
    answer: "SIP over TLS - 5061",
    explanation:
      "Port 5061 is used by SIP (Session Initiation Protocol) for secure (TLS-encrypted) communications. It may be used by attackers to bypass security filters for VoIP traffic.",
  },
  {
    scenario: "Your security scanner flags TFTP as enabled on a legacy device. Which port should you restrict?",
    question: "Choose the port",
    choices: ["69", "20", "67", "514"],
    answer: "TFTP - 69",
    explanation:
      "Port 69 is used by TFTP (Trivial File Transfer Protocol), which is an insecure protocol. TFTP is often flagged because it can be exploited by attackers to transfer files without authentication.",
  },
  {
    scenario:
      "A penetration tester gains shell access by exploiting an open RPC service. Which port might have been involved?",
    question: "Identify the vulnerable port",
    choices: ["111", "135", "443", "3389"],
    answer: "RPC - 111",
    explanation:
      "Port 111 is used by the Remote Procedure Call (RPC) service. An open RPC service can be exploited by attackers to gain unauthorized access to systems.",
  },
  {
    scenario: "An IoT device is beaconing to port 161. What protocol is it likely using?",
    question: "Select the protocol",
    choices: ["SNMP", "LDAP", "SMTP", "RDP"],
    answer: "SNMP",
    explanation:
      "Port 161 is used by SNMP (Simple Network Management Protocol) for managing and monitoring network devices. IoT devices often use SNMP for reporting system status and statistics.",
  },
  {
    scenario:
      "Internal traffic shows devices requesting DHCP leases. What port is being used for server-to-client communication?",
    question: "Choose the port",
    choices: ["67", "68", "53", "445"],
    answer: "DHCP Server - 67",
    explanation:
      "Port 67 is used by the DHCP (Dynamic Host Configuration Protocol) server to listen for client requests. This port is critical for network devices to obtain IP addresses.",
  },
  {
    scenario:
      "An attacker tries to access a secure corporate email account over an encrypted IMAP connection. Which port would this use?",
    question: "Identify the correct port",
    choices: ["993", "143", "110", "995"],
    answer: "IMAPS - 993",
    explanation:
      "Port 993 is used by IMAPS (IMAP Secure) for encrypted email retrieval. Attackers often attempt to exploit this port to gain unauthorized access to email accounts.",
  },
  {
    scenario: "You notice an open port on a remote device commonly used for POP3 email retrieval. Which port is this?",
    question: "Select the service",
    choices: ["110", "111", "150", "80"],
    answer: "POP3 - 110",
    explanation:
      "Port 110 is the default port for POP3 (Post Office Protocol version 3), which is used for retrieving emails from a mail server. It is vulnerable to interception if unencrypted.",
  },
  {
    scenario: "A security scan reveals that LDAPS is active on a domain controller. What port should be checked?",
    question: "Choose the port",
    choices: ["636", "389", "445", "22"],
    answer: "LDAPS - 636",
    explanation:
      "Port 636 is used for LDAPS (LDAP Secure), which is a secure version of LDAP that encrypts traffic. If this service is active, it should be monitored for any unauthorized access attempts.",
  },
  {
    scenario: "An attacker is using a SOCKS proxy to tunnel traffic. What port might be in use?",
    question: "Identify the port",
    choices: ["1080", "80", "443", "53"],
    answer: "SOCKS Proxy - 1080",
    explanation:
      "Port 1080 is commonly used for SOCKS proxies, which allow tunneling of traffic through a firewall or proxy server, often used for malicious purposes to evade detection.",
  },
  {
    scenario: "An exposed Microsoft SQL Server is found on the internet. Which port is open?",
    question: "Choose the port",
    choices: ["1433", "3306", "5432", "22"],
    answer: "Microsoft SQL Server - 1433",
    explanation:
      "Port 1433 is used by Microsoft SQL Server for database connections. An exposed port 1433 can allow attackers to exploit vulnerabilities in SQL Server.",
  },
  {
    scenario:
      "An attacker is abusing remote desktop services to connect to internal systems. What port should be blocked?",
    question: "Identify the abused port",
    choices: ["3389", "5900", "22", "139"],
    answer: "RDP - 3389",
    explanation:
      "Port 3389 is used by Remote Desktop Protocol (RDP), which allows remote access to systems. Attackers often target this port to gain unauthorized access to internal systems.",
  },
  {
    scenario:
      "Encrypted web traffic is seen communicating with a backup management interface. What port is this most likely?",
    question: "Select the port",
    choices: ["8443", "8080", "443", "80"],
    answer: "HTTPS (Alternate) - 8443",
    explanation:
      "Port 8443 is commonly used for secure HTTP (HTTPS) traffic, particularly for management interfaces of applications or devices. It is often used as an alternative to port 443.",
  },
  {
    scenario: "You detect unencrypted email being sent from your network. Which standard SMTP port might be used?",
    question: "Choose the port",
    choices: ["25", "465", "587", "110"],
    answer: "SMTP - 25",
    explanation:
      "Port 25 is the default port used by SMTP for sending unencrypted email. It is frequently targeted by spammers and is often blocked on firewalls to prevent abuse.",
  },
  {
    scenario: "Syslog data is being sent from a network device. What port is likely being used?",
    question: "Identify the port",
    choices: ["514", "161", "22", "23"],
    answer: "Syslog - 514",
    explanation:
      "Port 514 is used by the Syslog protocol to send system logs from network devices to a central log server. Monitoring this port is critical for detecting security events.",
  },
  {
    scenario: "A service is listening on port 5432. What type of database is it likely using?",
    question: "Identify the database type",
    choices: ["PostgreSQL", "MySQL", "MSSQL", "Oracle"],
    answer: "PostgreSQL - 5432",
    explanation:
      "Port 5432 is the default port used by PostgreSQL, an open-source relational database management system. Exposed PostgreSQL services can be targeted for unauthorized access.",
  },
  {
    scenario: "A remote command execution vulnerability was discovered over Telnet. Which port is relevant?",
    question: "Choose the port",
    choices: ["23", "22", "80", "443"],
    answer: "Telnet - 23",
    explanation:
      "Port 23 is used by Telnet, a protocol that allows remote command execution. It is insecure because it transmits data in plaintext, making it vulnerable to exploitation.",
  },
  {
    scenario: "A penetration tester used OpenVPN to establish a secure tunnel. Which port is commonly associated?",
    question: "Identify the port",
    choices: ["1194", "443", "22", "3389"],
    answer: "OpenVPN - 1194",
    explanation:
      "Port 1194 is commonly used by OpenVPN, an open-source VPN solution. It typically uses UDP for tunneling traffic and is often targeted by attackers to bypass firewalls and access private networks.",
  },
  {
    scenario: "You're inspecting traffic related to BGP updates between routers. What port is involved?",
    question: "Choose the port",
    choices: ["179", "161", "443", "25"],
    answer: "BGP - 179",
    explanation:
      "Port 179 is used by BGP (Border Gateway Protocol) to exchange routing information between routers. It's a critical service for internet routing and can be exploited if not properly secured.",
  },
  {
    scenario: "SNMP traps are being received by a monitoring server. Which port is handling this?",
    question: "Select the port",
    choices: ["162", "161", "514", "123"],
    answer: "SNMP Trap - 162",
    explanation:
      "Port 162 is used by SNMP traps, which are notifications sent by network devices (like routers and switches) to a monitoring system. This port is used to track device status and performance.",
  },
  {
    scenario: "Your scan found NetBIOS services active on a subnet. Which port indicates session services?",
    question: "Identify the port",
    choices: ["139", "138", "137", "445"],
    answer: "NetBIOS Session - 139",
    explanation:
      "Port 139 is used for NetBIOS session services, which provide file and printer sharing services over a network. This service can be exploited in attacks such as SMB relay or pass-the-hash.",
  },
  {
    scenario: "A time synchronization issue is suspected across servers. Which port might need to be unblocked?",
    question: "Choose the port",
    choices: ["123", "111", "80", "389"],
    answer: "NTP - 123",
    explanation:
      "Port 123 is used by NTP (Network Time Protocol), which is responsible for synchronizing time across network devices. Blocking this port can cause time-related issues across systems.",
  },
  {
    scenario: "DHCP responses are not reaching clients. What port should be checked on the client side?",
    question: "Identify the port",
    choices: ["68", "67", "53", "161"],
    answer: "DHCP Client - 68",
    explanation:
      "Port 68 is used by DHCP clients to receive IP address assignments from the DHCP server (which listens on port 67). Ensuring this port is open on the client side is crucial for proper DHCP operation.",
  },
  {
    scenario: "An attacker accessed the RPC endpoint of a Linux system. Which port is typically used?",
    question: "Choose the port",
    choices: ["111", "135", "443", "21"],
    answer: "RPC - 111",
    explanation:
      "Port 111 is used by the RPC service on Linux systems. Attackers can exploit this service to execute remote code or access resources on vulnerable systems.",
  },
  {
    scenario: "LDAP authentication traffic is observed in plaintext. What default port does this use?",
    question: "Identify the port",
    choices: ["389", "636", "445", "993"],
    answer: "LDAP - 389",
    explanation:
      "Port 389 is the default port for LDAP (Lightweight Directory Access Protocol) in plaintext. It is vulnerable to interception if not encrypted using LDAPS (port 636).",
  },
  {
    scenario: "RADIUS accounting packets are not reaching the server. Which port might be blocked?",
    question: "Choose the port",
    choices: ["1813", "1812", "22", "443"],
    answer: "RADIUS (Acct) - 1813",
    explanation:
      "Port 1813 is used by RADIUS (Remote Authentication Dial-In User Service) for accounting traffic, which logs user activity. Blocking this port can interfere with tracking and auditing of network access.",
  },
]
