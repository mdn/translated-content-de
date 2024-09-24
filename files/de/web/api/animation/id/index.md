---
title: "Animation: id-Eigenschaft"
short-title: id
slug: Web/API/Animation/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`Animation.id`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt einen String zurück oder setzt ihn, der zur Identifikation der Animation verwendet wird.

## Wert

Ein String, der zur Identifikation der Animation verwendet werden kann, oder `null`, wenn die Animation keine `id` hat.

## Beispiele

Im [Beispiel „Follow the White Rabbit“](https://codepen.io/rachelnabors/pen/eJyWzm?editors=0010) können Sie der `rabbitDownAnimation` eine `id` zuweisen, wie folgt:

```js
rabbitDownAnimation.id = "rabbitGo";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
