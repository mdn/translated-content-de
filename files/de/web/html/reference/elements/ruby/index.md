---
title: "<ruby>: Das Ruby-Annotation-Element"
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: a4052a87560b31c773aeaced653c33fcf2812f77
---

{{HTMLSidebar}}

Das **`<ruby>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert kleine Anmerkungen, die über, unter oder neben dem Basistext dargestellt werden, normalerweise verwendet, um die Aussprache ostasiatischer Schriftzeichen anzuzeigen. Es kann auch zur Annotation anderer Arten von Text verwendet werden, aber diese Nutzung ist weniger üblich.

Der Begriff _ruby_ stammt ursprünglich von [einer Maßeinheit, die von Setzern verwendet wurde](<https://en.wikipedia.org/wiki/Agate_(typography)>), und repräsentiert die kleinste Größe, in der Text auf Zeitungspapier gedruckt werden kann, während er lesbar bleibt.

{{InteractiveExample("HTML Demo: &lt;ruby&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Beispiel 1: Zeichen

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Example 1: Character')}}

### Beispiel 2: Wort

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Ergebnis

{{EmbedLiveSample('Example 1: Word')}}

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Zeichenfolgen-Inhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Zeichenfolgen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung der Tags</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Zeichenfolgen-Inhalt</a
        > akzeptiert.
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

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{cssxref("ruby-overhang")}}
- {{CSSxRef("text-transform")}}: full-size-kana
