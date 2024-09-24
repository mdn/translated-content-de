---
title: Oberste Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{GlossarySidebar}}

Die **oberste Ebene** ist eine spezielle Ebene, die die gesamte Breite und Höhe des Ansichtsfensters abdeckt und über allen anderen Ebenen in einem Webdokument liegt. Sie wird vom Browser erstellt, um Elemente aufzunehmen, die über allen anderen Inhalten der Seite erscheinen sollen.

Elemente, die in der obersten Ebene platziert sind, erzeugen einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Zu den Elementen, die in der obersten Ebene erscheinen, gehören:

- Vollbild-Elemente, d. h. Elemente, die durch einen erfolgreichen Aufruf von {{domxref("Element.requestFullscreen()")}} im Vollbildmodus angezeigt werden sollen.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von {{domxref("HTMLDialogElement.showModal()")}} als Modaldialog angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von {{domxref("HTMLElement.showPopover()")}} angezeigt werden.

Einige Browser, wie zum Beispiel Chrome, zeigen die in der obersten Ebene platzierten Elemente in einem speziellen Eintrag des DOM-Baums an. Zum Beispiel:

![Ein Element in der obersten Ebene, wie in den Chrome-Entwicklertools gezeigt](top_layer_devtools.png)

Beachten Sie, dass die oberste Ebene ein internes Browserkonzept ist und nicht direkt über Code manipuliert werden kann. Sie können mit CSS und JavaScript Elemente ansprechen, die in die oberste Ebene platziert wurden, aber nicht die oberste Ebene selbst.

## Siehe auch

- [Der Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, {{domxref("HTMLDialogElement")}}-Schnittstelle
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudoklasse
