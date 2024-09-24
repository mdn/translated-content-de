---
title: CSS-Animationen
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 6172456ad66f9f41ad1a3a3a6dfe642d91f977be
---

{{CSSRef}}

Das **CSS-Animationsmodul** ermöglicht es Ihnen, die Werte von CSS-Eigenschaften, wie background-position und transform, mithilfe von Keyframes über die Zeit zu animieren. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll. Sie können die Eigenschaften im Animationsmodul verwenden, um die Dauer, die Anzahl der Wiederholungen, den verzögerten Start und andere Aspekte einer Animation zu steuern.

### Animationen in Aktion

Um die Animation im folgenden Kasten zu sehen, klicken Sie auf das Kontrollkästchen "Animation abspielen" oder bewegen Sie den Cursor über den Kasten. Wenn die Animation aktiv ist, ändert sich die Wolke oben in der Form, Schneeflocken fallen und das Schneeniveau unten steigt. Um die Animation zu pausieren, deaktivieren Sie das Kontrollkästchen oder bewegen Sie den Cursor aus dem Kasten heraus.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Diese Beispielanimation verwendet {{cssxref("animation-iteration-count")}}, damit die Flocken wiederholt fallen, {{cssxref("animation-direction")}}, um die Wolke hin und her zu bewegen, {{cssxref("animation-fill-mode")}}, um das Schneeniveau als Reaktion auf die Wolkenbewegung zu erhöhen, und {{cssxref("animation-play-state")}}, um die Animation zu pausieren.

Um den Code für diese Animation zu sehen, [sehen Sie den Quelltext auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/animation.html).

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
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### At-Rules

- {{cssxref("@keyframes")}}

### Ereignisse

Alle Animationen, auch diejenigen mit 0 Sekunden Dauer, lösen Animationsereignisse aus.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Schnittstellen

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Anleitungen

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Tutorial zur Erstellung von Animationen mit CSS. Dieser Artikel beschreibt die animationsbezogenen CSS-Eigenschaften und das At-Rules und wie sie miteinander interagieren.
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Häufige Animationsanforderungen, die mit wenigen Zeilen JavaScript gelöst werden können.

## Verwandte Konzepte

- {{cssxref("will-change")}} CSS-Eigenschaft
- [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query
- {{glossary("Bezier-Kurve")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- Eigenschaften im [Übergänge](/de/docs/Web/CSS/CSS_transitions) CSS-Modul, um Animationen basierend auf Benutzeraktionen auszulösen
- Das {{htmlelement("canvas")}} HTML-Element zusammen mit der [Canvas-API](/de/docs/Web/API/Canvas_API) und der [WebGL-API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen
- Die {{domxref("SVGAnimationElement")}}-Schnittstelle für alle animierten Element-Schnittstellen, einschließlich {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} und {{domxref("SVGAnimateTransformElement")}}
