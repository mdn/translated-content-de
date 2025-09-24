---
title: "<html>: Das HTML-Dokument / Wurzelelement"
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`<html>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert die Wurzel (Top-Level-Element) eines HTML-Dokuments, daher wird es auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Dokumenttypdefinition")}} an, die das aktuelle Dokument bestimmt. Dieses Attribut ist nicht notwendig, da es redundant mit den Versionsinformationen in der Dokumenttypdeklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namespace")}} des Dokuments an. Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist erforderlich in Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} geparst werden, und optional in text/html-Dokumenten.

## Barrierefreiheit

Obwohl HTML Autoren nicht vorschreibt, Start- und Endtags für das `<html>`-Element zu spezifizieren, ist es wichtig, dass Autoren dies tun, da es ihnen ermöglicht, die [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für die Webseite anzugeben. Ein `lang`-Attribut mit einem gültigen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} auf dem `<html>`-Element hilft der Bildschirmlesetechnologie, die richtige Sprache anzukündigen. Der identifizierende Sprach-Tag sollte die Sprache beschreiben, die von der Mehrheit des Seiteninhalts verwendet wird. Ohne diesen wird von Bildschirmlesern typischerweise die Sprache des Betriebssystems verwendet, was zu Fehlinterpretationen führen kann.

Ein gültiges `lang`-Deklaration auf dem `<html>`-Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angekündigt werden.

- [MDN-Verständnis von WCAG, Leitfaden 3.1-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
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
        Ein {{HTMLElement("head")}}-Element, gefolgt von einem
        {{HTMLElement("body")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Der Starttag kann weggelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;html></code>-Elements keine Anmerkung ist.<br>Der Endtag kann
        weggelassen werden, wenn das <code>&#x3C;html></code>-Element nicht unmittelbar
        von einer Anmerkung gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Wurzelelement eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"
          >document</a
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

- MathML-Top-Level-Element: {{MathMLElement("math")}}
- SVG-Top-Level-Element: {{SVGElement("svg")}}
