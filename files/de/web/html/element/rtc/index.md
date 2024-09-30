---
title: "<rtc>: Das Ruby Text Container-Element"
slug: Web/HTML/Element/rtc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rtc>`** [HTML](/de/docs/Web/HTML)-Element umfasst semantische Annotationen von Zeichen, die in einem Ruby von {{HTMLElement("rb")}}-Elementen verwendet werden, die innerhalb eines {{HTMLElement("ruby")}}-Elements genutzt werden. {{HTMLElement("rb")}}-Elemente können sowohl Aussprache- ({{HTMLElement("rt")}}) als auch semantische (`<rtc>`) Annotationen haben.

{{EmbedInteractiveExample("pages/tabbed/rtc.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

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
          >Textliche Inhalte</a
        >
        oder {{HTMLElement("rt")}}-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das schließende Tag kann weggelassen werden, wenn es unmittelbar von einem {{HTMLElement("rb")}}, <code>&lt;rtc&gt;</code> oder {{HTMLElement("rt")}}-Element-Öffnungstag oder vom Schließtag seines Elternteils gefolgt wird.
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
