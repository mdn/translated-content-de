---
title: HTTPS RR
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 6da9bb0a8828fe3cb8373f793c58ea57b98afb65
---

{{GlossarySidebar}}

**HTTPS RR** (**_HTTPS Resource Records_**) sind eine Art von DNS-Einträgen, die Konfigurationsinformationen und Parameter dafür bereitstellen, wie man auf einen Dienst über [HTTPS](/de/docs/Glossary/HTTPS) zugreift.

Ein _HTTPS RR_ kann verwendet werden, um den Prozess der Verbindung zu einem Dienst über HTTPS zu optimieren. Darüber hinaus signalisiert das Vorhandensein eines _HTTPS RR_, dass alle nützlichen [HTTP](/de/docs/Glossary/HTTP)-Ressourcen auf dem Ursprungsserver über HTTPS erreichbar sind, was wiederum bedeutet, dass ein Browser Verbindungen zur Domain sicher von HTTP auf HTTPS hochstufen kann.

### Siehe auch

- {{RFC(9460, "Service Binding and Parameter Specification via the DNS (SVCB and HTTPS Resource Records)")}}
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark Blog)
- Verwandte Glossarbegriffe:
  - [TLS](/de/docs/Glossary/TLS)
