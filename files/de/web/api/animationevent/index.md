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
  - : Erstellt ein `AnimationEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der angibt, wie lange die Animation in Sekunden lief, als dieses Ereignis ausgelöst wurde, ohne die Zeitspanne einzuschließen, in der die Animation pausiert war. Für ein `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime` mit dem Wert `(-1 * delay)` ausgelöst wird.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element läuft, ist der String leer: `''`.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
