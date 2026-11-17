---
title: "AnimationEffect: updateTiming()-Methode"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{ APIRef("Web Animations") }}

Die Methode `updateTiming()` der Schnittstelle [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) aktualisiert die angegebenen Timing-Eigenschaften eines Animationseffekts.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameter

- `timing` {{optional_inline}}
  - : Ein Objekt mit keiner oder mehreren Eigenschaften aus dem Rückgabewert von [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming), die festlegen, welche Timing-Eigenschaften aktualisiert werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn für eine der Timing-Eigenschaften ungültige Werte angegeben werden.

## Beispiele

### Nebeneffekte

`updateTiming()` kann dazu führen, dass eine zugehörige [`Animation`](/de/docs/Web/API/Animation) die Wiedergabe beginnt oder beendet. Dies ist beispielsweise der Fall, wenn der Effekt einer laufenden Animation so verkürzt wird, dass seine Endzeit vor [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt, oder wenn der Effekt einer abgeschlossenen Animation so verlängert wird, dass seine Endzeit nach [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) liegt.

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
