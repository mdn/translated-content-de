---
title: "<html>: Das HTML-Dokument / Wurzelelement"
slug: Web/HTML/Element/html
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

Das **`<html>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert das Wurzelelement (oberstes Element) eines HTML-Dokuments, daher wird es auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachfahren dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Document Type Definition")}} an, die das aktuelle Dokument regelt. Dieses Attribut ist nicht erforderlich, da es redundant mit den Versionsinformationen in der Dokumenttyp-Deklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namensraum")}} des Dokuments an. Der Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten erforderlich, die mit XML-{{Glossary("parser", "Parsern")}} analysiert werden, und optional in text/html-Dokumenten.

## Zugänglichkeit

Während HTML von Autoren nicht verlangt, Start- und End-Tags für das `<html>`-Element anzugeben, ist es wichtig, dass Autoren dies tun, da sie damit das [`lang`](/de/docs/Web/HTML/Global_attributes#lang) für die Webseite angeben können. Die Bereitstellung eines `lang`-Attributs mit einem gültigen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} auf dem `<html>`-Element hilft der Sprachausgabetechnologie, die richtige Sprache zur Ansage zu bestimmen. Das identifizierende Sprach-Tag sollte die Sprache beschreiben, die von der Mehrheit des Inhalts der Seite verwendet wird. Ohne dieses Tag fällt die Sprachausgabe in der Regel auf die vom Betriebssystem eingestellte Sprache zurück, was zu Fehlinterpretationen führen kann.

Das Hinzufügen einer gültigen `lang`-Deklaration auf dem `<html>`-Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie der {{HTMLElement("title")}} der Seite, richtig angekündigt werden.

- [MDN Understanding WCAG, Leitlinie 3.1-Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
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
        weggelassen werden, wenn das <code>&#x3C;html></code>-Element nicht direkt
        von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Wurzelelement eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"
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

- MathML-Oberstelement: {{MathMLElement("math")}}
- SVG-Oberstelement: {{SVGElement("svg")}}
