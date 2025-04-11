---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ruft den Popover-Zustand eines Elements ab und setzt ihn über JavaScript (`"auto"`, `"hint"` oder `"manual"`). Sie kann auch zur Feature-Erkennung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht verworfen" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können.

    Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — wenn ein zweites Popover angezeigt wird, während eines bereits gezeigt wird, wird das erste ausgeblendet. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte `auto`-Popovers haben. Weitere Informationen finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, schließen jedoch andere `hint`-Popovers.
    Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

    Normalerweise werden sie als Reaktion auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt.
    Ein Klick auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht verwerfen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht verworfen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit angezeigt und geschlossen werden, indem deklarative Schaltflächen zum Anzeigen/Verstecken/Umschalten oder JavaScript verwendet werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Merkmals-Erkennung

Sie können das `popover`-Attribut verwenden, um die [Popover-API](/de/docs/Web/API/Popover_API) zu erkennen:

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

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover-API](/de/docs/Web/API/Popover_API)
