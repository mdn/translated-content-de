---
title: popover
slug: Web/HTML/Global_attributes/popover
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`popover`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) wird verwendet, um ein Element als Popover-Element zu kennzeichnen.

Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder ein `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen {{domxref("HTMLElement.showPopover()")}} Aufruf geöffnet werden.

Wenn sie geöffnet werden, erscheinen Popover-Elemente oberhalb aller anderen Elemente in der {{glossary("top layer")}} und werden nicht von den Stilen {{cssxref('position')}} oder {{cssxref('overflow')}} der Elternelemente beeinflusst.

Ein Popover-Attribut kann die Werte [`"auto"`](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) (Standard) oder [`"manual"`](/de/docs/Web/API/Popover_API/Using#using_manual_popover_state) haben.
Popover, die den `auto` Zustand haben, können durch Auswahl außerhalb des Popover-Bereichs „leicht verworfen“ werden und erlauben im Allgemeinen nur ein Popover gleichzeitig auf dem Bildschirm.
Im Gegensatz dazu müssen `manual` Popover immer explizit verborgen werden, erlauben jedoch Anwendungsfälle wie verschachtelte Popover in Menüs.

Für detaillierte Informationen zur Nutzung siehe die {{domxref("Popover API", "Popover API", "", "nocode")}} Landingpage.

## Beispiele

Das folgende Beispiel zeigt einen Button, der ein Popover-Element öffnet, wenn er aktiviert wird.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> Sehen Sie sich unsere [Popover API Beispiele Landingpage](https://mdn.github.io/dom-examples/popover-api/) an, um die vollständige Sammlung der MDN Popover-Beispiele zu finden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Popover API", "Popover API", "", "nocode")}}
- [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attribut
- [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attribut
- [`::backdrop`](/de/docs/Web/CSS/::backdrop) CSS-Pseudoelement
- [`:popover-open`](/de/docs/Web/CSS/:popover-open) CSS-Pseudoklasse
