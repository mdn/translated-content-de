---
title: VisibilityStateEntry
slug: Web/API/VisibilityStateEntry
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Performance API")}}{{seecompattable}}

Die **`VisibilityStateEntry`**-Schnittstelle liefert Zeitangaben zu Änderungen des Sichtbarkeitsstatus einer Seite, also dazu, wann ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

Damit lassen sich Sichtbarkeitsänderungen auf der Performance-Zeitleiste bestimmen und mit anderen Performance-Einträgen wie `"first-contentful-paint"` abgleichen (siehe [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)).

Diese API erfasst zwei wesentliche Zeitpunkte, zu denen sich der Sichtbarkeitsstatus ändert:

- `visible`: Der Zeitpunkt, zu dem die Seite sichtbar wird (also wenn ihr Tab in den Vordergrund wechselt).
- `hidden`: Der Zeitpunkt, zu dem die Seite ausgeblendet wird (also wenn ihr Tab in den Hintergrund wechselt).

Die Performance-Zeitleiste enthält immer einen `"visibility-state"`-Eintrag mit einem `startTime`-Wert von `0` und einem `name`, der den anfänglichen Sichtbarkeitsstatus der Seite angibt.

> [!NOTE]
> Wie andere Performance-APIs erweitert auch diese API [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle hat keine eigenen Eigenschaften. Sie erweitert jedoch die Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem sie diese wie folgt konkretisiert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt `"visibility-state"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt entweder `"visible"` oder `"hidden"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem sich der Sichtbarkeitsstatus geändert hat.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt 0 zurück.

## Instanzmethoden

Diese Schnittstelle hat keine Methoden.

## Beispiele

### Grundlegende Verwendung

Mit der folgenden Funktion lässt sich eine Tabelle aller `"visibility-state"`-Performance-Einträge in der Konsole ausgeben:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Sichtbarkeitsänderungen mit Paint-Zeitangaben abgleichen

Die folgende Funktion ruft Referenzen auf alle `"visibility-state"`-Einträge und den `"first-contentful-paint"`-Eintrag ab. Anschließend prüft sie mit {{jsxref("Array.some()")}}, ob einer der Sichtbarkeitseinträge mit dem Wert `"hidden"` vor dem ersten Contentful Paint aufgetreten ist:

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
