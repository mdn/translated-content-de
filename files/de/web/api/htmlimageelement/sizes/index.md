---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`sizes`** ermöglicht es Ihnen, die Layoutbreite des [Bildes](/de/docs/Web/HTML/Element/img) für jede der in einer Liste enthaltenen Medienbedingungen anzugeben. Dies bietet die Möglichkeit, automatisch zwischen verschiedenen Bildern zu wählen – sogar zwischen Bildern mit unterschiedlichen Ausrichtungen oder Seitenverhältnissen –, während sich der Dokumentenzustand verändert, um verschiedenen Medienbedingungen zu entsprechen.

Jede Bedingung wird im gleichen Bedingungsformat angegeben, das auch von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird.

## Wert

Ein String, der eine durch Kommas getrennte Liste von Quellgrößenbeschreibungen enthält, gefolgt von einer optionalen Fallback-Größe. Jede **Quellgrößenbeschreibung** besteht aus einer Medienbedingung, dann mindestens einem Leerzeichen, und dann dem **Quellgrößenwert**, der für das Bild verwendet wird, wenn die Medienbedingung auf `true` bewertet wird.

### Medienbedingungen

Jede Quellgrößenbeschreibung besteht aus einer Medienbedingung gemäß dem Media Queries-Standard. Da eine Quellgrößenbeschreibung verwendet wird, um die für das Layout der Seite zu verwendende Breite des Bildes zu spezifizieren, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) vollständig auf [width](/de/docs/Web/CSS/@media/width)-Informationen. Siehe [Verwendung von Media Queries, Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) für Details zur Konstruktion einer Medienbedingung.

### Quellgrößenwerte

Der Quellgrößenwert ist eine CSS {{cssxref("length")}}. Er kann in Schriftgrößen-relativen Einheiten (wie `em` oder `ex`), absoluten Einheiten (wie `px` oder `cm`) oder der `vw`-Einheit angegeben werden, die es Ihnen erlaubt, die Breite als Prozentsatz der Ansichtsfensterbreite anzugeben (wobei `1vw` 1% der Ansichtsfensterbreite entspricht).

> [!NOTE]
> Der Quellgrößenwert darf _nicht_ als Prozentsatz der Containergröße angegeben werden; das heißt, Längen wie `50%` oder `100%` sind nicht erlaubt, da Unklarheit darüber bestehen würde, wovon der angegebene Wert ein Prozentsatz ist.

## Beispiele

### Auswahl eines Bildes passend zur Fensterbreite

In diesem Beispiel wird ein blogartiges Layout erstellt, das einen Text und ein Bild anzeigt, für das drei verschiedene Größenpunkte je nach Fensterbreite angegeben sind. Drei Versionen des Bildes sind ebenfalls verfügbar, mit ihren spezifizierten Breiten. Der Browser verwendet all diese Informationen, um ein Bild und eine Breite auszuwählen, die am besten zu den angegebenen Werten passen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte des Displays des Nutzers abhängen.

Tasten am unteren Rand des Beispiels ermöglichen es Ihnen, die `sizes`-Eigenschaft leicht zu ändern, indem sie zwischen 40em und 50em für die größte der drei Breitenoptionen für das Bild umschalten.

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

Der JavaScript-Code verarbeitet die beiden Tasten, die es ermöglichen, die dritte Breitenoption zwischen 40em und 50em umzustellen; dies wird durch das Behandeln des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses erreicht, indem die JavaScript-String-Methode {{jsxref("String.replace", "replace()")}} verwendet wird, um den relevanten Teil der `sizes`-Zeichenfolge zu ersetzen.

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

Die Seite ist am besten {{LiveSampleLink('Selecting an image to fit window width', 'in einem eigenen Fenster angezeigt')}}, damit Sie die Größen vollständig anpassen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsives Design von Bildern](/de/docs/Web/HTML/Responsive_images)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
