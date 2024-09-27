---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces holt und setzt den Popover-Status eines Elements via JavaScript (`"auto"` oder `"manual"`), und kann zur Feature-Erkennung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.

## Wert

Ein aufgezählter Wert; mögliche Werte sind:

- `"auto"`: Im [Auto-Status](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss):
  - Der Popover kann durch "leichtes Entlassen" versteckt werden — das bedeutet, Sie können den Popover verbergen, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken.
  - Normalerweise kann nur ein Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits einer angezeigt wird, wird den ersten verbergen. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.
- `"manual"`: Im [manuellen Status](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state):
  - Der Popover kann nicht durch "leichtes Entlassen" versteckt werden, obwohl deklarative Anzeigen/Verbergen/Toggle-Schaltflächen weiterhin funktionieren.
  - Mehrere unabhängige Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Feature-Erkennung

Sie können das `popover`-Attribut zur Erkennung der [Popover API](/de/docs/Web/API/Popover_API) verwenden:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Einrichten eines Popovers programmgesteuert

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
