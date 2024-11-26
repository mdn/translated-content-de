---
title: "HTMLButtonElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces erhält und setzt die Aktion, die (`"hide"`, `"show"` oder `"toggle"`) auf einem von einem Button gesteuerten Popover-Element ausgeführt werden soll.

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein angezeigtes Popover verbergen. Wenn man versucht, ein bereits verstecktes Popover zu verbergen, wird keine Aktion durchgeführt.
- `"show"`
  - : Der Button wird ein verstecktes Popover anzeigen. Wenn man versucht, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen sichtbar und versteckt umschalten. Ist das Popover versteckt, wird es angezeigt; ist das Popover sichtbar, wird es versteckt. Wenn `popoverTargetAction` nicht gesetzt ist, wird `"toggle"` als Standardaktion vom Steuerungsknopf ausgeführt.

## Beispiele

### Toggle-Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem für die `popoverTargetAction`-Eigenschaft gesetzten "toggle"-Wert.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, so dass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("leicht entfernt") werden kann.

Zuerst definieren wir ein HTML-`<button>`-Element, das wir verwenden werden, um das Popover anzuzeigen und zu verbergen, und ein <div>, das das Popover sein wird.
In diesem Fall setzen wir nicht das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attribut am `<button>` oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut am <div>, da wir dies programmatisch tun werden.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst Zugriff auf die <div>- und `<button>`-Elemente.
Dann definiert er eine Funktion, um die Unterstützung für Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des <div>-Elements auf `"auto"` und macht es zum Popover-Ziel des Toggle-Buttons.
Wir setzen dann die `popoverTargetAction` des `<button>` auf `"toggle"`.
Wenn die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des <div>-Elements, um dies anzugeben, und verbergen den Toggle-Button.

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
Das `"auto"`-Popover kann auch "leicht entfernt" werden, indem Sie außerhalb der Grenzen des Popover-Textes auswählen.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Anzeigen/Verbergen von Popover-Aktionen mit einem manuellen Popover

Dieses Beispiel zeigt, wie die `"show"`- und `"hide"`-Werte des `popoverTargetAction`-Attributs verwendet werden können.

Der Code ist nahezu identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist.
Ein `manuelles` Popover muss explizit geschlossen werden und darf nicht "leicht entfernt" werden, indem außerhalb des Popover-Bereichs ausgewählt wird.

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

Das Popover kann durch Auswählen des "Show popover"-Buttons angezeigt und durch den "Hide popover"-Button entfernt werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
