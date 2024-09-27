---
title: "<bdo>: Das Element zur Übersteuerung von Bidirektionalem Text"
slug: Web/HTML/Element/bdo
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<bdo>`** [HTML](/de/docs/Web/HTML) Element übersteuert die aktuelle Textausrichtung, sodass der Text innerhalb des Elements in einer anderen Richtung dargestellt wird.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

Die Zeichen des Textes werden von dem Startpunkt in der angegebenen Richtung gezeichnet; die Orientierung der einzelnen Zeichen wird nicht beeinflusst (Zeichen werden beispielsweise nicht rückwärts gezeichnet).

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `dir`

  - : Die Richtung, in der der Text im Inhalt dieses Elements gerendert werden soll. Mögliche Werte sind:

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

## Hinweise

Die HTML 4 Spezifikation spezifizierte keine Ereignisse für dieses Element; sie wurden in XHTML hinzugefügt. Dies ist höchstwahrscheinlich ein Versehen.

## Technische Zusammenfassung

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
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind notwendig.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
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
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
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
