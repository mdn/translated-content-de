---
title: "Touch: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/Touch/clientX
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ APIRef("Touch Events") }}

Die nur-lesbare `Touch.clientX`-Eigenschaft gibt die X-Koordinate des Berührungspunktes relativ zum Ansichtsfenster zurück, ohne jeglichen Scrollversatz einzuschließen.

## Wert

Ein `double`-Fließkommawert, der die X-Koordinate des Berührungspunktes relativ zum Ansichtsfenster darstellt, ohne jeglichen Scrollversatz einzuschließen.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der Eigenschaften `Touch.clientX` und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) des [`Touch`](/de/docs/Web/API/Touch)-Objekts. Die `Touch.clientX`-Eigenschaft ist die horizontale Koordinate eines Berührungspunktes relativ zum Ansichtsfenster des Browsers, ohne jeden Scrollversatz. Die [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Eigenschaft ist die vertikale Koordinate des Berührungspunktes relativ zum Ansichtsfenster des Browsers, ebenfalls ohne jeden Scrollversatz.

In diesem Beispiel nehmen wir an, dass ein Benutzer eine Berührung auf einem Element mit der ID `source` initiiert, sich innerhalb des Elements oder aus dem Element herausbewegt und dann den Kontakt mit der Oberfläche beendet. Wenn der [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignishandler aufgerufen wird, werden die Änderungen in den `Touch.clientX`- und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Koordinaten vom Startpunkt der Berührung bis zum Endpunkt der Berührung berechnet.

```js
// Register touchstart and touchend listeners for element 'source'
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener(
  "touchstart",
  (e) => {
    // Cache the client X/Y coordinates
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  },
  false,
);

src.addEventListener(
  "touchend",
  (e) => {
    let deltaX;
    let deltaY;

    // Compute the change in X and Y coordinates.
    // The first touch point in the changedTouches
    // list is the touch point that was just removed from the surface.
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;

    // Process the data…
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
