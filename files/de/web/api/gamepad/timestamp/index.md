---
title: "Gamepad: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/Gamepad/timestamp
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.timestamp`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Daten für dieses Gamepad zuletzt aktualisiert wurden.

Die Idee dahinter ist, Entwicklern die Möglichkeit zu geben, festzustellen, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut des [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces sein. Werte sind monoton ansteigend, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte immer größer als oder gleich älteren Werten sein werden.

> [!NOTE]
> Diese Eigenschaft wird derzeit nirgends unterstützt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt.

## Beispiele

```js
const gp = navigator.getGamepads()[0];
console.log(gp.timestamp);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
