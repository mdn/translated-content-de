---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 58290795d9f78c91933e092053bb6439bde56651
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut) an, indem es zur {{Glossary("top_layer", "oberen Ebene")}} hinzugefügt wird.

Wenn `showPopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, das derzeit versteckt ist, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt vom Anzeigen des Popovers, und dann wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis ausgelöst. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `source` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Verweis; definiert programmatisch den Aufrufer des mit der Show-Aktion verbundenen Popovers, also sein Kontrollelement. Die Einrichtung einer Beziehung zwischen einem Popover und seinem Aufrufer mittels der `source`-Option hat zwei nützliche Effekte:
        - Der Browser platziert das Popover bei der Anzeige in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge. Dadurch wird das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt einen impliziten Ankerverweis zwischen den beiden, wodurch es sehr bequem wird, Popover relativ zu ihren Steuerelementen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird oder wenn diese Methode aufgerufen wird, während ein anderes Popover bereits im Prozess des Ein- oder Ausblendens ist (z.B. innerhalb eines `beforetoggle`-Ereignis-Listeners).

## Beispiele

Das folgende Beispiel bietet die Möglichkeit, ein Popover durch Drücken einer bestimmten Taste auf der Tastatur anzuzeigen.

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
