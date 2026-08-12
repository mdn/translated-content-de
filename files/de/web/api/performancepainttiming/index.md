---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`** Interface liefert Timing-Informationen über sogenannte "Paint" (auch "Render"-) Operationen während der Erstellung einer Webseite. "Paint" bezieht sich auf die Umwandlung des Renderbaums in auf dem Bildschirm sichtbare Pixel.

Diese API bietet zwei zentrale Paint-Momente:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paint optional ist und nicht alle Benutzeragenten diese melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem der erste {{Glossary("Contentful_paint", "Contentful Paint")}} — das erste Stück DOM-Text- oder Bildinhalt gerendert wird.

Ein dritter zentraler Paint-Moment wird von der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Renderzeit des größten Bildes oder Textblocks, der im Viewport sichtbar ist, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die von dieser API bereitgestellten Daten helfen Ihnen, die Zeit zu minimieren, die Benutzer warten müssen, bevor sie den ersten Inhalt der Seite sehen können. Eine Reduzierung der Zeit bis zu diesen zentralen Paint-Momenten lässt Seiten reaktionsfähiger, leistungsfähiger und ansprechender für Ihre Benutzer erscheinen.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gemalten Pixel tatsächlich auf den Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Paint erfolgte.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt 0 zurück.

## Instanz-Methoden

- [`PerformancePaintTiming.toJSON()`](/de/docs/Web/API/PerformancePaintTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformancePaintTiming`-Objekts zurück.

## Beispiele

### Grundlegende Paint-Timings abrufen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint` Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered` Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

### Separate Paint- und Präsentationstiming abrufen

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Zeiten für den Beginn der Paint-Phase und das Zeichnen der gemalten Pixel auf dem Bildschirm zu erfassen. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` implementationsabhängig ist.

Dieses Beispiel baut auf dem früheren Beispiel [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) auf und zeigt, wie Sie prüfen können, ob `paintTime` und `presentationTime` unterstützt werden und diese Werte abrufen, wenn sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `loadTime` ab.

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
