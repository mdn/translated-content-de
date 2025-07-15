---
title: CSS scrollgesteuerte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS scrollgesteuerte Animationen** Modul bietet Funktionalitäten, die auf dem [CSS Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste anstelle der standardmäßigen zeitbasierten Dokumentenzeitleiste zu animieren. Das bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt nur durch den Zeitablauf.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scrollfortschritt-Zeitleiste_: Diese Zeitleiste wird fortgeschritten, indem ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück gescrollt wird. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.
- _Sichtfortschritt-Zeitleiste_: Diese Zeitleiste wird basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers fortgeschritten. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird als Prozentsatz des Fortschritts verfolgt — standardmäßig ist die Zeitleiste bei 0 %, wenn das Subjekt zuerst an einer Kante des Scrollers sichtbar ist, und bei 100 %, wenn es die gegenüberliegende Kante erreicht.

Wenn eine dieser zwei Zeitleisten auf ein animiertes Element angewendet wird, schreitet die Animation entlang dieser Zeitleiste vor, anstatt der standardmäßigen zeitbasierten Zeitleiste zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der Scroll-Fortschritts- und Sichtfortschritts-Zeitleisten anzupassen, d.h. Sie können die Position festlegen, an der die Animation beginnt und endet. Dies kann auf verschiedene Weisen geschehen:

- Start- und Endanimationsbereichswerte können auf die Animation angewendet werden, um die Position des Start- und Endpunkts der Animation entlang der Zeitleiste anzupassen.
- Sichtfortschrittszeitleisten können einen Start- und/oder End-Abstand (oder -Vorsprung) erhalten, um die Position des Scrollports anzupassen, in dem das Subjektelement als sichtbar angesehen wird (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für weitere Details). Anders ausgedrückt, können Sie Start- und/oder Endabstandswerte spezifizieren, die die Position der Zeitleiste selbst versetzen.

## Scrollgesteuerte Animationen in Aktion

Sie finden mehrere Tools und Demos, die scrollgesteuerte Animationen in Aktion zeigen, unter [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Legen Sie die Zeitleiste fest, die den Fortschritt einer Animation steuert, und setzen Sie ihren Befestigungsbereich entlang dieser Zeitleiste:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scrollfortschritt-Zeitleisten_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Sichtfortschritt-Zeitleisten_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Modifizieren Sie den Umfang der Zeitleiste:

- {{cssxref("timeline-scope")}}

### At-rules

CSS scrollgesteuerte Animationen fügt die Möglichkeit hinzu, `<timeline-range-name>`s in {{cssxref("@keyframes")}} Blöcke einzuschließen, um Keyframes an bestimmten Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}} Eigenschaft zur Definition _anonymer Scrollfortschritt-Zeitleisten_ und _anonymer Sichtfortschritt-Zeitleisten_ (d.h. die implizit vom Browser definiert werden, anstatt explizit benannt und definiert mit den `scroll-timeline-*` und `view-timeline-*` Eigenschaften):

- [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/de/docs/Web/CSS/animation-timeline/view)

### Schnittstellen

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
