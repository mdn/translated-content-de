---
title: "LargestContentfulPaint: renderTime Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{APIRef("Performance API")}}

Die **`renderTime`**-Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Zeitpunkt darstellt, zu dem das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann folgende Werte annehmen:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt in Millisekunden darstellt, zu dem das Element auf dem Bildschirm gerendert wurde.
- `0` oder ein groberer [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

### Renderzeit für Cross-Origin-Bilder

Aus Sicherheitsgründen war der Wert der `renderTime`-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist.

Browser [könnten jetzt eine leicht geraue Renderzeit](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen offenlegen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Informationen zur Cross-Origin-Renderzeit offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Beispielsweise sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, eine genaue `renderTime` zu sehen, Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

### Verwenden Sie `startTime` über `renderTime`

Unabhängig von der Genauigkeit der `renderTime` sollten Entwickler [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) über `renderTime` als LCP-Zeit verwenden. Dies gibt den Wert der `renderTime` des Eintrags zurück, wenn dieser nicht `0` ist, und ansonsten den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags, sodass die Notwendigkeit entfällt, auf 0-Werte für nicht unterstützende Browser zu prüfen.

## Beispiele

### Protokollierung der renderTime des largest contentful paint

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performanceeinträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
