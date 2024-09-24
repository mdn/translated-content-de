---
title: "PerformanceLongAnimationFrameTiming: blockingDuration-Eigenschaft"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`blockingDuration`** der {{domxref("PerformanceLongAnimationFrameTiming")}}-Schnittstelle gibt ein {{domxref("DOMHighResTimeStamp")}} zurück, das die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren.

## Beschreibung

`blockingDuration` wird berechnet, indem alle [lange Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs, die eine `duration` von mehr als `50ms` haben, genommen, `50ms` von jedem subtrahiert, die Renderzeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden. Schauen wir uns ein Beispiel an, um das zu verdeutlichen.

Stellen Sie sich eine JavaScript-Datei vor, die insgesamt 145ms zur Verarbeitung benötigt. Nachdem der erste große Teil des Skripts in 65ms verarbeitet wurde, könnten wir erwägen, die Ausführung des restlichen Skripts in eine zweite Aufgabe zu unterteilen, wobei diese zweite Aufgabe 80ms zur Ausführung benötigt. Diese Aufteilung der Verarbeitung ist vorzuziehen, anstatt das gesamte Skript als eine einzige Aufgabe auszuführen, da es dem Browser die Möglichkeit gibt, zwischen den Aufgaben Benutzerinteraktionen zu bearbeiten. Dieser Ansatz wird als **yielding** bezeichnet. Um yielding durchzuführen, können Sie beispielsweise nach dem ersten großen Teil des Skripts einen {{domxref("setTimeout()")}} einfügen.

Es gibt hier drei Optionen, wie das Skript letztendlich verarbeitet werden könnte:

1. Wenn wir nach den ersten 65ms yielding betreiben, kann sich der Browser entscheiden, einen Frame zu rendern, bevor er den Rest des Skripts ausführt.
2. Alternativ könnte der Browser erst den Rest des Skripts ausführen und dann den Frame rendern.
3. Wir könnten uns auch entscheiden, **nicht** zu yielding und den Browser das gesamte Skript als eine einzige Aufgabe verarbeiten lassen.

> [!NOTE]
> Der Browser versucht im Allgemeinen, wichtige Aufgaben wie Benutzerinteraktionen und das Rendern neuer Frames bevorzugt zu behandeln, gegenüber weniger wichtigen Aufgaben, die er möglicherweise in der Warteschlange hat. Der Browser _versucht_, alle 16ms einen neuen Frame zu rendern.

Wie bereits erwähnt, beträgt die Gesamtverarbeitungszeit für das Skript 145ms. Angenommen, die Zeit für das Rendern der UI-Aktualisierung beträgt 10ms, sind die Zeiten für die LoAFs in jeder der drei Optionen wie folgt:

| Option | `duration` (LoAF 1) | `blockingDuration` (LoAF1)        | `duration` (LoAF2) | `blockingDuration` (LoAF2) |
| ------ | ------------------- | --------------------------------- | ------------------ | -------------------------- |
| 1      | 65ms                | 15ms (65 - 50)                    | 80ms               | 40ms (80 + 10 - 50)        |
| 2      | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*              | n/a\*                      |
| 3      | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*              | n/a\*                      |

`*` In den Optionen 2 und 3 gibt es nur ein einziges LoAF.

Beachten Sie, dass die gesamte `blockingDuration` in den ersten beiden Optionen gleich ist (55ms) – in beiden Fällen hat der Browser entschieden, die Arbeit auf unterschiedliche Weise zu unterteilen.

Option 3 hat jedoch eine viel längere `blockingDuration`, da der Browser vollständig blockiert ist und die lange Aufgabe überhaupt nicht unterbrechen kann. Dies verdeutlicht die Bedeutung der Optimierung langer Aufgaben durch yielding – unabhängig davon, wie der Browser sich entscheidet, die Aufgaben zu handhaben, bleibt die Blocking-Dauer kürzer, als wenn Sie überhaupt nicht yielding.

Der Unterschied zwischen `duration` und `blockingDuration` der LoAFs kann wie folgt zusammengefasst werden:

- `duration` ist ein Maß für die gesamte Antwortzeit des LoAFs, was nützlich ist, um zu verstehen, ob das Layout des Frames, das Malen usw. viel Zeit in Anspruch genommen hat.
- `blockingDuration` ist ein Maß für die gesamte Zeit, in der das LoAF den Hauptthread daran gehindert hat, auf hochpriorisierte Aufgaben wie Benutzerinteraktionen zu reagieren, was dazu führen kann, dass die UI [ruckartig](/de/docs/Glossary/Jank) wirkt. Anders ausgedrückt ist es ein Maß für den Einfluss, den das LoAF auf die Reaktionsfähigkeit hat.

Der Grund, warum die `blockingDuration` jeder Aufgabe als `duration - 50ms` berechnet wird, liegt darin, dass Verzögerungen von über 50ms für Benutzer wahrnehmbar werden. Diese Schwelle ist der Punkt, an dem Benutzer beginnen, Trägheit zu bemerken; daher ist es wichtig, die Zeit oberhalb der 50ms-Grenze zu messen, um die Schwere des Janks zu bestimmen. Siehe [Total Blocking Time (TBT)](https://web.dev/articles/tbt) für weitere Details.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
