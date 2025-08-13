---
title: CSS-Animationen
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das **CSS-Animationsmodul** ermöglicht es Ihnen, die Werte von CSS-Eigenschaften wie `background-position` und `transform` im Laufe der Zeit mithilfe von Keyframes zu animieren. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll. Sie können die Eigenschaften im Animationsmodul verwenden, um die Dauer, die Anzahl der Wiederholungen, den verzögerten Start und andere Aspekte einer Animation zu steuern.

### Animationen in Aktion

Um die Animation im folgenden Feld anzuzeigen, klicken Sie auf das Kontrollkästchen 'Animation abspielen' oder bewegen Sie den Cursor über das Feld. Wenn die Animation aktiv ist, verändert die Wolke oben ihre Form, Schneeflocken fallen und der Schneepegel am Boden steigt. Um die Animation zu pausieren, deaktivieren Sie das Kontrollkästchen oder bewegen Sie Ihren Cursor weg vom Feld.

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
  /* Snowflakes are made with CSS linear gradients (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) */
  background-image:
    linear-gradient(180deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* Using tree structural pseudo-classes to create randomness - https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type */
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

Diese Beispielanimation verwendet {{cssxref("animation-iteration-count")}}, um die Flocken wiederholt fallen zu lassen, {{cssxref("animation-direction")}}, um die Wolke hin und her zu bewegen, {{cssxref("animation-fill-mode")}}, um den Schneepegel als Reaktion auf die Wolkenbewegung anzuheben, und {{cssxref("animation-play-state")}}, um die Animation anzuhalten.

Klicken Sie auf "Abspielen" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("animation")}} Kurzform
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

Das CSS-Animationsmodul Level 2 führt auch die Eigenschaften `animation-trigger`, `animation-trigger-exit-range`, `animation-trigger-exit-range-end`, `animation-trigger-exit-range-start`, `animation-trigger-range`, `animation-trigger-range-end`, `animation-trigger-range-start`, `animation-trigger-timeline` und `animation-trigger-type` ein. Derzeit unterstützt kein Browser diese Funktionen.

### At-Rules

- {{cssxref("@keyframes")}}

### Ereignisse

Alle Animationen, auch solche mit einer Dauer von 0 Sekunden, lösen Animationsereignisse aus.

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

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Anleitung zur Erstellung von Animationen mit CSS. Dieser Artikel beschreibt die mit Animationen verbundenen CSS-Eigenschaften und die At-Regel sowie deren Zusammenspiel.
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Häufige Animationsanforderungen, die mit wenigen Zeilen JavaScript gelöst werden können.

## Verwandte Konzepte

- {{cssxref("will-change")}} CSS-Eigenschaft
- [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query
- {{Glossary("Bezier_curve", "Bezierkurve")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Modul [CSS scroll-abhängige Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).
- Eigenschaften im [Transitions](/de/docs/Web/CSS/CSS_transitions) CSS-Modul zur Auslösung von Animationen basierend auf Benutzeraktionen.
- Die {{cssxref("interpolate-size")}} Eigenschaft und die {{cssxref("calc-size()")}} Funktion zur Aktivierung von Animationen zu und von {{Glossary("Intrinsic_Size", "inneren Größenwerten")}}.
- Das `<canvas>` HTML-Element zusammen mit der [canvas API](/de/docs/Web/API/Canvas_API) und [WebGL API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen.
- Die [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) Schnittstelle für alle animationbezogenen Element-Schnittstellen, einschließlich [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement), und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement).
