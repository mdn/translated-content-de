---
title: "HTMLElement: showPopover()-Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("Popover API")}}

Die **`showPopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle zeigt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d. h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) an, indem es zur {{Glossary("top_layer", "Top-Ebene")}} hinzugefügt wird.

Wenn `showPopover()` bei einem Element mit dem aktuell ausgeblendeten [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst. Danach wird das Popover angezeigt und dann das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `source` {{optional_inline}}

      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmatisch den Auslöser des mit der Anzeigefunktion verknüpften Popovers, also dessen Steuerelement. Die Beziehung zwischen einem Popover und seinem Auslöser mittels der `source`-Option herzustellen, hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Position in der Tastatur-Fokussierungsreihenfolge beim Anzeigen. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerelementen mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

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
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

Und jetzt das JavaScript, um die Funktionalität zu verknüpfen:

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
