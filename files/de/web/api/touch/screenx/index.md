---
title: "Touch: screenX-Eigenschaft"
short-title: screenX
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`screenX`** der Schnittstelle [`Touch`](/de/docs/Web/API/Touch) gibt die X-Koordinate des Berührungspunkts relativ zum Bildschirm zurück, ohne einen Scrollversatz zu berücksichtigen.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie auf die Eigenschaften `Touch.screenX` und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) eines [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen wird. Die Eigenschaft `Touch.screenX` ist die horizontale (x-)Koordinate eines Berührungspunkts relativ zum Bildschirm in CSS-Pixeln. Die Eigenschaft [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) ist die vertikale Koordinate eines Berührungspunkts relativ zum Bildschirm in CSS-Pixeln.

Im folgenden einfachen Codeausschnitt wird davon ausgegangen, dass der Benutzer mehrere Berührungen auf einem Element mit der ID `source` beginnt und den Kontakt mit der Oberfläche anschließend beendet. Wenn der Ereignishandler für [`touchstart`](/de/docs/Web/API/Element/touchstart_event) aufgerufen wird, wird auf die Koordinaten `Touch.screenX` und [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) jedes Berührungspunkts zugegriffen.

```js
// Register a touchstart listeners for the 'source' element
const src = document.getElementById("source");

src.addEventListener("touchstart", (e) => {
  // Iterate through the touch points and log each screenX/Y coordinate.
  // The unit of each coordinate is CSS pixels.
  for (let i = 0; i < e.touches.length; i++) {
    console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
    console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
