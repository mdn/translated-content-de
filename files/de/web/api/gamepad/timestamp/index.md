---
title: "Gamepad: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/Gamepad/timestamp
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`Gamepad.timestamp`**-Eigenschaft des {{domxref("Gamepad")}}-Interfaces gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die letzte Aktualisierungszeit der Daten für dieses Gamepad darstellt.

Der Gedanke dahinter ist, Entwicklern zu ermöglichen, zu bestimmen, ob die `axes`- und `button`-Daten von der Hardware aktualisiert wurden. Der Wert muss relativ zum `navigationStart`-Attribut des {{domxref("PerformanceTiming")}}-Interfaces sein. Werte steigen monoton an, was bedeutet, dass sie verglichen werden können, um die Reihenfolge von Updates zu bestimmen, da neuere Werte immer größer oder gleich älterer Werte sind.

> [!NOTE]
> Diese Eigenschaft wird derzeit nirgends unterstützt.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Objekt.

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
