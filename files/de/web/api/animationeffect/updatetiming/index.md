---
title: "AnimationEffect: Methode updateTiming()"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die Methode `updateTiming()` der {{domxref("AnimationEffect")}}-Schnittstelle aktualisiert die angegebenen Timing-Eigenschaften für einen Animationseffekt.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameter

- `timing` {{optional_inline}}
  - : Ein Objekt, das null oder mehr der Eigenschaften aus dem Rückgabewert von {{domxref("AnimationEffect.getTiming()")}} enthält und die zu aktualisierenden Timing-Eigenschaften darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ungültige Werte für eine der Timing-Eigenschaften angegeben werden.

### Beispiele

#### Seiteneffekte

`updateTiming()` kann dazu führen, dass eine zugehörige {{domxref("Animation")}} startet oder stoppt, zum Beispiel wenn der Effekt einer laufenden Animation verkürzt wird, sodass ihre Endzeit vor {{domxref("Animation.currentTime")}} liegt, oder wenn der Effekt einer abgeschlossenen Animation verlängert wird, sodass ihre Endzeit nach {{domxref("Animation.currentTime")}} liegt.

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
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
- {{domxref("AnimationEffect.getTiming()")}}
- {{domxref("AnimationEffect.getComputedTiming()")}}
