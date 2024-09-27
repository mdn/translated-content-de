---
title: "Touch: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/Touch/clientX
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft `Touch.clientX` gibt die X-Koordinate des Berührungspunktes relativ zur Ansicht, ohne Scrollversatz, zurück.

## Wert

Ein `double` Gleitkommawert, der die X-Koordinate des Berührungspunktes relativ zur Ansicht darstellt, ohne Scrollversatz.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Eigenschaften `Touch.clientX` und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) des [`Touch`](/de/docs/Web/API/Touch)-Objekts. Die Eigenschaft `Touch.clientX` ist die horizontale Koordinate eines Berührungspunktes relativ zum Ansichtsfenster des Browsers ohne Scrollversatz. Die Eigenschaft [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) ist die vertikale Koordinate des Berührungspunktes relativ zum Ansichtsfenster des Browsers ohne Scrollversatz.

In diesem Beispiel wird angenommen, dass der Benutzer eine Berührung auf einem Element mit der ID `source` startet, sich innerhalb des Elements bewegt oder das Element verlässt und dann den Kontakt mit der Oberfläche löst. Wenn der [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignishandler aufgerufen wird, werden die Änderungen der `Touch.clientX`- und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Koordinaten vom Start- bis zum Endberührungspunkt berechnet.

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
