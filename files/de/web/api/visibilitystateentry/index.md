---
title: Sichtbarkeitszustandseintrag
slug: Web/API/VisibilityStateEntry
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("Performance API")}}{{seecompattable}}

Die **`VisibilityStateEntry`**-Schnittstelle bietet Zeitpunkte von Änderungen des Sichtbarkeitszustands der Seite, d. h., wenn ein Tab von Vordergrund zu Hintergrund wechselt oder umgekehrt.

Dies kann verwendet werden, um Sichtbarkeitsänderungen auf der Leistungszeitachse genau zu bestimmen und sie mit anderen Leistungseinträgen wie "first-contentful-paint" in Beziehung zu setzen (siehe {{domxref("PerformancePaintTiming")}}).

Es gibt zwei Hauptzeiten für Änderungen des Sichtbarkeitszustands, über die diese API berichtet:

- `visible`: Die Zeit, zu der die Seite sichtbar wird (d. h. wenn ihr Tab in den Vordergrund wechselt).
- `hidden`: Die Zeit, zu der die Seite ausgeblendet wird (d. h. wenn ihr Tab in den Hintergrund wechselt).

Die Leistungszeitachse wird immer einen "`visibility-state`"-Eintrag mit einem `startTime` von `0` und einem `name` enthalten, der dem initialen Sichtbarkeitszustand der Seite entspricht.

> [!NOTE]
> Wie andere Performance-APIs erweitert auch diese API {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle hat keine eigenen Eigenschaften, sondern erweitert die Eigenschaften von {{domxref("PerformanceEntry")}}, indem sie diese wie folgt qualifiziert und einschränkt:

- {{domxref("PerformanceEntry.entryType")}} {{experimental_inline}}
  - : Gibt "`visibility-state`" zurück.
- {{domxref("PerformanceEntry.name")}} {{experimental_inline}}
  - : Gibt entweder "`visible`" oder "`hidden`" zurück.
- {{domxref("PerformanceEntry.startTime")}} {{experimental_inline}}
  - : Gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, zu dem die Änderung des Sichtbarkeitszustands erfolgte.
- {{domxref("PerformanceEntry.duration")}} {{experimental_inline}}
  - : Gibt 0 zurück.

## Instanzmethoden

Diese Schnittstelle hat keine Methoden.

## Beispiele

### Grundlegende Nutzung

Die folgende Funktion könnte verwendet werden, um eine Tabelle aller "`visibility-state`"-Leistungseinträge in der Konsole zu protokollieren:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Korrelation von Sichtbarkeitsänderungen mit der Anzeigedauer

Die folgende Funktion erhält eine Referenz zu allen "`visibility-state`"-Einträgen und dem "`first-contentful-paint`"-Eintrag und verwendet {{jsxref("Array.some()")}}, um zu testen, ob einer der "`hidden`"-Sichtbarkeitseinträge vor der ersten inhaltsvollen Malerei auftrat:

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
