---
title: Obere Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{GlossarySidebar}}

Die **obere Ebene** ist eine spezifische Ebene, die sich über die gesamte Breite und Höhe des Anzeigebereichs erstreckt und über allen anderen Ebenen in einem Webdokument liegt. Sie wird vom Browser erstellt, um Elemente einzuschließen, die über allen anderen Inhalten der Seite erscheinen sollen.

Elemente, die in der oberen Ebene platziert werden, erzeugen einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Elemente, die in der oberen Ebene erscheinen, umfassen:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) als modales Dialogfeld angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.

Einige Browser, wie zum Beispiel Chrome, zeigen Elemente, die in der oberen Ebene platziert sind, in einem speziellen DOM-Baum-Eintrag an. Zum Beispiel:

![Ein Element in der oberen Ebene, wie in den Chrome Developer Tools angezeigt](top_layer_devtools.png)

Beachten Sie, dass die obere Ebene ein internes Konzept des Browsers ist und nicht direkt über Code manipuliert werden kann. Sie können zwar mit CSS und JavaScript auf Elemente zugreifen, die in der oberen Ebene platziert sind, aber die obere Ebene selbst können Sie nicht direkt ansprechen.

## Siehe auch

- [Der Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
