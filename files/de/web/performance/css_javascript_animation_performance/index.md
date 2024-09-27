---
title: Leistung von CSS- und JavaScript-Animationen
slug: Web/Performance/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS-{{cssxref("transition","Transitions")}}/{{cssxref("animation","Animations")}} oder JavaScript-basierte Animationen (mittels [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Transitions und -Animationen

Sowohl CSS-Transitions als auch CSS-Animationen können verwendet werden, um Animationen zu schreiben. Sie haben jeweils ihre eigenen Anwendungsszenarien:

- CSS-{{cssxref("transition","Transitions")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem End-CSS-Zustand zu ermöglichen, z.B. einem ruhenden Schaltflächenzustand und einem Hover-Zustand. Selbst wenn sich ein Element mitten in einer Transition befindet, beginnt die neue Transition sofort aus dem aktuellen Stil heraus, anstatt zum End-CSS-Zustand zu springen. Weitere Details finden Sie unter [Using CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).
- CSS-{{cssxref("animation","Animations")}} hingegen ermöglichen es Entwicklern, Animationen zwischen einer Reihe von Ausgangseigenschaften und einem abschließenden Satz zu erstellen, anstatt zwischen zwei Zuständen. CSS-Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Keyframes, die die Anfangs- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben. Weitere Details finden Sie unter [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

In Bezug auf die Leistung gibt es keinen Unterschied zwischen der Implementierung einer Animation mit CSS-Transitions oder -Animationen. Beide werden in diesem Artikel unter demselben CSS-basierten Dach klassifiziert.

## requestAnimationFrame

Die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-API bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Rückruffunktion der Methode wird vom Browser vor dem nächsten Neuzeichnen in jedem Frame aufgerufen. Im Vergleich zu [`setTimeout()`](/de/docs/Web/API/SetTimeout)/[`setInterval()`](/de/docs/Web/API/SetInterval), die einen spezifischen Verzögerungsparameter benötigen, ist `requestAnimationFrame()` viel effizienter. Entwickler können eine Animation erstellen, indem sie den Stil eines Elements jedes Mal ändern, wenn die Schleife aufgerufen wird (oder die Canvas-Zeichnung aktualisieren, oder was auch immer).

> [!NOTE]
> Wie CSS-Transitions und -Animationen pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund verschoben wird.

Für weitere Details lesen Sie [animating with JavaScript from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Transitions vs. requestAnimationFrame

Tatsache ist, dass in den meisten Fällen die Leistung von CSS-basierten Animationen fast gleich ist wie die von JavaScript-Animationen – zumindest in Firefox. Einige JavaScript-Animationen-Bibliotheken, wie [GSAP](https://gsap.com/) und [Velocity.JS](http://velocityjs.org/), behaupten sogar, dass sie eine bessere Leistung erreichen können als [native CSS-Transitions/Animations](https://css-tricks.com/myth-busting-css-animations-vs-javascript/). Dies kann geschehen, weil CSS-Transitions/Animations die Elementstile im Haupt-UI-Thread neu abtasten, bevor jedes Neuzeichenereignis auftritt, was fast dasselbe ist wie das Neusampling von Elementstilen über einen `requestAnimationFrame()`-Rückruf, der ebenfalls vor dem nächsten Neuzeichenereignis ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread erstellt werden, gibt es leistungsmäßig keinen Unterschied.

In diesem Abschnitt führen wir Sie durch einen Leistungstest mit Firefox, um zu sehen, welche Animationsmethode insgesamt besser erscheint.

### Aktivierung von FPS-Tools

Bevor Sie das Beispiel durchgehen, aktivieren Sie zuerst die FPS-Tools, um die aktuelle Frame-Rate zu sehen:

1. Geben Sie in der URL-Leiste _about:config_ ein; klicken Sie auf den „Ich bin mir der Gefahren bewusst!“ Button, um den Konfigurationsbildschirm zu betreten.
   ![Warnbildschirm, dass das Ändern der Einstellungen riskant sein kann, mit einem Button, um Risiken zu akzeptieren.](pic1.png)
2. Suchen Sie in der Suchleiste nach der Einstellung `layers.acceleration.draw-fps`.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Jetzt sehen Sie drei kleine lila Boxen in der oberen linken Ecke des Firefox-Fensters. Die erste Box repräsentiert FPS.
   ![Eingeben des Suchbegriffs filtert die Optionen. Nur die layers.acceleration.draw-fps-Einstellung wird angezeigt und ist auf true gesetzt. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers, überlagern dessen Benutzeroberfläche.](pic2.png)

### Durchführung des Leistungstests

Zunächst werden im unten gezeigten Test insgesamt 1000 {{htmlelement("div")}}-Elemente durch CSS-Animation transformiert.

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

{{ EmbedLiveSample("Durchführen des Leistungstests", "100%", "480") }}

Die Animation kann durch Klicken auf den Umschaltknopf zu `requestAnimationFrame()` gewechselt werden.

Versuchen Sie, beide jetzt laufen zu lassen, und vergleichen Sie die FPS für jeden (die erste lila Box). Sie sollten feststellen, dass die Leistung von CSS-Animationen und `requestAnimationFrame()` sehr nah beieinander liegt.

### Animation außerhalb des Haupt-Threads

Auch angesichts der oben genannten Testergebnisse würden wir argumentieren, dass CSS-Animationen die bessere Wahl sind. Aber wie? Der Schlüssel ist, dass solange die Eigenschaften, die wir animieren möchten, keinen Reflow/Repaint triggern (lesen Sie [CSS triggers](https://csstriggers.com/) für weitere Informationen), können wir diese Abtastiervorgänge aus dem Haupt-Thread heraus verlagern. Die häufigste Eigenschaft ist die CSS-Transformation. Wenn ein Element als [layer](https://wiki.mozilla.org/Gecko:Overview#Graphics) gefördert wird, können Transformations-Eigenschaften auf der GPU animiert werden, was eine bessere Leistung/Effizienz bedeutet, insbesondere auf mobilen Geräten. Weitere Details finden Sie unter [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um die OMTA (Off Main Thread Animation) in Firefox zu aktivieren, können Sie zu _about:config_ gehen und nach `layers.offmainthreadcomposition.async-animations` suchen. Setzen Sie seinen Wert auf `true`.

![Eingeben des Suchbegriffs filtert die Optionen. Nur die layers.offmainthreadcomposition.async-animations-Einstellung wird angezeigt und ist auf true gesetzt. Die drei Zahlen in der oberen linken Ecke des Browsers, über seiner Benutzeroberfläche, haben sich auf 005, 003 und 108 erhöht.](pic3.png)

Nachdem Sie OMTA aktiviert haben, versuchen Sie, den obigen Test erneut durchzuführen. Sie sollten sehen, dass die FPS der CSS-Animationen jetzt deutlich höher sein werden.

> [!NOTE]
> In Nightly/Developer Edition sollten Sie sehen, dass OMTA standardmäßig aktiviert ist, sodass Sie die Tests möglicherweise umkehren müssen (testen Sie zuerst mit aktivierter OMTA, dann deaktivieren, um ohne OMTA zu testen.)

## Zusammenfassung

Browser können Rendering-Abläufe optimieren. Zusammenfassend sollten wir immer versuchen, unsere Animationen wo möglich mit CSS-Transitions/Animations zu erstellen. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise auf JavaScript-basierte Animationen zurückgreifen.
