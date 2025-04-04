---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut hat) an, indem es zur {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt wird.

Wenn `showPopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, das derzeit versteckt ist, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt vom Anzeigen des Popovers, und dann wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis ausgelöst. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source` {{optional_inline}}

      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Verweis; definiert programmgesteuert den Auslöser des Popovers, der mit der Aktion zum Anzeigen verbunden ist, d.h. sein Steuerungselement. Die Festlegung einer Beziehung zwischen einem Popover und seinem Auslöser mit der `source`-Option hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Position in der Reihenfolge der Tastaturfokusnavigation, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastaturnutzer (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt einen impliziten Ankerbezug zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

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
