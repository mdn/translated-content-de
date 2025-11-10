---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ermöglicht es Ihnen, die Layoutbreite des [Bildes](/de/docs/Web/HTML/Reference/Elements/img) für jede aus einer Liste von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) anzugeben. Dies bietet die Möglichkeit, automatisch zwischen verschiedenen Bildern zu wählen – sogar zwischen Bildern mit unterschiedlichen Ausrichtungen oder Seitenverhältnissen –, sobald sich der Dokumentenzustand ändert, um unterschiedliche Medienbedingungen zu erfüllen. Sie spiegelt das `sizes`-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String. Weitere Informationen zur Syntax des `sizes`-Attributs finden Sie in der HTML-Referenz für das [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Element.

## Beispiele

### Auswahl eines Bildes passend zur Fensterbreite

In diesem Beispiel wird ein blog-ähnliches Layout erstellt, das einige Texte und ein Bild anzeigt, für das drei Größenpunkte festgelegt sind, abhängig von der Breite des Fensters. Drei Versionen des Bildes stehen ebenfalls zur Verfügung, mit festgelegten Breiten. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte des Displays des Nutzers abhängen.

Schaltflächen am unteren Rand des Beispiels ermöglichen es Ihnen tatsächlich, die `sizes`-Eigenschaft leicht zu ändern, indem Sie die größte der drei Breiten für das Bild zwischen 40em und 50em umschalten.

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
    "Verdana",
    "Helvetica",
    "Arial",
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888888;
  box-shadow: 0 0.5em 0.3em #888888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

Der JavaScript-Code behandelt die beiden Schaltflächen, mit denen Sie die dritte Breitenoption zwischen 40em und 50em umschalten; dies wird durch die Handhabung des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses erreicht, mithilfe der JavaScript-String-Methode {{jsxref("String.replace", "replace()")}}, um den relevanten Teil des `sizes`-Strings zu ersetzen.

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

Die Seite ist am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster anzusehen')}}, damit Sie die Größen vollständig anpassen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
