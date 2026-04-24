---
title: "`<html>` HTML-Dokumentwurzelelement"
short-title: <html>
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<html>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert das Wurzelelement (oberstes Element) eines HTML-Dokuments und wird daher auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachkommen dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Dokumenttyp-Definition")}} an, die das aktuelle Dokument regelt. Dieses Attribut ist nicht erforderlich, da es redundant mit den Versionsinformationen in der Dokumenttyp-Deklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namespace")}} des Dokuments an. Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist erforderlich in Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} analysiert werden, und optional in text/html-Dokumenten.

## Barrierefreiheit

Auch wenn HTML von Autoren nicht verlangt, die Start- und Endtags des `<html>`-Elements anzugeben, ist es wichtig, dass Autoren dies tun, da es ihnen ermöglicht, das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für die Webseite zu spezifizieren. Das Bereitstellen eines `lang`-Attributs mit einem gültigen {{Glossary("BCP_47_language_tag", "BCP 47-Sprachentag")}} auf dem `<html>`-Element hilft Bildschirmlesetechnologien, die richtige Sprache anzusagen. Der identifizierende Sprachentag sollte die Sprache beschreiben, die von der Mehrheit des Inhalts der Seite verwendet wird. Ohne ihn wird von Bildschirmlesern typischerweise die Sprache des Betriebssystems als Standard verwendet, was zu Fehlinterpretationen führen kann.

Das Einfügen einer gültigen `lang`-Deklaration auf dem `<html>`-Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angesagt werden.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 3.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis des Erfolgs-Kriteriums 3.1.1 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
      <th scope="row">Tag-Weglassung</th>
      <td>
        Der Start-Tag kann weggelassen werden, wenn das erste Element im
        <code>&#x3C;html></code> Element kein Kommentar ist.<br>Der End-Tag
        kann weggelassen werden, wenn das <code>&#x3C;html></code> Element
        nicht unmittelbar von einem Kommentar gefolgt wird.
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

- MathML-Spitzen-Ebenelement: {{MathMLElement("math")}}
- SVG-Spitzen-Ebenelement: {{SVGElement("svg")}}
