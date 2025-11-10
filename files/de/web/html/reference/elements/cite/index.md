---
title: "<cite>: Das Zitationselement"
slug: Web/HTML/Reference/Elements/cite
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<cite>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um den Titel eines kreativen Werkes zu markieren. Die Referenz kann in einer gemäß den kontextbezogenen Konventionen zur Zitationsmetadaten abgekürzten Form vorliegen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise zur Verwendung

Im Kontext des `<cite>`-Elements könnte ein kreatives Werk beispielsweise eines der folgenden sein:

- Ein Buch
- Ein Forschungspapier
- Ein Essay
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theaterstück oder Filmskript
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theaterproduktion
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein juristischer Fallbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogeintrag oder Kommentar
- Ein Foreneintrag oder Kommentar
- Ein Tweet
- Ein Facebook-Beitrag
- Eine schriftliche oder mündliche Aussage
- Und so weiter.

Um eine Referenz zur Quelle des zitierten Materials aufzunehmen, das innerhalb eines {{HTMLElement("blockquote")}}- oder {{HTMLElement("q")}}-Elements enthalten ist, verwenden Sie das [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attribut auf dem Element.

Typischerweise formatieren Browser die Inhalte eines `<cite>`-Elements standardmäßig kursiv. Um dies zu vermeiden, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>`-Element an.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschl. Gecko 1.9.2 (Firefox 4), verwendet Firefox die
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
