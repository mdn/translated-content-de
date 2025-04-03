---
title: CSS scrollgesteuerte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das Modul für **CSS scrollgesteuerte Animationen** bietet Funktionalitäten, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste zu animieren, anstatt der standardmäßigen zeitbasierten Dokumentenzeitleiste. Das bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt nur durch den Zeitverlauf.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scroll-Fortschrittszeitleiste_: Diese Zeitleiste wird fortschreiten, indem ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück gescrollt wird. Die Position im Scrollbereich wird in einen prozentualen Fortschritt umgerechnet — 0% am Anfang und 100% am Ende.
- _Sichtbarkeits-Fortschrittszeitleiste_: Diese Zeitleiste schreitet auf Basis der Veränderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers fort. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird als prozentualer Fortschritt verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt am einen Rand des Scrollers erstmals sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, schreitet die Animation entlang dieser Zeitleiste voran, anstatt der standardmäßigen zeitbasierten Zeitleiste zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der Scroll-Fortschritts- und Sichtbarkeits-Fortschrittszeitleisten anzupassen, d.h. Sie können die Position definieren, an der die Animation beginnt und endet. Dies kann auf verschiedene Weise erfolgen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Position des Start- und Endpunkts der Animation entlang der Zeitleiste anzupassen.
- Sichtbarkeits-Fortschrittszeitleisten können einen Start- und/oder Endeinschnitt (oder Austritt) erhalten, um die Position des Scrollports anzupassen (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für weitere Details), in dem das Subjektelement als sichtbar angesehen wird. Anders ausgedrückt, dies ermöglicht es Ihnen, Start- und/oder Endeinschnittswerte (oder Austrittswerte) anzugeben, die die Position der Zeitleiste selbst verschieben.

## Scrollgesteuerte Animationen in Aktion

Sie finden mehrere Werkzeuge und Demos, die scrollgesteuerte Animationen in Aktion zeigen, unter [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Setzen Sie die Zeitleiste, die den Fortschritt einer Animation steuern wird, und setzen Sie deren Befestigungsbereich entlang dieser Zeitleiste fest:

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

Ändern Sie den Geltungsbereich der Zeitleiste:

- {{cssxref("timeline-scope")}}

### At-Rules

CSS scrollgesteuerte Animationen fügen die Fähigkeit hinzu, `<timeline-range-name>`s in {{cssxref("@keyframes")}} Blöcken einzuschließen, um Schlüsselbilder an spezifischen Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der Eigenschaft {{cssxref("animation-timeline")}} zum Definieren von _anonymen Scroll-Fortschrittszeitleisten_ und _anonymen Sichtbarkeits-Fortschrittszeitleisten_ (d.h. implizit durch den Browser definiert, anstatt explizit benannt und durch die `scroll-timeline-*` und `view-timeline-*` Eigenschaften definiert):

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
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
