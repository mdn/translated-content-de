---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle schaltet ein [Popover](/de/docs/Web/API/Popover_API) Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut besitzt) zwischen den versteckten und sichtbaren Zuständen um.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut aufgerufen wird:

1. Ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis wird ausgelöst.
2. Das Popover wird zwischen versteckt und sichtbar umgeschaltet:
   1. War es zunächst sichtbar, wechselt es zu versteckt.
   2. War es zunächst versteckt, wechselt es zu sichtbar.
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
  - : Ein Boolean, der `togglePopover()` wie [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) oder [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) verhalten lässt, mit der Ausnahme, dass es keine Ausnahme wirft, wenn das Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird das Popover angezeigt, wenn es zunächst versteckt war. War es zunächst angezeigt, passiert nichts.
    - Wenn auf `false` gesetzt, wird das Popover versteckt, wenn es zunächst angezeigt war. War es zunächst versteckt, passiert nichts.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:

    - `force` {{optional_inline}}
      - : Ein Boolean; siehe die Beschreibung von `force` oben.
    - `source` {{optional_inline}}

      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) Verweis; definiert programmatisch den Auslöser des Popovers, der mit der Umschaltaktion verknüpft ist, d.h. sein Steuerelement. Die Etablierung einer Beziehung zwischen einem Popover und seinem Auslöser mit der `source`-Option hat zwei nützliche Effekte:

        - Der Browser platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastaturbenutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
        - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was das Positionieren von Popovers relativ zu ihren Steuerungen mit [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) sehr praktisch macht. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, und `false` andernfalls.

Es kann keine ({{jsxref("undefined")}}) in älteren Browserversionen zurückgegeben werden (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Beispiele

Siehe die [Popover-API-Beispiele-Landingpage](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung der MDN-Popover-Beispiele aufzurufen.

### Einfaches Auto-Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Beispiels](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover durch Drücken einer bestimmten Taste auf der Tastatur um (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen wird, was wir benötigen, da Popups standardmäßig ausgeblendet sind.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

Dann definieren wir ein `<div>` Element, das das Popup ist.
Der eigentliche Inhalt spielt keine Rolle, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, damit es standardmäßig ausgeblendet ist (oder wir könnten dieses Element im JavaScript festlegen).

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
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, jedoch nur, wenn ein `true` oder `false` zurückgegeben wurde.

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
