---
title: "Gamepad: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/Gamepad/timestamp
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Gamepad API")}}

Die schreibgeschützte Eigenschaft **`timestamp`** der Schnittstelle [`Gamepad`](/de/docs/Web/API/Gamepad) gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt der letzten Aktualisierung der Daten dieses Gamepads angibt.

Damit können Entwickler feststellen, ob die Daten von `axes` und `button` durch die Hardware aktualisiert wurden. Der Wert muss relativ zum Attribut `navigationStart` der Schnittstelle [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) sein. Die Werte steigen monoton an. Sie können daher verglichen werden, um die Reihenfolge der Aktualisierungen zu bestimmen: Neuere Werte sind immer größer oder gleich älteren Werten.

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

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
