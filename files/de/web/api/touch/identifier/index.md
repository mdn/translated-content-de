---
title: "Touch: identifier-Eigenschaft"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

Die **`Touch.identifier`** gibt einen Wert zurück, der diesen Berührungspunkt auf der Touch-Oberfläche eindeutig identifiziert. Dieser Wert bleibt für jedes Ereignis, das die Bewegung dieses Fingers (oder Stylus) auf der Oberfläche betrifft, konsistent, bis er von der Oberfläche abgehoben wird.

## Wert

Ein `long`, das die eindeutige ID des {{ domxref("Touch") }}-Objekts darstellt.

## Beispiele

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // Iterieren Sie durch die Liste der Berührungspunkte,
    // die sich seit dem letzten Ereignis geändert haben und
    // geben Sie die Kennung jedes Berührungspunktes aus.
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
