---
title: "Touch: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/Touch/pageX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.pageX`** gibt die X-Koordinate des Berührungspunkts relativ zum Ansichtsfenster, einschließlich etwaiger Bildlauf-Verschiebung, zurück.

## Wert

Ein `double` Gleitkommawert, der die X-Koordinate des Berührungspunkts relativ zum Ansichtsfenster, einschließlich etwaiger Bildlauf-Verschiebung, darstellt.

## Beispiele

Dieses Beispiel veranschaulicht, wie auf die Eigenschaften `Touch.pageX` des [`Touch`](/de/docs/Web/API/Touch)-Objekts und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) zugegriffen wird. Die Eigenschaft `Touch.pageX` ist die horizontale Koordinate eines Berührungspunkts relativ zum Ansichtsfenster (in CSS-Pixel), einschließlich etwaiger Bildlauf-Verschiebung. Die Eigenschaft [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) ist die vertikale Koordinate eines Berührungspunkts relativ zum Ansichtsfenster (in CSS-Pixel), einschließlich etwaiger Bildlauf-Verschiebung.

Im folgenden einfachen Code-Snippet nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche beendet. Wenn der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler aufgerufen wird, werden die `Touch.pageX`- und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)-Koordinaten jedes Berührungspunkts über die [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste aufgerufen.

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
