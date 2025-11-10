---
title: HTTPS RR
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**HTTPS RR** (**_HTTPS Resource Records_**) sind eine Art von DNS-Eintrag, der Konfigurationsinformationen und Parameter bereitstellt, wie ein Dienst über {{Glossary("HTTPS", "HTTPS")}} zugänglich ist.

Ein _HTTPS RR_ kann verwendet werden, um den Verbindungsprozess zu einem Dienst über HTTPS zu optimieren. Zudem signalisiert das Vorhandensein eines _HTTPS RR_, dass alle nützlichen {{Glossary("HTTP", "HTTP")}}-Ressourcen auf dem Ursprung über HTTPS erreichbar sind, was wiederum bedeutet, dass ein Browser Verbindungen zur Domain sicher von HTTP auf HTTPS upgraden kann.

### Siehe auch

- {{RFC(9460, "Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records)")}}
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark Blog)
- Verwandte Glossarbegriffe:
  - {{Glossary("TLS", "TLS")}}
