---
title: "PerformanceLongAnimationFrameTiming: Eigenschaft blockingDuration"
short-title: blockingDuration
slug: Web/API/PerformanceLongAnimationFrameTiming/blockingDuration
l10n:
  sourceCommit: dcef271d72ac6af79454379af98cdb670c417eb5
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`blockingDuration`** der Schnittstelle [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück. Dieser gibt die Gesamtdauer in Millisekunden an, während der der Hauptthread daran gehindert war, auf Aufgaben mit hoher Priorität, etwa Benutzereingaben, zu reagieren.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beschreibung

Zur Berechnung von `blockingDuration` werden alle [langen Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF berücksichtigt, deren `duration` mehr als `50ms` beträgt. Von jedem dieser Werte werden `50ms` abgezogen, die Rendering-Zeit wird zur Dauer des längsten Tasks addiert und die Ergebnisse werden summiert. Ein Beispiel verdeutlicht, was das bedeutet.

Angenommen, die Verarbeitung einer JavaScript-Datei dauert insgesamt 145 ms. Nachdem der erste größere Teil des Skripts in 65 ms verarbeitet wurde, könnten wir die Ausführung des verbleibenden Skripts als zweiten Task fortsetzen. Dieser zweite Task würde 80 ms dauern. Diese Aufteilung ist gegenüber der Ausführung des gesamten Skripts als einzelner Task vorzuziehen, weil der Browser so zwischen den Tasks Benutzerinteraktionen verarbeiten kann. Dieser Ansatz wird als **Yielding** bezeichnet. Beispielsweise können Sie nach der Ausführung des ersten größeren Skriptteils einen Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) einfügen, um die Ausführung zu unterbrechen.

Dabei gibt es drei Möglichkeiten, wie das Skript verarbeitet werden könnte:

1. Wenn wir die Ausführung nach den ersten 65 ms unterbrechen, kann der Browser entscheiden, einen Frame zu rendern, bevor er den Rest des Skripts ausführt.
2. Alternativ könnte der Browser zuerst den Rest des Skripts ausführen und anschließend den Frame rendern.
3. Wir könnten auch entscheiden, die Ausführung **nicht** zu unterbrechen und den Browser das gesamte Skript als einzelnen Task verarbeiten lassen.

> [!NOTE]
> Der Browser versucht im Allgemeinen, wichtigen Aufgaben wie Benutzerinteraktionen und dem Rendern neuer Frames Vorrang vor weniger wichtigen Aufgaben in seiner Warteschlange zu geben. Er _versucht_, alle 16 ms einen neuen Frame zu rendern.

Wie bereits erwähnt, beträgt die gesamte Verarbeitungszeit des Skripts 145 ms. Wenn das Rendern der aktualisierten Benutzeroberfläche 10 ms dauert, ergeben sich für die LoAFs in den drei Varianten folgende Werte:

| Variante | `duration` (LoAF 1) | `blockingDuration` (LoAF 1)       | `duration` (LoAF 2) | `blockingDuration` (LoAF 2) |
| -------- | ------------------- | --------------------------------- | ------------------- | --------------------------- |
| 1        | 65ms                | 15ms (65 - 50)                    | 80ms                | 40ms (80 + 10 - 50)         |
| 2        | 145ms (65 + 80)     | 55ms ((65 - 50) + (80 + 10 - 50)) | n/a\*               | n/a\*                       |
| 3        | 145ms (65 + 80)     | 105ms ((65 + 80) + 10 - 50)       | n/a\*               | n/a\*                       |

`*` In den Varianten 2 und 3 gibt es nur einen LoAF.

Beachten Sie, dass die gesamte `blockingDuration` in den ersten beiden Varianten gleich ist (55 ms) – der Browser hat die Arbeit lediglich auf unterschiedliche Weise aufgeteilt.

In Variante 3 ist die `blockingDuration` dagegen deutlich länger, weil der Browser vollständig blockiert ist und den langen Task nicht unterbrechen kann. Das zeigt, wie wichtig es ist, lange Tasks durch Yielding zu optimieren: Unabhängig davon, wie der Browser die Tasks verarbeitet, ist die Blockierungsdauer geringer, als wenn die Ausführung überhaupt nicht unterbrochen wird.

Der Unterschied zwischen `duration` und `blockingDuration` bei LoAFs lässt sich wie folgt zusammenfassen:

- `duration` misst die gesamte Dauer des LoAF. Damit lässt sich erkennen, ob etwa Layout und Zeichnen des Frames viel Zeit beansprucht haben.
- `blockingDuration` misst die Gesamtzeit, während der der LoAF den Hauptthread daran gehindert hat, auf Aufgaben mit hoher Priorität wie Benutzerinteraktionen zu reagieren. Dadurch kann sich die Benutzeroberfläche {{Glossary("Jank", "ruckelig")}} anfühlen. Anders ausgedrückt: Der Wert misst die Auswirkungen des LoAF auf die Reaktionsfähigkeit.

Die `blockingDuration` jedes Tasks wird als `duration - 50ms` berechnet, weil Verzögerungen bei der Reaktion von mehr als 50 ms für Benutzer wahrnehmbar werden. Ab diesem Schwellenwert bemerken Benutzer, dass die Oberfläche träge reagiert. Deshalb ist es wichtig, die Zeit oberhalb der 50-ms-Grenze zu messen, um das Ausmaß des Ruckelns zu bestimmen. Weitere Informationen finden Sie unter [Total Blocking Time (TBT)](https://web.dev/articles/tbt).

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
- [Lange Tasks optimieren](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
