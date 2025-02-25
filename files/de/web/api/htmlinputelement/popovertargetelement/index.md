---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle holt und setzt das Popover-Element, das über ein {{htmlelement("input")}}-Element vom `type="button"` gesteuert wird.

Es ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-HTML-Attributs.

Die Etablierung einer Beziehung zwischen einem Popover und seinem auslösenden Button mittels der `popoverTargetElement`-Eigenschaft hat zwei zusätzliche nützliche Effekte:

- Der Browser erstellt eine implizite Beziehung [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tabreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Benutzer, die Tastatur und unterstützende Technologien (AT) verwenden, zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mittels [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Informationen finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

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

### Umschaltaktion für Popover mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Element/input/button) vom `type="button"` gesetzt wird. Das `popover`-Attribut wird auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("leicht geschlossen") werden kann.

Zuerst definieren wir ein `<input>`, das wir zur Anzeige und zum Verbergen des Popovers verwenden werden, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir nicht das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) am `<input>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut am `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zunächst eine Referenz zu den `<div>`- und `<input>`-Elementen. Anschließend definiert es eine Funktion zur Überprüfung der Popover-Unterstützung.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltbuttons. Wir setzen dann die `popoverTargetAction` des Buttons auf `"toggle"`. Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und blenden das Input-Element aus.

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

Sie können das Beispiel unten ausprobieren. Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten. Das "automatische" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes leicht geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
