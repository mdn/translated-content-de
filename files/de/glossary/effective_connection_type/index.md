---
title: Effektiver Verbindungstyp
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Effektiver Verbindungstyp** (ECT) bezieht sich auf die gemessene Netzwerkleistung und gibt einen zellulären Verbindungstyp zurück, wie 3G, selbst wenn die tatsächliche Verbindung ein gekoppeltes Breitband oder Wi-Fi ist, basierend auf der Zeit zwischen der Anforderung einer Seite durch den Browser und dem effektiven Verbindungstyp.

Die Werte `slow-2g`, `2g`, `3g` und `4g` werden unter Verwendung beobachteter Round-Trip-Zeiten und Downlink-Werte bestimmt.

| ECT       | Mindest-{{Glossary("Round_Trip_Time", "RTT")}} | Maximaler Downlink | Erklärung                                                                                                     |
| --------- | ---------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `slow-2g` | 2000ms                                         | 50 Kbps            | Das Netzwerk eignet sich nur für kleine Übertragungen, wie z.B. text-only Seiten.                             |
| `2g`      | 1400ms                                         | 70 Kbps            | Das Netzwerk eignet sich für die Übertragung kleiner Bilder.                                                  |
| `3g`      | 270ms                                          | 700 Kbps           | Das Netzwerk eignet sich für die Übertragung großer Ressourcen wie hochauflösende Bilder, Audio und SD-Video. |
| `4g`      | 0ms                                            | ∞                  | Das Netzwerk eignet sich für HD-Video, Echtzeit-Video usw.                                                    |

[effectiveType](/de/docs/Web/API/NetworkInformation/effectiveType) ist eine Eigenschaft der [Network Information API](/de/docs/Web/API/Network_Information_API), die über das [navigator.connection](/de/docs/Web/API/Navigator/connection)-Objekt in JavaScript zugänglich ist. Um Ihren effektiven Verbindungstyp zu sehen, öffnen Sie die Konsole der Entwickler-Tools eines unterstützenden Browsers und geben Sie Folgendes ein:

```js
navigator.connection.effectiveType;
```

## Siehe auch

- [Network Information API](/de/docs/Web/API/Network_Information_API)
- [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)
- {{HTTPHeader("ECT")}}
