---
title: "Touch: Identifier-Eigenschaft"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

Die **`Touch.identifier`**-Eigenschaft gibt einen Wert zurück, der diesen Berührungspunkt auf der Oberfläche eindeutig identifiziert. Dieser Wert bleibt bei jedem Ereignis im Zusammenhang mit der Bewegung dieses Fingers (oder des Stifts) auf der Oberfläche konsistent, bis er von der Oberfläche abgehoben wird.

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
