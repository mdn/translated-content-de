---
title: "HTMLButtonElement: popoverTargetElement-Eigenschaft"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

Die **`popoverTargetElement`**-Eigenschaft des {{domxref("HTMLButtonElement")}}-Interfaces ruft das Popover-Element ab und setzt es, um es über einen Button zu steuern.

Sie ist das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-HTML-Attributs.

## Wert

Eine Referenz auf ein Popover-Element im DOM.

## Beispiele

### Popover-Aktion mit einem automatischen Popover umschalten

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API, indem ein `<div>`-Element als Popover festgelegt wird und es dann als `popoverTargetElement` eines `<button>`-Elements gesetzt wird.
Das `popover`-Attribut ist auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt, sodass das Popover durch einen Button geschlossen werden muss und nicht durch "leichtes Auswählen" außerhalb des Popover-Bereichs.

Zuerst definieren wir ein HTML-`<button>`-Element, das verwendet wird, um das Popover anzuzeigen und auszublenden, und ein `<div>`-Element, das das Popover sein wird.
In diesem Fall setzen wir weder das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) am `<button>` noch das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut am `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Zugriff auf die `<div>`- und `<button>`-Elemente.
Anschließend definiert er eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Unterstützung für Popover-API prüfen.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltbuttons.
Dann setzen wir die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und verbergen den Umschaltbutton.

```js
if (supportsPopover()) {
  // Das <div>-Element als automatisches Popover setzen
  popover.popover = "auto";

  // Das Button-Popover-Ziel auf das Popover setzen
  toggleBtn.popoverTargetElement = popover;

  // Festlegen, dass der Button die Sichtbarkeit des Popovers umschaltet
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover-API wird nicht unterstützt.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten.
Das "automatische" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
