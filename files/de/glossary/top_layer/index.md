---
title: Top Layer
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{GlossarySidebar}}

Die **Top Layer** ist eine spezielle Ebene, die sich über die gesamte Breite und Höhe des Viewports erstreckt und über allen anderen Ebenen angezeigt wird, die in einem Webdokument dargestellt werden. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über allen anderen Inhalten der Seite erscheinen sollen.

Elemente, die in die Top Layer platziert werden, erzeugen einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudoelemente.

Zu den Elementen, die in der Top Layer erscheinen, gehören:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) als Modal angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) gezeigt werden.

Einige Browser, wie Chrome, zeigen in der Top Layer platzierte Elemente in einem speziellen DOM-Baumeintrag an. Zum Beispiel:

![Ein Element in der Top Layer, wie in den Chrome DevTools gezeigt](top_layer_devtools.png)

Beachten Sie, dass die Top Layer ein internes Browserkonzept ist und nicht direkt über Code manipuliert werden kann. Sie können mit CSS und JavaScript auf in der Top Layer platzierte Elemente zielen, jedoch nicht direkt auf die Top Layer selbst.

## Siehe auch

- [Der Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
