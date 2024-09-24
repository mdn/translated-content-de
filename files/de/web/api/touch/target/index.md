---
title: "Touch: target-Eigenschaft"
short-title: target
slug: Web/API/Touch/target
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`target`**-Eigenschaft der `Touch`-Schnittstelle gibt das ({{domxref("EventTarget")}}) zurück, auf dem der Berührungskontakt begann, als er zum ersten Mal auf die Oberfläche gesetzt wurde, selbst wenn der Berührungspunkt seitdem den interaktiven Bereich dieses Elements verlassen hat oder sogar aus dem Dokument entfernt wurde. Beachten Sie, dass, wenn das Ziel-Element aus dem Dokument entfernt wird, Ereignisse weiterhin darauf gerichtet sind und daher nicht unbedingt mehr bis zum Fenster oder Dokument hochblasen. Wenn die Gefahr besteht, dass ein Element entfernt wird, während es berührt wird, ist es am besten, die Berührungs-Listener direkt am Ziel anzubringen.

## Wert

Das {{domxref("EventTarget")}}, auf das sich das {{domxref("Touch")}}-Objekt bezieht.

## Beispiele

Dieses Beispiel veranschaulicht, wie auf die `Touch.target`-Eigenschaft des {{domxref("Touch")}}-Objekts zugegriffen wird. Die `Touch.target`-Eigenschaft ist ein {{domxref("Element")}} ({{domxref("EventTarget")}}), auf dem ein Berührungspunkt startet, wenn der Kontakt zuerst auf der Oberfläche platziert wird.

Im folgenden einfachen Code-Schnipsel nehmen wir an, dass der Benutzer einen oder mehrere Berührungskontakte auf dem `source`-Element initiiert. Wenn der {{domxref("Element/touchstart_event", "touchstart")}}-Ereignishandler für dieses Element aufgerufen wird, wird auf die `Touch.target`-Eigenschaft jedes Berührungspunkts über die {{domxref("TouchEvent.targetTouches")}}-Liste des Ereignisses zugegriffen.

```js
// Registrieren eines touchmove-Listeners für das 'source'-Element
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // Durchlaufen der Berührungspunkte, die für dieses
    // Element aktiviert wurden.
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
