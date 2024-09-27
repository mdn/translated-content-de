---
title: VisibilityStateEntry
slug: Web/API/VisibilityStateEntry
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}{{seecompattable}}

Das **`VisibilityStateEntry`** Interface liefert Zeitmessungen für Änderungen des Sichtbarkeitszustands einer Seite, d.h. wenn ein Tab von Vordergrund zu Hintergrund wechselt oder umgekehrt.

Dies kann verwendet werden, um Sichtbarkeitsänderungen in der Leistungstimeline zu bestimmen und sie gegen andere Leistungseinträge wie "first-contentful-paint" abzugleichen (siehe [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)).

Es gibt zwei wesentliche Zeitpunkte, die dieser API für Sichtbarkeitsänderungen berichtet:

- `visible`: Der Zeitpunkt, an dem die Seite sichtbar wird (d.h. wenn ihr Tab in den Vordergrund wechselt).
- `hidden`: Der Zeitpunkt, an dem die Seite versteckt wird (d.h. wenn ihr Tab in den Hintergrund wechselt).

Die Leistungstimeline wird immer einen `"visibility-state"` Eintrag mit einem `startTime` von `0` haben, und einen `name`, der den anfänglichen Sichtbarkeitszustand der Seite darstellt.

> [!NOTE]
> Wie andere Performance APIs erweitert auch diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface hat keine Eigenschaften, aber es erweitert die Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem es diese wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{experimental_inline}}
  - : Gibt `"visibility-state"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{experimental_inline}}
  - : Gibt entweder `"visible"` oder `"hidden"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Sichtbarkeitsänderung aufgetreten ist.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{experimental_inline}}
  - : Gibt 0 zurück.

## Instanzmethoden

Dieses Interface hat keine Methoden.

## Beispiele

### Grundlegende Verwendung

Die folgende Funktion könnte verwendet werden, um eine Tabelle aller `"visibility-state"` Leistungseinträge in die Konsole zu protokollieren:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Korrelation von Sichtbarkeitsänderungen mit Paint Timing

Die folgende Funktion erhält eine Referenz zu allen `"visibility-state"` Einträgen und zum `"first-contentful-paint"` Eintrag und verwendet {{jsxref("Array.some()")}}, um zu testen, ob einer der `"hidden"` Sichtbarkeitseinträge vor dem ersten inhaltlichen Paint aufgetreten ist:

```js
function wasHiddenBeforeFirstContentfulPaint() {
  const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0];
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  return visibilityStateEntries.some(
    (e) => e.startTime < fcpEntry.startTime && e.name === "hidden",
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
