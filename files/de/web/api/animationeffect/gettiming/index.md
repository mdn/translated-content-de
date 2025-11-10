---
title: "AnimationEffect: getTiming() Methode"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

Die `AnimationEffect.getTiming()` Methode der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle gibt ein Objekt zurück, das die Timing-Eigenschaften für den Animationseffekt enthält.

> [!NOTE]
> Einige der durch `getTiming()` zurückgegebenen Timing-Eigenschaften können den Platzhalterwert `"auto"` annehmen. Um aufgelöste Werte für Timing-Berechnungen zu erhalten, verwenden Sie stattdessen [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming).
>
> In Zukunft könnten `"auto"` oder ähnliche Werte zu den Typen weiterer Timing-Eigenschaften hinzugefügt werden, und neue Typen von [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) könnten `"auto"` in unterschiedliche Werte auflösen.

## Syntax

```js-nolint
getTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `delay`

  - : Die Anzahl (`number`) der Millisekunden Verzögerung vor dem Beginn des Effekts.

    (Siehe auch {{cssxref("animation-delay")}}.)

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"`, oder `"alternate-reverse"`.

    Gibt an, ob der Effekt vorwärts (`"normal"`), rückwärts (`"reverse"`) läuft, die Richtung nach jeder
    Iteration wechselt (`"alternate"`) oder rückwärts läuft und die Richtung nach jeder Iteration
    wechselt (`"alternate-reverse"`).

    (Siehe auch {{cssxref("animation-direction")}}.)

- `duration`

  - : Eine Anzahl (`number`) Millisekunden oder der `string` `"auto"`.

    Gibt die Zeit an, die eine Iteration der Animation benötigt, um abgeschlossen zu werden.

    Die Bedeutung von `"auto"` kann je nach Effektart variieren; für [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` dasselbe wie `0`.

    (Siehe auch {{cssxref("animation-duration")}}.)

- `easing`

  - : Ein `string`, der eine {{cssxref("easing-function")}} darstellt und die Änderungsrate des Effekts über die Zeit beschreibt.

    (Siehe auch {{cssxref("animation-timing-function")}}.)

- `endDelay`

  - : Die Anzahl (`number`) der Millisekunden Verzögerung nach dem Ende des Effekts.

    Dies ist hauptsächlich von Nutzen, wenn Animationen basierend auf der Endzeit einer anderen Animation sequenziert werden.

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, `"both"`, oder `"auto"`.

    Gibt an, ob der Effekt von seinen Zielen vor dem Abspielen reflektiert wird (`"backwards"`),
    nach Abschluss des Effekts beibehalten wird (`"forwards"`), `"both"`, oder
    keines von beiden (`"none"`).

    Die Bedeutung von `"auto"` kann je nach Effektart variieren; für
    [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` dasselbe wie `"none"`.

    (Siehe auch {{cssxref("animation-fill-mode")}}.)

- `iterations`

  - : Die Anzahl (`number`) der Wiederholungen des Effekts. Ein Wert von {{jsxref("Infinity")}} gibt an,
    dass der Effekt unendlich oft wiederholt wird.

    (Siehe auch {{cssxref("animation-iteration-count")}}.)

- `iterationStart`
  - : Eine Zahl (`number`), die angibt, an welchem Punkt in der Iteration der Effekt beginnt. Zum Beispiel würde ein Effekt mit einem `iterationStart` von 0,5 und 2 `iterations` zur Hälfte durch seine erste Iteration beginnen und in der Mitte einer dritten Iteration enden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
