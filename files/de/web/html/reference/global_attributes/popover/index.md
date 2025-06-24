---
title: HTML popover globales Attribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popover können "leicht ausgeblendet" werden – das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto`-Popovers schließt in der Regel andere bereits angezeigte `auto`-Popover, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leerer Wert für `popover` – `popover` oder `popover=""` – ist gleichbedeutend mit `popover="auto"`.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, schließen jedoch andere Hint-Popover.
    Sie können leicht ausgeblendet werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover können nicht "leicht ausgeblendet" werden und schließen nicht automatisch. Popover müssen explizit über deklarative Schaltflächen zum Anzeigen/Ausblenden/Umschalten oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popover können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein auslösendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "oberen Ebene")}} und werden nicht von den {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilen der Elternelemente beeinflusst.

Popover, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Zustand haben, können mithilfe zugehöriger Steuerungen (festgelegt durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) gezeigt und ausgeblendet werden und durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder durch Drücken browser-spezifischer Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht ausgeblendet" werden.

In der Regel kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden – das Anzeigen eines zweiten Popovers, während bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte auto-Popover haben. Siehe [Verschachtelte Popover](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen gezeigt und versteckt umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popover manuell gezeigt und versteckt werden – sie schließen andere Popover beim Anzeigen nicht automatisch und können nicht leicht ausgeblendet werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popover gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popover schließen keine `auto`-Popover, wenn sie angezeigt werden, schließen jedoch andere Hint-Popover. Sie können leicht ausgeblendet werden und reagieren auf Schließanforderungen.

In der Regel werden `hint`-Popover in Reaktion auf nicht-klickbare JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und versteckt. Das Klicken auf eine Schaltfläche, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover leicht ausblenden.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API)-Landingpage.

## Beispiele

Das folgende Beispiel rendert eine Schaltfläche, die ein Popover-Element öffnet, wenn sie aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API-Beispiel-Landingpage](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zu sehen.

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
