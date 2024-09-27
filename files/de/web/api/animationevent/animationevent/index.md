---
title: "AnimationEvent: AnimationEvent() Konstruktor"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Der **`AnimationEvent()`** Konstruktor gibt ein neues [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt zurück, das ein Ereignis in Bezug auf eine Animation darstellt.

## Syntax

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des `AnimationEvent`-Typs.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `animationstart`, `animationend` oder `animationiteration`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `animationName` {{optional_inline}}
      - : Ein String, der den Wert der {{cssxref("animation-name")}} CSS-Eigenschaft enthält, die mit der Transition verbunden ist. Standardmäßig ist er `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein `float`, der die Zeit in Sekunden angibt, die die Animation läuft, als dieses Ereignis ausgelöst wurde, ohne die Zeit einzuschließen, in der die Animation pausiert wurde.
        Bei einem `animationstart` Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst. Standardmäßig ist es `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der mit `"::"` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation abläuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, geben Sie einen leeren String an: `""`. Standardmäßig ist es `""`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animation-bezogene CSS-Eigenschaften und -Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- Das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Interface, zu dem es gehört.
