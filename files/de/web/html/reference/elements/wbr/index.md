---
title: HTML-Element `<wbr>` für optionale Zeilenumbrüche
short-title: <wbr>
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [HTML](/de/docs/Web/HTML)-Element **`<wbr>`** kennzeichnet eine Stelle innerhalb eines Textes, an der der Browser optional einen Zeilenumbruch einfügen kann, obwohl seine Regeln für Zeilenumbrüche an dieser Stelle sonst keinen Umbruch vorsehen würden.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Hinweise

`<wbr>` verhält sich wie der Codepunkt `U+200B ZERO-WIDTH SPACE`. Insbesondere verhält es sich wie ein Unicode-Bidi-Codepunkt der Klasse BN. Das bedeutet, dass es keinen Einfluss auf die {{Glossary("bidi", "Bidi")}}-Reihenfolge hat: Wenn `<div dir=rtl>123,<wbr>456</div>` nicht auf zwei Zeilen umgebrochen wird, erscheint `123,456` und nicht `456,123`.

Aus demselben Grund fügt das Element `<wbr>` an der Umbruchstelle keinen Bindestrich ein. Wenn ein Bindestrich nur am Zeilenende erscheinen soll, verwenden Sie stattdessen die Zeichenentität für einen bedingten Trennstrich (`&shy;`).

## Beispiele

_[The Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [eine URL _vor_ einem Satzzeichen umzubrechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), damit am Zeilenende kein Satzzeichen steht, das Leser für das Ende der URL halten könnten.

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

### Ergebnis

{{EmbedLiveSample("examples")}}

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
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Ein Start-Tag ist erforderlich; ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >
        akzeptiert.
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
      <td>Alle</td>
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
- Das Element {{HTMLElement("br")}}
