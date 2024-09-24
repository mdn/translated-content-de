---
title: "<rb>: Das Ruby-Basiselement"
slug: Web/HTML/Element/rb
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<rb>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um die Basistextkomponente einer {{HTMLElement("ruby")}}-Annotation zu kennzeichnen, also den Text, der annotiert wird. Ein `<rb>`-Element sollte jedes separate atomare Segment des Basistextes umschließen.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Ruby-Anmerkungen dienen dazu, die Aussprache von ostasiatischen Zeichen anzuzeigen, wie z.B. mit japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rb>`-Element wird verwendet, um jedes Segment des Ruby-Basistextes zu trennen.
- Auch wenn `<rb>` kein {{glossary("void element")}} ist, ist es üblich, im Quellcode nur das öffnende Tag jedes Elements einzuschließen, damit das Ruby-Markup weniger komplex und leichter lesbar ist. Der Browser kann dann das vollständige Element in der gerenderten Version ausfüllen.
- Es ist notwendig, ein {{htmlelement("rt")}}-Element für jedes Basissegment/`<rb>`-Element, das annotiert werden soll, einzuschließen.

## Beispiele

### Verwendung von rb

In diesem Beispiel bieten wir eine Annotation für das ursprüngliche Zeichenäquivalent von "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Beachten Sie, dass wir zwei `<rb>`-Elemente eingeschlossen haben, um die zwei separaten Teile des Ruby-Basistextes zu kennzeichnen. Die Annotation wiederum wird durch zwei {{htmlelement("rt")}}-Elemente gekennzeichnet.

#### Ergebnis

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate Annotationen

Beachten Sie, dass wir dieses Beispiel auch so schreiben könnten, dass die zwei Basistextteile vollständig separat annotiert sind. In diesem Fall müssen wir keine `<rb>`-Elemente einschließen:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Separate annotations')}}

Sehen Sie den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

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
      <th scope="row">Tag-Weglassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}} oder
        {{HTMLElement("rp")}}-Element oder einem weiteren
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
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
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
