---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das zu steuernde Popover-Element ab und setzt es über einen Button.

Es ist das JavaScript-Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-HTML-Attribut.

Die Herstellung einer Beziehung zwischen einem Popover und seinem auslösenden Button mit der `popoverTargetElement`-Eigenschaft hat zwei zusätzliche nützliche Effekte:

- Der Browser erstellt eine implizite Beziehung zwischen `aria-details` und `aria-expanded` zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

## Wert

Eine Referenz auf ein Popover-Element im DOM.

## Beispiele

### Popover-Umschaltaktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und dann als `popoverTargetElement` eines `<button>` gesetzt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt, sodass das Popover mit einem Button geschlossen werden muss und nicht durch Auswahl außerhalb des Popover-Bereichs "leicht" ausgeblendet wird.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir weder das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attribut auf den `<button>` noch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut auf das `<div>`, da wir dies programmatisch vornehmen werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Zugriff auf die `<div>`- und `<button>`-Elemente.
Dann definiert er eine Funktion, um die Unterstützung für Popovers zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltknopfes.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies auszusagen, und blenden den Umschaltknopf aus.

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
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie üblich" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten.
Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Texts ausgeblendet werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
