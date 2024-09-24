---
title: Attributselektoren
slug: Web/CSS/Attribute_selectors
l10n:
  sourceCommit: 333c924622d7ff78253a662f3d9d4e60263a93d9
---

{{CSSRef}}

Der CSS-**Attributselektor** wählt Elemente aus, basierend darauf, dass das Element ein bestimmtes Attribut explizit gesetzt hat, mit Optionen zur Definition eines Attributwerts oder eines Teilstringwertabgleichs.

```css
/* <a>-Elemente mit einem title-Attribut */
a[title] {
  color: purple;
}

/* <a>-Elemente mit einem href, das "https://example.org" entspricht */
a[href="https://example.org"]
{
  color: green;
}

/* <a>-Elemente mit einem href, das "example" enthält */
a[href*="example"] {
  font-size: 2em;
}

/* <a>-Elemente mit einem href, das auf ".org" endet, Groß-/Kleinschreibung ignorierend */
a[href$=".org" i] {
  font-style: italic;
}

/* <a>-Elemente, deren class-Attribut das Wort "logo" enthält */
a[class~="logo"] {
  padding: 2px;
}
```

## Syntax

- `[attr]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_.
- `[attr=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert exakt _value_ ist.
- `[attr~=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert eine leerzeichengetrennte Liste von Wörtern ist, von denen eines genau _value_ ist.
- `[attr|=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert genau _value_ sein kann oder mit _value_ beginnt, gefolgt von einem Bindestrich, `-` (U+002D). Es wird oft für Sprachuntercode-Abgleiche verwendet.
- `[attr^=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert mit _value_ beginnt.
- `[attr$=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert mit _value_ endet.
- `[attr*=value]`
  - : Repräsentiert Elemente mit einem Attributnamen von _attr_, dessen Wert mindestens ein Vorkommen von _value_ innerhalb der Zeichenkette enthält.
- `[attr operator value i]`
  - : Das Hinzufügen eines `i` (oder `I`) vor der schließenden Klammer führt dazu, dass der Wert ohne Berücksichtigung der Groß- und Kleinschreibung verglichen wird (für Zeichen im {{Glossary("ASCII")}}-Bereich).
- `[attr operator value s]`
  - : Das Hinzufügen eines `s` (oder `S`) vor der schließenden Klammer führt dazu, dass der Wert mit Groß-/Kleinschreibung verglichen wird (für Zeichen im {{Glossary("ASCII")}}-Bereich).

### Werte

- `<attr>`
  - : Ein {{cssxref("ident")}}, also der unzitierte Name des Attributs. Dies kann jedes gültige, sprachspezifische Attribut sein (SVG, HTML, XML, usw.), ein [`data-*`-Attribut](/de/docs/Web/HTML/Global_attributes/data-*), oder ein vom Autor erstelltes Attribut.
- `<value>`
  - : Ein {{cssxref("ident")}} oder {{cssxref("string")}}, das den Attributwert darstellt. Der Wert muss in Anführungszeichen gesetzt werden, wenn er Leerzeichen oder Sonderzeichen enthält.
- `s` oder `i`
  - : Flag zur Groß-/Kleinschreibungsempfindlichkeit oder -unanfälligkeit. Wenn es vor der schließenden Klammer (`]`) enthalten ist, macht es den Wert groß-/kleinschreibungsempfindlich oder -unanfällig, unabhängig von der Markupsprache.

## Beschreibung

Die Groß-/Kleinschreibungsempfindlichkeit von Attributnamen und -werten hängt von der Dokumentensprache ab. In HTML sind Attributnamen groß-/kleinschreibungsempfindlich, ebenso wie in der Spezifikation definierte {{glossary("enumerated")}} Werte. Die [HTML-Attributwerte ohne Berücksichtigung der Groß-/Kleinschreibung](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) sind in der HTML-Spezifikation aufgeführt. Für diese Attribute ist der Attributwert im Selektor groß-/kleinschreibungsempfindlich, unabhängig davon, ob der Wert ungültig ist oder das Attribut für das Element, zu dem es gehört, ungültig ist.

Wenn der Attributwert groß-/kleinschreibungsempfindlich ist, wie die Attribute [`class`](/de/docs/Web/HTML/Global_attributes/class), [`id`](/de/docs/Web/HTML/Global_attributes/id) und [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*), ist der Attributselektor-Wertvergleich groß-/kleinschreibungsempfindlich. Attribute, die außerhalb der HTML-Spezifikation definiert sind, wie [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Attribute, sind ebenfalls groß-/kleinschreibungsempfindlich. Groß-/kleinschreibungsempfindliche Attributselektoren können mit der Hinzufügung des groß-/kleinschreibungunanfälligen Modifikators (`i`) groß-/kleinschreibungunanfällig gemacht werden.

## Beispiele

### Links

#### CSS

```css
a {
  color: blue;
}

/* Interne Links, beginnend mit "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links mit "example" irgendwo in der URL */
a[href*="example"] {
  background-color: silver;
}

/* Links mit "insensitive" irgendwo in der URL,
   unabhängig von der Groß-/Kleinschreibung */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links mit "cAsE" irgendwo in der URL,
mit entsprechender Groß-/Kleinschreibung */
a[href*="cAsE" s] {
  color: pink;
}

/* Links, die mit ".org" enden */
a[href$=".org"] {
  color: red;
}

/* Links, die mit "https://" beginnen und mit ".org" enden */
a[href^="https://"][href$=".org"]
{
  color: green;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Interner Link</a></li>
  <li><a href="http://example.com">Beispiel-Link</a></li>
  <li><a href="#InSensitive">Unempfindlicher interner Link</a></li>
  <li><a href="http://example.org">Beispiel-org-Link</a></li>
  <li><a href="https://example.org">Beispiel-https-org-Link</a></li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Links")}}

### Sprachen

#### CSS

```css
/* Alle <div>s mit einem `lang`-Attribut sind fett. */
div[lang] {
  font-weight: bold;
}

/* Alle <div>s ohne ein `lang`-Attribut sind kursiv. */
div:not([lang]) {
  font-style: italic;
}

/* Alle <div>s in US-Englisch sind blau. */
div[lang~="en-us"] {
  color: blue;
}

/* Alle <div>s in Portugiesisch sind grün. */
div[lang="pt"] {
  color: green;
}

/* Alle <div>s in Chinesisch sind rot, egal ob
   vereinfacht (zh-Hans-CN) oder traditionell (zh-Hant-TW). */
div[lang|="zh"] {
  color: red;
}

/* Alle <div>s mit einem traditionellen chinesischen
   `data-lang` sind violett. */
/* Hinweis: Es können auch Bindestrich-Attribute
   ohne doppelte Anführungszeichen verwendet werden */
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

### HTML geordnete Listen

Die HTML-Spezifikation verlangt, dass das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut ohne Berücksichtigung der Groß-/Kleinschreibung abgeglichen wird, da es hauptsächlich im {{HTMLElement("input")}}-Element verwendet wird. Beachten Sie, dass, wenn ein Modifikator vom Benutzeragenten nicht unterstützt wird, der Selektor nicht übereinstimmt.

#### CSS

```css
/* Die Groß-/Kleinschreibung hängt von der Dokumentensprache ab */
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
    Roter Hintergrund für groß-/kleinschreibungunempfindlichen Abgleich (Standard für den Typselektor)
  </li>
</ol>
<ol type="i">
  <li>Limettenfarbener Hintergrund, wenn `s`-Modifikator unterstützt wird (groß-/kleinschreibungsempfindlicher Abgleich)</li>
</ol>
<ol type="I">
  <li>Grauer Hintergrund, wenn `s`-Modifikator unterstützt wird (groß-/kleinschreibungsempfindlicher Abgleich)</li>
</ol>
<ol type="A">
  <li>
    Grüner Hintergrund, wenn `i`-Modifikator unterstützt wird (groß-/kleinschreibungunempfindlicher Abgleich)
  </li>
</ol>
```

#### Ergebnis

{{EmbedLiveSample("HTML_ordered_lists")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("attr")}}
- Auswahl eines einzelnen Elements: {{DOMxRef("Document.querySelector()")}}, {{DOMxRef("DocumentFragment.querySelector()")}}, oder {{DOMxRef("Element.querySelector()")}}
- Auswahl aller übereinstimmenden Elemente: {{DOMxRef("Document.querySelectorAll()")}}, {{DOMxRef("DocumentFragment.querySelectorAll()")}}, oder {{DOMxRef("Element.querySelectorAll()")}}
- [Groß-/Kleinschreibungsunempfindliche Attributselektor-Werte](https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors) auf WHATWG
