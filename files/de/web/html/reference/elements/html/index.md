---
title: "<html>: Das HTML-Dokument / Root-Element"
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<html>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert das oberste (Root-)Element eines HTML-Dokuments, daher wird es auch als _Root-Element_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Dokumenttyp-Definition")}} an, die das aktuelle Dokument regelt. Dieses Attribut ist nicht erforderlich, da es redundant zur Versionsinformation in der Dokumenttypdeklaration ist.
- `xmlns`
  - : Gibt das {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namensraum")}} des Dokuments an. Der Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} geparst werden, erforderlich und in Text/HTML-Dokumenten optional.

## Barrierefreiheit

Obwohl HTML von Autoren nicht verlangt, die Start- und End-Tags des `<html>`-Elements anzugeben, ist es wichtig, dass Autoren dies tun, da sie so die [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für die Webseite angeben können. Die Bereitstellung eines `lang`-Attributs mit einem gültigen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} auf dem `<html>`-Element hilft Technologien zur Bildschirmvorlesung, die korrekte Sprache zu erkennen und anzukündigen. Das sprachidentifizierende Tag sollte die Sprache beschreiben, die von der Mehrheit des Seiteninhalts verwendet wird. Ohne dieses Tag wird die Standard-Sprache von Bildschirmlesegeräten typischerweise auf die im Betriebssystem eingestellte Sprache zurückgreifen, was zu Fehlinterpretationen führen kann.

Die Einbeziehung einer gültigen `lang`-Deklaration auf dem `<html>`-Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie z.B. der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angekündigt werden.

- [MDN Verständnis für WCAG, Richtlinie 3.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis des Erfolgskriteriums 3.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des
        <code>&#x3C;html></code>-Elements kein Kommentar ist.<br>Das End-Tag kann
        weggelassen werden, wenn das <code>&#x3C;html></code>-Element nicht direkt
        von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Root-Element eines Dokuments.</td>
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

- Oberstes Element in MathML: {{MathMLElement("math")}}
- Oberstes Element in SVG: {{SVGElement("svg")}}
