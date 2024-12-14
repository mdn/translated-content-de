---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, jedoch ist die Unterstützung für Eigenschaften außer {{CSSxRef("content")}} experimentell, und die Unterstützung für den Typ-oder-Einheit-Parameter ist spärlich.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und im Stylesheet zu verwenden. Sie kann auch auf [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, in welchem Fall der Wert des Attributs des ursprünglichen Elements des Pseudo-Elements zurückgegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-attr.html", "tabbed-shorter")}}

## Syntax

```css
/* Basic usage */
attr(data-count);
attr(title);

/* With type */
attr(src url);
attr(data-count number);
attr(data-width px);

/* With fallback */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

### Werte

- `attribute-name`
  - : Der Name eines Attributs des in CSS referenzierten HTML-Elements.
- `<type-or-unit>`

  - : Ein Schlüsselwort, das entweder den Typ des Attributwertes oder seine Einheit darstellt, da in HTML einige Attribute implizite Einheiten haben. Wenn die Verwendung von `<type-or-unit>` als Wert für das gegebene Attribut ungültig ist, ist auch der `attr()`-Ausdruck ungültig. Wenn weggelassen, wird `string` als Standard verwendet. Die Liste der gültigen Werte ist:

    - `string`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;string&gt;")}} behandelt. Er wird NICHT erneut geparst, insbesondere werden die Zeichen unverändert verwendet, anstatt dass CSS-Escapes in andere Zeichen umgewandelt werden.

        Standardwert: ein leerer String.

    - `color`

      - : Der Attributwert wird als Hash (3- oder 6-stelliger Hash) oder als Schlüsselwort geparst. Es muss ein gültiger CSS {{CSSxRef("&lt;string&gt;")}}-Wert sein. Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `currentcolor`.

    - `url`

      - : Der Attributwert wird als ein String geparst, der innerhalb einer CSS `url()`-Funktion verwendet wird.
        Relative URLs werden relativ zum ursprünglichen Dokument aufgelöst, nicht relativ zum Stylesheet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: die URL `about:invalid`, die auf ein nicht existierendes Dokument mit einem generischen Fehlerzustand verweist.

    - `integer`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;integer&gt;")}} geparst. Wenn er ungültig ist, das heißt, kein Integer oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `number`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}} geparst. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `length`

      - : Der Attributwert wird als eine CSS {{CSSxRef("&lt;length&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `12.5em`). Wenn er ungültig ist, das heißt, keine Länge oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn die gegebene Einheit eine relative Länge ist, berechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, oder `pc`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}}, das heißt ohne die Einheit (z.B. `12.5`), geparst und als eine {{CSSxRef("&lt;length&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn die gegebene Einheit eine relative Länge ist, berechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `angle`

      - : Der Attributwert wird als eine CSS {{CSSxRef("&lt;angle&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5deg`). Wenn er ungültig ist, das heißt, kein Winkel oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `deg`, `grad`, `rad`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}}, das heißt ohne die Einheit (z.B. `12.5`), geparst und als ein {{CSSxRef("&lt;angle&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `time`

      - : Der Attributwert wird als eine CSS {{CSSxRef("&lt;time&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5ms`). Wenn er ungültig ist, das heißt, keine Zeit oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `s`, `ms`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}}, das heißt ohne die Einheit (z.B. `12.5`), geparst und als ein {{CSSxRef("&lt;time&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `frequency`

      - : Der Attributwert wird als eine CSS {{CSSxRef("&lt;frequency&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5kHz`). Wenn er ungültig ist, das heißt, keine Frequenz oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `Hz`, `kHz`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}}, das heißt ohne die Einheit (z.B. `12.5`), geparst und als eine {{CSSxRef("&lt;frequency&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `%`

      - : Der Attributwert wird als ein CSS {{CSSxRef("&lt;number&gt;")}}, das heißt ohne die Einheit (z.B. `12.5`), geparst und als ein {{CSSxRef("&lt;percentage&gt;")}} interpretiert. Wenn er ungültig ist, das heißt, keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn der gegebene Wert als Länge verwendet wird, berechnet `attr()` ihn in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0%`, oder, wenn `0%` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

- `<fallback>`
  - : Der Wert, der verwendet werden soll, wenn das zugehörige Attribut fehlt oder einen ungültigen Wert enthält. Wenn nicht gesetzt, verwendet CSS den Standardwert, der für jedes `<type-or-unit>` definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### content-Eigenschaft

In diesem Beispiel fügen wir dem Inhalt des {{HTMLElement("p")}}-Elements den Wert des `data-foo` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) voran.

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### Ergebnis

{{EmbedLiveSample("content_property", "100%", 50)}}

### color-Wert

{{SeeCompatTable}}

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

#### HTML

```html
<div class="background" data-background="lime">
  background expected to be red if your browser does not support advanced usage
  of attr()
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}
```

#### Ergebnis

{{EmbedLiveSample("color_value", "100%", 50)}}

### Verwendung eines Fallbacks

{{SeeCompatTable}}

In diesem Beispiel fügen wir dem {{HTMLElement("p")}}-Element den Wert des `data-browser` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) hinzu. Wenn das `data-browser`-Attribut im {{HTMLElement("p")}}-Element fehlt, fügen wir den _Fallback_-Wert "**Unknown**" hinzu.

#### HTML

```html
<p data-browser="Firefox">My favorite browser is:</p>
<p>Your favorite browser is:</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "Unknown");
  color: tomato;
}
```

#### Ergebnis

{{EmbedLiveSample("using_fallback", "100%", 90)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` Attribute](/de/docs/Web/SVG/Attribute/data-*)
