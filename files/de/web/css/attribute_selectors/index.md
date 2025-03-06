---
title: Attributselektoren
slug: Web/CSS/Attribute_selectors
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Der CSS-**Attributselektor** wählt Elemente basierend darauf aus, dass das Element ein bestimmtes Attribut explizit gesetzt hat, mit Optionen zur Definition eines Attributwert- oder Teilstringwertabgleichs.

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
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

## Syntax

- `[attr]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_.
- `[attr=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert genau _value_ ist.
- `[attr~=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert eine durch Leerzeichen getrennte Liste von Wörtern ist, von denen eines genau _value_ ist.
- `[attr|=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert genau _value_ sein kann oder mit _value_ beginnt, gefolgt von einem Bindestrich, `-` (U+002D). Es wird oft für Sprachuntercode-Abgleiche verwendet.
- `[attr^=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert mit _value_ beginnt.
- `[attr$=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert auf _value_ endet.
- `[attr*=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert mindestens ein Vorkommen von _value_ innerhalb des Strings enthält.
- `[attr operator value i]`
  - : Ein `i` (oder `I`) vor der schließenden Klammer sorgt dafür, dass der Wert ohne Berücksichtigung der Groß-/Kleinschreibung verglichen wird (für Zeichen innerhalb des {{Glossary("ASCII", "ASCII")}}-Bereichs).
- `[attr operator value s]`
  - : Ein `s` (oder `S`) vor der schließenden Klammer sorgt dafür, dass der Wert unter Berücksichtigung der Groß-/Kleinschreibung verglichen wird (für Zeichen innerhalb des {{Glossary("ASCII", "ASCII")}}-Bereichs).

### Werte

- `<attr>`
  - : Ein {{cssxref("ident")}}, also der nicht in Anführungszeichen gesetzte Name des Attributs. Dies kann jedes gültige, sprachspezifische Attribut sein (SVG, HTML, XML usw.), ein [`data-*` Attribut](/de/docs/Web/HTML/Global_attributes/data-*), oder ein vom Autor erstelltes Attribut.
- `<value>`
  - : Ein {{cssxref("ident")}} oder {{cssxref("string")}}, der den Attributwert darstellt. Der Wert muss in Anführungszeichen gesetzt werden, wenn er Leerzeichen oder Sonderzeichen enthält.
- `s` oder `i`
  - : Flag für Groß-/Kleinschreibung. Wenn vor der schließenden Klammer (`]`) eingeschlossen, macht es den Wert groß-/kleinschreibungssensitiv oder insensitiv, unabhängig von der Auszeichnungssprache.

## Beschreibung

Die Groß- und Kleinschreibung von Attributnamen und -werten hängt von der Dokumentsprache ab. In HTML sind Attributnamen groß-/kleinschreibungsinsensitiv, ebenso wie spezifizierte {{Glossary("enumerated", "enumerierte")}} Werte. Die [groß-/kleinschreibungsinsensitiven HTML-Attributwerte](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) sind in der HTML-Spezifikation aufgeführt. Für diese Attribute ist der Attributwert im Selektor groß-/kleinschreibungsinsensitiv, unabhängig davon, ob der Wert ungültig ist oder das Attribut für das Element, auf dem es gesetzt ist, ungültig ist.

Wenn der Attributwert groß-/kleinschreibungssensitiv ist, wie bei den Attributen [`class`](/de/docs/Web/HTML/Global_attributes/class), [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*), ist der Attributselektorwertabgleich groß-/kleinschreibungssensitiv. Attribute, die außerhalb der HTML-Spezifikation definiert sind, wie etwa [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Attribute, sind ebenfalls groß-/kleinschreibungssensitiv. Groß-/kleinschreibungssensitive Attributselektoren können durch die Hinzufügung des groß-/kleinschreibungsinsensitiven Modifikators (`i`) groß-/kleinschreibungsinsensitiv gemacht werden.

## Beispiele

### Links

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
a[href^="https://"][href$=".org"]
{
  color: green;
}
```

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

#### Ergebnis

{{EmbedLiveSample("Links")}}

### Sprachen

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

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-Hans-CN">世界您好！</div>
<div lang="zh-Hant-TW">世界您好！</div>
<div data-lang="zh-Hant-TW">世界您好！</div>
```

#### Ergebnis

{{EmbedLiveSample("Languages")}}

### HTML nummerierte Listen

Die HTML-Spezifikation erfordert, dass das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut groß-/kleinschreibungsinsensitiv übereinstimmt, da es hauptsächlich im {{HTMLElement("input")}} Element verwendet wird.
Beachten Sie, dass, wenn ein Modifikator von der Benutzerumgebung nicht unterstützt wird, der Selektor nicht übereinstimmen wird.

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

#### Ergebnis

{{EmbedLiveSample("HTML_ordered_lists")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("attr")}}
- Auswahl eines einzelnen Elements: [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector), oder [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- Auswahl aller übereinstimmenden Elemente: [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll), oder [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [Groß-/kleinschreibungsinsensitive Attributselektorwerte](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) auf WHATWG
