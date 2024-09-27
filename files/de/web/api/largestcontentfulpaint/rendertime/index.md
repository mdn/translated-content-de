---
title: "LargestContentfulPaint: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`renderTime`** des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces repräsentiert den Zeitpunkt, zu dem das Element auf dem Bildschirm gerendert wurde.

## Wert

Die Eigenschaft `renderTime` kann die folgenden Werte annehmen:

- Einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt in Millisekunden darstellt, zu dem das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltsvollen Paints

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performanceeinträge benachrichtigt, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit von Cross-Origin-Bildern

Aus Sicherheitsgründen hat die `renderTime`-Eigenschaft den Wert `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen wird die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) angezeigt. Um Informationen zur Renderzeit von Cross-Origin-Ressourcen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Anzeigen von `renderTime` zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, welches den Wert der `renderTime` dieses Eintrags zurückgibt, wenn dieser nicht `0` ist, und ansonsten den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten markieren, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
