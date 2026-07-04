---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Web Animations")}}

Das **`AnimationEvent`** Interface repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Animationen](/de/docs/Web/CSS/Guides/Animations/Using) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`AnimationEvent()`](/de/docs/Web/API/AnimationEvent/AnimationEvent)
  - : Erstellt ein `AnimationEvent`-Ereignis mit den angegebenen Parametern.

## Eigenschaften der Instanz

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animation`](/de/docs/Web/API/AnimationEvent/animation) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`CSSAnimation`](/de/docs/Web/API/CSSAnimation)-Eigenschaft, die die Animation darstellt, die mit dem Ereignis verknüpft ist.
- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Laufzeit der Animation in Sekunden angibt, als dieses Ereignis ausgelöst wurde, ohne Berücksichtigung der Zeit, in der die Animation pausiert war. Für ein `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Läuft die Animation nicht auf einem Pseudoelement, sondern auf dem Element, ist es ein leerer String: `''`.

## Methoden der Instanz

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
