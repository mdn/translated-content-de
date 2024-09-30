---
title: "AnimationEffect: Methode getComputedTiming()"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die `getComputedTiming()`-Methode der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle gibt die berechneten Timing-Eigenschaften für diesen Animationseffekt zurück.

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
    - : Eine `number`, die die Endzeit des Effekts in Millisekunden ab dem Start des Effekts angibt. Dies entspricht `activeDuration` plus `delay` und `endDelay`.
  - `activeDuration`
    - : Eine `number`, die die Gesamtdauer in Millisekunden aller Iterationen des Effekts angibt. Dies entspricht `duration` multipliziert mit `iterations` (oder null, wenn dieses Produkt {{jsxref("NaN")}} wäre).
  - `localTime`

    - : Eine `number` oder `null`.

      Gibt die Länge der Zeit in Millisekunden an, die der Effekt gelaufen ist. Dies entspricht der [`currentTime`](/de/docs/Web/API/Animation/currentTime) der zugehörigen Animation oder `null`, wenn der Effekt nicht mit einer Animation verknüpft ist.

  - `progress`

    - : `null` oder eine `number`, die mindestens `0` und kleiner als `1` ist.

      Gibt den Fortschritt des Effekts durch seine aktuelle Iteration an. Zu Beginn der `activeDuration` entspricht dies dem Bruchteilsteil von `iterationStart`.

      Gibt `null` zurück, wenn der Effekt nicht in der Mitte einer Iteration ist, zum Beispiel, weil der Effekt sich in den `delay`- oder `endDelay`-Perioden befindet, der Effekt abgeschlossen ist oder `localTime` `null` ist.

  - `currentIteration`

    - : `null` oder eine ganze `number`.

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
