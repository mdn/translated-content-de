---
title: Webanimation-API Tipps und Tricks
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{DefaultAPISidebar("Web Animations")}}

CSS-Animationen ermöglichen erstaunliche Dinge mit den Elementen, die Ihre Dokumente und Apps ausmachen. Es gibt möglicherweise Dinge, die Sie tun möchten, die nicht offensichtlich sind, und viele clevere Methoden, um Dinge zu tun, die nicht sofort ersichtlich sind. Dieser Artikel ist eine Sammlung von Tipps und Tricks, die wir gefunden haben, und die hoffentlich Ihre Arbeit erleichtern, einschließlich wie Sie eine abgeschlossene Animation erneut ausführen können.

## Eine Animation erneut ausführen

Die [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Spezifikation bietet keine Möglichkeit, eine Animation erneut auszuführen. Sie können nicht einfach den {{cssxref("animation-play-state")}} eines Elements wieder auf `"running"` setzen, sobald die Animation endet. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Dies ist eine Möglichkeit, dies zu tun, die stabil und zuverlässig ist.

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

Als nächstes sehen wir uns das JavaScript an, das die Arbeit erledigt. Die Funktion `playAnimation()` soll aufgerufen werden, wenn der Benutzer auf den Startknopf klickt. Anstelle der Verwendung der {{cssxref("@keyframes")}}-Regel definieren wir die Schlüsselbilder in [JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

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

Die Methode `playAnimation` ruft die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) auf der Box auf, um die Animation abzuspielen. Die Methode `animate()` nimmt ein Schlüsselbildobjekt oder ein Array von Schlüsselbildobjekten sowie Animationsoptionen als Argumente. In diesem Fall übergeben wir der Methode das `colorChangeFrames` Schlüsselbildobjekt und eine Animationsdauer.

Wir müssen auch einen Ereignishandler zu unserem Startknopf hinzufügen, damit er tatsächlich etwas tut:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie gestoppt wird

Im vorherigen Beispiel, wenn der Startknopf geklickt wird, bevor die Animation abgeschlossen ist, wird die aktuelle Animation abrupt gestoppt und die Animation wird von den `0%` oder `from` Start-Schlüsselbildern neu gestartet. Wenn Sie möchten, dass die aktuelle Animation iteration abgeschlossen ist, bevor eine neue gestartet wird, können wir den `run` Button deaktivieren, während die Animation läuft, und ihn basierend auf dem [`finish`](/de/docs/Web/API/Animation/finish) Ereignis wieder aktivieren. Alternativ, wenn wir mehrere Iterationen der Animation aktivieren möchten, können wir überprüfen, ob eine Animation auf dem Element läuft und die `animation-iteration`-Anzahl für jeden Buttonklick erhöhen, während die Animation läuft.

In diesem Beispiel aktualisieren wir unsere `playAnimation()` Funktion, um den Button beim Klicken zu deaktivieren und das `finish` Ereignis zu hören, um den Button wieder zu aktivieren.

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

## Stacking-Kontext in Animationen

Die Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich, als ob sie in der Eigenschaftsdeklaration [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) enthalten wären. Jede Eigenschaft, die einen Stacking-Kontext erstellen würde, wenn sie als `will-change` markiert ist, lässt das Element einen neuen Stacking-Kontext erhalten.

Im Fall von [`animation-fill-mode: forwards`](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) (und `both`) verbleiben die animierten Eigenschaften in ihrem letzten Schlüsselbild-Zustand, nachdem die Animation abgeschlossen ist. Die Eigenschaften behalten den `will-change`-Status, sodass wenn ein neuer Stacking-Kontext während der Animation erstellt wird und am Ende der Animation weiterhin besteht, das Zielelement den Stacking-Kontext behält, nachdem die Animation abgeschlossen ist.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [Animation Interface](/de/docs/Web/API/Animation/Animation)
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
