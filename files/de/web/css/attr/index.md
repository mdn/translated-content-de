---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell, und die Unterstützung für den Parameter type-or-unit ist spärlich.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und im Stylesheet zu verwenden. Sie kann auch auf [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) angewendet werden, wobei in diesem Fall der Wert des Attributs des ursprünglichen Elements des Pseudoelements zurückgegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-attr.html", "tabbed-shorter")}}

## Syntax

```css
/* Simple usage */
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
  - : Der Name eines Attributs des HTML-Elements, das im CSS referenziert wird.
- `<type-or-unit>`

  - : Ein Schlüsselwort, das entweder den Typ des Attributwerts oder dessen Einheit darstellt, da in HTML einige Attribute implizite Einheiten haben. Ist die Verwendung von `<type-or-unit>` als Wert für das gegebene Attribut ungültig, so wird auch der `attr()`-Ausdruck ungültig. Falls nicht angegeben, ist der Standard `"string"`. Die Liste der gültigen Werte ist:

    - `string`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;string&gt;")}} behandelt. Er wird NICHT erneut geparst, und insbesondere werden die Zeichen unverändert verwendet, anstatt dass CSS-Escapes in andere Zeichen umgewandelt werden.

        Standardwert: ein leerer String.

    - `color`

      - : Der Attributwert wird als Hash (3- oder 6-stelliger Hash) oder Schlüsselwort geparst. Er muss ein gültiger CSS {{CSSxRef("&lt;string&gt;")}}-Wert sein. Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `currentcolor`.

    - `url`

      - : Der Attributwert wird als String geparst, der innerhalb einer CSS `url()`-Funktion verwendet wird.
        Relative URLs werden relativ zum ursprünglichen Dokument aufgelöst, nicht relativ zum Stylesheet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: die URL `about:invalid`, die auf ein nicht-existierendes Dokument mit einem generischen Fehlerzustand verweist.

    - `integer`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;integer&gt;")}} geparst. Ist er ungültig, also kein Integer oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, falls `0` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `number`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, falls `0` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `length`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;length&gt;")}} Dimension geparst, also einschließlich der Einheit (z.B. `12.5em`). Ist er ungültig, also keine Länge oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn die angegebene Einheit eine relative Länge ist, berechnet `attr()` sie zu einer absoluten Länge.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, falls `0` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, oder `pc`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;length&gt;")}} mit der angegebenen Einheit interpretiert. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn die angegebene Einheit eine relative Länge ist, berechnet `attr()` sie zu einer absoluten Länge.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, falls `0` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `angle`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;angle&gt;")}} Dimension geparst, also einschließlich der Einheit (z.B. `30.5deg`). Ist er ungültig, also kein Winkel oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, falls `0deg` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `deg`, `grad`, `rad`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;angle&gt;")}} mit der angegebenen Einheit interpretiert. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, falls `0deg` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `time`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;time&gt;")}} Dimension geparst, also einschließlich der Einheit (z.B. `30.5ms`). Ist er ungültig, also keine Zeit oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, falls `0s` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `s`, `ms`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;time&gt;")}} mit der angegebenen Einheit interpretiert. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, falls `0s` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `frequency`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;frequency&gt;")}} Dimension geparst, also einschließlich der Einheit (z.B. `30.5kHz`). Ist er ungültig, also keine Frequenz oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.

        Standardwert: `0Hz`, oder, falls `0Hz` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `Hz`, `kHz`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;frequency&gt;")}} mit der angegebenen Einheit interpretiert. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0Hz`, oder, falls `0Hz` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

    - `%`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;percentage&gt;")}} interpretiert. Ist er ungültig, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs, wird der Standardwert verwendet.
        Wenn der angegebene Wert als Länge verwendet wird, berechnet `attr()` ihn zu einer absoluten Länge.
        Führende und abschließende Leerzeichen werden entfernt.

        Standardwert: `0%`, oder, falls `0%` für die Eigenschaft kein gültiger Wert ist, der Mindestwert der Eigenschaft.

- `<fallback>`
  - : Der Wert, der verwendet wird, wenn das zugehörige Attribut fehlt oder einen ungültigen Wert enthält. Falls nicht gesetzt, verwendet CSS den Standardwert, der für jedes `<type-or-unit>` definiert ist.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### content-Eigenschaft

In diesem Beispiel fügen wir den Wert des `data-foo` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) den Inhalten des {{HTMLElement("p")}} Elements voran.

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

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes), das dem {{HTMLElement("div")}} Element zugewiesen ist.

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

### Nutzung des Fallbacks

{{SeeCompatTable}}

In diesem Beispiel fügen wir den Wert des `data-browser` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) dem {{HTMLElement("p")}} Element hinzu. Wenn das `data-browser` Attribut im {{HTMLElement("p")}} Element fehlt, fügen wir den _Fallback_-Wert "**Unknown**" hinzu.

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
