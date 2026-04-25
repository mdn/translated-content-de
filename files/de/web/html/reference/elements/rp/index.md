---
title: "`<rp>` HTML-Element für Rückfall-Klammern bei Ruby-Annotationen"
short-title: <rp>
slug: Web/HTML/Reference/Elements/rp
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<rp>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Rückfall-Klammern für Browser bereitzustellen, die die Anzeige von Ruby-Annotationen mit dem {{HTMLElement("ruby") }}-Element nicht unterstützen. Ein `<rp>`-Element sollte jeweils die Öffnungs- und Schließklammern umschließen, die das {{HTMLElement("rt")}}-Element enthalten, das den Text der Annotation enthält.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

- Ruby-Annotationen werden verwendet, um die Aussprache von ostasiatischen Zeichen zu zeigen, ähnlich wie bei japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rp>`-Element wird verwendet, wenn das {{HTMLElement("ruby")}}-Element nicht unterstützt wird; der `<rp>`-Inhalt gibt an, was angezeigt werden soll, um das Vorhandensein einer Ruby-Annotation zu kennzeichnen, normalerweise Klammern.

## Beispiele

### Verwendung von Ruby-Annotationen

Dieses Beispiel nutzt Ruby-Annotationen, um die [Romaji](https://en.wikipedia.org/wiki/Romaji)-Äquivalente für jedes Zeichen anzuzeigen.

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

Wenn Ihr Browser Ruby-Annotationen nicht unterstützt, sieht das Ergebnis stattdessen so aus:

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar gefolgt wird von einem
        {{HTMLElement("rt")}} oder einem anderen <code>&#x3C;rp></code>-Element,
        oder wenn es im übergeordneten Element keinen weiteren Inhalt gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ruby")}}-Element. <code>&#x3C;rp></code> muss
        unmittelbar vor oder nach einem
        {{HTMLElement("rt")}}-Element positioniert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
- [CSS Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout)-Modul
