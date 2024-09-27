---
title: "AnimationEffect: Methode getTiming()"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ APIRef("Web Animations") }}

Die `AnimationEffect.getTiming()`-Methode der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)-Schnittstelle gibt ein Objekt zurück, das die Timing-Eigenschaften für den Animationseffekt enthält.

> [!NOTE]
> Einige der von `getTiming()` zurückgegebenen Timing-Eigenschaften können den Platzhalterwert `"auto"` annehmen. Um aufgelöste Werte für Timing-Berechnungen zu erhalten, verwenden Sie stattdessen [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming).
>
> In Zukunft könnten `"auto"` oder ähnliche Werte zu den Typen weiterer Timing-Eigenschaften hinzugefügt werden, und neue Arten von [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) könnten `"auto"` in unterschiedliche Werte auflösen.

## Syntax

```js-nolint
getTiming()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `delay`

  - : Die `number` Anzahl von Millisekunden Verzögerung vor Beginn des Effekts.

    (Siehe auch {{cssxref("animation-delay")}}.)

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"` oder `"alternate-reverse"`.

    Gibt an, ob der Effekt vorwärts (`"normal"`), rückwärts (`"reverse"`) läuft, nach jedem Durchlauf die Richtung wechselt (`"alternate"`), oder rückwärts läuft und nach jedem Durchlauf die Richtung wechselt (`"alternate-reverse"`).

    (Siehe auch {{cssxref("animation-direction")}}.)

- `duration`

  - : Eine `number` Anzahl von Millisekunden oder der `string` `"auto"`.

    Gibt an, wie lange eine Wiederholung der Animation benötigt, um abgeschlossen zu werden.

    Die Bedeutung von `"auto"` kann je nach Effektart unterschiedlich sein; für [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` gleichbedeutend mit `0`.

    (Siehe auch {{cssxref("animation-duration")}}.)

- `easing`

  - : Ein `string`, der eine {{cssxref("easing-function")}} darstellt und die Rate der Änderung des Effekts über die Zeit beschreibt.

    (Siehe auch {{cssxref("animation-timing-function")}}.)

- `endDelay`

  - : Die `number` Anzahl von Millisekunden Verzögerung nach dem Ende des Effekts.

    Dies ist hauptsächlich nützlich, wenn Animationen basierend auf der Endzeit einer anderen Animation sequenziert werden.

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, `"both"` oder `"auto"`.

    Gibt an, ob der Effekt vor dem Abspielen von seinen Zielobjekten reflektiert wird (`"backwards"`), nach Abschluss des Effekts beibehalten wird (`"forwards"`), `"both"` oder weder noch (`"none"`).

    Die Bedeutung von `"auto"` kann je nach Effektart unterschiedlich sein; für [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) ist `"auto"` gleichbedeutend mit `"none"`.

    (Siehe auch {{cssxref("animation-fill-mode")}}.)

- `iterations`

  - : Die `number` Anzahl der Wiederholungen des Effekts. Ein Wert von {{jsxref("Infinity")}} gibt an, dass der Effekt unbegrenzt oft wiederholt wird.

    (Siehe auch {{cssxref("animation-iteration-count")}}.)

- `iterationStart`
  - : Eine `number`, die angibt, zu welchem Zeitpunkt in der Iteration der Effekt beginnt. Beispielsweise würde ein Effekt mit einem `iterationStart` von 0.5 und 2 `iterations` in der Mitte seiner ersten Iteration beginnen und in der Mitte einer dritten Iteration enden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationEffect`](/de/docs/Web/API/AnimationEffect)
