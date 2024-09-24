---
title: "<rp>: Das Ruby-Fallback-Klammer-Element"
slug: Web/HTML/Element/rp
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

Das **`<rp>`**-[HTML](/de/docs/Web/HTML)-Element wird verwendet, um Klammern darzustellen, wenn Browser die Anzeige von Ruby-Anmerkungen mithilfe des {{HTMLElement("ruby") }}-Elements nicht unterstützen. Ein `<rp>`-Element sollte jeweils die öffnenden und schließenden Klammern einschließen, die das {{HTMLElement("rt")}}-Element umgeben, das den Text der Anmerkung enthält.

{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Ruby-Anmerkungen dienen dazu, die Aussprache von ostasiatischen Zeichen anzuzeigen, wie die Verwendung von japanischen Furigana oder taiwanesischen Bopomofo-Zeichen. Das `<rp>`-Element wird in Ermangelung der Unterstützung für das {{HTMLElement("ruby")}}-Element verwendet; der Inhalt von `<rp>` gibt an, was angezeigt werden soll, um die Anwesenheit einer Ruby-Anmerkung zu kennzeichnen, normalerweise in Form von Klammern.

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
        Das End-Tag kann weggelassen werden, wenn das Element unmittelbar von einem
        {{HTMLElement("rt")}}- oder einem weiteren <code>&#x3C;rp></code>-Element
        gefolgt wird oder wenn im Elternelement kein weiterer Inhalt vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
