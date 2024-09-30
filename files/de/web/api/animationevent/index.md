---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`AnimationEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent)
  - : Erstellt ein `AnimationEvent` Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Übernimmt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, die die Animation beim Auslösen dieses Ereignisses bereits läuft, ohne die Zeit, in der die Animation pausiert war. Bei einem `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst wird.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ist der String leer: `''`.

## Instanz-Methoden

_Übernimmt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animation-bezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
