---
title: CSS-Ansichtstransitionen
slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: ee7620b98800392073f3c8f94a9b2d048191356d
---

{{CSSRef}}

Das **CSS-Ansichtstransitionen**-Modul definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transition_API), die Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und über Dokumente hinweg zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudoelemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-class")}}
- {{cssxref("view-transition-name")}}

### At-Regeln und Deskriptoren

- {{cssxref("@view-transition")}}
  - [`navigation`](/de/docs/Web/CSS/@view-transition#navigation)-Deskriptor

### Selektoren und Pseudoelemente

- {{cssxref(":active-view-transition")}}
- {{cssxref(":active-view-transition-type()")}}
- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

### Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)-Methode
  - [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)
  - [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)
  - [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode

## Leitfäden

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)

  - : Erklärt, wie Ansichtstransitionen erstellt und Übergangsanimationen angepasst werden, einschließlich der Manipulation aktiver Ansichtstransitionen.

## Verwandte Konzepte

- [`pagereveal`](/de/docs/Web/API/PageRevealEvent)-Event
- [`pageswap`](/de/docs/Web/API/PageSwapEvent)-Event
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
  - [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
  - [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
