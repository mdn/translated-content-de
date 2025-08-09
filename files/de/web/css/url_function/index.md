---
title: url()
slug: Web/CSS/url_function
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`url()`**-[CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird verwendet, um eine Datei einzubinden. Der Parameter kann eine absolute URL, eine relative URL, eine Blob-URL oder eine Daten-URL sein. Die **`url()`**-Funktion kann als Parameter einer anderen CSS-Funktion übergeben werden, wie der {{cssxref("attr")}}-Funktion. Abhängig von der Eigenschaft, für die sie als Wert dient, kann die gesuchte Ressource ein Bild, eine Schriftart oder ein Stylesheet sein. Die `url()`-Funktionalnotation ist der Wert für den `<url>`-Datentyp.

> [!NOTE]
> Es gibt einen Unterschied zwischen einem {{Glossary("URI", "URI")}} und einer {{Glossary("URL", "URL")}}. Ein URI identifiziert eine Ressource. Eine URL ist ein Typ von URI und beschreibt den _Ort_ einer Ressource. Ein URI kann entweder eine URL oder ein Name ({{Glossary("URN", "URN")}}) einer Ressource sein.
>
> In CSS Level 1 beschrieb die `url()`-Funktionalnotation nur echte URLs. In CSS Level 2 wurde die Definition von `url()` erweitert, um jeden URI zu beschreiben, sei es eine URL oder eine URN. Verwirrenderweise bedeutete dies, dass `url()` verwendet werden konnte, um einen `<uri>`-CSS-Datentyp zu erstellen. Diese Änderung war nicht nur ungeschickt, sondern, fraglich, auch unnötig, da URNs in tatsächlichem CSS fast nie verwendet werden. Um die Verwirrung zu verringern, kehrte CSS Level 3 zur engeren, ursprünglichen Definition zurück. Jetzt bezeichnet `url()` nur echte `<url>`s.

Relative URLs, falls verwendet, sind relativ zur URL des Stylesheets (nicht zur URL der Webseite).

Die **`url()`**-Funktion kann als Wert verwendet werden für
{{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}},
[src](/de/docs/Web/CSS/@font-face/src) als Teil eines [`@font-face`](/de/docs/Web/CSS/@font-face)-Blocks und [@counter-style/`symbol`](/de/docs/Web/CSS/@counter-style/symbols)

## Syntax

```css
/* Basic usage */
url("https://example.com/images/myImg.jpg");
url('https://example.com/images/myImg.jpg');
url(https://example.com/images/myImg.jpg);
url("data:image/jpeg;base64,iRxVB0…");
url(myImg.jpg);
url(#IDofSVGpath);

/* associated properties */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("my-icon.jpg");
cursor: url(my-cursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantastic-font.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* Properties with fallbacks */
cursor: url(pointer.cur), pointer;

/* Associated short-hand properties */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* As a parameter in another CSS function */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(black, transparent));

/* as part of a non-shorthand multiple value */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* at-rules */
@document url("https://www.example.com/") { /* … */ }
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

### Werte

- `<string>`
  - : Ein String, der eine URL spezifiziert, die eine relative oder absolute Adresse oder ein Zeiger zu der einzubindenden Webressource ist, oder eine Daten-URL. Sie können auch eine Hash-URL verwenden, um die ID einer [SVG-Form](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes) oder eines [SVG-Filters](/de/docs/Web/SVG/Reference/Element/filter) zu referenzieren.

    Die Anführungszeichen sind im Allgemeinen optional – sie sind erforderlich, wenn die URL Klammern, Leerzeichen oder Anführungszeichen enthält (es sei denn, diese Zeichen sind escaped), oder wenn die Adresse Steuerzeichen über 0x7e enthält. Normale String-Syntaxregeln gelten: Anführungszeichen können nicht innerhalb von Anführungszeichen selbst vorkommen, es sei denn, sie sind escaped.

- `<url-modifier>`
  - : In Zukunft könnte die `url()`-Funktion die Angabe eines Modifikators, eines Bezeichners oder einer Funktionsnotation unterstützen, die die Bedeutung des URL-Strings verändert. Dies wird jedoch nicht unterstützt und ist in der Spezifikation nicht vollständig definiert.

## Formale Syntax

{{CSSSyntax("url")}}

## Beispiele

### Als Wert der Background-Eigenschaft

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #00d no-repeat fixed;
}
```

{{EmbedLiveSample("Als Wert der Background-Eigenschaft", "100%", "200")}}

### Um ein Bild als Aufzählungszeichen zu setzen

```html hidden
<ul>
  <li>one</li>
  <li>two</li>
  <li>there</li>
</ul>
```

```css hidden
ul {
  font-size: 3rem;
  margin: 0;
}
```

```css
ul {
  list-style: outside
    url("https://mdn.github.io/shared-assets/images/examples/firefox-logo.svg");
}
```

{{EmbedLiveSample("Um ein Bild als Aufzählungszeichen zu setzen", "100%", "200")}}

### Verwendung in der Content-Eigenschaft

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

#### CSS

```css
li::after {
  content: " - "
    url("https://mdn.github.io/shared-assets/images/examples/star-white_16x16.png");
}
```

#### Ergebnis

{{EmbedLiveSample("Verwendung_in_der_Content-Eigenschaft", "100%", "110")}}

### Verwendung einer Daten-URL

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("Verwendung_einer_Daten-URL", "100%", 100)}}

### Verwendung in Filtern

Wenn eine URL als Pfad für einen Filter verwendet wird, muss die URL eine der folgenden sein:

1. Der Pfad zu einer SVG-Datei, an den die ID des Filters angehängt wird.
2. Die ID des Filters, wenn das SVG bereits auf der Seite existiert.

```css
.blur {
  filter: url("my-file.svg#svg-blur"); /* the URL of an SVG file used as a filter */
}

.inline-blur {
  filter: url("#svg-blur"); /* the ID of an SVG that is embedded in the HTML page */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
