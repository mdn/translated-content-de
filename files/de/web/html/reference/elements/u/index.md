---
title: "<u>: Das nicht artikulierte Anmerkungselement (Unterstreichen)"
slug: Web/HTML/Reference/Elements/u
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element stellt einen Bereich von Inline-Text dar, der in einer Weise gerendert werden sollte, die darauf hinweist, dass es eine nicht-textuelle Anmerkung hat. Dies wird standardmäßig als eine einzelne durchgehende Unterstreichung dargestellt, kann aber mit CSS geändert werden.

> [!WARNING]
> In älteren Versionen von HTML wurde dieses Element als "Unterstreichen"-Element bezeichnet und wird manchmal immer noch fälschlicherweise so verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS {{cssxref("text-decoration")}} Eigenschaft auf `underline` setzt.

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

Siehe den Abschnitt [Nutzungsnotizen](#nutzungsnotizen) für weitere Details, wann es angemessen ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungsnotizen

Zusammen mit anderen reinen Stil-Elementen wurde das originale HTML-Unterstreichen (`<u>`) Element in HTML 4 als veraltet erklärt; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wieder eingeführt: um Text als mit irgendeiner Form nicht-textueller Anmerkung versehen zu markieren.

> [!NOTE]
> Vermeiden Sie es, das `<u>` Element mit seiner Standard-Formatierung (von unterstrichenem Text) in einer Weise zu verwenden, dass es mit einem Hyperlink verwechselt werden könnte, der standardmäßig ebenfalls unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>` Element umfassen die Kennzeichnung von Rechtschreibfehlern, das Anwenden einer [Eigennamen-Markierung](https://en.wikipedia.org/wiki/Proper_name_mark) zur Kennzeichnung von Eigennamen im chinesischen Text und andere Formen der Anmerkung.

Sie sollten `<u>` _nicht_ verwenden, um Text zwecks Präsentation zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um eine Betonung auszudrücken
- {{HTMLElement("b")}} um die Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um die Titel von Büchern oder anderen Veröffentlichungen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Umschriften, Gedanken oder die Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textuellen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}} Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung anzuwenden, verwenden Sie den `underline` Wert der {{cssxref("text-decoration")}} Eigenschaft.

## Beispiele

### Hinweis auf einen Rechtschreibfehler

Dieses Beispiel verwendet das `<u>` Element und etwas CSS, um einen Absatz darzustellen, der ein falsch geschriebenes Wort enthält, wobei der Fehler im Stil einer roten, wellenförmigen Unterstreichung angezeigt wird, die für diesen Zweck ziemlich häufig verwendet wird.

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

Dieses CSS gibt an, dass wenn das `<u>` Element mit der Klasse `spelling` gestylt wird, es eine rote wellenförmige Unterstreichung unter seinem Text haben sollte. Dies ist eine übliche Formatierung für Rechtschreibfehler. Eine andere übliche Formatierung kann mit einer `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem bekannt vorkommen, der eine der beliebten Textverarbeitungsprogramme von heute verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Meistens möchten Sie `<u>` eigentlich nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in mehreren Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne irgendeine semantische Bedeutung anzudeuten, verwenden Sie ein {{HTMLElement("span")}} Element mit der {{cssxref("text-decoration")}} Eigenschaft auf `"underline"` gesetzt, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}} Element statt `<u>` oder sogar `<i>` präsentiert werden.

##### Verwenden des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Stil des cite-Elements

Die Standardstilierung für das `<cite>` Element gibt den Text in Kursivschrift aus. Sie können dies mit CSS überschreiben:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- Die {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, und {{HTMLElement("cite")}} Elemente sollten in der Regel stattdessen verwendet werden.
- Die CSS {{cssxref("text-decoration")}} Eigenschaft sollte für nicht-semantische Unterstreichungen verwendet werden.
