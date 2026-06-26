---
title: "AnimationEvent: AnimationEvent() Konstruktor"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: abe2e9c88f9962da6a58f7ee4ad16e35a351b03e
---

{{APIRef("Web Animations")}}

Der **`AnimationEvent()`** Konstruktor erstellt ein neues [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, das ein Ereignis im Zusammenhang mit einer Animation darstellt.

## Syntax

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `AnimationEvent`.
    Er ist case-sensitive und Browser setzen ihn auf `animationstart`, `animationend` oder `animationiteration`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `animation` {{optional_inline}}
      - : Eine [`CSSAnimation`](/de/docs/Web/API/CSSAnimation), die die mit dem Ereignis verbundene Animation enthält.
        Standardmäßig `null`.
    - `animationName` {{optional_inline}}
      - : Ein String, der den Wert der CSS-Eigenschaft {{cssxref("animation-name")}} enthält, die mit der Transition verbunden ist. Standardmäßig `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein `float`, der die Zeit in Sekunden angibt, die die Animation gelaufen ist, als dieses Ereignis ausgelöst wurde, ohne Berücksichtigung der Pausenzeit der Animation.
        Bei einem `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in welchem Fall das Ereignis mit `elapsedTime` von `(-1 * delay)` ausgelöst wird. Standardmäßig `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der mit `"::"` startet und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudo-Element ausgeführt wird, sondern auf dem Element selbst, geben Sie einen leeren String an: `""`. Standardmäßig `""`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- Das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Interface, zu dem es gehört.
