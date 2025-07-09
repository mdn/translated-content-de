---
title: "<head>: Das Dokument-Metadaten-Element (Header)"
slug: Web/HTML/Reference/Elements/head
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<head>`** [HTML](/de/docs/Web/HTML)-Element enthält maschinenlesbare Informationen ({{Glossary("metadata", "Metadaten")}}) über das Dokument, wie dessen [Titel](/de/docs/Web/HTML/Reference/Elements/title), [Skripte](/de/docs/Web/HTML/Reference/Elements/script) und [Stylesheets](/de/docs/Web/HTML/Reference/Elements/style). Es kann nur ein `<head>`-Element in einem HTML-Dokument geben.

> [!NOTE]
> `<head>` enthält hauptsächlich Informationen für die maschinelle Verarbeitung, nicht für die Lesbarkeit durch Menschen. Für Informationen, die für Menschen sichtbar sind, wie Überschriften auf oberster Ebene und aufgelistete Autoren, siehe das {{HTMLElement("header")}}-Element.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die {{Glossary("URI", "URIs")}} von einem oder mehreren Metadatenprofilen, getrennt durch {{Glossary("whitespace", "Leerzeichen")}}.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Falls das Dokument ein {{HTMLElement("iframe")}}
          <a href="/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a>-Dokument ist, oder falls Titelinformationen aus einem höherstufigen Protokoll verfügbar sind (wie die Betreffzeile in HTML-E-Mails), null oder mehr Elemente von Metadaten-Inhalt.
        </p>
        <p>
          Andernfalls ein oder mehrere Elemente von Metadaten-Inhalt, wobei genau eines ein {{HTMLElement("title")}}-Element ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag kann weggelassen werden, wenn das erste Element im
        <code>&#x3C;head></code>-Element ein Element ist.<br />Der End-Tag kann
        weggelassen werden, wenn das erste Element nach dem
        <code>&#x3C;head></code>-Element kein Leerzeichen oder Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("html")}}-Element, als dessen erstes Kind.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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

- Elemente, die innerhalb von `<head>` verwendet werden können:
  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
