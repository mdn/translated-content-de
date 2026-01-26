---
title: HTML-Popover-Global-Attribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`popover`** [Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) Popovers können durch "leichtes Verwerfen" geschlossen werden – das bedeutet, dass Sie das Popover ausblenden können, indem Sie außerhalb des Popovers klicken oder die <kbd>Esc</kbd>-Taste drücken. Das Anzeigen eines `auto`-Popovers wird im Allgemeinen andere `auto`-Popovers schließen, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Das Setzen eines leeren Wertes für `popover` — `popover` oder `popover=""` — entspricht dem Setzen von `popover="auto"`.

- `"hint"` {{experimental_inline}}
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie werden andere Hinweis-Popovers schließen.
    Sie können leicht verworfen werden und reagieren auf Schließen-Anfragen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers können nicht durch "leichtes Verwerfen" geschlossen werden und werden nicht automatisch geschlossen. Popovers müssen explizit mit deklarativen Anzeigen/Verbergen/Umschalten-Buttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` versteckt, bis sie über ein aufrufendes/steuerndes Element (z.B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "obersten Ebene")}} und werden nicht durch das Styling von übergeordneten Elementen wie {{cssxref('position')}} oder {{cssxref('overflow')}} beeinflusst.

Popovers, die den Zustand [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) haben, können mit zugehörigen Steuerelementen (durch das Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) bezeichnet) gezeigt und versteckt werden und durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder Drücken von browser-spezifischen Mechanismen wie der <kbd>Esc</kbd>-Taste "leicht verworfen" werden.

Im Allgemeinen kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden — das Anzeigen eines zweiten Popovers, wenn bereits eines angezeigt wird, wird das erste ausblenden. Die Ausnahme zu dieser Regel ist, wenn Sie verschachtelte `auto`-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch mit JavaScript gesteuert werden, zum Beispiel kann die Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) Popovers manuell angezeigt und versteckt werden — sie schließen nicht automatisch andere Popovers, wenn sie angezeigt werden, und können nicht leicht verworfen werden. Dies ermöglicht Anwendungsfälle, bei denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) Popovers schließen keine `auto`-Popovers, wenn sie geöffnet werden, aber sie schließen andere Hint-Popovers. Sie können leicht verworfen werden und reagieren auf Schließen-Anfragen.

Normalerweise werden `hint`-Popovers als Reaktion auf nicht-klick JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und verborgen. Das Klicken auf einen Button zum Öffnen eines `hint`-Popovers würde dazu führen, dass ein offenes `auto`-Popover leicht verworfen wird.

Für detaillierte Informationen zur Verwendung, siehe die [Popover-API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

Das Folgende rendert einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Siehe unsere [Popover-API-Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover-API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- {{cssxref("::backdrop")}} CSS-Pseudoelement
- {{cssxref(":popover-open")}} CSS-Pseudoklasse
