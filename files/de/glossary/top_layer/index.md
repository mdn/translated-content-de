---
title: Top layer
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{GlossarySidebar}}

Die **top layer** ist eine spezifische Schicht, die die gesamte Breite und Höhe des Viewports abdeckt und über allen anderen Schichten in einem Webdokument liegt. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über allen anderen Inhalten auf der Seite erscheinen sollen.

Elemente, die in der top layer platziert werden, erzeugen einen neuen [stapelnden Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Elemente, die in der top layer erscheinen, umfassen:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die als modale Dialoge über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.

Einige Browser, wie Chrome, zeigen Elemente, die in der top layer platziert sind, in einem speziellen DOM-Baumeintrag an. Beispiel:

![Ein Element in der top layer, wie in den Chrome DevTools gezeigt](top_layer_devtools.png)

Beachten Sie, dass die top layer ein internes Browserkonzept ist und nicht direkt aus dem Code heraus manipuliert werden kann. Sie können mit CSS und JavaScript auf Elemente in der top layer abzielen, jedoch nicht auf die top layer selbst.

## Siehe auch

- [Der stapelnde Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudoklasse
