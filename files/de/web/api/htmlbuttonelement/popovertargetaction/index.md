---
title: "HTMLButtonElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces bestimmt, welche Aktion (`"hide"`, `"show"` oder `"toggle"`) an einem durch einen Button gesteuerten Popover-Element ausgeführt werden soll.

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen Anzeige und Verstecken umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die durch den Steuerungsbutton ausgeführt wird.

## Beispiele

### Umschalten der Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem "toggle" Wert, der für die `popoverTargetAction`-Eigenschaft gesetzt ist. Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popoverbereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein HTML `<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attribut auf dem `<button>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf dem `<div>` nicht, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst eine Referenz auf die `<div>`- und `<button>`-Elemente. Er definiert dann eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Sollte die Popover-API unterstützt werden, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Toggle-Buttons. Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`. Falls die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und verbergen den Toggle-Button.

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

Sie können das Beispiel unten ausprobieren. Schalten Sie das Popover ein und aus, indem Sie den Button umschalten. Das `"auto"` Popover kann auch durch Auswahl außerhalb des Popover-Textbereichs "light-dismissed" werden.

{{EmbedLiveSample("Umschalten der Popover-Aktion mit einem automatischen Popover", "100%")}}

### Anzeigen/Verbergen der Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt die Verwendung der `"show"`- und `"hide"`-Werte des `popoverTargetAction`-Attributs.

Der Code ist fast identisch mit dem vorherigen Beispiel, mit dem Unterschied, dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist. Ein `manual` Popover muss explizit geschlossen werden und wird nicht durch Auswahl außerhalb des Popoverbereichs "light-dismissed".

```html
<button id="showBtn">Show popover</button>
<button id="hideBtn">Hide popover</button>
<div id="mypopover">This is popover content!</div>
```

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // Set the <div> element be a manual popover
  popover.popover = "manual";

  // Set the button targets to be the popover
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // Set the target actions to be show/hide
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "Popover API not supported.";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

Das Popover kann durch Auswahl des "Show popover"-Buttons angezeigt und durch den "Hide popover"-Button ausgeblendet werden.

{{EmbedLiveSample("Anzeigen/Verbergen der Popover-Aktion mit einem manuellen Popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
