---
title: "Animation: overallProgress-Eigenschaft"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
l10n:
  sourceCommit: 0ee2e4af1d885177820a8fc27131caa5d800a0bd
---

{{APIRef("Web Animations")}}

Die **`overallProgress`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation in Richtung ihres Endzustands angibt. Dies ist der Gesamtfortschritt über alle Iterationen der Animation hinweg, nicht jede einzelne Iteration.

`overallProgress` funktioniert konsistent über alle Animationen hinweg, unabhängig von der Art der [`timeline`](/de/docs/Web/API/AnimationTimeline).

## Wert

Eine Zahl zwischen `0` und `1`, oder `null`, wenn die Animation keine Timeline hat, inaktiv ist oder noch nicht abgespielt wurde, oder wenn ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen Nicht-Zeit-Wert gesetzt ist.

Falls die [`iterations`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations)-Eigenschaft der Animation auf `Infinity` gesetzt ist oder ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen negativen Wert gesetzt ist, wird `overallProgress` `0` zurückgeben.

Wenn die [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) der Animation auf `0` gesetzt ist, wird `overallProgress` `1` zurückgeben.

## Beispiele

### Anzeige eines prozentualen Fortschritts

Dieses Beispiel verwendet `overallProgress`, um eine "Prozentfortschritt"-Anzeige zu erstellen, die beim Ausführen einer Animation auf dem Bildschirm angezeigt wird.

### HTML

Das HTML enthält einen {{htmlelement("button")}}, der gedrückt werden muss, um die Animation zu starten, ein {{htmlelement("p")}}-Element, in dem der prozentuale Fortschritt angezeigt wird, und ein {{htmlelement("div")}}, das animiert wird.

```html
<button>Run animation</button>
<p class="progress">Progress: 0%</p>
<div class="box"></div>
```

Das CSS des Beispiels bietet ein grundlegendes Styling, das nicht wichtig für das Verständnis des JavaScript ist, daher haben wir es der Kürze halber ausgeblendet.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.progress {
  font-weight: bold;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 40px 20px;
  border: 10px solid black;
  background: lightseagreen;
  margin: 0 auto;
}
```

### JavaScript

Im JavaScript beginnen wir damit, Referenzen zu den {{htmlelement("button")}}, {{htmlelement("p")}} und {{htmlelement("div")}}-Elementen zu erhalten.

Wir erstellen dann:

- eine `animation`-Variable, die auf die Animation verweisen wird, sobald wir sie erstellt haben,
- ein [keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats)-Array,
- ein Optionsobjekt, das Zeitsteuerungseigenschaften enthält.

```js
const btn = document.querySelector("button");
const progress = document.querySelector(".progress");
const box = document.querySelector(".box");

let animation;

const keyframes = [{ rotate: "0deg" }, { rotate: "360deg" }];

const timingProps = {
  duration: 3000,
  iterations: 1,
};
```

Als Nächstes fügen wir dem `<button>` einen `"click"`-Ereignislistener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu, sodass beim Drücken Folgendes passiert:

1. Die Animation wird mittels [`Element.animate()`](/de/docs/Web/API/Element/animate) gestartet, wobei die zuvor definierten Keyframes und Optionen übergeben und die zurückgegebene [`Animation`](/de/docs/Web/API/Animation)-Instanz der `animation`-Variable zugewiesen werden.
2. Eine Funktion namens `updateProgress()` wird über die Methode [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ausgeführt, die die Aktualisierung der Prozentfortschrittsanzeige übernimmt.

```js
btn.addEventListener("click", () => {
  // Animate the box
  animation = box.animate(keyframes, timingProps);
  // Start updating the progress percentage via rAF()
  requestAnimationFrame(updateProgress);
});
```

Definieren wir nun die `updateProgress()`-Funktion. Diese fragt [`Animation.playState`](/de/docs/Web/API/Animation/playState) ab, um zu sehen, ob die Animation noch nicht beendet ist. Wenn sie nicht beendet ist, holen wir den aktuellen Wert von `overallProgress`, multiplizieren ihn mit 100 und runden das Ergebnis ab, um es in eine ganze Prozentzahl umzuwandeln, dann aktualisieren wir den [`textContent`](/de/docs/Web/API/Node/textContent)-Wert des `<p>`-Elements damit. Anschließend rufen wir `requestAnimationFrame(updateProgress)` erneut auf, um die Fortschrittsaktualisierung erneut auszuführen.

Wenn die Animation beendet ist, ersetzen wir den Prozentfortschritt durch eine "Fertig!"-Nachricht und rufen `requestAnimationFrame(updateProgress)` nicht erneut auf, sodass die Fortschrittsaktualisierungen eingestellt werden.

```js
function updateProgress() {
  // Check if the animation is finished
  if (animation.playState !== "finished") {
    // Convert overallProgress to a whole number percentage
    const progressPercentage = Math.floor(animation.overallProgress * 100);
    // Update the progress paragraph with the percentage
    progress.textContent = `Progress: ${progressPercentage}%`;
    // Only request the next frame if the animation is not finished
    requestAnimationFrame(updateProgress);
  } else {
    progress.textContent = "Finished!";
  }
}
```

### Ergebnis

Die Ausgabe sieht so aus. Versuchen Sie, den Button zu drücken, um die Animation und den zugehörigen Fortschrittsindikator auszuführen.

{{ EmbedLiveSample("Displaying a percentage progress", "100%", 250) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
