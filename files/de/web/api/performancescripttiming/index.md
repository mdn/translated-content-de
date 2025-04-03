---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceScriptTiming`**-Interface ist im Long Animation Frames API spezifiziert und bietet Metriken zu einzelnen Skripten, die zu langen Animationsrahmen (LoAFs) beitragen.

## Beschreibung

Lange Animationsrahmen (LoAFs) sind Rendering-Aktualisierungen, die um mehr als 50 ms verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, wodurch Bedienelemente unempfindlich erscheinen und {{Glossary("Jank", "ruckelige")}} (nicht ausreichende) Animationseffekte und Bildlauf entstehen. Dies führt oft zu Benutzerfrustration.

Das `PerformanceScriptTiming`-Interface (dessen Instanzen über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) aufgerufen werden) bietet die folgende detaillierte Informationsmenge über einzelne Skripte, die zu LoAFs beitragen, und ermöglicht Entwicklern, deren Ursachen einzugrenzen:

- Ein detaillierter Satz von Zeitstempeln für jedes Skript.
- Die Identität und der Typ des Aufrufers, d.h. die Funktionalität, die beim Aufruf das Skript ausgeführt hat.
- Detaillierte Informationen über jede Skriptquelle, einschließlich der URL, des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Langzeit-Animationsrahmen-Leistungseinträge:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit in Millisekunden zwischen dem Beginn und dem Ende der Skriptausführung darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, zu der die Skriptausführung gestartet wurde, in Millisekunden.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Skriptkompilierung beendet und die Ausführung gestartet wurde.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit angibt, die in Millisekunden durch die Skriptverarbeitung erzwungener Layout-/Stiländerungen verbracht wurde. Sehen Sie sich [Vermeiden von Layout-Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) an, um zu verstehen, was dies verursacht.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String-Wert zurück, der die Identität der Funktionalität angibt, die beim Aufruf das Skript ausgeführt hat.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String-Wert zurück, der den Typ der Funktionalität angibt, die beim Aufruf das Skript ausgeführt hat.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen (z.B. [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchroner [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s) benötigt.
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition des Skriptfeatures angibt, das zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den Namen der Funktion angibt, die zum LoAF beigetragen hat.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die URL des Skripts darstellt.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}) darstellt, in dem das LoAF-verursachende Skript ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}) beschreibt, in dem das LoAF-verursachende Skript ausgeführt wurde, relativ zum Fenster, das das aktuelle Dokument ausführt.

## Instanz-Methoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceScriptTiming`-Objekts zurück.

## Beispiele

Siehe [Langzeit-Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit dem Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langzeit-Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
