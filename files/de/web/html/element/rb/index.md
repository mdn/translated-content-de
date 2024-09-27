---
title: "<rb>: Das Ruby Base-Element"
slug: Web/HTML/Element/rb
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basistexkomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, d.h. den Text, der annotiert wird. Jedes `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Ruby-Anmerkungen dienen dazu, die Aussprache ostasiatischer Schriftzeichen anzuzeigen, wie z. B. mit japanischen Furigana- oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu trennen.
- Auch wenn `<rb>` kein [leeres Element](/de/docs/Glossary/void_element) ist, wird oft nur das öffnende Tag jedes Elements im Quellcode eingefügt, damit das Ruby-Markup weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version ergänzen.
- Man muss ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element einfügen, das annotiert werden soll.

## Beispiele

### Verwendung von rb

In diesem Beispiel bieten wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingefügt haben, um die beiden separaten Teile des Ruby-Basistextes zu kennzeichnen. Die Annotation hingegen wird durch zwei {{htmlelement("rt")}}-Elemente abgetrennt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Annotationen

Beachten Sie, dass wir dieses Beispiel auch mit den beiden Basisteiltexten völlig separat annotiert schreiben könnten. In diesem Fall ist es nicht erforderlich, `<rb>`-Elemente einzufügen:

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
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar auf
        ein {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder ein weiteres
        <code>&#x3C;rb></code>-Element folgt oder wenn kein weiterer Inhalt im
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
