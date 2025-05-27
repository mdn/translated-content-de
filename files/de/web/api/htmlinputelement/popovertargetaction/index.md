---
title: "HTMLInputElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ruft die Aktion ab bzw. legt diese fest, die auf ein Popover-Element angewendet werden soll (`"hide"`, `"show"` oder `"toggle"`), das durch ein {{htmlelement("input")}}-Element vom Typ `type="button"` gesteuert wird.

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein gezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button wird ein ausgeblendetes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen Anzeige und Ausblenden umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die vom Steuer-Button ausgeführt wird.

## Beispiele

### Popover-Aktion umschalten mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem auf "toggle" gesetzten Wert für die `popoverTargetAction`-Eigenschaft.
Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input/button) vom `type="button"`, das wir verwenden, um das Popover anzuzeigen und auszublenden, und ein `<div>`, das das Popover sein wird.
In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attribut nicht auf den Button oder das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut auf das `<div>`, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst eine Referenz auf die `<div>`- und `<input>`-Elemente.
Er definiert dann eine Funktion, um die Unterstützung für das Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschaltbuttons.
Wir setzen dann die `popoverTargetAction` des Buttons auf `"toggle"`.
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
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das folgende Beispiel ausprobieren.
Zeigen und verbergen Sie das Popover, indem Sie den Button umschalten.
Das "auto"-Popover kann auch durch Auswahl außerhalb der Grenzen des Popover-Textes geschlossen werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Show/hide Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt, wie die `"show"`- und `"hide"`-Werte der `popoverTargetAction`-Eigenschaft verwendet werden.

Der Code ist nahezu identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist.
Ein `manual`-Popover muss explizit geschlossen werden und kann nicht durch Auswahl außerhalb des Popover-Bereichs "leicht entlassen" werden.

```html
<input id="showBtn" type="button" value="Show popover" />
<input id="hideBtn" type="button" value="Hide popover" />
<div id="mypopover">This is popover content!</div>
```

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
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

Das Popover kann durch Auswahl des "Show popover"-Buttons angezeigt und mit dem "Hide popover"-Button geschlossen werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
