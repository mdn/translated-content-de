---
title: "`<rb>` HTML-`ruby`-Basiselement"
short-title: <rb>
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<rb>`**-Element des [HTML](/de/docs/Web/HTML) wird verwendet, um die Basiskomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, d.h. den Text, der annotiert wird. Jedes `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umfassen.

## Attribute

Dieses Element enthält nur die [Globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Ruby-Annotationen werden verwendet, um die Aussprache ostasiatischer Zeichen anzuzeigen, beispielsweise bei der Verwendung von japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des `ruby`-Basistextes zu trennen.
- Auch wenn `<rb>` kein {{Glossary("void_element", "leeres Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode einzufügen, damit die `ruby`-Auszeichnung weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version auffüllen.
- Sie müssen ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element einfügen, das Sie annotieren möchten.

## Beispiele

### Verwendung von `rb`

In diesem Beispiel liefern wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingefügt haben, um die beiden separaten Teile des `ruby`-Basistextes zu kennzeichnen. Die Annotation dagegen wird durch zwei {{htmlelement("rt")}}-Elemente abgegrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Getrennte Annotationen

Beachten Sie, dass wir dieses Beispiel auch mit den zwei Basisteilen vollständig getrennt annotiert schreiben könnten. In diesem Fall brauchen wir keine `<rb>`-Elemente einzufügen:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Separate annotations')}}

Sehen Sie sich den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele an.

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
      <th scope="row">Weglassen des Tags</th>
      <td>
        Das Schlusstag kann weggelassen werden, wenn das Element unmittelbar von
        einem {{HTMLElement("rt")}}, {{HTMLElement("rtc")}} oder
        {{HTMLElement("rp")}} Element oder einem anderen
        <code>&#x3C;rb></code> Element gefolgt wird oder wenn kein Inhalt mehr im
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
- [CSS ruby layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
