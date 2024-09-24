---
title: "HTMLElement: togglePopover() Methode"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Die **`togglePopover()`** Methode der {{domxref("HTMLElement")}} Schnittstelle schaltet ein {{domxref("Popover_API", "popover", "", "nocode")}}-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut hat) zwischen den versteckten und sichtbaren Zuständen um.

Wenn `togglePopover()` auf ein Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut aufgerufen wird:

1. Ein {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}-Ereignis wird ausgelöst.
2. Der Popover wechselt zwischen versteckt und sichtbar:
   1. Wenn es ursprünglich sichtbar war, wird es auf versteckt umgeschaltet.
   2. Wenn es ursprünglich versteckt war, wird es auf sichtbar umgeschaltet.
3. Ein {{domxref("HTMLElement/toggle_event", "toggle")}}-Ereignis wird ausgelöst.

## Syntax

```js-nolint
togglePopover(force)
```

### Parameter

- `force`
  - : Ein Boolean, der bewirkt, dass `togglePopover()` sich wie {{domxref("HTMLElement.showPopover", "showPopover()")}} oder {{domxref("HTMLElement.hidePopover", "hidePopover()")}} verhält, außer dass es keine Ausnahme wirft, wenn der Popover bereits im Zielzustand ist.
    - Wenn auf `true` gesetzt, wird der Popover angezeigt, wenn er ursprünglich versteckt war. Wenn er ursprünglich angezeigt wurde, passiert nichts.
    - Wenn auf `false` gesetzt, wird der Popover versteckt, wenn er ursprünglich angezeigt wurde. Wenn er ursprünglich versteckt war, passiert nichts.

### Rückgabewert

`true`, wenn das Popup nach dem Aufruf geöffnet ist, andernfalls `false`.

Möglicherweise wird in älteren Browserversionen None ({{jsxref("undefined")}}) zurückgegeben (siehe [Browserkompatibilität](#browserkompatibilität)).

## Beispiele

Sehen Sie sich die [Popover API-Beispiele-Seite](https://mdn.github.io/dom-examples/popover-api/) an, um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

### Einfaches automatisches Popup

Dies ist eine leicht modifizierte Version des [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
Das Beispiel schaltet ein Popover durch Drücken einer bestimmten Taste auf der Tastatur um (wenn das Beispiel-Fenster den Fokus hat).

Der HTML-Code für das Beispiel wird unten gezeigt.
Dieses erste Element definiert Anweisungen, wie das Popup aufgerufen werden kann, da Popups standardmäßig ausgeblendet sind.

```html
<p id="instructions">
  Drücken Sie "h", um eine Hilfsanzeige umzuschalten (zuerst Beispiel-Fenster auswählen).
</p>
```

Wir definieren dann ein `<div>`-Element, das das Popup ist.
Der eigentliche Inhalt ist nicht relevant, aber beachten Sie, dass wir das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut benötigen, um das `<div>` in ein Popover zu verwandeln, damit es standardmäßig ausgeblendet ist (oder wir könnten dieses Element im JavaScript setzen).

```html
<div id="mypopover" popover>
  <h2>Hilfe!</h2>

  <p>Sie können die folgenden Befehle verwenden, um die App zu steuern</p>

  <ul>
    <li>Drücken Sie <ins>C</ins>, um Käse zu bestellen</li>
    <li>Drücken Sie <ins>T</ins>, um Tofu zu bestellen</li>
    <li>Drücken Sie <ins>B</ins>, um Speck zu bestellen</li>
  </ul>
</div>
```

Der JavaScript-Code für das Beispiel wird unten gezeigt.
Zuerst überprüfen wir, ob Popovers unterstützt werden, und falls nicht, verbergen wir das Popover-`div`, damit es nicht inline angezeigt wird.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers nicht unterstützt";
}
```

Wenn Popovers unterstützt werden, fügen wir einen Listener hinzu, der das Drücken der `h`-Taste detektiert, und verwenden diesen, um das Öffnen des Popups auszulösen.
Wir protokollieren auch, ob das Popup nach dem Aufruf geöffnet oder geschlossen war, jedoch nur, wenn ein `true` oder `false` zurückgegeben wurde.

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // Überprüfen, ob das Popover in unterstützenden Browsern geöffnet oder geschlossen ist
      if (popupOpened !== undefined) {
        instructions.innerText +=
          popupOpened === true ? `\nGeöffnet` : `\nGeschlossen`;
      }
    }
  });
}
```

Sie können dies mit dem folgenden Live-Beispiel ausprobieren.

{{EmbedLiveSample('Examples', 700, 290)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Globaler HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
