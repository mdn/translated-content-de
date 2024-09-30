---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ruft das Popover-Element ab und legt es fest, das über ein {{htmlelement("input")}}-Element vom `type="button"` gesteuert werden soll.

Es ist das JavaScript-Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut.

## Wert

Eine Referenz zu einem Popover-Element im DOM.

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

### Popover-Aktion mit einem Auto-Popover umschalten

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt und dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Element/input/button) vom `type="button"` gesetzt wird. Das `popover`-Attribut wird auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein `<input>`, das wir verwenden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut nicht auf das `<input>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut auf das `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Handle auf die `<div>`- und `<input>`-Elemente. Dann definiert er eine Funktion, um die Unterstützung für Popovers zu prüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltknopfes. Wir setzen dann die `popoverTargetAction` des Knopfes auf `"toggle"`. Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und verbergen das Eingabeelement.

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
> Ein Popover-Element ist standardmäßig verborgen, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren. Zeigen und verbergen Sie das Popover, indem Sie den Knopf umschalten. Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes leicht geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
