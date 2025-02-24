---
title: "<wbr>: Das Wort-Trenner-Möglichkeit-Element"
slug: Web/HTML/Element/wbr
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<wbr>`** [HTML](/de/docs/Web/HTML)-Element stellt eine Wort-Trennungsmöglichkeit dar – eine Position innerhalb eines Textes, an der der Browser optional eine Zeile brechen kann, obwohl seine Zeilenbrechungsregeln normalerweise keinen Bruch an dieser Stelle erzeugen würden.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anmerkungen

Auf UTF-8-kodierten Seiten verhält sich `<wbr>` wie der `U+200B ZERO-WIDTH SPACE` Codepunkt. Insbesondere verhält es sich wie ein Unicode Bidi BN Codepunkt, was bedeutet, dass es keinen Effekt auf die {{Glossary("bidi", "Bidi")}}-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` wird, wenn nicht auf zwei Zeilen gebrochen, als `123,456` und nicht als `456,123` angezeigt.

Aus demselben Grund fügt das `<wbr>`-Element keinen Bindestrich an der Zeilenbrechstelle hinzu. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen das weiche Bindestrich-Zeichenentity (`&shy;`).

## Beispiele

_Der [Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/)_ empfiehlt, [eine URL _vor_ einem Satzzeichen zu brechen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses), um zu vermeiden, dass ein Satzzeichen am Ende der Zeile stehen bleibt, das der Leser möglicherweise als Ende der URL missverstehen könnte.

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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
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
          >Satzinhalt</a
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
