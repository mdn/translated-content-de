---
title: "AnimationEffect: updateTiming() Methode"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die `updateTiming()`-Methode der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle aktualisiert die angegebenen Timing-Eigenschaften für einen Animationseffekt.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameter

- `timing` {{optional_inline}}
  - : Ein Objekt, das null oder mehr der Eigenschaften aus dem Rückgabewert von [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming) enthält und die zu aktualisierenden Timing-Eigenschaften darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ungültige Werte für eine der Timing-Eigenschaften angegeben werden.

### Beispiele

#### Nebeneffekte

`updateTiming()` kann dazu führen, dass eine zugeordnete [`Animation`](/de/docs/Web/API/Animation) startet oder stoppt, wenn zum Beispiel der Effekt einer laufenden Animation so verkürzt wird, dass ihre Endzeit vor [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt, oder der Effekt einer abgeschlossenen Animation so verlängert wird, dass ihre Endzeit nach [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt.

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
