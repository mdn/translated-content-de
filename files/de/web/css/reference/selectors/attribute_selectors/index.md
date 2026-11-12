---
title: Attributselektoren
slug: Web/CSS/Reference/Selectors/Attribute_selectors
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der CSS-**Attributselektor** wählt Elemente aus, bei denen ein bestimmtes Attribut ausdrücklich gesetzt ist. Optional kann festgelegt werden, dass ein Attributwert oder ein Teil davon übereinstimmen muss.

## Syntax

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org", case-insensitive */
a[href$=".org" i] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

- `[attr]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus.
- `[attr=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert genau _value_ ist.
- `[attr~=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert eine durch Leerraum getrennte Liste von Wörtern ist, von denen eines genau _value_ entspricht.
- `[attr|=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert entweder genau _value_ ist oder mit _value_ beginnt, unmittelbar gefolgt von einem Bindestrich, `-` (U+002D). Dies wird häufig zum Abgleichen von Sprachsubcodes verwendet.
- `[attr^=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert mit _value_ beginnt.
- `[attr$=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert mit _value_ endet.
- `[attr*=value]`
  - : Wählt Elemente mit einem Attribut namens _attr_ aus, dessen Wert _value_ mindestens einmal als Teilzeichenfolge enthält.
- `[attr operator value i]`
  - : Ein `i` (oder `I`) vor der schließenden Klammer bewirkt, dass der Wert ohne Berücksichtigung der Groß- und Kleinschreibung verglichen wird (für Zeichen im {{Glossary("ASCII", "ASCII")}}-Bereich).
- `[attr operator value s]`
  - : Ein `s` (oder `S`) vor der schließenden Klammer bewirkt, dass der Wert unter Berücksichtigung der Groß- und Kleinschreibung verglichen wird (für Zeichen im {{Glossary("ASCII", "ASCII")}}-Bereich).

### Werte

- `<attr>`
  - : Ein {{cssxref("ident")}}, also der Attributname ohne Anführungszeichen. Dies kann ein beliebiges gültiges sprachspezifisches Attribut (SVG, HTML, XML usw.), ein [`data-*`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*) oder ein selbst definiertes Attribut sein.
- `<value>`
  - : Ein {{cssxref("ident")}} oder {{cssxref("string")}}, das beziehungsweise der den Attributwert darstellt. Der Wert muss in Anführungszeichen stehen, wenn er Leerzeichen oder Sonderzeichen enthält.
- `s` oder `i`
  - : Kennzeichnung für die Berücksichtigung beziehungsweise Nichtberücksichtigung der Groß- und Kleinschreibung. Wenn sie vor der schließenden Klammer (`]`) steht, wird der Wert unabhängig von der Auszeichnungssprache entsprechend verglichen.

## Beschreibung

Ob bei Attributnamen und -werten die Groß- und Kleinschreibung berücksichtigt wird, hängt von der Dokumentsprache ab. In HTML wird bei Attributnamen ebenso wie bei spezifikationsdefinierten {{Glossary("enumerated", "aufgezählten")}} Werten die Groß- und Kleinschreibung nicht berücksichtigt. Die [HTML-Attributwerte, bei denen die Groß- und Kleinschreibung nicht berücksichtigt wird](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors), sind in der HTML-Spezifikation aufgeführt. Bei diesen Attributen wird beim Attributwert im Selektor die Groß- und Kleinschreibung nicht berücksichtigt – unabhängig davon, ob der Wert ungültig ist oder das Attribut für das Element, bei dem es gesetzt ist, ungültig ist.

Bei Attributwerten, bei denen die Groß- und Kleinschreibung berücksichtigt wird, etwa denen der Attribute [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class), [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*), berücksichtigt auch der Attributselektor beim Wertvergleich die Groß- und Kleinschreibung. Bei Attributen, die außerhalb der HTML-Spezifikation definiert sind, etwa [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), wird die Groß- und Kleinschreibung ebenfalls berücksichtigt. Durch Hinzufügen des Modifikators (`i`) können solche Attributselektoren Werte ohne Berücksichtigung der Groß- und Kleinschreibung vergleichen.

## Beispiele

### Links

#### HTML

```html
<ul>
  <li><a href="#internal">Internal link</a></li>
  <li><a href="http://example.com">Example link</a></li>
  <li><a href="#InSensitive">Insensitive internal link</a></li>
  <li><a href="http://example.org">Example org link</a></li>
  <li><a href="https://example.org">Example https org link</a></li>
</ul>
```

#### CSS

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}

/* Links that start with "https://" and end in ".org" */
a[href^="https://"][href$=".org"] {
  color: green;
}
```

#### Ergebnis

{{EmbedLiveSample("Links")}}

### Sprachen

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-Hans-CN">世界您好！</div>
<div lang="zh-Hant-TW">世界您好！</div>
<div data-lang="zh-Hant-TW">世界您好！</div>
```

#### CSS

```css
/* All divs with a `lang` attribute are bold. */
div[lang] {
  font-weight: bold;
}

/* All divs without a `lang` attribute are italicized. */
div:not([lang]) {
  font-style: italic;
}

/* All divs in US English are blue. */
div[lang~="en-us"] {
  color: blue;
}

/* All divs in Portuguese are green. */
div[lang="pt"] {
  color: green;
}

/* All divs in Chinese are red, whether
   simplified (zh-Hans-CN) or traditional (zh-Hant-TW). */
div[lang|="zh"] {
  color: red;
}

/* All divs with a Traditional Chinese
   `data-lang` are purple. */
/* Note: You could also use hyphenated attributes
   without double quotes */
div[data-lang="zh-Hant-TW"] {
  color: purple;
}
```

#### Ergebnis

{{EmbedLiveSample("Languages")}}

### Nummerierte HTML-Listen

Die HTML-Spezifikation verlangt, dass das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ohne Berücksichtigung der Groß- und Kleinschreibung abgeglichen wird, da es hauptsächlich im Element {{HTMLElement("input")}} verwendet wird.
Beachten Sie, dass der Selektor keine Übereinstimmung erzielt, wenn der User Agent einen Modifikator nicht unterstützt.

#### HTML

```html
<ol type="A">
  <li>
    Red background for case-insensitive matching (default for the type selector)
  </li>
</ol>
<ol type="i">
  <li>Lime background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="I">
  <li>Grey background if `s` modifier is supported (case-sensitive match)</li>
</ol>
<ol type="A">
  <li>
    Green background if `i` modifier is supported (case-insensitive match)
  </li>
</ol>
```

#### CSS

```css
/* Case-sensitivity depends on document language */
ol[type="a"]:first-child {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="i" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="I" s] {
  list-style-type: upper-alpha;
  background: grey;
}

ol[type="a" i] {
  list-style-type: upper-alpha;
  background: green;
}
```

#### Ergebnis

{{EmbedLiveSample("HTML_ordered_lists")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("attr")}}
- Ein einzelnes Element auswählen: [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) oder [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- Alle übereinstimmenden Elemente auswählen: [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll) oder [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [Attributselektorwerte ohne Berücksichtigung der Groß- und Kleinschreibung](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) auf WHATWG
