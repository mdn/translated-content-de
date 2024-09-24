---
title: "Touch: pageX-Eigenschaft"
short-title: pageX
slug: Web/API/Touch/pageX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`Touch.pageX`** gibt die X-Koordinate des Berührungspunkts relativ zum Viewport zurück, einschließlich jeglichem Scrollversatz.

## Wert

Ein `double` Gleitkommawert, der die X-Koordinate des Berührungspunkts relativ zum Viewport darstellt, einschließlich jeglichem Scrollversatz.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften `Touch.pageX` und {{domxref("Touch.pageY")}} des {{domxref("Touch")}}-Objekts zugegriffen wird. Die Eigenschaft `Touch.pageX` ist die horizontale Koordinate eines Berührungspunkts relativ zum Viewport (in CSS-Pixeln), einschließlich jeglichem Scrollversatz. Die {{domxref("Touch.pageY")}}-Eigenschaft ist die vertikale Koordinate eines Berührungspunkts relativ zum Viewport (in CSS-Pixeln), einschließlich jeglichem Scrollversatz.

Im folgenden einfachen Codebeispiel nehmen wir an, dass der Benutzer ein oder mehrere Berührungspunkte auf dem `source`-Element initiiert, die Berührungspunkte bewegt und dann alle Kontakte mit der Oberfläche löst. Wenn der {{domxref("Element/touchmove_event", "touchmove")}}-Ereignishandler aufgerufen wird, werden die `Touch.pageX`- und {{domxref("Touch.pageY")}}-Koordinaten jedes Berührungspunkts über die {{domxref("TouchEvent.changedTouches")}}-Liste des Ereignisses abgerufen.

```js
// Registrieren eines touchmove-Listeners für das 'source'-Element
const src = document.getElementById("source");

src.addEventListener(
  "touchmove",
  (e) => {
    // Durch die bewegten Berührungspunkte iterieren und jede der pageX/Y-Koordinaten protokollieren. 
    // Die Einheit jeder Koordinate ist CSS-Pixel.
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

## Browserkompatibilität

{{Compat}}
