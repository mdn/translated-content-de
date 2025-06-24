---
title: "HTMLElement: Methode showPopover()"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Popover API")}}

Die Methode **`showPopover()`** der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hat) durch Hinzufügen zur {{Glossary("top_layer", "obersten Schicht")}} an.

Wenn `showPopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, das derzeit versteckt ist, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt von der Anzeige des Popovers, und anschließend wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis ausgelöst. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `source` {{optional_inline}}
      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmgesteuert den Auslöser des Popovers, der mit der Anzeigeaktion verbunden ist, also dessen Steuerelement. Die Herstellung einer Beziehung zwischen einem Popover und seinem Auslöser mit der Option `source` hat zwei nützliche Effekte:
        - Der Browser platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturnutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

## Beispiele

Das folgende Beispiel bietet die Funktionalität, ein Popover durch Drücken einer bestimmten Taste auf der Tastatur anzuzeigen.

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
