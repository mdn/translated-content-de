---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`**-Interface liefert Timing-Informationen über "Paint"- (auch "Render"-) Operationen während des Aufbaus einer Webseite. "Paint" bezieht sich auf die Umwandlung des Renderbaums in auf dem Bildschirm sichtbare Pixel.

Dieses API stellt zwei wichtige Paint-Momente zur Verfügung:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass die Kennzeichnung des ersten Paint optional ist, nicht alle Benutzeragenten berichten darüber.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem das erste Stück DOM-Text oder Bildinhalt gerendert wird.

Ein dritter wichtiger Paint-Moment wird von der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Renderzeit des größten Bildes oder Textblocks, der im sichtbaren Bereich angezeigt wird, gemessen ab dem Zeitpunkt, zu dem die Seite mit dem Laden beginnt.

Die von diesem API bereitgestellten Daten helfen Ihnen, die Zeit zu minimieren, die Benutzer warten müssen, bevor sie den Inhalt der Seite sehen können. Die Verringerung der Zeit bis zu diesen wichtigen Paint-Momenten lässt Websites für Ihre Benutzer reaktionsschneller, leistungsfähiger und ansprechender erscheinen.

Wie andere Performance-APIs erweitert auch diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Paint-Phase begann.
- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, wobei sie sie qualifiziert und einschränkt, wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann der Paint stattfand.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt 0 zurück.

## Instanz-Methoden

- [`PerformancePaintTiming.toJSON()`](/de/docs/Web/API/PerformancePaintTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformancePaintTiming`-Objekts zurück.

## Beispiele

### Grundlegende Paint-Timings abrufen

Ein Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `paint`-Performance-Einträge in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Ein Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `paint`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

### Getrennte Paint- und Präsentationstiming abrufen

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Zeitwerte für den Beginn der Paint-Phase und das Zeichnen der gemalten Pixel auf dem Bildschirm abzurufen. `paintTime` ist generell interoperabel, während `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem zuvor gezeigten Beispiel [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) auf und zeigt, wie Sie die Unterstützung für `paintTime` und `presentationTime` überprüfen und diese Werte abrufen können, falls sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `loadTime` ab.

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
