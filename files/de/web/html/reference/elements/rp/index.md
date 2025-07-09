---
title: "<rp>: Das Ruby-Fallback-Klammer-Element"
slug: Web/HTML/Reference/Elements/rp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<rp>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Fallback-Klammern bereitzustellen, für Browser, die keine Ruby-Annotationen mit dem {{HTMLElement("ruby") }}-Element unterstützen. Ein `<rp>`-Element sollte jede der öffnenden und schließenden Klammern umschließen, die das {{HTMLElement("rt")}}-Element umgeben, das den Text der Annotation enthält.

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

- Ruby-Annotationen dienen der Anzeige der Aussprache von ostasiatischen Zeichen, wie zum Beispiel japanische Furigana oder taiwanesische Bopomofo-Zeichen. Das `<rp>`-Element wird im Fall von fehlender Unterstützung des {{HTMLElement("ruby")}}-Elements verwendet; der `<rp>`-Inhalt stellt dar, was angezeigt werden sollte, um die Präsenz einer Ruby-Annotation anzuzeigen, üblicherweise in Form von Klammern.

## Beispiele

### Verwendung von Ruby-Annotationen

Dieses Beispiel verwendet Ruby-Annotationen, um die [Romaji](https://en.wikipedia.org/wiki/Romaji)-Entsprechungen für jedes Zeichen anzuzeigen.

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

Wenn Ihr Browser keine Ruby-Annotationen unterstützt, sieht das Ergebnis stattdessen so aus:

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
        {{HTMLElement("rt")}}- oder einem weiteren <code>&#x3C;rp></code>-Element,
        oder wenn kein weiterer Inhalt im Elternelement vorhanden ist.
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
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
