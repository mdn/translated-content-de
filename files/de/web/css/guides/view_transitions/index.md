---
title: CSS-Ansichtstransitionen
short-title: View transitions
slug: Web/CSS/Guides/View_transitions
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

Das **CSS-Ansichtstransitionen** Modul definiert das Verhalten der [View Transition API](/de/docs/Web/API/View_Transition_API), die es Entwicklern ermöglicht, animierte Übergänge zwischen verschiedenen Zuständen innerhalb eines Dokuments und zwischen Dokumenten zu erstellen. Dieses Modul definiert auch die CSS-Eigenschaften und Pseudo-Elemente zur Gestaltung dieser Übergänge.

## Referenz

### Eigenschaften

- {{cssxref("view-transition-class")}}
- {{cssxref("view-transition-name")}}
- {{cssxref("view-transition-scope")}}

### At-Regeln und Deskriptoren

- {{cssxref("@view-transition")}}
  - [`navigation`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#navigation) Deskriptor

### Selektoren und Pseudo-Elemente

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
  - [`ViewTransition.skipTransition()`](/de/docs/Web/API/ViewTransition/skipTransition) Methode
  - [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)
  - [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready)
  - [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)
  - [`ViewTransition.transitionRoot`](/de/docs/Web/API/ViewTransition/transitionRoot)
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Methode
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)
- [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) Methode
- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition)

## Leitfäden

- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
  - : Erklärt, wie man Ansichtstransitionen erstellt und Übergangsanimationen anpasst, einschließlich der Manipulation aktiver Ansichtstransitionen.
- [Verwendung von Ansichtstransitionstypen](/de/docs/Web/API/View_Transition_API/Using_types)
  - : Zeigt, wie man Typen in Kombination mit Ansichtstransitionen im selben Dokument und zwischen Dokumenten verwendet.
- [Verwendung von elementgebundenen Ansichtstransitionen](/de/docs/Web/API/View_Transition_API/Using_element-scoped)
  - : Behandelt, wie elementgebundene Ansichtstransitionen funktionieren und wie man sie verwendet.

## Verwandte Konzepte

- [`pagereveal`](/de/docs/Web/API/PageRevealEvent) Ereignis
- [`pageswap`](/de/docs/Web/API/PageSwapEvent) Ereignis
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
  - {{cssxref("animation")}}
  - {{cssxref("@keyframes")}}
  - [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
  - [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
  - [Web-Animationen API](/de/docs/Web/API/Web_Animations_API)

- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
  - {{cssxref("transform")}}
  - {{cssxref("transform-function")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
