---
title: "HTMLButtonElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft des {{domxref("HTMLButtonElement")}}-Interfaces bestimmt und setzt die Aktion, die auf ein von einem Button kontrolliertes Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`).

Sie entspricht dem Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attributs.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen angezeigt und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

## Beispiele

### Umschaltbare Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem "toggle"-Wert, der für die `popoverTargetAction`-Eigenschaft gesetzt ist. Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, so dass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("leichter Abbruch") werden kann.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover zu zeigen und zu verbergen, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attribut auf dem `<button>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf dem `<div>` nicht, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code holt sich zuerst einen Zugriff auf die `<div>`- und `<button>`-Elemente. Dann definiert er eine Funktion, um die Unterstützung für Popover zu prüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltknopfes. Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`. Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und verbergen den Umschaltknopf.

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
> Ein Popover-Element ist standardmäßig verborgen, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewöhnlich" angezeigt.

Sie können das folgende Beispiel ausprobieren. Zeigen und verbergen Sie das Popover, indem Sie den Knopf umschalten. Das `"auto"`-Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes "leicht abgebrochen" werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Zeige/verberge Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt, wie die `"show"`- und `"hide"`-Werte des `popoverTargetAction`-Attributs verwendet werden.

Der Code ist fast identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist. Ein `manual`-Popover muss explizit geschlossen werden und nicht durch Auswahl außerhalb des Popover-Bereichs "leicht abgebrochen" werden.

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

Das Popover kann durch Auswahl des "Show popover"-Buttons angezeigt werden und mittels des "Hide popover"-Buttons geschlossen werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
