---
title: HTML-Element `<cite>` für Werktitel
short-title: <cite>
slug: Web/HTML/Reference/Elements/cite
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<cite>`**-Element in [HTML](/de/docs/Web/HTML) dient dazu, den Titel eines kreativen Werks auszuzeichnen. Die Quellenangabe kann gemäß den im jeweiligen Kontext üblichen Zitierkonventionen in abgekürzter Form erfolgen.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Im Zusammenhang mit dem `<cite>`-Element kann ein kreatives Werk beispielsweise Folgendes sein:

- Ein Buch
- Eine wissenschaftliche Arbeit
- Ein Essay
- Ein Gedicht
- Eine Partitur
- Ein Lied
- Ein Theater- oder Filmdrehbuch
- Ein Film
- Eine Fernsehsendung
- Ein Spiel
- Eine Skulptur
- Ein Gemälde
- Eine Theaterinszenierung
- Ein Theaterstück
- Eine Oper
- Ein Musical
- Eine Ausstellung
- Ein juristischer Fallbericht
- Ein Computerprogramm
- Eine Website
- Eine Webseite
- Ein Blogbeitrag oder -kommentar
- Ein Forenbeitrag oder -kommentar
- Ein Tweet
- Ein Facebook-Beitrag
- Eine schriftliche oder mündliche Äußerung
- Und so weiter.

Um die Quelle eines Zitats anzugeben, das sich in einem {{HTMLElement("blockquote")}}- oder {{HTMLElement("q")}}-Element befindet, verwenden Sie das Attribut [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite) des jeweiligen Elements.

Browser stellen den Inhalt eines `<cite>`-Elements standardmäßig meist kursiv dar. Wenn Sie dies vermeiden möchten, wenden Sie die CSS-Eigenschaft {{cssxref("font-style")}} auf das `<cite>`-Element an.

## Beispiele

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### Ergebnis

{{EmbedLiveSample("examples", 640, 80)}}

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
          >Flow content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >
        zulässt.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox für dieses Element die Schnittstelle
        [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement).
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
- Das Element {{HTMLElement("q")}} für Zitate im Fließtext und das Attribut [`cite`](/de/docs/Web/HTML/Reference/Elements/q#cite).
