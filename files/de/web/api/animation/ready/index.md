---
title: "Animation: ready-Eigenschaft"
short-title: ready
slug: Web/API/Animation/ready
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`Animation.ready`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Animation bereit ist zu spielen. Ein neues Promise wird jedes Mal erstellt, wenn die Animation in den `"pending"` [play state](/de/docs/Web/API/Animation/playState) eintritt, sowie wenn die Animation abgebrochen wird, da in beiden Szenarien die Animation erneut gestartet werden kann.

> [!NOTE]
> Da dasselbe {{jsxref("Promise")}} sowohl für ausstehende `play`- als auch `pause`-Anfragen verwendet wird, wird Autoren empfohlen, den Zustand der Animation zu überprüfen, wenn das Promise aufgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Animation bereit ist zu spielen. Normalerweise verwenden Sie eine Struktur, die dieser ähnelt, wenn Sie das ready-Promise nutzen:

```js
animation.ready.then(() => {
  // Do whatever needs to be done when
  // the animation is ready to run
});
```

## Beispiele

Im folgenden Beispiel ist der Zustand der Animation `running`, wenn das **aktuelle ready-Promise** aufgelöst wird, da die Animation den `pending` play state nicht verlässt zwischen den Aufrufen von `pause` und `play`, und daher ändert sich das **aktuelle ready-Promise** nicht.

```js
animation.pause();
animation.ready.then(() => {
  // Displays 'running'
  alert(animation.playState);
});
animation.play();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
