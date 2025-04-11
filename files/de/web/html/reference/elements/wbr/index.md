---
title: "<wbr>: Das Zeichen für Zeilenumbruch-Möglichkeit"
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<wbr>`**-Element [HTML](/de/docs/Web/HTML) stellt eine Wortumbruchmöglichkeit dar – eine Position innerhalb eines Textes, an der der Browser optional eine Zeile brechen kann, auch wenn seine Zeilenbruchregeln sonst an dieser Stelle keinen Zeilenumbruch erzeugen würden.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anmerkungen

Auf UTF-8-codierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE` Codepunkt. Insbesondere verhält es sich wie ein Unicode bidi BN Codepunkt, was bedeutet, dass es keine Auswirkungen auf die {{Glossary("bidi", "bidi")}}-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` zeigt, wenn nicht in zwei Zeilen gebrochen, `123,456` und nicht `456,123`.

Aus demselben Grund führt das `<wbr>`-Element nicht dazu, dass ein Bindestrich am Zeilenwechselpunkt eingefügt wird. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen die weiche Bindestrich-Zeichenentität (`&shy;`).

## Beispiele

_Der [Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [eine URL _vor_ einem Satzzeichen abzubrechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass ein Satzzeichen am Ende der Zeile bleibt, das der Leser möglicherweise fälschlicherweise als Ende der URL ansieht.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Leer</td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
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
      <td>Jede</td>
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
