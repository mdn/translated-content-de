---
title: Tipps und Tricks zur Web Animations API
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{DefaultAPISidebar("Web Animations")}}

Mit CSS-Animationen können Sie die Elemente Ihrer Dokumente und Apps auf vielfältige Weise animieren. Manche Möglichkeiten sind jedoch nicht offensichtlich. Dieser Artikel enthält Tipps und Tricks, die Ihnen die Arbeit erleichtern sollen – unter anderem, wie Sie eine abgeschlossene Animation erneut abspielen.

## Eine Animation erneut abspielen

Die Spezifikation für [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) bietet keine Möglichkeit, eine Animation erneut abzuspielen. Nach ihrem Ende können Sie {{cssxref("animation-play-state")}} für das Element nicht einfach wieder auf `"running"` setzen. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Die folgende Methode ist stabil und zuverlässig.

### HTML

Zunächst definieren wir das HTML für ein {{HTMLElement("div")}}, das wir animieren möchten, und eine Schaltfläche, mit der die Animation abgespielt oder erneut abgespielt wird.

```html
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

### CSS

Nun gestalten wir das Element mit CSS.

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

Als Nächstes sehen wir uns das JavaScript an. Die Funktion `playAnimation()` wird aufgerufen, wenn der Benutzer auf die Schaltfläche klickt. Statt die At-Regel {{cssxref("@keyframes")}} zu verwenden, [definieren wir die Keyframes in JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  equivalent to the following CSS @keyframes

  @keyframes color-change {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lime;
    }
  }
*/
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

function playAnimation() {
  box.animate(colorChangeFrames, 4000);
}
```

Die Methode `playAnimation` ruft [`Element.animate()`](/de/docs/Web/API/Element/animate) für das Element auf, um die Animation abzuspielen. Die Methode `animate()` nimmt ein Keyframe-Objekt oder ein Array von Keyframe-Objekten sowie Animationsoptionen als Argumente entgegen. In diesem Fall übergeben wir ihr das Keyframe-Objekt `colorChangeFrames` und eine Animationsdauer.

Außerdem müssen wir unserer Schaltfläche einen Event-Handler hinzufügen, damit sie tatsächlich etwas auslöst:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie beendet wird

Im vorherigen Beispiel wird die laufende Animation abrupt beendet und beginnt erneut beim anfänglichen Keyframe `0%` oder `from`, wenn die Schaltfläche vor Abschluss der Animation angeklickt wird. Wenn der aktuelle Animationsdurchlauf abgeschlossen sein soll, bevor ein neuer beginnt, können wir die Schaltfläche `run` während der Animation deaktivieren und sie beim Ereignis [`finish`](/de/docs/Web/API/Animation/finish) wieder aktivieren. Wenn wir stattdessen mehrere Animationsdurchläufe ermöglichen möchten, können wir prüfen, ob auf dem Element eine Animation läuft, und bei jedem Klick während der laufenden Animation die Anzahl der `animation-iteration`-Durchläufe erhöhen.

In diesem Beispiel passen wir unsere Funktion `playAnimation()` so an, dass sie die Schaltfläche beim Klicken deaktiviert und beim Ereignis `finish` wieder aktiviert.

```html hidden
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

```css hidden
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

```js hidden
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

button.addEventListener("click", playAnimation);
```

```js
function playAnimation() {
  button.setAttribute("disabled", true);
  const anim = box.animate(colorChangeFrames, 4000);

  anim.addEventListener("finish", (event) => {
    button.removeAttribute("disabled");
  });
}
```

{{ EmbedLiveSample("Waiting for an animation to complete before stopping", "100%", "160") }}

Der Code deaktiviert die Schaltfläche und startet die Animation. Sobald die Animation abgeschlossen ist, wird die Schaltfläche wieder aktiviert.

## Stacking Context bei Animationen

Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich so, als wären sie in der Deklaration der Eigenschaft {{cssxref("will-change")}} enthalten. Jede Eigenschaft, die einen Stacking Context erzeugen würde, wenn sie in `will-change` angegeben wäre, bewirkt, dass das Element einen neuen Stacking Context erhält.

Bei [`animation-fill-mode: forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) (und `both`) behalten die animierten Eigenschaften nach Abschluss der Animation die Werte ihres letzten Keyframes bei. Die Eigenschaften behalten auch ihren `will-change`-Status. Wenn während der Animation ein neuer Stacking Context erzeugt wird und am Ende der Animation noch besteht, behält das Zielelement ihn auch nach Abschluss der Animation.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [Animation-Interface](/de/docs/Web/API/Animation/Animation)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
