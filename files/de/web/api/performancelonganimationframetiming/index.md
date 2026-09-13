---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongAnimationFrameTiming`** Interface ist im Long Animation Frames API spezifiziert und bietet Metriken zu langen Animationsframes (LoAFs), die das Rendering belegen und andere Aufgaben blockieren.

## Beschreibung

Lange Animationsframes (LoAFs) sind Rendering-Updates, die über 50 ms hinaus verzögert sind. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, wodurch Bedienelemente unempfindlich erscheinen und {{Glossary("Jank", "ruckelnde")}} (nicht flüssige) Animationseffekte und Scrollen verursachen. Dies führt häufig zu Frustration bei den Benutzern.

Das `PerformanceLongAnimationFrameTiming` Interface bietet die folgende detaillierte Informationsmenge zu LoAFs, die Entwicklern ermöglicht, die Hauptursachen genauer zu identifizieren:

- Ein detailliertes Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Erstellung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft. Diese gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten zurück, eines für jedes Skript.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, während der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [long tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs genommen werden, die eine `duration` von über `50ms` haben, `50ms` von jedem abgezogen wird, die Rendering-Zeit zur längsten Aufgabedauer hinzugefügt wird und die Ergebnisse summiert werden.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsframes in die Warteschlange gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wenn die Rendering-Phase endete und der Animationsframe begann.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime) {{experimental_inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wenn das UI-Update tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Startzeitpunkt des Rendering-Zyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe, Stil- und Layout-Berechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufe umfasst.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn der Zeitspanne angibt, die für Stil- und Layout-Berechnungen des aktuellen Animationsframes aufgewendet wurde.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, die qualifiziert und wie beschrieben eingeschränkt werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden angibt, die zur vollständigen Verarbeitung des LoAF aufgewendet wurde.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, wann der Animationsframe startete.

## Instanz-Methoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON) Methode, um eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming` Objekts zurückzugeben.

## Beispiele

Siehe [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
