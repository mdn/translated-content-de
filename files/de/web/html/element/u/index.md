---
title: "<u>: Das nicht ausformulierte Anmerkungselement (Unterstreichen)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML)-Element steht für einen Bereich von Inline-Text, der in einer Weise gerendert werden sollte, die darauf hinweist, dass er eine nicht-textuelle Anmerkung hat. Standardmäßig wird dies als durchgehende Unterstreichung dargestellt, kann jedoch mithilfe von CSS geändert werden.

> [!WARNING]
> Dieses Element wurde in älteren Versionen von HTML als "Unterstreichung"-Element bezeichnet und wird manchmal noch in dieser Weise missbraucht. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil mit der CSS-Eigenschaft {{cssxref("text-decoration")}} verwenden, der auf `underline` gesetzt ist.

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

Siehe den Abschnitt [Nutzungshinweise](#nutzungshinweise) für weitere Details über geeignete und unangebrachte Verwendungen von `<u>`.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Zusammen mit anderen reinen Stilelementen war das ursprüngliche HTML-Unterstreichen (`<u>`) Element in HTML 4 als veraltet erklärt; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wieder eingeführt: um Text zu kennzeichnen, der eine Art nicht-textuelle Anmerkung hat.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seiner Standardstilisierung (unterstrichener Text) in einer Weise, die mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element umfassen die Kennzeichnung von Rechtschreibfehlern, das Anwenden eines [Eigennamen-Kennzeichens](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen in chinesischem Text zu kennzeichnen, und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text für Präsentationszwecke zu unterstreichen oder um Titel von Büchern zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie etwa:

- {{HTMLElement("em")}} um Betonung anzuzeigen
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um Titel von Büchern oder anderen Veröffentlichungen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliterationen, Gedanken oder Schiffsbezeichnungen im westlichen Text zu kennzeichnen

Um textuelle Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textuellen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung zu erhalten, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Kennzeichnung eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>`-Element und ein wenig CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im Stil der roten gewellten Unterstreichung angezeigt wird, der für diesen Zweck ziemlich häufig verwendet wird.

#### HTML

<!-- cSpell:ignore wrnogly -->

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

Im HTML sehen wir die Verwendung von `<u>` mit einer Klasse, `spelling`, die verwendet wird, um den Rechtschreibfehler des Wortes "wrongly" zu kennzeichnen.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS gibt an, dass, wenn das `<u>`-Element mit der Klasse `spelling` gestylt ist, es eine rote gewellte Unterstreichung unter seinem Text haben sollte. Dies ist eine gebräuchliche Stilisierung für Rechtschreibfehler. Eine weitere übliche Stilvariante könnte mit `roter gestrichelter Unterstreichung` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem bekannt sein, der heute einen der populärsten Textverarbeitungsprogramme verwendet.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Die meiste Zeit wollen Sie tatsächlich `<u>` nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

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

#### Darstellung eines Buchtitels

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element dargestellt werden, anstelle von `<u>` oder sogar `<i>`.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Gestaltung des cite-Elements

Die Standardstilisierung für das `<cite>`-Element rendert den Text in Kursivschrift. Sie können dies mit CSS überschreiben:

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
          >Phrasen-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasen-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role">generisch</a></code>
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

- Die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} sollten in der Regel anstelle dessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
