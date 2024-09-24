---
title: "Touch: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Gibt die X-Koordinate des Berührungspunktes relativ zum Bildschirm zurück, ohne jeglichen Scrollversatz.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften `Touch.screenX` des {{domxref("Touch")}}-Objekts und {{domxref("Touch.screenY")}} zugegriffen wird. Die Eigenschaft `Touch.screenX` ist die horizontale (x) Koordinate eines Berührungspunktes relativ zum Bildschirm in CSS-Pixeln. Die Eigenschaft {{domxref("Touch.screenY")}} ist die vertikale Koordinate eines Berührungspunktes relativ zum Bildschirm in CSS-Pixeln.

Im folgenden einfachen Codebeispiel gehen wir davon aus, dass der Benutzer mehrere Berührungskontakte auf einem Element mit der ID `source` initiiert und anschließend die Kontakte mit der Oberfläche löst. Wenn der {{domxref("Element/touchstart_event", "touchstart")}}-Ereignishandler aufgerufen wird, werden die `Touch.screenX`- und {{domxref("Touch.screenY")}}-Koordinaten jedes Berührungspunktes erfasst.

```js
// Registrieren Sie einen touchstart-Listener für das 'source'-Element
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // Gehen Sie die Berührungspunkte durch und protokollieren Sie jede screenX/Y-Koordinate.
    // Die Einheit jeder Koordinate sind CSS-Pixel.
    for (let i = 0; i < e.touches.length; i++) {
      console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
      console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
