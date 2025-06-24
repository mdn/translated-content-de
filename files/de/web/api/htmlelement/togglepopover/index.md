---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API) Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut hat) zwischen den Zuständen "versteckt" und "sichtbar" um.

Wenn `togglePopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Event wird ausgelöst.
2. Das Popover schaltet zwischen "versteckt" und "sichtbar" um:
   1. Wenn es ursprünglich sichtbar war, wird es auf "versteckt" umgeschaltet.
   2. Wenn es ursprünglich versteckt war, wird es auf "sichtbar" umgeschaltet.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Event wird ausgelöst.

## Syntax

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Parameter

Ein Boolean (`force`) oder ein Optionsobjekt:

- `force` {{optional_inline}}
  - : Ein Boolean, der bewirkt, dass `togglePopover()` sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) verhält, außer dass keine Ausnahme ausgelöst wird, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover gezeigt, wenn es ursprünglich versteckt war. Wenn es ursprünglich gezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich gezeigt wurde. Wenn es ursprünglich versteckt war, passiert nichts.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die Beschreibung für `force` oben.
    - `source` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) Referenz; definiert programmatisch den Auslöser des Popovers, der mit der Umschaltaktion verbunden ist, d.h. sein Steuerungselement. Eine Beziehung zwischen einem Popover und seinem Auslöser herzustellen, hat zwei nützliche Effekte:
        - Der Browser platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungselementen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Rückgabewert

`true` wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

None ({{jsxref("undefined")}}) kann in älteren Browserversionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Sehen Sie sich die [Popover API Beispiele Landing Page](https://mdn.github.io/dom-examples/popover-api/) an, um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

### Einfaches automatisches Popup

Dies ist eine leicht modifizierte Version des [Beispiels zur Umschaltung der Hilfe-UI-Popover](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Das HTML für das Beispiel ist unten gezeigt.
Dieses erste Element definiert Anweisungen, wie man das Popup aufruft, was wir benötigen, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>` Element, welches das Popup ist.
Der eigentliche Inhalt spielt keine Rolle, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, sodass es standardmäßig versteckt ist (oder wir könnten dieses Element im JavaScript setzen).

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

Das JavaScript für das Beispiel ist unten gezeigt.
Zuerst überprüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir das Popover `div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, um die `h` Taste zu drücken, und verwenden diesen, um das Öffnen des Popups auszulösen.
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, aber nur, wenn ein `true` oder `false` zurückgegeben wurde.

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

Sie können dies mit dem Live-Beispiel unten testen.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
