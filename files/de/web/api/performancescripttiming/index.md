---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceScriptTiming`** Schnittstelle ist im Long Animation Frames API spezifiziert und bietet Metriken zu einzelnen Skripten, die zu langen Animationsframes (LoAFs) beitragen.

## Beschreibung

Lange Animationsframes (LoAFs) sind die Rendering-Aktualisierungen, die um mehr als 50 ms verzögert sind. LoAFs können langsame Benutzeroberflächen- (UI) Updates verursachen, sodass Bedienelemente träge erscheinen und {{Glossary("Jank", "ruckelige")}} (nicht flüssige) Animationen und Scroll-Effekte entstehen. Dies führt oft zu Benutzerfrustration.

Die `PerformanceScriptTiming` Schnittstelle (Instanzen davon werden über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft abgerufen) bietet die folgende detaillierte Information über einzelne Skripte, die zu LoAFs beitragen und Entwicklern ermöglichen, deren Ursachen einzugrenzen:

- Ein detaillierter Satz von Zeitstempeln für jedes Skript.
- Die Identität und der Typ des Aufrufers, d. h. das Feature, das beim Aufruf das Skript ausführte.
- Detaillierte Informationen zu jeder Skriptquelle, einschließlich der URL, des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Langanimations-Frame-Performance-Einträge:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit in Millisekunden zwischen dem Start und dem Ende der Skript-Ausführung darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintrags-Typ zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintrags-Namen zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden angibt, zu der die Skript-Ausführung gestartet wurde.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, zu der die Skript-Kompilierung abgeschlossen und die Ausführung gestartet wurde.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit erzwungenen Layout-/Stilprozessen verbracht hat. Siehe [Vermeiden von Layout-Trashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der die Identität des Features angibt, das beim Aufruf das Skript ausführte.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Typ des Features angibt, das beim Aufruf das Skript ausführte.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Operationen verbracht hat (zum Beispiel, [`Window.alert()`](/de/docs/Web/API/Window/alert) Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Charakterposition des Skript-Features angibt, das zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die den Namen der Funktion angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die die URL des Skripts angibt.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`Window`](/de/docs/Web/API/Window) Objekt zurück, das das `window` des Containers (d. h. entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}) darstellt, in dem das LoAF-verursachende Skript ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Beziehung des Containers (d. h. entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}) beschreibt, in dem das LoAF-verursachende Skript ausgeführt wurde, relativ zu dem Fenster, das das aktuelle Dokument ausführt.

## Instanz-Methoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceScriptTiming` Objekts zurück.

## Beispiele

Siehe [Langanimations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für zugehörige Beispiele zum Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langanimations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
