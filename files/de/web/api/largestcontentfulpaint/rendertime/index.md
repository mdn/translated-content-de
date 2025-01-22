---
title: "LargestContentfulPaint: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 9070ad78e5933064ce6b67eed53a62d5cf0cec83
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`renderTime`** des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interface repräsentiert die Zeit, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann die folgenden Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden darstellt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltsvollen Renderings

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Leistungseinträge benachrichtigt, während sie in der Leistungstimeline des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit von Cross-Origin-Bildern

Aus Sicherheitsgründen war der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen sollte die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)-Eigenschaft als Fallback verwendet werden.

Browser [könnten jetzt eine leicht grobkörnige Renderzeit offenlegen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Informationen zur Cross-Origin-Renderzeit offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` eine genaue `renderTime` anzuzeigen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert der `renderTime` des Eintrags zurückgibt, wenn dieser nicht `0` ist, und andernfalls den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten markieren, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
