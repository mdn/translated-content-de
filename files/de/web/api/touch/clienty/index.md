---
title: "Touch: clientY-Eigenschaft"
short-title: clientY
slug: Web/API/Touch/clientY
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.clientY`** gibt die Y-Koordinate des Berührungspunktes relativ zum Ansichtsfenster des Browsers zurück, ohne Berücksichtigung eines Scroll-Versatzes.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunktes relativ zum Ansichtsfenster darstellt, ohne Berücksichtigung eines Scroll-Versatzes.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der {{domxref("Touch")}}-Objekteigenschaften {{domxref("Touch.clientX")}} und `Touch.clientY`. Die {{domxref("Touch.clientX")}}-Eigenschaft ist die horizontale Koordinate eines Berührungspunktes relativ zum Ansichtsfenster des Browsers ohne Berücksichtigung eines Scroll-Versatzes. Die `Touch.clientY`-Eigenschaft ist die vertikale Koordinate des Berührungspunktes relativ zum Ansichtsfenster des Browsers ohne Berücksichtigung eines Scroll-Versatzes.

In diesem Beispiel nehmen wir an, dass der Benutzer eine Berührung auf einem Element mit der ID `source` initiiert, sich innerhalb des Elements oder aus dem Element heraus bewegt und dann den Kontakt mit der Oberfläche beendet. Wenn der {{domxref("Element/touchend_event", "touchend")}}-Ereignishandler aufgerufen wird, werden die Änderungen in den Koordinaten {{domxref("Touch.clientX")}} und `Touch.clientY` vom Startpunkt der Berührung bis zum Endpunkt der Berührung berechnet.

```js
// Registrieren Sie touchstart- und touchend-Listener für das Element 'source'
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener(
  "touchstart",
  (e) => {
    // Zwischenspeichern der client X/Y-Koordinaten
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

    // Berechnen Sie die Änderung der X- und Y-Koordinaten.
    // Der erste Berührungspunkt in der changedTouches-Liste
    // ist der Berührungspunkt, der gerade von der Oberfläche entfernt wurde.
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;

    // Verarbeiten Sie die Daten…
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
