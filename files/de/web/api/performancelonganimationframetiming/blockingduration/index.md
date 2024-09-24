---
title: "PerformanceLongAnimationFrameTiming: blockingDuration-Eigenschaft"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`blockingDuration`** des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren.

## Beschreibung

`blockingDuration` wird berechnet, indem alle [Long Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF betrachtet werden, die eine `duration` von mehr als `50ms` haben. Von jedem wird `50ms` abgezogen, die Rendering-Zeit zur längsten Task-Dauer hinzugefügt und die Ergebnisse summiert. Schauen wir uns ein Beispiel an, um zu verdeutlichen, was das bedeutet.

Betrachten Sie eine JavaScript-Datei, die insgesamt 145ms zur Verarbeitung benötigt. Nach der ersten großen Bearbeitung des Skripts in 65ms könnte man erwägen, die Ausführung des restlichen Skripts in eine zweite Aufgabe aufzuteilen, wobei die Ausführung dieser zweiten Aufgabe 80ms dauert. Diese Aufteilung der Verarbeitung wird gegenüber der vollständigen Ausführung des Skripts als eine Aufgabe bevorzugt, da sie dem Browser die Möglichkeit gibt, Benutzerinteraktionen zwischen den Aufgaben zu bearbeiten. Dieser Ansatz wird als **Yielding** bezeichnet. Sie können beispielsweise durch das Einfügen eines [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nach der ersten großen Bearbeitung des Skripts unterbrechen.

Es gibt drei Möglichkeiten, wie das Skript verarbeitet werden kann:

1. Wenn wir nach den ersten 65ms unterbrechen, kann der Browser entscheiden, einen Frame zu rendern, bevor er den Rest des Skripts ausführt.
2. Alternativ könnte der Browser das restliche Skript zuerst ausführen und dann den Frame rendern.
3. Wir könnten uns auch entscheiden, **nicht** zu unterbrechen und den Browser das gesamte Skript als eine einzige Aufgabe verarbeiten lassen.

> [!NOTE]
> Der Browser versucht im Allgemeinen, wichtige Aufgaben wie Benutzerinteraktionen und das Rendern neuer Frames gegenüber weniger wichtigen Aufgaben, die möglicherweise in der Warteschlange stehen, zu priorisieren. Der Browser _versucht_, alle 16ms einen neuen Frame zu rendern.

Wir haben bereits erwähnt, dass die Gesamtverarbeitungszeit des Skripts 145ms beträgt. Angenommen, die Zeit für das Rendern der UI-Aktualisierung beträgt 10ms, sind die Zeitangaben für die LoAFs in jeder der drei Optionen wie folgt:

| Option | `duration` (LoAF 1) | `blockingDuration` (LoAF1)        | `duration` (LoAF2) | `blockingDuration` (LoAF2) |
| ------ | ------------------- | --------------------------------- | ------------------ | -------------------------- |
| 1      | 65ms                | 15ms (65 - 50)                    | 80ms               | 40ms (80 + 10 - 50)        |
| 2      | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*              | n/a\*                      |
| 3      | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*              | n/a\*                      |

`*` In den Optionen 2 und 3 gibt es nur ein einziges LoAF.

Beachten Sie, dass die gesamte `blockingDuration` in den ersten beiden Optionen gleich ist (55ms) — in jedem Fall hat der Browser beschlossen, die Arbeit auf unterschiedliche Weise zu teilen.

In Option 3 ist die `blockingDuration` jedoch wesentlich länger, da der Browser vollständig blockiert ist und die lange Aufgabe überhaupt nicht unterbrechen kann. Dies unterstreicht die Wichtigkeit der Optimierung langer Aufgaben durch Yielding — unabhängig davon, wie der Browser beschließt, die Aufgaben zu verarbeiten, wird die Blockierungsdauer trotzdem kürzer sein als wenn Sie überhaupt nicht unterbrechen.

Der Unterschied zwischen `duration` und `blockingDuration` von LoAFs lässt sich wie folgt zusammenfassen:

- `duration` ist ein Maß für die gesamte Antwortzeit des LoAF, was hilfreich ist, um zu verstehen, ob das Layout des Frames, das Malen usw. lange gedauert hat.
- `blockingDuration` ist ein Maß für die gesamte Zeit, in der das LoAF den Hauptthread daran gehindert hat, auf hochpriorisierte Aufgaben wie Benutzerinteraktionen zu reagieren, was dazu führen kann, dass sich die Benutzeroberfläche {{Glossary("Jank", "ruckelig")}} anfühlt. Anders ausgedrückt ist es ein Maß für die Auswirkung, die das LoAF auf die Reaktionsfähigkeit haben wird.

Der Grund, warum die `blockingDuration` jeder Aufgabe als `duration - 50ms` berechnet wird, liegt darin, dass Verzögerungen von über 50ms für Benutzer wahrnehmbar werden. Diese Schwelle ist der Punkt, an dem Benutzer Trägheit zu bemerken beginnen; daher ist die Zeit nach der 50ms-Marke wichtig, um die Schwere des Janks zu bestimmen. Weitere Einzelheiten finden Sie unter [Total Blocking Time (TBT)](https://web.dev/articles/tbt).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele in Bezug auf die Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
