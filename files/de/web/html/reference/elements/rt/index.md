---
title: "`<rt>`-HTML-Ruby-Textelement"
short-title: <rt>
slug: Web/HTML/Reference/Elements/rt
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Das **`<rt>`**-[HTML](/de/docs/Web/HTML)-Element legt die Ruby-Textkomponente einer Ruby-Anmerkung fest, die verwendet wird, um Informationen zur Aussprache, Übersetzung oder Transliteration für ostasiatische Typografie bereitzustellen. Das `<rt>`-Element muss immer innerhalb eines {{HTMLElement("ruby")}}-Elements enthalten sein.

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

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Verwendung von Ruby-Anmerkungen

Dieses Beispiel stellt die Romaji-Transliteration für die Kanji-Zeichen innerhalb des {{HTMLElement("ruby")}}-Elements bereit:

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

Weitere Beispiele finden Sie beim {{HTMLElement("ruby")}}-Element.

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
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn auf das <code>&#x3C;rt></code>-Element
        unmittelbar ein <code>&#x3C;rt></code>- oder ein
        {{HTMLElement("rp")}}-Element folgt oder wenn im Elternelement kein weiterer
        Inhalt vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>Ein {{HTMLElement("ruby")}}-Element.</td>
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
      <td>Beliebige</td>
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
- [CSS-Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout)-Modul
