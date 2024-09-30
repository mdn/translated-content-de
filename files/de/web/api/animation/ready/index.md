---
title: "Animation: ready-Eigenschaft"
short-title: ready
slug: Web/API/Animation/ready
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`Animation.ready`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Animation bereit ist, abgespielt zu werden. Ein neues Promise wird jedes Mal erstellt, wenn die Animation in den `"pending"` [play state](/de/docs/Web/API/Animation/playState) eintritt, sowie wenn die Animation abgebrochen wird, da in beiden Szenarien die Animation erneut gestartet werden kann.

> [!NOTE]
> Da dasselbe {{jsxref("Promise")}} sowohl für ausstehende `play`- als auch `pause`-Anfragen verwendet wird, wird den Autoren empfohlen, den Status der Animation zu überprüfen, wenn das Promise aufgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Animation bereit ist, abgespielt zu werden. Sie werden typischerweise eine Konstruktion wie diese verwenden, wenn Sie das ready-Promise verwenden:

```js
animation.ready.then(() => {
  // Do whatever needs to be done when
  // the animation is ready to run
});
```

## Beispiele

Im folgenden Beispiel wird der Zustand der Animation `running` sein, wenn das **aktuelle ready Promise** aufgelöst wird, da die Animation den `pending` play state nicht zwischen den Aufrufen von `pause` und `play` verlässt und daher das **aktuelle ready Promise** nicht geändert wird.

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
