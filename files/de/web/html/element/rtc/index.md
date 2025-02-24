---
title: "<rtc>: Das Ruby Text Container-Element"
slug: Web/HTML/Element/rtc
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rtc>`** [HTML](/de/docs/Web/HTML)-Element umfasst semantische Anmerkungen von Zeichen, die in einem Ruby von {{HTMLElement("rb")}}-Elementen dargestellt werden, die innerhalb eines {{HTMLElement("ruby")}}-Elements verwendet werden. {{HTMLElement("rb")}}-Elemente können sowohl Aussprache- ({{HTMLElement("rt")}}) als auch semantische (`<rtc>`) Anmerkungen haben.

{{InteractiveExample("HTML Demo: &lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby xml:lang="zh-Hant" style="ruby-position: under;">
    <rbc>
        <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
        <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
        <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
        <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
    </rbc>
    <rtc xml:lang="en" style="ruby-position: over;">
        <rp>(</rp><rt>Malaysia</rt><rp>)</rp>
    </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

```html
<div class="info">
  <ruby>
    <rtc>
      <rb>旧</rb><rt>jiù</rt>
      <rb>金</rb><rt>jīn</rt>
      <rb>山</rb><rt>shān</rt>
    </rtc>
    <rtc>San Francisco</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 600, 120)}}

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
          >Phrasierungsinhalt</a
        >
        oder {{HTMLElement("rt")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>
        Der Schlusstag kann weggelassen werden, wenn er unmittelbar von einem
        {{HTMLElement("rb")}}, <code>&lt;rtc&gt;</code>- oder
        {{HTMLElement("rt")}}-Elementöffnungstag oder vom Schlusstag seines
        Elternteils gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("ruby")}}-Element.</td>
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
- {{HTMLElement("rt")}}
