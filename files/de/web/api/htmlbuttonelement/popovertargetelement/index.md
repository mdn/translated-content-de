---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das Popover-Element ab, das über einen Button gesteuert wird, und setzt es.

Es ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attributs.

## Wert

Eine Referenz zu einem Popover-Element im DOM.

## Beispiele

### Popover-Aktion mit einem automatischen Popover umschalten

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover definiert und dann als `popoverTargetElement` eines `<button>` festgelegt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt, sodass das Popover mit einem Button geschlossen werden muss und nicht durch „leichtes Verwerfen“ beim Auswählen außerhalb des Popover-Bereichs.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir zum Anzeigen und Ausblenden des Popovers verwenden, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut nicht auf dem `<button>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zunächst einen Zugriff auf die `<div>`- und `<button>`-Elemente.
Dann definiert er eine Funktion, um die Unterstützung für das Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht dieses zum Popover-Ziel des Umschaltbuttons.
Dann setzen wir die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und blenden den Umschaltbutton aus.

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
Das "auto" Popover kann auch durch Auswahl außerhalb der Begrenzungen des Popover-Textes verworfen werden.

{{EmbedLiveSample("Popover-Aktion mit einem automatischen Popover umschalten", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
