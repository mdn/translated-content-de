---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.

Wenn sie geöffnet sind, erscheinen Popover-Elemente über allen anderen Elementen in der {{Glossary("top_layer", "Top-Ebene")}} und werden nicht durch das {{cssxref('position')}}- oder {{cssxref('overflow')}}-Styling der Elternelemente beeinflusst.

Ein `popover` Attribut kann die Werte [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) (Standard) oder [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) haben.
Popover mit dem `auto`-Zustand können durch Auswahl außerhalb des Popover-Bereichs "leicht geschlossen" werden und erlauben im Allgemeinen nur, dass ein Popover gleichzeitig auf dem Bildschirm angezeigt wird.
Im Gegensatz dazu müssen `manual` Popover immer ausdrücklich verborgen werden, erlauben jedoch Anwendungsfälle wie verschachtelte Popover in Menüs.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API) Einstiegsseite.

## Beispiele

Das folgende Beispiel ordnet einen Button an, der ein Popover-Element öffnet, wenn es aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Siehe unsere [Popover API Beispieleinstiegsseite](https://mdn.github.io/dom-examples/popover-api/), um vollen Zugriff auf die gesamte Sammlung von MDN Popover-Beispielen zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
