---
title: CSS- und JavaScript-Animationsperformance
short-title: CSS- und JavaScript-Animationen
slug: Web/Performance/Guides/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Animationen sind entscheidend für eine angenehme Benutzererfahrung in vielen Anwendungen. Es gibt viele Möglichkeiten, Webanimationen zu implementieren, wie beispielsweise CSS {{cssxref("transition", "Übergängen")}}/{{cssxref("animation", "Animationen")}} oder auf JavaScript basierende Animationen (mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Übergänge und -Animationen

Sowohl CSS-Übergänge als auch -Animationen können verwendet werden, um Animationen zu schreiben. Sie haben jeweils ihre eigenen Einsatzszenarien:

- CSS {{cssxref("transition", "Übergänge")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem End-CSS-Zustand zu erstellen, z. B. einem ruhenden Button-Zustand und einem Hover-Zustand. Selbst wenn sich ein Element mitten in einem Übergang befindet, beginnt der neue Übergang sofort aus dem aktuellen Stil, anstatt zum End-CSS-Zustand zu springen. Siehe [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) für weitere Details.
- CSS {{cssxref("animation", "Animationen")}} hingegen ermöglichen es Entwicklern, Animationen zwischen einer Menge von Anfangseigenschaften und einem endgültigen Satz zu erstellen, anstatt zwischen zwei Zuständen. CSS-Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Schlüsselbildern, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte anzeigen. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Details.

In Bezug auf die Leistung gibt es keinen Unterschied zwischen der Implementierung einer Animation mit CSS-Übergängen oder -Animationen. Beide werden in diesem Artikel unter demselben CSS-basierten Dach klassifiziert.

## requestAnimationFrame

Die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) API bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Callback-Funktion der Methode wird vom Browser vor dem nächsten Umzeichnen bei jedem Frame aufgerufen. Im Vergleich zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)/[`setInterval()`](/de/docs/Web/API/Window/setInterval), die einen spezifischen Verzögerungsparameter benötigen, ist `requestAnimationFrame()` wesentlich effizienter. Entwickler können eine Animation erstellen, indem sie den Stil eines Elements bei jedem Aufruf der Schleife ändern (oder das Canvas-Zeichnen aktualisieren, oder was auch immer).

> [!NOTE]
> Wie CSS-Übergänge und -Animationen pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund geschoben wird.

Für weitere Details lesen Sie [animating with JavaScript from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Übergänge vs. requestAnimationFrame

Die Tatsache ist, dass die Leistung von CSS-basierten Animationen in den meisten Fällen fast dieselbe ist wie die von JavaScript-Animationen — zumindest in Firefox. Einige JavaScript-basierte Animationsbibliotheken, wie [GSAP](https://gsap.com/) und [Velocity.JS](https://github.com/julianshapiro/velocity/wiki), behaupten sogar, bessere Leistungen als [native CSS-Übergänge/-Animationen](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) erzielen zu können. Dies kann auftreten, weil CSS-Übergänge/-Animationen die Stilelemente im Haupt-UI-Thread vor jedem Umzeichnungsereignis neu abtasten, was fast dasselbe ist wie das Proben von Stilelementen über einen `requestAnimationFrame()`-Callback, der ebenfalls vor dem nächsten Umzeichnen ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread stattfinden, gibt es leistungstechnisch keinen Unterschied.

In diesem Abschnitt führen wir Sie durch einen Leistungstest in Firefox, um zu sehen, welche Animationsmethode insgesamt besser zu sein scheint.

### Aktivierung der FPS-Tools

Bevor Sie das Beispiel durchgehen, aktivieren Sie bitte zuerst die FPS-Tools, um die aktuelle Bildrate zu sehen:

1. Geben Sie in der URL-Leiste _about:config_ ein; klicken Sie auf die Schaltfläche `Ich werde vorsichtig sein, versprochen!`, um den Konfigurationsbildschirm zu betreten.
   ![Warnbildschirm, dass das Ändern von Einstellungen riskant sein kann, mit einer Schaltfläche zur Annahme der Risiken.](pic1.png)
2. Suchen Sie in der Suchleiste nach der Einstellung `layers.acceleration.draw-fps`.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Jetzt sehen Sie drei kleine violette Kästchen in der oberen linken Ecke des Firefox-Fensters. Die erste Box repräsentiert FPS.
   ![Die Eingabe des Suchbegriffs filtert die Optionen. Nur die layers.acceleration.draw-fps-Einstellung wird angezeigt und ist auf true gesetzt. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers und überlagern die Benutzeroberfläche.](pic2.png)

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

Die Animation kann durch Klicken auf die Umschalttaste auf `requestAnimationFrame()` umgeschaltet werden.

Versuchen Sie jetzt, beide auszuführen, und vergleichen Sie die FPS für jede (die erste violette Box). Sie sollten sehen, dass die Leistung von CSS-Animationen und `requestAnimationFrame()` sehr nahe beieinander liegt.

### Animation außerhalb des Haupt-Threads

Selbst angesichts der obigen Testergebnisse würden wir argumentieren, dass CSS-Animationen die bessere Wahl sind. Aber wie? Der Schlüssel ist, dass solange die Eigenschaften, die wir animieren möchten, keinen Reflow/Neuzeichnungen auslösen (lesen Sie [CSS triggers](https://csstriggers.com/) für weitere Informationen), können wir diese Probenoperationen aus dem Haupt-Thread heraus bewegen. Die häufigste Eigenschaft ist das CSS-transform. Wenn ein Element als [Layer](https://wiki.mozilla.org/Gecko:Overview#Graphics) gefördert wird, kann die Animation von transform-Eigenschaften auf der GPU erfolgen, was zu einer besseren Leistung/Effizienz führt, insbesondere auf mobilen Geräten. Weitere Details finden Sie in [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um die OMTA (Off Main Thread Animation) in Firefox zu aktivieren, können Sie _about:config_ aufrufen und nach `layers.offmainthreadcomposition.async-animations` suchen. Wechseln Sie seinen Wert auf `true`.

![Die Eingabe des Suchbegriffs filtert die Optionen. Nur die layers.offmainthreadcomposition.async-animations-Einstellung wird angezeigt und ist auf true gesetzt. Die drei Zahlen in der oberen linken Ecke des Browsers, oberhalb der Benutzeroberfläche, haben sich auf 005, 003 und 108 erhöht.](pic3.png)

Nach der Aktivierung von OMTA versuchen Sie, den obigen Test erneut auszuführen. Sie sollten sehen, dass die FPS der CSS-Animationen jetzt erheblich höher sind.

> [!NOTE]
> In Nightly/Developer Edition sollte OMTA standardmäßig aktiviert sein, sodass Sie die Tests möglicherweise andersherum durchführen müssen (zuerst mit aktivierter OMTA testen, dann deaktivieren, um ohne OMTA zu testen).

## Zusammenfassung

Browser sind in der Lage, Renderflows zu optimieren. Zusammenfassend sollten wir immer versuchen, unsere Animationen soweit möglich mit CSS-Übergängen/-Animationen zu erstellen. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise auf JavaScript-basierte Animationen zurückgreifen.
