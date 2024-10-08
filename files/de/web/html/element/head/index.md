---
title: "<head>: Das Dokument-Metadaten (Header) Element"
slug: Web/HTML/Element/head
l10n:
  sourceCommit: 2dc9e66061f63a06320f5c1c554a238e1b25c369
---

{{HTMLSidebar}}

Das **`<head>`** [HTML](/de/docs/Web/HTML)-Element enthält maschinenlesbare Informationen ({{Glossary("metadata", "Metadaten")}}) über das Dokument, wie dessen [title](/de/docs/Web/HTML/Element/title), [scripts](/de/docs/Web/HTML/Element/script) und [style sheets](/de/docs/Web/HTML/Element/style). Es kann nur ein `<head>`-Element in einem HTML-Dokument geben.

> **Note:** `<head>` enthält in erster Linie Informationen zur maschinellen Verarbeitung, nicht zur Leserlichkeit für Menschen. Für Informationen, die für Menschen sichtbar sind, wie Überschriften auf oberster Ebene und aufgelistete Autoren, siehe das {{HTMLElement("header")}}-Element.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die {{Glossary("URI", "URI")}}s von einem oder mehreren Metadaten-Profilen, getrennt durch {{Glossary("whitespace", "Whitespace")}}.

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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <p>
          Wenn das Dokument ein {{HTMLElement("iframe")}}
          <a href="/de/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a> Dokument ist, oder wenn Titelinformationen von einem höheren Protokollniveau verfügbar sind (wie die Betreffzeile in HTML-E-Mails), null oder mehr Elemente von Metadateninhalt.
        </p>
        <p>
          Andernfalls ein oder mehrere Elemente von Metadateninhalt, wobei genau eines ein {{HTMLElement("title")}}-Element ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element im
        <code>&#x3C;head></code>-Element ein Element ist.<br />Das End-Tag kann
        weggelassen werden, wenn das erste Zeichen nach dem
        <code>&#x3C;head></code>-Element kein Leerzeichen oder ein Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("html")}}-Element, als dessen erstes Kind.</td>
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
