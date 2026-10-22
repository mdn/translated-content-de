---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das Interface **`PerformanceLongAnimationFrameTiming`** ist in der Long Animation Frames API spezifiziert und liefert Messwerte für lange Animationsframes (LoAFs), die Zeit für das Rendering beanspruchen und die Ausführung anderer Aufgaben blockieren.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert war, auf Aufgaben mit hoher Priorität wie Benutzereingaben zu reagieren. Zur Berechnung werden alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF mit einer `duration` von mehr als `50ms` berücksichtigt. Von jeder wird `50ms` abgezogen, die Rendering-Zeit wird zur Dauer der längsten Aufgabe addiert und die Ergebnisse werden aufsummiert.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt des ersten UI-Ereignisses angibt – etwa eines Maus- oder Tastaturereignisses –, das während des aktuellen Animationsframes in die Warteschlange eingereiht wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und der Animationsframe begann.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die aktualisierte Benutzeroberfläche tatsächlich auf dem Bildschirm dargestellt wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Rendering-Zyklus angibt. Dieser umfasst Callbacks von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), Stil- und Layoutberechnungen sowie Callbacks von [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver).
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Zeitraums angibt, in dem Stil- und Layoutberechnungen für den aktuellen Animationsframe durchgeführt werden.

Außerdem erweitert es die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und konkretisiert beziehungsweise beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die für die vollständige Verarbeitung des LoAF benötigte Zeit in Millisekunden angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem der Animationsframe begann.

## Instanzmethoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein einfaches, als JSON serialisierbares Objekt zurück, das das `PerformanceLongAnimationFrameTiming`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Lange Animationsframes (LoAFs) sind Rendering-Aktualisierungen, die sich um mehr als 50 ms verzögern. LoAFs können dazu führen, dass die Benutzeroberfläche (UI) nur langsam aktualisiert wird. Dadurch können Bedienelemente den Eindruck erwecken, nicht zu reagieren, und Animationen sowie das Scrollen können {{Glossary("Jank", "ruckeln")}}. Das frustriert häufig die Benutzer.

Das Interface `PerformanceLongAnimationFrameTiming` liefert die folgenden detaillierten Informationen zu LoAFs, mit denen Entwickler deren Ursachen eingrenzen können:

- Detaillierte Zeitstempel für jeden LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Entstehung des LoAF beigetragen hat, über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts). Sie gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, eines für jedes Skript.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Zeitmessung für lange Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung für lange Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
