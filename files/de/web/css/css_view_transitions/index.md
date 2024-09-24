---
title: CSS-Ansichtstransitionen
slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: ef793e5764cf3b6371f275233a8e278e692d2ff8
---

{{CSSRef}}

Das **CSS-Ansichtstransitionen**-Modul definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transitions_API), die es Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und zwischen Dokumenten zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudo-Elemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die `view-transition-class`-Eigenschaft, aber sie wird derzeit in keinem Browser unterstützt.

### At-Regeln und Deskriptoren

- {{cssxref("@view-transition")}}
  - [`navigation`](/de/docs/Web/CSS/@view-transition#navigation)-Deskriptor

### Selektoren und Pseudo-Elemente

- {{cssxref("::view-transition")}} {{experimental_inline}}
- {{cssxref("::view-transition-image-pair()")}} {{experimental_inline}}
- {{cssxref("::view-transition-group()")}} {{experimental_inline}}
- {{cssxref("::view-transition-new()")}} {{experimental_inline}}
- {{cssxref("::view-transition-old()")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die `:active-view-transition` und `:active-view-transition-type()` Pseudo-Klassen, aber sie werden derzeit in keinem Browser unterstützt.

### Schnittstellen

- {{domxref("CSSViewTransitionRule")}}
- {{domxref("ViewTransition")}}
  - {{domxref("ViewTransition.skipTransition()")}} Methode
  - {{domxref("ViewTransition.updateCallbackDone")}}
  - {{domxref("ViewTransition.ready")}}
  - {{domxref("ViewTransition.finished")}}
- {{domxref("Document.startViewTransition()")}} Methode

## Leitfäden

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)

  - : Erklärt, wie Sie Ansichtstransitionen erstellen und Übergangsanimationen anpassen, einschließlich der Manipulation aktiver Ansichtstransitionen.

## Verwandte Konzepte

- {{domxref("PageRevealEvent", "pagereveal")}} Ereignis
- {{domxref("PageSwapEvent", "pageswap")}} Ereignis
- {{domxref("Document.visibilityState")}}

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - {{domxref("CSSKeyframesRule")}}
  - {{domxref("CSSStyleRule")}}
  - [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [CSS-Grundlagen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
