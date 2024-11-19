---
title: url()
slug: Web/CSS/url_function
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`url()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um eine Datei einzubinden. Der Parameter ist eine absolute URL, eine relative URL, eine Blob-URL oder eine Daten-URL. Die **`url()`**-Funktion kann als Parameter einer anderen CSS-Funktion übergeben werden, wie der {{cssxref("attr")}}-Funktion. Abhängig von der Eigenschaft, für die sie ein Wert ist, kann die gesuchte Ressource ein Bild, eine Schriftart oder ein Stylesheet sein. Die `url()`-Funktionsnotation ist der Wert für den `<url>`-Datentyp.

> [!NOTE]
> Es gibt einen Unterschied zwischen einem {{Glossary("URI", "URI")}} und einer {{Glossary("URL", "URL")}}. Ein URI identifiziert eine Ressource. Eine URL ist eine Art URI und beschreibt den _Standort_ einer Ressource. Ein URI kann entweder eine URL oder ein Name ({{Glossary("URN", "URN")}}) einer Ressource sein.
>
> In CSS Level 1 beschrieb die `url()`-Funktionsnotation nur echte URLs. In CSS Level 2 wurde die Definition von `url()` erweitert, um jeden URI zu beschreiben, sei es eine URL oder ein URN. Verwirrenderweise bedeutete dies, dass `url()` verwendet werden konnte, um einen `<uri>`-CSS-Datentyp zu erstellen. Diese Änderung war nicht nur umständlich, sondern möglicherweise unnötig, da URNs fast nie in tatsächlichem CSS verwendet werden. Um die Verwirrung zu lindern, kehrte CSS Level 3 zur engeren, ursprünglichen Definition zurück. Jetzt bezeichnet `url()` nur echte `<url>`s.

```css
/* Basic usage */
url("https://example.com/images/myImg.jpg");
url('https://example.com/images/myImg.jpg');
url(https://example.com/images/myImg.jpg);
url("data:image/jpg;base64,iRxVB0…");
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
mask-image: image(url(mask.png), skyblue, linear-gradient(rgb(0 0 0 / 100%), transparent));

/* as part of a non-shorthand multiple value */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* at-rules */
@document url("https://www.example.com/") { /* … */ }
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

Relative URLs, wenn verwendet, sind relativ zur URL des Stylesheets (nicht zur URL der Webseite).

Die **`url()`**-Funktion kann als Wert für
{{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}},
[src](/de/docs/Web/CSS/@font-face/src) als Teil eines [`@font-face`](/de/docs/Web/CSS/@font-face) Blocks und [@counter-style/`symbol`](/de/docs/Web/CSS/@counter-style/symbols) verwendet werden.

## Syntax

### Werte

- `<string>`

  - : Ein String, der eine URL oder die ID einer SVG-Form spezifizieren kann.

    - url

      - : Eine URL, die eine relative oder absolute Adresse, oder ein Zeiger auf die einzubindende Web-Ressource oder eine Daten-URL ist, optional in einfachen oder doppelten Anführungszeichen. Anführungszeichen sind erforderlich, wenn die URL Klammern, Leerzeichen oder Anführungszeichen enthält, es sei denn, diese Zeichen sind maskiert, oder wenn die Adresse Steuerzeichen oberhalb von 0x7e enthält. Doppelte Anführungszeichen können nicht innerhalb doppelter Anführungszeichen stehen und einfache Anführungszeichen nicht innerhalb einfacher Anführungszeichen, es sei denn, sie sind maskiert. Folgende Beispiele sind alle gültig und gleichwertig:

        ```css
        <css_property>: url("https://example.com/image.png")
        <css_property>: url('https://example.com/image.png')
        <css_property>: url(https://example.com/image.png)
        ```

        Wenn Sie sich dafür entscheiden, die URL ohne Anführungszeichen zu schreiben, verwenden Sie einen Rückwärts-Schrägstrich (`\`) vor allen Klammern, Leerzeichen, einfachen Anführungszeichen (`'`) und doppelten Anführungszeichen (`"`) die Teil der URL sind.

    - path
      - : Referenziert die ID einer [SVG-Form](/de/docs/Web/SVG/Tutorial/Basic_Shapes) oder eines [SVG-Filters](/de/docs/Web/SVG/Element/filter).

- `<url-modifier>`
  - : In der Zukunft könnte die `url()`-Funktion die Spezifikation eines Modifikators, eines Identifikators oder einer Funktionsnotation unterstützen, der die Bedeutung des URL-Strings verändert. Dies wird nicht unterstützt und ist in der Spezifikation nicht vollständig definiert.

### Formale Syntax

```plain
url( <string> <url-modifier>* )
```

## Beispiele

### Als Wert der Hintergrund-Eigenschaft

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #00d no-repeat fixed;
}
```

{{EmbedLiveSample("As the background property value", "100%", "200")}}

### Zur Einstellung eines Bildes als Listenkugel

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

### Verwendung in der Inhalteigenschaft

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
  filter: url(my-file.svg#svg-blur); /* the URL of an SVG file used as a filter */
}

.inline-blur {
  filter: url(#svg-blur); /* the ID of an SVG that is embedded in the HTML page */
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
