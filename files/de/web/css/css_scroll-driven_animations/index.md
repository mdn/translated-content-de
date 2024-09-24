---
title: CSS scroll-gesteuerte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{CSSRef}}

Das **CSS scroll-gesteuerte Animationen Modul** bietet Funktionalitäten, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste, anstatt der standardmäßigen zeitbasierten Dokumentzeitleiste, zu animieren. Dies bedeutet, dass Sie ein Element durch Scrollen eines scrollbaren Elements anstelle des bloßen Zeitablaufs animieren können.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scroll-Fortschrittszeitleiste_: Diese Zeitleiste wird fortschreitet, indem ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und zurück gescrollt wird. Die Position im Scrollbereich wird in einen Fortschritts-Prozentsatz umgewandelt – 0% am Anfang und 100% am Ende.
- _Ansichts-Fortschrittszeitleiste_: Diese Zeitleiste wird basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers fortgeschreitet. Die Sichtbarkeit des Subjekts im Scroller wird als Fortschritts-Prozentsatz verfolgt – standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt zum ersten Mal an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, schreitet die Animation entlang dieser Zeitleiste voran, anstatt der standardmäßigen zeitbasierten Zeitleiste zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der Scroll- und Ansichts-Fortschrittszeitleisten anzupassen, d.h., Sie können die Position definieren, an der die Animation beginnt und endet. Dies kann auf verschiedene Weise geschehen:

- Start- und End-Animationsbereichswerte können auf die Animation angewendet werden, um die Position des Beginns und Endes der Animation entlang der Zeitleiste einzustellen.
- Ansichts-Fortschrittszeitleisten können einen Start- und/oder Endeinzug (oder -auszug) zugeordnet bekommen, um die Position des Scrollports (siehe {{glossary("Scroll container")}} für mehr Details) anzupassen, in dem das Subjektelement sichtbar sein soll. Anders ausgedrückt, dies ermöglicht Ihnen, Start- und/oder Endeinzugswerte festzulegen, die die Position der Zeitleiste selbst kompensieren.

## Scroll-gesteuerte Animationen in Aktion

Sie finden mehrere Werkzeuge und Demos, die scroll-gesteuerte Animationen in Aktion zeigen, unter [Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Stellen Sie die Zeitleiste ein, die den Fortschritt einer Animation steuert, und legen Sie deren Anwendungsbereich entlang dieser Zeitleiste fest:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scroll-Fortschrittszeitleisten_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Ansichts-Fortschrittszeitleisten_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Modifizieren Sie den Geltungsbereich der Zeitleiste:

- {{cssxref("timeline-scope")}}

### At-rules

CSS scroll-gesteuerte Animationen fügen die Fähigkeit hinzu, `<timeline-range-name>`s in {{cssxref("@keyframes")}} Blöcken einzuschließen, um Schlüsselbilder an bestimmten Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}} Eigenschaft zum Definieren _anonymer Scroll-Fortschrittszeitleisten_ und _anonymer Ansichts-Fortschrittszeitleisten_ (d.h. implizit vom Browser definiert, anstatt explizit benannt und unter Verwendung der `scroll-timeline-*` und `view-timeline-*` Eigenschaften definiert):

- [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/de/docs/Web/CSS/animation-timeline/view)

### JavaScript Features

- {{domxref("Element.animate()")}}
- {{domxref("AnimationTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
