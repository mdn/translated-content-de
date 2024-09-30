---
title: "PerformanceNavigationTiming: criticalCHRestart-Eigenschaft"
short-title: criticalCHRestart
slug: Web/API/PerformanceNavigationTiming/criticalCHRestart
l10n:
  sourceCommit: 7999828f4c20f9d2062b20423dd8299ee8f64456
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Eine Website kann darauf hinweisen, dass ein bestimmter [Client Hint](/de/docs/Web/HTTP/Client_hints) für die Seite kritisch ist, indem sie ihn in einem {{HTTPHeader("Critical-CH")}} HTTP-Antwortheader (sowie im {{HTTPHeader("Accept-CH")}} HTTP-Anforderungsheader, der für alle Client Hints benötigt wird, ob kritisch oder nicht) angibt. Dadurch wird ein Verbindungsneustart ausgelöst, wenn der im `Critical-CH` HTTP-Antwortheader aufgeführte Hinweis beim ursprünglich gesendeten HTTP-Anforderung hätte enthalten sein können, es aber nicht war. Wenn der Browser diesen Client Hint nicht unterstützt, wird er ignoriert und es erfolgt kein Verbindungsneustart.

Die schreibgeschützte Eigenschaft **`criticalCHRestart`** repräsentiert den Zeitpunkt, zu dem der Verbindungsneustart erfolgt ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Anzahl der Millisekunden angibt, die seit dem [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) vergangen sind, als der Verbindungsneustart in Millisekunden erfolgt ist.

Wenn der Wert `0` ist, wurde die Verbindung nicht neu gestartet.

## Beispiele

### Erkennung von Verbindungsneustartseiten

Das folgende JavaScript kann verwendet werden, um festzustellen, ob die Verbindung neu gestartet wurde:

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

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Critical-CH")}}
