---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongAnimationFrameTiming`** Schnittstelle ist in der Long Animation Frames API spezifiziert und liefert Metriken zu langen Animationsframes (LoAFs), die das Rendering beanspruchen und andere Aufgaben blockieren.

## Beschreibung

Lange Animationsframes (LoAFs) sind Render-Updates, die über 50 ms hinaus verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, was die Steuerung unresponsiv erscheinen lässt und [ruckelige](/de/docs/Glossary/Jank) (nicht flüssige) Animationseffekte und das Scrollen verursacht. Dies führt oft zu Benutzerfrustration.

Die `PerformanceLongAnimationFrameTiming` Schnittstelle bietet die folgende detaillierte Informationsmenge über LoAFs, die Entwicklern hilft, ihre Ursachen zu identifizieren:

- Ein detaillierter Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Erstellung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft. Dies gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten zurück, eines für jedes Skript.

## Vererbung

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Leistungseinträge bei langen Animationsframes:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden darstellt, die benötigt wird, um das LoAF vollständig zu verarbeiten.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, zu der der Animationsframe begann.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, die der Hauptthread daran gehindert wurde, auf Aufgaben mit hoher Priorität, wie Benutzereingaben, zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs, die eine `duration` von mehr als `50ms` haben, um `50ms` vermindert, die Rendering-Zeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit des ersten UI-Events — wie eines Maus- oder Tastatur-Events — angibt, das in der aktuellen Animationsframe-Warteschlange erfasst wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Rendering-Zyklus anzeigt, der Callbacks von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Callbacks und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callbacks umfasst.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn der Zeitspanne für Stil- und Layoutberechnungen für den aktuellen Animationsframe angibt.

## Instanz-Methoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming` Objekts zurück.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
