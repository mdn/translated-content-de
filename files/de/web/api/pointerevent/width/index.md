---
title: "PointerEvent: width-Eigenschaft"
short-title: width
slug: Web/API/PointerEvent/width
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Pointer Events") }}

Die **`width`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die nur gelesen werden kann, stellt die Breite der Kontaktgeometrie des Zeigers entlang der x-Achse dar, gemessen in CSS-Pixeln. Abhängig von der Quelle des Zeigergeräts (wie einem Finger) kann jedes Ereignis für einen bestimmten Zeiger einen anderen Wert erzeugen.

Wenn die Eingabegeräte-Hardware die Kontaktgeometrie nicht an den Browser melden kann, beträgt die Breite standardmäßig `1`.

## Wert

Die Breite der Kontaktfläche des Ereignisses (in CSS-Pixeln).

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `width`- und [`height`](/de/docs/Web/API/PointerEvent/height)-Eigenschaften der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle zur Berechnung der Kontaktfläche.

```js
target.addEventListener(
  "pointerdown",
  (ev) => {
    // Calculate the contact area
    const area = ev.width * ev.height;
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
