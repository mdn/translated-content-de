---
title: "<wbr>: Das Zeilenumbruch-Möglichkeiten-Element"
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<wbr>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert eine Worttrennungsmöglichkeit – eine Position innerhalb eines Textes, an der der Browser optional eine Zeile umbrechen kann, obwohl seine Zeilenumbruchregeln an dieser Stelle normalerweise keinen Umbruch vornehmen würden.

{{InteractiveExample("HTML Demo: &lt;wbr&gt;", "tabbed-shorter")}}

```html interactive-example
<div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>
```

```css interactive-example
#example-paragraphs {
  background-color: white;
  overflow: hidden;
  resize: horizontal;
  width: 9rem;
  border: 2px dashed #999;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise

Auf UTF-8-kodierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE`-Codepunkt. Insbesondere verhält es sich wie ein Unicode-Bidi-BN-Codepunkt, was bedeutet, dass es keinen Einfluss auf die {{Glossary("bidi", "bidi")}}-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` zeigt, wenn nicht in zwei Zeilen gebrochen, `123,456` und nicht `456,123`.

Aus dem gleichen Grund fügt das `<wbr>`-Element keinen Bindestrich an der Zeilenumbruchsposition ein. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen das Weichbindestrich-Zeichen-Entity (`&shy;`).

## Beispiele

_[Der Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [eine URL _vor_ einem Satzzeichen zu trennen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass am Ende der Zeile ein Satzzeichen stehen bleibt, welches der Leser möglicherweise für das Ende der URL hält.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >eingerichteter Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Leer</td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassen</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >eingerichteten Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
