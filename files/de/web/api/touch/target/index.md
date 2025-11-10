---
title: "Touch: target-Eigenschaft"
short-title: target
slug: Web/API/Touch/target
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`target`**-Eigenschaft der `Touch`-Schnittstelle gibt das ([`EventTarget`](/de/docs/Web/API/EventTarget)) zurück, auf dem der Touch-Kontakt begonnen hat, als er erstmals auf die Oberfläche gesetzt wurde, selbst wenn der Berührungspunkt sich seitdem außerhalb des interaktiven Bereichs dieses Elements bewegt oder sogar aus dem Dokument entfernt wurde. Beachten Sie, dass, wenn das Ziel-Element aus dem Dokument entfernt wird, Ereignisse immer noch darauf abzielen und daher nicht mehr notwendigerweise zum Fenster oder Dokument hochblubbern. Wenn die Gefahr besteht, dass ein Element während des Berührens entfernt wird, ist es am besten, die Touch-Listener direkt an das Ziel zu binden.

## Wert

Das [`EventTarget`](/de/docs/Web/API/EventTarget), auf das sich das [`Touch`](/de/docs/Web/API/Touch)-Objekt bezieht.

## Beispiele

Dieses Beispiel zeigt, wie auf die `Touch.target`-Eigenschaft des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen wird. Die `Touch.target`-Eigenschaft ist ein [`Element`](/de/docs/Web/API/Element) ([`EventTarget`](/de/docs/Web/API/EventTarget)), auf dem ein Berührungspunkt begonnen wird, wenn der Kontakt erstmals auf die Oberfläche gesetzt wird.

Im folgenden einfachen Code-Snippet nehmen wir an, dass der Benutzer ein oder mehrere Berührungskontakte auf dem `source`-Element initiiert. Wenn der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler für dieses Element aufgerufen wird, wird über die [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste des Ereignisses auf die `Touch.target`-Eigenschaft jedes Berührungspunktes zugegriffen.

```js
// Register a touchmove listener for the 'source' element
const src = document.getElementById("source");

src.addEventListener("touchstart", (e) => {
  // Iterate through the touch points that were activated
  // for this element.
  for (let i = 0; i < e.targetTouches.length; i++) {
    console.log(`touchpoint[${i}].target = ${e.targetTouches[i].target}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
