---
title: "HTMLButtonElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ruft die Aktion ab bzw. legt sie fest, die (`"hide"`, `"show"` oder `"toggle"`) an einem von einem Button gesteuerten Popover-Element ausgeführt werden soll.

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button verbirgt ein sichtbares Popover. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button zeigt ein verborgenes Popover. Wenn versucht wird, ein bereits sichtbares Popover zu zeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wechselt ein Popover zwischen sichtbar und verborgen. Ist das Popover verborgen, wird es angezeigt; ist das Popover sichtbar, wird es verborgen. Wenn `popoverTargetAction` nicht festgelegt ist, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

## Beispiele

### Umschaltaktion für Popover mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem "toggle"-Wert, der für die `popoverTargetAction`-Eigenschaft festgelegt ist.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein HTML `<button>`-Element, das wir zum Anzeigen und Verbergen des Popovers verwenden werden, sowie ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir weder das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut auf dem `<button>` noch das [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst eine Referenz zu den `<div>`- und `<button>`-Elementen.
Dann definiert er eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltbuttons.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzugeben und verbergen den Umschaltbutton.

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
Das `"auto"` Popover kann auch "leicht verworfen" werden, indem Sie außerhalb der Grenzen des Popover-Textes auswählen.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Ein-/Ausblenden von Popover mit einem manuellen Popover

Dieses Beispiel zeigt, wie die `"show"` und `"hide"` Werte des `popoverTargetAction`-Attributs verwendet werden.

Der Code ist fast identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist.
Ein `manual` Popover muss explizit geschlossen werden und kann nicht durch Auswählen außerhalb des Popover-Bereichs "leicht verworfen" werden.

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

Das Popover kann angezeigt werden, indem Sie die Schaltfläche "Show popover" auswählen und mit der Schaltfläche "Hide popover" verworfen werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
