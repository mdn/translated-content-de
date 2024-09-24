---
title: Effektiver Verbindungstyp
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Effektiver Verbindungstyp** (ECT) bezieht sich auf die gemessene Netzwerkleistung und gibt einen zellularen Verbindungstyp zurück, wie z.B. 3G, selbst wenn die tatsächliche Verbindung geteiltes Breitband oder WLAN ist. Dies basiert auf der Zeit zwischen dem Anfordern einer Seite durch den Browser und dem effektiven Verbindungstyp.

Die Werte von '`slow-2g`', '`2g`', '`3g`' und '`4g`' werden anhand der beobachteten Round-Trip-Zeiten (RTT) und Downlink-Werten bestimmt.

| ECT       | Minimale {{Glossary("Round Trip Time", "RTT")}} | Maximale Downlink | Erklärung                                                                                                 |
| --------- | ------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------- |
| `slow-2g` | 2000ms                                           | 50 Kbps           | Das Netzwerk eignet sich nur für kleine Übertragungen, wie z.B. nur Textseiten.                           |
| `2g`      | 1400ms                                           | 70 Kbps           | Das Netzwerk eignet sich für die Übertragung kleiner Bilder.                                              |
| `3g`      | 270ms                                            | 700 Kbps          | Das Netzwerk eignet sich für die Übertragung großer Dateien wie hochauflösende Bilder, Audio und SD-Video. |
| `4g`      | 0ms                                              | ∞                 | Das Netzwerk eignet sich für HD-Video, Echtzeit-Video, etc.                                               |

[effectiveType](/de/docs/Web/API/NetworkInformation/effectiveType) ist eine Eigenschaft der [Network Information API](/de/docs/Web/API/Network_Information_API), die über das [navigator.connection](/de/docs/Web/API/Navigator/connection)-Objekt in JavaScript verfügbar ist. Um Ihren effektiven Verbindungstyp zu sehen, öffnen Sie die Konsole der Entwicklertools eines unterstützenden Browsers und geben Sie Folgendes ein:

```js
navigator.connection.effectiveType;
```

## Siehe auch

- [Network Information API](/de/docs/Web/API/Network_Information_API)
- {{domxref('NetworkInformation')}}
- {{domxref('NetworkInformation.effectiveType')}}
- {{HTTPHeader("ECT")}}
