---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Die **`togglePopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut besitzt) zwischen den Zuständen "versteckt" und "angezeigt" um.

Wenn `togglePopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event wird ausgelöst.
2. Das Popover wechselt zwischen den Zuständen "versteckt" und "angezeigt":
   1. Wenn es ursprünglich angezeigt wurde, wird es auf "versteckt" umgeschaltet.
   2. Wenn es ursprünglich versteckt war, wird es auf "angezeigt" umgeschaltet.
3. Ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event wird ausgelöst.

## Syntax

```js-nolint
togglePopover(force)
```

### Parameter

- `force`
  - : Ein Boolean, der bewirkt, dass `togglePopover()` sich wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) verhält, mit der Ausnahme, dass keine Ausnahme ausgelöst wird, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es ursprünglich versteckt war. Wenn es ursprünglich angezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich angezeigt wurde. Wenn es ursprünglich versteckt war, passiert nichts.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

None ({{jsxref("undefined")}}) kann in älteren Browserversionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover API Beispiele Übersichtsseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

### Einfaches Auto-Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover-Beispiels](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel ist unten dargestellt.
Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen wird, da Popups standardmäßig verborgen sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Wir definieren dann ein `<div>`-Element, das das Popup ist.
Der eigentliche Inhalt ist nicht wichtig, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, sodass es standardmäßig verborgen ist (oder wir könnten dieses Element im JavaScript setzen).

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
Zuerst prüfen wir, ob Popovers unterstützt werden, und falls nicht, verstecken wir das Popover `div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, der auf das Drücken der `h`-Taste wartet, und verwenden diesen, um das Popup zu öffnen.
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, aber nur wenn `true` oder `false` zurückgegeben wurde.

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

Sie können dies mit dem untenstehenden Live-Beispiel ausprobieren.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML Global-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
