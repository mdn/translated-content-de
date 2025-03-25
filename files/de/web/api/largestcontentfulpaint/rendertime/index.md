---
title: "LargestContentfulPaint: Eigenschaft renderTime"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Performance API")}}

Die **`renderTime`**-Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Zeit angibt, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann folgende Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden angibt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltsreichen Paints

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erzeugung des Observers existierten.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Render-Zeit eines Cross-Origin-Bildes

Aus Sicherheitsgründen war der Wert der `renderTime`-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage war. Stattdessen sollte die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)-Eigenschaft als Fallback verwendet werden.

Browser [können jetzt möglicherweise eine leicht grobere Render-Zeit anzeigen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

Um genauere Cross-Origin-Render-Zeit-Informationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` die genaue `renderTime` sehen zu lassen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, welches den Wert der `renderTime` dieses Eintrags zurückgibt, wenn er nicht `0` ist, und andernfalls den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie jede Ungenauigkeit kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
