---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceScriptTiming`**-Interface ist in der Long Animation Frames API spezifiziert und liefert Messwerte für einzelne Skripte, die zu langen Animationsframes (LoAFs) beitragen.

## Beschreibung

Lange Animationsframes (LoAFs) sind Rendering-Aktualisierungen, die sich um mehr als 50 ms verzögern. LoAFs können Aktualisierungen der Benutzeroberfläche (UI) verlangsamen, sodass Bedienelemente nicht mehr zu reagieren scheinen und {{Glossary("Jank", "ruckelnde")}} (nicht flüssige) Animationen und Scrollbewegungen entstehen. Dies führt häufig zu Frustration bei Benutzern.

Das `PerformanceScriptTiming`-Interface, dessen Instanzen über die Property [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) zugänglich sind, liefert die folgenden detaillierten Informationen zu einzelnen Skripten, die zu LoAFs beitragen. So können Entwickler deren Ursachen eingrenzen:

- Detaillierte Zeitstempel für jedes Skript.
- Die Identität und den Typ des Aufrufers, also der Funktionalität, deren Aufruf das Skript ausgeführt hat.
- Detaillierte Informationen zur Quelldatei jedes Skripts, einschließlich der URL sowie des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Properties

Dieses Interface erweitert die folgenden Properties von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge langer Animationsframes:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen Beginn und Ende der Skriptausführung in Millisekunden angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen des Eintrags zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Skriptausführung begann, in Millisekunden.

Dieses Interface unterstützt außerdem die folgenden Properties:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Kompilierung des Skripts abgeschlossen war und seine Ausführung begann.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript für erzwungene Layout- und Style-Berechnungen aufgewendet hat. Unter [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) erfahren Sie, wodurch dies verursacht wird.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, welche Funktionalität durch ihren Aufruf das Skript ausgeführt hat.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den Typ der Funktionalität angibt, durch deren Aufruf das Skript ausgeführt wurde.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit „pausierenden“ synchronen Operationen verbracht hat (beispielsweise Aufrufen von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen).
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition der Skriptfunktionalität angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den Namen der Funktion angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die URL des Skripts angibt.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers repräsentiert (also entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}), in dem das LoAF verursachende Skript ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Aufzählungswert zurück, der die Beziehung des Containers (also entweder des Dokuments der obersten Ebene oder eines {{htmlelement("iframe")}}), in dem das LoAF verursachende Skript ausgeführt wurde, zum Window des aktuellen Dokuments beschreibt.

## Instanzmethoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceScriptTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
