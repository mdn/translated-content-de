---
title: "<u>: Das nicht artikulierte Annotations-Element (Unterstreichen)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Bereich von Inline-Text, der so gerendert werden sollte, dass er anzeigt, dass er eine nicht-textuelle Annotation besitzt. Standardmäßig wird dies als eine einfache durchgehende Unterstreichung dargestellt, kann jedoch mithilfe von CSS verändert werden.

> [!WARNING]
> Dieses Element wurde in älteren HTML-Versionen als "Underline"-Element bezeichnet und wird manchmal noch so missbraucht. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} auf `underline` setzt.

{{InteractiveExample("HTML Demo: &lt;u&gt;", "tabbed-shorter")}}

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

Siehe den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Details, wann es angebracht ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen rein stilistischen Elementen wurde das ursprüngliche HTML-Unterstreichungs-Element (`<u>`) in HTML 4 als veraltet erklärt; jedoch wurde `<u>` in HTML 5 mit einem neuen, semantischen Sinn wieder eingeführt: um Text zu markieren, der eine Art nicht-textuelle Annotation erhält.

> [!NOTE]
> Vermeiden Sie, das `<u>`-Element mit seiner Standard-Stilierung (unterstrichener Text) zu nutzen, da dies mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element umfassen die Annotierung von Rechtschreibfehlern, das Anwenden eines [Eigennamenzeichens](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen im chinesischen Text zu kennzeichnen, und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Präsentationszwecken zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie z.B.:

- {{HTMLElement("em")}} um betonte Hervorhebung zu kennzeichnen
- {{HTMLElement("b")}} um die Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder Phrasen zu markieren
- {{HTMLElement("strong")}} um zu zeigen, dass Text starke Wichtigkeit hat
- {{HTMLElement("cite")}} um Titel von Büchern oder anderen Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten zu bezeichnen

Um textuelle Annotationen bereitzustellen (im Gegensatz zu den nicht-textuellen Annotationen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um ein unterstrichenes Aussehen ohne jegliche semantische Bedeutung zu erzielen, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Rechtschreibfehler anzeigen

Dieses Beispiel verwendet das `<u>`-Element und etwas CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im roten gewellten Unterstrich-Stil angezeigt wird, der für diesen Zweck ziemlich häufig verwendet wird.

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

Dieses CSS gibt an, dass wenn das `<u>`-Element mit der Klasse `spelling` gestylt wird, es einen roten gewellten Unterstrich unter dem Text haben sollte. Dies ist ein häufiges Styling für Rechtschreibfehler. Ein weiteres häufiges Styling kann mit einem `roten gestrichelten Unterstrich` präsentiert werden.

#### Ergebnis

Das Ergebnis sollte jedem bekannt vorkommen, der jemals einen der bekannteren Textverarbeitungsprogramme benutzt hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

In den meisten Fällen möchten Sie `<u>` tatsächlich nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in mehreren Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne eine semantische Bedeutung anzudeuten, verwenden Sie ein {{HTMLElement("span")}}-Element mit der CSS-Eigenschaft {{cssxref("text-decoration")}} auf `"underline"`, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element dargestellt werden, anstelle von `<u>` oder gar `<i>`.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite-Elements

Die Standardstilisierung für das `<cite>`-Element rendert den Text kursiv. Sie können das mit CSS überschreiben:

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
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
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

- Die {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}}-Elemente sollten normalerweise stattdessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
