---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`**-Interface bietet Zeitinformationen über "Paint"- (auch "Render" genannte) Operationen während der Konstruktion einer Webseite. "Paint" bezieht sich auf die Umwandlung des Renderbaums in auf dem Bildschirm angezeigte Pixel.

Dieses API liefert zwei wichtige Paint-Momente:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeit, wenn irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paints optional ist und nicht alle Benutzeragenten dies melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeit, wenn das erste DOM-Text- oder Bildinhaltsstück gerendert wird.

Ein dritter wichtiger Paint-Moment wird durch die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Renderzeit des größten sichtbaren Bildes oder Textblocks im Ansichtsfenster, aufgezeichnet ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die von dieser API bereitgestellten Daten helfen Ihnen, die Wartezeit der Nutzer zu minimieren, bevor sie den Inhalt der Website sehen können. Durch die Verkürzung der Zeit bis zu diesen wichtigen Paint-Momenten erscheinen Websites reaktionsschneller, leistungsfähiger und ansprechender für Ihre Nutzer.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface hat keine eigenen Eigenschaften, aber es erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es die Eigenschaften qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann das Paint aufgetreten ist.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt 0 zurück.

## Instanz-Methoden

Dieses Interface hat keine Methoden.

## Beispiele

### Abrufen von Paint-Zeitpunkten

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters erzeugt wurden.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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
