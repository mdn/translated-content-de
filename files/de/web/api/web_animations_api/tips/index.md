---
title: Web Animation API Tipps und Tricks
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 5d6aafadb9fc5e5c6f0f46975942a5642ba2f615
---

{{CSSRef}}

CSS-Animationen ermöglichen erstaunliche Dinge mit den Elementen, aus denen Ihre Dokumente und Apps bestehen. Es gibt Dinge, die Sie vielleicht tun möchten, die nicht offensichtlich sind, und viele clevere Möglichkeiten, Dinge zu tun, die nicht sofort sichtbar sind. Dieser Artikel ist eine Sammlung von Tipps und Tricks, die wir gefunden haben und die hoffentlich Ihre Arbeit erleichtern werden, einschließlich wie man eine abgeschlossene Animation erneut abspielen kann.

## Eine Animation erneut ausführen

Die [CSS Animationen](/de/docs/Web/CSS/CSS_animations) Spezifikation bietet keine Möglichkeit, eine Animation erneut auszuführen. Sie können das {{cssxref("animation-play-state")}} des Elements nicht einfach wieder auf `"running"` setzen, sobald die Animation endet. Stattdessen müssen Sie JavaScript verwenden, um eine abgeschlossene Animation erneut abzuspielen.

Dies ist eine Möglichkeit, dies zu tun, die stabil und zuverlässig ist.

### HTML

Lassen Sie uns zunächst das HTML für ein {{HTMLElement("div")}} definieren, das wir animieren möchten, sowie einen Button, der die Animation abspielen (oder erneut abspielen) wird.

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

Als Nächstes betrachten wir das JavaScript, das die Arbeit erledigt. Die Funktion `playAnimation()` soll aufgerufen werden, wenn der Benutzer auf den Ausführen-Button klickt. Anstatt die {{cssxref("@keyframes")}} At-Regel zu verwenden, [definieren wir die Keyframes in JavaScript](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).

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

Die Methode `playAnimation` ruft die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) auf der Box auf, um die Animation abzuspielen. Die Methode `animate()` nimmt ein Keyframe-Objekt oder ein Array von Keyframe-Objekten sowie Animationsoptionen als Argumente. In diesem Fall übergeben wir der Methode das `colorChangeFrames` Keyframe-Objekt und eine Animationsdauer.

Wir müssen auch einen Ereignishandler zu unserem Ausführen-Button hinzufügen, damit er tatsächlich etwas tut:

```js
button.addEventListener("click", playAnimation);
```

### Ergebnis

{{ EmbedLiveSample("Run_an_animation_again", "100%", "160") }}

## Warten, bis eine Animation abgeschlossen ist, bevor sie gestoppt wird

Im vorherigen Beispiel, wenn der Ausführen-Button geklickt wird, bevor die Animation abgeschlossen ist, stoppt die aktuelle Animation abrupt und die Animation startet neu von dem `0%` oder `from` Start-Keyframe. Wenn Sie möchten, dass die aktuelle Animationsiteration abgeschlossen wird, bevor eine neue gestartet wird, können wir den `run` Button während der Animation deaktivieren und ihn basierend auf dem [`finish`](/de/docs/Web/API/Animation/finish) Ereignis wieder aktivieren. Alternativ, wenn wir mehrere Iterationen der Animation ermöglichen möchten, können wir überprüfen, ob eine Animation auf dem Element läuft, und die `animation-iteration` Zählung für jeden Button-Klick erhöhen, während die Animation läuft.

In diesem Beispiel aktualisieren wir unsere `playAnimation()` Funktion, um den Button beim Klicken zu deaktivieren und das `finish` Ereignis zu überwachen, um den Button wieder zu aktivieren.

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

Die Eigenschaften, die während einer CSS-Animation animiert werden, verhalten sich so, als ob sie in der [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftsdeklaration enthalten wären. Jede Eigenschaft, die einen Stacking-Kontext erstellen würde, wenn sie als `will-change` markiert ist, sorgt dafür, dass das Element einen neuen Stacking-Kontext erhält.

Im Fall von [`animation-fill-mode: forwards`](/de/docs/Web/CSS/animation-fill-mode#forwards) (und `both`) bleiben die animierten Eigenschaften nach dem Abschluss der Animation im Zustand des letzten Keyframes. Die Eigenschaften behalten den `will-change` Status, sodass, wenn ein neuer Stacking-Kontext während der Animation erstellt wird und am Ende der Animation noch vorhanden ist, das Ziel-Element den Stacking-Kontext nach dem Abschluss der Animation beibehält.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [Animation Interface](/de/docs/Web/API/Animation/Animation)
- [CSS Animations](/de/docs/Web/CSS/CSS_animations) Modul
