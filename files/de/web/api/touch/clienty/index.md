---
title: "Touch: clientY Eigenschaft"
short-title: clientY
slug: Web/API/Touch/clientY
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die **`Touch.clientY`** schreibgeschützte Eigenschaft gibt die Y-Koordinate des Berührungspunkts relativ zum Viewport des Browsers zurück, ohne Berücksichtigung eines Bildlaufversatzes.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunkts relativ zum Viewport darstellt, ohne Berücksichtigung eines Bildlaufversatzes.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der Eigenschaften [`Touch`](/de/docs/Web/API/Touch) des Objekts [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und `Touch.clientY`. Die Eigenschaft [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) ist die horizontale Koordinate eines Berührungspunkts relativ zum Viewport des Browsers ohne Berücksichtigung eines Bildlaufversatzes. Die `Touch.clientY`-Eigenschaft ist die vertikale Koordinate des Berührungspunkts relativ zum Viewport des Browsers ohne Berücksichtigung eines Bildlaufversatzes.

In diesem Beispiel gehen wir davon aus, dass der Nutzer eine Berührung auf einem Element mit der ID `source` initiiert, sich innerhalb des Elements oder aus dem Element heraus bewegt und dann den Kontakt mit der Oberfläche beendet. Wenn der [`touchend`](/de/docs/Web/API/Element/touchend_event) Ereignishandler aufgerufen wird, werden die Änderungen in den Koordinaten [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) und `Touch.clientY` vom startenden Berührungspunkt bis zum endenden Berührungspunkt berechnet.

```js
// Register touchstart and touchend listeners for element 'source'
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener("touchstart", (e) => {
  // Cache the client X/Y coordinates
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
});

src.addEventListener("touchend", (e) => {
  let deltaX;
  let deltaY;

  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;

  // Process the data…
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
