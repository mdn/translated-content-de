---
title: "HTMLInputElement: popoverTargetAction-Eigenschaft"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Popover API")}}

Die **`popoverTargetAction`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle holt und setzt die Aktion, die auf einem von einem {{htmlelement("input")}}-Element vom `type="button"` gesteuerten Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`).

Sie spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attributs wider.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"hide"`
  - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
- `"show"`
  - : Der Button wird ein ausgeblendetes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
- `"toggle"`
  - : Der Button wird ein Popover zwischen Anzeige und Ausblenden umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; ist es sichtbar, wird es ausgeblendet. Wenn `popoverTargetAction` nicht gesetzt ist, ist `"toggle"` die Standardaktion, die vom Steuerungsknopf ausgeführt wird.

## Beispiele

### Umschalten der Popover-Aktion mit einem automatischen Popover

Dieses Beispiel zeigt die grundlegende Verwendung der Popover-API mit einem auf "toggle" gesetzten Wert für die `popoverTargetAction`-Eigenschaft. Das `popover`-Attribut ist auf [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gesetzt, sodass das Popover durch Klicken außerhalb des Popover-Bereichs geschlossen ("light-dismissed") werden kann.

Zuerst definieren wir ein [`<input>`](/de/docs/Web/HTML/Element/input/button) vom `type="button"`, das wir verwenden werden, um das Popover anzuzeigen und auszublenden, und ein `<div>`, das das Popover sein wird. In diesem Fall setzen wir das [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut auf den Button oder das [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut auf das `<div>` nicht, da wir dies programmatisch tun werden.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Der JavaScript-Code erhält zuerst einen Zugriff auf die `<div>`- und `<input>`-Elemente. Dann definiert er eine Funktion, um die Unterstützung von Popover zu überprüfen.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Überprüfen Sie die Unterstützung für die Popover-API.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Wenn die Popover-API unterstützt wird, setzt der Code das `popover`-Attribut des `<div>`-Elements auf `"auto"` und macht es zum Popover-Ziel des Umschalt-Buttons. Dann setzen wir die `popoverTargetAction` des Buttons auf `"toggle"`. Falls die Popover-API nicht unterstützt wird, ändern wir den Textinhalt des `<div>`-Elements, um dies anzuzeigen, und blenden den Umschalt-Button aus.

```js
if (supportsPopover()) {
  // Setzen Sie das <div>-Element auf ein automatisch popover
  popover.popover = "auto";
  // Setzen Sie das Ziel des Button-Popovers auf das Popover
  toggleBtn.popoverTargetElement = popover;

  // Setzen Sie den Button zum Umschalten der Popover-Sichtbarkeit
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover API not supported.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Ein Popover-Element ist standardmäßig ausgeblendet, aber wenn die API nicht unterstützt wird, wird Ihr Element "wie gewohnt" angezeigt.

Sie können das Beispiel unten ausprobieren. Zeigen und verbergen Sie das Popover durch Umschalten des Buttons. Das Popover im "auto"-Modus kann auch durch Auswählen außerhalb der Grenzen des Popover-Textes ausblendet werden.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Anzeigen/Verbergen der Popover-Aktion mit einem manuellen Popover

Dieses Beispiel zeigt, wie die Werte `"show"` und `"hide"` des Attributs `popoverTargetAction` verwendet werden.

Der Code ist fast identisch mit dem vorherigen Beispiel, außer dass es zwei `<button>`-Elemente gibt und das Popover auf [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) gesetzt ist. Ein `manual`-Popover muss explizit geschlossen werden und wird nicht durch Auswählen außerhalb des Popover-Bereichs "leicht entlassen".

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
  // Setzen Sie das <div>-Element auf ein manuelles Popover
  popover.popover = "manual";

  // Setzen Sie die Button-Ziele auf das Popover
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // Setzen Sie die Zielaktionen zum Anzeigen/Ausblenden
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "Popover API not supported.";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

Das Popover kann durch Auswählen des "Show popover"-Buttons angezeigt und mit dem "Hide popover"-Button geschlossen werden.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
