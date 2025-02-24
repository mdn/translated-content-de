---
title: "<rt>: Das Ruby-Text-Element"
slug: Web/HTML/Element/rt
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<rt>`** [HTML](/de/docs/Web/HTML) Element spezifiziert die Ruby-Textkomponente einer Ruby-Anmerkung, die verwendet wird, um Aussprache-, Übersetzungs- oder Transliterationinformationen für ostasiatische Typografie bereitzustellen. Das `<rt>` Element muss immer innerhalb eines {{HTMLElement("ruby")}} Elements enthalten sein.

{{InteractiveExample("HTML Demo: &lt;rt&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

Sehen Sie den Artikel über das {{HTMLElement("ruby")}} Element für mehr Beispiele.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Verwendung von Ruby-Anmerkungen

Dieses Beispiel liefert eine Romaji-Transliteration für die Kanji-Zeichen innerhalb des {{HTMLElement("ruby")}} Elements:

```html
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das <code>&#x3C;rt></code>-Element
        sofort von einem weiteren <code>&#x3C;rt></code> oder
        {{HTMLElement("rp")}} Element gefolgt wird, oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("ruby")}} Element.</td>
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
