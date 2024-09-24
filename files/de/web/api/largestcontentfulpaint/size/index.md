---
title: "LargestContentfulPaint: Eigenschaft size"
short-title: Größe
slug: Web/API/LargestContentfulPaint/size
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`size`** der {{domxref("LargestContentfulPaint")}}-Schnittstelle gibt die intrinsische Größe des Elements zurück, das die größte inhaltsvolle Darstellung darstellt.

Die `size` des Elements ist das Produkt aus `width` und `height` des {{domxref("DOMRectReadOnly","Rechtecks")}}, das dieses Element auf dem Bildschirm erzeugt.

## Wert

Ein ganzzahliger Wert, der das Produkt aus Breite und Höhe des Elements darstellt.

## Beispiele

### Protokollierung der Größe des Elements mit der größten inhaltsvollen Darstellung

Dieses Beispiel nutzt einen {{domxref("PerformanceObserver")}}, der über neue `largest-contentful-paint`-Leistungseinträge benachrichtigt, wie sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log(lastEntry.size);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
