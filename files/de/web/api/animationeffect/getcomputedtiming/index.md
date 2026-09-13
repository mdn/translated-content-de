---
title: "AnimationEffect: Methode getComputedTiming()"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
l10n:
  sourceCommit: 3f149768ce7981a70761db588fa792aea6f1afa2
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

Ein Objekt, welches enthält:

- alle Eigenschaften des Objekts, das von [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming) zurückgegeben wird, außer dass alle `"auto"`-Werte durch berechnete Werte ersetzt werden, die möglicherweise vom Typ des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) abhängen.
- die folgenden zusätzlichen Eigenschaften:
  - `endTime`
    - : Eine `Zahl`, die die Endzeit des Effekts in Millisekunden ab dem Start des Effekts angibt. Dies ist gleich `activeDuration` plus `delay` und `endDelay`.
  - `activeDuration`
    - : Eine `Zahl`, die die gesamte Dauer in Millisekunden aller Iterationen des Effekts angibt. Dies ist gleich `duration` multipliziert mit `iterations` (oder null, wenn das Produkt {{jsxref("NaN")}} wäre).
  - `localTime`
    - : Eine `Zahl` oder `null`.

      Gibt die Länge der Zeit in Millisekunden an, die der Effekt gelaufen ist. Dies ist gleich der [`currentTime`](/de/docs/Web/API/Animation/currentTime) der zugehörigen Animation oder `null`, wenn der Effekt nicht mit einer Animation verbunden ist.

  - `progress`
    - : `null` oder eine `Zahl`.

      Gibt den Fortschritt des Effekts durch seine aktuelle Iteration an. Zu Beginn der `activeDuration` entspricht dies dem Bruchteil von `iterationStart`.

      Der Wert liegt typischerweise zwischen `0` und `1`, kann aber außerhalb dieses Bereichs liegen, abhängig vom Output der {{cssxref("easing-function")}} des Effekts. Zum Beispiel würde eine `cubic-bezier(0.3, 2, 0.6, 2)`-Funktion den Zeitfortschritt von `0.5` auf ungefähr `1.65` transformieren.

      Gibt `null` zurück, wenn der Effekt nicht mitten in einer Iteration ist, zum Beispiel weil der Effekt sich in den `delay`- oder `endDelay`-Perioden befindet, der Effekt beendet ist oder `localTime` `null` ist.

  - `currentIteration`
    - : `null` oder eine ganze `Zahl`.

      Gibt den Index der aktuellen Iteration an. Zu Beginn der `activeDuration` entspricht dies dem ganzzahligen Teil von `iterationStart`.

      Gibt `null` zurück, wenn immer `progress` `null` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
- [`Animation`](/de/docs/Web/API/Animation)
