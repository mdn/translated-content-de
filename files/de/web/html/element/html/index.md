---
title: "<html>: Das HTML Dokument / Root-Element"
slug: Web/HTML/Element/html
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

Das **`<html>`** [HTML](/de/docs/Web/HTML) Element repräsentiert das Wurzel- (oberste) Element eines HTML-Dokuments, daher wird es auch als _Root-Element_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. In einem Dokument kann es nur ein `<html>` Element geben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML [Document Type Definition](/de/docs/Glossary/Doctype) an, die das aktuelle Dokument bestimmt. Dieses Attribut ist nicht erforderlich, da es redundant zur Versionsinformation in der Dokumenttyp-Deklaration ist.
- `xmlns`
  - : Gibt den [XML](/de/docs/Glossary/XML) [Namespace](/de/docs/Glossary/Namespace) des Dokuments an. Der Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten erforderlich, die mit XML [Parsers](/de/docs/Glossary/parser) analysiert werden, und optional in text/html-Dokumenten.

## Barrierefreiheit

Während HTML es nicht verlangt, dass Autoren Anfangs- und End-Tags des `<html>` Elements spezifizieren, ist es wichtig, dass dies geschieht, da dadurch das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) für die Webseite angegeben werden kann. Ein `lang` Attribut mit einem gültigen Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} zu einem `<html>` Element zu geben, hilft der Technologie zur Sprachausgabe, die richtige Sprache zur Ankündigung zu bestimmen. Der identifizierende Sprachcode sollte die Sprache beschreiben, die von der Mehrheit des Inhalts der Seite verwendet wird. Ohne diesen wird die Sprachausgabe in der Regel auf die im Betriebssystem eingestellte Sprache zurückgreifen, was zu Fehlinterpretationen führen kann.

Die Einbeziehung einer gültigen `lang`-Deklaration im `<html>` Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie z.B. der {{HTMLElement("title")}} der Seite, ordnungsgemäß angekündigt werden.

- [MDN Verständnis von WCAG, Leitfaden 3.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis des Erfolgskriteriums 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("head")}} Element, gefolgt von einem
        {{HTMLElement("body")}} Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann ausgelassen werden, wenn das erste Element im
        <code>&lt;html&gt;</code> Element kein Kommentar ist.<br>Das End-Tag
        kann ausgelassen werden, wenn das <code>&lt;html&gt;</code> Element
        nicht direkt von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Root-Element eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"
          >Dokument</a
        >
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
