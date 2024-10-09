---
title: "<u>: Das nicht artikulierte Annotations- (Unterstreichungs-) Element"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt von Inline-Text, der in einer Weise gerendert werden sollte, die darauf hinweist, dass er eine nicht-textuelle Annotation hat. Dies wird standardmäßig als einfache solide Unterstreichung dargestellt, kann jedoch mit CSS geändert werden.

> [!WARNING]
> Dieses Element wurde in älteren HTML-Versionen als "Unterstreichungs-"Element bezeichnet und wird manchmal auch heute noch in dieser Weise missbräuchlich verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-{{cssxref("text-decoration")}}-Eigenschaft auf `underline` setzt.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

Siehe den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Details darüber, wann `<u>` angemessen verwendet wird und wann nicht.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Stil-Elementen wurde das ursprüngliche HTML-Unterstreichungs- (`<u>`) Element in HTML 4 veraltet; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: Text zu markieren, der eine Art nicht-textueller Annotation aufweist.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seinem Standardstil (unterstrichener Text) auf eine Weise, die mit einem Hyperlink verwechselt werden könnte, der ebenfalls standardmäßig unterstrichen ist.

### Verwendungsszenarien

Gültige Anwendungsfälle für das `<u>`-Element umfassen die Annotation von Rechtschreibfehlern, die Anwendung eines [Eigennamenzeichens](https://en.wikipedia.org/wiki/Proper_name_mark) zur Kennzeichnung von Eigennamen in chinesischem Text und andere Formen der Annotation.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Präsentationszwecken zu unterstreichen oder um Buchtitel zu kennzeichnen.

### Andere in Betracht zu ziehende Elemente

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie z.B.:

- {{HTMLElement("em")}} um betonte Betonung anzuzeigen
- {{HTMLElement("b")}} um auf Text aufmerksam zu machen
- {{HTMLElement("mark")}} um Schlüsselwörter oder -phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um Buchtitel oder andere Publikationen zu kennzeichnen
- {{HTMLElement("i")}} um technische Begriffe, Transliteration, Gedanken oder Namen von Schiffen in westlichen Texten anzuzeigen

Um textuelle Annotationen bereitzustellen (im Gegensatz zu den nicht-textuellen Annotationen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um ein unterstrichenes Aussehen ohne eine semantische Bedeutung zu erzielen, verwenden Sie den `underline`-Wert der {{cssxref("text-decoration")}}-Eigenschaft.

## Beispiele

### Anzeige eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>`-Element und etwas CSS, um einen Absatz darzustellen, der einen Rechtschreibfehler enthält, wobei der Fehler im Stil einer roten gewellten Unterstreichung angezeigt wird, wie sie für diesen Zweck häufig verwendet wird.

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

Dieses CSS gibt an, dass das `<u>`-Element, wenn es mit der Klasse `spelling` gestylt ist, eine rote gewellte Unterstreichung unter seinem Text haben sollte. Dies ist ein gängiger Stil für Rechtschreibfehler. Ein anderer üblicher Stil kann mit einer „roten gestrichelten Unterstreichung“ dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der heute eine der bekannteren Textverarbeitungsprogramme verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Meistens möchten Sie tatsächlich `<u>` nicht verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in verschiedenen Fällen tun sollten.

#### Nicht-semantische Unterstreichungen

Um Text ohne Bedeutung zu unterstreichen, verwenden Sie ein {{HTMLElement("span")}}-Element mit der Eigenschaft {{cssxref("text-decoration")}} auf `"underline"`, wie unten gezeigt.

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element und nicht mit `<u>` oder sogar `<i>` präsentiert werden.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling des cite-Elements

Die Standardstil für das `<cite>`-Element rendert den Text kursiv. Sie können dies mit CSS überschreiben:

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
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
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
          >Phrasinhalte</a
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

- Normalerweise sollten die Elemente {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}} und {{HTMLElement("cite")}} verwendet werden.
- Die CSS-{{cssxref("text-decoration")}}-Eigenschaft sollte für nicht-semantische Unterstreichungen verwendet werden.
