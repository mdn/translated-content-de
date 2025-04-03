---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können "leicht abgewiesen" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto` Popovers wird im Allgemeinen andere `auto` Popovers schließen, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Festlegen eines leeren Wertes für `popover` — `popover` oder `popover=""` — entspricht der Einstellung `popover="auto"`.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht abgewiesen werden und reagieren auf Schließanforderungen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht abgewiesen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit über deklarative Anzeig-/Versteck-/Umschalt-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn geöffnet, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Schicht")}} und werden nicht durch das {{cssxref('position')}} oder {{cssxref('overflow')}} Styling der Elternelemente beeinflusst.

Popovers, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Zustand haben, können über zugeordnete Steuerelemente (die durch das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut bezeichnet sind) gezeigt und verborgen werden und können durch Klicken außerhalb des Popover-Bereichs, das Öffnen eines anderen Popovers oder das Drücken browserspezifischer Mechanismen wie der <kbd>Esc</kbd>-Taste leicht abgewiesen werden.

Im Allgemeinen kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eins angezeigt wird, verbirgt das erste. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch über JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell angezeigt und verborgen werden — sie schließen andere Popovers nicht automatisch, wenn sie angezeigt werden, und sie können nicht leicht abgewiesen werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht abgewiesen werden und reagieren auf Schließanforderungen.

Normalerweise werden `hint` Popovers als Reaktion auf nicht klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und verborgen. Das Klicken auf einen Button, um ein `hint` Popover zu öffnen, würde ein geöffnetes `auto` Popover leicht abweisen.

Für detaillierte Informationen zur Verwendung siehe die [Popover-API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

Das folgende Beispiel zeigt einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Siehe unsere [Popover-API-Beispiel-Startseite](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover-API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
