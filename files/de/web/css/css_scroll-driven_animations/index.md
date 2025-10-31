---
title: CSS scroll-gesteuerte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS-Modul für scroll-gesteuerte Animationen** bietet Funktionen, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste anstelle der standardmäßigen zeitbasierten Dokumentenzeitleiste zu animieren. Das bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt nur durch den Zeitablauf.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scrollfortschritts-Zeitleiste_: Sie steuern diese Zeitleiste, indem Sie ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück scrollen. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende.
- _Ansichtsfortschritts-Zeitleiste_: Sie steuern diese Zeitleiste basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird als Prozentsatz des Fortschritts verfolgt — standardmäßig befindet sich die Zeitleiste bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, verläuft die Animation entlang dieser Zeitleiste anstelle der standardmäßigen zeitbasierten Zeitleiste.

Es ist möglich, die effektive Platzierung der Animation entlang der Scrollfortschritts- und Ansichtsfortschritts-Zeitleisten zu ändern, d.h. Sie können die Position definieren, an der die Animation startet und endet. Dies kann auf verschiedene Weise erfolgen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Position des Start- und Endpunktes der Animation entlang der Zeitleiste anzupassen.
- Ansichtsfortschritts-Zeitleisten können einen Start- und/oder End-Einzug (oder Auszug) erhalten, um die Position des Scrollports anzupassen, in dem das Subjektelement als sichtbar erachtet wird. Anders ausgedrückt: Dies ermöglicht es Ihnen, Start- und/oder End-Einzugswerte (oder Auszugswerte) festzulegen, die die Position der Zeitleiste selbst versetzen.

## Scroll-gesteuerte Animationen in Aktion

Sie finden mehrere Werkzeuge und Demos, die scroll-gesteuerte Animationen in Aktion zeigen, unter [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Legen Sie die Zeitleiste fest, die den Fortschritt einer Animation steuert, und legen Sie deren Anhangsbereich entlang dieser Zeitleiste fest:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scrollfortschritts-Zeitleisten_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Ansichtsfortschritts-Zeitleisten_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Modifizieren Sie den Zeitleistenbereich:

- {{cssxref("timeline-scope")}}

### At-Regeln und Deskriptoren

CSS scroll-gesteuerte Animationen ermöglicht es, `<timeline-range-name>`s in {{cssxref("@keyframes")}}-Blöcke einzuschließen, um Keyframes an spezifischen Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}}-Eigenschaft für die Definition von _anonymen Scrollfortschritts-Zeitleisten_ und _anonymen Ansichtsfortschritts-Zeitleisten_ (d.h. implizit vom Browser definiert, anstatt explizit benannt und definiert unter Verwendung der `scroll-timeline-*` und `view-timeline-*` Eigenschaften):

- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)

### Schnittstellen

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
