---
title: "IdleDeadline: didTimeout-Eigenschaft"
short-title: didTimeout
slug: Web/API/IdleDeadline/didTimeout
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Background Tasks")}}

Die schreibgeschützte **`didTimeout`**-Eigenschaft des
**[`IdleDeadline`](/de/docs/Web/API/IdleDeadline)**-Interfaces ist ein Boolean-Wert, der anzeigt, ob der Leerlauf-Callback aufgerufen wird, weil das bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) angegebene Timeout-Intervall abgelaufen ist.

Wenn `didTimeout` `true` ist, wird die `IdleDeadline`-Objekt-Methode
[`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining)
ungefähr 0 zurückgeben.

Leerlauf-Callbacks unterstützen das Konzept eines Timeouts, um sicherzustellen, dass die anstehende Aufgabe tatsächlich ausgeführt wird, selbst wenn der Benutzeragent nie genügend freie Zeit zur Verfügung hat. Ihr Callback prüft typischerweise den Wert von `didTimeout`, wenn eine Aktion ausgeführt werden muss, selbst wenn der Browser zu beschäftigt ist, um Ihnen Zeit zu gewähren. Sie sollten reagieren, indem Sie die benötigte Aufgabe oder idealerweise einen minimalen Arbeitsaufwand ausführen, um den Fortschritt aufrechtzuerhalten, und dann einen neuen Callback terminieren, um erneut zu versuchen, den Rest der Arbeit zu erledigen.

## Wert

Ein Boolean, der `true` ist, wenn der Callback aufgrund des Ablaufs des Timeout-Zeitraums ausgeführt wird, oder `false`, wenn der Callback ausgeführt wird, weil der Benutzeragent im Leerlauf ist und dem Callback Zeit zur Verfügung stellt.

## Beispiele

Siehe unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung der Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
