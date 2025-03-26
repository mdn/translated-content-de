---
title: "`<cite>`: Das Zitier-Element"
slug: Web/HTML/Element/cite
l10n:
  sourceCommit: 692790ba295d9fae09ff888b559ba9d1145581ec
---

{{HTMLSidebar}}

Das **`<cite>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um den Titel eines kreativen Werks zu markieren. Der Verweis kann in einer abgekürzten Form gemäß kontextbezogenen Konventionen im Zusammenhang mit Zitationsmetadaten erfolgen.

{{InteractiveExample("HTML Demo: &lt;cite&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <blockquote>
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
  </blockquote>
  <figcaption>
    First sentence in
    <cite
      ><a href="http://www.george-orwell.org/1984/0.html"
        >Nineteen Eighty-Four</a
      ></cite
    >
    by George Orwell (Part 1, Chapter 1).
  </figcaption>
</figure>
```

```css interactive-example
/* stylelint-disable-next-line block-no-empty */
cite {
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Im Kontext des `<cite>`-Elements könnte ein kreatives Werk beispielsweise eines der folgenden sein:

- Ein Buch
- Ein Forschungspapier
- Ein Essay
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theaterstück oder ein Drehbuch
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theaterproduktion
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein Gerichtsbericht
- Ein Computerprogramm
- Eine Webseite
- Eine Webseite
- Ein Blogbeitrag oder Kommentar
- Ein Forenbeitrag oder Kommentar
- Ein Tweet
- Ein Facebook-Post
- Eine schriftliche oder mündliche Erklärung
- Und so weiter.

Um einen Verweis auf die Quelle des zitierten Materials einzuschließen, das in einem {{HTMLElement("blockquote")}}- oder {{HTMLElement("q")}}-Element enthalten ist, verwenden Sie das [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut an dem Element.

Typischerweise formatieren Browser den Inhalt eines `<cite>`-Elements standardmäßig in Kursivschrift. Um dies zu vermeiden, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>`-Element an.

## Beispiele

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### Ergebnis

{{EmbedLiveSample("Example", 640, 80)}}

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Anfangs- als auch End-Tag sind erforderlich.</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis inkl. Gecko 1.9.2 (Firefox 4) implementiert Firefox die
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Element {{HTMLElement("blockquote")}} für lange Zitate.
- Das Element {{HTMLElement("q")}} für Inline-Zitate und das [`cite`](/de/docs/Web/HTML/Element/q#cite)-Attribut.
