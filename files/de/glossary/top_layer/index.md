---
title: Obere Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Die **obere Ebene** ist eine spezielle Ebene, die sich über die gesamte Breite und Höhe des Ansichtsfensters erstreckt und über allen anderen Ebenen eines Webdokuments liegt. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über allen anderen Inhalten der Seite erscheinen sollen.

Elemente, die in der oberen Ebene platziert werden, erzeugen einen neuen [Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Zu den Elementen, die in der oberen Ebene erscheinen, gehören:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) als Modal angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.

Einige Browser, wie Chrome, zeigen Elemente, die in der oberen Ebene platziert wurden, in einem speziellen Eintrag des DOM-Baums an. Zum Beispiel:

![Ein Element in der oberen Ebene, wie in den Chrome DevTools gezeigt](top_layer_devtools.png)

Beachten Sie, dass die obere Ebene ein internes Browser-Konzept ist und nicht direkt aus dem Code manipuliert werden kann. Sie können Elemente, die in der oberen Ebene platziert sind, mit CSS und JavaScript ansprechen, aber die obere Ebene selbst können Sie nicht ansprechen.

## Siehe auch

- [Der Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
