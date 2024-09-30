---
title: "Touch: target-Eigenschaft"
short-title: target
slug: Web/API/Touch/target
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`target`**-Eigenschaft des `Touch`-Interfaces gibt das ([`EventTarget`](/de/docs/Web/API/EventTarget)) zurück, auf dem der Touch-Kontakt begann, als er erstmals auf der Oberfläche platziert wurde. Dies gilt selbst dann, wenn der Berührpunkt sich inzwischen außerhalb des interaktiven Bereichs dieses Elements bewegt hat oder sogar aus dem Dokument entfernt wurde. Beachten Sie, dass, wenn das Ziel-Element aus dem Dokument entfernt wird, Ereignisse immer noch auf es gerichtet werden, und folglich nicht mehr unbedingt zum Fenster oder Dokument weiterblubbern. Wenn die Gefahr besteht, dass ein Element entfernt wird, während es berührt wird, ist es am besten, die Touch-Listener direkt am Ziel anzubinden.

## Wert

Das [`EventTarget`](/de/docs/Web/API/EventTarget), auf das sich das [`Touch`](/de/docs/Web/API/Touch)-Objekt bezieht.

## Beispiele

Dieses Beispiel veranschaulicht, wie auf die `Touch.target`-Eigenschaft des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen wird. Die `Touch.target`-Eigenschaft ist ein [`Element`](/de/docs/Web/API/Element) ([`EventTarget`](/de/docs/Web/API/EventTarget)), bei dem ein Berührungspunkt gestartet wird, wenn der Kontakt erstmals auf die Oberfläche gelegt wird.

Im folgenden einfachen Code-Schnipsel nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element startet. Wenn der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler für dieses Element aufgerufen wird, wird auf jede `Touch.target`-Eigenschaft der Berührungspunkte über die [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste des Ereignisses zugegriffen.

```js
// Register a touchmove listener for the 'source' element
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // Iterate through the touch points that were activated
    // for this element.
    for (let i = 0; i < e.targetTouches.length; i++) {
      console.log(`touchpoint[${i}].target = ${e.targetTouches[i].target}`);
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
