---
title: "Touch: clientX-Eigenschaft"
short-title: clientX
slug: Web/API/Touch/clientX
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft `Touch.clientX` gibt die X-Koordinate des Berührungspunkts relativ zum Ansichtsfenster zurück, ohne jeglichen Scrollversatz einzubeziehen.

## Wert

Ein `double`-Gleitkommawert, der die X-Koordinate des Berührungspunkts relativ zum Ansichtsfenster darstellt, ohne jeglichen Scrollversatz einzubeziehen.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `Touch.clientX`- und {{domxref("Touch.clientY")}}-Eigenschaften des {{domxref("Touch")}}-Objekts. Die `Touch.clientX`-Eigenschaft ist die horizontale Koordinate eines Berührungspunkts relativ zum Ansichtsfenster des Browsers, ohne jeglichen Scrollversatz. Die {{domxref("Touch.clientY")}}-Eigenschaft ist die vertikale Koordinate des Berührungspunkts relativ zum Ansichtsfenster des Browsers, ohne jeglichen Scrollversatz.

In diesem Beispiel gehen wir davon aus, dass der Benutzer eine Berührung auf einem Element mit der ID `source` beginnt, sich innerhalb des Elements oder aus dem Element heraus bewegt und dann den Kontakt mit der Oberfläche löst. Wenn der {{domxref("Element/touchend_event", "touchend")}}-Ereignis-Handler aufgerufen wird, werden die Änderungen in den `Touch.clientX`- und {{domxref("Touch.clientY")}}-Koordinaten vom Start- bis zum Endpunkt der Berührung berechnet.

```js
// Registrieren von touchstart- und touchend-Listenern für das Element 'source'
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener(
  "touchstart",
  (e) => {
    // Die client X/Y-Koordinaten zwischenspeichern
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

    // Die Änderung der X- und Y-Koordinaten berechnen.
    // Der erste Berührungspunkt in der Liste changedTouches
    // ist der Berührungspunkt, der gerade von der Oberfläche entfernt wurde.
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;

    // Die Daten verarbeiten...
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
