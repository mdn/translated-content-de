---
title: "Touch: target-Eigenschaft"
short-title: target
slug: Web/API/Touch/target
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`target`**-Eigenschaft der `Touch`-Schnittstelle gibt das ([`EventTarget`](/de/docs/Web/API/EventTarget)) zurück, auf dem der Berührungskontakt begann, als er zum ersten Mal auf die Oberfläche gelegt wurde, selbst wenn der Berührungspunkt seitdem außerhalb des interaktiven Bereichs dieses Elements verschoben wurde oder sogar aus dem Dokument entfernt wurde. Beachten Sie, dass Ereignisse weiterhin auf das Ziel-Element gerichtet werden, auch wenn es aus dem Dokument entfernt wird, und daher möglicherweise nicht mehr bis zum Fenster oder Dokument hochblasen. Wenn das Risiko besteht, dass ein Element entfernt wird, während es berührt wird, ist es am besten, die Touch-Listener direkt an das Ziel zu binden.

## Wert

Das [`EventTarget`](/de/docs/Web/API/EventTarget), auf das sich das [`Touch`](/de/docs/Web/API/Touch)-Objekt bezieht.

## Beispiele

Dieses Beispiel zeigt, wie auf die `Touch.target`-Eigenschaft des [`Touch`](/de/docs/Web/API/Touch)-Objekts zugegriffen werden kann. Die `Touch.target`-Eigenschaft ist ein [`Element`](/de/docs/Web/API/Element) ([`EventTarget`](/de/docs/Web/API/EventTarget)), auf dem ein Berührungspunkt gestartet wird, wenn der Kontakt zum ersten Mal auf die Oberfläche gelegt wird.

Im folgenden einfachen Codeausschnitt nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert. Wenn der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler für dieses Element aufgerufen wird, wird auf die `Touch.target`-Eigenschaft jedes Berührungspunktes über die [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste des Ereignisses zugegriffen.

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
