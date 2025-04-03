---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 60cdc2e5149038d2fd27ec0f9531cafdecc6e757
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle erhält und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.

## Wert

Ein aufgezählter Wert; mögliche Werte sind:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popover können "leicht verworfen" werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken.

    Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden – das Anzeigen eines zweiten Popovers, während eines bereits angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte auto Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, schließen jedoch andere Hint-Popover.
    Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

    Normalerweise werden sie als Reaktion auf nicht-klick-basierte JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet.
    Wenn Sie auf einen Button klicken, um ein `hint`-Popover zu öffnen, wird ein geöffnetes `auto`-Popover leicht verworfen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover können nicht "leicht verworfen" werden und werden nicht automatisch geschlossen. Popover müssen explizit angezeigt und geschlossen werden, indem deklarative Show/Hide/Toggle-Buttons oder JavaScript verwendet werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Feature-Erkennung

Sie können das `popover`-Attribut verwenden, um die [Popover API](/de/docs/Web/API/Popover_API) zu erkennen:

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
