---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceScriptTiming`**-Schnittstelle wird im Long Animation Frames API spezifiziert und bietet Metriken zu einzelnen Skripten, die zu langen Animationsbilderrahmen (LoAFs) beitragen.

## Beschreibung

Lange Animationsbilderrahmen (LoAFs) sind Rendering-Aktualisierungen, die über 50ms hinaus verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, wodurch Bedienelemente unempfindlich erscheinen und {{Glossary("Jank", "ruckelige")}} (nicht gleichmäßige) Animationseffekte und Scrolling verursacht werden. Dies führt häufig zu Benutzerfrustration.

Die `PerformanceScriptTiming`-Schnittstelle (Instanzen davon werden über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft abgerufen) bietet das folgende detaillierte Informationspaket zu einzelnen Skripten, die zu LoAFs beitragen, sodass Entwickler ihre Ursachen eingrenzen können:

- Ein detailliertes Set von Zeitstempeln für jedes Skript.
- Die Identität und der Typ des Aufrufers, d.h. die Funktion, die beim Aufrufen das Skript ausgeführt hat.
- Detaillierte Informationen zu jeder Skript-Quelldatei, einschließlich der URL und des Funktionsnamens sowie der Zeichenposition, die zur LoAF beitrugen.

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Leistungsdaten zu langen Animationsbilderrahmen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit in Millisekunden zwischen dem Start und dem Ende der Skriptausführung darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Namen des Eintrags zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, wann die Skriptausführung in Millisekunden begann.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, wann die Skriptkompilierung beendet und die Ausführung begonnen hat.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit angibt, die das Skript mit der Verarbeitung erzwungener Layouts/Styles verbracht hat. Siehe [Vermeiden von Layout Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der die Identität der Funktion angibt, die beim Aufrufen das Skript ausgeführt hat.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Typ der Funktion angibt, die beim Aufrufen das Skript ausgeführt hat.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit, in Millisekunden, angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (zum Beispiel, [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition des Skripts im Skriptmerkmal angibt, das zur LoAF beitrug.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die den Namen der Funktion angibt, die zur LoAF beitrug.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die die URL des Skripts angibt.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers darstellt (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem das LoAF-verursachende Skript ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Beziehung des Containers beschreibt (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem das LoAF-verursachende Skript ausgeführt wurde, relativ zu dem Fenster, das das aktuelle Dokument ausführt.

## Instanz-Methoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Repräsentation des `PerformanceScriptTiming`-Objekts zurückzugeben.

## Beispiele

Siehe [Zeitmessung langes Animationsbild](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele zum Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langes Animationsbild](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
