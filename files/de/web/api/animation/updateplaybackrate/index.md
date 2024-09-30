---
title: "Animation: updatePlaybackRate() Methode"
short-title: updatePlaybackRate()
slug: Web/API/Animation/updatePlaybackRate
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Animations")}}

Die **`updatePlaybackRate()`** Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API)'s
[`Animation`](/de/docs/Web/API/Animation) Schnittstelle legt die Geschwindigkeit einer Animation fest, nachdem zunächst ihre Wiedergabeposition synchronisiert wurde.

In einigen Fällen kann eine Animation in einem separaten Thread oder Prozess ausgeführt werden und wird weiterhin aktualisiert, selbst wenn lang laufendes JavaScript den Haupt-Thread verzögert. In einem solchen Fall kann das direkte Festlegen der [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) auf der Animation dazu führen, dass die Wiedergabeposition der Animation springt, da ihre Wiedergabeposition auf dem Haupt-Thread von der Wiedergabeposition, an der sie derzeit ausgeführt wird, abweichen kann.

`updatePlaybackRate()` ist eine asynchrone Methode, die die Geschwindigkeit einer Animation einstellt, nachdem sie mit ihrer aktuellen Wiedergabeposition synchronisiert wurde. Dadurch wird sichergestellt, dass die resultierende Änderung der Geschwindigkeit keinen abrupten Sprung verursacht. Nach dem Aufruf von `updatePlaybackRate()` wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation _nicht_ sofort aktualisiert. Sie wird aktualisiert, sobald das [`ready`](/de/docs/Web/API/Animation/ready) Versprechen der Animation erfüllt ist.

## Syntax

```js-nolint
updatePlaybackRate(playbackRate)
```

### Parameter

- `playbackRate`
  - : Die neue Geschwindigkeit, die eingestellt werden soll. Dies kann eine positive Zahl sein (um die Animation zu beschleunigen oder zu verlangsamen), eine negative Zahl (um sie rückwärts abzuspielen) oder null (um die Animation effektiv anzuhalten).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Eine Geschwindigkeitsauswahlkomponente würde von einer reibungslosen Aktualisierung von `updatePlaybackRate()` profitieren, wie unten demonstriert:

```js
speedSelector.addEventListener("input", (evt) => {
  cartoon.updatePlaybackRate(parseFloat(evt.target.value));
  cartoon.ready.then(() => {
    console.log(`Playback rate set to ${cartoon.playbackRate}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) — liest die aktuelle Wiedergaberate aus oder stellt sie auf synchrone Weise ein.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) — kehrt die Wiedergaberate um und startet die Wiedergabe bei Bedarf neu.
- [`Animation`](/de/docs/Web/API/Animation) — enthält weitere Methoden und Eigenschaften, die zur Steuerung der Webseiten-Animation verwendet werden können.
