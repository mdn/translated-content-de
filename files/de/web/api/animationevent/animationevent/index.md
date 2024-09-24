---
title: "AnimationEvent: AnimationEvent() Konstruktor"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Der **`AnimationEvent()`** Konstruktor gibt ein neues {{domxref("AnimationEvent")}} Objekt zurück, das ein Ereignis in Bezug auf eine Animation darstellt.

## Syntax

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `AnimationEvent`.
    Es ist case-sensitive, und Browser setzen ihn auf `animationstart`, `animationend` oder `animationiteration`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `animationName` {{optional_inline}}
      - : Ein String, der den Wert der {{cssxref("animation-name")}} CSS-Eigenschaft enthält, die mit der Transition verbunden ist. Standardmäßig `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein `float`, der die Zeitdauer angibt, die die Animation in Sekunden lief, als dieses Ereignis ausgelöst wurde, ohne die Zeit, in der die Animation pausiert war.
        Bei einem `animationstart` Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst. Standardmäßig `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der mit `"::"` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, geben Sie einen leeren String an: `""`. Standardmäßig `""`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und -Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- Das {{domxref("AnimationEvent")}} Interface, zu dem es gehört.
