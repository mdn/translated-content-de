---
title: CSS-Scroll-Animations
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 13d52ec82f1de8ee464874b0b6fadf7025cd6673
---

{{CSSRef}}

Das **CSS-Scroll-Animations**-Modul bietet Funktionen, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht die Animation von Eigenschaftswerten basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste anstelle der standardmäßigen zeitbasierten Dokumentzeitleiste. Das bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt nur durch den Ablauf der Zeit.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scroll-Fortschritts-Zeitleiste_: Sie bewegen diese Zeitleiste, indem Sie ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück scrollen. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.
- _Sichtbarkeits-Fortschritts-Zeitleiste_: Sie bewegen diese Zeitleiste basierend auf Änderungen der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird als Prozentsatz des Fortschritts verfolgt — standardmäßig befindet sich die Zeitleiste bei 0 %, wenn das Subjekt an einer Kante des Scrollers erstmals sichtbar wird, und bei 100 %, wenn es die gegenüberliegende Kante erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, bewegt sich die Animation entlang dieser Zeitleiste anstelle der standardmäßigen zeitbasierten Zeitleiste.

Es ist möglich, die effektive Platzierung der Animation entlang der Scrollfortschritts- und Sichtbarkeits-Fortschritts-Zeitleisten anzupassen, d.h. Sie können die Position definieren, an der die Animation beginnt und endet. Dies kann auf verschiedene Weise erfolgen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Position des Start- und Endpunkts der Animation entlang der Zeitleiste anzupassen.
- Sichtbarkeits-Fortschritts-Zeitleisten können einen Start- und/oder End-Abstand (oder Vorsprung) aufweisen, der auf sie angewendet wird, um die Position des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für weitere Details) anzupassen, in dem das Subjektelement als sichtbar betrachtet wird. Anders ausgedrückt können Sie Start- und/oder Endabstände definieren, die die Position der Zeitleiste selbst verschieben.

## Scroll-Animations in Aktion

Sie finden mehrere Tools und Demos, die Scroll-basierte Animationen in Aktion zeigen, auf [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Legen Sie die Zeitleiste fest, die den Fortschritt einer Animation steuern soll, und definieren Sie deren Anhangsbereich entlang dieser Zeitleiste:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scroll-Fortschritts-Zeitleisten_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Sichtbarkeits-Fortschritts-Zeitleisten_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Modifizieren Sie den Geltungsbereich der Zeitleiste:

- {{cssxref("timeline-scope")}}

### At-Regeln

CSS-Scroll-Animationen ermöglichen es, `<timeline-range-name>`s in {{cssxref("@keyframes")}}-Blöcken einzufügen, um Keyframes an bestimmten Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der Eigenschaft {{cssxref("animation-timeline")}} zum Definieren von _anonymen Scroll-Fortschritts-Zeitleisten_ und _anonymen Sichtbarkeits-Fortschritts-Zeitleisten_ (d.h. implizit vom Browser definiert, anstatt ausdrücklich benannt und mit den `scroll-timeline-*`- und `view-timeline-*`-Eigenschaften definiert):

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

- [Animieren von Elementen beim Scrollen mit Scroll-Animationen](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
