---
title: "Touch: clientY-Eigenschaft"
short-title: clientY
slug: Web/API/Touch/clientY
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ APIRef("Touch Events") }}

Die **`Touch.clientY`** schreibgeschützte Eigenschaft gibt die Y-Koordinate des Berührungspunkts relativ zur Ansicht des Browsers zurück, ohne jeglichen Scroll-Offset.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunkts relativ zur Ansicht darstellt, ohne jeglichen Scroll-Offset.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der Eigenschaften [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und `Touch.clientY` des [`Touch`](/de/docs/Web/API/Touch)-Objekts. Die [`Touch.clientX`](/de/docs/Web/API/Touch/clientX)-Eigenschaft ist die horizontale Koordinate eines Berührungspunkts relativ zur Ansicht des Browsers, ohne jeglichen Scroll-Offset. Die `Touch.clientY`-Eigenschaft ist die vertikale Koordinate des Berührungspunkts relativ zur Ansicht des Browsers, ohne jeglichen Scroll-Offset.

In diesem Beispiel gehen wir davon aus, dass der Benutzer eine Berührung auf einem Element mit der ID `source` beginnt, sich innerhalb des Elements oder aus dem Element heraus bewegt und dann den Kontakt mit der Oberfläche beendet. Wenn der [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignishandler aufgerufen wird, werden die Änderungen in den `Touch.clientX`- und `Touch.clientY`-Koordinaten vom Anfangsberührungspunkt bis zum Endberührungspunkt berechnet.

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
