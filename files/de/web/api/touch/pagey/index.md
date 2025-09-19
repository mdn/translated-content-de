---
title: "Touch: pageY-Eigenschaft"
short-title: pageY
slug: Web/API/Touch/pageY
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`Touch.pageY`**-Eigenschaft gibt die Y-Koordinate des Berührungspunkts relativ zum Viewport zurück, einschließlich jeglichem Bildlaufversatz.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunkts relativ zum Viewport darstellt, einschließlich jeglichem Bildlaufversatz.

## Beispiele

Dieses Beispiel veranschaulicht, wie auf die [`Touch`](/de/docs/Web/API/Touch)-Objekteigenschaften [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und `Touch.pageY` zugegriffen wird. Die [`Touch.pageX`](/de/docs/Web/API/Touch/pageX)-Eigenschaft ist die horizontale Koordinate eines Berührungspunkts relativ zum Viewport (in CSS-Pixeln), einschließlich jeglichem Bildlaufversatz. Die `Touch.pageY`-Eigenschaft ist die vertikale Koordinate eines Berührungspunkts relativ zum Viewport (in CSS-Pixeln), einschließlich jeglichem Bildlaufversatz.

Im folgenden einfachen Codebeispiel nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche löst. Wenn der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler aufgerufen wird, werden die `Touch.pageX`- und `Touch.pageY`-Koordinaten jedes Berührungspunkts über die [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste des Ereignisses abgerufen.

```js
// Register a touchmove listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener("touchmove", (e) => {
  // Iterate through the touch points that have moved and log each
  // of the pageX/Y coordinates. The unit of each coordinate is CSS pixels.
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
    console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
