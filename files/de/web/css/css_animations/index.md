---
title: CSS-Animationen
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 6172456ad66f9f41ad1a3a3a6dfe642d91f977be
---

{{CSSRef}}

Das **CSS-Animations**-Modul ermöglicht es Ihnen, die Werte von CSS-Eigenschaften wie `background-position` und `transform` über die Zeit hinweg mittels Keyframes zu animieren. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll. Sie können die Eigenschaften im Animationsmodul verwenden, um die Dauer, Anzahl der Wiederholungen, verzögerter Start und andere Aspekte einer Animation zu steuern.

### Animationen in Aktion

Um die Animation im folgenden Kasten zu sehen, klicken Sie auf das Kontrollkästchen "Animation abspielen" oder bewegen Sie den Cursor über den Kasten. Während die Animation aktiv ist, ändert die Wolke oben ihre Form, Schneeflocken fallen und das Schnee-Niveau unten steigt an. Um die Animation zu pausieren, deaktivieren Sie das Kontrollkästchen oder bewegen Sie Ihren Cursor aus dem Kasten.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Diese Beispielsanimation verwendet {{cssxref("animation-iteration-count")}}, um die Flocken wiederholt fallen zu lassen, {{cssxref("animation-direction")}}, um die Wolke hin und her zu bewegen, {{cssxref("animation-fill-mode")}}, um das Schnee-Niveau als Reaktion auf die Wolkenbewegung anzuheben, und {{cssxref("animation-play-state")}}, um die Animation zu pausieren.

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

### At-Regeln

- {{cssxref("@keyframes")}}

### Ereignisse

Alle Animationen, selbst die mit einer Dauer von 0 Sekunden, lösen Animationsereignisse aus.

- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)

### Schnittstellen

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)
- [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)

## Leitfäden

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Tutorial zur Erstellung von Animationen mithilfe von CSS. Dieser Artikel beschreibt die animationsbezogenen CSS-Eigenschaften und -At-Regeln und wie sie miteinander interagieren.
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Häufige Animationsanforderungen, die mit wenigen Zeilen JavaScript gelöst werden können.

## Verwandte Konzepte

- {{cssxref("will-change")}} CSS-Eigenschaft
- [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Query
- [Bezier-Kurve](/de/docs/Glossary/Bezier_curve) Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- Eigenschaften im [transitions](/de/docs/Web/CSS/CSS_transitions) CSS-Modul, um Animationen basierend auf Benutzeraktionen auszulösen
- Das {{htmlelement("canvas")}} HTML-Element zusammen mit der [Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL API](/de/docs/Web/API/WebGL_API), um Grafiken und Animationen zu zeichnen
- Die [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) Schnittstelle für alle animationsbezogenen Element-Schnittstellen, einschließlich [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement), und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)
