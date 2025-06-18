---
title: ViewTimeline
slug: Web/API/ViewTimeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Animations")}}

Das **`ViewTimeline`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert eine Ansichtsfortschritts-Timeline (siehe [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details).

Übergeben Sie eine `ViewTimeline`-Instanz an den [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor oder die [`animate()`](/de/docs/Web/API/Element/animate)-Methode, um sie als die Timeline festzulegen, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- [`ViewTimeline()`](/de/docs/Web/API/ViewTimeline/ViewTimeline)
  - : Erstellt eine neue Instanz des `ViewTimeline`-Objekts.

## Instanzeigenschaften

_Dieses Interface erbt auch die Eigenschaften seines Elternteils, [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

- [`subject`](/de/docs/Web/API/ViewTimeline/subject) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu dem Subjektelement zurück, dessen Sichtbarkeit innerhalb seines nächstgelegenen vorfahrbaren Scroll-Elements (Scroller) den Fortschritt der Timeline und somit die Animation antreibt.
- [`startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die Startposition (0 % Fortschritt) der Timeline als Versatz vom Anfang des überfüllten Inhaltsbereichs im Scroller darstellt.
- [`endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die Endposition (100 % Fortschritt) der Timeline als Versatz vom Anfang des überfüllten Inhaltsbereichs im Scroller darstellt.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

## Beispiele

### Anzeige des Subjekts und der Versätze einer Ansichtsfortschritts-Timeline

In diesem Beispiel animieren wir ein Element mit einer `class` von `subject` entlang einer Ansichtsfortschritts-Timeline – es wird animiert, wenn es nach oben durch das Dokument gescrollt wird. Wir geben auch die Werte von `subject`, `startOffset` und `endOffset` an ein Ausgabeelement in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>

  <div class="output"></div>
</div>
```

#### CSS

Der CSS-Code für das Beispiel sieht so aus:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

.output {
  position: fixed;
  top: 5px;
  right: 5px;
}

p,
h1,
div {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

#### JavaScript

Im JavaScript schnappen wir uns die Referenzen zu den `subject` und `output`-`<div>`s, dann erstellen wir eine neue `ViewTimeline`, die mit dem `subject`-Element assoziiert ist, um festzulegen, dass der Timeline-Fortschritt auf der Sichtbarkeit dieses Elements durch seinen scrollbaren Vorfahren basiert. Dabei wird eine `block`-Achse festgelegt und `inset`-Werte eingestellt, um die Position des Bereichs anzupassen, in dem das Subjektelement als sichtbar gilt.

Danach animieren wir das `subject`-Element mit der Web Animations API. Zuletzt zeigen wir die `subject`, `startOffset` und `endOffset`-Werte im `output`-Element an.

```js
const subject = document.querySelector(".subject");
const output = document.querySelector(".output");

const timeline = new ViewTimeline({
  subject,
  axis: "block",
  inset: [CSS.px("200"), CSS.px("300")],
});

subject.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    timeline,
  },
);

output.textContent += `Subject element: ${timeline.subject.nodeName}, `;
output.textContent += `start offset: ${timeline.startOffset}, `;
output.textContent += `end offset: ${timeline.endOffset}.`;
```

#### Ergebnis

Scrollen Sie, um das Subjektelement animiert zu sehen.

{{EmbedLiveSample("Tracking the progress of a view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
