---
title: attr()
slug: Web/CSS/attr
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

> [!NOTE]
> Die Funktion `attr()` kann mit jeder CSS-Eigenschaft verwendet werden, aber die Unterstützung für Eigenschaften außer {{CSSxRef("content")}} ist experimentell, und die Unterstützung für den Parameter type-or-unit ist spärlich.

Die **`attr()`**-Funktion in [CSS](/de/docs/Web/CSS) wird verwendet, um den Wert eines Attributs des ausgewählten Elements abzurufen und im Stylesheet zu verwenden. Sie kann auch auf [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) angewendet werden, in diesem Fall wird der Attributwert des Ursprungs-Elements des Pseudo-Elements zurückgegeben.

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
  - : Der Name eines Attributs auf dem HTML-Element, das im CSS referenziert wird.
- `<type-or-unit>`

  - : Ein Schlüsselwort, das entweder den Typ des Attributwerts oder seine Einheit repräsentiert, da in HTML einige Attribute implizite Einheiten haben. Wenn die Verwendung von `<type-or-unit>` als Wert für das gegebene Attribut ungültig ist, wird der `attr()`-Ausdruck ebenfalls ungültig. Wenn weggelassen, ist der Standardwert `string`. Die Liste der gültigen Werte lautet:

    - `string`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;string&gt;")}} behandelt. Er wird NICHT erneut geparst, und insbesondere werden die Zeichen unverändert verwendet, anstatt dass CSS-Escapes in andere Zeichen umgewandelt werden.

        Standardwert: ein leerer String.

    - `color`

      - : Der Attributwert wird als Hash (3- oder 6-Werte-Hash) oder als Schlüsselwort geparst. Er muss ein gültiger CSS {{CSSxRef("&lt;string&gt;")}}-Wert sein. Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `currentcolor`.

    - `url`

      - : Der Attributwert wird als String geparst, der in einer CSS `url()`-Funktion verwendet wird.
        Relative URLs werden relativ zum ursprünglichen Dokument aufgelöst, nicht relativ zum Stylesheet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: die URL `about:invalid`, die auf ein nicht existierendes Dokument mit einem generischen Fehlerzustand zeigt.

    - `integer`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;integer&gt;")}} geparst. Wenn er ungültig ist, also keine ganze Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `number`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `length`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;length&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `12.5em`). Wenn er ungültig ist, also keine Länge oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Wenn die angegebene Einheit eine relative Länge ist, rechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, oder `pc`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;length&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Wenn die angegebene Einheit eine relative Länge ist, rechnet `attr()` sie in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0`, oder, wenn `0` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `angle`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;angle&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5deg`). Wenn er ungültig ist, also kein Winkel oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `deg`, `grad`, `rad`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;angle&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0deg`, oder, wenn `0deg` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `time`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;time&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5ms`). Wenn er ungültig ist, also keine Zeit oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `s`, `ms`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;time&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0s`, oder, wenn `0s` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `frequency`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;frequency&gt;")}}-Dimension geparst, einschließlich der Einheit (z.B. `30.5kHz`). Wenn er ungültig ist, also keine Frequenz oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `Hz`, `kHz`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;frequency&gt;")}} mit der angegebenen Einheit interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0Hz`, oder, wenn `0Hz` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

    - `%`

      - : Der Attributwert wird als CSS {{CSSxRef("&lt;number&gt;")}} geparst, also ohne die Einheit (z.B. `12.5`), und als {{CSSxRef("&lt;percentage&gt;")}} interpretiert. Wenn er ungültig ist, also keine Zahl oder außerhalb des akzeptierten Bereichs der CSS-Eigenschaft, wird der Standardwert verwendet.
        Wenn der gegebene Wert als Länge verwendet wird, rechnet `attr()` ihn in eine absolute Länge um.
        Führende und nachfolgende Leerzeichen werden entfernt.

        Standardwert: `0%`, oder, wenn `0%` kein gültiger Wert für die Eigenschaft ist, der Mindestwert der Eigenschaft.

- `<fallback>`
  - : Der Wert, der verwendet wird, wenn das zugeordnete Attribut fehlt oder einen ungültigen Wert enthält. Wenn nicht gesetzt, verwendet CSS den Standardwert, der für jeden `<type-or-unit>` definiert ist.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Property content

In diesem Beispiel fügen wir den Wert des `data-foo`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Global_attributes) vor den Inhalt des {{HTMLElement("p")}}-Elements.

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

### Farbwert

{{SeeCompatTable}}

In diesem Beispiel setzen wir den CSS-Wert von {{CSSXRef("background-color")}} auf den Wert des `data-background`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Global_attributes), das dem {{HTMLElement("div")}}-Element zugewiesen ist.

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

### Verwendung von Fallback

{{SeeCompatTable}}

In diesem Beispiel hängen wir den Wert des `data-browser`-[`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)-[globalen Attributs](/de/docs/Web/HTML/Global_attributes) an das {{HTMLElement("p")}}-Element an. Wenn das `data-browser`-Attribut im {{HTMLElement("p")}}-Element fehlt, hängen wir den _Fallback_-Wert "**Unbekannt**" an.

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

- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` Attribute](/de/docs/Web/SVG/Attribute/data-*)
