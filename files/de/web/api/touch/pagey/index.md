---
title: "Touch: pageY-Eigenschaft"
short-title: pageY
slug: Web/API/Touch/pageY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.pageY`** gibt die Y-Koordinate des Berührungspunkts relativ zur Ansicht zurück, einschließlich eines möglichen Scroll-Versatzes.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunkts relativ zur Ansicht darstellt, einschließlich eines möglichen Scroll-Versatzes.

## Beispiele

Dieses Beispiel zeigt, wie Sie auf die Eigenschaften [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) und `Touch.pageY` des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugreifen können. Die Eigenschaft [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) ist die horizontale Koordinate eines Berührungspunkts relativ zur Ansicht (in CSS-Pixeln), einschließlich eines möglichen Scroll-Versatzes. Die Eigenschaft `Touch.pageY` ist die vertikale Koordinate eines Berührungspunkts relativ zur Ansicht (in CSS-Pixeln), einschließlich eines möglichen Scroll-Versatzes.

Im folgenden einfachen Code-Schnipsel nehmen wir an, dass der Benutzer einen oder mehrere Berührungspunkte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte zur Oberfläche loslässt. Wenn der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler aufgerufen wird, werden die [`Touch.pageX`](/de/docs/Web/API/Touch/pageX)- und `Touch.pageY`-Koordinaten jedes Berührungspunkts über die [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste abgerufen.

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
