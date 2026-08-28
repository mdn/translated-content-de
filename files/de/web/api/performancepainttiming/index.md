---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`**-Interface bietet Zeitinformationen über "Paint" (auch "Render" genannt)-Operationen während des Aufbaus einer Webseite. "Paint" bezieht sich auf die Umwandlung des Render-Trees in On-Screen-Pixel.

Diese API liefert zwei wesentliche Paint-Momente:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass das Markieren des First Paint optional ist und nicht alle User-Agents dies melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem das erste {{Glossary("Contentful_paint", "contentful paint")}} — das erste Stück DOM-Text oder Bildinhalt gerendert wird.

Ein dritter wesentlicher Paint-Moment wird von der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Zeitpunkt des Renderings des größten Bild- oder Textblocks, der im Viewport sichtbar ist, und aufgezeichnet ab dem Zeitpunkt, zu dem die Seite zu laden beginnt.

Die von dieser API bereitgestellten Daten helfen Ihnen, die Wartezeit zu minimieren, die Benutzer in Kauf nehmen müssen, bevor sie den Inhalt der Website sehen können. Die Verkürzung der Zeit bis zu diesen Schlüssel-Paint-Momenten lässt Websites reaktionsschneller, leistungsfähiger und ansprechender für Ihre Benutzer erscheinen.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Rendering-Phase endete und die Paint-Phase begann.
- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es sie nachfolgend beschreibt und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann das Paint erfolgt ist.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt 0 zurück.

## Instanz-Methoden

- [`PerformancePaintTiming.toJSON()`](/de/docs/Web/API/PerformancePaintTiming/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Repräsentation des `PerformancePaintTiming`-Objekts zurückzugeben.

## Beispiele

### Grundlegende Paint-Timings erhalten

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint`-Performance-Einträge informiert, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `The time to ${entry.name} was ${entry.startTime} milliseconds.`,
    );
    // Logs "The time to first-paint was 386.7999999523163 milliseconds."
    // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
  });
});

observer.observe({ type: "paint", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint`-Performance-Einträge anzeigt, die in der Performance-Timeline des Browsers vorhanden sind, wenn diese Methode aufgerufen wird:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

### Separate Paint- und Präsentationszeitpunkte erhalten

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Zeiten für den Beginn der Paint-Phase und das Zeichnen der gemalten Pixel auf dem Bildschirm abzurufen. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem vorherigen [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)-Beispiel auf und zeigt, wie Sie die Unterstützung für `paintTime` und `presentationTime` überprüfen und diese Werte abrufen können, wenn sie verfügbar sind. In nicht unterstützten Browsern ruft der Code die `loadTime` ab.

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  if (entry.presentationTime) {
    console.log(
      "paintTime:",
      entry.paintTime,
      "presentationTime:",
      entry.presentationTime,
    );
  } else if (entry.paintTime) {
    console.log("paintTime:", entry.paintTime);
  } else {
    console.log("loadTime", entry.loadTime);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
