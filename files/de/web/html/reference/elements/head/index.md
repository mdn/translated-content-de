---
title: "<head>: Das Dokument-Metadatenelement (Header)"
slug: Web/HTML/Reference/Elements/head
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<head>`** [HTML](/de/docs/Web/HTML) Element enthält maschinenlesbare Informationen ({{Glossary("metadata", "Metadaten")}}) über das Dokument, wie dessen [Titel](/de/docs/Web/HTML/Reference/Elements/title), [Skripte](/de/docs/Web/HTML/Reference/Elements/script) und [Stylesheets](/de/docs/Web/HTML/Reference/Elements/style). In einem HTML-Dokument kann es nur ein `<head>` Element geben.

> **Note:** `<head>` enthält primär Informationen für die maschinelle Verarbeitung, nicht für die menschliche Lesbarkeit. Für menschlich sichtbare Informationen, wie oberste Überschriften und gelistete Autoren, siehe das {{HTMLElement("header")}} Element.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die {{Glossary("URI", "URI")}}s eines oder mehrerer Metadaten-Profile, getrennt durch {{Glossary("whitespace", "Leerzeichen")}}.

## Beispiele

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Document title</title>
  </head>
</html>
```

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Wenn das Dokument ein {{HTMLElement("iframe")}}
          <a href="/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a> Dokument ist oder wenn Titelinformationen durch ein höheres Protokoll verfügbar sind (wie z.B. die Betreffzeile in HTML-E-Mails), null oder mehr Elemente von Metadateninhalten.
        </p>
        <p>
          Andernfalls ein oder mehrere Elemente von Metadateninhalten, wobei genau eines ein {{HTMLElement("title")}} Element ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag kann ausgelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;head></code> Elements ein anderes Element ist.<br />Der End-Tag kann
        ausgelassen werden, wenn das erste Folgende nach dem
        <code>&#x3C;head></code> Element kein Leerzeichen oder Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("html")}} Element, als dessen erstes Kind.</td>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Elemente, die innerhalb des `<head>` verwendet werden können:

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
