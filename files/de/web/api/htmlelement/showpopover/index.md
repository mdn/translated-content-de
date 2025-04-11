---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut besitzt) an, indem es zur {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt wird.

Wenn `showPopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, das derzeit verborgen ist, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt von der Darstellung des Popovers und dann dem [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source` {{optional_inline}}

      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Verweis; definiert programmatisch den Auslöser des mit der Anzeigeaktion verbundenen Popovers, also sein Steuerelement. Das Festlegen einer Beziehung zwischen einem Popover und seinem Auslöser mithilfe der `source`-Option hat zwei nützliche Effekte:

        - Der Browser platziert das Popover an einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer besser zugänglich (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr bequem ist, Popovers relativ zu ihren Steuerelementen mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

## Beispiele

Das folgende Beispiel bietet eine Funktionalität, um ein Popover anzuzeigen, indem eine bestimmte Taste auf der Tastatur gedrückt wird.

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
