---
title: "<rt>: Das Ruby-Text-Element"
slug: Web/HTML/Reference/Elements/rt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<rt>`** [HTML](/de/docs/Web/HTML) Element spezifiziert die Ruby-Text-Komponente einer Ruby-Annotation, die verwendet wird, um Informationen zur Aussprache, Übersetzung oder Transliteration für ostasiatische Typografie bereitzustellen. Das `<rt>` Element muss immer innerhalb eines {{HTMLElement("ruby")}} Elements enthalten sein.

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

Sehen Sie sich den Artikel über das {{HTMLElement("ruby")}} Element für weitere Beispiele an.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Verwendung von Ruby-Annotationen

Dieses Beispiel bietet Romaji-Transliteration für die Kanji-Zeichen innerhalb des {{HTMLElement("ruby")}} Elements:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen des Tags</th>
      <td>
        Der End-Tag kann weggelassen werden, wenn das <code>&#x3C;rt></code> Element
        unmittelbar gefolgt wird von einem <code>&#x3C;rt></code> oder
        {{HTMLElement("rp")}} Element, oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("ruby")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
