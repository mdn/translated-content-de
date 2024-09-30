---
title: Effective connection type
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{GlossarySidebar}}

**Effective connection type** (ECT) bezieht sich auf die gemessene Netzwerkleistung und gibt einen zellulären Verbindungstyp wie 3G zurück, selbst wenn die tatsächliche Verbindung getetherte Breitbandverbindung oder Wi-Fi ist, basierend auf der Zeit zwischen dem Anfordern einer Seite durch den Browser und dem effektiven Verbindungstyp.

Die Werte von `slow-2g`, `2g`, `3g`, und `4g` werden anhand der beobachteten Round-Trip-Zeiten und Downlink-Werte bestimmt.

| ECT       | Minimum [RTT](/de/docs/Glossary/Round_Trip_Time) | Maximum Downlink | Erklärung                                                                                     |
| --------- | ---------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| `slow-2g` | 2000ms                                         | 50 Kbps          | Das Netzwerk ist nur für kleine Übertragungen geeignet, wie textbasierte Seiten.             |
| `2g`      | 1400ms                                         | 70 Kbps          | Das Netzwerk ist für kleine Bildübertragungen geeignet.                                      |
| `3g`      | 270ms                                          | 700 Kbps         | Das Netzwerk ist für die Übertragung großer Dateien geeignet, z.B. hochauflösende Bilder, Audio und SD-Video. |
| `4g`      | 0ms                                            | ∞                | Das Netzwerk ist für HD-Video, Echtzeitvideo usw. geeignet.                                  |

[effectiveType](/de/docs/Web/API/NetworkInformation/effectiveType) ist eine Eigenschaft der [Network Information API](/de/docs/Web/API/Network_Information_API), die über das [navigator.connection](/de/docs/Web/API/Navigator/connection) Objekt in JavaScript verfügbar ist. Um Ihren effektiven Verbindungstyp zu sehen, öffnen Sie die Konsole der Entwicklerwerkzeuge eines unterstützenden Browsers und geben Sie Folgendes ein:

```js
navigator.connection.effectiveType;
```

## Siehe auch

- [Network Information API](/de/docs/Web/API/Network_Information_API)
- [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- {{HTTPHeader("ECT")}}
