---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongAnimationFrameTiming`**-Interface ist in der Long Animation Frames API spezifiziert und stellt Messwerte für lange Animationsframes (LoAFs) bereit, die die Darstellung beanspruchen und die Ausführung anderer Aufgaben blockieren.

## Beschreibung

Lange Animationsframes (LoAFs) sind Aktualisierungen der Darstellung, die sich um mehr als 50 ms verzögern. LoAFs können Aktualisierungen der Benutzeroberfläche (UI) verlangsamen, sodass Bedienelemente nicht mehr zu reagieren scheinen und {{Glossary("Jank", "ruckelige")}} (nicht flüssige) Animationseffekte und Scrollbewegungen entstehen. Das führt häufig zu Frustration bei Benutzern.

Das `PerformanceLongAnimationFrameTiming`-Interface liefert die folgenden detaillierten Informationen zu LoAFs, mit denen Entwickler deren Ursachen eingrenzen können:

- Detaillierte Zeitstempel für jeden LoAF.
- Detaillierte Informationen zu jedem Skript, das zum Entstehen des LoAF beigetragen hat, über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts). Sie gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, eines für jedes Skript.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert war, auf Aufgaben mit hoher Priorität wie Benutzereingaben zu reagieren. Zur Berechnung werden alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF mit einer `duration` von mehr als `50ms` herangezogen. Von jeder dieser Aufgaben werden `50ms` abgezogen, die Darstellungszeit wird zur Dauer der längsten Aufgabe addiert und die Ergebnisse werden summiert.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem das erste UI-Ereignis – etwa ein Maus- oder Tastaturereignis – während des aktuellen Animationsframes in die Warteschlange gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Darstellungsphase endete und der Animationsframe begann.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime) {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die UI-Aktualisierung tatsächlich auf dem Bildschirm dargestellt wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Darstellungszyklus angibt. Dieser umfasst [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks, Stil- und Layoutberechnungen sowie [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)- und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callbacks.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Zeitraums angibt, in dem Stil- und Layoutberechnungen für den aktuellen Animationsframe durchgeführt werden.

Das Interface erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), wobei sie wie beschrieben genauer definiert und eingeschränkt werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden angibt, die für die vollständige Verarbeitung des LoAF benötigt wurde.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem der Animationsframe begann.

## Instanzmethoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein als JSON serialisierbares einfaches Objekt zurück, das das `PerformanceLongAnimationFrameTiming`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
