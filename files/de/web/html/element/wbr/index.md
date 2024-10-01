---
title: "<wbr>: Das Line Break Opportunity-Element"
slug: Web/HTML/Element/wbr
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{HTMLSidebar}}

Das **`<wbr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Worttrennungsmöglichkeit — eine Position im Text, an der der Browser optional eine Zeile brechen kann, obwohl seine Zeilenumbruchregeln ansonsten keinen Umbruch an dieser Stelle erzeugen würden.

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise

Auf UTF-8 codierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE` Codepunkt. Insbesondere verhält es sich wie ein Unicode bidi BN Codepunkt, was bedeutet, dass es keinen Effekt auf die {{Glossary("bidi", "bidi")}}-Reihenfolge hat: `<div dir=rtl>123,<wbr>456</div>` zeigt, wenn nicht auf zwei Zeilen gebrochen, `123,456` und nicht `456,123`.

Aus demselben Grund führt das `<wbr>`-Element keinen Bindestrich an der Zeilenumbruchstelle ein. Um einen Bindestrich nur am Zeilenende anzuzeigen, verwenden Sie stattdessen das weiche Bindestrich-Zeichen (`&shy;`).

## Beispiele

_[Der Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [einen URL _vor_ einem Satzzeichen zu brechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass ein Satzzeichen am Zeilenende stehen bleibt, das der Leser möglicherweise als Ende des URL missversteht.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Leer</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
