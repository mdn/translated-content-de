---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Die **`togglePopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut hat) zwischen den Zuständen "versteckt" und "angezeigt" um.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event wird ausgelöst.
2. Das Popover wird zwischen versteckt und angezeigt umgeschaltet:
   1. Wenn es ursprünglich angezeigt wurde, wechselt es zu versteckt.
   2. Wenn es ursprünglich versteckt war, wechselt es zu angezeigt.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event wird ausgelöst.

## Syntax

```js-nolint
togglePopover(force)
```

### Parameter

- `force`
  - : Ein boolean, der `togglePopover()` dazu veranlasst, sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) zu verhalten, außer dass es keine Ausnahme auslöst, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover gezeigt, wenn es ursprünglich versteckt war. Wenn es bereits gezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich gezeigt wurde. Wenn es bereits versteckt war, passiert nichts.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` ansonsten.

Es kann in älteren Browserversionen eventuell `None` ({{jsxref("undefined")}}) zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Sehen Sie auf der [Popover API Examples Landing Page](https://mdn.github.io/dom-examples/popover-api/) die vollständige Sammlung von MDN-Popover-Beispielen.

### Einfaches automatisches Pop-up

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/). Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten dargestellt. Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen werden kann, das wir benötigen, da Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Wir definieren dann ein `<div>`-Element, das das Popup ist. Der eigentliche Inhalt ist nicht wichtig, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, sodass es standardmäßig versteckt ist (oder wir könnten dieses Element im JavaScript setzen).

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

Der JavaScript-Code für das Beispiel wird unten dargestellt. Zuerst überprüfen wir, ob Popovers unterstützt werden, und wenn nicht, verstecken wir das Popover-`div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, der das Drücken der `h`-Taste erkennt, und nutzen diesen, um das Popup zu öffnen. Wir protokollieren auch, ob das Popup nach dem Aufruf offen oder geschlossen war, jedoch nur, wenn `true` oder `false` zurückgegeben wurde.

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

Sie können dies mit dem Live-Beispiel unten ausprobieren.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
