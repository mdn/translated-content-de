---
title: "Touch: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Gibt die X-Koordinate des Berührungspunkts relativ zum Bildschirm zurück, ohne jeglichen Bildlaufversatz einzuschließen.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie Sie auf die `Touch`-Eigenschaft [`Touch.screenX`](/de/docs/Web/API/Touch) und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) des Touch-Objekts zugreifen können. Die `Touch.screenX`-Eigenschaft ist die horizontale (x) Koordinate eines Berührungspunkts relativ zum Bildschirm in CSS-Pixeln. Die [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) Eigenschaft ist die vertikale Koordinate eines Berührungspunkts relativ zum Bildschirm in CSS-Pixeln.

Im folgenden einfachen Code-Snippet nehmen wir an, dass der Benutzer mehrere Berührungskontakte auf einem Element mit einer ID von `source` initiiert und dann die Kontakte mit der Oberfläche löst. Wenn der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler aufgerufen wird, werden die `Touch.screenX`- und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Koordinaten jedes Berührungspunkts abgerufen.

```js
// Register a touchstart listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener("touchstart", (e) => {
  // Iterate through the touch points and log each screenX/Y coordinate.
  // The unit of each coordinate is CSS pixels.
  for (let i = 0; i < e.touches.length; i++) {
    console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
    console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
