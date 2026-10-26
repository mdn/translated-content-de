---
title: "Animation: remove-Ereignis"
short-title: remove
slug: Web/API/Animation/remove_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{ APIRef("Web Animations") }}

Das **`remove`**-Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("remove", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onremove = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Beispiele

### Ersetzte Animationen entfernen

In diesem Beispiel gibt es ein `<button id="start">`-Element und einen Event-Listener, der bei jeder Mausbewegung ausgeführt wird. Der Event-Handler für [`mousemove`](/de/docs/Web/API/Element/mousemove_event) erstellt eine Animation, die das `<button>`-Element zur Position des Mauszeigers bewegt. Dadurch könnte eine sehr lange Liste von Animationen entstehen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen moderne Browser automatisch Animationen, die im Endzustand verbleiben und von anderen Animationen überschrieben werden.

Die Anzahl der erstellten Animationen wird angezeigt. Ein Event-Listener für `remove` zählt außerdem die entfernten Animationen und zeigt ihre Anzahl an.

Bis auf eine sollten schließlich alle Animationen entfernt werden.

#### HTML

```html
<button id="start">Click to drag</button>
<br />
<button id="reset">Reset example</button>
<p>
  Click the button to start the animation (disabled by default to protect those
  who suffer migraines when experiencing such animations).
</p>
<p>Animations created: <span id="count-created">0</span></p>
<p>Animations removed: <span id="count-removed">0</span></p>
```

#### CSS

```css
:root,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

button {
  margin: 0.5rem 0;
}
```

#### JavaScript

```js
const button = document.querySelector("#start");
let created = 0;
let removed = 0;

button.addEventListener(
  "click",
  () => {
    document.body.addEventListener("mousemove", (event) => {
      const animation = button.animate(
        { transform: `translate(${event.clientX}px, ${event.clientY}px)` },
        { duration: 500, fill: "forwards" },
      );
      created++;
      showCounts();

      // the remove event fires after the animation is removed
      animation.addEventListener("remove", () => {
        removed++;
        showCounts();
      });
    });
  },
  { once: true },
);

function showCounts() {
  document.getElementById("count-created").textContent = created;
  document.getElementById("count-removed").textContent = removed;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Ergebnis

{{embedlivesample("Removing_replaced_animations","",250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation), [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState), um zu prüfen, ob eine Animation entfernt wurde
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist), um das Entfernen einer Animation zu verhindern
