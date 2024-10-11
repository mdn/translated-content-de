---
title: CSS-Animationen
slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}

Das Modul **CSS-Animationen** ermöglicht es Ihnen, die Werte von CSS-Eigenschaften wie `background-position` und `transform` über die Zeit mithilfe von `Keyframes` zu animieren. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz angezeigt werden soll. Sie können die Eigenschaften im Animationsmodul verwenden, um die Dauer, die Anzahl der Wiederholungen, den verzögerten Start und andere Aspekte einer Animation zu steuern.

### Animationen in Aktion

Um die Animation im unten stehenden Kasten zu sehen, klicken Sie auf das Kontrollkästchen 'Play the animation' oder bewegen Sie den Cursor über den Kasten. Wenn die Animation aktiv ist, verändert die Wolke oben ihre Form, Schneeflocken fallen und der Schneepegel am Boden steigt. Um die Animation zu pausieren, deaktivieren Sie das Kontrollkästchen oder entfernen Sie den Cursor vom Kasten.

{{EmbedGHLiveSample("css-examples/modules/animation.html", '100%', 650)}}

Diese Beispielanimation verwendet {{cssxref("animation-iteration-count")}}, um die Flocken wiederholt fallen zu lassen, {{cssxref("animation-direction")}}, um die Wolke hin- und her zu bewegen, {{cssxref("animation-fill-mode")}}, um den Schneepegel als Reaktion auf die Wolkenbewegung anzuheben, und {{cssxref("animation-play-state")}}, um die Animation zu pausieren.

Um den Code für diese Animation zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/animation.html).

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

Alle Animationen, selbst die mit einer Dauer von 0 Sekunden, lösen Animationsevents aus.

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

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Anleitung, wie man Animationen mit CSS erstellt. Dieser Artikel beschreibt die mit Animationen verbundenen CSS-Eigenschaften und die At-Regel und wie sie miteinander interagieren.
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Gemeinsame Animationsanforderungen, die mit wenigen Zeilen JavaScript gelöst werden können.

## Verwandte Konzepte

- {{cssxref("will-change")}} CSS-Eigenschaft
- [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Query
- {{Glossary("Bezier_curve", "Bezier-Kurve")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- Eigenschaften im [Transitions](/de/docs/Web/CSS/CSS_transitions) CSS-Modul, um Animationen basierend auf Benutzeraktionen auszulösen
- Die {{cssxref("interpolate-size")}} Eigenschaft und {{cssxref("calc-size()")}} Funktion, um Animationen zu und von {{Glossary("Intrinsic_Size", "intrinsic size values")}} zu ermöglichen.
- Das {{htmlelement("canvas")}} HTML-Element zusammen mit der [Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL API](/de/docs/Web/API/WebGL_API) zum Zeichnen von Grafiken und Animationen
- Die [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) Schnittstelle für alle animationbezogenen Element-Schnittstellen, einschließlich [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement), [`SVGSetElement`](/de/docs/Web/API/SVGSetElement), [`SVGAnimateColorElement`](/de/docs/Web/API/SVGAnimateColorElement), [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement) und [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)
