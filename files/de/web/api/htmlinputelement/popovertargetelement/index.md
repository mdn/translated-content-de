---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces erhält und setzt das Popover-Element, das über ein {{htmlelement("input")}}-Element mit `type="button"` gesteuert wird.

Es ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attributs.

Das Etablieren einer Beziehung zwischen einem Popover und seinem auslösenden Button mit der `popoverTargetElement`-Eigenschaft hat zwei zusätzliche nützliche Effekte:

- Der Browser erstellt eine implizite Beziehung für [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Assistenztechnologie-Nutzer (AT) besser zugänglich (siehe auch [Popover-Accessibility-Funktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungselementen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

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

### Umschaltbare Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt und dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Reference/Elements/input/button) mit `type="button"` gesetzt wird. Das `popover`-Attribut wird auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein `<input>`, das wir verwenden, um das Popover anzuzeigen und zu verstecken, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir nicht das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut auf dem `<input>` oder das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Zugriff auf die `<div>`- und `<input>`-Elemente. Dann definiert er eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschalt-Buttons. Wir setzen dann die `popoverTargetAction` des Buttons auf `"toggle"`. Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um diesen Umstand zu erklären, und verstecken das Eingabeelement.

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

Sie können das Beispiel unten ausprobieren. Zeigen und verstecken Sie das Popover, indem Sie den Button umschalten. Das "auto"-Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Texts leicht geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
