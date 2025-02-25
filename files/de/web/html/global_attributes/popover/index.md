---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`

  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "light dismissed" werden — das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb davon klicken oder die <kbd>Esc</kbd>-Taste drücken. Das Anzeigen eines `auto` Popovers wird im Allgemeinen andere bereits angezeigte `auto` Popovers schließen, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Werts für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit dem Setzen von `popover="auto"`.

- `"hint"`

  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers.
    Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

- `"manual"`

  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "light dismissed" werden und werden nicht automatisch geschlossen. Popovers müssen explizit über deklarative Show/Hide/Toggle-Schaltflächen oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual` Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Ebene")}} und werden nicht von den {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilen der übergeordneten Elemente beeinflusst.

Popovers, die sich im [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Zustand befinden, können mit zugehörigen Steuerelementen (die durch das [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut bezeichnet werden) angezeigt und ausgeblendet und durch Klicken außerhalb des Popover-Bereichs, das Öffnen eines anderen Popovers oder durch Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "light dismissed" werden.

Im Allgemeinen kann nur ein `auto` Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, blendet das erste aus. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte `auto` Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch über JavaScript gesteuert werden, z. B. kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell angezeigt und ausgeblendet werden — sie schließen andere Popovers nicht automatisch, wenn sie angezeigt werden, und können nicht "light dismissed" werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto` Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können "light dismissed" werden und reagieren auf Schließanforderungen.

In der Regel werden `hint` Popovers als Reaktion auf nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Ein Button-Klick zum Öffnen eines `hint` Popovers würde ein geöffnetes `auto` Popover "light-dismiss".

Für detaillierte Informationen zur Verwendung siehe die [Popover-API](/de/docs/Web/API/Popover_API) Hauptseite.

## Beispiele

Das folgende Beispiel rendert einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Besuchen Sie unsere [Popover-API-Beispiele Hauptseite](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zu sehen.

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
