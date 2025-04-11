---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut) zwischen den Zuständen "versteckt" und "anzeigend" um.

Wenn `togglePopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis wird ausgelöst.
2. Das Popover wechselt zwischen "versteckt" und "anzeigend":
   1. Wenn es ursprünglich angezeigt wurde, wird es auf "versteckt" umgeschaltet.
   2. Wenn es ursprünglich versteckt war, wird es auf "anzeigend" umgeschaltet.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis wird ausgelöst.

## Syntax

```js-nolint
togglePopover()
togglePopover(force)
togglePopover(options)
```

### Parameter

Ein Boolean (`force`) oder ein Optionsobjekt:

- `force` {{optional_inline}}
  - : Ein Boolean, der `togglePopover()` dazu bringt, sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zu verhalten, jedoch ohne eine Ausnahme zu werfen, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es ursprünglich versteckt war. Wenn es bereits angezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich angezeigt wurde. Wenn es bereits versteckt war, passiert nichts.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die `force` Beschreibung oben.
    - `source` {{optional_inline}}

      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) Verweis; definiert programmatisch den Aufrufer des mit der Umschaltaktion assoziierten Popovers, d.h. sein Steuerelement. Die Beziehung zwischen einem Popover und seinem Aufrufer mithilfe der `source`-Option herzustellen, hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Reihenfolge in der Tastaturfokusnavigation, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen zu positionieren, indem [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verwendet wird. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

Nichts ({{jsxref("undefined")}}) kann in älteren Browserversionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung der MDN Popover-Beispiele zuzugreifen.

### Einfaches automatisches Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Beispiels](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup aufzurufen ist, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Wir definieren dann ein `<div>` Element, das das Popup ist.
Der tatsächliche Inhalt spielt keine Rolle, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, damit es standardmäßig versteckt ist (oder wir könnten dieses Element im JavaScript festlegen).

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

Der JavaScript-Code für das Beispiel wird unten gezeigt.
Zuerst überprüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir das Popover `div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener für das Drücken der `h`-Taste hinzu und verwenden diesen, um das Öffnen des Popups auszulösen.
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, aber nur, wenn ein `true` oder `false` zurückgegeben wurde.

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
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

Sie können dies im untenstehenden Live-Beispiel testen.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
