---
title: "PointerEvent: width-Eigenschaft"
short-title: Breite
slug: Web/API/PointerEvent/width
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Pointer Events") }}

Die **`width`**-Eigenschaft der {{domxref("PointerEvent")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Breite der Kontaktgeometrie des Zeigers entlang der x-Achse in CSS-Pixeln darstellt. Je nach Quelle des Zeigereingabegeräts (wie einem Finger) kann für einen bestimmten Zeiger jedes Ereignis einen anderen Wert erzeugen.

Wenn die Eingabegerätehardware die Kontaktgeometrie nicht an den Browser übermitteln kann, beträgt die Breite standardmäßig `1`.

## Wert

Die Breite des Kontaktbereichs des Ereignisses (in CSS-Pixeln).

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `width`- und {{domxref("PointerEvent.height","height")}}-Eigenschaften der {{domxref("PointerEvent")}}-Schnittstelle zur Berechnung der Kontaktfläche.

```js
target.addEventListener(
  "pointerdown",
  (ev) => {
    // Berechnung der Kontaktfläche
    const area = ev.width * ev.height;
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
