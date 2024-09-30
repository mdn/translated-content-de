---
title: "Animation: finished-Eigenschaft"
short-title: finished
slug: Web/API/Animation/finished
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die **`Animation.finished`**-Eigenschaft des [Web Animations API](/de/docs/Web/API/Web_Animations_API) ist eine schreibgeschützte Eigenschaft, die ein {{jsxref("Promise")}} zurückgibt, das aufgelöst wird, sobald die Animation das Abspielen beendet hat.

> [!NOTE]
> Jedes Mal, wenn die Animation den `finished`-Spielzustand verlässt (das heißt, wenn sie erneut zu spielen beginnt), wird ein neues `Promise` für diese Eigenschaft erstellt. Das neue `Promise` wird aufgelöst, sobald die neue Animationssequenz abgeschlossen ist.

## Wert

Ein {{jsxref("Promise")}}-Objekt, das aufgelöst wird, sobald die Animation beendet ist.

## Beispiele

Der folgende Code wartet, bis alle auf dem Element `elem` laufenden Animationen beendet sind, und löscht dann das Element aus dem DOM-Baum:

```js
Promise.all(elem.getAnimations().map((animation) => animation.finished)).then(
  () => elem.remove(),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
