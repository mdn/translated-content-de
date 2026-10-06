---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongAnimationFrameTiming`**-Interface ist in der Long Animation Frames API spezifiziert und stellt Metriken zu langen Animationsframes (LoAFs) bereit, die die Darstellung beanspruchen und die Ausführung anderer Aufgaben blockieren.

## Beschreibung

Lange Animationsframes (LoAFs) sind Aktualisierungen der Darstellung, die sich um mehr als 50 ms verzögern. LoAFs können dazu führen, dass Aktualisierungen der Benutzeroberfläche (UI) langsam erfolgen, Bedienelemente nicht zu reagieren scheinen und Animationen sowie Scrollvorgänge {{Glossary("Jank", "ruckeln")}}. Dies führt häufig zu Frustration bei Nutzern.

Das `PerformanceLongAnimationFrameTiming`-Interface stellt die folgenden detaillierten Informationen zu LoAFs bereit, mit denen Entwickler deren Ursachen eingrenzen können:

- Detaillierte Zeitstempel für jeden LoAF.
- Detaillierte Informationen zu jedem Script, das zur Entstehung des LoAF beigetragen hat, über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts). Sie gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, eines für jedes Script.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface definiert die folgenden Eigenschaften direkt:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert war, auf Aufgaben mit hoher Priorität wie Benutzereingaben zu reagieren. Dazu werden alle [Long Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF mit einer `duration` von mehr als `50ms` herangezogen, von jedem `50ms` abgezogen, die Darstellungszeit zur Dauer der längsten Aufgabe addiert und die Ergebnisse summiert.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt des ersten UI-Ereignisses angibt – etwa eines Maus- oder Tastaturereignisses –, das während des aktuellen Animationsframes in die Warteschlange gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Darstellungsphase endete und der Animationsframe begann.
- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Aktualisierung der Benutzeroberfläche tatsächlich auf dem Bildschirm dargestellt wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Darstellungszyklus angibt. Dieser umfasst Callbacks von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), Berechnungen von Style und Layout sowie Callbacks von [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver).
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Zeitraums angibt, der für Style- und Layoutberechnungen des aktuellen Animationsframes aufgewendet wurde.

Darüber hinaus erweitert es die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und präzisiert beziehungsweise beschränkt sie wie beschrieben:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die für die vollständige Verarbeitung des LoAF benötigte Zeit in Millisekunden angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` lautet.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` lautet.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem der Animationsframe begann.

## Instanzmethoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceLongAnimationFrameTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
