---
title: Web Animation API Tipps und Tricks
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

CSS-Animationen ermöglichen es, unglaubliche Dinge mit den Elementen zu tun, aus denen Ihre Dokumente und Apps bestehen. Es gibt Dinge, die Sie möglicherweise tun möchten, die nicht auf den ersten Blick offensichtlich sind, und viele clevere Möglichkeiten, Dinge zu tun, die nicht sofort ersichtlich sind. Dieser Artikel ist eine Sammlung von Tipps und Tricks, die wir gefunden haben und die hoffentlich Ihre Arbeit erleichtern, einschließlich der Anleitung zum erneuten Ausführen einer abgeschlossenen Animation.

## Eine Animation erneut ausführen

Die [CSS-Animationsspezifikation](/de/docs/Web/CSS/Guides/Animations) bietet keine Möglichkeit, eine Animation erneut auszuführen. Sie können nicht einfach den {{cssxref("animation-play-state")}} des Elements wieder auf `"running"` setzen, sobald die Animation endet. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Hier ist eine stabile und zuverlässige Methode, dies zu tun.

### HTML

Zuerst definieren wir das HTML für ein {{HTMLElement("div")}}, das wir animieren möchten, und einen Button, der die Animation abspielen (oder erneut abspielen) wird.

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

Als Nächstes betrachten wir das JavaScript, das die Arbeit erledigt. Die Funktion `playAnimation()` soll aufgerufen werden, wenn der Benutzer auf den Startknopf klickt. Anstatt die {{cssxref("@keyframes")}}-Regel zu verwenden, [definieren wir die Keyframes in JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

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

Die Methode `playAnimation` ruft die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) auf dem Element auf, um die Animation abzuspielen. Die Methode `animate()` nimmt ein Keyframe-Objekt oder ein Array von Keyframe-Objekten sowie Animationsoptionen als Argumente an. In diesem Fall übergeben wir der Methode das Keyframe-Objekt `colorChangeFrames` und eine Animationsdauer.

Wir müssen auch einen Ereignishandler zu unserem Startknopf hinzufügen, damit er tatsächlich etwas tut:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie gestoppt wird

Im vorherigen Beispiel wird, wenn auf den Startknopf geklickt wird, bevor die Animation abgeschlossen ist, die aktuelle Animation abrupt gestoppt und die Animation beginnt von `0%` oder dem `from`-Startkeyframe erneut. Wenn Sie möchten, dass die aktuelle Animationsiteration abgeschlossen wird, bevor eine neue startet, können wir den `run`-Button deaktivieren, während die Animation läuft, und ihn basierend auf dem [`finish`-Ereignis](/de/docs/Web/API/Animation/finish) wieder aktivieren. Alternativ, wenn wir mehrere Iterationen der Animation ermöglichen möchten, können wir überprüfen, ob eine Animation auf dem Element läuft, und die `animation-iteration`-Anzahl für jeden Buttonklick erhöhen, während die Animation läuft.

In diesem Beispiel aktualisieren wir unsere `playAnimation()`-Funktion, um den Button beim Klicken zu deaktivieren, und lauschen dem `finish`-Ereignis, um den Button erneut zu aktivieren.

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

Die Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich, als ob sie in der Deklaration der [`will-change`-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/will-change) enthalten wären. Jede Eigenschaft, die einen neuen Stapelkontext schafft, wenn sie als `will-change` markiert ist, sorgt dafür, dass das Element einen neuen Stapelkontext erhält.

Im Fall von [`animation-fill-mode: forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) (und `both`) bleiben die animierten Eigenschaften nach Abschluss der Animation im Zustand ihrer letzten Keyframe. Die Eigenschaften behalten den `will-change`-Status bei, sodass, wenn während der Animation ein neuer Stapelkontext erstellt wird und am Ende der Animation noch vorhanden ist, das Zielelement den Stapelkontext nach Abschluss der Animation beibehält.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [Animation Interface](/de/docs/Web/API/Animation/Animation)
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
