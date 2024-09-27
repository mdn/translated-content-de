---
title: "<u>: Das Unartikulierte Anmerkungselement (Unterstrichen)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<u>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert einen Abschnitt von Inline-Text, der in einer Weise gerendert werden sollte, die zeigt, dass eine nicht-textuelle Anmerkung vorliegt. Standardmäßig wird dies als einfacher, durchgehender Unterstrich dargestellt, kann jedoch mit CSS geändert werden.

> [!WARNING]
> Dieses Element wurde in älteren Versionen von HTML als "Underline"-Element bezeichnet und wird manchmal noch fälschlich so verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil verwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} auf `underline` setzt.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

Siehe den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Details, wann es angemessen ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Styling-Elementen wurde das ursprüngliche HTML-Unterstreichungselement (`<u>`) in HTML 4 veraltet; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text als mit irgendeiner Form von nicht-textueller Anmerkung versehen zu kennzeichnen.

> [!NOTE]
> Vermeiden Sie es, das `<u>`-Element mit seinem Standardstil (unterstrichener Text) so zu verwenden, dass es mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element sind das Annotieren von Rechtschreibfehlern, das Anwenden einer [Eigenname-Markierung](https://en.wikipedia.org/wiki/Proper_name_mark) zur Kennzeichnung von Eigennamen in chinesischem Text und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text aus Präsentationsgründen zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere in Betracht zu ziehende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um betonte Hervorhebung anzuzeigen
- {{HTMLElement("b")}} um Aufmerksamkeit auf den Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um die Titel von Büchern oder anderen Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textuellen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung zu verwenden, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Anzeige eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>`-Element und etwas CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, mit dem Fehler, der im roten welligen Unterstreichungsstil angezeigt wird, der für diesen Zweck recht häufig verwendet wird.

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

In dem HTML sehen wir die Verwendung von `<u>` mit einer Klasse, `spelling`, die verwendet wird, um die falsche Schreibweise des Wortes "wrongly" anzuzeigen.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS zeigt an, dass, wenn das `<u>`-Element mit der Klasse `spelling` gestylt wird, es einen roten, welligen Unterstrich unter seinem Text haben sollte. Dies ist ein üblicher Stil für Rechtschreibfehler. Ein anderer bekannter Stil kann mit `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der einen der heute verfügbaren gängigsten Textverarbeitungsprogramme verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

In den meisten Fällen sollten Sie tatsächlich `<u>` nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne eine semantische Bedeutung implizieren zu wollen, verwenden Sie ein {{HTMLElement("span")}}-Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"`, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element anstelle von `<u>` oder sogar `<i>` dargestellt werden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite-Elements

Das Standardstyling für das `<cite>`-Element rendert den Text kursiv. Sie können dies mit CSS überschreiben:

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
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

- Die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} sollten normalerweise verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
