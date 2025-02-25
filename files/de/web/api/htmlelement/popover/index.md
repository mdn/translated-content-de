---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ermittelt und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"`, `"hint"` oder `"manual"`), und kann zur Feature-Erkennung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.

## Wert

Ein aufgezählter Wert; mögliche Werte sind:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "leicht geschlossen" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken.

    Normalerweise kann nur ein `auto`-Popover gleichzeitig angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines gezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte auto-Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

- `"hint"`

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers.
    Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

    Normalerweise werden sie als Reaktion auf nicht durch Klicken ausgelöste JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen.
    Ein Klick auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde dazu führen, dass ein offenes `auto`-Popover leicht schließt.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "leicht geschlossen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit mit deklarativen Anzeig-/Verberg-/Umschalt-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Feature-Erkennung

Sie können das `popover`-Attribut zur Feature-Erkennung der [Popover-API](/de/docs/Web/API/Popover_API) verwenden:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Popover programmatisch einrichten

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
- [Popover-API](/de/docs/Web/API/Popover_API)
