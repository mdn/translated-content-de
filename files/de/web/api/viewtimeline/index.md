---
title: ViewTimeline
slug: Web/API/ViewTimeline
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Web Animations")}}

Die **`ViewTimeline`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert eine Timeline, deren Fortschritt von der Sichtbarkeit eines Elements abhängt (weitere Informationen finden Sie unter [CSS-Animationen, die durch Scrollen gesteuert werden](/de/docs/Web/CSS/Guides/Scroll-driven_animations)).

Übergeben Sie eine `ViewTimeline`-Instanz an den Konstruktor [`Animation()`](/de/docs/Web/API/Animation/Animation) oder die Methode [`animate()`](/de/docs/Web/API/Element/animate), um sie als Timeline festzulegen, die den Fortschritt der Animation steuert.

{{InheritanceDiagram}}

## Konstruktor

- [`ViewTimeline()`](/de/docs/Web/API/ViewTimeline/ViewTimeline)
  - : Erstellt eine neue `ViewTimeline`-Objektinstanz.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem die Eigenschaften ihrer übergeordneten Schnittstelle [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

- [`subject`](/de/docs/Web/API/ViewTimeline/subject) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Element zurück, dessen Sichtbarkeit innerhalb seines nächstgelegenen scrollbaren Vorfahren (Scroller) den Fortschritt der Timeline und damit der Animation bestimmt.
- [`startOffset`](/de/docs/Web/API/ViewTimeline/startOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die Scrollposition am Anfang der Timeline (0 % Fortschritt) als Versatz vom Beginn des überlaufenden Inhaltsbereichs im Scroller angibt.
- [`endOffset`](/de/docs/Web/API/ViewTimeline/endOffset) {{ReadOnlyInline}}
  - : Gibt einen [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) zurück, der die Scrollposition am Ende der Timeline (100 % Fortschritt) als Versatz vom Beginn des überlaufenden Inhaltsbereichs im Scroller angibt.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihrer übergeordneten Schnittstelle [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)._

## Beispiele

### Das Element und die Offsets einer Timeline anzeigen, deren Fortschritt von der Sichtbarkeit abhängt

In diesem Beispiel animieren wir ein Element mit der `class` `subject` entlang einer Timeline, deren Fortschritt von seiner Sichtbarkeit abhängt. Die Animation läuft ab, während das Element beim Scrollen durch das Dokument nach oben bewegt wird. Außerdem geben wir die Werte von `subject`, `startOffset` und `endOffset` in einem Ausgabeelement in der oberen rechten Ecke aus.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

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

Im JavaScript rufen wir zunächst Referenzen auf die `<div>`-Elemente `subject` und `output` ab. Anschließend erstellen wir eine neue `ViewTimeline` und verknüpfen sie mit dem Element `subject`. Damit legen wir fest, dass der Fortschritt der Timeline von der Sichtbarkeit dieses Elements innerhalb seines scrollbaren Vorfahren abhängt. Außerdem legen wir eine `block`-Achse und `inset`-Werte fest, um die Position des Bereichs anzupassen, in dem das Element als sichtbar gilt.

Danach animieren wir das Element `subject` mit der Web Animations API. Abschließend zeigen wir die Werte von `subject`, `startOffset` und `endOffset` im Element `output` an.

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

Scrollen Sie, um die Animation des Elements zu sehen.

{{EmbedLiveSample("displaying_the_subject_and_offsets_of_a_view_progress_timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Animationen, die durch Scrollen gesteuert werden](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
