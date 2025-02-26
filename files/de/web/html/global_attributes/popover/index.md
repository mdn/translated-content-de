---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht entlassen" werden – das bedeutet, dass Sie den Popover durch Klicken außerhalb davon oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto` Popovers schließt im Allgemeinen andere `auto` Popovers, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leerer Wert für `popover` – `popover` oder `popover=""` – ist gleichbedeutend mit der Einstellung `popover="auto"`.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Popovers. Sie können leicht entlassen werden und reagieren auf Schließanfragen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht entlassen" werden und schließen nicht automatisch. Popovers müssen explizit mittels deklarativer Anzeigen/Verbergen/Umschalt-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (z.B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "Top-Schicht")}} und werden nicht von den {{cssxref('position')}} oder {{cssxref('overflow')}} Stileigenschaften der Elternelemente beeinflusst.

Popovers, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Zustand haben, können mit assoziierten Steuerungen (gekennzeichnet durch das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) angezeigt und verborgen werden und durch Klicken außerhalb des Popover-Bereichs, das Öffnen eines anderen Popovers oder durch Drücken bestimmter browserspezifischer Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht entlassen" werden.

Im Allgemeinen kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn eines bereits angezeigt wird, blendet das erste aus. Eine Ausnahme von dieser Regel besteht, wenn Sie verschachtelte `auto` Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode verwendet werden, um einen Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell angezeigt und verborgen werden — sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht leicht entlassen werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen jedoch andere Hinweis-Popovers. Sie können leicht entlassen werden und werden auf Schließanfragen reagieren.

Normalerweise werden `hint` Popovers als Reaktion auf nicht-Klick Javascript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und verborgen. Das Klicken auf einen Button, um ein `hint` Popover zu öffnen, würde dazu führen, dass ein geöffnetes `auto` Popover leicht entlassen wird.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

Das folgende Beispiel rendert einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Sehen Sie sich unsere [Popover API Beispiel-Startseite](https://mdn.github.io/dom-examples/popover-api/) an, um die vollständige Sammlung von MDN Popover-Beispielen zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudo-Element
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
