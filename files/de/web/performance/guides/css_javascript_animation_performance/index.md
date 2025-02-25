---
title: CSS- und JavaScript-Animationsleistung
short-title: CSS- und JavaScript-Animationen
slug: Web/Performance/Guides/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Animationen sind entscheidend für ein angenehmes Benutzererlebnis in vielen Anwendungen. Es gibt viele Möglichkeiten, Webanimationen zu implementieren, wie z.B. CSS {{cssxref("transition","Übergänge")}}/{{cssxref("animation","Animationen")}} oder JavaScript-basierte Animationen (unter Verwendung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Übergänge und -Animationen

Sowohl CSS-Übergänge als auch Animationen können verwendet werden, um Animationen zu schreiben. Beide haben ihre eigenen Anwendungsszenarien:

- CSS {{cssxref("transition", "Übergänge")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem End-CSS-Zustand ablaufen zu lassen, z.B. einem ruhenden Button-Zustand und einem Hover-Zustand. Auch wenn ein Element sich mitten in einem Übergang befindet, startet der neue Übergang sofort vom aktuellen Stil und springt nicht zum End-CSS-Zustand. Weitere Details finden Sie unter [Using CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).
- CSS {{cssxref("animation", "Animationen")}} hingegen erlauben es Entwicklern, Animationen zwischen einer Reihe von Anfangseigenschaftenwerten und einem endgültigen Satz zu erstellen, statt zwischen zwei Zuständen. CSS-Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben. Weitere Informationen finden Sie unter [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

In Bezug auf die Leistung gibt es keinen Unterschied zwischen der Implementierung einer Animation mit CSS-Übergängen oder -Animationen. Beide fallen unter dasselbe CSS-basierte Dach in diesem Artikel.

## requestAnimationFrame

Die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-API bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Rückruffunktion der Methode wird vom Browser vor dem nächsten Neuzeichnen jedes Bildes aufgerufen. Im Vergleich zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)/[`setInterval()`](/de/docs/Web/API/Window/setInterval), die einen bestimmten Verzögerungsparameter benötigen, ist `requestAnimationFrame()` wesentlich effizienter. Entwickler können eine Animation erstellen, indem sie den Stil eines Elements jedes Mal ändern, wenn die Schleife aufgerufen wird (oder die Canvas-Zeichnung aktualisieren oder was auch immer).

> [!NOTE]
> Wie CSS-Übergänge und -Animationen pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund geschoben wird.

Für weitere Details lesen Sie [animating with JavaScript from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Übergänge vs. requestAnimationFrame

Tatsächlich ist die Leistung von CSS-basierten Animationen in den meisten Fällen fast identisch mit JavaScript-Animationen — zumindest in Firefox. Einige JavaScript-basierte Animationsbibliotheken, wie [GSAP](https://gsap.com/) und [Velocity.JS](http://velocityjs.org/), behaupten sogar, dass sie in der Lage sind, bessere Leistung als [native CSS-Übergänge/Animationen](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) zu erzielen. Dies kann geschehen, weil CSS-Übergänge/Animationen die Elementstile im Haupt-UI-Thread vor jedem Neuzeichnungsereignis abtasten, was fast dasselbe ist wie das Abtasten der Elementstile über einen `requestAnimationFrame()`-Rückruf, der ebenfalls vor dem nächsten Neuzeichnen ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread erstellt werden, gibt es leistungsmäßig keinen Unterschied.

In diesem Abschnitt führen wir Sie durch einen Leistungstest mit Firefox, um zu sehen, welche Animationsmethode insgesamt besser scheint.

### FPS-Tools aktivieren

Bevor Sie das Beispiel durchgehen, aktivieren Sie bitte zuerst die FPS-Tools, um die aktuelle Bildrate zu sehen:

1. Geben Sie in die URL-Leiste _about:config_ ein; klicken Sie auf die Schaltfläche `I'll be careful, I promise!`, um den Konfigurationsbildschirm zu betreten.
   ![Warnhinweis, dass das Ändern der Einstellungen riskant sein kann, mit einer Schaltfläche, um die Risiken zu akzeptieren.](pic1.png)
2. Suchen Sie in der Suchleiste nach der Einstellung `layers.acceleration.draw-fps`.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Nun können Sie drei kleine lila Boxen in der oberen linken Ecke des Firefox-Fensters sehen. Die erste Box repräsentiert die FPS.
   ![Das Eingeben des Suchbegriffs filtert die Optionen. Nur die `layers.acceleration.draw-fps` Präferenz wird angezeigt und ist auf true gesetzt. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers und überlagern seine Benutzeroberfläche.](pic2.png)

### Den Leistungstest ausführen

Im Test, der unten gezeigt wird, werden zunächst insgesamt 1000 {{htmlelement("div")}}-Elemente durch CSS-Animation transformiert.

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

{{ EmbedLiveSample("Running the performance test", "100%", "480") }}

Die Animation kann durch Klicken auf die Umschalttaste auf `requestAnimationFrame()` umgeschaltet werden.

Versuchen Sie nun, beide zu starten, und vergleichen Sie die FPS für jede (die erste lila Box). Sie sollten sehen, dass die Leistung von CSS-Animationen und `requestAnimationFrame()` sehr ähnlich ist.

### Animationen außerhalb des Hauptthreads

Selbst unter Berücksichtigung der obigen Testergebnisse würden wir argumentieren, dass CSS-Animationen die bessere Wahl sind. Aber wie? Der Schlüssel ist, solange die Eigenschaften, die wir animieren möchten, keinen Reflow/Neuzeichnen auslösen (lesen Sie [CSS triggers](https://csstriggers.com/) für weitere Informationen), können wir diese Abtastvorgänge aus dem Hauptthread auslagern. Die häufigste Eigenschaft ist die CSS-Transformation. Wenn ein Element als [Schicht](https://wiki.mozilla.org/Gecko:Overview#Graphics) promotet wird, können Transformations-Eigenschaften im GPU erledigt werden, was eine bessere Leistung/Effizienz bedeutet, insbesondere auf mobilen Geräten. Weitere Details finden Sie in [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um das OMTA (Animationen außerhalb des Hauptthreads) in Firefox zu aktivieren, können Sie zu _about:config_ gehen und nach `layers.offmainthreadcomposition.async-animations` suchen. Schalten Sie dessen Wert auf `true`.

![Das Eingeben des Suchbegriffs filtert die Optionen. Nur die `layers.offmainthreadcomposition.async-animations` Präferenz wird angezeigt und ist auf true gesetzt. Die drei Zahlen in der oberen linken Ecke des Browsers, über seiner Benutzeroberfläche, haben sich auf 005, 003 und 108 erhöht.](pic3.png)

Nachdem Sie OMTA aktiviert haben, führen Sie den obigen Test erneut aus. Sie sollten sehen, dass die FPS der CSS-Animationen nun deutlich höher sind.

> [!NOTE]
> In Nightly/Developer Edition sollte OMTA standardmäßig aktiviert sein, so dass Sie die Tests möglicherweise umgekehrt durchführen müssen (zuerst mit OMTA testen, dann deaktivieren, um ohne OMTA zu testen).

## Zusammenfassung

Browser sind in der Lage, Renderflüsse zu optimieren. Zusammenfassend sollten wir immer versuchen, unsere Animationen nach Möglichkeit mit CSS-Übergängen/Animationen zu erstellen. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise auf JavaScript-basierte Animationen zurückgreifen.
