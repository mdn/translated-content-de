---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Performance API")}}

Die **`PerformancePaintTiming`**-Schnittstelle liefert Zeitinformationen zu „Paint“-Vorgängen (auch „Render“-Vorgänge genannt) beim Aufbau einer Webseite. „Paint“ bezeichnet die Umwandlung des Render-Baums in Bildschirmpixel.

Diese API liefert Informationen zu zwei wichtigen Paint-Zeitpunkten:

- {{Glossary("First_Paint", "First Paint")}} (FP): Der Zeitpunkt, zu dem erstmals etwas dargestellt wird. Die Erfassung dieses Zeitpunkts ist optional; nicht alle User Agents melden ihn.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Der Zeitpunkt, zu dem erstmals {{Glossary("Contentful_paint", "inhaltstragender Inhalt")}} dargestellt wird – also der erste DOM-Text oder Bildinhalt.

Einen dritten wichtigen Paint-Zeitpunkt liefert die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API:

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP): Der Zeitpunkt, zu dem das größte im Viewport sichtbare Bild oder der größte Textblock dargestellt wird, gemessen ab dem Beginn des Seitenladens.

Die Daten dieser API helfen Ihnen, die Wartezeit zu verkürzen, bis Nutzer erste Inhalte der Website sehen können. Kürzere Zeiten bis zu diesen wichtigen Paint-Zeitpunkten lassen Websites reaktionsschneller, leistungsfähiger und ansprechender wirken.

Wie andere Performance-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle definiert direkt die folgenden Eigenschaften:

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erzeugten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Sie erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und legt deren Werte wie beschrieben fest:

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
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformancePaintTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Grundlegende Paint-Zeiten abrufen

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `paint`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Mit der Option `buffered` können Sie auch auf Einträge zugreifen, die vor der Erstellung des Observers erfasst wurden.

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

Dieses Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Die Methode zeigt nur die `paint`-Performance-Einträge an, die zum Zeitpunkt ihres Aufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

### Getrennte Paint- und Anzeigezeiten abrufen

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie die Zeitpunkte abrufen, zu denen die Paint-Phase beginnt beziehungsweise die erzeugten Pixel auf dem Bildschirm angezeigt werden. `paintTime` wird browserübergreifend weitgehend unterstützt, während `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem vorherigen Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) auf. Es zeigt, wie Sie die Unterstützung für `paintTime` und `presentationTime` prüfen und die Werte abrufen, sofern sie verfügbar sind. In Browsern, die diese Eigenschaften nicht unterstützen, ruft der Code `loadTime` ab.

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
