---
title: "LargestContentfulPaint: Eigenschaft renderTime"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 6e96f90bcaf87173bae82bde6f04c61d0bb21119
---

{{APIRef("Performance API")}}

Die **`renderTime`**-Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces ist eine schreibgeschützte Eigenschaft und repräsentiert die Zeit, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann folgende Werte annehmen:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden darstellt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0` oder ein gekrümmter [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

### Cross-Origin-Bild-Renderzeit

Aus Sicherheitsgründen war der Wert der `renderTime`-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist.

Browser [können jetzt eine leicht veränderte Renderzeit ausgeben](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Informationen zur Renderzeit von Cross-Origin-Ressourcen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Beispielsweise sollte die Cross-Origin-Ressource senden, um `https://developer.mozilla.org` eine genaue `renderTime` zu ermöglichen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

### Verwenden Sie `startTime` anstelle von `renderTime`

Unabhängig von der Genauigkeit der `renderTime` sollten Entwickler [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) anstelle von `renderTime` als LCP-Zeit verwenden. Dies gibt den Wert von des Eintrags [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) zurück, wenn er nicht `0` ist, und ansonsten den Wert dieses Eintrags [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime), wodurch die Notwendigkeit entfällt, 0-Werte für Browser zu überprüfen, die dies nicht unterstützen.

## Beispiele

### Protokollierung der renderTime des größten inhaltsvollen Paint

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint` Leistungs-Einträge informiert, sobald sie in der Leistungs-Timeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
