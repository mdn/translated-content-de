---
title: "<u>: Das Element für nicht-artikulierte Annotationen (Unterstreichen)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt von Inline-Text, der so gerendert werden sollte, dass eine nicht-textuelle Annotation angezeigt wird. Standardmäßig wird dies als einfache durchgehende Unterstreichung dargestellt, kann jedoch mit CSS verändert werden.

> [!WARNING]
> Dieses Element wurde in älteren HTML-Versionen als "Unterstreichen"-Element bezeichnet und wird manchmal noch in dieser Weise falsch verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} mit dem Wert `underline` enthält.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

Lesen Sie den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Details darüber, wann es angemessen ist, `<u>` zu verwenden, und wann nicht.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Stil-Elementen wurde das ursprüngliche HTML-Unterstreichen-Element (`<u>`) in HTML 4 deprekatet; allerdings wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text zu markieren, der mit einer Form von nicht-textueller Annotation versehen ist.

> [!NOTE]
> Vermeiden Sie es, das `<u>`-Element mit seinem Standardstil (unterstrichener Text) auf eine Weise zu verwenden, die mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element beinhalten das Annotieren von Rechtschreibfehlern, die Anwendung eines [Eigennamenzeichens](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen im Chinesischen Text zu kennzeichnen, und andere Formen von Annotationen.

Sie sollten `<u>` _nicht_ verwenden, um Text zur optischen Hervorhebung zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um betontes Hervorheben anzuzeigen
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Wichtigkeit ist
- {{HTMLElement("cite")}} um Titel von Büchern oder anderen Veröffentlichungen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Annotationen bereitzustellen (im Gegensatz zu den nicht-textuellen Annotationen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um eine unterstrichene Darstellung ohne semantische Bedeutung anzuwenden, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Rechtschreibfehler anzeigen

Dieses Beispiel nutzt das `<u>`-Element und etwas CSS, um einen Absatz darzustellen, der einen Rechtschreibfehler enthält, wobei der Fehler in einem roten, welligen Unterstrichstil angezeigt wird, der für diesen Zweck recht häufig verwendet wird.

#### HTML

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

Im HTML sehen wir die Verwendung von `<u>` mit einer Klasse, `spelling`, die für die Anzeige des Rechtschreibfehlers im Wort "wrongly" verwendet wird.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS gibt an, dass wenn das `<u>`-Element mit der Klasse `spelling` gestylt wird, es einen roten welligen Unterstrich unter seinem Text haben sollte. Dies ist ein häufiger Stil für Rechtschreibfehler. Ein anderer weit verbreiteter Stil kann mit `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der eine der bekannteren Textverarbeitungsprogramme verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeiden von \<u>

In den meisten Fällen möchten Sie tatsächlich kein `<u>` verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne eine semantische Bedeutung zu implizieren, verwenden Sie ein {{HTMLElement("span")}}-Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"` gesetzt, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element präsentiert werden, anstatt `<u>` oder sogar `<i>` zu verwenden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite-Elements

Das Standardstyling für das `<cite>`-Element rendert den Text in Kursivschrift. Sie können dies mit CSS überschreiben:

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
        >, palpabler Inhalt.
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
      <th scope="row">Tagauslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
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

- Die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} sollten normalerweise stattdessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
