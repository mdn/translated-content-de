---
title: "<u>: Das nicht artikulierte Anmerkungselement (Unterstreichung)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Abschnitt von Inline-Text, der so gerendert werden sollte, dass angezeigt wird, dass er eine nicht-textliche Anmerkung hat. Dies wird standardmäßig als einfache durchgehende Unterstreichung dargestellt, kann jedoch mithilfe von CSS verändert werden.

> [!WARNING]
> Dieses Element wurde in älteren Versionen von HTML als "Unterstreichung" bezeichnet und wird manchmal immer noch so missbraucht. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} auf `underline` setzt.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

Weitere Details zur angemessenen Verwendung von `<u>` finden Sie im Abschnitt [Verwendungsnotizen](#verwendungsnotizen).

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Stilelementen wurde das ursprüngliche HTML-Unterstreichungselement (`<u>`) in HTML 4 als veraltet eingestuft; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wieder eingeführt: um Text zu kennzeichnen, der eine Form von nicht-textlicher Anmerkung hat.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seiner Standardformatierung (von unterstrichenem Text) in einer Weise, die mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element umfassen das Annotieren von Rechtschreibfehlern, das Anwenden einer [richtigen Namen Markierung](https://en.wikipedia.org/wiki/Proper_name_mark) zur Kennzeichnung von Eigennamen in chinesischem Text und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Präsentationszwecken zu unterstreichen oder um Titel von Büchern zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um Stressbetonung zu kennzeichnen
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um Titel von Büchern oder anderen Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliterationen, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textliche Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textlichen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}} Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung anzuwenden, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Rechtschreibfehler kennzeichnen

Dieses Beispiel verwendet das `<u>`-Element und etwas CSS, um einen Absatz darzustellen, der einen falsch geschriebenen Fehler enthält, der im roten wellenförmigen Unterstreichungsstil angezeigt wird, der für diesen Zweck ziemlich häufig verwendet wird.

#### HTML

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

Dieses CSS gibt an, dass wenn das `<u>`-Element mit der Klasse `spelling` gestylt ist, eine rote wellenförmige Unterstreichung unter seinem Text erscheinen soll. Dies ist ein üblicher Stil für Rechtschreibfehler. Ein anderer gebräuchlicher Stil kann mit `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der einen der heute verfügbaren, populäreren Textverarbeiter verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeiden von \<u>

Die meiste Zeit möchten Sie eigentlich kein `<u>` verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne irgendeine semantische Bedeutung anzudeuten, verwenden Sie ein {{HTMLElement("span")}} Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"`, wie unten gezeigt.

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

Buchtitel sollten anstelle von `<u>` oder sogar `<i>` mit dem {{HTMLElement("cite")}}-Element präsentiert werden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Stil anpassen des cite-Elements

Die Standardformatierung für das `<cite>`-Element rendert den Text in Kursivschrift. Sie können dies mit CSS überschreiben:

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, und {{HTMLElement("cite")}} sollten normalerweise stattdessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
