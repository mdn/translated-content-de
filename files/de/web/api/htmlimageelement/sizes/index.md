---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft
**`sizes`** ermöglicht es Ihnen, die Layout-Breite des
[Bildes](/de/docs/Web/HTML/Reference/Elements/img) für jede aus einer Liste von Medienbedingungen anzugeben. Dadurch können automatisch verschiedene Bilder ausgewählt werden — sogar Bilder mit unterschiedlichen Ausrichtungen oder
Seitenverhältnissen — wenn der Dokumentzustand sich ändert, um verschiedenen Medienbedingungen zu entsprechen.

Jede Bedingung wird im gleichen bedingten Format angegeben, das auch von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird.

## Wert

Ein String, der eine kommagetrennte Liste von Quellgrößenbeschreibungen enthält, gefolgt von einer optionalen Fallback-Größe. Jede Quellgrößenbeschreibung besteht aus einer Medienbedingung, gefolgt von mindestens einem Leerzeichen und dann dem Quellgrößenwert, der für das Bild verwendet wird, wenn die Medienbedingung zu `true` ausgewertet wird.
Sie können den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen.
Für weitere Informationen zur Syntax des `sizes`-Attributs siehe [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Beispiele

### Ein Bild auswählen, um zur Fensterbreite zu passen

In diesem Beispiel wird ein blogartiges Layout erstellt, das einige Texte und ein Bild anzeigt, für das drei Größenschritte angegeben sind, abhängig von der Fensterbreite. Drei Versionen des Bildes sind ebenfalls verfügbar, mit jeweils angegebenen Breiten. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite aus, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte der Anzeige des Benutzers abhängen.

Schaltflächen am unteren Rand des Beispiels ermöglichen es Ihnen tatsächlich, die `sizes`-Eigenschaft leicht zu modifizieren, indem Sie die größte der drei Breiten für das Bild zwischen 40em und 50em wechseln.

#### HTML

```html
<article>
  <h1>An amazing headline</h1>
  <div class="test"></div>
  <p>
    This is even more amazing content text. It's really spectacular. And
    fascinating. Oh, it's also clever and witty. Award-winning stuff, I'm sure.
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="(50em <= width <= 60em) 50em,
              (30em <= width < 50em) 30em,
              (width < 30em) 20em"
    alt="The New York City skyline on a beautiful day, with the One World Trade Center building in the middle." />
  <p>
    Then there's even more amazing stuff to say down here. Can you believe it? I
    sure can't.
  </p>

  <button id="break40">Last Width: 40em</button>
  <button id="break50">Last Width: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    Verdana,
    Arial,
    Helvetica,
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888;
  box-shadow: 0 0.5em 0.3em #888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

Der JavaScript-Code behandelt die beiden Schaltflächen, die es Ihnen ermöglichen, die dritte Breitenoption zwischen 40em und 50em zu wechseln; dies wird durch das Handling des [`click`](/de/docs/Web/API/Element/click_event) Events erreicht, indem die JavaScript-Methode {{jsxref("String.replace", "replace()")}} verwendet wird, um den relevanten Teil des `sizes`-Strings zu ersetzen.

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### Ergebnis

{{EmbedLiveSample("Selecting an image to fit window width", "", 1050)}}

Die Seite wird am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster angesehen')}}, sodass Sie die Größen vollständig einstellen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
