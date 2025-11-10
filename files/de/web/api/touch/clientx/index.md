---
title: "Touch: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/Touch/clientX
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft `Touch.clientX` gibt die X-Koordinate des Berührungspunkts relativ zum Viewport zurück, ohne Berücksichtigung eines Scroll-Offsets.

## Wert

Ein `double` Gleitkommawert, der die X-Koordinate des Berührungspunkts relativ zum Viewport darstellt, ohne Berücksichtigung eines Scroll-Offsets.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der Eigenschaften `Touch.clientX` und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) des [`Touch`](/de/docs/Web/API/Touch)-Objekts. Die Eigenschaft `Touch.clientX` ist die horizontale Koordinate eines Berührungspunkts relativ zum Viewport des Browsers ohne Berücksichtigung eines Scroll-Offsets. Die Eigenschaft [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) ist die vertikale Koordinate des Berührungspunkts relativ zum Viewport des Browsers ohne Berücksichtigung eines Scroll-Offsets.

In diesem Beispiel gehen wir davon aus, dass der Nutzer eine Berührung auf einem Element mit der ID `source` beginnt, sich innerhalb des Elements oder aus dem Element heraus bewegt und dann den Kontakt mit der Oberfläche beendet. Wenn der [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignishandler aufgerufen wird, werden die Änderungen in den `Touch.clientX`- und [`Touch.clientY`](/de/docs/Web/API/Touch/clientY)-Koordinaten vom Startberührungspunkt bis zum Endberührungspunkt berechnet.

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
