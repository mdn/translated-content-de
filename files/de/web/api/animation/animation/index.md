---
title: "Animation: Animation()-Konstruktor"
short-title: Animation()
slug: Web/API/Animation/Animation
l10n:
  sourceCommit: 9895dea082072287d90e46d31419cbafdd2e966f
---

{{ APIRef("Web Animations") }}

Der **`Animation()`**-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) liefert eine neue Instanz eines `Animation`-Objekts zurück.

## Syntax

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### Parameter

- `effect` {{optional_inline}}
  - : Der Ziel-Effekt, als Objekt basierend auf der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle, das der Animation zugewiesen wird. Obwohl in Zukunft möglicherweise andere Effekte wie `SequenceEffect`s oder `GroupEffect`s möglich sein werden, ist der einzige derzeit verfügbare Effekt [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Dies kann `null` sein (was der Standard ist), um anzuzeigen, dass kein Effekt angewendet werden soll.
- `timeline` {{optional_inline}}
  - : Gibt die `timeline` an, mit der die Animation verknüpft werden soll, als Objekt eines Typs, der auf der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Schnittstelle basiert. Der Standardwert ist [`Document.timeline`](/de/docs/Web/API/Document/timeline), aber dies kann ebenfalls auf `null` gesetzt werden.

## Beispiele

Im [Beispiel "Follow the White Rabbit"](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010) wird der `Animation()`-Konstruktor verwendet, um eine `Animation` für die `rabbitDownKeyframes` unter Verwendung der `timeline` des Dokuments zu erstellen:

```js
const rabbitDownAnimation = new Animation(
  rabbitDownKeyframes,
  document.timeline,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
