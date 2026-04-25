---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongAnimationFrameTiming`**-Schnittstelle ist im Long Animation Frames API spezifiziert und bietet Metriken zu langen Animationsframes (LoAFs), die das Rendering blockieren und andere Aufgaben daran hindern, ausgeführt zu werden.

## Beschreibung

Lange Animationsframes (LoAFs) sind Rendering-Aktualisierungen, die über 50 ms hinaus verzögert werden. LoAFs können langsame Benutzeroberflächen (UI) Updates verursachen, wodurch Steuerelemente unempfänglich erscheinen und {{Glossary("Jank", "ruckelige")}} (nicht flüssige) Animationseffekte und Bildläufe entstehen. Dies führt oft zu Benutzungsfrust.

Die `PerformanceLongAnimationFrameTiming`-Schnittstelle bietet den folgenden detaillierten Satz von Informationen zu LoAFs, sodass Entwickler deren Ursachen eingrenzen können:

- Einen detaillierten Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Script, das zur Entstehung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft. Dies gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, jeweils eines für jedes Skript.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle definiert direkt die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [Lange Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF, die eine `duration` von mehr als `50ms` haben, genommen werden, `50ms` von jedem abgezogen wird, die Rendering-Zeit zur längsten Aufgabenzeit hinzugefügt wird und die Ergebnisse summiert werden.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsframes in die Warteschlange gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) {{experimental_inline}}
  - : Gibt den [`zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Rendering-Phase endete und der Animationsframe startete.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime) {{experimental_inline}}
  - : Gibt den [`zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als das UI-Update tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Startzeitpunkt des Rendering-Zyklus angibt, welcher [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe, Stil- und Layout-Berechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückrufe einschließt.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Anfangszeitpunkt des Zeitraums angibt, der für Stil- und Layout-Berechnungen für den aktuellen Animationsframe aufgewendet wurde.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden darstellt, die benötigt wird, um den LoAF vollständig zu verarbeiten.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt darstellt, zu dem der Animationsframe gestartet wurde.

## Instanz-Methoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
