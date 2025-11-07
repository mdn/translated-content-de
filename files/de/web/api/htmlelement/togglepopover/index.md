---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces schaltet ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hat) zwischen den Zuständen "versteckt" und "angezeigt" um.

Wenn `togglePopover()` auf einem Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis wird ausgelöst.
2. Das Popover wird zwischen "versteckt" und "angezeigt" umgeschaltet:
   1. Wenn es ursprünglich angezeigt war, wird es versteckt.
   2. Wenn es ursprünglich versteckt war, wird es angezeigt.
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
  - : Ein Boolean, der `togglePopover()` so wirken lässt wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), außer dass keine Ausnahme ausgelöst wird, wenn das Popover sich bereits im Zielzustand befindet.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es ursprünglich versteckt war. Wenn es ursprünglich angezeigt war, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es ursprünglich angezeigt war. Wenn es ursprünglich versteckt war, passiert nichts.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die Beschreibung zu `force` oben.
    - `source` {{optional_inline}}
      - : Eine [`HTMLElement`](/de/docs/Web/API/HTMLElement) Referenz; definiert programmatisch den Auslöser des mit der Umschaltaktion verbundenen Popovers, also dessen Steuerelement. Eine Beziehung zwischen einem Popover und seinem Auslöser mittels der `source`-Option herzustellen, hat zwei nützliche Effekte:
        - Der Browser platziert das Popover an einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerungen mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

Sollte `undefined` ({{jsxref("undefined")}}) in älteren Browserversionen zurückgegeben werden, siehe [Browser-Kompatibilität](#browser-kompatibilität).

## Beispiele

Sehen Sie die [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

### Einfaches automatisches Pop-up

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover ein und aus, indem eine bestimmte Taste auf der Tastatur gedrückt wird (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup angezeigt wird, was wir benötigen, weil Popups standardmäßig versteckt sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>`-Element, welches das Popup ist.
Der eigentliche Inhalt ist nicht wichtig, aber es ist zu beachten, dass wir das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, sodass es standardmäßig versteckt ist (oder wir könnten dieses Element in JavaScript setzen).

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
Zuerst prüfen wir, ob Popovers unterstützt werden, und falls nicht, verbergen wir das Popover-`div`, sodass es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, der das Drücken der 'h'-Taste überwacht und verwenden diesen, um das Öffnen des Popups zu triggern.
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

Sie können dies mit dem Live-Beispiel unten ausprobieren.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
