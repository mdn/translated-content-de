---
title: "<q>: Das Inline-Zitat-Element"
slug: Web/HTML/Element/q
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<q>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass der eingeschlossene Text ein kurzes Inline-Zitat ist. Die meisten modernen Browser setzen dies um, indem sie den Text in Anführungszeichen einschließen. Dieses Element ist für kurze Zitate gedacht, die keine Absatzumbrüche erfordern; für lange Zitate verwenden Sie das {{HTMLElement("blockquote")}}-Element.

{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Der Wert dieses Attributs ist eine URL, die ein Quelldokument oder eine Nachricht für die zitierte Information angibt. Dieses Attribut soll auf Informationen verweisen, die den Kontext oder die Referenz für das Zitat erläutern.

## Beispiele

```html
<p>
  Laut der Mozilla-Website,
  <q cite="https://www.mozilla.org/en-US/about/history/details/">
    wurde Firefox 1.0 im Jahr 2004 veröffentlicht und ein großer Erfolg.
  </q>
</p>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Ausdrucksinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Ausdrucksinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Ausdrucksinhalt</a
        >akzeptiert.
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("blockquote")}}-Element für lange Zitate.
- Das {{HTMLElement("cite")}}-Element für Quellenangaben.
