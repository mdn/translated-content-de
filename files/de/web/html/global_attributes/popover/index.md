---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (d. h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.

Wenn geöffnet, erscheinen Popover-Elemente über allen anderen Elementen in der [obersten Ebene](/de/docs/Glossary/top_layer) und werden nicht von der {{cssxref('position')}}- oder {{cssxref('overflow')}}-Stilgebung der übergeordneten Elemente beeinflusst.

Ein Popover-Attribut kann die Werte [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) (Standard) oder [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) haben.
Popover mit dem Zustand `auto` können durch Auswahl außerhalb des Popover-Bereichs "leicht geschlossen" werden und erlauben im Allgemeinen nur, dass ein Popover gleichzeitig auf dem Bildschirm angezeigt wird.
Im Gegensatz dazu müssen `manual` Popover immer explizit ausgeblendet werden, erlauben jedoch Anwendungsfälle wie verschachtelte Popover in Menüs.

Für detaillierte Informationen zur Verwendung siehe die [Popover API](/de/docs/Web/API/Popover_API) Startseite.

## Beispiele

Das folgende Beispiel rendert eine Schaltfläche, die ein Popover-Element öffnet, wenn sie aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Sehen Sie sich unsere [Popover API Beispiele Startseite](https://mdn.github.io/dom-examples/popover-api/) an, um auf die vollständige Sammlung der MDN Popover-Beispiele zuzugreifen.

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
