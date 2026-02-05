---
title: "<rb>: Das Ruby Base-Element"
slug: Web/HTML/Reference/Elements/rb
l10n:
  sourceCommit: 038bda33048810c222cc32b71f52f14d53495a1d
---

{{deprecated_header}}

Das **`<rb>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basisteilkomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, d.h. den Text, der annotiert wird. Jedes `<rb>`-Element sollte jeden separaten atomaren Abschnitt des Basistextes umschließen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

- Ruby-Annotationen werden verwendet, um die Aussprache ostasiatischer Zeichen anzuzeigen, wie zum Beispiel japanische Furigana oder taiwanesische Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jeden Abschnitt des Ruby-Basistextes zu trennen.
- Obwohl `<rb>` kein {{Glossary("void_element", "leeres Element")}} ist, ist es üblich, nur das öffnende Tag jedes Elements im Quellcode einzuschließen, damit das Ruby-Markup weniger komplex und leichter zu lesen ist. Der Browser kann dann das volle Element in der gerenderten Version ausfüllen.
- Es muss ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element enthalten sein, das Sie annotieren möchten.

## Beispiele

### Verwendung von rb

In diesem Beispiel geben wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji" an:

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, wie wir zwei `<rb>`-Elemente eingeschlossen haben, um die beiden separaten Teile des Ruby-Basistextes abzugrenzen. Die Annotation hingegen wird durch zwei {{htmlelement("rt")}}-Elemente abgegrenzt.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Anmerkungen

Beachten Sie, dass wir dieses Beispiel auch so schreiben könnten, dass die beiden Teile des Basistextes völlig getrennt annotiert sind. In diesem Fall müssen wir keine `<rb>`-Elemente einfügen:

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Als Kind eines {{htmlelement("ruby")}}-Elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, oder
        {{HTMLElement("rp")}}-Element oder einem anderen
        <code>&#x3C;rb></code>-Element gefolgt wird, oder wenn kein weiterer Inhalt im
        Elternelement vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
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
