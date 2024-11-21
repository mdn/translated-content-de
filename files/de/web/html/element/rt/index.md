---
title: "<rt>: Das Ruby-Text-Element"
slug: Web/HTML/Element/rt
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<rt>`** [HTML](/de/docs/Web/HTML)-Element gibt die Ruby-Textkomponente einer Ruby-Annotation an, die zur Bereitstellung von Aussprach-, Übersetzungs- oder Transliterationsinformationen für ostasiatische Typografie verwendet wird. Das `<rt>`-Element muss immer innerhalb eines {{HTMLElement("ruby")}}-Elements enthalten sein.

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

Siehe den Artikel über das {{HTMLElement("ruby")}}-Element für weitere Beispiele.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Verwendung von Ruby-Anmerkungen

Dieses Beispiel liefert Romaji-Transliteration für die Kanji-Zeichen innerhalb des {{HTMLElement("ruby")}}-Elements:

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das End-Tag darf weggelassen werden, wenn das <code>&#x3C;rt></code>-Element
        unmittelbar von einem <code>&#x3C;rt></code>- oder
        {{HTMLElement("rp")}}-Element gefolgt wird, oder wenn kein weiterer Inhalt
        im Elternelement vorhanden ist
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
