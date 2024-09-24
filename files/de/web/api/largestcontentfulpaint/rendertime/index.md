---
title: "LargestContentfulPaint: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/LargestContentfulPaint/renderTime
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`renderTime`** des {{domxref("LargestContentfulPaint")}}-Interfaces repräsentiert die Zeit, zu der das Element auf dem Bildschirm gerendert wurde.

## Wert

Die `renderTime`-Eigenschaft kann folgende Werte haben:

- Ein {{domxref("DOMHighResTimeStamp","Zeitstempel")}}, der die Zeit in Millisekunden darstellt, zu der das Element auf dem Bildschirm gerendert wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Protokollierung der renderTime des größten inhaltlichen Elements

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der neue `largest-contentful-paint`-Performanceeinträge meldet, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log(lastEntry.renderTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit von Cross-Origin-Bildern

Aus Sicherheitsgründen hat die `renderTime`-Eigenschaft den Wert `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen wird die {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} angezeigt. Um Informationen zur Renderzeit von Cross-Origin-Ressourcen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, die `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie {{domxref("PerformanceEntry.startTime", "startTime")}} verwenden, welches den Wert der `renderTime` des Eintrags zurückgibt, wenn es nicht `0` ist, und ansonsten den Wert dieser Eintrags-{{domxref("LargestContentfulPaint.loadTime", "loadTime")}}. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
