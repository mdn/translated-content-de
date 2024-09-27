---
title: "PointerEvent: width-Eigenschaft"
short-title: width
slug: Web/API/PointerEvent/width
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Pointer Events") }}

Die **`width`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces, die nur gelesen werden kann, repräsentiert die Breite der Kontaktgeometrie des Zeigers entlang der x-Achse, gemessen in CSS-Pixeln. Abhängig von der Quelle des Zeigergeräts (wie einem Finger) kann für einen gegebenen Zeiger jedes Ereignis einen anderen Wert liefern.

Wenn die Eingabehardware die Kontaktgeometrie nicht an den Browser melden kann, beträgt die Breite standardmäßig `1`.

## Wert

Die Breite des Kontaktbereichs des Ereignisses (in CSS-Pixeln).

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `width`- und [`height`](/de/docs/Web/API/PointerEvent/height)-Eigenschaften des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces zur Berechnung des Kontaktbereichs.

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
