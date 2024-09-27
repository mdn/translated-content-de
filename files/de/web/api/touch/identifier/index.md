---
title: "Touch: identifier Eigenschaft"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

Der **`Touch.identifier`** gibt einen Wert zurück, der diesen Berührungspunkt auf der Berührungsoberfläche eindeutig identifiziert. Dieser Wert bleibt für jedes Ereignis, das mit der Bewegung dieses Fingers (oder Stylus) auf der Oberfläche zusammenhängt, gleich, bis er von der Oberfläche gehoben wird.

## Wert

Ein `long`, der die eindeutige ID des [`Touch`](/de/docs/Web/API/Touch)-Objekts darstellt.

## Beispiele

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // Iterate through the list of touch points that changed
    // since the last event and print each touch point's identifier.
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(
        `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
      );
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
