---
title: CSS scrollgetriebene Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{CSSRef}}

Das Modul **CSS scrollgetriebene Animationen** bietet Funktionalität, die auf dem [CSS Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbaut. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitachse zu animieren, anstatt der standardmäßigen zeitbasierten Dokumenten-Zeitachse. Das bedeutet, dass Sie ein Element animieren können, indem Sie ein scrollbares Element scrollen, anstatt nur durch den Zeitverlauf.

Es gibt zwei Arten von scrollbasierten Zeitachsen:

- _scroll Fortschritt-Zeitachse_: Sie bewegen diese Zeitachse, indem Sie ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück scrollen. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0% am Anfang und 100% am Ende.
- _Ansichtsfortschritt-Zeitachse_: Sie bewegen diese Zeitachse basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subject_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjects innerhalb des Scrollers wird als Prozentsatz des Fortschritts verfolgt — standardmäßig befindet sich die Zeitachse bei 0%, wenn das Subject zuerst an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitachsen auf ein animiertes Element angewendet wird, schreitet die Animation entlang dieser Zeitachse voran, anstatt der standardmäßigen zeitbasierten Zeitachse zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der scroll- und Ansichtsfortschritt-Zeitachsen anzupassen, d.h. Sie können die Position definieren, an der die Animation startet und endet. Dies kann auf verschiedene Weise geschehen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Start- und Endposition der Animation entlang der Zeitachse anzupassen.
- Ansichtsfortschritt-Zeitachsen können einen Start- und/oder Endeinschub (oder -auszug) aufweisen, um die Position des Scrollports anzupassen (siehe {{Glossary("Scroll_container", "Scroll container")}} für weitere Details), in dem das Subject-Element als sichtbar gilt. Anders ausgedrückt, dies ermöglicht Ihnen die Festlegung von Start- und/oder Endeinschub- (oder -auszug) Werten, die die Position der Zeitachse selbst versetzen.

## Scrollgetriebene Animationen in Aktion

Sie finden mehrere Werkzeuge und Demos, die scrollgetriebene Animationen in Aktion zeigen, bei [Scrollgetriebene Animationswerkzeuge und Demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Stellen Sie die Zeitachse ein, die den Fortschritt einer Animation steuert, und legen Sie deren Anpassungsbereich entlang dieser Zeitachse fest:

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

Definieren Sie _benannte Scroll Fortschritt-Zeitachsen_:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

Definieren Sie _benannte Ansichtsfortschritt-Zeitachsen_:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

Ändern Sie den Zeitachsenbereich:

- {{cssxref("timeline-scope")}}

### At-Rules

CSS scrollgetriebene Animationen fügen die Möglichkeit hinzu, `<timeline-range-name>`s in {{cssxref("@keyframes")}} Blöcken einzuschließen, um Keyframes an speziellen Positionen innerhalb benannter Zeitachsenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}} Eigenschaft zur Definition _anonymer Scroll Fortschritt-Zeitachsen_ und _anonymer Ansichtsfortschritt-Zeitachsen_ (d.h. implizit vom Browser definiert, anstatt explizit benannt und unter Verwendung der `scroll-timeline-*` und `view-timeline-*` Eigenschaften definiert):

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

- [Elemente beim Scrollen mit scrollgetriebenen Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
