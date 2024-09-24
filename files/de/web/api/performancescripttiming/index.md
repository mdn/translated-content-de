---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceScriptTiming`** Interface ist im Long Animation Frames API spezifiziert und bietet Metriken über einzelne Skripte, die zu langen Animationsrahmen (LoAFs) beitragen.

## Beschreibung

Lange Animationsrahmen (LoAFs) sind Render-Aktualisierungen, die über 50ms hinaus verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-Updates führen, was dazu führt, dass Bedienelemente unempfindlich erscheinen und [ruckelige](/de/docs/Glossary/Jank) (nicht flüssige) Animationseffekte und Scrollen verursacht werden. Dies führt oft zu Benutzungsfrustration.

Das `PerformanceScriptTiming` Interface (dessen Instanzen über die {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} Eigenschaft zugänglich sind) bietet den folgenden detaillierten Satz von Informationen über einzelne Skripte, die zu LoAFs beitragen, um Entwicklern zu helfen, deren Ursachen genauer einzugrenzen:

- Ein detaillierter Satz von Zeitstempeln für jedes Skript.
- Die Identität und der Typ des Aufrufers, d.h. das Feature, das bei der Ausführung das Skript gestartet hat.
- Detaillierte Informationen über jede Skriptquelle einschließlich der URL, des Funktionsnamens und der Zeichenposition, die zum LoAF beigetragen hat.

## Vererbung

`PerformanceScriptTiming` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}} Eigenschaften für Leistungsaufzeichnungen von langen Animationsrahmen:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die verstrichene Zeit in Millisekunden zwischen dem Start und Ende der Skriptausführung darstellt.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"script"` ist.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"script"` ist.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit angibt, wann die Skriptausführung gestartet wurde, in Millisekunden.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceScriptTiming.executionStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit angibt, wann die Skriptkompilierung beendet und die Ausführung gestartet wurde.
- {{domxref("PerformanceScriptTiming.forcedStyleAndLayoutDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die gesamte Zeit darstellt, in Millisekunden, die das Skript mit erzwungenem Layout/Style verbracht hat. Sehen Sie sich [Vermeiden Sie das Layout-Umwerfen](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) an, um zu verstehen, was dies verursacht.
- {{domxref("PerformanceScriptTiming.invoker")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen string-Wert zurück, der die Identität des Features angibt, das bei der Ausführung das Skript gestartet hat.
- {{domxref("PerformanceScriptTiming.invokerType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen string-Wert zurück, der den Typ des Features angibt, das bei der Ausführung das Skript gestartet hat.
- {{domxref("PerformanceScriptTiming.pauseDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Gesamtzeit darstellt, in Millisekunden, die das Skript für "pausierende" synchrone Operationen (zum Beispiel, {{domxref("Window.alert()")}} Aufrufe oder synchrone {{domxref("XMLHttpRequest")}}s) verbracht hat.
- {{domxref("PerformanceScriptTiming.sourceCharPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die die Zeichenposition des Skript-Features darstellt, das zum LoAF beigetragen hat.
- {{domxref("PerformanceScriptTiming.sourceFunctionName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen string zurück, der den Namen der Funktion darstellt, die zum LoAF beigetragen hat.
- {{domxref("PerformanceScriptTiming.sourceURL")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen string zurück, der die URL des Skripts darstellt.
- {{domxref("PerformanceScriptTiming.window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu einem {{domxref("Window")}} Objekt zurück, das das `window` des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}) darstellt, in dem das LoAF verursachende Skript ausgeführt wurde.
- {{domxref("PerformanceScriptTiming.windowAttribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen aufgezählten Wert zurück, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}) beschreibt, in dem das LoAF verursachende Skript ausgeführt wurde, relativ zu dem Fenster, das das aktuelle Dokument ausführt.

## Instanzmethoden

- {{domxref("PerformanceScriptTiming.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Repräsentation des `PerformanceScriptTiming` Objekts zurück.

## Beispiele

Siehe [Lange Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit dem Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lange Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
