---
title: "HTMLButtonElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle bekommt und setzt die Aktion, die auf ein Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`), das von einem Button gesteuert wird.

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen angezeigt und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

## Beispiele

### Umschalten der Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem auf "toggle" gesetzten Wert für die `popoverTargetAction`-Eigenschaft.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen („light-dismissed“) werden kann.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden, um das Popover anzuzeigen und zu verbergen, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir weder das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut auf dem `<button>` noch das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut auf dem `<div>`, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Handle auf die `<div>`- und `<button>`-Elemente.
Er definiert dann eine Funktion, um die Unterstützung der Popover-API zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschalters.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzugeben, und verstecken den Umschaltknopf.

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
> Ein Popover-Element ist standardmäßig versteckt, aber wenn die API nicht unterstützt wird, wird Ihr Element „wie gewohnt“ angezeigt.

Sie können das Beispiel unten ausprobieren.
Zeigen und verstecken Sie das Popover, indem Sie den Button umschalten.
Das `"auto"`-Popover kann auch durch Auswählen außerhalb der Grenzen des Popover-Texts „light dismissed“ werden.

{{EmbedLiveSample("Umschalten der Popover-Aktion mit einem automatischen Popover", "100%")}}

### Anzeigen/Verstecken der Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt, wie man die `"show"`- und `"hide"`-Werte des `popoverTargetAction`-Attributs verwendet.

Der Code ist fast identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist.
Ein `manual`-Popover muss explizit geschlossen werden und kann nicht durch Auswahl außerhalb des Popover-Bereichs „light dismissed“ werden.

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

Das Popover kann durch Auswahl des „Show popover“-Buttons angezeigt und mit dem „Hide popover“-Button geschlossen werden.

{{EmbedLiveSample("Anzeigen/Verstecken der Popover-Aktion mit einem manuellen Popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
