---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

Die **`togglePopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hat) zwischen verstecktem und sichtbarem Zustand um.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut angewendet wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis wird ausgelöst.
2. Das Popover wechselt zwischen versteckt und sichtbar:
   1. Wenn es ursprünglich sichtbar war, wird es auf versteckt umgeschaltet.
   2. Wenn es ursprünglich versteckt war, wird es auf sichtbar umgeschaltet.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis wird ausgelöst.

## Syntax

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Parameter

Ein Boolean-Wert (`force`) oder ein Optionsobjekt:

- `force` {{optional_inline}}
  - : Ein Boolean-Wert, der bewirkt, dass `togglePopover()` sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) verhält, außer dass es keine Ausnahme auslöst, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es ursprünglich versteckt war. Wenn es ursprünglich angezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich angezeigt wurde. Wenn es ursprünglich versteckt war, passiert nichts.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `force` {{optional_inline}}
      - : Ein Boolean-Wert; siehe die Beschreibung von `force` oben.
    - `source` {{optional_inline}}

      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmatisch den Auslöser des mit der Toggle-Aktion verbundenen Popovers, d.h. sein Steuerelement. Die Beziehung zwischen einem Popover und seinem Auslöser mit der `source`-Option zu etablieren, hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Das macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Rückgabewert

`true` wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

In älteren Browserversionen kann None ({{jsxref("undefined")}}) zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover API Beispiel-Landingpage](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

### Einfaches automatisches Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Das HTML für das Beispiel wird unten gezeigt.
Das erste Element definiert Anweisungen, wie das Popup aufgerufen werden kann, was wir benötigen, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>`-Element, das das Popup ist.
Der tatsächliche Inhalt ist unwichtig, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, sodass es standardmäßig versteckt ist (oder wir könnten dieses Element in JavaScript setzen).

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
Zuerst prüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir den Popover `div`, sodass er nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener für das Drücken der `h`-Taste hinzu und verwenden diesen, um das Öffnen des Popups zu triggern.
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

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
