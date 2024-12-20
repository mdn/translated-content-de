---
title: CSS View Transitions
slug: Web/CSS/CSS_view_transitions
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{CSSRef}}

Das Modul **CSS View Transitions** definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transition_API), die es Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und zwischen Dokumenten zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudo-Elemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-name")}} {{experimental_inline}}

> [!NOTE]
> Dieses Modul definiert auch die Eigenschaft `view-transition-class`, aber sie wird derzeit in keinem Browser unterstützt.

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
> Dieses Modul definiert auch die Pseudo-Klassen `:active-view-transition` und `:active-view-transition-type()`, aber sie werden derzeit in keinem Browser unterstützt.

### Schnittstellen

- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)
  - Methode [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition)
  - [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)
  - [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)
  - [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)
- Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)

## Leitfäden

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)

  - : Erklärt, wie Sie Ansichtsübergänge erstellen und Übergangsanimationen anpassen, einschließlich der Manipulation aktiver Ansichtsübergänge.

## Verwandte Konzepte

- [`pagereveal`](/de/docs/Web/API/PageRevealEvent) Ereignis
- [`pageswap`](/de/docs/Web/API/PageSwapEvent) Ereignis
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul

  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
  - [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
  - [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul

  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
