---
title: DNS über HTTPS (DoH)
slug: Glossary/DNS_over_HTTPS
l10n:
  sourceCommit: d16bfe6576f65ef78054220783d97fb49194231c
---

**DNS über HTTPS** (**DoH**) ist ein Protokoll zur Durchführung der {{Glossary("DNS", "DNS")}}-Auflösung über eine verschlüsselte {{Glossary("HTTPS", "HTTPS")}}-Verbindung. Anstatt Abfragen und Antworten im Klartext zu senden, werden diese in HTTPS-Anfragen eingebettet, was verhindert, dass zwischengeschaltete Parteien die Domainnamen, die ein Client aufruft, lesen oder verändern können.

Traditioneller DNS-Verkehr ist unverschlüsselt, sodass Netzbetreiber und andere Beobachter sehen können, welche Hostnamen ein Benutzer auflöst, und die Antworten manipulieren können. Durch die Verschlüsselung dieses Datenverkehrs und die Nutzung des standardmäßigen HTTPS-Ports (443) verbessert DoH die Privatsphäre und Integrität der Namensauflösung und macht DNS-Abfragen schwieriger von anderem Webverkehr zu unterscheiden.

## Siehe auch

- {{RFC(8484, "DNS Queries over HTTPS (DoH)")}}
- [DNS über HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("DNS", "DNS")}}
  - {{Glossary("HTTPS", "HTTPS")}}
  - {{Glossary("TLS", "TLS")}}
