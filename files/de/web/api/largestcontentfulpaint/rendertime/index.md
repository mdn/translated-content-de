---
title: "LargestContentfulPaint: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die **`renderTime`**-Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Zeit darstellt, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann folgende Werte haben:

- Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden darstellt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltsvollen Elements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Leistungseinträge informiert, wenn sie in der Performance-Timeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit eines Cross-Origin-Bildes

Aus Sicherheitsgründen ist der Wert der `renderTime`-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen wird die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) angezeigt. Um Informationen zur Renderzeit bei Cross-Origin freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Einsicht in `renderTime` zu ermöglichen, folgende Rückmeldung senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert der `renderTime` zurückgibt, wenn er nicht `0` ist, und ansonsten den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie jegliche Ungenauigkeiten markieren, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
