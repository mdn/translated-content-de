---
title: "AnimationEvent: AnimationEvent() Konstruktor"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Der **`AnimationEvent()`** Konstruktor gibt ein neues [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Objekt zurück, das ein Ereignis in Bezug auf eine Animation darstellt.

## Syntax

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `AnimationEvent`.
    Es ist groß-/kleinschreibungssensitiv und von Browsern auf `animationstart`, `animationend` oder `animationiteration` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `animationName` {{optional_inline}}
      - : Ein String, der den Wert der {{cssxref("animation-name")}} CSS-Eigenschaft enthält, die mit der Animation in Verbindung steht. Standardmäßig ist dies `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein `float`, das die Zeitdauer angibt, die die Animation in Sekunden lief, als dieses Ereignis ausgelöst wurde, ohne jegliche Zeit, in der die Animation pausiert war.
        Für ein `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in welchem Fall das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst wird. Standardmäßig ist dies `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, beginnend mit `"::"`, der den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation abläuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst ausgeführt wird, geben Sie einen leeren String an: `""`. Standardmäßig ist dies `""`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animation-bezogene CSS-Eigenschaften und -Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- Die [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Schnittstelle, zu der es gehört.
