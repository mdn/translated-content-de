---
title: IdleDeadline
slug: Web/API/IdleDeadline
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Background Tasks")}}

Das `IdleDeadline`-Interface wird als Datentyp des Eingabeparameters für Leerlauf-Rückrufe verwendet, die durch den Aufruf von {{domxref("Window.requestIdleCallback()")}} eingerichtet werden. Es bietet eine Methode, {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}}, mit der Sie feststellen können, wie lange der User-Agent voraussichtlich noch im Leerlauf bleibt, und eine Eigenschaft, {{domxref("IdleDeadline.didTimeout", "didTimeout")}}, mit der Sie feststellen können, ob Ihr Rückruf ausgeführt wird, weil die Timeout-Dauer abgelaufen ist.

Um mehr darüber zu erfahren, wie Rückrufanforderungen funktionieren, lesen Sie bitte [Kollaborative Terminierung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API).

## Instanzeigenschaften

- {{domxref("IdleDeadline.didTimeout")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` ist, wenn der Rückruf ausgeführt wird, weil das beim Einrichten des Leerlauf-Rückrufs festgelegte Timeout abgelaufen ist.

## Instanzmethoden

- {{domxref("IdleDeadline.timeRemaining()")}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der eine Fließkommazahl ist und eine Schätzung der verbleibenden Millisekunden im aktuellen Leerlaufzeitraum bietet. Wenn der Leerlaufzeitraum vorbei ist, ist der Wert 0. Ihr Rückruf kann dies wiederholt aufrufen, um festzustellen, ob noch genügend Zeit bleibt, um mehr Arbeit zu erledigen, bevor er zurückkehrt.

## Beispiel

Sehen Sie unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
