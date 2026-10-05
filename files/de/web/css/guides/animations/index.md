---
title: CSS-Animationen
short-title: Animations
slug: Web/CSS/Guides/Animations
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Mit dem Modul **CSS-Animationen** können Sie die Werte von CSS-Eigenschaften wie `background-position` und `transform` mithilfe von Keyframes im Zeitverlauf animieren. Jeder Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll. Mit den Eigenschaften des Animationsmoduls können Sie die Dauer, die Anzahl der Wiederholungen, einen verzögerten Start und weitere Aspekte einer Animation steuern.

## Animationen in Aktion

Um die Animation im folgenden Kasten anzusehen, aktivieren Sie das Kontrollkästchen „Play the animation“ oder bewegen Sie den Mauszeiger über den Kasten. Während die Animation läuft, verändert die Wolke oben ihre Form, Schneeflocken fallen herab und die Schneehöhe am unteren Rand steigt. Um die Animation anzuhalten, deaktivieren Sie das Kontrollkästchen oder bewegen Sie den Mauszeiger aus dem Kasten.

```html hidden live-sample___animation
<!-- See aria-label: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label -->
<input
  type="checkbox"
  id="animate"
  aria-label="Toggle the play state of the animation" />
<label for="animate">the animation</label>
<div class="root">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div class="cloud"></div>
  <div class="ground"></div>
</div>
```

```css hidden live-sample___animation
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 0s infinite backwards;
  /* Snowflakes are made with CSS linear gradients (https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Images/Using_gradients) */
  background-image:
    linear-gradient(180deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* Using tree structural pseudo-classes to create randomness - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:nth-of-type */
  height: 30px;
  width: 30px;
  transform-origin: right -30px;
}
i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  transform-origin: left 30px;
}
i:nth-of-type(4n + 2) {
  height: 10px;
  width: 10px;
  transform-origin: -30px 0;
}
i:nth-of-type(4n + 3) {
  height: 40px;
  width: 40px;
  transform-origin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duration: 5.3s;
  animation-iteration-count: 12;
  transform-origin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  animation-duration: 3.1s;
  animation-iteration-count: 20;
  transform-origin: 10px -20px;
}
i:nth-of-type(4n + 2) {
  animation-duration: 1.7s;
  animation-iteration-count: 35;
  transform-origin: right -20px;
}
i:nth-of-type(3n) {
  animation-delay: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-delay: 1.5s;
}
i:nth-of-type(3n + 2) {
  animation-delay: 3.4s;
}
i:nth-of-type(5n) {
  animation-timing-function: ease-in-out;
}
i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  animation-timing-function: linear;
}
i:nth-of-type(11n) {
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  opacity: 0.5;
}
i:nth-of-type(7n + 2) {
  opacity: 0.3;
}
i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  opacity: 0.6;
  animation-timing-function: ease-in;
  transform-origin: left 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}

.root {
  height: 580px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground,
.cloud {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
}
.cloud {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 0 0 90px 33% / 0 0 45px 50px;
  box-shadow:
    5px 15px 15px white,
    -5px 15px 15px white,
    0 20px 20px rgb(125 125 125 / 0.5);
  animation:
    clouds ease 5s alternate infinite 0.2s,
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, white 97%, 99%, #bbbbbb 100%);
  background-position: center 580px;
  animation: snowfall linear 300s forwards;
  border: 1px solid grey;
  /* Put the ground into a 3D rendering context (because the snow flakes are in a 3d rendering context) */
  transform: translate3d(0, 0, 0);
}

@keyframes snowfall {
  from {
    background-position: center 580px;
  }
  to {
    background-position: center 280px;
  }
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px;
  }
}

@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9);
  }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1);
  }
}

/* By default, the animations are paused. */
i,
div[class] {
  animation-play-state: paused;
}
/* When the div is hovered, the animation plays. Also,
when the input is checked, the animation coming after the checked checkbox plays */
div:hover *,
input:checked ~ div * {
  animation-play-state: running;
}

/* Change the content of the label that comes right after the input. Included aria-label on the label to improve accessibility. */
input + label::before {
  content: "Play ";
}
input:checked + label::before {
  content: "Pause ";
}
```

