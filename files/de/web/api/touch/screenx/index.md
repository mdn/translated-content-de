---
title: "Touch: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Gibt die X-Koordinate des Berührungspunktes relativ zum Bildschirm zurück, ohne Berücksichtigung eines Scroll-Versatzes.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften `Touch.screenX` und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen wird. Die `Touch.screenX`-Eigenschaft ist die horizontale (x) Koordinate eines Berührungspunktes relativ zum Bildschirm in CSS-Pixeln. Die [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Eigenschaft ist die vertikale Koordinate eines Berührungspunktes relativ zum Bildschirm in CSS-Pixeln.

Im folgenden einfachen Code-Snippet nehmen wir an, dass der Benutzer mehrere Berührungskontakte auf einem Element mit der ID `source` initiiert und dann die Kontakte von der Oberfläche löst. Wenn der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler aufgerufen wird, werden die `Touch.screenX`- und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY)-Koordinaten jedes Berührungspunktes abgerufen.

```js
// Register a touchstart listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // Iterate through the touch points and log each screenX/Y coordinate.
    // The unit of each coordinate is CSS pixels.
    for (let i = 0; i < e.touches.length; i++) {
      console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
      console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
