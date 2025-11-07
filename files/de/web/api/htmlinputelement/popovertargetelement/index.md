---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ruft das Popover-Element ab und setzt es, das durch ein {{htmlelement("input")}}-Element vom `type="button"` gesteuert werden soll.

Es ist das JavaScript-Äquivalent zum HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).

Die Etablierung einer Beziehung zwischen einem Popover und seinem auslösenden Button über die `popoverTargetElement`-Eigenschaft hat zwei zusätzliche nützliche Effekte:

- Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover an einer logischen Position in der Tastaturfokussierungsnavigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Nutzer zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

## Wert

Ein Verweis auf ein Popover-Element im DOM.

## Beispiele

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
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

Dieses Beispiel zeigt die grundlegende Nutzung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und es dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Reference/Elements/input/button)-Elements vom `type="button"` festgelegt wird.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("leicht verworfen") werden kann.

Zuerst definieren wir ein `<input>`, das wir verwenden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir weder das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attribut auf das `<input>` noch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut auf das `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Handle auf die `<div>`- und `<input>`-Elemente.
Dann definiert er eine Funktion, um die Unterstützung des Popover-APIs zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Falls die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltbuttons.
Dann setzen wir die `popoverTargetAction` des Buttons auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und blenden das Eingabeelement aus.

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

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten.
Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes leicht verworfen werden.

{{EmbedLiveSample("Umschaltbare Popover-Aktion mit einem automatischen Popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover-API](/de/docs/Web/API/Popover_API)
