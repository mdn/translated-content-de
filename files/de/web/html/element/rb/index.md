---
title: "<rb>: Das Ruby Base-Element"
slug: Web/HTML/Element/rb
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basisteilkomponente einer {{HTMLElement("ruby")}}-Annotation abzugrenzen, d.h. den Text, der annotiert wird. Jedes separate atomare Segment des Basisteils sollte in einem `<rb>`-Element eingeschlossen sein.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Ruby-Annotationen werden verwendet, um die Aussprache von ostasiatischen Zeichen anzuzeigen, wie zum Beispiel japanische Furigana oder taiwanesische Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basisteils zu trennen.
- Obwohl `<rb>` kein {{Glossary("void_element", "void-Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode einzufügen, sodass die Ruby-Markierung weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version auffüllen.
- Sie müssen für jedes Basissegment/`<rb>`-Element, das Sie annotieren möchten, ein {{htmlelement("rt")}}-Element einschließen.

## Beispiele

### Verwendung von rb

In diesem Beispiel geben wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingefügt haben, um die beiden separaten Teile des Ruby-Basisteils abzugrenzen. Die Annotation hingegen wird von zwei {{htmlelement("rt")}}-Elementen abgegrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Getrennte Annotationen

Beachten Sie, dass wir dieses Beispiel auch schreiben könnten, indem die beiden Basisteiltexte vollständig getrennt annotiert werden. In diesem Fall müssen wir keine `<rb>`-Elemente einfügen:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Separate annotations')}}

Lesen Sie den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

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
      <td>Als Kind eines {{htmlelement("ruby")}}-Elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder einem anderen
        <code>&#x3C;rb></code>-Element gefolgt wird, oder wenn es keinen weiteren Inhalt
        im Elternelement gibt.
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
