export interface ThreatHuntingScenario {
  description: string
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
}

export const threatHuntingData: ThreatHuntingScenario[] = [
  {
    description: "During threat hunting, you discover persistent connections on port 445.",
    question: "What Windows service should you investigate?",
    options: ["SMB", "RDP", "FTP", "WMI"],
    correctAnswer: "SMB",
    explanation:
      "Port 445 is used by the Server Message Block (SMB) protocol for file sharing and other network services on Windows systems.",
  },
  {
    description: "Unusual DNS traffic patterns are detected on non-standard ports.",
    question: "Which port might indicate DNS tunneling?",
    options: ["443", "53", "8080", "5353"],
    correctAnswer: "8080",
    explanation:
      "DNS tunneling often uses alternative ports like 8080 to evade detection, instead of the standard port 53.",
  },
  {
    description: "A workstation is making connections to port 5938.",
    question: "What remote access tool might be in use?",
    options: ["TeamViewer", "AnyDesk", "RDP", "VNC"],
    correctAnswer: "TeamViewer",
    explanation: "Port 5938 is specifically used by TeamViewer for remote desktop access.",
  },
  {
    description: "Firewall logs reveal DNS traffic on port 80.",
    question: "What does this likely indicate?",
    options: ["DNS Tunneling", "Malware Beaconing", "HTTP Proxy", "AV Updates"],
    correctAnswer: "DNS Tunneling",
    explanation:
      "DNS tunneling disguises data in DNS requests and can use HTTP ports like 80 to blend in with normal traffic.",
  },
  {
    description: "Threat hunting reveals outbound traffic on port 6667.",
    question: "What might this indicate?",
    options: ["IRC Botnet C2", "FTP Session", "VoIP Traffic", "SSH Tunnel"],
    correctAnswer: "IRC Botnet C2",
    explanation:
      "Port 6667 is the default for IRC, which is commonly used for command and control channels by older botnets.",
  },
  {
    description: "During threat hunting, port 9001 is observed in outbound traffic.",
    question: "What anonymization service uses this port?",
    options: ["Tor", "VPN", "ProxyChains", "SOCKS"],
    correctAnswer: "Tor",
    explanation: "Port 9001 is often used by Tor for relaying traffic through its anonymous network.",
  },
  {
    description: "Threat hunting detects outbound traffic to port 1604.",
    question: "Which backdoor is known to use this port?",
    options: ["Back Orifice", "Sub7", "Gh0st RAT", "NetBus"],
    correctAnswer: "Back Orifice",
    explanation: "Back Orifice is a known backdoor that uses port 1604 to allow remote control of infected machines.",
  },
  {
    description: "Traffic from internal hosts is observed going to port 8080 with suspicious user-agent strings.",
    question: "What should be investigated?",
    options: ["Malware C2 via HTTP", "Web Browsing", "Patch Server", "NAT Gateway"],
    correctAnswer: "Malware C2 via HTTP",
    explanation:
      "Port 8080 is often used by malware for HTTP-based command and control channels, especially when combined with suspicious headers.",
  },
  {
    description: "You observe a burst of SMB traffic followed by remote process creation.",
    question: "What threat behavior is this?",
    options: ["Lateral Movement", "Command and Control", "Exfiltration", "Persistence"],
    correctAnswer: "Lateral Movement",
    explanation:
      "SMB traffic followed by remote process creation typically indicates lateral movement within a network.",
  },
  {
    description: "A single system is probing many others over port 135.",
    question: "Which behavior does this indicate?",
    options: ["Lateral Movement Preparation", "Persistence", "Data Collection", "Initial Access"],
    correctAnswer: "Lateral Movement Preparation",
    explanation:
      "Port 135 (used by DCOM) is scanned to discover services for lateral movement using RPC-based techniques.",
  },
  {
    description: "Anomalous outbound traffic to known C2 infrastructure is observed over HTTPS.",
    question: "What technique may be in use?",
    options: ["Encrypted C2 Channel", "VPN Tunnel", "Reverse Proxy", "AV Update"],
    correctAnswer: "Encrypted C2 Channel",
    explanation:
      "HTTPS (port 443) is frequently used for encrypted command and control communication to hide malicious traffic in normal web traffic.",
  },
  {
    description: "During threat hunting, you detect FTP traffic on port 2121.",
    question: "What might this suggest?",
    options: ["Unsecured File Transfer", "Backup Service", "SSH Tunnel", "DNS Query"],
    correctAnswer: "Unsecured File Transfer",
    explanation:
      "Port 2121 is a non-standard FTP port and could indicate an attempt to bypass standard firewall rules to exfiltrate files.",
  },
  {
    description: "Connections are detected to external IPs over port 22 during non-business hours.",
    question: "What activity could this represent?",
    options: ["SSH Tunneling", "RDP Session", "SMB Transfer", "VPN Keepalive"],
    correctAnswer: "SSH Tunneling",
    explanation:
      "Port 22 is used for SSH, and unexpected activity on it could suggest data exfiltration or remote access through SSH tunneling.",
  },
  {
    description: "A server not expected to browse the internet is seen sending traffic to port 443.",
    question: "What might this indicate?",
    options: ["Data Exfiltration", "Web Browsing", "Antivirus Update", "Time Sync"],
    correctAnswer: "Data Exfiltration",
    explanation:
      "Port 443 is for HTTPS, and outbound traffic from a server without web activity may suggest covert data exfiltration.",
  },
  {
    description: "Outbound TCP connections from an IoT device are detected over port 23.",
    question: "Which protocol is likely involved?",
    options: ["Telnet", "FTP", "SMTP", "SNMP"],
    correctAnswer: "Telnet",
    explanation:
      "Port 23 is used by Telnet, which is insecure and commonly exploited in IoT botnet infections like Mirai.",
  },
  {
    description: "You see internal traffic to port 1433 on multiple systems.",
    question: "What service is likely being accessed?",
    options: ["MSSQL", "MySQL", "PostgreSQL", "OracleDB"],
    correctAnswer: "MSSQL",
    explanation:
      "Port 1433 is the default for Microsoft SQL Server and may indicate legitimate database access or lateral movement probing.",
  },
  {
    description: "Outbound traffic is observed from multiple endpoints on port 25.",
    question: "What threat activity could this suggest?",
    options: ["Spam Relay via SMTP", "VPN Use", "NTP Sync", "Malware Update"],
    correctAnswer: "Spam Relay via SMTP",
    explanation:
      "Port 25 is used for SMTP. Multiple outbound connections may suggest compromised systems sending spam or phishing emails.",
  },
  {
    description: "Sudden spikes in traffic to port 3389 are observed.",
    question: "What service is likely being targeted?",
    options: ["Remote Desktop Protocol", "VPN", "Telnet", "FTP"],
    correctAnswer: "Remote Desktop Protocol",
    explanation:
      "Port 3389 is used by RDP, and spikes in traffic can indicate brute force attacks or unauthorized remote access attempts.",
  },
  {
    description: "A compromised system communicates to C2 servers over port 53 using TXT records.",
    question: "What technique is being used?",
    options: ["DNS Tunneling", "Beaconing", "Phishing", "SMB Relay"],
    correctAnswer: "DNS Tunneling",
    explanation:
      "Using DNS TXT records over port 53 for command and control is a stealthy data exfiltration technique known as DNS tunneling.",
  },
  {
    description: "Multiple connections to port 139 are detected across internal hosts.",
    question: "Which protocol is in use?",
    options: ["NetBIOS", "RDP", "HTTPS", "Telnet"],
    correctAnswer: "NetBIOS",
    explanation:
      "Port 139 is used by NetBIOS for legacy Windows file and printer sharing and may be leveraged in lateral movement.",
  },
  {
    description: "Anomalous outbound traffic to known C2 infrastructure is observed over HTTPS.",
    question: "What technique may be in use?",
    options: ["Encrypted C2 Channel", "VPN Tunnel", "Reverse Proxy", "AV Update"],
    correctAnswer: "Encrypted C2 Channel",
    explanation:
      "HTTPS (port 443) is frequently used for encrypted command and control communication to hide malicious traffic in normal web traffic.",
  },
  {
    description: "During threat hunting, you detect FTP traffic on port 2121.",
    question: "What might this suggest?",
    options: ["Unsecured File Transfer", "Backup Service", "SSH Tunnel", "DNS Query"],
    correctAnswer: "Unsecured File Transfer",
    explanation:
      "Port 2121 is a non-standard FTP port and could indicate an attempt to bypass standard firewall rules to exfiltrate files.",
  },
  {
    description: "Connections are detected to external IPs over port 22 during non-business hours.",
    question: "What activity could this represent?",
    options: ["SSH Tunneling", "RDP Session", "SMB Transfer", "VPN Keepalive"],
    correctAnswer: "SSH Tunneling",
    explanation:
      "Port 22 is used for SSH, and unexpected activity on it could suggest data exfiltration or remote access through SSH tunneling.",
  },
  {
    description: "A server not expected to browse the internet is seen sending traffic to port 443.",
    question: "What might this indicate?",
    options: ["Data Exfiltration", "Web Browsing", "Antivirus Update", "Time Sync"],
    correctAnswer: "Data Exfiltration",
    explanation:
      "Port 443 is for HTTPS, and outbound traffic from a server without web activity may suggest covert data exfiltration.",
  },
  {
    description: "Outbound TCP connections from an IoT device are detected over port 23.",
    question: "Which protocol is likely involved?",
    options: ["Telnet", "FTP", "SMTP", "SNMP"],
    correctAnswer: "Telnet",
    explanation:
      "Port 23 is used by Telnet, which is insecure and commonly exploited in IoT botnet infections like Mirai.",
  },
  {
    description: "You see internal traffic to port 1433 on multiple systems.",
    question: "What service is likely being accessed?",
    options: ["MSSQL", "MySQL", "PostgreSQL", "OracleDB"],
    correctAnswer: "MSSQL",
    explanation:
      "Port 1433 is the default for Microsoft SQL Server and may indicate legitimate database access or lateral movement probing.",
  },
  {
    description: "Outbound traffic is observed from multiple endpoints on port 25.",
    question: "What threat activity could this suggest?",
    options: ["Spam Relay via SMTP", "VPN Use", "NTP Sync", "Malware Update"],
    correctAnswer: "Spam Relay via SMTP",
    explanation:
      "Port 25 is used for SMTP. Multiple outbound connections may suggest compromised systems sending spam or phishing emails.",
  },
  {
    description: "Sudden spikes in traffic to port 3389 are observed.",
    question: "What service is likely being targeted?",
    options: ["Remote Desktop Protocol", "VPN", "Telnet", "FTP"],
    correctAnswer: "Remote Desktop Protocol",
    explanation:
      "Port 3389 is used by RDP, and spikes in traffic can indicate brute force attacks or unauthorized remote access attempts.",
  },
  {
    description: "A compromised system communicates to C2 servers over port 53 using TXT records.",
    question: "What technique is being used?",
    options: ["DNS Tunneling", "Beaconing", "Phishing", "SMB Relay"],
    correctAnswer: "DNS Tunneling",
    explanation:
      "Using DNS TXT records over port 53 for command and control is a stealthy data exfiltration technique known as DNS tunneling.",
  },
  {
    description: "Multiple connections to port 139 are detected across internal hosts.",
    question: "Which protocol is in use?",
    options: ["NetBIOS", "RDP", "HTTPS", "Telnet"],
    correctAnswer: "NetBIOS",
    explanation:
      "Port 139 is used by NetBIOS for legacy Windows file and printer sharing and may be leveraged in lateral movement.",
  },
  {
    description: "An attacker is exfiltrating data over port 443 using a fake SSL handshake.",
    question: "What is this tactic called?",
    options: ["Encrypted C2 Channel", "SSL Hijack", "Port Knocking", "Domain Fronting"],
    correctAnswer: "Encrypted C2 Channel",
    explanation:
      "This tactic uses SSL/TLS encryption to disguise malicious command and control (C2) traffic as legitimate secure traffic, allowing attackers to exfiltrate data without detection.",
  },
  {
    description: "You find traffic over port 69 originating from unknown devices.",
    question: "Which protocol is being used?",
    options: ["TFTP", "FTP", "SFTP", "Telnet"],
    correctAnswer: "TFTP",
    explanation:
      "Port 69 is used by the Trivial File Transfer Protocol (TFTP), which is an unsecured protocol used for simple file transfers, often in network booting or other minimal file transfer scenarios.",
  },
  {
    description: "A malware sample is seen communicating over port 4444.",
    question: "Which remote shell is known for using this port?",
    options: ["Metasploit", "Telnet", "Netcat", "VNC"],
    correctAnswer: "Metasploit",
    explanation:
      "Port 4444 is commonly associated with the Metasploit Framework, which is a popular penetration testing tool used to exploit vulnerabilities and establish a remote shell for attackers.",
  },
  {
    description: "Connections to port 3306 are being logged on a server with no database services.",
    question: "What might this suggest?",
    options: ["Scanning for MySQL", "Normal Web Traffic", "NTP Sync", "FTP Bruteforce"],
    correctAnswer: "Scanning for MySQL",
    explanation:
      "Port 3306 is typically used by MySQL database services. If no database is present on the server, connections to this port may indicate an attacker scanning for MySQL services or attempting to exploit vulnerabilities.",
  },
  {
    description: "Outbound connections over port 587 are initiated by multiple workstations.",
    question: "What might this indicate?",
    options: ["SMTP Email Relay", "DNS Lookup", "HTTPS Tunnel", "RDP Session"],
    correctAnswer: "SMTP Email Relay",
    explanation:
      "Port 587 is typically used for sending emails securely via the Simple Mail Transfer Protocol (SMTP). Multiple workstations initiating connections on this port could indicate the use of compromised machines for relaying spam emails.",
  },
  {
    description: "Suspicious traffic to port 500 is detected from a user device.",
    question: "Which service or protocol might be involved?",
    options: ["IPSec", "RDP", "FTP", "LDAP"],
    correctAnswer: "IPSec",
    explanation:
      "Port 500 is typically used by the Internet Protocol Security (IPSec) protocol for establishing secure communication tunnels, particularly for VPNs. Suspicious traffic on this port may indicate unauthorized VPN connections or attempts to bypass network security.",
  },
  {
    description: "Persistent external connections over port 1723 are discovered.",
    question: "Which VPN protocol uses this port?",
    options: ["PPTP", "OpenVPN", "L2TP", "WireGuard"],
    correctAnswer: "PPTP",
    explanation:
      "Port 1723 is associated with the Point-to-Point Tunneling Protocol (PPTP), which is an older and less secure VPN protocol. Persistent connections over this port may indicate ongoing VPN access, which could be legitimate or malicious.",
  },
  {
    description: "A new service is listening on port 3389 on a non-Windows system.",
    question: "What might this indicate?",
    options: ["RDP Honeypot or Misconfiguration", "SSH Tunnel", "FTP Daemon", "SNMP Collector"],
    correctAnswer: "RDP Honeypot or Misconfiguration",
    explanation:
      "Port 3389 is typically used by Remote Desktop Protocol (RDP) on Windows systems. If a non-Windows system is listening on this port, it could be an indication of a misconfigured service or a honeypot set up to attract and monitor attackers.",
  },
  {
    description: "Threat hunting finds connections to port 5900 from unusual IPs.",
    question: "What remote access protocol uses this port?",
    options: ["VNC", "SSH", "SMB", "RDP"],
    correctAnswer: "VNC",
    explanation:
      "Port 5900 is typically used by the Virtual Network Computing (VNC) protocol for remote desktop access. Unusual IP addresses attempting to connect to this port could indicate unauthorized access attempts.",
  },
  {
    description: "A spike in internal traffic to port 389 is observed.",
    question: "What service is likely being accessed?",
    options: ["LDAP", "Kerberos", "RDP", "NetBIOS"],
    correctAnswer: "LDAP",
    explanation:
      "Port 389 is commonly used by the Lightweight Directory Access Protocol (LDAP) for directory services. A spike in traffic could indicate an increase in LDAP queries or attempts to access sensitive directory information.",
  },
  {
    description: "Traffic is observed from multiple hosts to port 161.",
    question: "Which protocol is in use?",
    options: ["SNMP", "SSH", "FTP", "Telnet"],
    correctAnswer: "SNMP",
    explanation:
      "Port 161 is used by the Simple Network Management Protocol (SNMP), which is commonly used for managing and monitoring network devices. Traffic from multiple hosts to this port could indicate that devices are being queried or scanned for vulnerabilities.",
  },
  {
    description: "Port 443 is open, but the SSL certificate is self-signed and not issued by a known CA.",
    question: "What might this indicate?",
    options: ["Malicious HTTPS Server", "Internal Web Portal", "SSL Proxy", "Load Balancer"],
    correctAnswer: "Malicious HTTPS Server",
    explanation:
      "Port 443 is typically used for HTTPS traffic, and the presence of a self-signed certificate (rather than one from a trusted Certificate Authority) may indicate that the server is not legitimate and could be part of a malicious setup attempting to intercept or manipulate secure traffic.",
  },
  {
    description: "Port 5000 is actively accepting connections from the internet.",
    question: "What service is commonly associated with this port?",
    options: ["UPnP", "SMB", "DNS", "Kerberos"],
    correctAnswer: "UPnP",
    explanation:
      "Port 5000 is often used by Universal Plug and Play (UPnP) devices for automatic network configuration. If this port is open and accepting connections from the internet, it may indicate a vulnerability that could be exploited for unauthorized access.",
  },
  {
    description: "You detect command and control activity over port 53 using encoded DNS requests.",
    question: "What technique is being used?",
    options: ["DNS Tunneling", "Beaconing", "Passive DNS", "Zone Transfer"],
    correctAnswer: "DNS Tunneling",
    explanation:
      "DNS Tunneling involves encoding data within DNS queries, often using port 53, to bypass traditional network defenses. It is commonly used by attackers to exfiltrate data or communicate with compromised systems undetected.",
  },
  {
    description: "A malware campaign uses port 4443 to blend with HTTPS traffic.",
    question: "What is this an example of?",
    options: ["Port Mimicry", "DNS Hijacking", "ARP Spoofing", "Tor Routing"],
    correctAnswer: "Port Mimicry",
    explanation:
      "Port 4443 is often used to blend with HTTPS traffic, leveraging port mimicry to evade detection. By using a port commonly associated with secure traffic, attackers can avoid detection by traditional monitoring systems.",
  },
  {
    description: "Threat actors are exfiltrating data using HTTP POST requests on port 8081.",
    question: "Which behavior is this consistent with?",
    options: ["Covert Exfiltration Channel", "Web Proxying", "Tor Entry Node", "Fileless Malware"],
    correctAnswer: "Covert Exfiltration Channel",
    explanation:
      "Port 8081, typically used for HTTP traffic, may be exploited by attackers to create a covert exfiltration channel. This channel allows data to be transferred out of the network disguised as regular web traffic, helping avoid detection.",
  },
]
