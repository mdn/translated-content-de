---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht das Synchronisieren und Timing-Changes für die Präsentation einer Webseite, d.h. die Animation von DOM-Elementen. Dies geschieht durch die Kombination von zwei Modellen: dem Timing-Modell und dem Animations-Modell.

## Konzepte und Verwendung

Die Web Animations API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen auf DOM-Elementen zu beschreiben. Um mehr Informationen über die Konzepte hinter der API und deren Verwendung zu erhalten, lesen Sie [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Web Animations Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Zeitleiste für einen Animationsknoten oder -quelle. Kann ein Objekt verwenden, das mit dem [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) Konstruktor erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sets von animierbaren Eigenschaften und Werten, sogenannte **Keyframes**, und deren Timing-Optionen. Diese können dann mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor abgespielt werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Stellt die Zeitleiste der Animation dar. Diese Schnittstelle existiert, um Zeitleistenmerkmale zu definieren (vererbt durch [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftige Zeitleistenobjekte) und wird nicht direkt von Entwicklern aufgerufen.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des [CSS Animations](/de/docs/Web/CSS/CSS_animations) Moduls, das den Animationsnamen und die verstrichene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Stellt Animationszeitleisten dar, einschließlich der Standarddokumentzeitleiste (zugänglich über die [`Document.timeline`](/de/docs/Web/API/Document/timeline) Eigenschaft).

## Erweiterungen zu anderen Schnittstellen

Die Web Animations API fügt [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) Funktionen hinzu.

### Erweiterungen der `Document` Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline` Objekt, das die Standarddokumentzeitleiste darstellt.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen der `Element` Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Kurzschlussmethode zum Erstellen und Abspielen einer Animation auf einem Element. Es gibt die erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit ein Element beeinflussen oder dies in Zukunft geplant haben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Kurzschreibweise
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animations](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS-Scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) Modul
