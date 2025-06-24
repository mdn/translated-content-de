---
title: "AnimationEffect: getComputedTiming() Methode"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

Die `getComputedTiming()` Methode des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) Interfaces gibt die berechneten Timing-Eigenschaften für diesen Animationseffekt zurück.

> [!NOTE]
> Diese Werte sind vergleichbar mit den berechneten Stilen eines Elements, die mit `window.getComputedStyle(elem)` zurückgegeben werden.

## Syntax

```js-nolint
getComputedTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Folgendes enthält:

- Alle Eigenschaften des Objekts, das von [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming) zurückgegeben wird, mit der Ausnahme, dass alle `"auto"` Werte durch berechnete Werte ersetzt werden, die vom Typ des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) abhängen können.
- Die folgenden zusätzlichen Eigenschaften:

  - `endTime`
    - : Eine `Zahl`, die die Endzeit des Effekts in Millisekunden ab dem Start des Effekts angibt. Dies entspricht `activeDuration` plus `delay` und `endDelay`.
  - `activeDuration`
    - : Eine `Zahl`, die die Gesamtdauer in Millisekunden aller Iterationen des Effekts angibt. Dies entspricht der Multiplikation von `duration` mit `iterations` (oder null, wenn dieses Produkt {{jsxref("NaN")}} wäre).
  - `localTime`

    - : Eine `Zahl` oder `null`.

      Gibt die Laufzeit in Millisekunden an, die der Effekt ausgeführt wurde. Dies entspricht der [`currentTime`](/de/docs/Web/API/Animation/currentTime) der zugeordneten Animation oder `null`, wenn der Effekt nicht mit einer Animation verbunden ist.

  - `progress`

    - : `null` oder eine `Zahl` mindestens `0` und kleiner als `1`.

      Gibt den Fortschritt des Effekts durch seine aktuelle Iteration an. Zu Beginn der `activeDuration` entspricht dies dem Bruchteil von `iterationStart`.

      Gibt `null` zurück, wenn der Effekt nicht in der Mitte einer Iteration ist, zum Beispiel, weil der Effekt sich in den `delay` oder `endDelay` Phasen befindet, der Effekt beendet ist, oder `localTime` `null` ist.

  - `currentIteration`

    - : `null` oder eine ganzzahlige `Zahl`.

      Gibt den Index der aktuellen Iteration an. Zu Beginn der `activeDuration` entspricht dies dem ganzzahligen Teil von `iterationStart`.

      Gibt `null` zurück, wenn `progress` `null` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
- [`Animation`](/de/docs/Web/API/Animation)
