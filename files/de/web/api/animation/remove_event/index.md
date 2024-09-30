---
title: "Animation: remove Ereignis"
short-title: remove
slug: Web/API/Animation/remove_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

Das **`remove`**-Ereignis der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener('remove', (event) => { })
onremove = (event) => { }
```

## Ereignistyp

Ein [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Timeline der Animation, die das Ereignis erzeugt hat.

## Beispiele

### Entfernen von ersetzten Animationen

In diesem Beispiel haben wir ein `<button id="start">`-Element und einen Ereignis-Listener, der ausgeführt wird, wann immer die Maus bewegt wird. Der [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis-Handler richtet eine Animation ein, die das `<button>`-Element zur Position des Mauszeigers animiert. Dies könnte zu einer riesigen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen moderne Browser automatisch vorwärtsfüllende Animationen, die durch andere Animationen überschrieben werden.

Die Anzahl der erstellten Animationen wird angezeigt. Ein `remove`-Ereignis-Listener wird verwendet, um die Anzahl der entfernten Animationen zu zählen und anzuzeigen.

Alle bis auf eine der Animationen sollten schließlich entfernt werden.

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
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState), um zu überprüfen, ob eine Animation entfernt wurde
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist), um die Entfernung einer Animation zu verhindern
