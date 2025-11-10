---
title: "<wbr>: Das Line Break Opportunity-Element"
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<wbr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Worttrennungsmöglichkeit – eine Position innerhalb des Textes, an der der Browser optional eine Zeilenumbruch einfügen kann, obwohl nach den normalen Zeilenumbruchregeln dort kein Umbruch erfolgen würde.

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
  border: 2px dashed #999999;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise

Auf UTF-8-kodierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE` Codepunkt. Insbesondere verhält es sich wie ein Unicode bidi BN Codepunkt, was bedeutet, dass es keinen Einfluss auf die {{Glossary("bidi", "bidi")}}-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` wird, wenn es nicht auf zwei Zeilen gebrochen wird, als `123,456` angezeigt und nicht als `456,123`.

Aus demselben Grund führt das `<wbr>`-Element auch keinen Bindestrich an der Zeilenumbruchstelle ein. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen das weiche Bindestrichzeichen-Entity (`&shy;`).

## Beispiele

_Der [Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [einen URL _vor_ einem Satzzeichen zu brechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass ein Satzzeichen am Ende der Zeile steht, das vom Leser als Ende der URL missverstanden werden könnte.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungselemente</a
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
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungselemente</a
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
