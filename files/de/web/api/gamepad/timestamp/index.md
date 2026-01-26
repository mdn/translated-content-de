---
title: "Gamepad: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/Gamepad/timestamp
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Die **`Gamepad.timestamp`**-Eigenschaft des [`Gamepad`](/de/docs/Web/API/Gamepad)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den letzten Zeitpunkt darstellt, zu dem die Daten für dieses Gamepad aktualisiert wurden.

Der Gedanke dahinter ist, Entwicklern die Möglichkeit zu geben, festzustellen, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut des [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interfaces sein. Die Werte steigen monoton an, was bedeutet, dass sie verglichen werden können, um die Reihenfolge der Aktualisierungen zu bestimmen, da neuere Werte immer größer oder gleich älteren Werten sein werden.

> [!NOTE]
> Diese Eigenschaft wird derzeit nirgendwo unterstützt.

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

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
