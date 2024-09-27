---
title: "PerformanceLongAnimationFrameTiming: blockingDuration-Eigenschaft"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`blockingDuration`**-Eigenschaft der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Schnittstelle gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, während der der Haupt-Thread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren.

## Beschreibung

`blockingDuration` wird berechnet, indem alle [lange Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF, die eine `Dauer` von mehr als `50ms` haben, zusammengerechnet werden. Dabei wird von jedem `50ms` abgezogen, die Rendering-Zeit zur längsten Task-Zeit hinzugefügt und die Ergebnisse summiert. Sehen wir uns ein Beispiel an, um zu klären, was das bedeutet.

Betrachten Sie eine JavaScript-Datei, die insgesamt 145ms zur Verarbeitung benötigt. Nachdem der erste große Teil des Skripts in 65ms verarbeitet wurde, könnten wir in Betracht ziehen, die Ausführung des verbleibenden Skripts in eine zweite Aufgabe aufzuteilen, wobei diese zweite Aufgabe 80ms zur Ausführung benötigt. Diese Aufteilung der Verarbeitung ist der Ausführung des gesamten Skripts als eine einzige Aufgabe vorzuziehen, da sie dem Browser die Möglichkeit gibt, zwischen den Aufgaben Benutzerinteraktionen zu bearbeiten. Dieser Ansatz ist bekannt als **yielding**. Als Beispiel können Sie eine [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Funktion nach dem ersten großen Teil des Skripts einfügen, um eine Unterbrechung zu ermöglichen.

Es gibt drei Möglichkeiten, wie das Skript letztendlich verarbeitet werden könnte:

1. Wenn wir nach den ersten 65ms `yield` anwenden, kann der Browser entscheiden, einen Frame zu rendern, bevor er den Rest des Skripts ausführt.
2. Alternativ könnte der Browser den Rest des Skripts zuerst ausführen und dann den Frame rendern.
3. Wir könnten auch entscheiden, **nicht** `yield` anzuwenden und den Browser das gesamte Skript als eine einzige Aufgabe verarbeiten lassen.

> [!NOTE]
> Der Browser versucht normalerweise, wichtige Aufgaben, wie Benutzerinteraktionen und das Rendern neuer Frames, über weniger wichtige Aufgaben in der Warteschlange zu priorisieren. Der Browser _versucht_, alle 16ms einen neuen Frame zu rendern.

Wie bereits erwähnt, beträgt die gesamte Verarbeitungszeit für das Skript 145ms. Angenommen, die Zeit für das Rendern des UI-Updates beträgt 10ms, sind die Zeiten für die LoAFs in jeder der drei Optionen wie folgt:

| Option | `duration` (LoAF 1) | `blockingDuration` (LoAF1)        | `duration` (LoAF2) | `blockingDuration` (LoAF2) |
| ------ | ------------------- | --------------------------------- | ------------------ | -------------------------- |
| 1      | 65ms                | 15ms (65 - 50)                    | 80ms               | 40ms (80 + 10 - 50)        |
| 2      | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*              | n/a\*                      |
| 3      | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*              | n/a\*                      |

`*` In den Optionen 2 und 3 gibt es nur einen einzigen LoAF.

Beachten Sie, dass die gesamte `blockingDuration` in den ersten beiden Optionen gleich ist (55ms) — in jedem Fall hat sich der Browser entschieden, die Arbeit auf unterschiedliche Weise aufzuteilen.

Option 3 hingegen hat eine viel längere `blockingDuration`, da der Browser vollständig blockiert ist und die lange Task überhaupt nicht unterbrechen kann. Dies verdeutlicht die Wichtigkeit der Optimierung langer Tasks durch Yielding — unabhängig davon, wie der Browser die Tasks handhabt, wird die Blocking-Dauer immer kürzer sein, als wenn man gar nicht `yields`.

Der Unterschied zwischen `duration` und `blockingDuration` der LoAFs kann wie folgt zusammengefasst werden:

- `duration` ist ein Maß für die gesamte Antwortzeit des LoAF, was nützlich ist, um zu verstehen, ob das Layout, das Malen etc. des Frames lange gedauert haben.
- `blockingDuration` ist ein Maß für die gesamte Zeit, in der das LoAF den Haupt-Thread daran gehindert hat, auf hochpriorisierte Aufgaben wie Benutzerinteraktionen zu reagieren, die dazu führen können, dass die Benutzeroberfläche [ruckelig](/de/docs/Glossary/Jank) wirkt. Anders ausgedrückt, es ist ein Maß für die Auswirkungen des LoAF auf die Reaktionsfähigkeit.

Der Grund, warum `blockingDuration` jeder Aufgabe als `duration - 50ms` berechnet wird, liegt darin, dass Reaktionsverzögerungen von über 50ms für Benutzer wahrnehmbar werden. Diese Schwelle ist der Punkt, an dem Benutzer Trägheit bemerken; daher ist die Zeit über dieser 50ms-Marke wichtig, um das Ausmaß des Ruckelns zu bestimmen. Weitere Details finden Sie unter [Total Blocking Time (TBT)](https://web.dev/articles/tbt).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Sehen Sie sich [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
