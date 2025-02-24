---
title: "<rp>: Das Ruby Fallback-Klammer-Element"
slug: Web/HTML/Element/rp
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<rp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Ersatzklammern für Browser bereitzustellen, die keine Ruby-Anmerkungen mit dem {{HTMLElement("ruby")}}-Element unterstützen. Ein `<rp>`-Element sollte jede der öffnenden und schließenden Klammern umschließen, die das {{HTMLElement("rt")}}-Element enthalten, das den Text der Anmerkung enthält.

{{InteractiveExample("HTML Demo: &lt;rp&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Ruby-Anmerkungen werden zur Darstellung der Aussprache ostasiatischer Zeichen verwendet, wie zum Beispiel japanische Furigana oder taiwanesische Bopomofo-Zeichen. Das `<rp>`-Element wird verwendet, wenn keine Unterstützung für das {{HTMLElement("ruby")}}-Element vorhanden ist; der `<rp>`-Inhalt zeigt an, dass eine Ruby-Anmerkung vorhanden ist, üblicherweise durch Klammern.

## Beispiele

### Verwendung von Ruby-Anmerkungen

Dieses Beispiel verwendet Ruby-Anmerkungen, um die [Romaji](https://en.wikipedia.org/wiki/Romaji)-Äquivalente für jedes Zeichen anzuzeigen.

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

Siehe den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

### Ohne Ruby-Unterstützung

Wenn Ihr Browser keine Ruby-Anmerkungen unterstützt, sieht das Ergebnis stattdessen so aus:

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Without_ruby_support", 600, 60)}}

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
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar auf ein
        {{HTMLElement("rt")}}- oder ein weiteres <code>&#x3C;rp></code>-Element folgt,
        oder wenn es keinen weiteren Inhalt im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ruby")}}-Element. <code>&#x3C;rp></code> muss
        unmittelbar vor oder nach einem
        {{HTMLElement("rt")}}-Element positioniert sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
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
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
