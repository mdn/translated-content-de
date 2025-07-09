---
title: "<rtc>: Das Ruby Text Container-Element"
slug: Web/HTML/Reference/Elements/rtc
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<rtc>`** [HTML](/de/docs/Web/HTML)-Element umfasst semantische Annotationen von Zeichen, die in einer Ruby-Darstellung der {{HTMLElement("rb")}}-Elemente verwendet werden, die innerhalb eines {{HTMLElement("ruby")}}-Elements genutzt werden. {{HTMLElement("rb")}}-Elemente können sowohl eine Aussprache- ({{HTMLElement("rt")}}) als auch eine semantische (`<rtc>`) Annotation haben.

{{InteractiveExample("HTML Demo: &lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby lang="zh-Hant">
  <rbc>
    <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
    <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
    <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
    <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
  </rbc>
  <rtc lang="en">
    <rp>(</rp><rt>Malaysia</rt><rp>)</rp>
  </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
  ruby-position: under;
}

rtc {
  ruby-position: over;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>旧</rb><rt>jiù</rt> <rb>金</rb><rt>jīn</rt> <rb>山</rb><rt>shān</rt>
    </rbc>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a
        >
        oder {{HTMLElement("rt")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das schließende Tag kann weggelassen werden, wenn es unmittelbar von einem
        {{HTMLElement("rb")}}, <code>&lt;rtc&gt;</code> oder
        {{HTMLElement("rt")}}-Element öffnenden Tag oder vom Elternschließtag
        gefolgt wird.
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
