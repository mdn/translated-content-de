---
title: IdleDeadline
slug: Web/API/IdleDeadline
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Background Tasks")}}

Das `IdleDeadline`-Interface wird als Datentyp des Eingabeparameters für Leerlauf-Callbacks verwendet, die durch Aufrufen von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) eingerichtet werden. Es bietet eine Methode [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining), mit der Sie feststellen können, wie lange der User-Agent voraussichtlich noch im Leerlauf bleibt, und eine Eigenschaft [`didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout), mit der Sie feststellen können, ob Ihr Callback ausgeführt wird, weil seine Timeout-Dauer abgelaufen ist.

Um mehr darüber zu erfahren, wie Rückrufanforderungen funktionieren, siehe [Kollaborative Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API).

## Instanzeigenschaften

- [`IdleDeadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn das Callback ausgeführt wird, weil das beim Installieren des Leerlauf-Callbacks angegebene Timeout abgelaufen ist.

## Instanzmethoden

- [`IdleDeadline.timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der einen Gleitkommawert darstellt und eine Schätzung der verbleibenden Millisekunden im aktuellen Leerlaufzeitraum liefert. Wenn der Leerlaufzeitraum vorbei ist, ist der Wert 0. Ihr Callback kann dies wiederholt aufrufen, um festzustellen, ob noch genügend Zeit bleibt, um mehr Arbeit zu erledigen, bevor es zurückkehrt.

## Beispiel

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
