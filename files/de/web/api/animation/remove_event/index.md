---
title: "Animation: remove-Ereignis"
short-title: remove
slug: Web/API/Animation/remove_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

Das **`remove`**-Ereignis der {{domxref("Animation")}}-Schnittstelle wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener('remove', (event) => { })
onremove = (event) => { }
```

## Ereignistyp

Ein {{domxref("AnimationPlaybackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis ausgelöst hat.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis ausgelöst hat.

## Beispiele

### Entfernen von überschriebenen Animationen

In diesem Beispiel haben wir ein `<button id="start">`-Element und einen Ereignis-Listener, der jedes Mal läuft, wenn die Maus bewegt wird. Der {{domxref("Element.mousemove_event","mousemove")}}-Ereignis-Handler richtet eine Animation ein, die das `<button>`-Element zur Position des Mauszeigers animiert. Dies könnte zu einer großen Liste von Animationen führen, was eine Speicherleckgefahr darstellen könnte. Aus diesem Grund entfernen moderne Browser automatisch vorwärtsfüllende Animationen, die von anderen Animationen überschrieben werden.

Die Anzahl der erstellten Animationen wird angezeigt. Ein `remove`-Ereignis-Listener wird verwendet, um die Anzahl der entfernten Animationen zu zählen und anzuzeigen.

Alle bis auf eine der Animationen sollten schließlich entfernt werden.

#### HTML

```html
<button id="start">Klicken, um zu ziehen</button>
<br />
<button id="reset">Beispiel zurücksetzen</button>
<p>
  Klicken Sie auf die Schaltfläche, um die Animation zu starten (standaardmäßig deaktiviert, um Personen zu schützen, die bei solchen Animationen Migräne bekommen).
</p>
<p>Erstellte Animationen: <span id="count-created">0</span></p>
<p>Entfernte Animationen: <span id="count-removed">0</span></p>
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

      // das remove-Ereignis wird ausgelöst, nachdem die Animation entfernt wurde
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
- {{domxref("Animation")}}, {{domxref("AnimationPlaybackEvent")}}
- {{domxref("Animation.replaceState")}}, um zu überprüfen, ob eine Animation entfernt wurde
- {{domxref("Animation.persist()")}}, um das Entfernen einer Animation zu verhindern
