---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ruft das Popover-Element ab, das über eine Schaltfläche gesteuert wird, und legt es fest.

Es ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-HTML-Attributs.

Die Herstellung einer Beziehung zwischen einem Popover und seiner auslösenden Schaltfläche über die `popoverTargetElement`-Eigenschaft hat zwei weitere nützliche Effekte:

- Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokussierungsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Benutzer von Tastatur und unterstützenden Technologien (AT) besser zugänglich (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerelementen mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

## Wert

Ein Verweis auf ein Popover-Element im DOM.

## Beispiele

### Umschaltaktion des Popovers mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, wobei ein `<div>`-Element als Popover festgelegt wird, und anschließend als `popoverTargetElement` eines `<button>` gesetzt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) eingestellt, sodass das Popover über eine Schaltfläche geschlossen werden muss und nicht durch Auswahl außerhalb des Popover-Bereichs "light dismissed" werden kann.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attribut nicht auf das `<button>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf das `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Zugriff auf die `<div>`- und `<button>`-Elemente.
Er definiert dann eine Funktion, um die Unterstützung des Popovers zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel der Umschalttaste.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies mitzuteilen, und blenden die Umschalttaste aus.

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
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "normal" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie die Schaltfläche umschalten.
Das "auto"-Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Texts geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
