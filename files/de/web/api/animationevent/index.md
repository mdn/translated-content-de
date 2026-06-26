---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("Web Animations")}}

Die **`AnimationEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Animationen](/de/docs/Web/CSS/Guides/Animations/Using) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent)
  - : Erstellt ein `AnimationEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine schreibgeschützte [`CSSAnimation`](/de/docs/Web/API/CSSAnimation)-Eigenschaft, die die mit dem Ereignis verknüpfte Animation darstellt.
- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer in Sekunden angibt, die die Animation gelaufen ist, als dieses Ereignis ausgelöst wurde, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war. Bei einem `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, das `(-1 * delay)` enthält.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `'::'`, der den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ein leerer String: `''`.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animationsbezogene CSS-Eigenschaften und -Regeln: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
