---
title: ViewTimeline
slug: Web/API/ViewTimeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die **`ViewTimeline`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert eine Ansichtsfortschritts-Timeline (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für mehr Details).

Übergeben Sie eine `ViewTimeline`-Instanz an den [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor oder die [`animate()`](/de/docs/Web/API/Element/animate)-Methode, um sie als die Timeline festzulegen, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- [`ViewTimeline()`](/de/docs/Web/API/ViewTimeline/ViewTimeline)
  - : Erstellt eine neue `ViewTimeline`-Objektinstanz.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

- [`subject`](/de/docs/Web/API/ViewTimeline/subject) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Subjektelement zurück, dessen Sichtbarkeit innerhalb seines nächsten vorfahren Scroll-Elements (Scroller) den Fortschritt der Timeline und somit der Animation steuert.
- [`startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die Start-Scrollposition (0% Fortschritt) der Timeline als einen Offset vom Anfang des überlaufenden Inhaltsbereichs im Scroller darstellt.
- [`endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die End-Scrollposition (100% Fortschritt) der Timeline als einen Offset vom Anfang des überlaufenden Inhaltsbereichs im Scroller darstellt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

## Beispiele

### Anzeigen des Subjekts und der Offsets einer Ansichtsfortschritts-Timeline

In diesem Beispiel animieren wir ein Element mit einer `class` von `subject` entlang einer Ansichtsfortschritts-Timeline — es wird animiert, wenn es durch das Dokument nach oben bewegt wird, während es scrollt. Wir geben auch die Werte `subject`, `startOffset` und `endOffset` in einem Ausgabeelement in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

Im JavaScript holen wir uns Referenzen zu den `subject` und `output`-`<div>`s, dann erstellen wir eine neue `ViewTimeline`, das sie mit dem `subject`-Element verknüpft, um anzugeben, dass der Timeline-Fortschritt auf der Sichtbarkeit dieses Elements durch seinen scrollenden Vorfahren basiert, eine `block`-Achse festlegt und `inset`-Werte setzt, um die Position des Kästchens anzupassen, in dem das Subjekt als sichtbar betrachtet wird.

Wir animieren dann das `subject`-Element mit der Web Animations API. Schließlich zeigen wir die Werte `subject`, `startOffset` und `endOffset` im `output`-Element an.

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

Scrollen Sie, um das Subjektelement in Animation zu sehen.

{{EmbedLiveSample("Tracking the progress of a view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
