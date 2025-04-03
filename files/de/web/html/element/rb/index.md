---
title: "<rb>: Das Ruby-Basis-Element"
slug: Web/HTML/Element/rb
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML) Element wird verwendet, um den Basisteil einer {{HTMLElement("ruby")}} Annotation abzugrenzen, d.h. den Text, der annotiert wird. Ein `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

- Ruby-Annotationen dienen dazu, die Aussprache von ostasiatischen Zeichen anzuzeigen, wie zum Beispiel die Verwendung von japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu separieren.
- Obwohl `<rb>` kein {{Glossary("void_element", "leeres Element")}} ist, ist es üblich, im Quellcode nur das öffnende Tag eines jeden Elements einzufügen, damit die Ruby-Markierung weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version einfügen.
- Es muss ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element, das Sie annotieren möchten, eingefügt werden.

## Beispiele

### Verwendung von rb

In diesem Beispiel bieten wir eine Annotation für das Originalzeichen-Äquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, wie wir zwei `<rb>`-Elemente eingefügt haben, um die beiden separaten Teile des Ruby-Basistextes abzugrenzen. Die Annotation hingegen wird durch zwei {{htmlelement("rt")}}-Elemente abgegrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Annotationen

Beachten Sie, dass wir dieses Beispiel auch schreiben könnten, indem die beiden Teile des Basistextes vollständig separat annotiert werden. In diesem Fall müssen keine `<rb>`-Elemente eingefügt werden:

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
        <a href="/de/docs/Web/HTML/Content_categories"
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
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von
        einem {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder einem weiteren
        <code>&#x3C;rb></code>-Element gefolgt wird, oder wenn es keinen weiteren Inhalt im
        Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("ruby")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
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
