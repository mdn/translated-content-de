---
title: Obere Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **obere Ebene** ist eine spezifische Ebene, die sich über die gesamte Breite und Höhe des Ansichtsfensters erstreckt und über allen anderen in einem Webdokument angezeigten Ebenen liegt. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über allen anderen Inhalten auf der Seite erscheinen sollen.

Elemente, die in der oberen Ebene platziert werden, erzeugen einen neuen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Zu den Elementen, die in der oberen Ebene erscheinen, gehören:

- Vollbild-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden sollen.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) als Modal angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.

Einige Browser, wie z.B. Chrome, zeigen Elemente, die in der oberen Ebene platziert sind, in einem speziellen DOM-Baumeintrag an. Zum Beispiel:

![Ein Element in der oberen Ebene, wie in den Chrome DevTools angezeigt](top_layer_devtools.png)

Beachten Sie, dass die obere Ebene ein internes Browser-Konzept ist und nicht direkt aus dem Code heraus manipuliert werden kann. Sie können Elemente, die in der oberen Ebene platziert sind, mit CSS und JavaScript ansprechen, aber nicht die obere Ebene selbst.

## Siehe auch

- [Der Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
