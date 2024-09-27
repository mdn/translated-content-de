---
title: "<head>: Das Dokument-Metadaten (Header) Element"
slug: Web/HTML/Element/head
l10n:
  sourceCommit: 2dc9e66061f63a06320f5c1c554a238e1b25c369
---

{{HTMLSidebar}}

Das **`<head>`** [HTML](/de/docs/Web/HTML) Element enthält maschinenlesbare Informationen ([Metadaten](/de/docs/Glossary/metadata)) über das Dokument, wie seinen [Titel](/de/docs/Web/HTML/Element/title), [Skripte](/de/docs/Web/HTML/Element/script) und [Stylesheets](/de/docs/Web/HTML/Element/style). In einem HTML-Dokument kann es nur ein `<head>` Element geben.

> **Note:** `<head>` enthält hauptsächlich Informationen für die maschinelle Verarbeitung, nicht für die Lesbarkeit durch Menschen. Für sichtbarere Informationen, wie etwa oberste Überschriften und aufgelistete Autoren, siehe das {{HTMLElement("header")}} Element.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die [URIs](/de/docs/Glossary/URI) eines oder mehrerer Metadatenprofile, getrennt durch [Leerraum](/de/docs/Glossary/whitespace).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Wenn das Dokument ein {{HTMLElement("iframe")}}
          <a href="/de/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a> Dokument ist oder wenn Titelinformationen aus einem höheren Protokoll verfügbar sind (wie die Betreffzeile in HTML-E-Mails), null oder mehr Elemente von Metadaten-Inhalten.
        </p>
        <p>
          Andernfalls eines oder mehrere Elemente von Metadaten-Inhalten, wobei genau eines ein {{HTMLElement("title")}} Element ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;head></code> Elements ein Element ist.<br />Das End-Tag kann
        weggelassen werden, wenn das erste nachfolgende Element des
        <code>&#x3C;head></code> Elements kein Leerzeichen oder Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("html")}} Element, als sein erstes Kind.</td>
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
      <td>Keine <code>role</code> erlaubt</td>
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
