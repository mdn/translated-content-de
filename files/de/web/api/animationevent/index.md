---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`AnimationEvent`**-Schnittstelle stellt Ereignisse dar, die Informationen in Bezug auf [Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) liefern.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Erstellt ein `AnimationEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, die die Animation läuft, wenn dieses Ereignis ausgelöst wird, wobei die Zeit ausgeschlossen wird, in der die Animation pausiert war. Bei einem `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element selbst läuft, ist der String leer: `''`.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animation-spezifische CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
