---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}

Das **`PerformancePaintTiming`**-Interface liefert Zeitinformationen zu „Paint“-Vorgängen (auch „Render“-Vorgänge genannt) beim Aufbau einer Webseite. „Paint“ bezeichnet die Umwandlung des Render-Baums in Pixel auf dem Bildschirm.

Diese API liefert Informationen zu zwei wichtigen Paint-Zeitpunkten:

- {{Glossary("First_Paint", "First Paint")}} (FP): Der Zeitpunkt, zu dem erstmals etwas gerendert wird. Die Erfassung des First Paint ist optional; nicht alle User Agents melden ihn.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Der Zeitpunkt des ersten {{Glossary("Contentful_paint", "Contentful Paint")}} – wenn erstmals DOM-Text oder Bildinhalt gerendert wird.

Ein dritter wichtiger Paint-Zeitpunkt wird von der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API bereitgestellt:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Der Zeitpunkt, zu dem das größte im Viewport sichtbare Bild oder der größte Textblock gerendert wird, gemessen ab dem Beginn des Seitenladevorgangs.

Die von dieser API bereitgestellten Daten helfen Ihnen, die Wartezeit zu verkürzen, bis Nutzer die ersten Inhalte der Website sehen können. Wenn Sie die Zeit bis zu diesen wichtigen Paint-Zeitpunkten verkürzen, wirkt die Website auf Ihre Nutzer reaktionsschneller, leistungsfähiger und ansprechender.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erzeugten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Außerdem erweitert es die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und legt deren Werte wie beschrieben fest:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt entweder `"first-paint"` oder `"first-contentful-paint"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem der Paint-Vorgang stattfand.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt 0 zurück.

## Instanzmethoden

- [`PerformancePaintTiming.toJSON()`](/de/docs/Web/API/PerformancePaintTiming/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformancePaintTiming`-Objekt darstellt. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

### Grundlegende Paint-Zeitpunkte ermitteln

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auch auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

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

Dieses Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Die Methode zeigt nur `paint`-Performance-Einträge an, die zum Zeitpunkt des Aufrufs in der Performance-Timeline des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

### Separate Zeitpunkte für Paint und Darstellung ermitteln

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie die Zeitpunkte für den Beginn der Paint-Phase und für das Zeichnen der erzeugten Pixel auf dem Bildschirm getrennt abrufen. `paintTime` ist weitgehend interoperabel, während `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem vorherigen Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) auf. Es zeigt, wie Sie prüfen, ob `paintTime` und `presentationTime` unterstützt werden, und die Werte abrufen, falls sie verfügbar sind. In Browsern, die diese Eigenschaften nicht unterstützen, ruft der Code `loadTime` ab.

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

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
