---
title: "<bdo>: Das Bidirectional Text Override Element"
slug: Web/HTML/Element/bdo
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<bdo>`** [HTML](/de/docs/Web/HTML)-Element überschreibt die aktuelle Textausrichtung, sodass der Text innerhalb des Elements in einer anderen Richtung dargestellt wird.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

Die Zeichen des Textes werden vom Ausgangspunkt in die vorgegebene Richtung gezeichnet; die Ausrichtung der einzelnen Zeichen wird nicht beeinflusst (die Zeichen werden zum Beispiel nicht rückwärts gezeichnet).

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `dir`

  - : Die Richtung, in die der Text innerhalb dieses Elements gerendert werden soll. Mögliche Werte sind:

    - `ltr`: Gibt an, dass der Text in einer Links-nach-Rechts-Richtung verlaufen soll.
    - `rtl`: Gibt an, dass der Text in einer Rechts-nach-Links-Richtung verlaufen soll.

## Beispiele

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Anmerkungen

Die HTML 4-Spezifikation spezifizierte keine Ereignisse für dieses Element; sie wurden in XHTML hinzugefügt. Dies ist höchstwahrscheinlich ein Versehen.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4) implementiert Firefox die
        <code
          ><a href="/de/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes HTML-Element: {{HTMLElement("bdi")}}
