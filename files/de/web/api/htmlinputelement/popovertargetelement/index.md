---
title: "HTMLInputElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des {{domxref("HTMLInputElement")}}-Interfaces ruft das Popover-Element ab und setzt es, das über ein {{htmlelement("input")}}-Element vom `type="button"` gesteuert werden soll.

Es ist das JavaScript-Äquivalent zum HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).

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

### Popover-Aktion mit einem automatischen Popover umschalten

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, wobei ein `<div>`-Element als Popover festgelegt wird und dann als `popoverTargetElement` eines [`<input>`](/de/docs/Web/HTML/Element/input/button) vom `type="button"` eingestellt wird.
Das `popover`-Attribut wird auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("leicht ausgeblendet") werden kann.

Zuerst definieren wir ein `<input>`, das wir zum Anzeigen und Verbergen des Popovers verwenden, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir nicht das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) auf dem `<input>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zunächst einen Zugriff auf die `<div>`- und `<input>`-Elemente.
Dann wird eine Funktion definiert, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Überprüfung der Unterstützung für die Popover-API.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschalt-Buttons.
Wir setzen dann die `popoverTargetAction` der Schaltfläche auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und blenden das Eingabeelement aus.

```js
if (supportsPopover()) {
  // Setzt das <div>-Element als automatisches Popover
  popover.popover = "auto";

  // Setzt das Button-Popover-Ziel auf das Popover
  toggleBtn.popoverTargetElement = popover;

  // Setzt, dass die Schaltfläche die Popover-Sichtbarkeit umschaltet
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover API nicht unterstützt.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie die Schaltfläche umschalten.
Das "automatische" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Texts leicht ausgeblendet werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
