---
title: "Animation: reverse()-Methode"
short-title: reverse()
slug: Web/API/Animation/reverse
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`Animation.reverse()`**-Methode des [`Animation`](/de/docs/Web/API/Animation)-Interfaces kehrt die Abspielrichtung um, was bedeutet, dass die Animation am Anfang endet. Wenn sie bei einer nicht abgespielten Animation aufgerufen wird, wird die gesamte Animation rückwärts abgespielt. Wenn sie bei einer pausierten Animation aufgerufen wird, wird die Animation rückwärts fortgesetzt.

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im [Beispiel des Wachsenden/Shrinkenden Alice-Spiels](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) bewirkt ein Klick oder Tippen auf die Flasche, dass die Wachstumsanimation von Alice (`aliceChange`) rückwärts abgespielt wird, wodurch sie kleiner wird. Dies wird erreicht, indem die [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) von `aliceChange` auf `-1` gesetzt wird, so:

```js
const shrinkAlice = () => {
  // play Alice's animation in reverse
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // play the bottle's animation
  drinking.play();
};
```

Es könnte aber auch durch Aufrufen von `reverse()` auf `aliceChange` erreicht werden, so:

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
- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, mit denen Sie die Animation von Webseiten steuern können.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause) um eine Animation zu pausieren.
- [`Animation.play()`](/de/docs/Web/API/Animation/play) um eine Animation vorwärts zu bewegen.
