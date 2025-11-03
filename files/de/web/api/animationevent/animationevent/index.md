---
title: "AnimationEvent: AnimationEvent() Konstruktor"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("Web Animations")}}

Der **`AnimationEvent()`**-Konstruktor gibt ein neues [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt zurück, das ein Ereignis in Bezug auf eine Animation darstellt.

## Syntax

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des `AnimationEvent`-Typs. Er ist case-sensitiv und Browser setzen ihn auf `animationstart`, `animationend` oder `animationiteration`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `animationName` {{optional_inline}}
      - : Ein String, der den Wert der mit der Transition verbundenen {{cssxref("animation-name")}} CSS-Eigenschaft enthält. Standardmäßig ist es `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein `float`, der die Zeit in Sekunden angibt, wie lange die Animation bereits läuft, als dieses Ereignis ausgelöst wurde, ohne Pausen der Animation einzuschließen.
        Für ein `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst. Standardmäßig ist es `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der mit `"::"` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Läuft die Animation nicht auf einem Pseudoelement, sondern auf dem Element selbst, geben Sie einen leeren String an: `""`. Standardmäßig ist es `""`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- Die [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Schnittstelle, zu der es gehört.
