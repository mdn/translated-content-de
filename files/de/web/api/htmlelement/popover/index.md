---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft der {{domxref("HTMLElement")}}-Schnittstelle ruft den Popover-Zustand eines Elements ab und setzt diesen über JavaScript (`"auto"` oder `"manual"`) und kann zur Funktionserkennung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"`: Im [Auto-Zustand](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss):
  - Das Popover kann „leicht ausgeblendet“ werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die Taste <kbd>Esc</kbd> drücken.
  - Normalerweise kann nur ein Popover gleichzeitig angezeigt werden – das Anzeige eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.
- `"manual"`: Im [Manuellen Zustand](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state):
  - Das Popover kann nicht „leicht ausgeblendet“ werden, obwohl deklarative Anzeigen/Verbergen/Umschalt-Buttons weiterhin funktionieren.
  - Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Funktionserkennung

Sie können das `popover`-Attribut verwenden, um die [Popover API](/de/docs/Web/API/Popover_API) zu erkennen:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Ein Popover programmatisch einrichten

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  console.log("Popover API not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
