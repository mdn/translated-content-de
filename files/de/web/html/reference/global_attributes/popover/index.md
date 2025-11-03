---
title: HTML `popover` globales Attribut
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

## Wert

Das `popover`-Attribut kann einen der folgenden Werte annehmen:

- `"auto"`
  - : [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Popovers können durch leichtes Entfernen („light dismissed“) geschlossen werden - das bedeutet, dass Sie das Popover durch Klicken außerhalb davon oder durch Drücken der <kbd>Esc</kbd>-Taste ausblenden können. Das Anzeigen eines `auto`-Popovers wird im Allgemeinen andere `auto`-Popovers schließen, die bereits angezeigt werden, es sei denn, sie sind verschachtelt.

    > [!NOTE]
    > Ein leerer Wert für `popover`, also `popover` oder `popover=""`, entspricht dem Setzen auf `popover="auto"`.

- `"hint"` {{experimental_inline}}
  - : [`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht entfernt werden und reagieren auf Schließanforderungen.

- `"manual"`
  - : [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers können nicht leicht entfernt werden und werden nicht automatisch geschlossen. Popovers müssen ausdrücklich mithilfe deklarativer Anzeigen/Ausblenden/Wechselbuttons oder JavaScript angezeigt und geschlossen werden. Mehrere unabhängige `manual`-Popovers können gleichzeitig angezeigt werden.

## Beschreibung

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element geöffnet werden (z.B. ein `<button>` oder ein `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "Top-Schicht")}} und werden nicht von den {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilen der übergeordneten Elemente beeinflusst.

Popovers im [`auto`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)-Zustand können mithilfe zugeordneter Steuerungen (gekennzeichnet durch das [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) angezeigt und ausgeblendet und durch leichtes Entfernen (durch Klicken außerhalb des Popover-Bereichs, Öffnen eines anderen Popovers oder Drücken browser-spezifischer Mechanismen wie der <kbd>Esc</kbd>-Taste) geschlossen werden.

Im Allgemeinen kann nur ein `auto`-Popover gleichzeitig auf dem Bildschirm angezeigt werden – wenn ein zweites Popover angezeigt wird, während bereits eines angezeigt wird, wird das erste ausgeblendet. Die Ausnahme von dieser Regel besteht, wenn Sie verschachtelte Auto-Popovers haben. Siehe [Verschachtelte Popovers](/de/docs/Web/API/Popover_API/Using#nested_popovers) für weitere Details.

Sie können auch über JavaScript gesteuert werden, zum Beispiel kann die [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode verwendet werden, um ein Popover zwischen angezeigt und verborgen umzuschalten.

Im Gegensatz dazu müssen [`manual`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state)-Popovers manuell angezeigt und ausgeblendet werden – sie schließen keine anderen Popovers, wenn sie angezeigt werden, und sie können nicht leicht entfernt werden. Dies ermöglicht Anwendungsfälle, in denen Sie mehrere Popovers gleichzeitig anzeigen möchten.

[`hint`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state)-Popovers schließen keine `auto`-Popovers, wenn sie angezeigt werden, aber sie schließen andere Hint-Popovers. Sie können leicht entfernt werden und reagieren auf Schließanforderungen.

Üblicherweise werden `hint`-Popovers als Antwort auf nicht klickbasierte JavaScript-Ereignisse wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event)/[`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`focus`](/de/docs/Web/API/Element/focus_event)/[`blur`](/de/docs/Web/API/Element/blur_event) angezeigt und ausgeblendet. Das Klicken auf einen Button, um ein `hint`-Popover zu öffnen, würde ein geöffnetes `auto`-Popover leicht entfernen.

Für detaillierte Informationen zur Nutzung finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Übersichtsseite.

## Beispiele

Das folgende Beispiel rendert einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Siehe unsere [Popover API Examples Landing Page](https://mdn.github.io/dom-examples/popover-api/), um auf die vollständige Sammlung von MDN-Popover-Beispielen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) CSS-Pseudoklasse
