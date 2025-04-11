---
title: "<rb>: Das Ruby Base-Element"
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basisteilkomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, d.h. den Text, der annotiert wird. Ein `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Ruby-Anmerkungen dienen der Anzeige der Aussprache ostasiatischer Zeichen, wie zum Beispiel durch die Verwendung von japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu separieren.
- Obwohl `<rb>` kein {{Glossary("void_element", "Void-Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode aufzunehmen, damit das Ruby-Markup weniger komplex und einfacher lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version ausfüllen.
- Sie müssen ein {{HTMLElement("rt")}}-Element für jedes Basissegment/`<rb>`-Element einfügen, das Sie annotieren möchten.

## Beispiele

### Verwendung von rb

In diesem Beispiel geben wir eine Annotation für das originale Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingeführt haben, um die beiden separaten Teile des Ruby-Basistextes zu kennzeichnen. Die Annotation hingegen wird durch zwei {{HTMLElement("rt")}}-Elemente gekennzeichnet.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Annotationen

Beachten Sie, dass wir dieses Beispiel auch mit den beiden Basisteilen, die vollständig separat annotiert sind, schreiben könnten. In diesem Fall müssen wir keine `<rb>`-Elemente einfügen:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Separate annotations')}}

Siehe den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Als Kind eines {{HTMLElement("ruby")}}-Elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element direkt gefolgt wird von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder einem anderen
        <code>&#x3C;rb></code>-Element, oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
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
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
