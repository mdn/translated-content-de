---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceScriptTiming`** Schnittstelle ist in der Long Animation Frames API spezifiziert und bietet Metriken zu einzelnen Scripts, die zu langen Animationsbildern (LoAFs) beitragen.

## Beschreibung

Lange Animationsbilder (LoAFs) sind Render-Updates, die sich mehr als 50 ms verzögern. LoAFs können zu langsamen Benutzeroberflächen- (UI) Aktualisierungen führen, wodurch Bedienelemente träge wirken und [ruckelige](/de/docs/Glossary/Jank) (nicht flüssige) Animationseffekte und Scrollen auftreten. Dies führt oft zu Frustration bei den Nutzern.

Die `PerformanceScriptTiming`-Schnittstelle (deren Instanzen über die Eigenschaft [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) aufgerufen werden) bietet die folgenden detaillierten Informationen über individuelle Scripts, die zu LoAFs beitragen. Dadurch können Entwickler die Ursachen eingrenzen:

- Ein detaillierter Satz von Zeitstempeln für jedes Script.
- Die Identität und der Typ des Invokers, d.h. das Merkmal, das beim Aufruf das Script ausgeführt hat.
- Detaillierte Informationen zu jeder Script-Quelldatei, einschließlich der URL, des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen haben.

## Vererbung

`PerformanceScriptTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Leistungsdaten zu langen Animationsbildern:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit in Millisekunden zwischen dem Beginn und Ende der Ausführung des Scripts darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"script"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden angibt, zu der die Ausführung des Scripts begann.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceScriptTiming.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit angibt, zu der die Script-Kompilierung abgeschlossen und die Ausführung gestartet wurde.
- [`PerformanceScriptTiming.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, die das Script für die Verarbeitung erzwungener Layouts/Styles aufwandte. Siehe [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
- [`PerformanceScriptTiming.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenkettenwert zurück, der die Identität des Merkmals angibt, das beim Aufruf das Script ausgeführt hat.
- [`PerformanceScriptTiming.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Zeichenkettenwert zurück, der den Typ des Merkmals angibt, das beim Aufruf das Script ausgeführt hat.
- [`PerformanceScriptTiming.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, die das Script für das "Pausieren" synchroner Operationen aufwandte (z.B. [`Window.alert()`](/de/docs/Web/API/Window/alert) Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
- [`PerformanceScriptTiming.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition des Script-Features angibt, das zum LoAF beitrug.
- [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die den Namen der Funktion angibt, die zum LoAF beitrug.
- [`PerformanceScriptTiming.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die die URL des Scripts darstellt.
- [`PerformanceScriptTiming.window`](/de/docs/Web/API/PerformanceScriptTiming/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu einem [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}) repräsentiert, in dem das LoAF-verursachende Script ausgeführt wurde.
- [`PerformanceScriptTiming.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Beziehung des Containers (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem das LoAF-verursachende Script ausgeführt wurde, relativ zu dem Fenster, das das aktuelle Dokument ausführt, beschreibt.

## Instanz-Methoden

- [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceScriptTiming`-Objekts zurück.

## Beispiele

Siehe [Langes Animationsbild-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele zur Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langes Animationsbild-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
