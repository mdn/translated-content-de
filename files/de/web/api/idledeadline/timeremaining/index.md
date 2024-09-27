---
title: "IdleDeadline: timeRemaining()-Methode"
short-title: timeRemaining()
slug: Web/API/IdleDeadline/timeRemaining
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Background Tasks")}}

Die **`timeRemaining()`**-Methode
der [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Schnittstelle gibt die geschätzte Anzahl von Millisekunden zurück, die in der aktuellen untätigen Periode verbleiben. Der Rückruf kann diese Methode jederzeit aufrufen, um festzustellen, wie viel Zeit er noch hat, bevor er zurückkehren muss. Zum Beispiel: Wenn der Rückruf eine Aufgabe beendet hat und eine neue starten möchte, kann er `timeRemaining()` aufrufen, um zu prüfen, ob genügend Zeit vorhanden ist, die nächste Aufgabe abzuschließen. Wenn es nicht genügend Zeit gibt, kann der Rückruf einfach sofort zurückkehren oder nach anderen Aufgaben suchen, die er in der verbleibenden Zeit erledigen kann.

Sobald `timeRemaining()` 0 erreicht, wird empfohlen, dass der Rückruf die Kontrolle an die Ereignisschleife des Benutzeragenten zurückgibt.

## Syntax

```js-nolint
timeRemaining()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert (eine Gleitkommazahl),
der die Anzahl von Millisekunden darstellt, die der Benutzeragent schätzt, dass in der aktuellen
untätigen Periode verbleiben. Der Wert ist idealerweise auf etwa 5 Mikrosekunden genau.

Wenn die [`didTimeout`](/de/docs/Web/API/IdleDeadline/didTimeout)-Eigenschaft des [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)-Objekts wahr ist, gibt diese Methode null zurück.

## Beispiele

Sehen Sie sich unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Planung von Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- [`IdleDeadline`](/de/docs/Web/API/IdleDeadline)
- [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)
- [`Window.cancelIdleCallback()`](/de/docs/Web/API/Window/cancelIdleCallback)
