---
title: "<cite>: Das Zitier-Element"
slug: Web/HTML/Element/cite
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<cite>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um den Titel eines kreativen Werks auszuzeichnen. Die Referenz kann in abgekürzter Form gemäß kontextgerechten Konventionen im Zusammenhang mit Zitationsmetadaten erfolgen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Im Kontext des `<cite>`-Elements könnte ein kreatives Werk beispielsweise eines der folgenden sein:

- Ein Buch
- Eine Forschungsarbeit
- Ein Aufsatz
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theaterstück- oder Drehbuch
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theaterproduktion
- Ein Schauspiel
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein juristischer Fallbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogeintrag oder Kommentar
- Ein Forenbeitrag oder Kommentar
- Ein Tweet
- Ein Facebook-Post
- Eine schriftliche oder mündliche Aussage
- Und so weiter.

Um eine Referenz auf die Quelle von zitiertem Material einzufügen, das innerhalb eines {{HTMLElement("blockquote")}} oder {{HTMLElement("q")}} Elements enthalten ist, verwenden Sie das [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut am Element.

Normalerweise formatieren Browser den Inhalt eines `<cite>`-Elements standardmäßig kursiv. Um dies zu vermeiden, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>`-Element an.

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >
        akzeptiert.
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
      <td>Jede</td>
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

- Das Element {{HTMLElement("blockquote")}} für längere Zitate.
- Das Element {{HTMLElement("q")}} für Inline-Zitate und das [`cite`](/de/docs/Web/HTML/Element/q#cite)-Attribut.
