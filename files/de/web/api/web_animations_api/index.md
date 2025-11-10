---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht das Synchronisieren und Timing von Änderungen in der Präsentation einer Webseite, d.h. Animation von DOM-Elementen. Dies erfolgt durch die Kombination zweier Modelle: dem Timing-Modell und dem Animationsmodell.

## Konzepte und Verwendung

Die Web Animations API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen an DOM-Elementen zu beschreiben. Um mehr Informationen über die Konzepte hinter der API und zur Verwendung zu erhalten, lesen Sie [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Web Animations Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Zeitleiste für einen Animationsknoten oder eine Quelle. Kann ein Objekt verwenden, das mit dem [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) Konstruktor erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sets animierbarer Eigenschaften und Werte, genannt **Keyframes**, sowie deren Timing-Optionen. Diese können dann mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor abgespielt werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Repräsentiert die Zeitleiste der Animation. Diese Schnittstelle existiert, um Zeitleistenfunktionen zu definieren (vererbt von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitleistenobjekten) und wird von Entwicklern selbst nicht direkt aufgerufen.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des [CSS Animations](/de/docs/Web/CSS/Guides/Animations) Moduls, das den Animationsnamen und die vergangene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Repräsentiert Animationszeitleisten, einschließlich der Standard-Dokumentzeitleiste (abgerufen über die [`Document.timeline`](/de/docs/Web/API/Document/timeline) Eigenschaft).

## Erweiterungen anderer Schnittstellen

Die Web Animations API fügt Funktionen zu [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) hinzu.

### Erweiterungen der `Document` Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline` Objekt, das die Standard-Dokumentzeitleiste repräsentiert.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen der `Element` Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode zum Erstellen und Abspielen einer Animation auf einem Element. Sie gibt die erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit ein Element beeinflussen oder dies in Zukunft tun werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Kurzschreibweise
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
