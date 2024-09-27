---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: b9d7f686dfe5b96fe8fc46ffc70c6ee5afae07f0
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht die Synchronisierung und zeitliche Abstimmung von Änderungen an der Darstellung einer Webseite, d.h. die Animation von DOM-Elementen. Sie tut dies, indem sie zwei Modelle kombiniert: das Timing-Modell und das Animationsmodell.

## Konzepte und Nutzung

Die Web Animations API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen auf DOM-Elementen zu beschreiben. Um mehr über die Konzepte hinter der API und deren Nutzung zu erfahren, lesen Sie [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Web Animations Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Zeitachse für einen Animationsknoten oder eine Quelle. Kann ein Objekt verwenden, das mit dem Konstruktor [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sets von animierbaren Eigenschaften und Werten, die als **Keyframes** bezeichnet werden, sowie deren zeitliche Optionen. Diese können dann mit dem Konstruktor [`Animation()`](/de/docs/Web/API/Animation/Animation) abgespielt werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Stellt die Zeitachse einer Animation dar. Diese Schnittstelle existiert, um Zeitachsenfunktionen zu definieren (die von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitachsenobjekten geerbt werden) und wird von Entwicklern nicht direkt aufgerufen.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des [CSS Animations](/de/docs/Web/CSS/CSS_animations) Moduls, das den Animationsnamen und die verstrichene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Stellt Animationszeitleisten dar, einschließlich der Standarddokumentzeitleiste (zugänglich über die Eigenschaft [`Document.timeline`](/de/docs/Web/API/Document/timeline)).

## Erweiterungen für andere Schnittstellen

Die Web Animations API fügt dem [`document`](/de/docs/Web/API/Document) und dem [`element`](/de/docs/Web/API/Element) zusätzliche Funktionen hinzu.

### Erweiterungen der `Document` Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline` Objekt, das die Standarddokumentzeitleiste darstellt.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen der `Element` Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode zum Erstellen und Abspielen einer Animation auf einem Element. Sie gibt die erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit ein Element beeinflussen oder in Zukunft geplant sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Kurzschreibweise
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS Animations](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) Modul
