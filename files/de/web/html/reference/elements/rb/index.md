---
title: "`<rb>` HTML ruby base element"
short-title: <rb>
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basistextkomponente einer {{HTMLElement("ruby")}}-Annotation zu begrenzen, d.h. den Text, der annotiert wird. Ein `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Anwendungshinweise

- Ruby-Annotationen dienen der Anzeige der Aussprache von ostasiatischen Schriftzeichen, wie die Verwendung von japanischem Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu trennen.
- Obwohl `<rb>` kein {{Glossary("void_element", "leeres Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode einzuschließen, damit das Ruby-Markup weniger komplex und leichter zu lesen ist. Der Browser kann dann das vollständige Element in der gerenderten Version ausfüllen.
- Sie müssen für jedes Basissegment/`<rb>`-Element, das Sie annotieren möchten, ein {{htmlelement("rt")}}-Element einschließen.

## Beispiele

### Verwendung von rb

In diesem Beispiel bieten wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji" an:

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, wie wir zwei `<rb>`-Elemente eingeschlossen haben, um die zwei getrennten Teile des Ruby-Basistextes zu begrenzen. Die Annotation hingegen ist durch zwei {{htmlelement("rt")}}-Elemente begrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Annotationen

Beachten Sie, dass wir dieses Beispiel auch mit den zwei Basisteilen vollständig separat annotiert schreiben könnten. In diesem Fall müssen wir keine `<rb>`-Elemente einschließen:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Separate annotations')}}

Weitere Beispiele finden Sie im Artikel über das {{HTMLElement("ruby")}}-Element.

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
      <td>Als Kind eines {{htmlelement("ruby")}}-Elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element sofort von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder einem anderen
        <code>&#x3C;rb></code>-Element gefolgt wird oder wenn es keinen weiteren Inhalt im
        Elternelement gibt.
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
- [CSS Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout)-Modul
