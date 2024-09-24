---
title: "AnimationEffect: getComputedTiming()-Methode"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die `getComputedTiming()`-Methode der {{domxref("AnimationEffect")}}-Schnittstelle gibt die berechneten Timing-Eigenschaften für diesen Animationseffekt zurück.

> [!NOTE]
> Diese Werte sind vergleichbar mit den berechneten Stilen eines Elements, die mit `window.getComputedStyle(elem)` zurückgegeben werden.

## Syntax

```js-nolint
getComputedTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das enthält:

- alle Eigenschaften des Objekts, das von {{domxref("AnimationEffect.getTiming()")}} zurückgegeben wird, außer dass alle `"auto"`-Werte durch berechnete Werte ersetzt werden, die vom Typ des {{domxref("AnimationEffect")}} abhängen können.
- die folgenden zusätzlichen Eigenschaften:

  - `endTime`
    - : Eine `number`, die die Endzeit des Effekts in Millisekunden ab dem Start des Effekts angibt. Dies ist gleich `activeDuration` plus `delay` und `endDelay`.
  - `activeDuration`
    - : Eine `number`, die die Gesamtdauer in Millisekunden aller Iterationen des Effekts angibt. Dies ist gleich `duration` multipliziert mit `iterations` (oder null, wenn dieses Produkt {{jsxref("NaN")}} wäre).
  - `localTime`
    - : Eine `number` oder `null`.

      Gibt die Dauer in Millisekunden an, die der Effekt gelaufen ist. Dies entspricht der {{domxref("Animation.currentTime","currentTime")}} der zugeordneten Animation oder `null`, wenn der Effekt nicht mit einer Animation verbunden ist.

  - `progress`
    - : `null` oder eine `number`, mindestens `0` und kleiner als `1`.

      Gibt den Fortschritt des Effekts durch seine aktuelle Iteration an. Zu Beginn der `activeDuration` entspricht dies dem Bruchteilsteil von `iterationStart`.

      Gibt `null` zurück, wenn der Effekt nicht mitten in einer Iteration ist, z. B. weil der Effekt in den `delay`- oder `endDelay`-Perioden ist, der Effekt beendet ist oder `localTime` `null` ist.

  - `currentIteration`
    - : `null` oder eine ganze `number`.

      Gibt den Index der aktuellen Iteration an. Zu Beginn der `activeDuration` entspricht dies dem ganzzahligen Teil von `iterationStart`.

      Gibt `null` zurück, wann immer `progress` `null` ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
