---
title: Effective Connection Type
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{GlossarySidebar}}

Der **Effective Connection Type** (ECT) bezieht sich auf die gemessene Netzwerkleistung und liefert einen Mobilfunkverbindungstyp, wie 3G, auch wenn die tatsächliche Verbindung geteiltes Breitband oder WLAN ist. Dies basiert auf der Zeit zwischen der Anforderung einer Seite durch den Browser und dem effektiven Verbindungstyp.

Die Werte `slow-2g`, `2g`, `3g` und `4g` werden anhand beobachteter Round-Trip-Zeiten und Downlink-Werte ermittelt.

| ECT       | Minimum [RTT](/de/docs/Glossary/Round_Trip_Time) | Maximum Downlink | Erklärung                                                                                                  |
| --------- | ------------------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `slow-2g` | 2000ms                                           | 50 Kbps          | Das Netzwerk eignet sich nur für kleine Übertragungen, wie z. B. rein textbasierte Seiten.                 |
| `2g`      | 1400ms                                           | 70 Kbps          | Das Netzwerk eignet sich für die Übertragung kleiner Bilder.                                               |
| `3g`      | 270ms                                            | 700 Kbps         | Das Netzwerk eignet sich für die Übertragung großer Assets wie hochauflösender Bilder, Audio und SD-Video. |
| `4g`      | 0ms                                              | ∞                | Das Netzwerk eignet sich für HD-Videos, Echtzeitvideos usw.                                                |

[effectiveType](/de/docs/Web/API/NetworkInformation/effectiveType) ist eine Eigenschaft der [Network Information API](/de/docs/Web/API/Network_Information_API), die über das [navigator.connection](/de/docs/Web/API/Navigator/connection) Objekt in JavaScript verfügbar gemacht wird. Um Ihren effektiven Verbindungstyp zu sehen, öffnen Sie die Konsole der Entwicklertools eines unterstützenden Browsers und geben Sie Folgendes ein:

```js
navigator.connection.effectiveType;
```

## Siehe auch

- [Network Information API](/de/docs/Web/API/Network_Information_API)
- [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- {{HTTPHeader("ECT")}}
