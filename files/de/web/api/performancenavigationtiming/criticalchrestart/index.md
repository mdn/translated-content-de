---
title: "PerformanceNavigationTiming: criticalCHRestart-Eigenschaft"
short-title: criticalCHRestart
slug: Web/API/PerformanceNavigationTiming/criticalCHRestart
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Eine Website kann angeben, dass ein bestimmter [Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints) für die Seite kritisch ist, indem sie ihn in einem {{HTTPHeader("Critical-CH")}} HTTP-Antwort-Header (sowie im {{HTTPHeader("Accept-CH")}} HTTP-Anfrage-Header, der für alle Client-Hints erforderlich ist, ob kritisch oder nicht) angibt. Dadurch wird ein Verbindungsneustart ausgelöst, wenn der im `Critical-CH` HTTP-Antwort-Header aufgeführte Hinweis in der ursprünglich gesendeten HTTP-Anfrage hätte enthalten sein können, es aber nicht war. Wenn der Browser diesen Client-Hint nicht unterstützt, wird er ignoriert und es erfolgt kein Verbindungsneustart.

Die **`criticalCHRestart`**-Schreibgeschützte Eigenschaft repräsentiert den Zeitpunkt, zu dem der Verbindungsneustart stattgefunden hat.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Anzahl der Millisekunden seit [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt, als der Verbindungsneustart in Millisekunden stattfand.

Wenn der Wert `0` ist, wurde die Verbindung nicht neu gestartet.

## Beispiele

### Erkennen von Verbindungsneustart-Seiten

Das folgende JavaScript kann verwendet werden, um zu überprüfen, ob die Verbindung neu gestartet wurde:

```js
const restartTime =
  performance?.getEntriesByType?.("navigation")[0]?.criticalCHRestart;
if (restartTime > 0) {
  console.log("Time at which connection restart happened:", restartTime);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Critical-CH")}}
