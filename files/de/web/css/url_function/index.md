---
title: url()
slug: Web/CSS/url_function
l10n:
  sourceCommit: b6f6c10c9c3a73e8a1f1c7bc643b44b2521cb234
---

{{CSSRef}}

Die **`url()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um eine Datei einzubinden. Der Parameter ist eine absolute URL, eine relative URL, eine Blob-URL oder eine Daten-URL. Die **`url()`** Funktion kann als Parameter einer anderen CSS-Funktion übergeben werden, wie der {{cssxref("attr")}} Funktion. Abhängig von der Eigenschaft, für die sie ein Wert ist, kann die gesuchte Ressource ein Bild, eine Schriftart oder ein Stylesheet sein. Die `url()` Funktionsnotation ist der Wert für den `<url>` Datentyp.

> [!NOTE]
> Es gibt einen Unterschied zwischen einem {{Glossary("URI")}} und einer {{Glossary("URL")}}. Ein URI identifiziert eine Ressource. Eine URL ist eine Art von URI und beschreibt den _Standort_ einer Ressource. Ein URI kann entweder eine URL oder ein Name ({{Glossary("URN")}}) einer Ressource sein.
>
> In CSS Level 1 beschrieb die `url()` Funktionsnotation nur echte URLs. In CSS Level 2 wurde die Definition von `url()` erweitert, um jeden URI zu beschreiben, sei es eine URL oder ein URN. Verwirrenderweise bedeutete dies, dass `url()` verwendet werden konnte, um einen `<uri>` CSS-Datentyp zu erstellen. Diese Änderung war nicht nur umständlich, sondern auch, diskutabel, unnötig, da URNs in tatsächlichem CSS fast nie verwendet werden. Um die Verwirrung zu lindern, kehrte CSS Level 3 zur engeren, ursprünglichen Definition zurück. Jetzt bezeichnet `url()` nur echte `<url>`s.

```css
/* Einfache Verwendung */
url("https://example.com/images/myImg.jpg");
url('https://example.com/images/myImg.jpg');
url(https://example.com/images/myImg.jpg);
url("data:image/jpg;base64,iRxVB0…");
url(myImg.jpg);
url(#IDofSVGpath);

/* Zugehörige Eigenschaften */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(mycursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantasticfont.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* Eigenschaften mit Fallbacks */
cursor: url(pointer.cur), pointer;

/* Zugehörige Kurznotierungseigenschaften */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* Als Parameter in einer anderen CSS-Funktion */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgb(0 0 0 / 100%), transparent));

/* als Teil eines Nicht-Kurznotation Mehrfachwertes */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* @-Regeln */
@document url("https://www.example.com/") { /* … */ }
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

Relative URLs, wenn verwendet, sind relativ zur URL des Stylesheets (nicht zur URL der Webseite).

Die **`url()`** Funktion kann als Wert für {{cssxref('background')}}, {{cssxref('background-image')}}, {{cssxref('border')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, {{cssxref('content')}}, {{cssxref('cursor')}}, {{cssxref('filter')}}, {{cssxref('list-style')}}, {{cssxref('list-style-image')}}, {{cssxref('mask')}}, {{cssxref('mask-image')}}, {{cssxref('offset-path')}}, {{cssxref('clip-path')}}, [src](/de/docs/Web/CSS/@font-face/src) als Teil eines [`@font-face`](/de/docs/Web/CSS/@font-face) Blocks und [@counter-style/`symbol`](/de/docs/Web/CSS/@counter-style/symbols) eingebunden werden.

## Syntax

### Werte

- `<string>`

  - : Ein String, der möglicherweise eine URL oder die ID einer SVG-Form angibt.

    - url

      - : Eine URL, die eine relative oder absolute Adresse, oder ein Verweis auf die einzubindende Webressource oder eine Daten-URL ist, optional in einfachen oder doppelten Anführungszeichen. Anführungszeichen sind erforderlich, wenn die URL Klammern, Leerzeichen oder Anführungszeichen enthält, es sei denn, diese Zeichen sind entkommen, oder wenn die Adresse Steuerzeichen über 0x7e enthält. Doppelte Anführungszeichen können nicht innerhalb doppelter Anführungszeichen auftreten und einzelne Anführungszeichen nicht innerhalb einzelner Anführungszeichen, es sei denn, sie sind entkommen. Die Folgenden sind alle gültig und gleichwertig:

        ```css
        <css_property>: url("https://example.com/image.png")
        <css_property>: url('https://example.com/image.png')
        <css_property>: url(https://example.com/image.png)
        ```

        Wenn Sie wählen, die URL ohne Anführungszeichen zu schreiben, verwenden Sie einen Rückwärtsstrich (`\`) vor allen Klammern, Leerzeichen, einfachen Anführungszeichen (`'`) und doppelten Anführungszeichen (`"`) die Teil der URL sind.

    - path
      - : Verweist auf die ID einer [SVG-Form](/de/docs/Web/SVG/Tutorial/Basic_Shapes) oder eines [SVG-Filters](/de/docs/Web/SVG/Element/filter).

- `<url-modifier>`
  - : In Zukunft könnte die `url()` Funktion das Spezifizieren eines Modifikators unterstützen, eines Identifikators oder einer funktionalen Notation, die die Bedeutung des URL-Strings verändert. Dies wird nicht unterstützt und ist nicht vollständig in der Spezifikation definiert.

### Formale Syntax

```plain
url( <string> <url-modifier>* )
```

## Beispiele

### Als Wert der background-Eigenschaft

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #00d no-repeat fixed;
}
```

{{EmbedLiveSample("Als Wert der background-Eigenschaft", "100%", "200")}}

### Zum Setzen eines Bildes als Listenbullet

```html hidden
<ul>
  <li>eins</li>
  <li>zwei</li>
  <li>drei</li>
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

{{EmbedLiveSample("Zum Setzen eines Bildes als Listenbullet", "100%", "200")}}

### Verwendung in der content-Eigenschaft

#### HTML

```html
<ul>
  <li>Eins</li>
  <li>Zwei</li>
  <li>Drei</li>
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

{{EmbedLiveSample("Verwendung in der content-Eigenschaft", "100%", "110")}}

### Verwendung einer Daten-URL

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("Verwendung einer Daten-URL", "100%", 100)}}

### Verwendung in Filtern

Wenn eine URL als Pfad für einen Filter verwendet wird, muss die URL eines der folgenden sein:

1. Der Pfad zu einer SVG-Datei mit angehängter ID des Filters.
2. die ID des Filters, wenn die SVG bereits auf der Seite vorhanden ist.

```css
.blur {
  filter: url(my-file.svg#svg-blur); /* die URL einer SVG-Datei, die als Filter verwendet wird */
}

.inline-blur {
  filter: url(#svg-blur); /* die ID eines SVGs, das im HTML-Dokument eingebunden ist */
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
