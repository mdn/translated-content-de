---
title: "Animation: reverse()-Methode"
short-title: reverse()
slug: Web/API/Animation/reverse
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

Die **`Animation.reverse()`**-Methode des {{ domxref("Animation") }} Interfaces kehrt die Abspielrichtung um, was bedeutet, dass die Animation an ihrem Anfang endet. Wenn sie auf eine nicht abgespielte Animation angewandt wird, wird die gesamte Animation rückwärts abgespielt. Wenn sie auf eine pausierte Animation angewandt wird, setzt die Animation rückwärts fort.

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im [Wachsend/Sich verkleinerndes Alice Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) Beispiel bewirkt das Klicken oder Tippen auf die Flasche, dass die Wachstumsanimation von Alice (`aliceChange`) rückwärts abgespielt wird und sie dadurch kleiner wird. Dies wird erreicht, indem `aliceChange` {{ domxref("Animation.playbackRate") }} auf `-1` gesetzt wird, wie folgt:

```js
const shrinkAlice = () => {
  // Spielt die Animation von Alice rückwärts ab
  aliceChange.playbackRate = -1;
  aliceChange.play();

  // Spielt die Animation der Flasche ab
  drinking.play();
};
```

Aber es könnte auch durch das Aufrufen von `reverse()` auf `aliceChange` erreicht werden, wie folgt:

```js
const shrinkAlice = () => {
  // Spielt die Animation von Alice rückwärts ab
  aliceChange.reverse();

  // Spielt die Animation der Flasche ab
  drinking.play();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, die Sie zur Steuerung der Webseiten-Animation verwenden können.
- {{domxref("Animation.pause()")}} um eine Animation zu pausieren.
- {{domxref("Animation.play()")}} um eine Animation vorwärts zu bewegen.
