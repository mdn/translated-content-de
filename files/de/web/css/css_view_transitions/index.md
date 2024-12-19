---
title: CSS-Ansichtsübergänge
slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Ansichtsübergänge**-Modul definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transitions_API), die es Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und über Dokumente hinweg zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudoelemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die Eigenschaft `view-transition-class`, die jedoch derzeit in keinem Browser unterstützt wird.

### At-Rules und Deskriptoren

- {{cssxref("@view-transition")}}
  - [`navigation`](/de/docs/Web/CSS/@view-transition#navigation)-Deskriptor

### Selektoren und Pseudoelemente

- {{cssxref("::view-transition")}} {{experimental_inline}}
- {{cssxref("::view-transition-image-pair()")}} {{experimental_inline}}
- {{cssxref("::view-transition-group()")}} {{experimental_inline}}
- {{cssxref("::view-transition-new()")}} {{experimental_inline}}
- {{cssxref("::view-transition-old()")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die Pseudoklassen `:active-view-transition` und `:active-view-transition-type()`, die jedoch derzeit in keinem Browser unterstützt werden.

### Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - Methode [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)
  - [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)
  - [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)
- Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)

## Leitfäden

- [Verwendung der View Transitions API](/de/docs/Web/API/View_Transitions_API/Using)

  - : Erklärt, wie Ansichtsübergänge erstellt und Übergangsanimationen angepasst werden, einschließlich der Manipulation aktiver Ansichtsübergänge.

## Verwandte Konzepte

- [`pagereveal`](/de/docs/Web/API/PageRevealEvent)-Ereignis
- [`pageswap`](/de/docs/Web/API/PageSwapEvent)-Ereignis
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
  - [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
  - [Web Animations API](/de/docs/Web/API/Web_Animations_API)

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
