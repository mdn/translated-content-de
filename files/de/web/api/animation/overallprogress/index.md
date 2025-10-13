---
title: "Animation: overallProgress-Eigenschaft"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{APIRef("Web Animations")}}

Die schreibgeschützte **`overallProgress`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamterfolg der Animation zu ihrem Endzustand angibt. Dies ist der Gesamtfortschritt über alle Iterationen der Animation hinweg und nicht jeder einzelnen Iteration.

`overallProgress` funktioniert konsistent über alle Animationen hinweg, unabhängig vom Typ der [`timeline`](/de/docs/Web/API/AnimationTimeline).

## Wert

Eine Zahl zwischen `0` und `1`, oder `null`, wenn die Animation keine Zeitleiste hat, inaktiv ist oder noch nicht abgespielt wurde, oder wenn ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen Nicht-Zeitwert gesetzt ist.

Wenn die [`iterations`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations)-Eigenschaft der Animation auf `Infinity` gesetzt ist oder ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen negativen Wert eingestellt ist, gibt `overallProgress` `0` zurück.

Wenn die [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) der Animation auf `0` gesetzt ist, gibt `overallProgress` `1` zurück.

## Beispiele

### Anzeigen eines prozentualen Fortschritts

Dieses Demo verwendet `overallProgress`, um eine "Prozentfortschritts"-Anzeige zu erstellen, die während des Ablaufs einer Animation auf dem Bildschirm angezeigt wird.

### HTML

Das HTML enthält einen {{htmlelement("button")}}, um die Animation zu starten, ein {{htmlelement("p")}}-Element, in dem der Prozentfortschritt angezeigt wird, und ein {{htmlelement("div")}}, das animiert wird.

```html
<button>Run animation</button>
<p class="progress">Progress: 0%</p>
<div class="box"></div>
```

Das CSS des Demos bietet grundlegende Stilgestaltungen, die nicht wichtig sind, um zu verstehen, wie das JavaScript funktioniert. Daher haben wir es der Kürze wegen ausgeblendet.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
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

Im JavaScript beginnen wir damit, Referenzen zu den {{htmlelement("button")}}, {{htmlelement("p")}} und {{htmlelement("div")}}-Elementen zu erfassen.

Dann erstellen wir:

- eine Variable `animation`, die auf die Animation verweist, sobald wir sie erstellt haben
- ein [keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats)-Array
- ein Optionsobjekt, das Timing-Eigenschaften enthält.

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

Als Nächstes fügen wir einen `"click"`-Ereignislistener zum `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu, sodass, wenn er gedrückt wird:

1. Die Animation mit [`Element.animate()`](/de/docs/Web/API/Element/animate) gestartet wird, indem die zuvor definierten Keyframes und Optionen übergeben werden, und die zurückgegebene [`Animation`](/de/docs/Web/API/Animation)-Instanz der Variable `animation` zugewiesen wird.
2. Eine Funktion namens `updateProgress()` über die Methode [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ausführt, die das Aktualisieren der Prozentprozessanzeige behandelt.

```js
btn.addEventListener("click", () => {
  // Animate the box
  animation = box.animate(keyframes, timingProps);
  // Start updating the progress percentage via rAF()
  requestAnimationFrame(updateProgress);
});
```

Definieren wir nun die `updateProgress()`-Funktion. Sie fragt [`Animation.playState`](/de/docs/Web/API/Animation/playState) ab, um festzustellen, ob die Animation nicht beendet ist. Wenn sie nicht beendet ist, erfassen wir den aktuellen Wert von `overallProgress`, multiplizieren ihn mit 100 und runden das Ergebnis ab, um es in eine ganze Prozentzahl umzuwandeln. Dann aktualisieren wir den [`textContent`](/de/docs/Web/API/Node/textContent)-Wert des `<p>`-Elements. Wir rufen dann `requestAnimationFrame(updateProgress)` erneut auf, um die Prozentsatzaktualisierung erneut auszuführen.

Wenn die Animation beendet ist, ersetzen wir den Prozentfortschritt durch die Nachricht "Fertig!" und rufen `requestAnimationFrame(updateProgress)` nicht auf, sodass die Prozentsatzaktualisierungen gestoppt werden.

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

Die Ausgabe sieht folgendermaßen aus. Versuchen Sie, den Button zu drücken, um die Animation und den zugehörigen Fortschrittsanzeiger zu sehen.

{{ EmbedLiveSample("Displaying a percentage progress", "100%", 250) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
