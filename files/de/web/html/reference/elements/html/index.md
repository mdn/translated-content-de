---
title: "<html>: Das HTML-Dokument / Wurzelelement"
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<html>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert die Wurzel (das oberste Element) eines HTML-Dokuments und wird daher auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der {{Glossary("Doctype", "Document Type Definition")}} (DTD) an, die das aktuelle Dokument bestimmt. Dieses Attribut ist nicht erforderlich, da es redundant mit den Versionsinformationen in der Dokumenttyp-Deklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}} {{Glossary("Namespace", "Namespace")}} des Dokuments an. Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist erforderlich bei Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} analysiert werden, und optional bei text/html-Dokumenten.

## Barrierefreiheit

Obwohl HTML nicht verlangt, dass Autoren die Start- und End-Tags des `<html>`-Elements angeben, ist es wichtig, dass Autoren dies tun, da sie dadurch die Möglichkeit haben, das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für die Webseite anzugeben. Die Angabe eines `lang`-Attributs mit einem gültigen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} am `<html>`-Element hilft Technologien zur Bildschirmlesung, die korrekte Sprache anzukündigen. Das identifizierende Sprach-Tag sollte die Sprache beschreiben, die von der Mehrheit des Inhalts auf der Seite verwendet wird. Ohne das Attribut wird die Sprache der Bildschirmlesegeräte normalerweise auf die im Betriebssystem eingestellte Sprache zurückgesetzt, was zu falschen Aussprachen führen kann.

Das Einfügen einer gültigen `lang`-Angabe auf dem `<html>`-Element stellt ebenfalls sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie z. B. der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angekündigt werden.

- [MDN Verständnis von WCAG, Erläuterungen zu Leitlinie 3.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis des Erfolgskriteriums 3.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("head")}}-Element, gefolgt von einem
        {{HTMLElement("body")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann ausgelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;html></code>-Elements kein Kommentar ist.<br>Das End-Tag kann
        ausgelassen werden, wenn das <code>&#x3C;html></code>-Element nicht direkt
        von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Wurzelelement eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- MathML oberstes Element: {{MathMLElement("math")}}
- SVG oberstes Element: {{SVGElement("svg")}}
