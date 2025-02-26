---
title: "HTMLElement: popover-Eigenschaft"
short-title: popover
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Popover API")}}

Die **`popover`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ermittelt und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"`, `"hint"` oder `"manual"`) und kann zur Funktionsüberprüfung verwendet werden.

Sie spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.

## Wert

Ein aufzählbarer Wert; mögliche Werte sind:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht ausgeblendet" werden – das bedeutet, dass Sie den Popover durch Klicken außerhalb oder Drücken der <kbd>Esc</kbd>-Taste ausblenden können.

    In der Regel kann nur ein `auto` Popover gleichzeitig angezeigt werden – wenn ein zweiter Popover angezeigt wird, während bereits einer angezeigt wird, wird der erste ausgeblendet. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte auto Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen `auto` Popovers nicht, wenn sie angezeigt werden, schließen jedoch andere hint Popovers.
    Sie können leicht ausgeblendet werden und reagieren auf Schließen-Anforderungen.

    In der Regel werden sie in Reaktion auf Nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet.
    Wenn Sie auf eine Schaltfläche klicken, um ein `hint` Popover zu öffnen, würde dies ein offenes `auto` Popover leicht ausblenden.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht ausgeblendet" werden und werden nicht automatisch geschlossen. Popovers müssen explizit mittels deklarativer Anzeigen-/Verbergen-/Umschalt-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beispiele

### Funktionsüberprüfung

Sie können das `popover`-Attribut zur Funktionsüberprüfung der [Popover API](/de/docs/Web/API/Popover_API) verwenden:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Programmgesteuertes Einrichten eines Popovers

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
