---
title: "Touch: pageY-Eigenschaft"
short-title: pageY
slug: Web/API/Touch/pageY
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.pageY`** gibt die Y-Koordinate des Berührungspunktes relativ zum Ansichtsbereich zurück, einschließlich jeglichen Scroll-Offsets.

## Wert

Ein `double` Gleitkommawert, der die Y-Koordinate des Berührungspunktes relativ zum Ansichtsbereich darstellt, einschließlich jeglichen Scroll-Offsets.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften {{domxref("Touch")}}-Objektes
{{domxref("Touch.pageX")}} und `Touch.pageY` zugegriffen werden kann. Die
{{domxref("Touch.pageX")}}-Eigenschaft ist die horizontale Koordinate eines Berührungspunktes
relativ zum Ansichtsbereich (in CSS-Pixeln), einschließlich jeglichen Scroll-Offsets. Die
`Touch.pageY`-Eigenschaft ist die vertikale Koordinate eines Berührungspunktes relativ
zum Ansichtsbereich (in CSS-Pixeln), einschließlich jeglichen Scroll-Offsets.

Im folgenden einfachen Code-Snippet nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche löst. Wenn der {{domxref("Element/touchmove_event", "touchmove")}}-Ereignis-Handler aufgerufen wird, werden die {{domxref("Touch.pageX")}}- und `Touch.pageY`-Koordinaten jedes Berührungspunktes über die {{domxref("TouchEvent.changedTouches")}}-Liste des Ereignisses abgerufen.

```js
// Registrieren eines touchmove-Listeners für das 'source'-Element
const src = document.getElementById("source");

src.addEventListener(
  "touchmove",
  (e) => {
    // Durchlaufen der Berührungspunkte, die sich bewegt haben, und Protokollieren
    // jeder der pageX/Y-Koordinaten. Die Einheit jeder Koordinate ist CSS-Pixel.
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
