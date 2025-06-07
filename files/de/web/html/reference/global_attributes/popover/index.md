---
title: HTML popover globales Attribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popover können "leicht verworfen" werden – das bedeutet, dass Sie das Popover verbergen können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken. Das Anzeigen eines `auto` Popovers wird in der Regel andere `auto` Popovers schließen, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Werts für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit dem Setzen von `popover="auto"`.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen aber andere Hint Popovers. Sie können leicht verworfen werden und reagieren auf Schließungsanfragen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht "leicht verworfen" werden und werden nicht automatisch geschlossen. Popovers müssen explizit mit deklarativen Anzeigen/Verbergen/Umschalt-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Aufruf geöffnet werden.

Wenn geöffnet, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Ebene")}} und werden nicht von den {{cssxref('position')}} oder {{cssxref('overflow')}} Stileigenschaften der Elternelemente beeinflusst.

Popover, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Zustand haben, können über zugeordnete Steuerelemente (angegeben durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) ein- und ausgeblendet und durch Klicken außerhalb des Popover-Bereichs, das Öffnen eines anderen Popovers oder Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht verworfen" werden.

In der Regel kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden – das Anzeigen eines zweiten Popovers, wenn bereits eins angezeigt wird, blendet das erste aus. Die Ausnahme zu dieser Regel ist, wenn Sie verschachtelte auto Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell ein- und ausgeblendet werden — sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht leicht verworfen werden. Dies erlaubt Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, schließen aber andere Hint Popovers. Sie können leicht verworfen werden und reagieren auf Schließungsanfragen.

In der Regel werden `hint` Popovers als Reaktion auf nicht-klickende JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) ein- und ausgeblendet. Das Klicken auf eine Schaltfläche zum Öffnen eines `hint` Popovers würde dazu führen, dass ein geöffnetes `auto` Popover leicht verworfen wird.

Für detaillierte Informationen zur Nutzung siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

Das Folgende rendert eine Schaltfläche, die ein Popover-Element öffnet, wenn sie aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Sehen Sie sich unsere [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/) an, um die vollständige Sammlung von MDN Popover-Beispielen zu sehen.

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
