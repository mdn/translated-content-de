---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongAnimationFrameTiming`**-Interface ist in der Long Animation Frames API spezifiziert und liefert Metriken zu langen Animationsbildern (LoAFs), die das Rendern beanspruchen und andere Aufgaben blockieren, auszuführen.

## Beschreibung

Lange Animationsbilder (LoAFs) sind Render-Updates, die über 50ms hinaus verzögert werden. LoAFs können zu langsamen Benutzeroberflächen-(UI) Aktualisierungen führen, wodurch Steuerelemente unempfindlich wirken und {{Glossary("Jank", "ruckelige")}} (nicht flüssige) Animationen und Scroll-Effekte entstehen. Dies führt oft zu Benutzerfrustration.

Das `PerformanceLongAnimationFrameTiming`-Interface bietet die folgende detaillierte Information über LoAFs, die Entwicklern hilft, deren Ursache zu ermitteln:

- Ein detaillierter Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Erstellung des LoAF beigetragen hat, über die [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft. Diese gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück, eines für jedes Skript.

## Vererbung

`PerformanceLongAnimationFrameTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für lange Animationsbild-Leistungsmessungen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit in Millisekunden darstellt, die benötigt wurde, um das LoAF vollständig zu verarbeiten.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, welcher immer `"long-animation-frame"` ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der das Animationsbild begann.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongAnimationFrameTiming.blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) an, der die Gesamtdauer in Millisekunden darstellt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF berücksichtigt werden, die eine `duration` von mehr als `50ms` aufweisen, `50ms` von jeder abziehen, die Renderzeit zur längsten Aufgabendauer addieren und die Ergebnisse aufsummieren.
- [`PerformanceLongAnimationFrameTiming.firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit des ersten UI-Ereignisses angibt — wie ein Maus- oder Tastaturereignis — das in die Warteschlange während des aktuellen Animationsbildes gestellt wurde.
- [`PerformanceLongAnimationFrameTiming.renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Renderzyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückrufe einschließt.
- [`PerformanceLongAnimationFrameTiming.scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Instanzen zurück.
- [`PerformanceLongAnimationFrameTiming.styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Beginn des Zeitraums angibt, der für Stil- und Layoutberechnungen im aktuellen Animationsbild benötigt wird.

## Instanzmethoden

- [`PerformanceLongAnimationFrameTiming.toJSON()`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

## Beispiele

Sehen Sie [Timing von langen Animationsbildern](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing von langen Animationsbildern](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
