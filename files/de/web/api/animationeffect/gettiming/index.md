---
title: "AnimationEffect: getTiming() Methode"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die `AnimationEffect.getTiming()`-Methode der {{domxref("AnimationEffect")}}-Schnittstelle gibt ein Objekt zurück, das die Timing-Eigenschaften für den Animationseffekt enthält.

> [!NOTE]
> Einige der von `getTiming()` zurückgegebenen Timing-Eigenschaften können den Platzhalterwert `"auto"` annehmen. Um aufgelöste Werte für Timing-Berechnungen zu erhalten, verwenden Sie stattdessen {{domxref("AnimationEffect.getComputedTiming()")}}.
>
> In Zukunft könnten `"auto"` oder ähnliche Werte zu den Typen weiterer Timing-Eigenschaften hinzugefügt werden, und neue Arten von {{domxref("AnimationEffect")}} könnten `"auto"` zu unterschiedlichen Werten auflösen.

## Syntax

```js-nolint
getTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `delay`

  - : Die `number` von Millisekunden Verzögerung vor dem Start des Effekts.

    (Siehe auch {{cssxref("animation-delay")}}.)

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"` oder `"alternate-reverse"`.

    Gibt an, ob der Effekt vorwärts (`"normal"`), rückwärts (`"reverse"`) läuft, die Richtung nach jeder Iteration wechselt (`"alternate"`) oder rückwärts läuft und die Richtung nach jeder Iteration wechselt (`"alternate-reverse"`).

    (Siehe auch {{cssxref("animation-direction")}}.)

- `duration`

  - : Eine Anzahl von Millisekunden oder der `string` `"auto"`.

    Gibt die Zeit an, die eine Iteration der Animation benötigt, um abgeschlossen zu werden.

    Die Bedeutung von `"auto"` kann je nach Effektart unterschiedlich sein; für {{domxref("KeyframeEffect")}} entspricht `"auto"` dem Wert `0`.

    (Siehe auch {{cssxref("animation-duration")}}.)

- `easing`

  - : Ein `string`, der eine {{cssxref("easing-function")}} repräsentiert und die Änderungsrate des Effekts über die Zeit beschreibt.

    (Siehe auch {{cssxref("animation-timing-function")}}.)

- `endDelay`

  - : Die `number` von Millisekunden Verzögerung nach dem Ende des Effekts.

    Dies ist vor allem nützlich, wenn Animationen basierend auf der Endzeit einer anderen Animation sequenziert werden.

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, "`both`" oder `"auto"`.

    Gibt an, ob der Effekt vor dem Abspielen von seinem Ziel/die Ziele widergespiegelt wird (`"backwards"`), nach Abschluss des Effekts beibehalten wird (`"forwards"`), `"both"` oder weder (`"none"`).

    Die Bedeutung von `"auto"` kann je nach Effektart unterschiedlich sein; für {{domxref("KeyframeEffect")}} entspricht `"auto"` dem Wert `"none"`.

    (Siehe auch {{cssxref("animation-fill-mode")}}.)

- `iterations`

  - : Die `number` der Wiederholungen des Effekts. Ein Wert von {{jsxref("Infinity")}} zeigt an, dass der Effekt unbegrenzt wiederholt wird.

    (Siehe auch {{cssxref("animation-iteration-count")}}.)

- `iterationStart`
  - : Eine `number`, die angibt, an welchem Punkt in der Iteration der Effekt beginnt. Beispielsweise würde ein Effekt mit einem `iterationStart` von 0.5 und 2 `iterations` in der Mitte seiner ersten Iteration beginnen und in der Mitte einer dritten Iteration enden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
