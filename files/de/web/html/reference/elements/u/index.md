---
title: "`<u>` HTML unabgegrenztes Annotations- (Unterstreichungs-) Element"
short-title: <u>
slug: Web/HTML/Reference/Elements/u
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<u>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Bereich von Inline-Text, der so dargestellt werden sollte, dass er auf eine nicht-textliche Annotation hinweist. Standardmäßig wird dies als durchgehende Linie dargestellt, aber durch CSS kann dies geändert werden.

> [!WARNING]
> Dieses Element wurde früher in älteren Versionen von HTML als "Underline" (Unterstreichung) Element bezeichnet und wird manchmal immer noch fälschlicherweise dafür verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} mit dem Wert `underline` verwendet.

{{InteractiveExample("HTML Demo: &lt;u&gt;", "tabbed-shorter")}}

<!-- cSpell:ignore speling corect -->

```html interactive-example
<p>
  You could use this element to highlight <u>speling</u> mistakes, so the writer
  can <u>corect</u> them.
</p>
```

```css interactive-example
p {
  margin: 0;
}

u {
  text-decoration: red wavy underline;
}
```

Sehen Sie im Abschnitt [Verwendungsnotizen](#verwendungsnotizen) nach weiteren Details, wann `<u>` angemessen verwendet wird und wann nicht.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Stil-Elementen wurde das ursprüngliche HTML Unterstreichungs- (`<u>`) Element in HTML 4 abgeschafft; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wieder eingeführt: um Text zu kennzeichnen, der irgendeine Form von nicht-textlicher Annotation hat.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>` Elements mit seinem Standardstil (unterstrichener Text) in einer Art und Weise, die mit einem Hyperlink – der standardmäßig ebenfalls unterstrichen ist – verwechselt werden könnte.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>` Element umfassen das Markieren von Rechtschreibfehlern, das Anbringen eines [Proper Name Marks](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen in chinesischem Text zu kennzeichnen, und andere Formen von Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text aus Präsentationsgründen zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie:

- {{HTMLElement("em")}} um einen betonten Akzent zu markieren
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -ausdrücke zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text stark wichtig ist
- {{HTMLElement("cite")}} um Buchtitel oder andere Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Anmerkungen (im Gegensatz zu den nicht-textlichen Anmerkungen, die mit `<u>` erstellt werden) bereitzustellen, verwenden Sie das {{HTMLElement("ruby")}} Element.

Um eine unterstrichene Darstellung ohne semantische Bedeutung zu erreichen, verwenden Sie die CSS-Eigenschaft {{cssxref("text-decoration")}} mit dem Wert `underline`.

## Beispiele

### Hervorheben eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>` Element und etwas CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im rot gewellten Unterstreichungsstil dargestellt wird, der zu diesem Zweck ziemlich häufig verwendet wird.

#### HTML

<!-- cSpell:ignore wrnogly -->

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

Im HTML sehen wir die Verwendung von `<u>` mit einer Klasse, `spelling`, die verwendet wird, um die falsche Schreibweise des Wortes "wrongly" anzuzeigen.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS zeigt an, dass, wenn das `<u>` Element mit der Klasse `spelling` gestylt ist, es eine rote, gewellte Unterstreichung unter seinem Text haben sollte. Dies ist eine übliche Gestaltung für Rechtschreibfehler. Eine andere gebräuchliche Stilart kann mit `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem, der eine der bekannteren heute verfügbaren Textverarbeitungsprogramme verwendet hat, bekannt vorkommen.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Meistens möchten Sie `<u>` eigentlich nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in mehreren Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne irgendeine semantische Bedeutung zu implizieren, verwenden Sie ein {{HTMLElement("span")}} Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"` gesetzt, wie unten gezeigt.

##### HTML

```html
<span class="underline">Today's Special</span>
<br />
Chicken Noodle Soup With Carrots
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### Ergebnis

{{EmbedLiveSample("Non-semantic_underlines", 650, 80)}}

#### Präsentation eines Buchtitels

Buchtitel sollten mit dem {{HTMLElement("cite")}} Element und nicht mit `<u>` oder sogar `<i>` dargestellt werden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Stil des cite-Elements

Die Standardgestaltung für das `<cite>` Element rendert den Text kursiv. Sie können das mit CSS überschreiben:

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

{{EmbedLiveSample("Styling_the_cite_element", 650, 80)}}

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} Elemente sollten in der Regel stattdessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichung verwendet werden.
