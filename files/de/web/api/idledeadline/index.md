---
title: IdleDeadline
slug: Web/API/IdleDeadline
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Background Tasks")}}

Das `IdleDeadline`-Interface wird als Datentyp des Eingabeparameters für Idle-Rückrufe verwendet, die durch den Aufruf von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) eingerichtet wurden. Es bietet eine Methode, [`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining), mit der Sie feststellen können, wie lange der Benutzer-Agent voraussichtlich noch untätig bleibt, und eine Eigenschaft, [`didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout), mit der Sie feststellen können, ob Ihr Rückruf ausgeführt wird, weil die Timeout-Dauer abgelaufen ist.

Um mehr darüber zu erfahren, wie Rückrufe bei Anfragen funktionieren, lesen Sie den [Leitfaden zur kollaborativen Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API).

## Instanzeigenschaften

- [`IdleDeadline.didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn der Rückruf ausgeführt wird, weil das Zeitlimit, das beim Installieren des Idle-Rückrufs angegeben wurde, abgelaufen ist.

## Instanzmethoden

- [`IdleDeadline.timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der einen Gleitkommawert liefert, welcher eine Schätzung der verbleibenden Millisekunden in der aktuellen Ruhephase darstellt. Wenn die Ruhephase vorbei ist, beträgt der Wert 0. Ihr Rückruf kann dies wiederholt aufrufen, um zu prüfen, ob noch genügend Zeit bleibt, um weitere Arbeiten zu erledigen, bevor zurückgegeben wird.

## Beispiel

Sehen Sie sich unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
