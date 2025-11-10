---
title: url()
slug: Web/CSS/Reference/Values/url_function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`url()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um eine Datei einzubinden. Der Parameter ist eine absolute URL, eine relative URL, eine Blob-URL oder eine Daten-URL. Die **`url()`** Funktion kann als Parameter einer anderen CSS-Funktion, wie der {{cssxref("attr")}} Funktion, übergeben werden. Abhängig von der Eigenschaft, für die sie als Wert verwendet wird, kann die gesuchte Ressource ein Bild, eine Schriftart oder ein Stylesheet sein. Die `url()` Funktionsnotation ist der Wert für den `<url>` Datentyp.

> [!NOTE]
> Es gibt einen Unterschied zwischen einer {{Glossary("URI", "URI")}} und einer {{Glossary("URL", "URL")}}. Eine URI identifiziert eine Ressource. Eine URL ist ein Typ von URI und beschreibt den _Ort_ einer Ressource. Eine URI kann entweder eine URL oder ein Name ({{Glossary("URN", "URN")}}) einer Ressource sein.
>
> In CSS Level 1 beschrieb die `url()` Funktionsnotation nur echte URLs. In CSS Level 2 wurde die Definition von `url()` erweitert, um jede URI zu beschreiben, egal ob URL oder URN. Verwirrenderweise bedeutete dies, dass `url()` verwendet werden konnte, um einen `<uri>` CSS-Datentyp zu erstellen. Diese Änderung war nicht nur ungeschickt, sondern diskussionswürdig auch unnötig, da URNs fast nie in aktuellem CSS verwendet werden. Um die Verwirrung zu mildern, kehrte CSS Level 3 zur engeren, ursprünglichen Definition zurück. Jetzt bezeichnet `url()` nur noch echte `<url>`s.

Relative URLs, falls verwendet, sind relativ zur URL des Stylesheets (und nicht zur URL der Webseite).

Die **`url()`** Funktion kann als Wert für
{{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}},
[src](/de/docs/Web/CSS/Reference/At-rules/@font-face/src) als Teil eines [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) Blocks, und [@counter-style/`symbol`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) verwendet werden.

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
  - : Ein String, der eine URL angibt, die eine relative oder absolute Adresse oder ein Zeiger auf die einzubindende Webressource ist oder eine Daten-URL. Sie können auch eine Hash-URL verwenden, um die ID eines [SVG-Formelements](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes) oder eines [SVG-Filters](/de/docs/Web/SVG/Reference/Element/filter) zu referenzieren.

    Die Anführungszeichen sind generell optional – sie sind erforderlich, wenn die URL Klammern, Leerzeichen oder Anführungszeichen (es sei denn, diese Zeichen sind escaped) enthält oder wenn die Adresse Steuerzeichen oberhalb von 0x7e enthält. Normale String-Syntaxregeln gelten: Doppelte Anführungszeichen können nicht innerhalb von doppelten Anführungszeichen und einfache Anführungszeichen nicht innerhalb von einfachen Anführungszeichen vorkommen, es sei denn, sie sind escaped.

- `<url-modifier>`
  - : In Zukunft kann die `url()` Funktion die Angabe eines Modifikators unterstützen, einer Kennung oder einer Funktionsnotation, die die Bedeutung des URL-Strings ändert. Dies wird nicht unterstützt und ist in der Spezifikation nicht vollständig definiert.

## Formale Syntax

{{CSSSyntax("url")}}

## Beispiele

### Als Wert der Hintergrundeigenschaft

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #0000dd no-repeat fixed;
}
```

{{EmbedLiveSample("As the background property value", "100%", "200")}}

### Für die Einstellung eines Bildes als Listenpunkt

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

{{EmbedLiveSample("For setting an image as a list bullet", "100%", "200")}}

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

{{EmbedLiveSample("Usage_in_the_content_property", "100%", "110")}}

### Verwendung einer Daten-URL

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("Using_a_data_URL", "100%", 100)}}

### Verwendung in Filtern

Wenn eine URL als Pfad für einen Filter verwendet wird, muss die URL eine der folgenden sein:

1. Der Pfad zu einer SVG-Datei mit angehängter ID des Filters.
2. die ID des Filters, wenn das SVG bereits auf der Seite existiert.

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
