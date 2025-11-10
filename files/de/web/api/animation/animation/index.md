---
title: "Animation: Animation()-Konstruktor"
short-title: Animation()
slug: Web/API/Animation/Animation
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{ APIRef("Web Animations") }}

Der **`Animation()`**-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue `Animation`-Objektinstanz zurück.

## Syntax

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### Parameter

- `effect` {{optional_inline}}
  - : Der Ziel-Effekt, als ein Objekt basierend auf der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle, das der Animation zugewiesen werden soll. Obwohl in Zukunft andere Effekte wie `SequenceEffect`s oder `GroupEffect`s möglich sein könnten, ist der einzige derzeit verfügbare Effekt [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Dies kann `null` sein (was der Standardwert ist), um anzugeben, dass kein Effekt angewendet werden soll.
- `timeline` {{optional_inline}}
  - : Gibt die `timeline` an, mit der die Animation assoziiert werden soll, als ein Objekt eines Typs basierend auf der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Schnittstelle. Der Standardwert ist [`Document.timeline`](/de/docs/Web/API/Document/timeline), aber dies kann auch auf `null` gesetzt werden.

## Beispiele

Im [Follow the White Rabbit-Beispiel](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#pausing_and_playing_animations) können wir den `Animation()`-Konstruktor verwenden, um eine `Animation` für die `rabbitDownKeyframes` unter Verwendung der `timeline` des Dokuments zu erstellen:

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit,
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);

const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
