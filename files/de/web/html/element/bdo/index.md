---
title: "<bdo>: Das Element zur bidirektionalen Textüberschreibung"
slug: Web/HTML/Element/bdo
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<bdo>`** [HTML](/de/docs/Web/HTML)-Element überschreibt die aktuelle Textausrichtung, sodass der Text innerhalb des Elements in einer anderen Richtung gerendert wird.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

Die Zeichen des Textes werden vom Startpunkt in die angegebene Richtung gezeichnet; die Orientierung der einzelnen Zeichen wird nicht beeinflusst (Zeichen werden also beispielsweise nicht rückwärts gezeichnet).

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `dir`

  - : Die Richtung, in die der Text in den Inhalten dieses Elements gerendert werden soll. Mögliche Werte sind:

    - `ltr`: Gibt an, dass der Text von links nach rechts gehen soll.
    - `rtl`: Gibt an, dass der Text von rechts nach links gehen soll.

## Beispiele

```html
<!-- Textausrichtung umschalten -->
<p>Dieser Text wird von links nach rechts gehen.</p>
<p><bdo dir="rtl">Dieser Text wird von rechts nach links gehen.</bdo></p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Anmerkungen

In der HTML-4-Spezifikation wurden für dieses Element keine Ereignisse spezifiziert; sie wurden in XHTML hinzugefügt. Dies ist höchstwahrscheinlich ein Versehen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4)
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
