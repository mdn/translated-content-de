---
title: "Event: target-Eigenschaft"
short-title: target
slug: Web/API/Event/target
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`target`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces ist eine Referenz auf das Objekt, auf das das Ereignis ausgelöst wurde. Sie unterscheidet sich von [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget), wenn der Ereignishandler während der Bubbling- oder Capturing-Phase des Ereignisses aufgerufen wird.

## Wert

Das zugehörige [`EventTarget`](/de/docs/Web/API/EventTarget).

## Beispiel

Die `event.target`-Eigenschaft kann verwendet werden, um **Ereignisdelegation** zu implementieren.

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

- [Lernen: Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
