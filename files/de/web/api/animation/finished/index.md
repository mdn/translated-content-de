---
title: "Animation: finished-Eigenschaft"
short-title: finished
slug: Web/API/Animation/finished
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte Eigenschaft **`Animation.finished`** der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Animation das Abspielen beendet hat.

> [!NOTE]
> Jedes Mal, wenn die Animation den `finished`-Abspielzustand verlässt (d.h. wenn sie erneut abgespielt wird), wird ein neues `Promise` für diese Eigenschaft erstellt. Das neue `Promise` wird aufgelöst, sobald die neue Animationssequenz abgeschlossen ist.

## Wert

Ein {{jsxref("Promise")}}-Objekt, das aufgelöst wird, sobald die Animation abgeschlossen ist.

## Beispiele

Der folgende Code wartet, bis alle auf dem Element `elem` laufenden Animationen abgeschlossen sind, und entfernt dann das Element aus dem DOM-Baum:

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
