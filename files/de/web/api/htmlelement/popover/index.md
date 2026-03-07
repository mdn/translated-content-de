---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ruft den Popover-Zustand eines Elements ab und setzt ihn über JavaScript (`"auto"`, `"hint"` oder `"manual"`). Sie kann auch zur Erkennung von Funktionen verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "leicht verworfen" werden — das bedeutet, dass Sie den Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken.

    Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers.
    Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

    Normalerweise werden sie als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet.
    Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht verwerfen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "leicht verworfen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit mithilfe von deklarativen Anzeigen/Verbergen/Umschalt-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Funktionsnachweis

Sie können das `popover`-Attribut verwenden, um die [Popover-API](/de/docs/Web/API/Popover_API) zu erkennen:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
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

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
