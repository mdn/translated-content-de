---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`PerformancePaintTiming`**-Schnittstelle bietet Zeitinformationen über "Paint"-Operationen (auch "Render"-Operationen genannt) während der Erstellung einer Webseite. "Paint" bezieht sich auf die Umwandlung des Render-Baums in die Pixel auf dem Bildschirm.

Diese API bietet zwei wichtige Paint-Momente:

- [Erster Paint](/de/docs/Glossary/First_paint) (FP): Zeitpunkt, an dem irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paint optional ist und nicht alle User-Agents es melden.
- [Erster inhaltsvoller Paint](/de/docs/Glossary/First_contentful_paint) (FCP): Zeitpunkt, an dem das erste DOM-Text- oder Bildinhalt gerendert wird.

Ein dritter wichtiger Paint-Moment wird durch die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API bereitgestellt:

- [Größter inhaltsvoller Paint](/de/docs/Glossary/Largest_contentful_paint) (LCP): Renderzeit des größten Bild- oder Textblocks, der innerhalb des Ansichtsfensters sichtbar ist, aufgezeichnet ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die von dieser API bereitgestellten Daten helfen Ihnen, die Zeit zu minimieren, die Benutzer warten müssen, bevor sie sehen können, dass der Inhalt der Website zu erscheinen beginnt. Die Verringerung der Zeit bis zu diesen wichtigen Paint-Momenten lässt Websites reaktionsschneller, leistungsfähiger und ansprechender für Ihre Benutzer erscheinen.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle hat keine eigenen Eigenschaften, aber sie erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Paint aufgetreten ist.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt 0 zurück.

## Instanz-Methoden

Diese Schnittstelle hat keine Methoden.

## Beispiele

### Erhalten von Paint-Timings

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint` Performance Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint` Performance Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
