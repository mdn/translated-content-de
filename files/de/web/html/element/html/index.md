---
title: "<html>: Das HTML-Dokument / Wurzelelement"
slug: Web/HTML/Element/html
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<html>`**-Element des [HTML](/de/docs/Web/HTML) repräsentiert das Wurzelelement (übergeordnetes Element) eines HTML-Dokuments. Es wird daher auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Dokumenttypdefinition")}} an, die das aktuelle Dokument regelt. Dieses Attribut wird nicht benötigt, da es redundant mit der Versionsinformation in der Dokumenttypdeklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namespace")}} des Dokuments an. Der Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} geparst werden, erforderlich und in text/html-Dokumenten optional.

## Barrierefreiheit

Obwohl HTML Autoren nicht zwingt, die Anfangs- und Endtags des `<html>`-Elements anzugeben, ist es wichtig, dass Autoren dies tun, da sie dadurch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) für die Webseite festlegen können. Das Angeben eines `lang`-Attributs mit einem gültigen Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} im `<html>`-Element hilft Bildschirmlesetechnologien, die richtige Sprache zur Ansage zu bestimmen. Der identifizierende Sprachcode sollte die Sprache beschreiben, die in der Mehrheit des Inhalts der Seite verwendet wird. Ohne ihn werden Bildschirmlesegeräte typischerweise auf die im Betriebssystem eingestellte Sprache zurückgreifen, was zu falschen Aussprachen führen kann.

Ein gültiges `lang`-Attribut im `<html>`-Element gewährleistet auch, dass wichtige Metadaten im {{HTMLElement("head")}} der Seite, wie der {{HTMLElement("title")}} der Seite, richtig angekündigt werden.

- [MDN Verständnis WCAG, Leitlinie 3.1 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis Erfolgskriterium 3.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## Beispiel

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("head")}}-Element, gefolgt von einem
        {{HTMLElement("body")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;html></code>-Elements kein Kommentar ist.<br>Das End-Tag kann
        weggelassen werden, wenn das <code>&#x3C;html></code>-Element nicht
        unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Wurzelelement eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role">document</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- MathML Top-Level-Element: {{MathMLElement("math")}}
- SVG Top-Level-Element: {{SVGElement("svg")}}
