---
title: "LargestContentfulPaint: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: 5d5f7a8f52ad9b21eb4b8f6dd9d0afce23d1bdf6
---

{{APIRef("Performance API")}}

Die **`renderTime`**-Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle repräsentiert die Zeit, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann die folgenden Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden darstellt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltsreichen Elements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint` Leistungsbeiträge benachrichtigt, wenn sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit für ein Cross-Origin-Bild

Aus Sicherheitsgründen war der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage war. Stattdessen sollte die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)-Eigenschaft als Fallback verwendet werden.

Browser [könnten jetzt eine leicht grob gerasterte Renderzeit anzeigen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeiten freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` eine genaue `renderTime` zu ermöglichen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, die den Wert der `renderTime`-Eintragung zurückgibt, wenn diese nicht `0` ist, und andernfalls den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieser Eintragung. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
