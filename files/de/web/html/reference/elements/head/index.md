---
title: "<head>: Das Dokument-Metadaten (Kopfbereich) Element"
slug: Web/HTML/Reference/Elements/head
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

Das **`<head>`** [HTML](/de/docs/Web/HTML) Element enthält maschinenlesbare Informationen ({{Glossary("metadata", "Metadaten")}}) über das Dokument, wie seinen [Titel](/de/docs/Web/HTML/Reference/Elements/title), [Skripte](/de/docs/Web/HTML/Reference/Elements/script) und [Stylesheets](/de/docs/Web/HTML/Reference/Elements/style). In einem HTML-Dokument darf es nur ein `<head>` Element geben.

> [!NOTE] > `<head>` enthält hauptsächlich Informationen für die maschinelle Verarbeitung, nicht für die menschliche Lesbarkeit. Für sichtbare Informationen wie oberste Überschriften und aufgelistete Autoren, siehe das {{HTMLElement("header")}} Element.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `profile` {{deprecated_inline}}
  - : Die {{Glossary("URI", "URIs")}} von einem oder mehreren Metadaten-Profilen, getrennt durch {{Glossary("whitespace", "Leerzeichen")}}.

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
          <a href="/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a> Dokument ist oder wenn Titelinformationen von einem höheren Protokolllevel verfügbar sind (wie die Betreffzeile in HTML-E-Mails), null oder mehr Elemente des Metadateninhalts.
        </p>
        <p>
          Andernfalls ein oder mehrere Elemente von Metadateninhalten, wobei genau eines ein {{HTMLElement("title")}} Element sein muss.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;head></code> Elements ein weiteres Element ist.<br />Das End-Tag kann
        weggelassen werden, wenn das erste Element nach dem
        <code>&#x3C;head></code> Element kein Leerzeichen oder Kommentar ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Ein {{HTMLElement("html")}} Element, als sein erstes Kind.</td>
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
