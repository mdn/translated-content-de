---
title: "Animation: reverse() Methode"
short-title: reverse()
slug: Web/API/Animation/reverse
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`Animation.reverse()`** Methode der [`Animation`](/de/docs/Web/API/Animation) Schnittstelle kehrt die Abspielrichtung um, was bedeutet, dass die Animation an ihrem Anfang endet. Wenn sie auf eine nicht abgespielte Animation angewendet wird, wird die gesamte Animation rückwärts abgespielt. Wenn sie auf eine pausierte Animation angewendet wird, wird die Animation rückwärts fortgesetzt.

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) Beispiel führt ein Klick oder Tippen auf die Flasche dazu, dass die Wachstumsanimation von Alice (`aliceChange`) rückwärts abgespielt wird, wodurch sie kleiner wird. Dies wird erreicht, indem `aliceChange`s [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) auf `-1` gesetzt wird, wie folgt:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // play the bottle's animation
  drinking.play();
};
```

Es könnte aber auch durch Aufrufen von `reverse()` auf `aliceChange` getan werden, wie folgt:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.reverse();

  // play the bottle's animation
  drinking.play();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie verwenden können, um die Animation einer Webseite zu steuern.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause) zum Pausieren einer Animation.
- [`Animation.play()`](/de/docs/Web/API/Animation/play) um eine Animation vorwärts zu bewegen.
