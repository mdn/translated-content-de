---
title: "<rb>: Das Ruby Base Element"
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Grundtextkomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, das heißt, den Text, der annotiert wird. Jedes `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Ruby-Annotationen werden verwendet, um die Aussprache ostasiatischer Zeichen zu zeigen, beispielsweise mit japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu separieren.
- Obwohl `<rb>` kein {{Glossary("void_element", "void-Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode einzufügen, damit das Ruby-Markup weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version ergänzen.
- Sie müssen ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element einschließen, das Sie annotieren möchten.

## Beispiele

### Verwendung von rb

In diesem Beispiel geben wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingefügt haben, um die zwei separaten Teile des Ruby-Basistextes zu kennzeichnen. Die Annotation hingegen ist durch zwei {{htmlelement("rt")}}-Elemente begrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Getrennte Annotationen

Beachten Sie, dass wir dieses Beispiel auch so schreiben könnten, dass die beiden Teile des Basistextes vollständig separat annotiert werden. In diesem Fall müssen wir keine `<rb>`-Elemente einfügen:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Als Kind eines {{htmlelement("ruby")}}-Elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}} oder
        {{HTMLElement("rp")}}-Element oder einem anderen
        <code>&#x3C;rb></code>-Element gefolgt wird, oder wenn es keinen weiteren Inhalt im
        Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternteile</th>
      <td>Ein {{HTMLElement("ruby")}}-Element.</td>
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
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
