---
title: "<u>: Das unausgesprochene Anmerkungselement (Unterstrichen)"
slug: Web/HTML/Reference/Elements/u
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Spanne von Inline-Text, die so gerendert werden sollte, dass angezeigt wird, dass sie eine nicht-textuelle Anmerkung enthält. Dies wird standardmäßig als ein einfacher fester Unterstrich dargestellt, kann jedoch mithilfe von CSS geändert werden.

> [!WARNING]
> Dieses Element wurde in älteren Versionen von HTML als "Unterstrich"-Element bezeichnet und wird manchmal immer noch fälschlicherweise so verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} auf `underline` gesetzt enthält.

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
  text-decoration: #f00 wavy underline;
}
```

Siehe den Abschnitt [Nutzungshinweise](#nutzungshinweise) für weitere Details, wann es geeignet ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Zusammen mit anderen rein stilistischen Elementen wurde das ursprüngliche HTML-Unterstrich- (`<u>`) Element in HTML 4 abgelehnt; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text als mit einer Form von nicht-textueller Anmerkung versehen zu kennzeichnen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seiner Standardstyling (als unterstrichener Text) in einer Weise, die mit einem Hyperlink verwechselt werden kann, welcher standardmäßig auch unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>` Element umfassen die Annotation von Rechtschreibfehlern, das Anwenden eines [Eigenzeichen](https://de.wikipedia.org/wiki/Eigenname) zur Kennzeichnung von Eigennamen im chinesischen Text und andere Formen von Anmerkungen.

Sie sollten `<u>` _nicht_ verwenden, um Text aus Präsentationsgründen zu unterstreichen oder um Titel von Büchern zu kennzeichnen.

### Andere in Betracht zu ziehende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um Betonung zu kennzeichnen
- {{HTMLElement("b")}} um die Aufmerksamkeit auf den Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um Titel von Büchern oder anderen Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Anmerkungen zu geben (im Gegensatz zu den nicht-textuellen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}} Element.

Um ein unterstrichenes Erscheinungsbild ohne besondere semantische Bedeutung zu erzielen, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Kennzeichnung eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>` Element und einige CSS, um einen Absätz darzustellen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im roten gewellten Unterstrichstil angezeigt wird, der für diesen Zweck ziemlich gebräuchlich ist.

#### HTML

<!-- cSpell:ignore wrnogly -->

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

Im HTML sehen wir die Verwendung von `<u>` mit einer Klasse, `spelling`, die verwendet wird, um den Rechtschreibfehler des Wortes "wrongly" anzuzeigen.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS gibt an, dass, wenn das `<u>` Element mit der Klasse `spelling` gestylt ist, es einen roten gewellten Unterstrich unterhalb seines Textes haben soll. Dies ist eine übliche Stilform für Rechtschreibfehler. Ein weiterer üblicher Stil kann mit `red dashed underline` präsentiert werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der eine der heute verfügbaren, populären Textverarbeitungsprogramme verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

In den meisten Fällen wollen Sie eigentlich `<u>` nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne eine semantische Bedeutung zu implizieren, verwenden Sie ein {{HTMLElement("span")}} Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"` gesetzt, wie unten gezeigt.

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

#### Darstellung eines Buchtitels

Buchtitel sollten mit dem {{HTMLElement("cite")}} Element dargestellt werden, anstatt mit `<u>` oder sogar `<i>`.

##### Verwendung des cite Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Stil des cite Elements

Das Standard-Styling für das `<cite>` Element rendert den Text kursiv. Sie können dies mit CSS überschreiben:

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

## Technische Zusammenfassung

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
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, und {{HTMLElement("cite")}}-Elemente sollten normalerweise verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
