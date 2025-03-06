---
title: "<u>: Das nicht artikulierte Annotations- (Unterstreichungs-) Element"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Bereich von Inline-Text, der in einer Weise dargestellt werden soll, die darauf hinweist, dass eine nicht-textuelle Annotation vorhanden ist. Standardmäßig wird dies als eine einfache solide Unterstreichung dargestellt, kann jedoch mithilfe von CSS verändert werden.

> [!WARNING]
> Dieses Element wurde in älteren HTML-Versionen als "Underline"-Element bezeichnet und wird manchmal noch fälschlicherweise so verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS {{cssxref("text-decoration")}} Eigenschaft mit dem Wert `underline` enthält.

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

Siehe den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Details darüber, wann es angemessen ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen rein stilistischen Elementen wurde das ursprüngliche HTML Unterstreichungs- (`<u>`) Element in HTML 4 als veraltet eingestuft; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text zu kennzeichnen, für den eine Form nicht-textueller Annotation angewendet wurde.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>` Elements mit seiner Standarddarstellung (unterstrichener Text) auf eine Weise, die mit einem Hyperlink verwechselt werden könnte, der standardmäßig ebenfalls unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>` Element beinhalten die Kennzeichnung von Rechtschreibfehlern, das Anwenden einer [Eigennamen-Markierung](https://de.wikipedia.org/wiki/Eigennamen-Markierung) zur Kennzeichnung von Eigennamen im Chinesischen und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Präsentationszwecken zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere zu berücksichtigende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie:

- {{HTMLElement("em")}}, um hervorgehobene Betonung anzuzeigen
- {{HTMLElement("b")}}, um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}}, um Schlüsselwörter oder -sätze zu markieren
- {{HTMLElement("strong")}}, um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}}, um Titel von Büchern oder anderen Veröffentlichungen zu kennzeichnen
- {{HTMLElement("i")}}, um technische Begriffe, Transliterationen, Gedanken oder Schiffsnamen in westlichen Texten zu bezeichnen

Um textuelle Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textuellen Anmerkungen mit `<u>`), verwenden Sie das {{HTMLElement("ruby")}} -Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung zu erreichen, verwenden Sie den Wert `underline` der {{cssxref("text-decoration")}} Eigenschaft.

## Beispiele

### Kennzeichnen eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>` Element und einige CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im Stil einer roten wellenförmigen Unterstreichung, die ziemlich häufig für diesen Zweck verwendet wird, dargestellt wird.

#### HTML

<!-- cSpell:ignore wrnogly -->

```html
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
```

Im HTML sehen wir die Verwendung von `<u>` mit einer Klasse `spelling`, die zur Kennzeichnung des Rechtschreibfehlers des Wortes "wrongly" dient.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

Dieses CSS gibt an, dass das `<u>` Element, wenn es mit der Klasse `spelling` gestylt ist, eine rote wellenförmige Unterstreichung unter seinem Text haben sollte. Dies ist eine gängige Gestaltung für Rechtschreibfehler. Ein anderer üblicher Stil kann mit einer roten gestrichelten Unterstreichung dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der einen der heute verfügbaren beliebten Textverarbeitungsprogramme verwendet.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Meistens möchten Sie `<u>` tatsächlich nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text zu unterstreichen, ohne semantische Bedeutung implizieren zu wollen, verwenden Sie ein {{HTMLElement("span")}} -Element mit der {{cssxref("text-decoration")}} Eigenschaft, die auf `"underline"` gesetzt ist, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}} -Element präsentiert werden, anstatt `<u>` oder sogar `<i>`.

##### Verwenden des cite Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite Elements

Die Standarddarstellung des `<cite>` Elements gibt den Text in Kursivschrift wieder. Sie können dies mit CSS übersteuern:

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
          >Phrasing-Inhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- Die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} sollten normalerweise stattdessen verwendet werden.
- Die CSS {{cssxref("text-decoration")}} Eigenschaft sollte für nicht-semantische Unterstreichungen verwendet werden.
