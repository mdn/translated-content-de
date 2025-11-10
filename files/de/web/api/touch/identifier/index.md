---
title: "Touch: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die **`Touch.identifier`**-Eigenschaft gibt einen Wert zurück, der diesen Berührungspunkt auf der Oberfläche eindeutig identifiziert. Dieser Wert bleibt für jedes Ereignis, das die Bewegung dieses Fingers (oder Stiftes) auf der Oberfläche betrifft, konsistent, bis er von der Oberfläche abgehoben wird.

## Wert

Ein `long`, der die eindeutige ID des [`Touch`](/de/docs/Web/API/Touch)-Objekts darstellt.

## Beispiele

```js
someElement.addEventListener("touchmove", (e) => {
  // Iterate through the list of touch points that changed
  // since the last event and print each touch point's identifier.
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(
      `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
