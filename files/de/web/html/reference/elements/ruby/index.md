---
title: "<ruby>: Das Ruby-Annotationselement"
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: e66301dff87e1ac68bd5e6e9dace12ead3eded6f
---

Das **`<ruby>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert kleine Anmerkungen, die über, unter oder neben dem Basistext dargestellt werden. Es wird üblicherweise verwendet, um die Aussprache von ostasiatischen Schriftzeichen anzuzeigen. Es kann auch verwendet werden, um andere Arten von Text zu annotieren, aber diese Verwendung ist weniger verbreitet.

Der Begriff _Ruby_ stammt ursprünglich aus [einer Maßeinheit, die von Schriftsetzern verwendet wird](<https://en.wikipedia.org/wiki/Agate_(typography)>). Er steht für die kleinste Größe, in der Text auf Zeitungspapier gedruckt werden kann, während er dennoch lesbar bleibt.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Beispiel 1: Charakter

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Eine oder mehrere Gruppen, jede bestehend aus zwei Teilen:
        <ol>
          <li>Der Basistext, der entweder ist:
            <ul>
              <li><a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>, aber ohne <code>&lt;ruby&gt;</code>-Elemente und ohne <code>&lt;ruby&gt;</code>-Elementnachfahren, oder</li>
              <li>Ein einzelnes <code>&lt;ruby&gt;</code>-Element, das selbst keine <code>&lt;ruby&gt;</code>-Elementnachfahren hat.</li>
            </ul>
          </li>
          <li>Die Anmerkungen für den Basistext, die entweder sind:
            <ul>
              <li>Ein oder mehrere {{HTMLElement("rt")}}-Elemente, oder</li>
              <li>Ein {{HTMLElement("rp")}}-Element, gefolgt von einem oder mehreren {{HTMLElement("rt")}}-Elementen, von denen jedes selbst von einem {{HTMLElement("rp")}}-Element gefolgt wird (d.h. <code>rp, rt, rp, rt, ..., rp</code>).</li>
            </ul>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{cssxref("ruby-overhang")}}
- {{CSSxRef("text-transform")}}: full-size-kana
