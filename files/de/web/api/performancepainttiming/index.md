---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: ff2d2a411c10d5b8b6732a66e69d0b78842b44fe
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`**-Interface liefert Zeitinformationen über "Paint"-Operationen (auch "Render" genannt) während des Webseitenausbaus. "Paint" bezieht sich auf die Umwandlung des Renderbaums in Pixel auf dem Bildschirm.

Dieses API stellt zwei wichtige Paint-Momente bereit:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem etwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paints optional ist und nicht alle User Agents dies melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem der erste Teil des DOM-Textes oder Bildinhalts gerendert wird.

Ein dritter wichtiger Paint-Moment wird durch die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Renderzeit des größten sichtbaren Bild- oder Textblocks innerhalb des Ansichtsfensters, aufgezeichnet ab dem Moment, an dem die Seite mit dem Laden beginnt.

Die von diesem API bereitgestellten Daten helfen Ihnen, die Zeit zu minimieren, die Benutzer warten müssen, bevor der Inhalt der Website sichtbar wird. Die Verringerung der Zeit bis zu diesen wichtigen Paint-Momenten lässt Websites reaktionsschneller, leistungsfähiger und ansprechender für Ihre Benutzer erscheinen.

Wie andere Performance-APIs erweitert dieses API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface hat keine eigenen Eigenschaften, erweitert jedoch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es die Eigenschaften qualifiziert und einschränkt:

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

### Ermittlung von Paint-Zeiten

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `paint`-Performance-Einträge meldet, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Timeline des Browsers vorhanden sind:

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
