---
title: "<rp>: Das Ruby-Ersatzklammer-Element"
slug: Web/HTML/Element/rp
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

Das **`<rp>`** [HTML](/de/docs/Web/HTML)-Element wird verwendet, um Ersatzklammern für Browser bereitzustellen, die keine Ruby-Anmerkungen mit dem {{HTMLElement("ruby")}}-Element anzeigen können. Ein `<rp>`-Element sollte jeweils die öffnende und schließende Klammer um das {{HTMLElement("rt")}}-Element einschließen, das den Anmerkungstext enthält.

{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

- Ruby-Anmerkungen dienen zur Anzeige der Aussprache ostasiatischer Zeichen, wie z.B. mit japanischen Furigana oder taiwanischen Bopomofo-Zeichen. Das `<rp>`-Element wird verwendet, wenn die Unterstützung für das {{HTMLElement("ruby")}}-Element fehlt; der `<rp>`-Inhalt gibt an, was angezeigt werden soll, um das Vorhandensein einer Ruby-Anmerkung zu kennzeichnen, üblicherweise Klammern.

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

Lesen Sie den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

### Ohne Ruby-Unterstützung

Wenn Ihr Browser keine Ruby-Anmerkungen unterstützt, sieht das Ergebnis stattdessen folgendermaßen aus:

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das Element sofort von einem
        {{HTMLElement("rt")}}- oder einem anderen `<rp>`-Element gefolgt wird,
        oder wenn es keinen weiteren Inhalt im Elternelement gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("ruby")}}-Element. `<rp>` muss
        unmittelbar vor oder nach einem
        {{HTMLElement("rt")}}-Element platziert sein.
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
