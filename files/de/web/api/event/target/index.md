---
title: "Event: target-Eigenschaft"
short-title: target
slug: Web/API/Event/target
l10n:
  sourceCommit: 43bd906206282421a50dcf1347dcfa58ef910c55
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`target`**-Eigenschaft der
{{domxref("Event")}}-Schnittstelle ist eine Referenz auf das Objekt, auf das das Ereignis
ausgelöst wurde. Sie unterscheidet sich von {{domxref("Event.currentTarget")}}, wenn der Ereignishandler während der Bubbling- oder Capturing-Phase des Ereignisses aufgerufen wird.

## Wert

Das zugeordnete {{domxref("EventTarget")}}.

## Beispiel

Die `event.target`-Eigenschaft kann verwendet werden, um **Ereignisdelegation** zu implementieren.

```js
// Eine Liste erstellen
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target bezieht sich auf das geklickte <li>-Element
  // Dies unterscheidet sich von evt.currentTarget, welches sich in diesem Kontext auf das übergeordnete <ul> beziehen würde
  evt.target.style.visibility = "hidden";
}

// Den Listener an die Liste anhängen
// Er wird aktiviert, wenn jedes <li> geklickt wird
ul.addEventListener("click", hide, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
