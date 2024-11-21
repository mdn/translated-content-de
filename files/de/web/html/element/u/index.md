---
title: "<u>: Das nicht artikulierte Anmerkungselement (Unterstreichen)"
slug: Web/HTML/Element/u
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<u>`** [HTML](/de/docs/Web/HTML)-Element stellt einen Abschnitt von Inline-Text dar, der so gerendert werden soll, dass er eine nicht-textliche Anmerkung andeutet. Standardmäßig wird dies als ein einzelner durchgehender Unterstrich dargestellt, kann jedoch mithilfe von CSS verändert werden.

> [!WARNING]
> Dieses Element wurde in älteren Versionen von HTML als das "Underline"-Element bezeichnet und wird manchmal immer noch fälschlicherweise so verwendet. Um Text zu unterstreichen, sollten Sie stattdessen einen Stil anwenden, der die CSS-Eigenschaft {{cssxref("text-decoration")}} mit dem Wert `underline` enthält.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

Siehe den Abschnitt [Verwendungsnotizen](#verwendungsnotizen) für weitere Informationen darüber, wann es angebracht ist, `<u>` zu verwenden und wann nicht.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Zusammen mit anderen reinen Stilelementen wurde das ursprüngliche HTML-Unterstrich (`<u>`) Element in HTML 4 abgelehnt; jedoch wurde `<u>` in HTML 5 mit einer neuen, semantischen Bedeutung wiederhergestellt: um Text als mit irgendeiner Form nicht-textueller Anmerkung versehen zu kennzeichnen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `<u>`-Elements mit seiner Standard-Stilierung (unterstrichener Text) auf eine Weise, die mit einem Hyperlink verwechselt werden könnte, der standardmäßig ebenfalls unterstrichen ist.

### Anwendungsfälle

Gültige Anwendungsfälle für das `<u>`-Element beinhalten die Kennzeichnung von Rechtschreibfehlern, das Anwenden eines [richtigen Namenszeichens](https://en.wikipedia.org/wiki/Proper_name_mark), um Eigennamen im chinesischen Text zu kennzeichnen, und andere Formen der Anmerkung.

Sie sollten `<u>` _nicht_ verwenden, um Text zu Präsentationszwecken zu unterstreichen oder um Buchtitel anzugeben.

### Andere Elemente, die in Betracht gezogen werden können

In den meisten Fällen sollten Sie ein anderes Element als `<u>` verwenden, wie:

- {{HTMLElement("em")}} um betonte Betonung anzuzeigen
- {{HTMLElement("b")}} um Aufmerksamkeit auf Text zu lenken
- {{HTMLElement("mark")}} um Schlüsselwörter oder Phrasen zu markieren
- {{HTMLElement("strong")}} um anzuzeigen, dass Text von großer Bedeutung ist
- {{HTMLElement("cite")}} um die Titel von Büchern oder anderen Publikationen zu markieren
- {{HTMLElement("i")}} um technische Begriffe, Umschreibungen, Gedanken oder Namen von Schiffen in westlichen Texten zu kennzeichnen

Um textliche Anmerkungen bereitzustellen (im Gegensatz zu den nicht-textlichen Anmerkungen, die mit `<u>` erstellt werden), verwenden Sie das {{HTMLElement("ruby")}}-Element.

Um ein unterstrichenes Erscheinungsbild ohne semantische Bedeutung anzuwenden, verwenden Sie den Wert `underline` der CSS-Eigenschaft {{cssxref("text-decoration")}}.

## Beispiele

### Kennzeichnung eines Rechtschreibfehlers

Dieses Beispiel verwendet das `<u>`-Element und etwas CSS, um einen Absatz anzuzeigen, der einen falsch geschriebenen Fehler enthält, wobei der Fehler im Stil eines roten, welligen Unterstrichs angezeigt wird, der für diesen Zweck ziemlich häufig verwendet wird.

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

Dieses CSS gibt an, dass wenn das `<u>`-Element mit der Klasse `spelling` formatiert ist, es unter seinem Text einen roten, welligen Unterstrich haben soll. Dies ist eine übliche Stilistik für Rechtschreibfehler. Ein weiterer gängiger Stil kann mit `rotem gestricheltem Unterstrich` dargestellt werden.

#### Ergebnis

Das Ergebnis sollte jedem vertraut sein, der einen der heute verfügbaren beliebteren Textverarbeitungsprogramme verwendet hat.

{{EmbedLiveSample("Indicating_a_spelling_error", 650, 80)}}

### Vermeidung von \<u>

Die meiste Zeit möchten Sie tatsächlich kein `<u>` verwenden. Hier sind einige Beispiele, die zeigen, was Sie stattdessen in mehreren Fällen tun sollten.

#### Nicht-semantische Unterstriche

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

Buchtitel sollten mit dem {{HTMLElement("cite")}}-Element dargestellt werden, anstatt `<u>` oder sogar `<i>`.

##### Verwendung des cite-Elements

```html
<p>The class read <cite>Moby-Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Gestaltung des cite-Elements

Die standardmäßige Gestaltung für das `<cite>`-Element rendert den Text in Kursivschrift. Sie können dies mittels CSS überschreiben:

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
      <th scope="row">Erlaubte ARIA Rollen</th>
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

- Die {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, und {{HTMLElement("cite")}} Elemente sollten normalerweise stattdessen verwendet werden.
- Die CSS-Eigenschaft {{cssxref("text-decoration")}} sollte für nicht-semantische Unterstreichungen verwendet werden.
