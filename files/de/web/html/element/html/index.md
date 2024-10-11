---
title: "<html>: Das HTML-Dokument / Root-Element"
slug: Web/HTML/Element/html
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

Das **`<html>`** [HTML](/de/docs/Web/HTML) Element repräsentiert die Wurzel (das oberste Element) eines HTML-Dokuments, daher wird es auch als _Wurzelelement_ bezeichnet. Alle anderen Elemente müssen Nachfahren dieses Elements sein. Es kann nur ein `<html>` Element in einem Dokument geben.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `version` {{deprecated_inline}}
  - : Gibt die Version der HTML {{Glossary("Doctype", "Dokumententyp-Definition")}} an, die das aktuelle Dokument bestimmt. Dieses Attribut ist nicht erforderlich, da es redundant mit den Versionsinformationen in der Dokumenttyp-Deklaration ist.
- `xmlns`
  - : Gibt den {{Glossary("XML", "XML")}} {{Glossary("Namespace", "Namespace")}} des Dokuments an. Der Standardwert ist `"http://www.w3.org/1999/xhtml"`. Dies ist in Dokumenten, die mit XML-{{Glossary("parser", "Parsern")}} analysiert werden, erforderlich und optional in text/html-Dokumenten.

## Barrierefreiheit

Obwohl HTML von Autoren nicht verlangt, Start- und End-Tags des `<html>`-Elements zu spezifizieren, ist es wichtig, dass Autoren dies tun, da sie auf diese Weise die [`lang`](/de/docs/Web/HTML/Global_attributes/lang) für die Webseite angeben können. Das Bereitstellen eines `lang`-Attributes mit einem gültigen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} auf dem `<html>`-Element hilft Lesetechnologien dabei, die korrekte Sprache zu bestimmen, die angesagt werden soll. Das identifizierende Sprach-Tag sollte die Sprache beschreiben, die von der Mehrheit des Inhalts der Seite verwendet wird. Ohne dieses Tag werden Bildschirmleseprogramme normalerweise auf die in den Betriebssystemeinstellungen festgelegte Sprache zurückgreifen, was zu fehlerhaften Aussprachen führen kann.

Die Angabe einer gültigen `lang`-Deklaration auf dem `<html>`-Element stellt auch sicher, dass wichtige Metadaten, die im {{HTMLElement("head")}} der Seite enthalten sind, wie der {{HTMLElement("title")}} der Seite, ebenfalls korrekt angesagt werden.

- [MDN Verständnis der WCAG, Richtlinie 3.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Verständnis des Erfolgskriteriums 3.1.1 | W3C Verständnis der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

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
      <th scope="row">Weglassen der Tags</th>
      <td>
        Das Start-Tag kann weggelassen werden, wenn das erste Element innerhalb
        des <code>&#x3C;html></code>-Elements kein Kommentar ist.<br>Das
        End-Tag kann weggelassen werden, wenn das <code>&#x3C;html></code>-Element
        nicht unmittelbar von einem Kommentar gefolgt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Keine. Dies ist das Wurzelelement eines Dokuments.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- MathML Top-Level-Element: {{MathMLElement("math")}}
- SVG Top-Level-Element: {{SVGElement("svg")}}
