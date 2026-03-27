---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongAnimationFrameTiming`**-Interface ist im Long Animation Frames API spezifiziert und bietet Metriken zu langen Animations-Frames (LoAFs), die das Rendering beanspruchen und andere Aufgaben daran hindern, ausgeführt zu werden.

## Beschreibung

Lange Animations-Frames (LoAFs) sind Render-Aktualisierungen, die länger als 50 ms verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, wodurch Bedienelemente träge erscheinen und {{Glossary("Jank", "ruckelige")}} (nicht-glatte) Animationseffekte und Bildläufe entstehen. Dies führt oft zu Benutzerfrustration.

Das `PerformanceLongAnimationFrameTiming`-Interface bietet die folgende detaillierte Informationsmenge über LoAFs, die es Entwicklern ermöglicht, ihre Ursachen einzugrenzen:

- Eine detaillierte Reihe von Zeitstempeln für jeden LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Erstellung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft. Diese gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, eines für jedes Skript.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [long tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs mit einer `duration` von mehr als `50ms` erfasst, `50ms` von jedem abgezogen, die Renderzeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das in der aktuellen Animations-Frame-Warteschlange eingereiht wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Renderphase endete und der Animations-Frame startete.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Benutzeroberflächen-Aktualisierung tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Renderzyklus angibt, welcher [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe, Stil- und Layoutberechnung, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückrufe einschließt.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn der Zeit in Stil- und Layoutberechnungen für den aktuellen Animations-Frame angibt.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die in Millisekunden gemessene Zeit zur vollständigen Verarbeitung des LoAFs angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, zu der der Animations-Frame begann.

## Instanz-Methoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit dem Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
