---
title: "Animation: overallProgress-Eigenschaft"
short-title: overallProgress
slug: Web/API/Animation/overallProgress
l10n:
  sourceCommit: 716e13680debe8e713d42bf9b29708c0f24ef03a
---

{{APIRef("Web Animations")}}{{seecompattable}}

Die schreibgeschützte **`overallProgress`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interfaces gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation in Richtung ihres abgeschlossenen Zustands anzeigt. Dies ist der Gesamtfortschritt über alle Iterationen der Animation hinweg, nicht in jeder einzelnen Iteration.

`overallProgress` funktioniert konsistent über alle Animationen hinweg, unabhängig vom Typ der [`timeline`](/de/docs/Web/API/AnimationTimeline).

## Wert

Eine Zahl zwischen `0` und `1`, oder `null`, wenn die Animation keine Timeline hat, inaktiv ist, noch nicht abgespielt wurde, oder wenn ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen Wert gesetzt ist, der keine Zeit darstellt.

Wenn die [`iterations`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#iterations)-Eigenschaft der Animation auf `Infinity` gesetzt ist oder ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf einen negativen Wert eingestellt ist, wird `overallProgress` den Wert `0` zurückgeben.

Wenn die [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#duration) der Animation auf `0` gesetzt ist, wird `overallProgress` den Wert `1` zurückgeben.

## Beispiele

### Anzeigen eines Prozentsatz-Fortschritts

Dieses Demo verwendet `overallProgress`, um eine Anzeige des "Prozentsatz-Fortschritts" zu erstellen, die auf dem Bildschirm angezeigt wird, während eine Animation läuft.

### HTML

Das HTML enthält ein {{htmlelement("button")}}, das gedrückt werden kann, um die Animation zu starten, ein {{htmlelement("p")}}-Element, in dem der Prozentsatz-Fortschritt angezeigt wird, und ein {{htmlelement("div")}}, das animiert wird.

```html
<button>Run animation</button>
<p class="progress">Progress: 0%</p>
<div class="box"></div>
```

Das CSS des Demos bietet einige rudimentäre Formatierungen, die für das Verständnis der Arbeitsweise des JavaScripts nicht wichtig sind. Daher haben wir es zur Kürze ausgeblendet.

```css hidden
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
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

Im JavaScript beginnen wir damit, Referenzen zu den {{htmlelement("button")}}, {{htmlelement("p")}}, und {{htmlelement("div")}}-Elementen abzurufen.

Wir erstellen dann:

- eine `animation`-Variable, die auf die Animation verweisen wird, sobald wir sie erstellt haben
- ein [keyframes](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats)-Array
- ein Options-Objekt, das Timing-Eigenschaften enthält.

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

Als nächstes fügen wir dem `<button>` einen `"click"`-Ereignislistener via [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu, sodass, wenn es gedrückt wird, es:

1. Die Animation mit [`Element.animate()`](/de/docs/Web/API/Element/animate) startet, wobei die zuvor definierten Keyframes und Optionen übergeben werden. Die zurückgegebene [`Animation`](/de/docs/Web/API/Animation)-Instanz wird der `animation`-Variable zugewiesen.
2. Eine Funktion namens `updateProgress()` über die Methode [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ausführt, die für die Aktualisierung der Prozentsatz-Anzeige zuständig ist.

```js
btn.addEventListener("click", () => {
  // Animate the box
  animation = box.animate(keyframes, timingProps);
  // Start updating the progress percentage via rAF()
  requestAnimationFrame(updateProgress);
});
```

Nun definieren wir die Funktion `updateProgress()`. Diese prüft [`Animation.playState`](/de/docs/Web/API/Animation/playState), um zu sehen, ob die Animation nicht abgeschlossen ist. Wenn sie nicht abgeschlossen ist, holen wir den aktuellen Wert von `overallProgress`, multiplizieren ihn mit 100 und runden das Ergebnis ab, um es in eine ganze Prozentzahl zu konvertieren. Dann aktualisieren wir den [`textContent`](/de/docs/Web/API/Node/textContent)-Wert des `<p>`-Elements damit. Wir rufen dann `requestAnimationFrame(updateProgress)` erneut auf, um die Prozent-Update-Schleife erneut auszuführen.

Wenn die Animation abgeschlossen ist, ersetzen wir den Prozentsatz-Fortschritt durch die Nachricht "Finished!" und rufen `requestAnimationFrame(updateProgress)` nicht mehr auf, sodass die Prozentsatz-Updates stoppen.

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

- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, mit denen Sie Seitenanimationen steuern können.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
