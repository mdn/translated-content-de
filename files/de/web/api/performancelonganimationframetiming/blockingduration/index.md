---
title: "PerformanceLongAnimationFrameTiming: blockingDuration-Eigenschaft"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`blockingDuration`** des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, während der der Haupt-Thread blockiert war und nicht auf Aufgaben mit hoher Priorität, wie z.B. Benutzereingaben, reagieren konnte.

## Beschreibung

`blockingDuration` wird berechnet, indem alle [Long Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF herangezogen werden, die eine `duration` von mehr als `50ms` haben, von jedem `50ms` subtrahiert, die Renderzeit zur längsten Task-Zeit hinzugefügt und die Ergebnisse summiert werden. Sehen wir uns ein Beispiel an, um zu verdeutlichen, was das bedeutet.

Betrachten Sie eine JavaScript-Datei, die insgesamt 145ms zur Verarbeitung benötigt. Nachdem der erste Hauptteil des Skripts in 65ms verarbeitet wurde, könnten wir erwägen, die Ausführung des restlichen Skripts in eine zweite Aufgabe aufzuteilen, wobei diese zweite Aufgabe 80ms zur Ausführung benötigt. Eine solche Aufteilung der Verarbeitung ist vorzuziehen, da sie dem Browser die Möglichkeit gibt, zwischen den Aufgaben Benutzerinteraktionen zu bearbeiten. Dieser Ansatz ist als **yielding** bekannt. Zum Beispiel können Sie eine [`setTimeout()`](/de/docs/Web/API/SetTimeout) einfügen, nachdem der erste Hauptteil des Skripts ausgeführt wurde.

Es gibt hier drei Möglichkeiten, wie das Skript verarbeitet werden könnte:

1. Wenn wir nach den ersten 65ms "yielden", kann der Browser entscheiden, einen Frame zu rendern, bevor der Rest des Skripts ausgeführt wird.
2. Alternativ könnte der Browser den Rest des Skripts zuerst ausführen und dann den Frame rendern.
3. Wir könnten auch entscheiden, **nicht** zu "yielden" und den Browser das gesamte Skript als eine einzige Aufgabe verarbeiten lassen.

> [!NOTE]
> Der Browser versucht im Allgemeinen, wichtige Aufgaben, wie Benutzereingaben und das Rendern neuer Frames, über weniger wichtige Aufgaben, die er möglicherweise in der Warteschlange hat, zu priorisieren. Der Browser _versucht_, alle 16ms einen neuen Frame zu rendern.

Wir haben zuvor erwähnt, dass die gesamte Verarbeitungszeit für das Skript 145ms beträgt. Angenommen, die Zeit für das Rendern des UI-Updates beträgt 10ms, sind die Zeiten für die LoAFs bei jeder der drei Optionen wie folgt:

| Option | `duration` (LoAF 1) | `blockingDuration` (LoAF1)        | `duration` (LoAF2) | `blockingDuration` (LoAF2) |
| ------ | ------------------- | --------------------------------- | ------------------ | -------------------------- |
| 1      | 65ms                | 15ms (65 - 50)                    | 80ms               | 40ms (80 + 10 - 50)        |
| 2      | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*              | n/a\*                      |
| 3      | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*              | n/a\*                      |

`*` In den Optionen 2 und 3 gibt es nur ein einzelnes LoAF.

Beachten Sie, dass die gesamte `blockingDuration` in den ersten beiden Optionen gleich ist (55ms) — in jedem Fall hat der Browser entschieden, die Arbeit auf unterschiedliche Weise zu teilen.

Option 3 hingegen hat eine viel längere `blockingDuration`, weil der Browser vollständig blockiert ist und die lange Aufgabe überhaupt nicht unterbrechen kann. Dies unterstreicht die Bedeutung der Optimierung von langen Aufgaben durch "yielding" — unabhängig davon, wie der Browser entscheidet, die Aufgaben zu handeln, wird die Blockierungsdauer immer noch kürzer sein, als wenn Sie überhaupt nicht "yielden".

Der Unterschied zwischen `duration` und `blockingDuration` von LoAFs kann wie folgt zusammengefasst werden:

- `duration` ist ein Maß für die gesamte Antwortzeit des LoAF, was nützlich ist, um zu verstehen, ob das Layout, das Malen usw. des Frames lange gedauert hat.
- `blockingDuration` ist ein Maß für die gesamte Zeit, die der LoAF den Haupt-Thread daran gehindert hat, auf Aufgaben hoher Priorität zu reagieren, wie z.B. Benutzereingaben, die dazu führen können, dass sich die Benutzeroberfläche {{Glossary("Jank", "rückständig")}} anfühlt. Anders ausgedrückt, es ist ein Maß für den Einfluss des LoAF auf die Reaktionsfähigkeit.

Der Grund, warum die `blockingDuration` jeder Aufgabe als `duration - 50ms` berechnet wird, ist, dass Antwortverzögerungen von über 50ms für Benutzer bemerkbar werden. Diese Schwelle ist, wenn Benutzer anfangen, Trägheit zu bemerken; daher ist die Zeit über dem 50ms-Marke wichtig, um die Schwere der Rückständigkeit zu bestimmen. Weitere Details finden Sie unter [Total Blocking Time (TBT)](https://web.dev/articles/tbt).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
