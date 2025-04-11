---
title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover` Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht geschlossen" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto` Popovers schließt im Allgemeinen andere `auto` Popovers, die bereits angezeigt werden, es sei denn, sie sind geschachtelt.

    > [!NOTE]
    > Das Festlegen eines leeren Werts für `popover` — `popover` oder `popover=""` — entspricht dem Festlegen von `popover="auto"`.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber schließen andere Hint Popovers.
    Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht geschlossen" werden und schließen nicht automatisch. Popovers müssen explizit mit deklarativen Anzeig-/Versteck-/Umschaltschaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein auslösendes/steuerndes Element geöffnet werden (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf.

Wenn sie geöffnet sind, erscheinen Popover-Elemente oberhalb aller anderen Elemente in der {{Glossary("top_layer", "obersten Schicht")}} und sind nicht durch die {{cssxref('position')}} oder {{cssxref('overflow')}} Stilgebung von übergeordneten Elementen beeinflusst.

Popovers, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Zustand haben, können mit zugehörigen Steuerungen (festgelegt durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) angezeigt und ausgeblendet werden und durch Klicken außerhalb der Popover-Fläche, durch Öffnen eines anderen Popovers oder durch das Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste „leicht geschlossen“ werden.

In der Regel kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [geschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mit JavaScript gesteuert werden. Beispielsweise kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell angezeigt und versteckt werden — sie schließen beim Anzeigen nicht automatisch andere Popovers und können nicht leicht geschlossen werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber schließen andere Hint Popovers. Sie können leicht geschlossen werden und reagieren auf Schließanforderungen.

In der Regel werden `hint` Popovers als Reaktion auf nicht klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und versteckt. Das Klicken auf eine Schaltfläche, um ein `hint` Popover zu öffnen, würde ein geöffnetes `auto` Popover leicht schließen.

Für detaillierte Informationen zur Nutzung siehe die [Popover API](/de/docs/Web/API/Popover_API) Hauptseite.

## Beispiele

Das folgende Beispiel zeigt eine Schaltfläche, die ein Popover-Element öffnet, wenn sie aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API-Beispiele Hauptseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
