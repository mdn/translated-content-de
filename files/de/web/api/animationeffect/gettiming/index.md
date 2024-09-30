---
title: "AnimationEffect: getTiming() Methode"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ APIRef("Web Animations") }}

Die Methode `AnimationEffect.getTiming()` der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle gibt ein Objekt zurück, das die Timing-Eigenschaften des Animationseffekts enthält.

> [!NOTE]
> Einige der von `getTiming()` zurückgegebenen Timing-Eigenschaften können den Platzhalterwert `"auto"` annehmen. Zur Ermittlung aufgelöster Werte für Timing-Berechnungen verwenden Sie stattdessen [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming).
>
> In Zukunft könnten `"auto"` oder ähnliche Werte zu den Typen von weiteren Timing-Eigenschaften hinzugefügt werden, und neue Typen von [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) könnten `"auto"` auf unterschiedliche Werte auflösen.

## Syntax

```js-nolint
getTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `delay`

  - : Die `number` der Millisekunden Verzögerung vor dem Start des Effekts.

    (Siehe auch {{cssxref("animation-delay")}}.)

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"` oder `"alternate-reverse"`.

    Gibt an, ob der Effekt vorwärts (`"normal"`), rückwärts (`"reverse"`) ausgeführt wird, die Richtung nach jeder Iteration wechselt (`"alternate"`) oder rückwärts ausgeführt wird und die Richtung nach jeder Iteration wechselt (`"alternate-reverse"`).

    (Siehe auch {{cssxref("animation-direction")}}.)

- `duration`

  - : Eine `number` von Millisekunden oder der `string` `"auto"`.

    Gibt an, wie lange es dauert, eine Iteration der Animation abzuschließen.

    Die Bedeutung von `"auto"` kann je nach Effektart variieren; für [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` dasselbe wie `0`.

    (Siehe auch {{cssxref("animation-duration")}}.)

- `easing`

  - : Ein `string`, der eine {{cssxref("easing-function")}} darstellt, die die Änderungsrate des Effekts über die Zeit beschreibt.

    (Siehe auch {{cssxref("animation-timing-function")}}.)

- `endDelay`

  - : Die `number` der Millisekunden Verzögerung nach dem Ende des Effekts.

    Dies ist hauptsächlich bei der Sequenzierung von Animationen, die auf der Endzeit einer anderen Animation basieren, von Nutzen.

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, `"both"` oder `"auto"`.

    Gibt an, ob der Effekt von seinen Ziel(en) vor dem Abspielen (`"backwards"`) reflektiert wird, nach Beendigung des Effekts beibehalten wird (`"forwards"`), `"both"` oder keines von beidem (`"none"`).

    Die Bedeutung von `"auto"` kann je nach Effektart variieren; für [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` dasselbe wie `"none"`.

    (Siehe auch {{cssxref("animation-fill-mode")}}.)

- `iterations`

  - : Die `number` der Wiederholungen des Effekts. Ein Wert von {{jsxref("Infinity")}} gibt an, dass der Effekt unendlich oft wiederholt wird.

    (Siehe auch {{cssxref("animation-iteration-count")}}.)

- `iterationStart`
  - : Eine `number`, die angibt, an welchem Punkt in der Iteration der Effekt beginnt. Zum Beispiel würde ein Effekt mit einem `iterationStart` von 0,5 und 2 `iterations` in der Mitte seiner ersten Iteration starten und in der Mitte einer dritten Iteration enden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
