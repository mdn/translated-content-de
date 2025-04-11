---
title: "<rp>: Das Ruby-Fallback-Klammern-Element"
slug: Web/HTML/Reference/Elements/rp
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<rp>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um erkennbare Klammern für Browser bereitzustellen, die die Anzeige von Ruby-Annotationen mit dem {{HTMLElement("ruby")}}-Element nicht unterstützen. Ein `<rp>`-Element sollte jede der öffnenden und schließenden Klammern umschließen, die das {{HTMLElement("rt")}}-Element, das den Text der Annotation enthält, umgeben.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungsrichtlinien

- Ruby-Annotationen werden verwendet, um die Aussprache ostasiatischer Zeichen anzuzeigen, wie beispielsweise japanische Furigana oder taiwanesische Bopomofo-Zeichen. Das `<rp>`-Element wird verwendet, falls das {{HTMLElement("ruby")}}-Element nicht unterstützt wird; der `<rp>`-Inhalt gibt an, was angezeigt werden sollte, um auf die Anwesenheit einer Ruby-Annotation hinzuweisen – üblicherweise Klammern.

## Beispiele

### Verwendung von Ruby-Annotationen

Dieses Beispiel verwendet Ruby-Annotationen, um die [Romaji](https://en.wikipedia.org/wiki/Romaji)-Äquivalente für jedes Zeichen anzuzeigen.

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

Falls Ihr Browser keine Ruby-Annotationen unterstützt, sieht das Ergebnis stattdessen so aus:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}- oder einem anderen <code>&#x3C;rp></code>-Element gefolgt wird,
        oder wenn im übergeordneten Element kein weiterer Inhalt vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Ein {{HTMLElement("ruby")}}-Element. <code>&#x3C;rp></code> muss
        unmittelbar vor oder nach einem {{HTMLElement("rt")}}-Element positioniert sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
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
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
