---
title: "IdleDeadline: didTimeout-Eigenschaft"
short-title: didTimeout
slug: Web/API/IdleDeadline/didTimeout
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Background Tasks")}}

Die schreibgeschützte **`didTimeout`**-Eigenschaft der
**[`IdleDeadline`](/de/docs/Web/API/IdleDeadline)**-Schnittstelle ist ein Boolescher Wert, der angibt, ob der Idle-Callback aufgerufen wird, weil das beim Aufrufen von [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) angegebene Timeout-Intervall abgelaufen ist.

Wenn `didTimeout` `true` ist, wird die `IdleDeadline`-Objektmethode
[`timeRemaining()`](/de/docs/Web/API/IdleDeadline/timeRemaining) ungefähr 0 zurückgeben.

Idle-Callbacks unterstützen das Konzept eines Timeouts, um sicherzustellen, dass die Aufgabe, die sie ausführen sollen, tatsächlich ausgeführt wird, selbst wenn der Benutzeragent nie genügend inaktive Zeit zur Verfügung hat. Ihr Callback sollte typischerweise den Wert von `didTimeout` überprüfen, wenn eine Aktion ausgeführt werden muss, auch wenn der Browser zu beschäftigt ist, um Ihnen die Zeit zu gewähren; Sie sollten reagieren, indem Sie die benötigte Aufgabe oder idealerweise eine minimale Menge an Arbeit ausführen, die erledigt werden kann, um den Ablauf aufrechtzuerhalten, und dann einen neuen Callback planen, um zu versuchen, den Rest der Arbeit zu erledigen.

## Wert

Ein Boolescher Wert, der `true` ist, wenn der Callback aufgrund des Ablaufens des Callback-Timeouts ausgeführt wird, oder `false`, wenn der Callback ausgeführt wird, weil der Benutzeragent inaktiv ist und dem Callback Zeit zur Verfügung stellt.

## Beispiele

Siehe unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kollaborative Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
