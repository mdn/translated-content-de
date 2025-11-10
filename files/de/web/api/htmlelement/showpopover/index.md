---
title: "HTMLElement: showPopover() Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Popover API")}}

Die **`showPopover()`** Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces zeigt ein [Popover](/de/docs/Web/API/Popover_API) Element an (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut besitzt), indem es zur {{Glossary("top_layer", "Top-Schicht")}} hinzugefügt wird.

Wenn `showPopover()` bei einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut, das derzeit verborgen ist, aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis ausgelöst, gefolgt von der Anzeige des Popovers und dann dem [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis. Sollte das Element bereits angezeigt werden, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `source` {{optional_inline}}
      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement) Referenz; definiert programmgesteuert den Auslöser des mit der Anzeigeaktion verknüpften Popovers, d.h. sein Steuerelement. Eine Beziehung zwischen einem Popover und seinem Auslöser mithilfe der `source` Option herzustellen, hat zwei nützliche Effekte:
        - Der Browser platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

## Beispiele

Das folgende Beispiel ermöglicht das Anzeigen eines Popovers durch das Drücken einer bestimmten Taste auf der Tastatur.

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
