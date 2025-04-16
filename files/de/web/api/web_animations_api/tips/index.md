---
title: Tipps und Tricks zur Web-Animation-API
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: a753bfc10d401d87f72220636166b560264fa1fa
---

{{DefaultAPISidebar("Web Animations")}}

CSS-Animationen ermöglichen es, unglaubliche Dinge mit den Elementen zu tun, die Ihre Dokumente und Apps ausmachen. Es gibt Dinge, die Sie vielleicht tun möchten, die nicht offensichtlich sind und viele clevere Wege, Dinge zu tun, die möglicherweise nicht sofort ersichtlich sind. Dieser Artikel ist eine Sammlung von Tipps und Tricks, die wir gefunden haben und die hoffentlich Ihre Arbeit erleichtern, einschließlich wie Sie eine abgeschlossene Animation erneut ausführen können.

## Eine Animation erneut ausführen

Die [CSS-Animationsspezifikation](/de/docs/Web/CSS/CSS_animations) bietet keine Möglichkeit, eine Animation erneut auszuführen. Sie können nicht einfach den {{cssxref("animation-play-state")}} des Elements wieder auf `"running"` setzen, sobald die Animation endet. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Dies ist eine Möglichkeit, dies zu tun, die eine stabile und zuverlässige Methode darstellt.

### HTML

Zuerst definieren wir das HTML für ein {{HTMLElement("div")}}, das wir animieren möchten, und einen Button, der die Animation abspielt (oder erneut abspielt).

```html
<div class="box"></div>
<button class="runButton">Run the animation</button>
```

### CSS

Lassen Sie uns die Box mit CSS stylen.

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

Als nächstes betrachten wir das JavaScript, das die Arbeit erledigt. Die Funktion `playAnimation()` soll aufgerufen werden, wenn der Benutzer auf den Ausführen-Button klickt. Anstatt die {{cssxref("@keyframes")}}-At-Regel zu verwenden, [definieren wir die Keyframes in JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  equivalent to the following CSS @keyframes

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

Die `playAnimation`-Methode ruft die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) auf dem Element auf, um die Animation abzuspielen. Die `animate()`-Methode nimmt ein Keyframe-Objekt oder ein Array von Keyframe-Objekten sowie Animationsoptionen als Argumente. In diesem Fall übergeben wir der Methode das `colorChangeFrames`-Keyframe-Objekt und eine Animationsdauer.

Wir müssen auch einen Ereignis-Handler zu unserem Ausführen-Button hinzufügen, damit er tatsächlich etwas tut:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie gestoppt wird

Im vorherigen Beispiel, wenn der Ausführen-Button angeklickt wird, bevor die Animation abgeschlossen ist, wird die aktuelle Animation abrupt gestoppt und die Animation startet vom `0%` oder `from`-Start-Keyframe neu. Wenn Sie möchten, dass die aktuelle Animationsiteration abgeschlossen wird, bevor eine neue beginnt, können wir den `run`-Button deaktivieren, während die Animation läuft, und ihn basierend auf dem [`finish`](/de/docs/Web/API/Animation/finish)-Ereignis wieder aktivieren. Alternativ, wenn wir mehrere Iterationen der Animation zulassen wollen, können wir prüfen, ob eine Animation auf dem Element läuft und die `animation-iteration`-Anzahl für jeden Klick auf den Button inkrementieren, während die Animation läuft.

In diesem Beispiel aktualisieren wir unsere `playAnimation()`-Funktion, um den Button beim Klicken zu deaktivieren und auf das `finish`-Ereignis zu hören, um den Button wieder zu aktivieren.

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

Die Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich so, als wären sie in der [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftsdeklaration enthalten. Jede Eigenschaft, die einen Stapelkontext erstellen würde, wenn sie als `will-change` markiert ist, sorgt dafür, dass das Element einen neuen Stapelkontext erhält.

Im Fall von [`animation-fill-mode: forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) (und `both`) bleiben die animierten Eigenschaften nach dem Ende der Animation in ihrem letzten Keyframe-Zustand. Die Eigenschaften behalten den `will-change`-Status, sodass, wenn ein neuer Stapelkontext während der Animation erstellt wird und am Ende der Animation noch vorhanden ist, das Ziel-Element den Stapelkontext beibehält, nachdem die Animation abgeschlossen ist.

## Siehe auch

- [Web-Animationen API](/de/docs/Web/API/Web_Animations_API)
- [Animations-Interface](/de/docs/Web/API/Animation/Animation)
- [CSS-Animations-](/de/docs/Web/CSS/CSS_animations) Modul