{{EmbedLiveSample("animation", "", "610px")}}

Diese Beispielanimation verwendet {{cssxref("animation-iteration-count")}}, damit die Schneeflocken wiederholt fallen, {{cssxref("animation-direction")}}, damit sich die Wolke hin und her bewegt, {{cssxref("animation-fill-mode")}}, damit die Schneehöhe entsprechend der Wolkenbewegung steigt, und {{cssxref("animation-play-state")}}, um die Animation anzuhalten.

Klicken Sie im obigen Beispiel auf „Play“, um den Code für die Animation im MDN Playground anzusehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("animation")}}-Kurzschreibweise
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("animation-timing-function")}}

### At-Regeln und Deskriptoren

- {{cssxref("@keyframes")}}
- [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)

### Ereignisse

Alle Animationen lösen Animationsereignisse aus, auch solche mit einer Dauer von 0 Sekunden.

- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)

### Schnittstellen

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`CSSAnimation`](/de/docs/Web/API/CSSAnimation)
- [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)
- [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)

## Leitfäden

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
  - : Schritt-für-Schritt-Anleitung zum Erstellen von Animationen mit CSS. Dieser Artikel beschreibt die animationsbezogenen CSS-Eigenschaften und die At-Regel sowie deren Zusammenspiel.
- [Animierbare CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Animations/Animatable_properties)
  - : Überblick darüber, wie verschiedene CSS-Eigenschaften animiert werden können, einschließlich ihrer Animationstypen und Interpolationsmethoden.
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Häufige Anforderungen an Animationen, die sich mit wenigen Zeilen JavaScript umsetzen lassen.

## Verwandte Konzepte

- Modul [CSS animation triggers](/de/docs/Web/CSS/Guides/Animation_triggers)
  - {{cssxref("animation-trigger")}}
  - {{cssxref("timeline-trigger")}}-Kurzschreibweise
  - {{cssxref("timeline-trigger-activation-range")}}-Kurzschreibweise
    - {{cssxref("timeline-trigger-activation-range-end")}}
    - {{cssxref("timeline-trigger-activation-range-start")}}
  - {{cssxref("timeline-trigger-active-range")}}-Kurzschreibweise
    - {{cssxref("timeline-trigger-active-range-end")}}
    - {{cssxref("timeline-trigger-active-range-start")}}
  - {{cssxref("timeline-trigger-name")}}
  - {{cssxref("timeline-trigger-source")}}
  - {{cssxref("trigger-scope")}}
- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
  - {{cssxref("animation-range")}}-Kurzschreibweise
    - {{cssxref("animation-range-end")}}
    - {{cssxref("animation-range-start")}}
  - {{cssxref("scroll-timeline")}}-Kurzschreibweise
    - {{cssxref("scroll-timeline-axis")}}
    - {{cssxref("scroll-timeline-name")}}
  - {{cssxref("timeline-scope")}}
  - {{cssxref("view-timeline")}}-Kurzschreibweise
    - {{cssxref("view-timeline-axis")}}
    - {{cssxref("view-timeline-inset")}}
    - {{cssxref("view-timeline-name")}}
- CSS-Eigenschaft {{cssxref("will-change")}}
- Datentyp {{cssxref("easing-function")}}
- Medienabfrage [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- Glossarbegriff {{Glossary("Bezier_curve", "Bézierkurve")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul [CSS animation triggers](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS transitions](/de/docs/Web/CSS/Guides/Transitions)
- Die Eigenschaft {{cssxref("interpolate-size")}} und die Funktion {{cssxref("calc-size()")}}, mit denen Animationen von und zu {{Glossary("Intrinsic_Size", "intrinsischen Größenwerten")}} ermöglicht werden.
- Das HTML-Element {{htmlelement("canvas")}} zusammen mit der [Canvas API](/de/docs/Web/API/Canvas_API) und der [WebGL API](/de/docs/Web/API/WebGL_API) zum Zeichnen von Grafiken und Animationen.
- Die Schnittstelle [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) für alle animationsbezogenen Elementschnittstellen, einschließlich [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement) und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement).
