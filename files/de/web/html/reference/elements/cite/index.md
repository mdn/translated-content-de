---
title: "<cite>: Das Zitationselement"
slug: Web/HTML/Reference/Elements/cite
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<cite>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um den Titel eines kreativen Werks zu markieren. Der Verweis kann in verkürzter Form entsprechend der kontextbezogenen Konventionen im Zusammenhang mit Zitationsmetadaten erfolgen.

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
cite {
  /* Add your styles here */
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Im Kontext des `<cite>`-Elements könnte ein kreatives Werk zum Beispiel eines der folgenden sein:

- Ein Buch
- Eine wissenschaftliche Arbeit
- Ein Aufsatz
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theaterstück oder ein Drehbuch
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Bühnenproduktion
- Ein Theaterstück
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein Rechtsfallbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogbeitrag oder Kommentar
- Ein Forenbeitrag oder Kommentar
- Ein Tweet
- Ein Facebook-Beitrag
- Eine schriftliche oder mündliche Aussage
- Und so weiter.

Um einen Verweis auf die Quelle von zitiertem Material, das innerhalb eines {{HTMLElement("blockquote")}}- oder {{HTMLElement("q")}}-Elements enthalten ist, einzuschließen, verwenden Sie das [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attribut im Element.

Typischerweise stilisieren Browser den Inhalt eines `<cite>`-Elements standardmäßig kursiv. Um dies zu vermeiden, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>`-Element an.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags, die weggelassen werden können</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
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
- Das Element {{HTMLElement("q")}} für Inline-Zitate und das [`cite`](/de/docs/Web/HTML/Reference/Elements/q#cite)-Attribut.
