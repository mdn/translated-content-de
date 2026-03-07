---
title: Globales HTML-Attribut popover
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

Das **`popover`**-Attribut [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können "light dismissed" werden — das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto`-Popovers wird in der Regel andere bereits angezeigte `auto`-Popovers schließen, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Werts für `popover` — `popover` oder `popover=""` — ist gleichbedeutend mit dem Setzen von `popover="auto"`.

- `"hint"`
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers.
    Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht "light dismissed" werden und werden nicht automatisch geschlossen. Popovers müssen explizit über deklarative An/Aus-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element geöffnet werden (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf.

Wenn sie geöffnet sind, erscheinen Popover-Elemente oberhalb aller anderen Elemente in der {{Glossary("top_layer", "obersten Schicht")}} und werden nicht durch die {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilierung der Elternelemente beeinflusst.

Popover, die den [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Status haben, können mit zugehörigen Steuerungen (bezeichnet durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) angezeigt und versteckt werden, und durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder Drücken von browserspezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "light dismissed" werden.

Im Allgemeinen kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden - das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, wird das erste ausblenden. Die Ausnahme von dieser Regel ist, wenn Sie verschachtelte `auto`-Popovers haben. Weitere Details finden Sie unter [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers).

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen sichtbar und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell angezeigt und versteckt werden — sie schließen keine anderen Popovers automatisch, wenn sie angezeigt werden, und können nicht "light dismissed" werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, werden aber andere Hint-Popovers schließen. Sie können leicht verworfen werden und reagieren auf Schließanforderungen.

In der Regel werden `hint`-Popovers als Reaktion auf Nicht-Klick-JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) gezeigt und versteckt. Ein Klick auf einen Button, um ein `hint`-Popover zu öffnen, würde ein offenes `auto`-Popover dazu veranlassen, "light dismissed" zu werden.

Detaillierte Informationen zur Verwendung finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Startseite.

## Beispiele

Das folgende Beispiel zeigt einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Besuchen Sie unsere [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/), um die vollständige Sammlung von MDN-Popover-Beispielen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- HTML-Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
- HTML-Attribut [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- {{cssxref("::backdrop")}} CSS-Pseudoelement
- {{cssxref(":popover-open")}} CSS-Pseudoklasse
