---
title: CSS und JavaScript-Animationsleistung
slug: Web/Performance/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS-{{cssxref("transition", "Transitions")}}/{{cssxref("animation", "Animations")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Transitions und -Animations

Sowohl CSS-Transitions als auch -Animations können zur Erstellung von Animationen verwendet werden. Sie haben jeweils ihre eigenen Anwendungsfälle:

- CSS-{{cssxref("transition", "Transitions")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem Endzustand des CSS zu ermöglichen, z.B. zwischen einer Ruhestellung eines Buttons und einem Hover-Zustand. Selbst wenn sich ein Element mitten in einer Transition befindet, startet die neue Transition sofort vom aktuellen Stil, anstatt zum Endzustand des CSS zu springen. Weitere Details finden Sie unter [CSS-Transitions verwenden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).
- CSS-{{cssxref("animation", "Animations")}} hingegen ermöglichen es Entwicklern, Animationen zwischen einem Satz von Anfangs- und Endwerten von Eigenschaften zu erstellen, anstatt zwischen zwei Zuständen. CSS-Animations bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Schlüsselbildern, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben. Weitere Informationen finden Sie unter [CSS-Animations verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

In Bezug auf die Leistung gibt es keinen Unterschied zwischen der Implementierung einer Animation mit CSS-Transitions oder CSS-Animations. Beide werden in diesem Artikel unter demselben CSS-basierten Dach zusammengefasst.

## requestAnimationFrame

Die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) API bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Callback-Funktion der Methode wird vom Browser vor dem nächsten Neuzeichnen bei jedem Frame aufgerufen. Im Vergleich zu [`setTimeout()`](/de/docs/Web/API/SetTimeout)/[`setInterval()`](/de/docs/Web/API/SetInterval), die einen spezifischen Verzögerungsparameter benötigen, ist `requestAnimationFrame()` weitaus effizienter. Entwickler können Animationen erstellen, indem sie jedes Mal, wenn die Schleife aufgerufen wird, den Stil eines Elements ändern (oder das Canvas neu zeichnen oder was auch immer).

> [!NOTE]
> Wie CSS-Transitions und -Animations pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund verschoben wird.

Für weitere Details lesen Sie [animieren mit JavaScript von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Transitions vs. requestAnimationFrame

Tatsache ist, dass in den meisten Fällen die Leistung von CSS-basierten Animationen fast die gleiche ist wie die von JavaScript-Animationen – zumindest in Firefox. Einige JavaScript-basierte Bibliotheken wie [GSAP](https://gsap.com/) und [Velocity.JS](http://velocityjs.org/) behaupten sogar, dass sie in der Lage sind, bessere Leistung als [native CSS-Transitions/-Animations](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) zu erreichen. Dies kann darauf zurückzuführen sein, dass CSS-Transitions/-Animations die Elementstile im Haupt-UI-Thread vor jedem Neuzeichenereignis neu abtasten, was fast dasselbe ist wie das neu abtasten von Elementstilen über einen `requestAnimationFrame()`-Callback, der ebenfalls vor dem nächsten Neuzeichnen ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread erfolgen, gibt es keinen Unterschied hinsichtlich der Leistung.

In diesem Abschnitt führen wir Sie durch einen Leistungstest mit Firefox, um zu sehen, welche Animationsmethode insgesamt besser zu sein scheint.

### Aktivieren der FPS-Tools

Bevor Sie das Beispiel durchgehen, aktivieren Sie zuerst die FPS-Tools, um die aktuelle Bildrate zu sehen:

1. Geben Sie in der URL-Leiste _about:config_ ein; klicken Sie auf die Schaltfläche `Ich werde vorsichtig sein, versprochen!`, um den Konfigurationsbildschirm zu betreten.
   ![Warnbildschirm, dass das Ändern von Einstellungen riskant sein kann, mit einem Button, um Risiken zu akzeptieren.](pic1.png)
2. Suchen Sie in der Suchleiste nach der `layers.acceleration.draw-fps`-Einstellung.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Nun sehen Sie drei kleine violette Boxen in der oberen linken Ecke des Firefox-Fensters. Die erste Box repräsentiert die FPS.
   ![Das Eingeben des Suchbegriffs filtert die Optionen. Nur die layers.acceleration.draw-fps-Einstellung wird angezeigt und ist auf true gesetzt. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers und überlagern dessen UI.](pic2.png)

### Durchführung des Leistungstests

Anfangs im unten gezeigten Test werden insgesamt 1000 {{htmlelement("div")}}-Elemente durch CSS-Animation transformiert.

```js
const boxes = [];
const button = document.getElementById("toggle-button");
const boxContainer = document.getElementById("box-container");
const animationType = document.getElementById("type");

// create boxes
for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.classList.add("css-animation");
  div.classList.add("box");
  boxContainer.appendChild(div);
  boxes.push(div.style);
}

let toggleStatus = true;
let rafId;
button.addEventListener("click", () => {
  if (toggleStatus) {
    animationType.textContent = " requestAnimationFrame";
    for (const child of boxContainer.children) {
      child.classList.remove("css-animation");
    }
    rafId = window.requestAnimationFrame(animate);
  } else {
    window.cancelAnimationFrame(rafId);
    animationType.textContent = " CSS animation";
    for (const child of boxContainer.children) {
      child.classList.add("css-animation");
    }
  }
  toggleStatus = !toggleStatus;
});

const duration = 6000;
const translateX = 500;
const rotate = 360;
const scale = 1.4 - 0.6;
let start;
function animate(time) {
  if (!start) {
    start = time;
    rafId = window.requestAnimationFrame(animate);
    return;
  }

  const progress = (time - start) / duration;
  if (progress < 2) {
    let x = progress * translateX;
    let transform;
    if (progress >= 1) {
      x = (2 - progress) * translateX;
      transform = `translateX(${x}px) rotate(${
        (2 - progress) * rotate
      }deg) scale(${0.6 + (2 - progress) * scale})`;
    } else {
      transform = `translateX(${x}px) rotate(${progress * rotate}deg) scale(${
        0.6 + progress * scale
      })`;
    }

    for (const box of boxes) {
      box.transform = transform;
    }
  } else {
    start = null;
  }
  rafId = window.requestAnimationFrame(animate);
}
```

```html hidden
<div id="header">
  <button id="toggle-button">Toggle</button>
  <span id="type">CSS Animation</span>
</div>
<div id="box-container"></div>
```

```css hidden
#header {
  position: sticky;
  top: 0.5rem;
  margin: 0 0.5rem;
  z-index: 100;
  background-color: lightgreen;
}

#box-container {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(40, 1fr);
  gap: 15px;
}

.box {
  width: 30px;
  height: 30px;
  background-color: red;
}

.css-animation {
  animation: animate 6s linear 0s infinite alternate;
}

@keyframes animate {
  0% {
    transform: translateX(0) rotate(0deg) scale(0.6);
  }
  100% {
    transform: translateX(500px) rotate(360deg) scale(1.4);
  }
}
```

{{ EmbedLiveSample("Durchführung des Leistungstests", "100%", "480") }}

Die Animation kann durch Klicken des Umschaltknopfes zu `requestAnimationFrame()` gewechselt werden.

Versuchen Sie jetzt, beide auszuführen und vergleichen Sie die FPS für jede (die erste violette Box). Sie sollten sehen, dass die Leistung von CSS-Animations und `requestAnimationFrame()` sehr ähnlich ist.

### Animation außerhalb des Haupt-Threads

Selbst angesichts der obigen Testergebnisse würden wir argumentieren, dass CSS-Animations die bessere Wahl sind. Aber wie? Der Schlüssel liegt darin, dass solange die Eigenschaften, die wir animieren möchten, keinen Reflow/Neuzeichnen auslösen (lesen Sie [CSS Triggers](https://csstriggers.com/) für mehr Informationen), wir diese Abtastvorgänge vom Haupt-Thread entfernen können. Die häufigste Eigenschaft ist der CSS-Transform. Wenn ein Element als [Layer](https://wiki.mozilla.org/Gecko:Overview#Graphics) promotet wird, können Transform-Eigenschaften in der GPU animiert werden, was zu besserer Leistung/Effizienz führt, insbesondere auf mobilen Geräten. Erfahren Sie mehr Details in [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um OMTA (Off Main Thread Animation) in Firefox zu aktivieren, können Sie zu _about:config_ gehen und nach `layers.offmainthreadcomposition.async-animations` suchen. Wechseln Sie seinen Wert zu `true`.

![Das Eingeben des Suchbegriffs filtert die Optionen. Nur die layers.offmainthreadcomposition.async-animations-Einstellung wird angezeigt und ist auf true gesetzt. Die drei Zahlen in der oberen linken Ecke des Browsers, oberhalb seiner UI, haben sich auf 005, 003 und 108 erhöht.](pic3.png)

Nachdem Sie OMTA aktiviert haben, versuchen Sie, den obigen Test erneut auszuführen. Sie sollten feststellen, dass die FPS der CSS-Animations jetzt deutlich höher sind.

> [!NOTE]
> In Nightly/Developer Edition sollten Sie sehen, dass OMTA standardmäßig aktiviert ist, sodass Sie die Tests möglicherweise umgekehrt durchführen müssen (testen Sie zuerst mit aktiviertem OMTA und dann deaktivieren, um ohne OMTA zu testen).

## Zusammenfassung

Browser sind in der Lage, Rendering-Flows zu optimieren. Zusammenfassend sollten wir immer versuchen, unsere Animationen mit CSS-Transitions/-Animations zu erstellen, wenn möglich. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise auf JavaScript-basierte Animationen zurückgreifen.
