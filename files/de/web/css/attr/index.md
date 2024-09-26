---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

> [!NOTE]
> Die `attr()`-Funktion kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für andere Eigenschaften als {{CSSxRef("content")}} ist experimentell, und die Unterstützung für den Typ- oder Einheiten-Parameter ist spärlich.

Die **`attr()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und im Stylesheet zu verwenden. Sie kann auch auf [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) verwendet werden, wobei dann der Wert des Attributs des Ursprungs-Elements des Pseudoelements zurückgegeben wird.

{{EmbedInteractiveExample("pages/tabbed/function-attr.html", "tabbed-shorter")}}

## Syntax

```css
/* Einfache Nutzung */
attr(data-count);
attr(title);

/* Mit Typ */
attr(src url);
attr(data-count number);
attr(data-width px);

/* Mit Fallback */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
```

### Werte

- `attribute-name`
  - : Der Name eines Attributs auf dem in der CSS referenzierten HTML-Element.
- `<type-or-unit>`

  - : Ein Schlüsselwort, das entweder den Typ des Attributwerts oder seine Einheit darstellt, da einige Attribute in HTML implizite Einheiten haben. Wenn die Verwendung von `<type-or-unit>` als Wert für das gegebene Attribut ungültig ist, wird der `attr()`-Ausdruck ebenfalls ungültig. Wenn ausgelassen, ist der Standard `string`. Die Liste der gültigen Werte ist:

    - `string`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;string&gt;")}} behandelt. Er wird NICHT neu geparst, und insbesondere werden die Zeichen unverändert verwendet, anstatt dass CSS-Escapes in andere Zeichen umgewandelt werden.

        Standardwert: ein leerer String.

    - `color`

      - : Der Attributwert wird als Hash (3- oder 6-Wert-Hash) oder als Schlüsselwort geparst. Es muss ein gültiger CSS {{CSSxRef("&lt;string&gt;")}}-Wert sein. Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `currentcolor`.

    - `url`

      - : Der Attributwert wird als String geparst, der innerhalb einer CSS `url()` Funktion verwendet wird.
        Relative URLs werden relativ zum ursprünglichen Dokument und nicht relativ zum Stylesheet aufgelöst.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: die URL `about:invalid`, die auf ein nicht vorhandenes Dokument mit einer generischen Fehlerbedingung verweist.

    - `integer`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;integer&gt;")}} geparst. Wenn er ungültig ist, also kein ganzzahliger Wert oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `number`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `length`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;length&gt;")}} Dimension geparst, das heißt einschließlich der Einheit (z.B. `12.5em`). Wenn er ungültig ist, also keine Länge oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Wenn die gegebene Einheit eine relative Länge ist, berechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, oder `pc`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, das heißt ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;length&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Wenn die gegebene Einheit eine relative Länge ist, berechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `angle`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;angle&gt;")}} Dimension geparst, das heißt einschließlich der Einheit (z.B. `30.5deg`). Wenn er ungültig ist, also kein Winkel oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `deg`, `grad`, `rad`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, das heißt ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;angle&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `time`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;time&gt;")}} Dimension geparst, das heißt einschließlich der Einheit (z.B. `30.5ms`). Wenn er ungültig ist, also keine Zeit oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `s`, `ms`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, das heißt ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;time&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `frequency`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;frequency&gt;")}} Dimension geparst, das heißt einschließlich der Einheit (z.B. `30.5kHz`). Wenn er ungültig ist, also keine Frequenz oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `Hz`, `kHz`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, das heißt ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;frequency&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `%`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, das heißt ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;percentage&gt;")}} interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des von der CSS-Eigenschaft akzeptierten Bereichs liegt, wird der Standardwert verwendet.
        Wenn der angegebene Wert als Länge verwendet wird, berechnet `attr()` ihn in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0%`, oder, wenn `0%` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

- `<fallback>`
  - : Der Wert, der verwendet wird, wenn das zugehörige Attribut fehlt oder einen ungültigen Wert enthält. Wenn nicht gesetzt, verwendet CSS den Standardwert, der für jeden `<type-or-unit>` definiert ist.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### content-Eigenschaft

In diesem Beispiel fügen wir den Wert des `data-foo`[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)[globalen Attributs](/de/docs/Web/HTML/Global_attributes) den Inhalten des {{HTMLElement("p")}}-Elements voran.

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
  Hintergrund wird voraussichtlich rot sein, wenn Ihr Browser keine erweiterte Nutzung von attr() unterstützt
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

### Verwendung von Fallback

{{SeeCompatTable}}

In diesem Beispiel hängen wir den Wert des `data-browser` [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) [globalen Attributs](/de/docs/Web/HTML/Global_attributes) an das {{HTMLElement("p")}}-Element an. Falls das `data-browser`-Attribut im {{HTMLElement("p")}}-Element fehlt, hängen wir den _Fallback_-Wert "**Unbekannt**" an.

#### HTML

```html
<p data-browser="Firefox">Mein Lieblingsbrowser ist:</p>
<p>Ihr Lieblingsbrowser ist:</p>
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