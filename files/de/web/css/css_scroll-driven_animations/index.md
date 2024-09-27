---
title: CSS scroll-gesteuerte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{CSSRef}}

Das **CSS scroll-gesteuerte Animationen**-Modul bietet Funktionalität, die auf dem [CSS Animations-Modul](/de/docs/Web/CSS/CSS_animations) und dem [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbaut. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste zu animieren, anstatt der standardmäßigen zeitbasierten Dokumentzeitleiste. Dies bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt nur durch den Verlauf der Zeit.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scroll-Fortschrittszeitleiste_: Sie bewegen diese Zeitleiste, indem Sie ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück scrollen. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0% am Anfang und 100% am Ende.
- _Sichtbarkeits-Fortschrittszeitleiste_: Sie bewegen diese Zeitleiste basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjekts im Scroller wird als Prozentsatz des Fortschritts verfolgt — standardmäßig befindet sich die Zeitleiste bei 0%, wenn das Subjekt zum ersten Mal an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, schreitet die Animation entlang dieser Zeitleiste fort, anstatt der standardmäßigen zeitbasierten Zeitleiste zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der Scroll-Fortschritts- und Sichtbarkeits-Fortschrittszeitleisten anzupassen, d. h. Sie können die Position definieren, an der die Animation startet und endet. Dies kann auf verschiedene Weise erfolgen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Position des Start- und Endpunktes der Animation entlang der Zeitleiste anzupassen.
- Sichtbarkeits-Fortschrittszeitleisten können einen Start- und/oder End-Inset (oder Outset) aufweisen, der auf sie angewendet wird, um die Position des Scrollports anzupassen (siehe [Scroll-Container](/de/docs/Glossary/Scroll_container) für weitere Details), in dem das Subjektelement als sichtbar angesehen wird. Anders ausgedrückt, erlaubt dies Ihnen, Start- und/oder End-Inset- (oder Outset-) Werte zu spezifizieren, die die Position der Zeitleiste selbst versetzen.

## Scroll-gesteuerte Animationen in Aktion

Sie finden verschiedene Werkzeuge und Demos, die scroll-gesteuerte Animationen in Aktion zeigen, unter [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Setzen Sie die Zeitleiste, die den Fortschritt einer Animation steuert, und bestimmen Sie ihren Anwendungsbereich entlang dieser Zeitleiste:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scroll-Fortschrittszeitleisten_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Sichtbarkeits-Fortschrittszeitleisten_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Ändern Sie den Zeitleistenbereich:

- {{cssxref("timeline-scope")}}

### At-Rules

CSS scroll-gesteuerte Animationen fügen die Möglichkeit hinzu, `<timeline-range-name>`s in {{cssxref("@keyframes")}}-Blöcken einzuschließen, um Keyframes an spezifischen Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}}-Eigenschaft zur Definition _anonymer Scroll-Fortschrittszeitleisten_ und _anonymer Sichtbarkeits-Fortschrittszeitleisten_ (d. h., implizit vom Browser definiert, anstatt explizit benannt und mithilfe der `scroll-timeline-*` und `view-timeline-*` Eigenschaften definiert):

- [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/de/docs/Web/CSS/animation-timeline/view)

### JavaScript-Funktionen

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Animieren von Elementen beim Scrollen mit scroll-gesteuerten Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
