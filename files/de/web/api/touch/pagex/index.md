---
title: "Touch: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/Touch/pageX
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.pageX`** gibt die X-Koordinate des Berührungspunkts relativ zur Ansicht, einschließlich eines eventuellen Scrollversatzes, zurück.

## Wert

Ein `double` Gleitkommawert, der die X-Koordinate des Berührungspunkts relativ zur Ansicht darstellt, einschließlich eines eventuellen Scrollversatzes.

## Beispiele

Dieses Beispiel veranschaulicht, wie Sie auf die Eigenschaften `Touch.pageX` und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugreifen können. Die Eigenschaft `Touch.pageX` ist die horizontale Koordinate eines Berührungspunkts relativ zur Ansicht (in CSS-Pixeln), einschließlich eines eventuellen Scrollversatzes. Die Eigenschaft [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) ist die vertikale Koordinate eines Berührungspunkts relativ zur Ansicht (in CSS-Pixeln), einschließlich eines eventuellen Scrollversatzes.

Im folgenden einfachen Code-Schnipsel nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element beginnt, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche löst. Wenn der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler aufgerufen wird, werden die `Touch.pageX`- und [`Touch.pageY`](/de/docs/Web/API/Touch/pageY)-Koordinaten jedes Berührungspunkts über die Liste [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) des Ereignisses abgerufen.

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
