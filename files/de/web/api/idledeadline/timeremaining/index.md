---
title: "IdleDeadline: timeRemaining()-Methode"
short-title: timeRemaining()
slug: Web/API/IdleDeadline/timeRemaining
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Background Tasks")}}

Die **`timeRemaining()`**-Methode
der {{domxref("IdleDeadline")}}-Schnittstelle gibt die geschätzte Anzahl von
verbleibenden Millisekunden in der aktuellen Leerlaufperiode zurück. Der Callback kann diese Methode
jederzeit aufrufen, um festzustellen, wie lange er noch arbeiten kann, bevor er zurückkehren muss. Zum
Beispiel kann der Callback, wenn er eine Aufgabe beendet hat und eine weitere beginnen möchte,
`timeRemaining()` aufrufen, um zu sehen, ob genügend Zeit vorhanden ist, um die nächste Aufgabe zu
beenden. Falls nicht, kann der Callback entweder sofort zurückkehren oder eine andere Aufgabe
suchen, die in der verbleibenden Zeit erledigt werden kann.

Sobald `timeRemaining()` den Wert 0 erreicht, wird empfohlen, dass der Callback die Kontrolle
an die Ereignisschleife des Benutzeragenten zurückgibt.

## Syntax

```js-nolint
timeRemaining()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert (der eine Fließkommazahl ist),
der die Anzahl von Millisekunden darstellt, die der Benutzeragent als verbleibend in der aktuellen
Leerlaufperiode schätzt. Der Wert ist idealerweise auf etwa 5 Mikrosekunden genau.

Wenn die {{domxref("IdleDeadline")}}-Objekteigenschaft {{domxref("IdleDeadline.didTimeout", "didTimeout")}}
wahr ist, gibt diese Methode null zurück.

## Beispiele

Siehe unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example)
im Artikel [Kooperative Terminplanung für Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kooperative Terminplanung für Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API)
- {{domxref("IdleDeadline")}}
- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
