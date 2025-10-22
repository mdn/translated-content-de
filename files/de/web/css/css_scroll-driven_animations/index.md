---
title: CSS scroll-basierte Animationen
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Modul für scroll-basierte Animationen** bietet Funktionalitäten, die auf dem [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) aufbauen. Es ermöglicht Ihnen, Eigenschaftswerte basierend auf einem Fortschritt entlang einer scrollbasierten Zeitleiste anstelle der standardmäßigen zeitbasierten Dokumenten-Zeitleiste zu animieren. Das bedeutet, dass Sie ein Element durch das Scrollen eines scrollbaren Elements animieren können, anstatt lediglich durch den Zeitablauf.

Es gibt zwei Arten von scrollbasierten Zeitleisten:

- _Scroll-Fortschritts-Zeitleiste_: Sie schreiten auf dieser Zeitleiste voran, indem Sie ein scrollbares Element (_Scroller_) von oben nach unten (oder von links nach rechts) und zurück scrollen. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0% am Anfang und 100% am Ende.
- _Sichtbarkeits-Fortschritts-Zeitleiste_: Diese Zeitleiste basiert auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird als Fortschrittsbestandteil verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und 100%, wenn es den gegenüberliegenden Rand erreicht.

Wenn eine dieser beiden Zeitleisten auf ein animiertes Element angewendet wird, verläuft die Animation entlang dieser Zeitleiste anstatt der standardmäßigen zeitbasierten Zeitleiste zu folgen.

Es ist möglich, die effektive Platzierung der Animation entlang der Scroll-Fortschritt- und Sichtbarkeits-Fortschritts-Zeitleisten anzupassen, d.h. Sie können die Position definieren, an der die Animation beginnt und endet. Dies kann auf ein paar verschiedene Arten geschehen:

- Start- und Endwerte des Animationsbereichs können auf die Animation angewendet werden, um die Position des Start- und Endpunkts der Animation entlang der Zeitleiste anzupassen.
- Sichtbarkeits-Fortschritts-Zeitleisten können einen Start- und/oder End-Absatz (oder Auszug) enthalten, um die Position des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für weitere Details) anzupassen, in dem das Subjektelement als sichtbar erachtet wird. Anders gesagt, dies ermöglicht es Ihnen, Start- und/oder End-Absatz-/Auszugswerte zu spezifizieren, die die Position der Zeitleiste selbst versetzen.

## Scroll-basierte Animationen in Aktion

Sie finden mehrere Tools und Demos, die scroll-basierte Animationen in Aktion zeigen, unter [Scroll-basierte Animationstools und -demos](https://scroll-driven-animations.style/).

## Referenz

### Eigenschaften

Setzen Sie die Zeitleiste, die den Fortschritt einer Animation steuert, und legen Sie ihren Befestigungsbereich entlang dieser Zeitleiste fest:

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

Ändern Sie den Zeitleistenbereich:

- {{cssxref("timeline-scope")}}

### At-Regeln und Deskriptoren

CSS-scroll-basierte Animationen fügen die Möglichkeit hinzu, `<timeline-range-name>` in {{cssxref("@keyframes")}}-Blöcke einzuschließen, um Keyframes an spezifischen Positionen innerhalb benannter Zeitleistenbereiche zu platzieren.

### Funktionen

Mögliche Werte der {{cssxref("animation-timeline")}}-Eigenschaft zur Definition von _anonymen Scroll-Fortschritts-Zeitleisten_ und _anonymen Sichtbarkeits-Fortschritts-Zeitleisten_ (d.h. implizit vom Browser definiert, anstatt explizit benannt und mit den `scroll-timeline-*` und `view-timeline-*`-Eigenschaften definiert):

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

- [Elemente beim Scrollen mit Scroll-basierten Animationen animieren](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) auf developer.chrome.com
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
