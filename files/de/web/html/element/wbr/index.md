---
title: "<wbr>: Das Line Break Opportunity-Element"
slug: Web/HTML/Element/wbr
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{HTMLSidebar}}

Das **`<wbr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Gelegenheit für einen Zeilenumbruch—eine Position im Text, an der der Browser optional eine Zeile umbrechen kann, obwohl seine Zeilenumbruchsregeln an dieser Stelle keinen Umbruch erzeugen würden.

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise

Auf UTF-8 kodierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE` Codepunkt. Insbesondere verhält es sich wie ein Unicode-bidi-BN-Codepunkt, was bedeutet, dass es keinen Einfluss auf die [bidi](/de/docs/Glossary/bidi)-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` zeigt, wenn es nicht auf zwei Zeilen aufgeteilt wird, `123,456` an und nicht `456,123`.

Aus dem gleichen Grund führt das `<wbr>`-Element keinen Bindestrich an der Zeilenumbruchstelle ein. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen das Soft-Hyphen-Zeichen-Entity (`&shy;`).

## Beispiele

_Der Yahoo Style Guide_ empfiehlt, [eine URL _vor_ einem Satzzeichen umzubrechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass ein Satzzeichen am Zeilenende stehen bleibt, das der Leser möglicherweise für das Ende der URL hält.

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

### Ergebnis

{{EmbedLiveSample("Example")}}

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Leer</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
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

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- Das {{HTMLElement("br")}}-Element
