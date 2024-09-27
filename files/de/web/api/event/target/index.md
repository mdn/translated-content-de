---
title: "Event: target-Eigenschaft"
short-title: target
slug: Web/API/Event/target
l10n:
  sourceCommit: 43bd906206282421a50dcf1347dcfa58ef910c55
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`target`**-Eigenschaft des
[`Event`](/de/docs/Web/API/Event)-Interfaces ist ein Verweis auf das Objekt, auf das das Ereignis
ausgelöst wurde. Sie unterscheidet sich von [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget), wenn der
Ereignis-Handler während der Bubbling- oder Capturing-Phase des Ereignisses aufgerufen wird.

## Wert

Das zugehörige [`EventTarget`](/de/docs/Web/API/EventTarget).

## Beispiel

Die `event.target`-Eigenschaft kann verwendet werden, um eine **Ereignisdelegation**
zu implementieren.

```js
// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different from evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignis-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
