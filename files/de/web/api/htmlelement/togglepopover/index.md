---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 88dc56f83da6cf7adf4a2ad8803a412141ed4989
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API) Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut hat) zwischen den Zuständen "versteckt" und "sichtbar" um.

Wird `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut aufgerufen:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis wird ausgelöst.
2. Das Popover wechselt zwischen versteckt und sichtbar:
   1. Wenn es ursprünglich sichtbar war, wird es versteckt.
   2. Wenn es ursprünglich versteckt war, wird es sichtbar.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis wird ausgelöst.

## Syntax

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Parameter

Ein boolean (`force`) oder ein Optionsobjekt:

- `force` {{optional_inline}}
  - : Ein boolean, der dazu führt, dass `togglePopover()` sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) verhält.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es ursprünglich versteckt war. Wenn es ursprünglich sichtbar war, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich sichtbar war. Wenn es ursprünglich versteckt war, passiert nichts.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `force` {{optional_inline}}
      - : Ein boolean; siehe die Beschreibung von `force` oben.
    - `source` {{optional_inline}}
      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement) Referenz; definiert programmatisch den Auslöser des Popovers, das mit der Umschaltaktion verbunden ist, also dessen Steuerelement. Die Beziehung zwischen einem Popover und seinem Auslöser mithilfe der `source` Option zu etablieren, hat zwei nützliche Effekte:
        - Der Browser platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover besser zugänglich für Tastaturnutzer (siehe auch [Popover Barrierefreiheitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, so dass es sehr bequem wird, Popovers relativ zu ihren Steuerelementen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Methode aufgerufen wird, während ein anderes Popover bereits im Begriff ist, angezeigt oder versteckt zu werden (z.B. innerhalb eines `beforetoggle` Ereignis-Listeners).

### Rückgabewert

`true`, wenn das Popover nach dem Aufruf geöffnet ist, und `false` andernfalls.

Kein Wert ({{jsxref("undefined")}}) kann in älteren Browser-Versionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/) für die vollständige Sammlung der MDN Popover Beispiele.

### Einfaches Auto-Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Beispiels](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover durch Drücken einer bestimmten Taste auf der Tastatur an und aus (wenn das Beispiel-Fenster den Fokus hat).

Das HTML für das Beispiel ist unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen werden kann, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Wir definieren dann ein `<div>` Element, welches das Popup ist.
Der eigentliche Inhalt spielt keine Rolle, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, damit es standardmäßig verborgen ist (oder wir könnten dieses Element im JavaScript setzen).

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
  </ul>
</div>
```

Das JavaScript für das Beispiel wird unten gezeigt.
Zuerst prüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir das Popover `div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, der auf das Drücken der `h`-Taste wartet, um damit das Popup zu öffnen.
Wir protokollieren außerdem, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, aber nur, wenn ein `true` oder `false` zurückgegeben wurde.

```js
if (Object.hasOwn(HTMLElement.prototype, "popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // Check if popover is opened or closed on supporting browsers
      if (popupOpened !== undefined) {
        instructions.innerText +=
          popupOpened === true ? `\nOpened` : `\nClosed`;
      }
    }
  });
}
```

Sie können dies mit dem unten stehenden Live-Beispiel testen.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
