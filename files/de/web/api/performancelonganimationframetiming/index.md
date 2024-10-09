---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongAnimationFrameTiming`** Schnittstelle ist im Long Animation Frames API spezifiziert und liefert Metriken zu langen Animationsrahmen (LoAFs), die das Rendering einnehmen und andere Aufgaben blockieren, sodass diese nicht ausgeführt werden können.

## Beschreibung

Lange Animationsrahmen (LoAFs) sind Render-Updaten, die über 50ms hinaus verzögert werden. LoAFs können zu langsamen Benutzeroberflächen- (UI) Aktualisierungen führen, wodurch Steuerungselemente unempfänglich wirken und es zu {{Glossary("Jank", "ruckeligen")}} (nicht sanften) Animationseffekten und Scrollen kommt. Dies führt oft zu Benutzerfrustration.

Die Schnittstelle `PerformanceLongAnimationFrameTiming` bietet die folgende detaillierte Informationssammlung über LoAFs, damit Entwickler ihre Ursachen genauer eingrenzen können:

- Ein detaillierter Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Erstellung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft. Diese gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten zurück, eines für jedes Skript.

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für lange Animationsrahmen-Leistungseinträge:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die benötigte Zeit in Millisekunden angibt, um das LoAF vollständig zu verarbeiten.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Zeit angibt, zu der der Animationsrahmen begonnen hat.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Gesamtzeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben zu reagieren, wie z.B. der Benutzer-Eingabe. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs, die eine `duration` von mehr als `50ms` haben, betrachtet werden, `50ms` von jeder abgezogen werden, die Rendering-Zeit zur längsten Aufgabendauer hinzugefügt und die Ergebnisse summiert werden.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Zeit des ersten UI-Ereignisses angibt – wie z.B. ein Maus- oder Tastaturereignis –, das während des aktuellen Animationsrahmens in die Warteschlange gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das den Startzeitpunkt des Rendering-Zyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufe umfasst.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das den Beginn der Zeitspanne angibt, die für Stil- und Layoutberechnungen des aktuellen Animationsrahmens aufgewendet wird.

## Instanz-Methoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming` Objekts zurück.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele zum Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
