---
title: "Touch: pageY-Eigenschaft"
short-title: pageY
slug: Web/API/Touch/pageY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`Touch.pageY`**-Eigenschaft gibt die Y-Koordinate des Berührungspunktes relativ zum Ansichtsfenster zurück, einschließlich eines eventuellen Scrollversatzes.

## Wert

Ein `double`-Gleitkommawert, der die Y-Koordinate des Berührungspunktes relativ zum Ansichtsfenster darstellt, einschließlich eines eventuellen Scrollversatzes.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und `Touch.pageY` des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen werden kann. Die Eigenschaft [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) ist die horizontale Koordinate eines Berührungspunktes relativ zum Ansichtsfenster (in CSS-Pixeln), einschließlich eines eventuellen Scrollversatzes. Die `Touch.pageY`-Eigenschaft ist die vertikale Koordinate eines Berührungspunktes relativ zum Ansichtsfenster (in CSS-Pixeln), einschließlich eines eventuellen Scrollversatzes.

Im folgenden einfachen Codebeispiel nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche loslässt. Wenn der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler aufgerufen wird, werden die [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und `Touch.pageY`-Koordinaten jedes Berührungspunktes über die [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste des Ereignisses abgerufen.

```js
// Register a touchmove listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener(
  "touchmove",
  (e) => {
    // Iterate through the touch points that have moved and log each
    // of the pageX/Y coordinates. The unit of each coordinate is CSS pixels.
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
      console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
