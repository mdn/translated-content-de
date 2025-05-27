---
title: "Animation: overallProgress-Eigenschaft"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{APIRef("Web Animations")}}{{seecompattable}}

Die **`overallProgress`**-Eigenschaft, die nur lesbar ist und zur [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle gehört, gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation in Richtung ihres finalen Zustands angibt. Dies ist der Gesamtfortschritt über alle Iterationen der Animation hinweg, nicht bei jeder einzelnen Iteration.

`overallProgress` funktioniert konsistent bei allen Animationen, unabhängig vom Typ der [`timeline`](/de/docs/Web/API/AnimationTimeline).

## Wert

Eine Zahl zwischen `0` und `1`, oder `null`, wenn die Animation keine Zeitleiste hat, inaktiv ist oder noch nicht abgespielt wurde, oder wenn ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen Wert gesetzt ist, der keine Zeit darstellt.

Wenn die [`iterations`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations)-Eigenschaft der Animation auf `Infinity` gesetzt ist, oder wenn ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen negativen Wert gesetzt ist, wird `overallProgress` `0` zurückgeben.

Wenn die [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) der Animation auf `0` gesetzt ist, wird `overallProgress` `1` zurückgeben.

## Beispiele

### Anzeige eines Prozentfortschritts

Dieses Demo verwendet `overallProgress`, um eine "Prozentfortschritt"-Anzeige zu erzeugen, die auf dem Bildschirm angezeigt wird, während eine Animation läuft.

### HTML

Das HTML enthält ein {{htmlelement("button")}}, das gedrückt werden kann, um die Animation zu starten, ein {{htmlelement("p")}}-Element, in dem der Prozentfortschritt angezeigt wird, und ein {{htmlelement("div")}}, das animiert wird.

```html
<button>Run animation</button>
<p class="progress">Progress: 0%</p>
<div class="box"></div>
```

Das CSS des Demos bietet einige grundlegende Styles, die nicht wichtig sind, um zu verstehen, wie das JavaScript funktioniert, daher haben wir sie der Kürze halber ausgeblendet.

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

Im JavaScript beginnen wir damit, Referenzen zu den {{htmlelement("button")}}, {{htmlelement("p")}}, und {{htmlelement("div")}}-Elementen zu erhalten.

Wir erstellen dann:

- eine `animation`-Variable, die auf die Animation verweist, sobald wir sie erstellt haben
- ein [keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats)-Array
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

Als Nächstes fügen wir dem `<button>` einen `"click"`-Event-Listener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu, damit, wenn er gedrückt wird, es:

1. Die Animation startet, indem [`Element.animate()`](/de/docs/Web/API/Element/animate) verwendet wird. Dabei werden die zuvor definierten Keyframes und Optionen übergeben und die zurückgegebene [`Animation`](/de/docs/Web/API/Animation)-Instanz der `animation`-Variable zugewiesen.
2. Eine Funktion namens `updateProgress()` über die Methode [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ausführt, die das Anzeigen des Prozentfortschritts aktualisiert.

```js
btn.addEventListener("click", () => {
  // Animate the box
  animation = box.animate(keyframes, timingProps);
  // Start updating the progress percentage via rAF()
  requestAnimationFrame(updateProgress);
});
```

Nun definieren wir die Funktion `updateProgress()`. Diese fragt [`Animation.playState`](/de/docs/Web/API/Animation/playState) ab, um zu sehen, ob die Animation nicht abgeschlossen ist. Falls sie nicht abgeschlossen ist, wird der aktuelle Wert von `overallProgress` genommen, mit 100 multipliziert und das Ergebnis abgerundet, um es in eine ganze Prozentzahl umzurechnen. Dann wird der [`textContent`](/de/docs/Web/API/Node/textContent)-Wert des `<p>`-Elements damit aktualisiert. Anschließend wird `requestAnimationFrame(updateProgress)` erneut aufgerufen, um das Aktualisieren des Prozentfortschritts neu zu starten.

Wenn die Animation abgeschlossen ist, wird der Prozentfortschritt durch eine "Fertig!"-Nachricht ersetzt, und `requestAnimationFrame(updateProgress)` wird nicht erneut aufgerufen, wodurch die Aktualisierungen des Prozentfortschritts gestoppt werden.

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

{{ EmbedLiveSample("Anzeige eines Prozentfortschritts", "100%", 250) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, die Sie verwenden können, um Webseitenanimationen zu steuern.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
