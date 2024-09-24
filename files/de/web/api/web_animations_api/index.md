---
title: Web-Animations-API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: b9d7f686dfe5b96fe8fc46ffc70c6ee5afae07f0
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web-Animations-API** ermöglicht das Synchronisieren und Timing von Änderungen an der Darstellung einer Webseite, d.h. der Animation von DOM-Elementen. Sie tut dies, indem sie zwei Modelle kombiniert: das Timing-Modell und das Animationsmodell.

## Konzepte und Nutzung

Die Web-Animations-API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen auf DOM-Elementen zu beschreiben. Um mehr Informationen über die Konzepte hinter der API und deren Anwendung zu erhalten, lesen Sie [Verwendung der Web-Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Schnittstellen der Web-Animations

- {{domxref("Animation")}}
  - : Bietet Wiedergabesteuerungen und eine Timeline für einen Animationsknoten oder -quelle. Kann ein Objekt annehmen, das mit dem {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}-Konstruktor erstellt wurde.
- {{domxref("KeyframeEffect")}}
  - : Beschreibt Sätze von animierbaren Eigenschaften und Werten, sogenannte **Keyframes**, und deren Timing-Optionen. Diese können dann mit dem {{domxref("Animation.Animation", "Animation()")}}-Konstruktor abgespielt werden.
- {{domxref("AnimationTimeline")}}
  - : Repräsentiert die Timeline der Animation. Diese Schnittstelle existiert, um Timeline-Funktionen (die von {{domxref("DocumentTimeline")}} und zukünftigen Timeline-Objekten geerbt werden) zu definieren und wird nicht direkt von Entwicklern verwendet.
- {{domxref("AnimationEvent")}}
  - : Teil des [CSS-Animations](/de/docs/Web/CSS/CSS_animations)-Moduls, das den Animationsnamen und die vergangene Zeit erfasst.
- {{domxref("DocumentTimeline")}}
  - : Repräsentiert Animationstimeline, einschließlich der Standarddokument-Timeline (zugänglich über die Eigenschaft {{domxref("Document.timeline")}}).

## Erweiterungen für andere Schnittstellen

Die Web-Animations-API fügt Funktionen zu {{domxref("document")}} und {{domxref("element")}} hinzu.

### Erweiterungen für die `Document`-Schnittstelle

- {{domxref("document.timeline")}}
  - : Das `DocumentTimeline`-Objekt, das die Standarddokument-Timeline repräsentiert.
- {{domxref("document.getAnimations()")}}
  - : Gibt ein Array von {{domxref("Animation")}}-Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen für die `Element`-Schnittstelle

- {{domxref("Element.animate()")}}
  - : Eine Abkürzungsmethode zum Erstellen und Abspielen einer Animation auf einem Element. Sie gibt die erstellte {{domxref("Animation")}}-Objektinstanz zurück.
- {{domxref("Element.getAnimations()")}}
  - : Gibt ein Array von {{domxref("Animation")}}-Objekten zurück, die derzeit ein Element beeinflussen oder dies in Zukunft tun sollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Kurzhand-Eigenschaft
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Verwendung der Web-Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS-Animations](/de/docs/Web/CSS/CSS_animations)-Modul
- [CSS-Scroll-gestützte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)-Modul
