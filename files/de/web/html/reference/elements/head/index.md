---
title: "`<head>` HTML-Dokument Metadaten (Header)-Element"
short-title: <head>
slug: Web/HTML/Reference/Elements/head
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<head>`** [HTML](/de/docs/Web/HTML)-Element enthält maschinenlesbare Informationen ({{Glossary("metadata", "Metadaten")}}) über das Dokument, wie seinen [Titel](/de/docs/Web/HTML/Reference/Elements/title), [Skripte](/de/docs/Web/HTML/Reference/Elements/script) und [Stylesheets](/de/docs/Web/HTML/Reference/Elements/style). Es kann nur ein `<head>`-Element in einem HTML-Dokument geben.

> [!NOTE]
> `<head>` enthält primär Informationen zur maschinellen Verarbeitung, nicht für die menschliche Lesbarkeit. Für Information, die für Menschen sichtbar ist, wie Überschriften auf oberster Ebene und aufgelistete Autoren, siehe das {{HTMLElement("header")}}-Element.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die {{Glossary("URI", "URIs")}} eines oder mehrerer Metadatenprofile, getrennt durch {{Glossary("whitespace", "Leerzeichen")}}.

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
          Wenn das Dokument ein {{HTMLElement("iframe")}}
          <a href="/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a>-Dokument ist oder wenn Titelinformationen aus einem höheren Protokollniveau verfügbar sind (wie die Betreffzeile in HTML-E-Mails), null oder mehr Metadateninhaltelemente.
        </p>
        <p>
          Andernfalls, ein oder mehr Metadateninhaltelemente, wobei genau eines ein {{HTMLElement("title")}}-Element ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Start-Tag darf weggelassen werden, wenn das erste Ding innerhalb des
        <code>&#x3C;head></code>-Elements ein Element ist.<br />Der End-Tag darf
        weggelassen werden, wenn das erste Ding nach dem
        <code>&#x3C;head></code>-Element kein Leerzeichen oder Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Ein {{HTMLElement("html")}}-Element, als sein erstes Kind.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
