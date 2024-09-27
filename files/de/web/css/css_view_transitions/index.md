---
title: CSS View Transitions
slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: ef793e5764cf3b6371f275233a8e278e692d2ff8
---

{{CSSRef}}

Das **CSS view transitions**-Modul definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transitions_API), die es Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und zwischen Dokumenten zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudo-Elemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die `view-transition-class`-Eigenschaft, jedoch wird sie derzeit in keinem Browser unterstützt.

### At-Regeln und Deskriptoren

- {{cssxref("@view-transition")}}
  - [`navigation`](/de/docs/Web/CSS/@view-transition#navigation) Deskriptor

### Selektoren und Pseudo-Elemente

- {{cssxref("::view-transition")}} {{experimental_inline}}
- {{cssxref("::view-transition-image-pair()")}} {{experimental_inline}}
- {{cssxref("::view-transition-group()")}} {{experimental_inline}}
- {{cssxref("::view-transition-new()")}} {{experimental_inline}}
- {{cssxref("::view-transition-old()")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die `:active-view-transition` und `:active-view-transition-type()` Pseudoklassen, jedoch werden sie derzeit in keinem Browser unterstützt.

### Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) Methode
  - [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)
  - [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)
  - [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode

## Leitfäden

- [Using the View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)

  - : Erklärt, wie View-Übergänge erstellt und Übergangsanimationen angepasst werden, einschließlich der Manipulation aktiver View-Übergänge.

## Verwandte Konzepte

- [`pagereveal`](/de/docs/Web/API/PageRevealEvent) Ereignis
- [`pageswap`](/de/docs/Web/API/PageSwapEvent) Ereignis
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)

- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) Modul

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
  - [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
  - [Web animations API](/de/docs/Web/API/Web_Animations_API)

- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) Modul

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [CSS-Bausteine: Pseudoklassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
