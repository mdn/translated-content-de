---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: b9d7f686dfe5b96fe8fc46ffc70c6ee5afae07f0
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht es, Änderungen der Darstellung einer Webseite zu synchronisieren und zu timen, also die Animation von DOM-Elementen. Dies erfolgt durch die Kombination zweier Modelle: das Timing Model und das Animation Model.

## Konzepte und Nutzung

Die Web Animations API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen auf DOM-Elementen zu beschreiben. Um mehr Informationen über die Konzepte hinter der API und deren Nutzung zu erfahren, lesen Sie [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Web Animations Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Timeline für einen Animationsknoten oder eine Quelle. Kann ein Objekt aufnehmen, das mit dem [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) Konstruktor erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sätze von animierbaren Eigenschaften und Werten, genannt **Keyframes**, und deren Timingeinstellungen. Diese können dann mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor abgespielt werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Stellt die Zeitleiste der Animation dar. Diese Schnittstelle existiert, um Zeitleistenfunktionen zu definieren (übernommen von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitleistenobjekten) und wird nicht direkt von Entwicklern verwendet.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des [CSS Animations](/de/docs/Web/CSS/CSS_animations) Moduls, das den Animationsnamen und die verstrichene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Stellt Animationstimelines dar, einschließlich der Standard-Dokumenttimeline (zugänglich über die [`Document.timeline`](/de/docs/Web/API/Document/timeline) Eigenschaft).

## Erweiterungen zu anderen Schnittstellen

Die Web Animations API fügt Funktionen zu [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) hinzu.

### Erweiterungen der `Document` Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline` Objekt, das die Standard-Dokumenttimeline darstellt.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit auf die Elemente im `document` wirken.

### Erweiterungen der `Element` Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode zum Erstellen und Abspielen einer Animation auf einem Element. Es gibt die erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit ein Element beeinflussen oder dies in Zukunft tun werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Shorthand-Eigenschaft
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS animations](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) Modul
