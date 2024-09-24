---
title: "HTMLImageElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die {{domxref("HTMLImageElement")}}-Eigenschaft
**`sizes`** ermöglicht es Ihnen, die Layoutbreite des
[Bildes](/de/docs/Web/HTML/Element/img) für jede der Liste von Medienbedingungen anzugeben. Dies bietet die Möglichkeit,
automatisch zwischen verschiedenen Bildern zu wählen – sogar Bildern mit unterschiedlichen Ausrichtungen oder
Seitenverhältnissen –, während sich der Dokumentzustand ändert, um zu verschiedenen Medienbedingungen zu passen.

Jede Bedingung wird im gleichen bedingten Format angegeben, das
von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird.

## Wert

Ein String, der eine durch Kommas getrennte Liste von Quellgrößenbeschreibungen
mit einer optionalen Fallback-Größe enthält. Jede **Quellgrößenbeschreibung** besteht
aus einer Medienbedingung, dann mindestens einem Leerzeichen und dann dem
**Quellgrößenwert**, der für das Bild verwendet werden soll, wenn die Medienbedingung
zu `true` auswertet.

### Medienbedingungen

Jede Quellgrößenbeschreibung besteht aus einer Medienbedingung, die durch den Media Queries-Standard definiert ist. Da eine Quellgrößenbeschreibung verwendet wird, um die Breite anzugeben, die während der Seitengestaltung für das Bild verwendet werden soll, basiert die Medienbedingung normalerweise (aber nicht unbedingt) ausschließlich auf [Breiten-](/de/docs/Web/CSS/@media/width)information. Weitere Details zur Konstruktion einer Medienbedingung finden Sie
unter [Verwendung von Media Queries, Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

### Quellgrößenwerte

Der Quellgrößenwert ist eine CSS {{cssxref("length")}}. Er kann
mit schriftbezogenen Einheiten (wie `em` oder `ex`),
absoluten Einheiten (wie `px` oder `cm`) oder der Einheit `vw`
angegeben werden, die es Ihnen erlaubt, die Breite als Prozentsatz der Ansichtsfensterbreite
anzugeben (`1vw` entspricht 1% der Ansichtsfensterbreite).

> [!NOTE]
> Der Quellgrößenwert darf _nicht_ als Prozentsatz der Containergröße angegeben werden; Längen wie `50%` oder
> `100%` sind nicht erlaubt, da es Unklarheiten darüber gäbe, von welchem
> Wert der angegebene Prozentsatz ist.

## Beispiele

### Auswahl eines Bildes passend zur Fensterbreite

In diesem Beispiel wird ein blogähnliches Layout erstellt, das einigen Text und ein Bild anzeigt,
für das drei Größenpunkte angegeben werden, abhängig von der Fensterbreite. Drei
Versionen des Bildes stehen ebenfalls zur Verfügung, deren Breiten angegeben sind. Der Browser nimmt
all diese Informationen und wählt ein Bild und eine Breite, die den angegebenen
Werten am besten entsprechen.

Wie genau die Bilder verwendet werden, kann vom Browser und der Pixeldichte
des Displays des Benutzers abhängen.

Schaltflächen am Ende des Beispiels ermöglichen es Ihnen, die `sizes`-Eigenschaft tatsächlich leicht zu ändern, indem die größte der drei Breiten für das Bild zwischen 40em
und 50em umgeschaltet wird.

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

Der JavaScript-Code verarbeitet die beiden Schaltflächen, die es Ihnen ermöglichen, die dritte Breitenoption zwischen 40em und 50em umzuschalten; dies wird durch das Behandeln des {{domxref("Element.click_event", "Klicks")}} erreicht, unter Verwendung der JavaScript-String-Methode {{jsxref("String.replace", "replace()")}}, um den relevanten Teil des `sizes`-Strings zu ersetzen.

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

Die Seite ist am besten {{LiveSampleLink('Selecting an image to fit window width', 'in ihrem eigenen Fenster anzusehen')}}, damit Sie die Größen vollständig anpassen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
