---
title: VisibilityStateEntry
slug: Web/API/VisibilityStateEntry
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Performance API")}}{{seecompattable}}

Das **`VisibilityStateEntry`** Interface bietet Zeitmessungen für Änderungen des Sichtbarkeitszustands einer Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

Dies kann verwendet werden, um Sichtbarkeitsänderungen auf der Leistungstimeline zu identifizieren und sie mit anderen Leistungseinträgen wie "first-contentful-paint" zu vergleichen (siehe [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)).

Es gibt zwei wichtige Sichtbarkeitszustandsänderungszeiten, die diese API meldet:

- `visible`: Die Zeit, zu der die Seite sichtbar wird (d.h. wenn ihr Tab in den Vordergrund wechselt).
- `hidden`: Die Zeit, zu der die Seite verborgen wird (d.h. wenn ihr Tab in den Hintergrund wechselt).

Die Leistungstimeline wird immer einen `"visibility-state"`-Eintrag mit einem `startTime` von `0` und einem `name` enthalten, das den anfänglichen Sichtbarkeitszustand der Seite repräsentiert.

> [!NOTE]
> Wie andere Leistungs-APIs erweitert diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface hat keine eigenen Eigenschaften, erweitert jedoch die Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) durch folgende Qualifizierung und Einschränkung:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{experimental_inline}}
  - : Gibt `"visibility-state"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{experimental_inline}}
  - : Gibt entweder `"visible"` oder `"hidden"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Sichtbarkeitszustandsänderung auftrat.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{experimental_inline}}
  - : Gibt 0 zurück.

## Instanz-Methoden

Dieses Interface hat keine Methoden.

## Beispiele

### Grundlegende Verwendung

Die folgende Funktion könnte verwendet werden, um eine Tabelle aller `"visibility-state"`-Leistungseinträge in die Konsole zu protokollieren:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Korrelation von Sichtbarkeitszustandsänderungen mit der Malzeit

Die folgende Funktion erhält eine Referenz zu allen `"visibility-state"`-Einträgen und dem `"first-contentful-paint"`-Eintrag und verwendet {{jsxref("Array.some()")}}, um zu testen, ob einer der `"hidden"`-Sichtbarkeitseinträge vor dem ersten Contentful Paint auftrat:

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
