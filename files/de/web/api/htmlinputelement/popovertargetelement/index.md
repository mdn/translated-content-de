---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces erhält und setzt das Popover-Element, das über ein {{htmlelement("input")}}-Element vom Typ `type="button"` gesteuert wird.

Es ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attributs.

## Wert

Ein Verweis auf ein Popover-Element im DOM.

## Beispiele

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  console.log("Popover API not supported.");
}
```

### Umschalten der Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und dieses dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Element/input/button) vom Typ `type="button"` gesetzt wird.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover geschlossen ("light-dismissed") werden kann, indem außerhalb des Popover-Bereichs geklickt wird.

Zuerst definieren wir ein `<input>`, das wir verwenden werden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut auf dem `<input>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut auf dem `<div>` nicht, da wir dies programmatisch tun.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zunächst einen Zugriff auf die `<div>`- und `<input>`-Elemente.
Dann wird eine Funktion definiert, um die Unterstützung der Popover-Funktion zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel der Umschalttaste.
Wir setzen dann die `popoverTargetAction` der Taste auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzugeben, und blenden das Eingabeelement aus.

```js
if (supportsPopover()) {
  // Set the <div> element to be an auto popover
  popover.popover = "auto";

  // Set the button popover target to be the popover
  toggleBtn.popoverTargetElement = popover;

  // Set that the button toggles popover visibility
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover API not supported.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Ein Popover-Element ist standardmäßig versteckt, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie die Schaltfläche umschalten.
Das "auto"-Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes leicht verworfen werden.

{{EmbedLiveSample("Umschalten der Popover-Aktion mit einem automatischen Popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Gloabalattribut
- [Popover-API](/de/docs/Web/API/Popover_API)
