---
title: "Animation: updatePlaybackRate() Methode"
short-title: updatePlaybackRate()
slug: Web/API/Animation/updatePlaybackRate
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Animations")}}

Die **`updatePlaybackRate()`** Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API)'s
{{domxref("Animation")}}-Schnittstelle legt die Geschwindigkeit einer Animation fest, nachdem zunächst die Wiedergabeposition synchronisiert wurde.

In einigen Fällen kann eine Animation auf einem separaten Thread oder Prozess laufen und wird weiterhin aktualisiert, auch wenn langlaufendes JavaScript den Hauptthread verzögert. In einem solchen Fall kann das direkte Setzen der {{domxref("Animation.playbackRate", "playbackRate")}} bei der Animation dazu führen, dass die Wiedergabeposition der Animation springt, da ihre Wiedergabeposition auf dem Hauptthread von der Position, an der sie derzeit läuft, abweichen kann.

`updatePlaybackRate()` ist eine asynchrone Methode, die die Geschwindigkeit einer Animation festlegt, nachdem sie mit ihrer aktuellen Wiedergabeposition synchronisiert wurde, um sicherzustellen, dass die resultierende Geschwindigkeitsänderung keinen plötzlichen Sprung verursacht. Nach dem Aufruf von `updatePlaybackRate()` wird die {{domxref("Animation.playbackRate", "playbackRate")}} der Animation _nicht_ sofort aktualisiert. Sie wird aktualisiert, sobald das {{domxref("Animation.ready", "ready")}}-Versprechen der Animation erfüllt ist.

## Syntax

```js-nolint
updatePlaybackRate(playbackRate)
```

### Parameter

- `playbackRate`
  - : Die neue Geschwindigkeit, die festgelegt werden soll. Dies kann eine positive Zahl sein (um die Animation zu beschleunigen oder zu verlangsamen), eine negative Zahl (um sie rückwärts laufen zu lassen) oder null (um die Animation effektiv anzuhalten).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Eine Geschwindigkeitsauswahlkomponente würde von einer reibungslosen Aktualisierung durch
`updatePlaybackRate()` profitieren, wie im Folgenden demonstriert:

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
- {{domxref("Animation.playbackRate")}} — lesen Sie die aktuelle Wiedergaberate zurück oder legen Sie diese auf synchrone Weise fest.
- {{domxref("Animation.reverse()")}} — invertiert die Wiedergaberate und startet die Wiedergabe bei Bedarf neu.
- {{domxref("Animation")}} — enthält weitere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
