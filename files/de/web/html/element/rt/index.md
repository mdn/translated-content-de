---
title: "<rt>: Das Ruby Text-Element"
slug: Web/HTML/Element/rt
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

Das **`<rt>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert die Ruby-Textkomponente einer Ruby-Annotation, die zur Bereitstellung von Aussprache-, Übersetzungs- oder Transliteration-Informationen für ostasiatische Typografie verwendet wird. Das `<rt>`-Element muss immer in einem {{HTMLElement("ruby")}}-Element enthalten sein.

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

Sehen Sie sich den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele an.

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Verwendung von Ruby-Annotationen

Dieses einfache Beispiel bietet Romaji-Transliteration für die Kanji-Zeichen innerhalb des {{HTMLElement("ruby")}}-Elements:

```html
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

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
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag kann weggelassen werden, wenn das <code>&#x3C;rt></code>-Element
        unmittelbar von einem <code>&#x3C;rt></code> oder
        {{HTMLElement("rp")}}-Element gefolgt wird, oder wenn im
        übergeordneten Element kein Inhalt mehr vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("ruby")}}-Element.</td>
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
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
