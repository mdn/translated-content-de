---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces erhält und setzt das Popover-Element, welches über einen Button gesteuert werden soll.

Sie ist das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).

Die Herstellung einer Beziehung zwischen einem Popover und seinem auslösenden Button über die `popoverTargetElement`-Eigenschaft hat zwei zusätzliche nützliche Effekte:

- Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover an einer logischen Position in der Reihenfolge der Tastaturfokusnavigation, wenn es angezeigt wird. Dies macht das Popover für Benutzer von Tastaturen und unterstützenden Technologien (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

## Wert

Eine Referenz auf ein Popover-Element im DOM.

## Beispiele

### Umschaltaktion des Popovers mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und dann als `popoverTargetElement` eines `<button>` festgesetzt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt, sodass das Popover mit einem Button geschlossen werden muss und nicht durch das Auswählen außerhalb des Popover-Bereichs "light dismissed" werden kann.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und zu verstecken, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir nicht das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) auf dem `<button>` oder das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zunächst eine Referenz auf die `<div>`- und `<button>`-Elemente.
Dann definiert er eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschalt-Buttons.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Falls die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies zu melden, und verstecken den Umschalt-Button.

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
> Ein Popover-Element ist standardmäßig verborgen, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie üblich" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten.
Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
