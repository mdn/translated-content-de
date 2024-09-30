---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 16f4b01129630178d791e66daacadd7474f2508b
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut besitzt) an, indem es zur [Top-Schicht](/de/docs/Glossary/top_layer) hinzugefügt wird.

Wenn `showPopover()` auf einem Element mit dem aktuell verborgenen [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt von der Anzeige des Popovers und danach das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

## Beispiele

Das folgende Beispiel bietet die Funktion, ein Popover durch das Drücken einer bestimmten Taste auf der Tastatur anzuzeigen.

Zuerst etwas HTML:

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

Und nun das JavaScript, um die Funktionalität zu verbinden:

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
