---
title: "HTMLInputElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ruft die Aktion ab, die auf einem von einem {{htmlelement("input")}}-Element des Typs `type="button"` gesteuerten Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`) und setzt diese.

Sie spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
- `"show"`
  - : Die Schaltfläche zeigt ein verstecktes Popover. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Die Schaltfläche schaltet ein Popover zwischen sichtbar und versteckt um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die von der Steuerungsschaltfläche ausgeführt wird.

## Beispiele

### Toggle-Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem "toggle"-Wert, der für die `popoverTargetAction`-Eigenschaft gesetzt ist. Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen werden kann (leichtes Ausblenden).

Zuerst definieren wir ein [`<input>`](/de/docs/Web/HTML/Element/input/button) des Typs `type="button"`, das wir verwenden, um das Popover anzuzeigen und zu verbergen, sowie ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir nicht das HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) auf der Schaltfläche oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf dem `<div>`, da wir dies programmgesteuert tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code holt sich zuerst einen Zugriff auf die `<div>`- und `<input>`-Elemente. Dann definiert er eine Funktion, um die Popover-Unterstützung zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel der Umschaltfläche. Wir setzen dann die `popoverTargetAction` der Schaltfläche auf `"toggle"`. Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und verbergen die Umschaltfläche.

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
> Ein Popover-Element ist standardmäßig versteckt, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren. Zeigen und verbergen Sie das Popover, indem Sie die Schaltfläche umschalten. Das "auto" Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Texts verworfen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Anzeigen/Verbergen der Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt, wie die `"show"` und `"hide"` Werte des `popoverTargetAction`-Attributs verwendet werden.

Der Code ist nahezu identisch mit dem vorherigen Beispiel, abgesehen davon, dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist. Ein `manual` Popover muss explizit geschlossen werden und nicht durch eine "leichte Ausblendung" bei Auswahl außerhalb des Popover-Bereichs.

```html
<input id="showBtn" type="button" value="Show popover" />
<input id="hideBtn" type="button" value="Hide popover" />
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

Das Popover kann durch Auswahl der Schaltfläche "Show popover" angezeigt und mit der Schaltfläche "Hide popover" verworfen werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
