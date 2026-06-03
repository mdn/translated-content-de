---
title: "`<wbr>` HTML-Element für Zeilenumbruch-Gelegenheit"
short-title: <wbr>
slug: Web/HTML/Reference/Elements/wbr
l10n:
  sourceCommit: b7de5fa065848c0d703b6763df7a15d1eb908c91
---

Das **`<wbr>`**-[HTML](/de/docs/Web/HTML)-Element steht für eine Worttrennungsgelegenheit - eine Position im Text, an der der Browser optional eine Zeile brechen kann, auch wenn seine Zeilenumbruchregeln an dieser Stelle keinen Umbruch erzeugen würden.

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

`<wbr>` verhält sich wie der Codepunkt `U+200B ZERO-WIDTH SPACE`. Insbesondere verhält es sich wie ein Unicode bidi BN Codepunkt, was bedeutet, dass es keine Auswirkungen auf die {{Glossary("bidi", "bidi")}}-Anordnung hat: `<div dir=rtl>123,<wbr>456</div>` zeigt an, wenn es nicht auf zwei Zeilen gebrochen wird, `123,456` und nicht `456,123`.

Aus demselben Grund führt das `<wbr>`-Element keinen Bindestrich an der Zeilenumbruchstelle ein. Um einen Bindestrich nur am Ende einer Zeile erscheinen zu lassen, verwenden Sie stattdessen die weiche Bindestrich-Zeichenentität (`&shy;`).

## Beispiele

[Der Yahoo Style Guide](https://web.archive.org/web/20121014054923/http://styleguide.yahoo.com/) empfiehlt, [eine URL _vor_ einem Satzzeichen](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses) zu trennen, um ein Satzzeichen am Ende der Zeile zu vermeiden, das der Leser möglicherweise für das Ende der URL hält.

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
          >Textinhalt</a
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
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        > akzeptiert.
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
