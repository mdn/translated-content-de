---
title: "Animation: updatePlaybackRate()-Methode"
short-title: updatePlaybackRate()
slug: Web/API/Animation/updatePlaybackRate
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Animations")}}

Die **`updatePlaybackRate()`**-Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle setzt die Geschwindigkeit einer Animation, nachdem zunächst ihre Wiedergabeposition synchronisiert wurde.

In manchen Fällen kann eine Animation in einem separaten Thread oder Prozess laufen und wird weiterhin aktualisiert, selbst wenn langlaufendes JavaScript den Haupt-Thread blockiert. In solchen Fällen kann das direkte Setzen der [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation dazu führen, dass die Wiedergabeposition der Animation springt, da ihre Wiedergabeposition im Haupt-Thread von der aktuellen Wiedergabeposition abweichen kann.

`updatePlaybackRate()` ist eine asynchrone Methode, die die Geschwindigkeit einer Animation nach der Synchronisierung mit ihrer aktuellen Wiedergabeposition festlegt, um sicherzustellen, dass die resultierende Änderung der Geschwindigkeit keinen abrupten Sprung erzeugt. Nach dem Aufruf von `updatePlaybackRate()` wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation _nicht_ sofort aktualisiert. Sie wird aktualisiert, sobald das [`ready`](/de/docs/Web/API/Animation/ready)-Versprechen der Animation aufgelöst wird.

## Syntax

```js-nolint
updatePlaybackRate(playbackRate)
```

### Parameter

- `playbackRate`
  - : Die neue zu setzende Geschwindigkeit. Dies kann eine positive Zahl sein (um die Animation zu beschleunigen oder zu verlangsamen), eine negative Zahl (um sie rückwärts abzuspielen) oder Null (um die Animation effektiv zu pausieren).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Eine Geschwindigkeitsauswahl-Komponente würde von einer sanften Aktualisierung von `updatePlaybackRate()` profitieren, wie unten demonstriert:

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
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) — lesen Sie die aktuelle Wiedergabegeschwindigkeit aus oder setzen Sie sie auf synchronisierte Weise.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) — kehrt die Wiedergabegeschwindigkeit um und startet die Wiedergabe bei Bedarf neu.
- [`Animation`](/de/docs/Web/API/Animation) — enthält weitere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
