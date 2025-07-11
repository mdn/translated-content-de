---
title: Oberste Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Die **oberste Ebene** ist eine spezielle Ebene, die die gesamte Breite und Höhe des Viewports abdeckt und über allen anderen Ebenen eines Webdokuments liegt. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über dem gesamten anderen Inhalt auf der Seite erscheinen sollen.

Elemente, die in der obersten Ebene platziert sind, erzeugen einen neuen [stapelnden Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudoelemente.

Elemente, die in der obersten Ebene erscheinen werden, umfassen:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die als Modal über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.

Einige Browser, wie Chrome, zeigen Elemente, die in die oberste Ebene platziert werden, in einem speziellen DOM-Baumeintrag an. Zum Beispiel:

![Ein Element in der obersten Ebene, wie es in den Chrome Developer Tools angezeigt wird](top_layer_devtools.png)

Beachten Sie, dass die oberste Ebene ein internes Browserkonzept ist und nicht direkt aus dem Code heraus manipuliert werden kann. Sie können jedoch Elemente, die in der obersten Ebene platziert sind, mit CSS und JavaScript ansprechen, jedoch nicht die oberste Ebene selbst.

## Siehe auch

- [Der stapelnde Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
