---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceScriptTiming`**-Schnittstelle wird in der Long Animation Frames API spezifiziert und bietet Metriken zu einzelnen Skripten, die zu langen Animationsbildern (LoAFs) beitragen.

## Beschreibung

Lange Animationsbilder (LoAFs) sind Render-Updates, die über 50 ms hinaus verzögert werden. LoAFs können zu langsamen Aktualisierungen der Benutzeroberfläche (UI) führen, wodurch Steuerungselemente unempfänglich erscheinen und [ruckelige](/de/docs/Glossary/Jank) (nicht fließende) animierte Effekte und Scrollvorgänge entstehen. Dies führt oft zu Nutzerfrustration.

Die `PerformanceScriptTiming`-Schnittstelle (deren Instanzen über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft zugänglich sind) bietet eine detaillierte Menge an Informationen zu einzelnen Skripten, die zu LoAFs beitragen, und ermöglicht es Entwicklern, die Ursachen einzugrenzen:

- Eine detaillierte Sammlung von Zeitstempeln für jedes Skript.
- Die Identität und der Typ des Auslösers, d.h. das Feature, das beim Aufruf das Skript ausgeführt hat.
- Detaillierte Informationen zu jeder Skript-Quelldatei, einschließlich der URL, des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

## Vererbung

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Performance-Einträge von langen Animationsbildern:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit in Millisekunden zwischen Beginn und Ende der Skriptausführung darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der die Skriptausführung begonnen hat, in Millisekunden.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der anzeigt, wann die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit anzeigt, die das Skript für die erzwungene Layout-/Stilverarbeitung aufgewendet hat, in Millisekunden. Lesen Sie [Vermeiden von Layout-Verschiebungen](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der die Identität des Features anzeigt, das beim Aufruf das Skript ausführte.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Typ des Features anzeigt, das beim Aufruf das Skript ausführte.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Operationen (z.B. [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchroner [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s) verbracht hat.
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Skript-Zeichenposition des Skript-Features angibt, das zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die den Namen der Funktion angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenfolge zurück, die die URL des Skripts repräsentiert.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu einem [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers darstellt (d.h. entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}), in dem das LoAF-verursachende Skript ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Beziehung des Containers (d.h. entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}), in dem das LoAF-verursachende Skript ausgeführt wurde, relativ zu dem Fenster, das das aktuelle Dokument ausführt, beschreibt.

## Instanz-Methoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceScriptTiming`-Objekts zurück.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele zur Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
