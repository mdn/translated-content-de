---
title: Obere Ebene
slug: Glossary/Top_layer
l10n:
  sourceCommit: c62181855c91ac0435dea5fa759a250e1dea4f8b
---

Die **obere Ebene** ist eine spezifische Ebene, die die gesamte Breite und Höhe des Ansichtsfensters abdeckt und über allen anderen in einem Webdokument angezeigten Ebenen liegt. Sie wird vom Browser erstellt, um Elemente zu enthalten, die über allen anderen Inhalten auf der Seite erscheinen sollen.

Elemente, die in der oberen Ebene platziert werden, erzeugen einen neuen [Staple-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), ebenso wie ihre entsprechenden {{cssxref("::backdrop")}} Pseudo-Elemente.

Zu den Elementen, die in der oberen Ebene erscheinen, gehören:

- Volle Bildschirm-Elemente, d.h. Elemente, die durch einen erfolgreichen Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) im Vollbildmodus angezeigt werden.
- {{htmlelement("dialog")}}-Elemente, die über einen erfolgreichen Aufruf von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) als Modales Fenster angezeigt werden.
- Popover-Elemente, die über einen erfolgreichen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt werden.
- Der Dropdown-Auswähler eines [anpassbaren \<select\>-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), sobald er geöffnet ist.

Einige Browser, wie Chrome, zeigen Elemente, die in der oberen Ebene platziert werden, in einem speziellen Eintrag des DOM-Baums an. Zum Beispiel:

![Ein Element in der oberen Ebene, wie es in den Chrome-Entwicklertools angezeigt wird](top_layer_devtools.png)

Beachten Sie, dass die obere Ebene ein internes Konzept des Browsers ist und nicht direkt über den Code manipuliert werden kann. Sie können jedoch mit CSS und JavaScript auf in der oberen Ebene platzierte Elemente abzielen, jedoch nicht direkt auf die obere Ebene selbst.

## Siehe auch

- [Der Staple-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}}-Element, [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} Pseudo-Klasse
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
