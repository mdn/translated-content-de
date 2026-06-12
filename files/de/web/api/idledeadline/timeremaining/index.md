---
title: "IdleDeadline: timeRemaining() Methode"
short-title: timeRemaining()
slug: Web/API/IdleDeadline/timeRemaining
l10n:
  sourceCommit: 0c1279749322ff9d4fef5576dcee6784a21116c0
---

{{APIRef("Background Tasks")}}

Die **`timeRemaining()`** Methode
der [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Schnittstelle gibt die geschätzte Anzahl von Millisekunden zurück, die der User-Agent noch im Ruhezustand bleiben wird. Der Callback kann diese Methode jederzeit aufrufen, um zu bestimmen, wie lange er weiterarbeiten kann, bevor er zurückkehren muss. Zum Beispiel, wenn der Callback eine Aufgabe beendet hat und eine neue beginnen möchte, kann er `timeRemaining()` aufrufen, um zu sehen, ob genug Zeit ist, die nächste Aufgabe abzuschließen. Wenn nicht, kann der Callback einfach sofort zurückkehren oder nach anderer Arbeit suchen, die mit der verbleibenden Zeit erledigt werden kann.

Bis `timeRemaining()` den Wert `0` erreicht, sollte der Callback die Kontrolle an die Ereignisschleife des User-Agents zurückgeben.

> [!NOTE]
> Der von `timeRemaining()` zurückgegebene Wert ist eine Schätzung, wie viel Zeit der User-Agent glaubt, verfügbar zu haben, bevor die nächste latenzkritische Aufgabe ausgeführt werden muss. Diese Schätzung ist nicht fest und kann plötzlich auf 0 fallen, wenn höher priorisierte Arbeiten eintreffen. Beispielsweise kann sich die Schätzung des Browsers in der Mitte eines Leerlauf-Callbacks ändern, wenn der Benutzer klickt. Entwickler sollten nicht davon ausgehen, dass der Wert sich immer linear wie ein Countdown-Timer verringert.

## Syntax

```js-nolint
timeRemaining()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert (der eine Gleitkommazahl ist), der die Anzahl von Millisekunden darstellt, die der User-Agent im aktuellen Leerlaufzeitraum schätzt. Dieser Wert ist idealerweise bis auf etwa 5 Mikrosekunden genau.

Wenn die [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Eigenschaft [`didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout) wahr ist, gibt diese Methode null zurück.

## Beispiele

Sehen Sie sich unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Terminplanung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Terminplanung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
