---
title: HTML-Popover-Globalattribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das **`popover`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "leicht geschlossen" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder Drücken der <kbd>Esc</kbd>-Taste verbergen können. Das Anzeigen eines `auto`-Popovers wird im Allgemeinen andere bereits angezeigte `auto`-Popovers schließen, es sei denn, sie sind geschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Werts für `popover` — `popover` oder `popover=""` — entspricht dem Setzen von `popover="auto"`.

- `"hint"` {{experimental_inline}}
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "leicht geschlossen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit über deklarative Show/Hide/Toggle-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente werden über `display: none` verborgen, bis sie über ein auslösendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Schicht")}} und werden nicht von den {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilen der übergeordneten Elemente beeinflusst.

Popovers, die sich im [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Zustand befinden, können mit zugeordneten Steuerelementen (festgelegt durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) ein- und ausgeblendet werden und durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder das Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht geschlossen" werden.

Im Allgemeinen kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden – wenn ein zweites Popover angezeigt wird, während ein anderes bereits angezeigt wird, wird das erste Popover verborgen. Die Ausnahme von dieser Regel ist, wenn Sie geschachtelte Auto-Popovers haben. Weitere Details finden Sie unter [Geschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell angezeigt und verborgen werden – sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht leicht geschlossen werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

Hint-Popovers werden normalerweise als Reaktion auf nicht-klickbezogene JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ein- und ausgeblendet. Ein Button-Klick zum Öffnen eines `hint`-Popovers würde ein geöffnetes `auto`-Popover leicht schließen.

Für detaillierte Informationen zur Verwendung siehe die [Popover-API](/de/docs/Web/API/Popover_API)-Startseite.

## Beispiele

Das folgende Beispiel rendert einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Besuchen Sie unsere [Popover-API-Beispielseite](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover-API](/de/docs/Web/API/Popover_API)
- HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
- HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) CSS-Pseudoklasse
