---
title: CSS-Animationen
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 6172456ad66f9f41ad1a3a3a6dfe642d91f977be
---

{{CSSRef}}

Das **CSS-Animationsmodul** ermöglicht es Ihnen, die Werte von CSS-Eigenschaften wie `background-position` und `transform` im Laufe der Zeit mithilfe von Keyframes zu animieren. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll. Sie können die Eigenschaften im Animationsmodul verwenden, um die Dauer, die Anzahl der Wiederholungen, den verzögerten Start und andere Aspekte einer Animation zu steuern.

### Animationen in Aktion

Um die Animation im unten stehenden Feld zu betrachten, klicken Sie auf das Kontrollkästchen "Play the animation" oder bewegen Sie den Cursor über das Feld. Wenn die Animation aktiv ist, ändert sich die Wolke oben, Schneeflocken fallen und der Schneehöhe unten steigt an. Um die Animation zu pausieren, deaktivieren Sie das Kontrollkästchen oder bewegen Sie Ihren Cursor aus dem Feld heraus.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Diese Beispielanimation verwendet {{cssxref("animation-iteration-count")}}, um die Flocken wiederholt fallen zu lassen, {{cssxref("animation-direction")}}, um die Wolke hin und her zu bewegen, {{cssxref("animation-fill-mode")}}, um den Anstieg des Schneeniveaus in Reaktion auf die Wolkenbewegung zu gewährleisten, und {{cssxref("animation-play-state")}}, um die Animation zu pausieren.

Um den Code für diese Animation zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/animation.html).

## Referenz

### Eigenschaften

- {{cssxref("animation")}} Kurzschreibweise
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

### At-Regeln

- {{cssxref("@keyframes")}}

### Ereignisse

Alle Animationen, auch solche mit einer Dauer von 0 Sekunden, lösen Animationsereignisse aus.

- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)

### Schnittstellen

- [Webanimations-API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)
- [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)

## Leitfäden

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Tutorial zur Erstellung von Animationen mit CSS. Dieser Artikel beschreibt die animierungsbezogenen CSS-Eigenschaften und At-Regeln und wie sie miteinander interagieren.
- [Verwendung der Webanimations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Häufige Animationsanforderungen, die mit wenigen Zeilen JavaScript gelöst werden können.

## Verwandte Konzepte

- {{cssxref("will-change")}} CSS-Eigenschaft
- [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienabfrage
- [Bezierkurve](/de/docs/Glossary/Bezier_curve) Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- Eigenschaften im [Transitions-](/de/docs/Web/CSS/CSS_transitions) CSS-Modul, um Animationen basierend auf Benutzeraktionen auszulösen
- Das {{htmlelement("canvas")}} HTML-Element zusammen mit der [Canvas-API](/de/docs/Web/API/Canvas_API) und der [WebGL-API](/de/docs/Web/API/WebGL_API) zum Zeichnen von Grafiken und Animationen
- Die [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Schnittstelle für alle animationsbezogenen Element-Schnittstellen, einschließlich [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement) und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)
