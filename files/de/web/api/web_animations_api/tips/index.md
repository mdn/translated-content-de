---
title: Web Animation API Tipps und Tricks
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 5d6aafadb9fc5e5c6f0f46975942a5642ba2f615
---

{{CSSRef}}

CSS-Animationen ermöglichen unglaubliche Dinge mit den Elementen, die Ihre Dokumente und Apps ausmachen. Es gibt Dinge, die Sie möglicherweise tun möchten, die nicht offensichtlich sind, und viele clevere Möglichkeiten, Dinge zu tun, die nicht sofort erkennbar sind. Dieser Artikel ist eine Sammlung von Tipps und Tricks, die wir gefunden haben und die hoffentlich Ihre Arbeit erleichtern, einschließlich wie Sie eine abgeschlossene Animation erneut ausführen können.

## Eine Animation erneut ausführen

Die [CSS-Animationsspezifikation](/de/docs/Web/CSS/CSS_animations) bietet keine Möglichkeit, eine Animation erneut auszuführen. Sie können nicht einfach das {{cssxref("animation-play-state")}} des Elements wieder auf `"running"` setzen, wenn die Animation endet. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Dies ist eine Methode, die stabil und zuverlässig ist.

### HTML

Zuerst definieren wir das HTML für ein {{HTMLElement("div")}}, das wir animieren möchten, und einen Button, der die Animation abspielt (oder erneut abspielt).

```html
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

### CSS

Lassen Sie uns die Box mit CSS gestalten.

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

Als nächstes schauen wir uns das JavaScript an, das die Arbeit erledigt. Die Funktion `playAnimation()` wird aufgerufen, wenn der Benutzer auf den Ausführen-Button klickt. Anstatt die {{cssxref("@keyframes")}}-Regel zu verwenden, [definieren wir die Keyframes in JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  entspricht der folgenden CSS @keyframes

  @keyframes colorChange {
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

Die Methode `playAnimation` ruft die Methode {{domxref("Element.animate()")}} auf dem Element box auf, um die Animation abzuspielen. Die Methode `animate()` akzeptiert ein Keyframe-Objekt oder Array von Keyframe-Objekten sowie Animationsoptionen als Argumente. In diesem Fall übergeben wir die Methode das `colorChangeFrames`-Keyframe-Objekt und eine Animationsdauer.

Wir müssen auch einen Ereignishandler zu unserem Ausführen-Button hinzufügen, damit er tatsächlich etwas tut:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie gestoppt wird

Im vorherigen Beispiel, wenn der Ausführen-Button geklickt wird, bevor die Animation abgeschlossen ist, stoppt die aktuelle Animation abrupt und die Animation beginnt erneut ab dem `0%` oder `from` Start-Keyframe. Wenn Sie möchten, dass die aktuelle Animationsiteration abgeschlossen ist, bevor eine neue gestartet wird, können wir den `run`-Button deaktivieren, während die Animation läuft, und ihn basierend auf dem [`finish`](/de/docs/Web/API/Animation/finish) Ereignis erneut aktivieren. Alternativ, wenn wir mehrere Iterationen der Animation ermöglichen möchten, können wir überprüfen, ob eine Animation auf dem Element läuft, und die `animation-iteration`-Anzahl für jeden Buttonklick erhöhen, während die Animation läuft.

In diesem Beispiel aktualisieren wir unsere Funktion `playAnimation()`, um den Button beim Klicken zu deaktivieren und auf das `finish`-Ereignis zu lauschen, um den Button wieder zu aktivieren.

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

Der Code deaktiviert den Button und startet die Animation. Der Button wird wieder aktiviert, wenn die Animation abgeschlossen ist.

## Stapelkontext in Animationen

Die Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich, als ob sie in der Eigenschaft [`will-change`](/de/docs/Web/CSS/will-change) deklariert wären. Jede Eigenschaft, die einen Stapelkontext erstellen würde, wenn sie als `will-change` markiert ist, sorgt dafür, dass das Element einen neuen Stapelkontext erhält.

Im Fall von [`animation-fill-mode: forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) (und `both`) bleiben die animierten Eigenschaften nach Abschluss der Animation im Zustand des letzten Keyframes. Die Eigenschaften behalten den `will-change`-Status bei, sodass, wenn während der Animation ein neuer Stapelkontext erstellt wird, dieser auch nach Abschluss der Animation erhalten bleibt.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [Animation Interface](/de/docs/Web/API/Animation/Animation)
- [CSS-Animationsmodul](/de/docs/Web/CSS/CSS_animations)
