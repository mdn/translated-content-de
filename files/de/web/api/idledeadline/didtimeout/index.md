---
title: "IdleDeadline: didTimeout-Eigenschaft"
short-title: didTimeout
slug: Web/API/IdleDeadline/didTimeout
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Background Tasks")}}

Die schreibgeschützte **`didTimeout`**-Eigenschaft des
**{{domxref("IdleDeadline")}}**-Interfaces ist ein Boolean-Wert, der anzeigt, ob der Idle-Callback aufgerufen wird, weil das beim Aufruf von {{domxref("Window.requestIdleCallback()")}} angegebene Timeout-Intervall abgelaufen ist.

Wenn `didTimeout` `true` ist, wird die
{{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}}-Methode des `IdleDeadline`-Objekts ungefähr 0 zurückgeben.

Idle-Callbacks unterstützen das Konzept eines Timeouts, um sicherzustellen, dass die auszuführende Aufgabe tatsächlich durchgeführt wird, auch wenn der Benutzeragent nie genügend Leerlaufzeit zur Verfügung hat. Ihr Callback wird in der Regel den Wert von `didTimeout` überprüfen, wenn es eine Aktion ausführen muss, selbst wenn der Browser zu beschäftigt ist, um Ihnen die Zeit zu gewähren; Sie sollten reagieren, indem Sie die benötigte Aufgabe oder, idealerweise, eine minimale Arbeit ausführen, die gemacht werden kann, um den Fortschritt aufrechtzuerhalten, und dann einen neuen Callback planen, um erneut zu versuchen, den Rest der Arbeit zu erledigen.

## Wert

Ein Boolean, der `true` ist, wenn der Callback aufgrund des Ablaufs des Timeout-Zeitraums des Callbacks ausgeführt wird, oder `false`, wenn der Callback ausgeführt wird, weil der Benutzeragent im Leerlauf ist und Zeit für den Callback anbietet.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- {{domxref("IdleDeadline")}}
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
