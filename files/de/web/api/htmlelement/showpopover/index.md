---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 88dc56f83da6cf7adf4a2ad8803a412141ed4989
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hat) an, indem es in die {{Glossary("top_layer", "oberste Ebene")}} eingefügt wird.

Wenn `showPopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, das derzeit verborgen ist, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event ausgelöst, gefolgt von der Anzeige des Popovers, und dann wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `source` {{optional_inline}}
      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmgesteuert den Auslöser des mit der Anzeigeaktion verbundenen Popovers, d.h. dessen Steuerelement. Die Herstellung einer Beziehung zwischen einem Popover und seinem Auslöser mithilfe der `source`-Option hat zwei nützliche Effekte:
        - Der Browser platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturnutzer besser zugänglich (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden Elementen, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Methode aufgerufen wird, während ein anderes Popover bereits gerade angezeigt oder verborgen wird (z. B. innerhalb eines `beforetoggle`-Event Listeners).

## Beispiele

Das folgende Beispiel bietet eine Funktionalität, um ein Popover durch Drücken einer bestimmten Taste auf der Tastatur anzuzeigen.

Zuerst etwas HTML:

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
  </ul>
  <hr />
  <ul>
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

Und nun der JavaScript-Code, um die Funktionalität zu verbinden:

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
