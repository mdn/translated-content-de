---
title: "<u>: Das unabgegrenzte Anmerkungselement (Underline)"
slug: Web/HTML/Reference/Elements/u
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Bereich von Inline-Text, der auf eine Weise gerendert werden sollte, die anzeigt, dass es eine nicht-textuelle Anmerkung hat. Standardmäßig wird dies als ein einfacher durchgehender Unterstrich gerendert, aber es kann mithilfe von CSS geändert werden.

> [!WARNING]
> Dieses Element wurde in älteren HTML-Versionen als "Underline"-Element (Unterstreichen) bezeichnet und wird manchmal immer noch fälschlicherweise auf diese Weise verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} mit dem Wert `underline` enthält.

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

Siehe den Abschnitt [Nutzungs-Hinweise](#nutzungs-hinweise) für weitere Details darüber, wann es angemessen ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungs-Hinweise

Zusammen mit anderen reinen Stilelementen wurde das ursprüngliche HTML-Unterstreichungselement (`<u>`) in HTML 4 abgeschafft; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text als mit irgendeiner Form von nicht-textueller Anmerkung versehen zu markieren.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seinem Standard-Styling (von unterstrichenem Text) auf eine Weise, die mit einem Hyperlink verwechselt werden kann, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element umfassen das Kennzeichnen von Rechtschreibfehlern, das Anwenden eines [Eigenname-Zeichens](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen in chinesischem Text zu kennzeichnen, und andere Formen der Anmerkung.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Unterstreichungszwecken für Präsentationen oder um Buchtitel anzugeben.

### Andere zu verwendende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie zum Beispiel:

- {{HTMLElement("em")}} um Betonung zu kennzeichnen
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzugeben, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um die Titel von Büchern oder anderen Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliterationen, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textuelle Anmerkungen bereitzustellen (anstelle der nicht-textuellen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um eine unterstrichene Darstellung ohne jede semantische Bedeutung anzuwenden, verwenden Sie den Wert `underline` der {{cssxref("text-decoration")}}-Eigenschaft.

## Beispiele

### Hinweis auf einen Schreibfehler

Dieses Beispiel benutzt das `<u>`-Element und ein wenig CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im roten gewellten Unterstreichungsstil angezeigt wird, der häufig für diesen Zweck verwendet wird.

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

Dieses CSS gibt an, dass, wenn das `<u>`-Element mit der Klasse `spelling` gestylt ist, es einen roten gewellten Unterstrich unter seinem Text haben sollte. Dies ist ein üblicher Stil für Rechtschreibfehler. Ein weiterer üblicher Stil kann durch `red dashed underline` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der eine der populäreren Textbearbeitungsprogramme verwendet hat, die heute verfügbar sind.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeiden von \<u>

Die meiste Zeit möchte man tatsächlich `<u>` nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne eine semantische Bedeutung zu implizieren, verwenden Sie ein {{HTMLElement("span")}}-Element mit der {{cssxref("text-decoration")}}-Eigenschaft auf `"underline"` gesetzt, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element dargestellt werden, anstatt `<u>` oder sogar `<i>` zu verwenden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite-Elements

Das Standard-Styling für das `<cite>`-Element rendert den Text in Kursivschrift. Sie können das mit CSS überschreiben:

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
          >Textinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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
          >Textinhalt</a
        >
        akzeptiert.
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
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
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
