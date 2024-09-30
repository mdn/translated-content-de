---
title: "AnimationEffect: updateTiming() Methode"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die `updateTiming()`-Methode der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle aktualisiert die angegebenen Zeiteigenschaften für einen Animationseffekt.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameter

- `timing` {{optional_inline}}
  - : Ein Objekt, das null oder mehr der Eigenschaften aus dem Rückgabewert von [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming) enthält, die die zu aktualisierenden Zeiteigenschaften darstellen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ungültige Werte für eine der Zeiteigenschaften angegeben werden.

### Beispiele

#### Seiteneffekte

`updateTiming()` kann dazu führen, dass eine zugehörige [`Animation`](/de/docs/Web/API/Animation) beginnt oder aufhört zu spielen, wenn beispielsweise der Effekt einer laufenden Animation verkürzt wird, sodass seine Endzeit vor der [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt oder der Effekt einer beendeten Animation verlängert wird, sodass seine Endzeit nach der [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt.

```js
const animation = document.body.animate([], { duration: 1000 });
animation.finish();
console.log(animation.playState); // finished
animation.effect.updateTiming({ duration: 2000 });
console.log(animation.playState); // running
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
- [`Animation`](/de/docs/Web/API/Animation)
- [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming)
- [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming)
