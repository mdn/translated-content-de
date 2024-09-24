---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`PerformancePaintTiming`** Schnittstelle bietet Zeitinformationen über "Paint"- (auch "Render"-) Operationen während des Aufbaus einer Webseite. "Paint" bezieht sich auf die Umwandlung des Renderbaums in Bildschirmpixel.

Es gibt zwei wichtige Paint-Momente, die diese API bereitstellt:

- {{Glossary("First paint")}} (FP): Zeitpunkt, an dem irgendetwas gerendert wird. Beachten Sie, dass das Markieren des ersten Paints optional ist und nicht alle User Agents berichten es.
- {{Glossary("First contentful paint")}} (FCP): Zeitpunkt, an dem der erste Teil von DOM-Text oder Bildinhalt gerendert wird.

Ein dritter wichtiger Paint-Moment wird von der {{domxref("LargestContentfulPaint")}} API bereitgestellt:

- {{Glossary("Largest contentful paint")}} (LCP): Renderzeit des größten Bild- oder Textblocks, der innerhalb des Viewports sichtbar ist, aufgezeichnet ab dem Zeitpunkt, an dem die Seite erstmals zu laden beginnt.

Die Daten, die diese API bereitstellt, helfen Ihnen, die Zeit zu minimieren, die Benutzer warten müssen, bevor der Inhalt der Webseite zu erscheinen beginnt. Die Verringerung der Zeit bis zu diesen wichtigen Paint-Momenten lässt Webseiten reaktionsschneller, leistungsfähiger und ansprechender für Ihre Benutzer erscheinen.

Wie andere Performance-APIs erweitert diese API {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle hat keine eigenen Eigenschaften, aber sie erweitert die folgenden Eigenschaften von {{domxref("PerformanceEntry")}} durch Qualifizierung und Einschränkung wie folgt:

- {{domxref("PerformanceEntry.entryType")}}
  - : Gibt "`paint`" zurück.
- {{domxref("PerformanceEntry.name")}}
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- {{domxref("PerformanceEntry.startTime")}}
  - : Gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, zu dem das Paint auftrat.
- {{domxref("PerformanceEntry.duration")}}
  - : Gibt 0 zurück.

## Instanz-Methoden

Diese Schnittstelle hat keine Methoden.

## Beispiele

### Erhalten von Paint-Timings

Beispiel unter Verwendung eines {{domxref("PerformanceObserver")}}, der über neue `paint` Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers existieren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `paint` Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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

- {{domxref("LargestContentfulPaint")}}
