---
title: "<cite>: Das Citation-Element"
slug: Web/HTML/Element/cite
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<cite>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um den Titel eines zitierten kreativen Werks zu markieren. Die Referenz kann in einer abgekürzten Form gemäß kontextbezogenen Konventionen in Bezug auf Zitationsmetadaten vorliegen.

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Im Kontext des `<cite>`-Elements könnte ein zitiertes kreatives Werk beispielsweise eines der folgenden sein:

- Ein Buch
- Eine Forschungsarbeit
- Ein Essay
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theaterstück oder Drehbuch
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theateraufführung
- Ein Drama
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein Gerichtsfallbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogeintrag oder Kommentar
- Ein Forenbeitrag oder Kommentar
- Ein Tweet
- Ein Facebook-Beitrag
- Eine schriftliche oder mündliche Aussage
- Und so weiter.

Um eine Referenz zur Quelle von zitiertem Material, das in einem {{HTMLElement("blockquote")}}- oder {{HTMLElement("q")}}-Element enthalten ist, einzuschließen, verwenden Sie das [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut des Elements.

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
          >Fließtext-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4) implementiert Firefox die
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
