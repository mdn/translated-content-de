---
title: CSS- und JavaScript-Animationsleistung
slug: Web/Performance/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie CSS-{{cssxref("transition","Übergänge")}}/{{cssxref("animation","Animationen")}} oder JavaScript-basierte Animationen (mithilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Übergänge und -Animationen

Sowohl CSS-Übergänge als auch Animationen können verwendet werden, um Animationen zu schreiben. Sie haben jeweils ihre eigenen Anwendungsszenarien:

- CSS-{{cssxref("transition","Übergänge")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem End-CSS-Zustand zu erstellen, z. B. einem ruhenden Button-Zustand und einem Hover-Zustand. Selbst wenn ein Element sich mitten in einem Übergang befindet, beginnt der neue Übergang sofort ab dem aktuellen Stil, anstatt zum End-CSS-Zustand zu springen. Weitere Details finden Sie unter [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).
- CSS-{{cssxref("animation","Animationen")}} hingegen ermöglichen es Entwicklern, Animationen zwischen einer Reihe von Startwerteigenschaften und einem finalen Satz zu erstellen, anstatt zwischen zwei Zuständen. CSS-Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Schlüsselbildern, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben. Weitere Details finden Sie unter [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Hinsichtlich der Leistung gibt es keinen Unterschied zwischen der Implementierung einer Animation mit CSS-Übergängen oder Animationen. Beide werden in diesem Artikel unter dem gleichen CSS-basierten Ansatz klassifiziert.

## requestAnimationFrame

Die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-API bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Rückruffunktion der Methode wird vom Browser vor dem nächsten Neuzeichnen bei jedem Frame aufgerufen. Im Vergleich zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)/[`setInterval()`](/de/docs/Web/API/Window/setInterval), die einen spezifischen Verzögerungsparameter benötigen, ist `requestAnimationFrame()` wesentlich effizienter. Entwickler können eine Animation erstellen, indem sie den Stil eines Elements jedes Mal ändern, wenn die Schleife aufgerufen wird (oder die Canvas-Zeichnung aktualisieren oder was auch immer).

> [!NOTE]
> Ähnlich wie bei CSS-Übergängen und -Animationen pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund geschoben wird.

Weitere Details finden Sie unter [Animationen mit JavaScript von setInterval zu requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Übergänge vs. requestAnimationFrame

Tatsächlich ist in den meisten Fällen die Leistung von CSS-basierten Animationen fast identisch mit der von JavaScript-Animationen — zumindest in Firefox. Einige JavaScript-basierte Animationsbibliotheken, wie [GSAP](https://gsap.com/) und [Velocity.JS](http://velocityjs.org/), behaupten sogar, dass sie eine bessere Leistung als [native CSS-Übergänge/-Animationen](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) erreichen können. Dies kann passieren, weil CSS-Übergänge/-Animationen die Stilelemente im Haupt-UI-Thread vor jedem Neuzeichnungsereignis neu abtasten, was fast dasselbe ist wie das Abtasten von Stilelementen über einen `requestAnimationFrame()`-Callback, der ebenfalls vor dem nächsten Neuzeichnen ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread durchgeführt werden, gibt es hinsichtlich der Leistung keinen Unterschied.

In diesem Abschnitt führen wir Sie durch einen Leistungstest mit Firefox, um zu sehen, welche Animationsmethode insgesamt besser erscheint.

### Aktivieren der FPS-Tools

Bevor Sie das Beispiel durchgehen, aktivieren Sie bitte zuerst die FPS-Tools, um die aktuelle Bildrate zu sehen:

1. Geben Sie _about:config_ in die URL-Leiste ein und klicken Sie auf den Button `Ich werde vorsichtig sein, ich verspreche es!`, um den Konfigurationsbildschirm zu betreten.
   ![Warnhinweis, dass das Ändern von Einstellungen riskant sein kann, mit einem Button zur Bestätigung des Risikos.](pic1.png)
2. Suchen Sie in der Suchleiste nach der Einstellung `layers.acceleration.draw-fps`.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Jetzt sollten Sie drei kleine violette Kästchen in der oberen linken Ecke des Firefox-Fensters sehen. Das erste Kästchen steht für FPS.
   ![Durch das Eingeben des Suchbegriffs werden die Optionen gefiltert. Nur die layers.acceleration.draw-fps-Einstellung wird angezeigt und steht auf true. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers, über der Benutzeroberfläche.](pic2.png)

### Ausführen des Leistungstests

Zunächst werden im unten gezeigten Test insgesamt 1000 {{htmlelement("div")}}-Elemente durch eine CSS-Animation transformiert.

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

{{ EmbedLiveSample("Ausführen des Leistungstests", "100%", "480") }}

Die Animation kann durch Klicken auf den Umschalter auf `requestAnimationFrame()` umgeschaltet werden.

Versuchen Sie nun, beide auszuführen und vergleichen Sie die FPS für jede (das erste violette Kästchen). Sie sollten feststellen, dass die Leistung von CSS-Animationen und `requestAnimationFrame()` sehr nah beieinander liegt.

### Animation außerhalb des Hauptthreads

Auch angesichts der obigen Testergebnisse würden wir argumentieren, dass CSS-Animationen die bessere Wahl sind. Aber wie? Der Schlüssel liegt darin, dass solange die Eigenschaften, die wir animieren möchten, keinen Neufluss/Neuzeichnen auslösen (lesen Sie [CSS triggers](https://csstriggers.com/) für mehr Informationen), können wir diese Abtastvorgänge aus dem Hauptthread auslagern. Die häufigste Eigenschaft ist die CSS-Transformation. Wenn ein Element als eine [Ebene](https://wiki.mozilla.org/Gecko:Overview#Graphics) gefördert wird, kann das Animieren von Transformationseigenschaften auf der GPU erfolgen, was eine bessere Leistung/Effizienz bedeutet, insbesondere auf mobilen Geräten. Weitere Details finden Sie unter [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um die OMTA (Off Main Thread Animation) in Firefox zu aktivieren, können Sie zu _about:config_ gehen und nach `layers.offmainthreadcomposition.async-animations` suchen. Ändern Sie seinen Wert auf `true`.

![Durch das Eingeben des Suchbegriffs werden die Optionen gefiltert. Nur die layers.offmainthreadcomposition.async-animations-Einstellung wird angezeigt und steht auf true. Die drei Zahlen in der oberen linken Ecke des Browsers, über der Benutzeroberfläche, haben sich auf 005, 003 und 108 erhöht.](pic3.png)

Nachdem Sie OMTA aktiviert haben, versuchen Sie erneut, den obigen Test auszuführen. Sie sollten feststellen, dass die FPS der CSS-Animationen nun deutlich höher sein werden.

> [!NOTE]
> In Nightly/Developer Edition sollten Sie sehen, dass OMTA standardmäßig aktiviert ist. Sie müssen die Tests möglicherweise andersherum durchführen (zuerst mit aktivierter Option testen, dann deaktivieren, um ohne OMTA zu testen).

## Zusammenfassung

Browser sind in der Lage, Rendering-Prozesse zu optimieren. Zusammenfassend sollten wir nach Möglichkeit immer versuchen, unsere Animationen mit CSS-Übergängen/-Animationen zu erstellen. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise stattdessen auf JavaScript-basierte Animationen zurückgreifen.
