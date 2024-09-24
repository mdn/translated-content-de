---
title: "PerformanceNavigationTiming: criticalCHRestart-Eigenschaft"
short-title: criticalCHRestart
slug: Web/API/PerformanceNavigationTiming/criticalCHRestart
l10n:
  sourceCommit: 7999828f4c20f9d2062b20423dd8299ee8f64456
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Eine Webseite kann angeben, dass ein bestimmter [Client-Hint](/de/docs/Web/HTTP/Client_hints) für die Seite kritisch ist, indem sie ihn in einem {{HTTPHeader("Critical-CH")}} HTTP-Antwort-Header einschließt (sowie im {{HTTPHeader("Accept-CH")}} HTTP-Anfrage-Header, der für alle Client-Hints, ob kritisch oder nicht, erforderlich ist). Dadurch wird ein Verbindungsneustart ausgelöst, wenn der im `Critical-CH` HTTP-Antwort-Header aufgeführte Hinweis in der ursprünglich gesendeten HTTP-Anfrage hätte enthalten sein können, aber nicht war. Wenn der Browser diesen Client-Hint nicht unterstützt, wird er ignoriert und es erfolgt kein Verbindungsneustart.

Die schreibgeschützte Eigenschaft **`criticalCHRestart`** stellt die Zeit dar, zu der der Verbindungsneustart erfolgte.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Anzahl der Millisekunden darstellt, die seit {{domxref("PerformanceEntry.startTime")}} vergangen sind, als der Verbindungsneustart in Millisekunden erfolgte.

Wenn der Wert `0` ist, wurde die Verbindung nicht neu gestartet.

## Beispiele

### Erkennung von Seiten mit Verbindungsneustart

Das folgende JavaScript kann verwendet werden, um zu sehen, ob die Verbindung neu gestartet wurde:

```js
const restartTime =
  performance?.getEntriesByType?.("navigation")[0]?.criticalCHRestart;
if (restartTime > 0) {
  console.log("Zeitpunkt, zu dem der Verbindungsneustart erfolgte:", restartTime);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Critical-CH")}}
