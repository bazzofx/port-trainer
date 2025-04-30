export const scenarioData: Scenario[] = [
  {
    "scenario": "You detect repeated authentication attempts over a secure shell connection. What port is being targeted?",
    "question": "Identify the abused port",
    "choices": ["22", "80", "443", "23"],
    "answer": "22",
    "explanation": "Port 22 is the default port used by SSH (Secure Shell) for encrypted remote login. Repeated authentication attempts may indicate a brute-force attack targeting this port."
  },
  {
    "scenario": "An attacker is exfiltrating data via a DNS tunneling technique. Which port is likely being misused?",
    "question": "Identify the port",
    "choices": ["53", "110", "143", "80"],
    "answer": "53",
    "explanation": "Port 53 is used for DNS (Domain Name System) traffic, and attackers often misuse it for DNS tunneling to exfiltrate data covertly by encoding it in DNS queries."
  },
  {
    "scenario": "A company experiences printer spoofing attacks on their legacy print servers. Which port is a likely target?",
    "question": "Choose the port",
    "choices": ["515", "25", "110", "161"],
    "answer": "515",
    "explanation": "Port 515 is used by the Line Printer Daemon (LPD) protocol for printing services. Printer spoofing attacks typically target this port on legacy print servers."
  },
  {
    "scenario": "A misconfigured SQL database is exposed to the public internet. Which port should you monitor?",
    "question": "Identify the port",
    "choices": ["3306", "389", "445", "21"],
    "answer": "3306",
    "explanation": "Port 3306 is the default port used by MySQL databases. Exposing this port to the public internet can result in unauthorized access if not properly secured."
  },
  {
    "scenario": "A remote attacker is trying to brute force access to the corporate email submission server. Which port is being used?",
    "question": "Select the port",
    "choices": ["587", "143", "993", "110"],
    "answer": "587",
    "explanation": "Port 587 is used for the submission of emails via SMTP (Simple Mail Transfer Protocol). It's commonly targeted in brute force attacks against email servers."
  },
  {
    "scenario": "Suspicious encrypted VoIP traffic is observed bypassing your SIP gateway. Which port is likely in use?",
    "question": "Identify the port",
    "choices": ["5061", "69", "443", "3389"],
    "answer": "5061",
    "explanation": "Port 5061 is used by SIP (Session Initiation Protocol) for secure (TLS-encrypted) communications. It may be used by attackers to bypass security filters for VoIP traffic."
  },
  {
    "scenario": "Your security scanner flags TFTP as enabled on a legacy device. Which port should you restrict?",
    "question": "Choose the port",
    "choices": ["69", "20", "67", "514"],
    "answer": "69",
    "explanation": "Port 69 is used by TFTP (Trivial File Transfer Protocol), which is an insecure protocol. TFTP is often flagged because it can be exploited by attackers to transfer files without authentication."
  },
  {
    "scenario": "A penetration tester gains shell access by exploiting an open RPC service. Which port might have been involved?",
    "question": "Identify the vulnerable port",
    "choices": ["111", "135", "443", "3389"],
    "answer": "111",
    "explanation": "Port 111 is used by the Remote Procedure Call (RPC) service. An open RPC service can be exploited by attackers to gain unauthorized access to systems."
  },
  {
    "scenario": "An IoT device is beaconing to port 161. What protocol is it likely using?",
    "question": "Select the protocol",
    "choices": ["SNMP", "LDAP", "SMTP", "RDP"],
    "answer": "SNMP",
    "explanation": "Port 161 is used by SNMP (Simple Network Management Protocol) for managing and monitoring network devices. IoT devices often use SNMP for reporting system status and statistics."
  },
  {
    "scenario": "Internal traffic shows devices requesting DHCP leases. What port is being used for server-to-client communication?",
    "question": "Choose the port",
    "choices": ["67", "68", "53", "445"],
    "answer": "67",
    "explanation": "Port 67 is used by the DHCP (Dynamic Host Configuration Protocol) server to listen for client requests. This port is critical for network devices to obtain IP addresses."
  },
  {
    "scenario": "An attacker tries to access a secure corporate email account over an encrypted IMAP connection. Which port would this use?",
    "question": "Identify the correct port",
    "choices": ["993", "143", "110", "995"],
    "answer": "993",
    "explanation": "Port 993 is used by IMAPS (IMAP Secure) for encrypted email retrieval. Attackers often attempt to exploit this port to gain unauthorized access to email accounts."
  },
  {
    "scenario": "You notice an open port on a remote device commonly used for POP3 email retrieval. Which port is this?",
    "question": "Select the service",
    "choices": ["110", "111", "150", "80"],
    "answer": "110",
    "explanation": "Port 110 is the default port for POP3 (Post Office Protocol version 3), which is used for retrieving emails from a mail server. It is vulnerable to interception if unencrypted."
  },
  {
    "scenario": "A security scan reveals that LDAPS is active on a domain controller. What port should be checked?",
    "question": "Choose the port",
    "choices": ["636", "389", "445", "22"],
    "answer": "636",
    "explanation": "Port 636 is used for LDAPS (LDAP Secure), which is a secure version of LDAP that encrypts traffic. If this service is active, it should be monitored for any unauthorized access attempts."
  },
  {
    "scenario": "An attacker is using a SOCKS proxy to tunnel traffic. What port might be in use?",
    "question": "Identify the port",
    "choices": ["1080", "80", "443", "53"],
    "answer": "1080",
    "explanation": "Port 1080 is commonly used for SOCKS proxies, which allow tunneling of traffic through a firewall or proxy server, often used for malicious purposes to evade detection."
  },
  {
    "scenario": "An exposed Microsoft SQL Server is found on the internet. Which port is open?",
    "question": "Choose the port",
    "choices": ["1433", "3306", "5432", "22"],
    "answer": "1433",
    "explanation": "Port 1433 is used by Microsoft SQL Server for database connections. An exposed port 1433 can allow attackers to exploit vulnerabilities in SQL Server."
  },
  {
    "scenario": "An attacker is abusing remote desktop services to connect to internal systems. What port should be blocked?",
    "question": "Identify the abused port",
    "choices": ["3389", "5900", "22", "139"],
    "answer": "3389",
    "explanation": "Port 3389 is used by Remote Desktop Protocol (RDP), which allows remote access to systems. Attackers often target this port to gain unauthorized access to internal systems."
  }
]

export type Scenario = {
  scenario: string
  question: string
  choices: string[]
  answer: string
  explanation?: string
}
