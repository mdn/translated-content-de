---
title: Attributselektoren
slug: Web/CSS/Attribute_selectors
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}

Der CSS-**Attributselektor** wählt Elemente basierend darauf aus, dass ein gegebenes Attribut explizit gesetzt ist, mit Optionen zur Definition eines Attributwertes oder eines Teilstringwert-Matches.

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
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert eine leerzeichengetrennte Liste von Wörtern ist, von denen eines genau _value_ ist.
- `[attr|=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert genau _value_ sein kann oder mit _value_ beginnt, gefolgt von einem Bindestrich, `-` (U+002D). Wird häufig für Sprachuntercodes verwendet.
- `[attr^=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert mit _value_ beginnt.
- `[attr$=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert mit _value_ endet.
- `[attr*=value]`
  - : Repräsentiert Elemente mit einem Attributnamen _attr_, dessen Wert mindestens eine Vorkommen von _value_ innerhalb des Strings enthält.
- `[attr operator value i]`
  - : Ein `i` (oder `I`) vor der schließenden Klammer bewirkt, dass der Wert ohne Berücksichtigung der Groß- und Kleinschreibung verglichen wird (für Zeichen innerhalb des {{Glossary("ASCII", "ASCII")}}-Bereichs).
- `[attr operator value s]`
  - : Ein `s` (oder `S`) vor der schließenden Klammer bewirkt, dass der Wert mit Berücksichtigung der Groß- und Kleinschreibung verglichen wird (für Zeichen innerhalb des {{Glossary("ASCII", "ASCII")}}-Bereichs).

### Werte

- `<attr>`
  - : Ein {{cssxref("ident")}}, das heißt, der nicht zitierte Name des Attributes. Dies kann jedes gültige, sprachspezifische Attribut sein (SVG, HTML, XML, etc.), ein [`data-*` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*) oder ein vom Autor erstelltes Attribut.
- `<value>`
  - : Ein {{cssxref("ident")}} oder {{cssxref("string")}}, das den Attributwert repräsentiert. Der Wert muss in Anführungszeichen gesetzt werden, wenn er Leerzeichen oder Sonderzeichen enthält.
- `s` oder `i`
  - : Flag für Groß-/Kleinschreibungsempfindlichkeit oder -unempfindlichkeit. Wenn vor der schließenden Klammer (`]`) eingefügt, macht es den Wert groß-/kleinschreibungsempfindlich oder -unempfindlich, unabhängig von der Auszeichnungssprache.

## Beschreibung

Die Groß- und Kleinschreibungsempfindlichkeit von Attributnamen und -werten hängt von der Dokumentsprache ab. In HTML sind Attributnamen nicht groß-/kleinschreibungsempfindlich, ebenso wenig wie spezifikationsdefinierte {{Glossary("enumerated", "enumerierte")}} Werte. Die [groß-/kleinschreibungspanstreifenden HTML-Attributwerte](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) sind in der HTML-Spezifikation aufgelistet. Für diese Attribute ist der Attributwert im Selektor groß-/kleinschreibungsempfindlich, unabhängig davon, ob der Wert ungültig ist oder das Attribut für das Element, auf dem es gesetzt ist, ungültig ist.

Wenn der Attributwert groß-/kleinschreibungsempfindlich ist, wie bei [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class), [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) und [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Attributen, ist das Attributselektormatch groß-/kleinschreibungsempfindlich. Attribute, die außerhalb der HTML-Spezifikation definiert sind, wie [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Attribute, sind ebenfalls groß-/kleinschreibungsempfindlich. Groß-/kleinschreibungsempfindliche Attributselektoren können mit dem Inclusion des Modifikators für Groß-/Kleinschreibungsunempfindlichkeit (`i`) groß-/kleinschreibungspanate gemacht werden.

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

### HTML-Geordnete Listen

Die HTML-Spezifikation erfordert, dass das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut ohne Berücksichtigung der Groß-/Kleinschreibung verglichen wird, da es hauptsächlich im {{HTMLElement("input")}} Element verwendet wird.
Beachten Sie, dass, wenn ein Modifikator vom Benutzeragenten nicht unterstützt wird, der Selektor nicht übereinstimmt.

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
- [Groß-/Kleinschreibungsunanfällige Attributselektorwerte](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) auf WHATWG
