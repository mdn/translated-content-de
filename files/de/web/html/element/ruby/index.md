---
title: "<ruby>: Das Ruby Annotation Element"
slug: Web/HTML/Element/ruby
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<ruby>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert kleine Anmerkungen, die über, unter oder neben dem Basistext dargestellt werden. Es wird üblicherweise verwendet, um die Aussprache von ostasiatischen Zeichen anzuzeigen. Es kann auch zur Annotation anderer Textarten verwendet werden, aber diese Nutzung ist weniger verbreitet.

Der Begriff _ruby_ stammt ursprünglich von [einer Maßeinheit, die von Schriftsetzern verwendet wurde](<https://en.wikipedia.org/wiki/Agate_(typography)>), und steht für die kleinste Größe, bei der Text auf Zeitungspapier gedruckt werden kann und dennoch lesbar bleibt.

{{EmbedInteractiveExample("pages/tabbed/ruby.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSxRef("text-transform")}}: full-size-kana
