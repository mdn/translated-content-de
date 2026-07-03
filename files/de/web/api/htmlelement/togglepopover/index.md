---
title: "HTMLElement: togglePopover()-Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 58290795d9f78c91933e092053bb6439bde56651
---

{{APIRef("Popover API")}}

Die **`togglePopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut) zwischen den Zuständen "versteckt" und "angezeigt" um.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis wird ausgelöst.
2. Der Popover schaltet zwischen "versteckt" und "angezeigt" um:
   1. Wenn er ursprünglich angezeigt wurde, wird er auf "versteckt" umgeschaltet.
   2. Wenn er ursprünglich versteckt war, wird er auf "angezeigt" umgeschaltet.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis wird ausgelöst.

## Syntax

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Parameter

Ein Boolean (`force`) oder ein Optionsobjekt:

- `force` {{optional_inline}}
  - : Ein Boolean, der `togglePopover()` veranlasst, sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zu verhalten, außer dass keine Ausnahme ausgelöst wird, wenn der Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird der Popover angezeigt, wenn er ursprünglich versteckt war. Wenn er ursprünglich angezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird der Popover versteckt, wenn er ursprünglich angezeigt wurde. Wenn er ursprünglich versteckt war, passiert nichts.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die Beschreibung von `force` oben.
    - `source` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmgesteuert den Auslöser des Popovers, der mit der Umschaltaktion verbunden ist, d.h. sein Steuerelement. Durch die Verwendung der `source`-Option zum Herstellen einer Beziehung zwischen einem Popover und seinem Auslöser ergeben sich zwei nützliche Effekte:
        - Der Browser platziert den Popover in einer logischen Position in der Tastaturnavigation, wenn er angezeigt wird. Dies macht den Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Anker-Referenz zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) anzupassen. Siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Methode aufgerufen wird, während ein anderes Popover bereits dabei ist, angezeigt oder versteckt zu werden (z.B. innerhalb eines `beforetoggle`-Ereignishandlers).

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

None ({{jsxref("undefined")}}) kann in älteren Browserversionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

### Einfaches automatisches Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover durch Drücken einer bestimmten Taste auf der Tastatur ein und aus (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen wird, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>`-Element, das das Popup ist.
Der eigentliche Inhalt ist nicht wichtig, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, damit es standardmäßig versteckt ist (oder wir könnten dieses Element im JavaScript setzen).

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
Zuerst überprüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir das Popover-`div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener für die `h`-Taste hinzu, die gedrückt werden soll, und verwenden diesen, um das Popup zu öffnen.
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, jedoch nur, wenn ein `true` oder `false` zurückgegeben wurde.

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

Sie können dies anhand des unten stehenden Live-Beispiels testen.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
