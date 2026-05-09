---
title: "`<html>` HTML-Dokumentwurzelelement"
short-title: <html>
slug: Web/HTML/Reference/Elements/html
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

Das **`<html>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert die Wurzel (oberstes Element) eines HTML-Dokuments und wird daher auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachfahren dieses Elements sein. Es kann nur ein `<html>`-Element in einem Dokument geben.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML-{{Glossary("Doctype", "Dokumenttyp-Definition")}} an, die das aktuelle Dokument bestimmt. Dieses Attribut ist nicht erforderlich, da es redundant mit den Versionsinformationen in der Dokumenttyp-Deklaration ist.
- `xmlns` {{non-standard_inline}}
  - : Gibt den {{Glossary("XML", "XML")}}-{{Glossary("Namespace", "Namensraum")}} des Dokuments an. Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten erforderlich, die mit XML-{{Glossary("parser", "Parsern")}} analysiert werden, und optional in text/html-Dokumenten.

## Barrierefreiheit

Obwohl HTML von Autoren nicht verlangt, `Start`- und `End`-Tags für das `<html>`-Element anzugeben, ist es wichtig, dass Autoren dies tun, da sie damit das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) für die Webseite angeben können. Das Bereitstellen eines `lang`-Attributs mit einem gültigen {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} im `<html>`-Element hilft der Bildschirmlesetechnologie, die richtige Sprache anzukündigen. Der identifizierende Sprach-Tag sollte die Sprache beschreiben, die von der Mehrheit des Inhalts der Seite verwendet wird. Ohne ihn werden Bildschirmleser typischerweise auf die im Betriebssystem eingestellte Sprache zurückgreifen, was zu Fehlinterpretationen führen kann.

Das Einfügen einer gültigen `lang`-Deklaration im `<html>`-Element stellt außerdem sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angekündigt werden.

- [MDN Verständnis WCAG, Richtlinie 3.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verstehen des Erfolgskriteriums 3.1.1 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        Ein {{HTMLElement("head")}}-Element, gefolgt von einem {{HTMLElement("body")}}-Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb des <code>&#x3C;html></code>-Elements kein Kommentar ist.<br>Das End-Tag kann weggelassen werden, wenn das <code>&#x3C;html></code>-Element nicht unmittelbar von einem Kommentar gefolgt wird.
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

- MathML Wurzelelement: {{MathMLElement("math")}}
- SVG Wurzelelement: {{SVGElement("svg")}}
