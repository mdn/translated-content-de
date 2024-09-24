---
title: ViewTimeline
slug: Web/API/ViewTimeline
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

Die **`ViewTimeline`**-Schnittstelle der {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} repräsentiert eine Fortschritts-Zeitleiste der Ansicht (siehe [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details).

Übergeben Sie eine `ViewTimeline`-Instanz an den {{domxref("Animation.Animation", "Animation()")}} Konstruktor oder die {{domxref("Element.animate()", "animate()")}} Methode, um sie als die Zeitleiste festzulegen, die den Fortschritt der Animation steuern wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ViewTimeline.ViewTimeline", "ViewTimeline()")}} {{Experimental_Inline}}
  - : Erstellt eine neue `ViewTimeline`-Objektinstanz.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres übergeordneten Elements, {{domxref("ScrollTimeline")}}._

- {{domxref("ViewTimeline.subject", "subject")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zum Subjektelement zurück, dessen Sichtbarkeit innerhalb seines nächstgelegenen scrollbaren Vorfahr-Elementes (Scroller) den Fortschritt der Zeitleiste und damit der Animation bestimmt.
- {{domxref("ViewTimeline.startOffset", "startOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("CSSNumericValue")}} zurück, der die Start- (0% Fortschritt) Scrollposition der Zeitleiste als einen Offset vom Anfang des überfließenden Abschnitts des Inhalts im Scroller darstellt.
- {{domxref("ViewTimeline.endOffset", "endOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen {{domxref("CSSNumericValue")}} zurück, der die End- (100% Fortschritt) Scrollposition der Zeitleiste als einen Offset vom Anfang des überfließenden Abschnitts des Inhalts im Scroller darstellt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres übergeordneten Elements, {{domxref("ScrollTimeline")}}._

## Beispiele

### Anzeige des Subjekts und der Offsets einer Fortschritts-Zeitleiste

In diesem Beispiel animieren wir ein Element mit einer `class` von `subject` entlang einer Fortschritts-Zeitleiste — es animiert, wenn es durch das Dokument nach oben bewegt wird, während es scrollt. Wir geben auch die Werte `subject`, `startOffset` und `endOffset` an ein Ausgabeelement in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Inhalt</h1>

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

Das CSS für das Beispiel sieht wie folgt aus:

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

Im JavaScript holen wir Referenzen zu den `subject` und `output` `<div>`s und erstellen dann eine neue `ViewTimeline`, die mit dem `subject`-Element assoziiert wird, um anzugeben, dass der Fortschritt der Zeitleiste basierend auf der Sichtbarkeit dieses Elements durch seinen scrollenden Vorfahren festgelegt ist, wobei eine `block`-Achse gesetzt wird und `inset`-Werte festgelegt werden, um die Position des Rahmens anzupassen, in dem das Subjekt als sichtbar gilt.

Dann animieren wir das `subject`-Element mit der Web Animations API. Schließlich zeigen wir die Werte `subject`, `startOffset` und `endOffset` im `output`-Element an.

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
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
