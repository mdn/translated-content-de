---
title: "Animation: Animation()-Konstruktor"
short-title: Animation()
slug: Web/API/Animation/Animation
l10n:
  sourceCommit: 9895dea082072287d90e46d31419cbafdd2e966f
---

{{ APIRef("Web Animations") }}

Der **`Animation()`**-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue Instanz eines `Animation`-Objekts zurück.

## Syntax

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### Parameter

- `effect` {{optional_inline}}
  - : Der Zieleffekt, als ein Objekt basierend auf der {{domxref("AnimationEffect")}}-Schnittstelle, das der Animation zugewiesen werden soll. Obwohl in Zukunft andere Effekte wie `SequenceEffect`s oder `GroupEffect`s möglich sein könnten, ist der einzige derzeit verfügbare Effekt {{domxref("KeyframeEffect")}}. Dies kann `null` sein (was der Standard ist), um anzuzeigen, dass kein Effekt angewendet werden soll.
- `timeline` {{optional_inline}}
  - : Spezifiziert die `timeline`, mit der die Animation verknüpft werden soll, als ein Objekt eines Typs basierend auf der {{domxref("AnimationTimeline")}}-Schnittstelle. Der Standardwert ist {{domxref("Document.timeline")}}, dies kann jedoch auch auf `null` gesetzt werden.

## Beispiele

Im [Follow the White Rabbit Beispiel](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010) wird der `Animation()`-Konstruktor verwendet, um eine `Animation` für die `rabbitDownKeyframes` unter Verwendung der `timeline` des Dokuments zu erstellen:

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
- {{domxref("Animation")}}
