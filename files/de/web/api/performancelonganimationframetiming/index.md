---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongAnimationFrameTiming`**-Schnittstelle ist im Long Animation Frames API spezifiziert und liefert Metriken zu langen Animationsrahmen (LoAFs), die das Rendern beanspruchen und andere Aufgaben blockieren.

## Beschreibung

Lange Animationsrahmen (LoAFs) sind Rendering-Updates, die um mehr als 50 ms verzögert sind. LoAFs können dazu führen, dass Benutzeroberflächen (UIs) langsam aktualisiert werden, wodurch Steuerelemente unempfindlich erscheinen und [ruckelige](/de/docs/Glossary/Jank) (nicht geschmeidige) animierte Effekte und das Scrollen entstehen. Dies führt oft zu Benutzerfrustration.

Die `PerformanceLongAnimationFrameTiming`-Schnittstelle bietet den folgenden detaillierten Satz von Informationen zu LoAFs und ermöglicht Entwicklern, deren Ursachen zu erkennen:

- Ein detaillierter Satz von Zeitstempeln für jedes LoAF.
- Detaillierte Informationen zu jedem Skript, das zur Entstehung des LoAF beigetragen hat, über die Eigenschaft {{domxref("PerformanceLongAnimationFrameTiming.scripts")}}. Diese gibt ein Array von {{domxref("PerformanceScriptTiming")}}-Objekten zurück, eines für jedes Skript.

## Vererbung

`PerformanceLongAnimationFrameTiming` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften für Leistungsdaten von langen Animationsrahmen:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit in Millisekunden darstellt, die zur vollständigen Verarbeitung des LoAF benötigt wurde.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragstyp zurück, der immer `"long-animation-frame"` ist.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Eintragsnamen zurück, der immer `"long-animation-frame"` ist.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit darstellt, zu der der Animationsrahmen gestartet wurde.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- {{domxref("PerformanceLongAnimationFrameTiming.blockingDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert war, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF berücksichtigt werden, deren `duration` mehr als `50ms` beträgt, von jedem 50 ms subtrahiert wird, die Renderzeit zur längsten Aufgabendauer hinzugefügt und die Ergebnisse summiert werden.
- {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit des ersten UI-Ereignisses — wie ein Maus- oder Tastatureingabe-Ereignis — angibt, das während des aktuellen Animationsrahmens in die Warteschlange gestellt wird.
- {{domxref("PerformanceLongAnimationFrameTiming.renderStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der den Startzeitpunkt des Renderzyklus angibt, der {{domxref("Window.requestAnimationFrame()")}}-Rückrufe, Stil- und Layoutberechnung, {{domxref("ResizeObserver")}}-Rückrufe und {{domxref("IntersectionObserver")}}-Rückrufe umfasst.
- {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von {{domxref("PerformanceScriptTiming")}}-Instanzen zurück.
- {{domxref("PerformanceLongAnimationFrameTiming.styleAndLayoutStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der den Beginn des Zeitraums angibt, der für den Stil- und Layoutberechnungen für den aktuellen Animationsrahmen aufgewendet wurde.

## Instanz-Methoden

- {{domxref("PerformanceLongAnimationFrameTiming.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

## Beispiele

Siehe [Lange Animationsrahmen-Zeitmessung](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit dem Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lange Animationsrahmen-Zeitmessung](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
