---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle wechselt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut hat) zwischen den Zuständen versteckt und sichtbar.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut angewendet wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis wird ausgelöst.
2. Das Popover wechselt zwischen versteckt und sichtbar:
   1. Wenn es zunächst sichtbar war, wechselt es zu versteckt.
   2. Wenn es zunächst versteckt war, wechselt es zu sichtbar.
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
  - : Ein Boolean, der `togglePopover()` ähnlich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) funktionieren lässt, außer dass keine Ausnahme ausgelöst wird, wenn sich das Popover bereits im Zielzustand befindet.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es zunächst versteckt war. Wenn es bereits sichtbar war, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es zunächst sichtbar war. Wenn es bereits versteckt war, passiert nichts.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die Beschreibung von `force` oben.
    - `source` {{optional_inline}}

      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Referenz; definiert programmatisch den Aufrufer des Popovers, der mit der Umschaltaktion assoziiert ist, d.h. sein Steuerelement. Die Verwendung der `source`-Option zur Etablierung einer Beziehung zwischen einem Popover und seinem Aufrufer hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Position in der Navigation der Tastaturfokussierung, wenn es angezeigt wird. Dies macht das Popover für Tastaturnutzer zugänglicher (siehe auch [Barrierefreiheitsfunktionen von Popovern](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

In älteren Browserversionen kann auch None ({{jsxref("undefined")}}) zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Sehen Sie sich die [Popover-API-Beispielseite](https://mdn.github.io/dom-examples/popover-api/) an, um die vollständige Sammlung von MDN-Popover-Beispielen zu entdecken.

### Einfaches automatisches Popup

Dies ist eine etwas modifizierte Version des [Hilfe-UI-Popover-Umschaltbeispiels](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten angezeigt.
Das erste Element definiert Anweisungen, wie das Popup aufgerufen wird, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>`-Element, das das Popup darstellt.
Der eigentliche Inhalt ist nicht entscheidend, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut benötigen, um das `<div>`-Element zu einem Popover zu machen, damit es standardmäßig versteckt ist (oder wir könnten dieses Element im JavaScript einstellen).

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
Zuerst überprüfen wir, ob Popovers unterstützt werden, und wenn nicht, verbergen wir das Popover-`div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener für das Drücken der `h`-Taste hinzu, und verwenden dies, um das Öffnen des Popups auszulösen.
Wir protokollieren auch, ob das Popup nach dem Aufruf offen oder geschlossen war, aber nur, wenn ein `true` oder `false` zurückgegeben wurde.

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

Sie können dies im unten stehenden Live-Beispiel ausprobieren.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
