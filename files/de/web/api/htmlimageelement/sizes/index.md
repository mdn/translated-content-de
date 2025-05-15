---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: bd6d5e560e6311b217a6c10416d47c4501bb09fe
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`sizes`** ermöglicht es Ihnen, die Layoutbreite des [Bildes](/de/docs/Web/HTML/Reference/Elements/img) für jede aus einer Liste von Medienbedingungen anzugeben. Dies bietet die Möglichkeit, automatisch zwischen verschiedenen Bildern zu wählen - selbst Bilder mit unterschiedlichen Ausrichtungen oder Seitenverhältnissen - während sich der Dokumentzustand ändert, um verschiedenen Medienbedingungen zu entsprechen.

Jede Bedingung wird im gleichen bedingten Format angegeben, das auch von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird.

## Wert

Ein String, der eine durch Kommata getrennte Liste von Quellgrößenbeschreibungen enthält, gefolgt von einer optionalen Fallback-Größe. Jede Quellgrößenbeschreibung besteht aus einer Medienbedingung, dann mindestens einem Leerzeichen, dann dem Quellgrößenwert, der für das Bild verwendet werden soll, wenn die Medienbedingung auf `true` auswertet.
Sie können den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen.
Weitere Informationen zur Syntax des `sizes`-Attributs finden Sie unter [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Beispiele

### Auswahl eines Bildes, das zur Fensterbreite passt

In diesem Beispiel wird ein blogähnliches Layout erstellt, das etwas Text und ein Bild anzeigt, für das drei Größenpunkte in Abhängigkeit von der Breite des Fensters spezifiziert sind. Drei Versionen des Bildes sind ebenfalls verfügbar, mit ihren angegebenen Breiten. Der Browser nimmt all diese Informationen und wählt ein Bild und eine Breite aus, die den angegebenen Werten am besten entsprechen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte des Displays des Benutzers abhängen.

Am unteren Rand des Beispiels befinden sich Schaltflächen, mit denen Sie die `sizes`-Eigenschaft tatsächlich leicht ändern können, indem Sie die größte der drei Breiten für das Bild zwischen 40em und 50em wechseln.

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
    sizes="((min-width: 50em) and (max-width: 60em)) 50em,
              ((min-width: 30em) and (max-width: 50em)) 30em,
              (max-width: 30em) 20em"
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

Der JavaScript-Code behandelt die beiden Schaltflächen, die Ihnen ermöglichen, die dritte Breitenoption zwischen 40em und 50em umzuschalten; dies geschieht durch die Behandlung des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses, wobei die JavaScript-String-Methode {{jsxref("String.replace", "replace()")}} verwendet wird, um den relevanten Teil des `sizes`-Strings zu ersetzen.

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

Die Seite wird am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster angezeigt')}}, damit Sie die Größen vollständig anpassen können.

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
