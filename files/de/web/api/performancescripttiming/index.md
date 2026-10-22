---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceScriptTiming`**-Interface ist in der Long Animation Frames API definiert und liefert Messwerte für einzelne Skripte, die zu langen Animationsframes (LoAFs) beitragen.

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge langer Animationsframes:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen Beginn und Ende der Skriptausführung in Millisekunden angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Eintrags zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen des Eintrags zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Skriptausführung begann, in Millisekunden.

Dieses Interface unterstützt außerdem die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Kompilierung des Skripts abgeschlossen war und seine Ausführung begann.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript für erzwungene Layout- und Stilberechnungen aufgewendet hat. Unter [Layout-Thrashing vermeiden](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) erfahren Sie, wodurch dies verursacht wird.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die die Funktion identifiziert, deren Aufruf das Skript ausgeführt hat.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der Funktion angibt, deren Aufruf das Skript ausgeführt hat.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit „pausierenden“ synchronen Operationen verbracht hat (beispielsweise Aufrufen von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen).
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition der Skriptfunktion angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge mit dem Namen der Funktion zurück, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge mit der URL des Skripts zurück.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers repräsentiert, in dem das LoAF verursachende Skript ausgeführt wurde (also entweder das oberste Dokument oder ein {{htmlelement("iframe")}}).
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Aufzählungswert zurück, der die Beziehung des Containers, in dem das LoAF verursachende Skript ausgeführt wurde (also entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), zum Fenster beschreibt, in dem das aktuelle Dokument ausgeführt wird.

## Instanzmethoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceScriptTiming`-Objekt repräsentiert. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Lange Animationsframes (LoAFs) sind Rendering-Aktualisierungen, die um mehr als 50 ms verzögert werden. LoAFs können zu langsamen Aktualisierungen der Benutzeroberfläche (UI) führen. Dadurch können Bedienelemente nicht reagieren und Animationen sowie Bildlaufbewegungen {{Glossary("Jank", "ruckeln")}}. Das frustriert Benutzer häufig.

Das `PerformanceScriptTiming`-Interface (auf dessen Instanzen über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) zugegriffen wird) liefert die folgenden detaillierten Informationen zu einzelnen Skripten, die zu LoAFs beitragen. Damit können Entwickler deren Ursachen eingrenzen:

- Detaillierte Zeitstempel für jedes Skript.
- Identität und Typ des Auslösers, also der Funktion, deren Aufruf das Skript ausgeführt hat.
- Detaillierte Informationen zur Quelldatei jedes Skripts, einschließlich der URL sowie des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
