---
title: CSS- und JavaScript-Animationsleistung
slug: Web/Performance/CSS_JavaScript_animation_performance
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("Web/Performance")}}

Animationen sind entscheidend für eine angenehme Benutzererfahrung bei vielen Anwendungen. Es gibt viele Möglichkeiten, Web-Animationen zu implementieren, wie etwa CSS-{{cssxref("transition","Transitions")}}/{{cssxref("animation","Animations")}} oder JavaScript-basierte Animationen (mithilfe von {{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}}). In diesem Artikel analysieren wir die Leistungsunterschiede zwischen CSS-basierten und JavaScript-basierten Animationen.

## CSS-Transitions und -Animationen

Sowohl CSS-Transitions als auch -Animationen können zur Erstellung von Animationen verwendet werden. Sie haben jeweils ihre eigenen Anwendungsfälle:

- CSS-{{cssxref("transition","Transitions")}} bieten eine einfache Möglichkeit, Animationen zwischen dem aktuellen Stil und einem End-CSS-Status durchzuführen, z. B. einem Ruhezustand eines Buttons und einem Hover-Zustand. Selbst wenn ein Element sich mitten in einer Transition befindet, beginnt die neue Transition sofort vom aktuellen Stil aus, statt direkt zum End-CSS-Zustand zu springen. Weitere Details finden Sie unter [CSS-Transitions verwenden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).
- CSS-{{cssxref("animation","Animationen")}} hingegen ermöglichen es Entwicklern, Animationen zwischen einem Satz von Startwerteigenschaften und einem endgültigen Satz zu erstellen, anstatt zwischen zwei Zuständen. CSS-Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben. Weitere Details finden Sie unter [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

In Bezug auf die Leistung gibt es keinen Unterschied, ob eine Animation mit CSS-Transitions oder -Animationen implementiert wird. Beide werden in diesem Artikel unter dem gleichen CSS-basierten Dach zusammengefasst.

## requestAnimationFrame

Die API {{domxref("Window.requestAnimationFrame","requestAnimationFrame()")}} bietet eine effiziente Möglichkeit, Animationen in JavaScript zu erstellen. Die Callback-Funktion der Methode wird vom Browser vor dem nächsten Neuzeichnen bei jedem Frame aufgerufen. Verglichen mit {{domxref("setTimeout()")}}/{{domxref("setInterval()")}}, die einen bestimmten Verzögerungsparameter benötigen, ist `requestAnimationFrame()` wesentlich effizienter. Entwickler können eine Animation erstellen, indem sie den Stil eines Elements bei jedem Schleifendurchlauf ändern (oder die Canvas-Zeichnung aktualisieren oder anderes).

> [!NOTE]
> Wie bei CSS-Transitions und -Animationen pausiert `requestAnimationFrame()`, wenn der aktuelle Tab in den Hintergrund verschoben wird.

Weitere Details finden Sie im Artikel [animating with JavaScript from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/).

## Leistungsvergleich:<br>Transitions vs. requestAnimationFrame

Tatsache ist, dass in den meisten Fällen die Leistung von CSS-basierten Animationen fast die gleiche ist wie die von JavaScript-Animationen — zumindest in Firefox. Einige JavaScript-Animationsbibliotheken wie [GSAP](https://gsap.com/) und [Velocity.JS](http://velocityjs.org/) behaupten sogar, dass sie bessere Leistung als [native CSS-Transitions/-Animations](https://css-tricks.com/myth-busting-css-animations-vs-javascript/) erzielen können. Dies kann geschehen, weil CSS-Transitions/-Animations die Stilelemente im Haupt-UI-Thread vor jedem Neuzeichnen neu abtasten, was fast das Gleiche ist wie das Neuabtasten von Stilelementen über einen `requestAnimationFrame()`-Callback, der ebenfalls vor dem nächsten Neuzeichnen ausgelöst wird. Wenn beide Animationen im Haupt-UI-Thread ausgeführt werden, gibt es keinen Unterschied in Bezug auf die Leistung.

In diesem Abschnitt führen wir Sie durch einen Leistungstest mit Firefox, um zu sehen, welche Animationsmethode insgesamt besser scheint.

### FPS-Tools aktivieren

Bevor Sie das Beispiel durchgehen, aktivieren Sie bitte zunächst die FPS-Tools, um die aktuelle Bildrate zu sehen:

1. Geben Sie in der URL-Leiste _about:config_ ein; klicken Sie auf die Schaltfläche `Ich werde vorsichtig sein, das verspreche ich!`, um den Konfigurationsbildschirm aufzurufen.
   ![Warnbildschirm, der anzeigt, dass das Ändern von Einstellungen riskant sein kann, mit einer Schaltfläche zum Akzeptieren der Risiken.](pic1.png)
2. Suchen Sie in der Suchleiste nach der Einstellung `layers.acceleration.draw-fps`.
3. Doppelklicken Sie auf den Eintrag, um den Wert auf `true` zu setzen. Jetzt sehen Sie drei kleine lila Kästchen in der oberen linken Ecke des Firefox-Fensters. Das erste Kästchen steht für die FPS.
   ![Beim Eingeben des Suchbegriffs werden die Optionen gefiltert. Nur die Einstellung layers.acceleration.draw-fps wird angezeigt und ist auf true gesetzt. Drei Zahlen (001, 001 und 108) erscheinen in der oberen linken Ecke des Browsers und überlagern dessen Benutzeroberfläche.](pic2.png)

### Durchführung des Leistungstests

Zu Beginn des unten gezeigten Tests werden insgesamt 1000 {{htmlelement("div")}}-Elemente durch CSS-Animation transformiert.

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

Die Animation kann auf `requestAnimationFrame()` umgeschaltet werden, indem die Umschalttaste gedrückt wird.

Probieren Sie sie jetzt beide aus und vergleichen Sie die FPS für jede (das erste lila Kästchen). Sie sollten sehen, dass die Leistung von CSS-Animationen und `requestAnimationFrame()` sehr ähnlich ist.

### Animationen außerhalb des Haupt-Threads

Selbst angesichts der obigen Testergebnisse würden wir argumentieren, dass CSS-Animationen die bessere Wahl sind. Aber wie? Der Schlüssel liegt darin, dass solange die Eigenschaften, die wir animieren möchten, keinen Reflow/Neuzeichnen auslösen (lesen Sie [CSS-Trigger](https://csstriggers.com/) für weitere Informationen), wir diese Abtastoperationen aus dem Haupt-Thread auslagern können. Die häufigste Eigenschaft ist der CSS-Transform. Wenn ein Element als [Layer](https://wiki.mozilla.org/Gecko:Overview#Graphics) gefördert wird, kann die Animation von Transform-Eigenschaften auf der GPU erfolgen, was eine bessere Leistung/Effizienz bedeutet, insbesondere auf Mobilgeräten. Weitere Details finden Sie in [OffMainThreadCompositing](https://wiki.mozilla.org/Platform/GFX/OffMainThreadCompositing).

Um die OMTA (Off Main Thread Animation) in Firefox zu aktivieren, können Sie _about:config_ aufrufen und nach `layers.offmainthreadcomposition.async-animations` suchen. Setzen Sie den Wert auf `true`.

![Beim Eingeben des Suchbegriffs werden die Optionen gefiltert. Nur die Einstellung layers.offmainthreadcomposition.async-animations wird angezeigt und ist auf true gesetzt. Die drei Zahlen in der oberen linken Ecke des Browsers, über seiner Benutzeroberfläche, sind auf 005, 003 und 108 gestiegen.](pic3.png)

Nachdem Sie OMTA aktiviert haben, führen Sie den obigen Test erneut aus. Sie sollten sehen, dass die FPS der CSS-Animationen jetzt deutlich höher sind.

> [!NOTE]
> In Nightly/Developer Edition sollte OMTA standardmäßig aktiviert sein, sodass Sie die Tests möglicherweise andersherum durchführen müssen (zuerst mit aktivierter OMTA testen, dann deaktivieren, um ohne OMTA zu testen).

## Zusammenfassung

Browser können Rendering-Prozesse optimieren. Zusammenfassend sollten wir immer versuchen, unsere Animationen mit CSS-Transitions/-Animationen zu erstellen, wenn möglich. Wenn Ihre Animationen wirklich komplex sind, müssen Sie möglicherweise auf JavaScript-basierte Animationen zurückgreifen.
