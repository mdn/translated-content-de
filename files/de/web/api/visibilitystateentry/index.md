---
title: VisibilityStateEntry
slug: Web/API/VisibilityStateEntry
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}{{seecompattable}}

Das **`VisibilityStateEntry`**-Interface bietet Zeitmessungen für Änderungen des Sichtbarkeitsstatus einer Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

Dies kann verwendet werden, um Sichtbarkeitsänderungen auf der Performance-Zeitleiste zu lokalisieren und sie mit anderen Performance-Einträgen wie "first-contentful-paint" zu vergleichen (siehe [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)).

Es gibt zwei wichtige Zeiten für Änderungen des Sichtbarkeitsstatus, über die diese API berichtet:

- `visible`: Die Zeit, wenn die Seite sichtbar wird (d.h. wenn ihr Tab in den Vordergrund wechselt).
- `hidden`: Die Zeit, wenn die Seite verborgen wird (d.h. wenn ihr Tab in den Hintergrund wechselt).

Die Performance-Zeitleiste wird immer einen `"visibility-state"`-Eintrag mit einem `startTime` von `0` und einem `name`, das den initialen Sichtbarkeitsstatus der Seite repräsentiert, enthalten.

> [!NOTE]
> Wie andere Performance-APIs erweitert auch diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface hat keine eigenen Eigenschaften, erweitert jedoch die Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und qualifiziert und beschränkt sie wie folgt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{experimental_inline}}
  - : Gibt `"visibility-state"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{experimental_inline}}
  - : Gibt entweder `"visible"` oder `"hidden"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Änderung des Sichtbarkeitsstatus erfolgte.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{experimental_inline}}
  - : Gibt 0 zurück.

## Instanz-Methoden

Dieses Interface hat keine Methoden.

## Beispiele

### Grundlegende Verwendung

Die folgende Funktion könnte verwendet werden, um alle `"visibility-state"`-Performance-Einträge in der Konsole als Tabelle zu protokollieren:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Korrelation von Sichtbarkeitsstatus-Änderungen mit der Paint-Zeit

Die folgende Funktion erhält eine Referenz zu allen `"visibility-state"`-Einträgen und dem `"first-contentful-paint"`-Eintrag und verwendet {{jsxref("Array.some()")}}, um zu testen, ob einer der `"hidden"`-Sichtbarkeits-Einträge vor dem ersten contentful paint auftrat:

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
