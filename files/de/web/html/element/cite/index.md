---
title: "<cite>: Das Zitationselement"
slug: Web/HTML/Element/cite
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<cite>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um den Titel eines zitierten kreativen Werks zu kennzeichnen. Die Referenz kann in einer nach kontextbezogenen Konventionen für Zitationsmetadaten geeigneten verkürzten Form sein.

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Im Kontext des `<cite>` Elements könnte ein zitiertes kreatives Werk zum Beispiel eines der folgenden sein:

- Ein Buch
- Ein Forschungspapier
- Ein Aufsatz
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theater- oder Filmskript
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theaterproduktion
- Ein Drama
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein Gerichtsbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogbeitrag oder Kommentar
- Ein Forenbeitrag oder Kommentar
- Ein Tweet
- Ein Facebook-Post
- Eine schriftliche oder mündliche Aussage
- Und so weiter.

Um eine Referenz zur Quelle des zitierten Materials, das in einem {{HTMLElement("blockquote")}} oder {{HTMLElement("q")}} Element enthalten ist, einzuschließen, verwenden Sie das [`cite`](/de/docs/Web/HTML/Element/blockquote#cite) Attribut am Element.

Normalerweise formatieren Browser den Inhalt eines `<cite>` Elements standardmäßig in Kursivschrift. Um dies zu vermeiden, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>` Element an.

## Beispiele

```html
<p>Weitere Informationen finden Sie in <cite>[ISO-0000]</cite>.</p>
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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassener Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        {{domxref("HTMLSpanElement")}} Schnittstelle für dieses Element.
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
- Das Element {{HTMLElement("q")}} für Inline-Zitate und das [`cite`](/de/docs/Web/HTML/Element/q#cite) Attribut.
