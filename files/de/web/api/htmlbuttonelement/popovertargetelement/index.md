---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das Popover-Element ab und legt es fest, das über einen Button gesteuert werden soll.

Es ist das JavaScript-Äquivalent zum HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).

Die Festlegung einer Beziehung zwischen einem Popover und seinem auslösenden Button über die `popoverTargetElement`-Eigenschaft hat zwei zusätzlichen nützlichen Effekte:

- Der Browser erstellt eine implizite Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Unterstützungs-Technologie (AT) Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

## Wert

Ein Verweis auf ein Popover-Element im DOM.

## Beispiele

### Umschalten der Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, bei der ein `<div>`-Element als Popover festgelegt und dann als `popoverTargetElement` eines `<button>` gesetzt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt, sodass das Popover mit einem Button geschlossen werden muss und nicht durch "leichtes Verwerfen" durch Auswahl außerhalb des Popover-Bereichs.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und auszublenden, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir weder das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) am `<button>` noch das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut am `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code holt sich zuerst eine Referenz auf die `<div>`- und `<button>`-Elemente.
Anschließend definiert er eine Funktion, um die Unterstützung der Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltknopfs.
Dann setzen wir die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies mitzuteilen, und blenden den Umschaltknopf aus.

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
> Ein Popover-Element ist standardmäßig versteckt, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie üblich" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Knopf umschalten.
Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes verworfen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
