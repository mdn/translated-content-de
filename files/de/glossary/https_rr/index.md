---
title: HTTPS RR
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**HTTPS RR** (**_HTTPS Resource Records_**) sind eine Art von DNS-Eintrag, der Konfigurationsinformationen und Parameter bereitstellt, wie man auf einen Dienst über {{Glossary("HTTPS", "HTTPS")}} zugreift.

Ein _HTTPS RR_ kann verwendet werden, um den Prozess der Verbindung zu einem Dienst mittels HTTPS zu optimieren. Zudem signalisiert die Anwesenheit eines _HTTPS RR_, dass alle nützlichen {{Glossary("HTTP", "HTTP")}}-Ressourcen am Ursprung über HTTPS zugänglich sind, was wiederum bedeutet, dass ein Browser Verbindungen zur Domain sicher von HTTP auf HTTPS upgraden kann.

## Siehe auch

- {{RFC(9460, "Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records)")}}
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Blog von Emily M. Stark)
- Verwandte Glossarbegriffe:
  - {{Glossary("TLS", "TLS")}}
