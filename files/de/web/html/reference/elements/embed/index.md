---
title: "`<embed>` HTML-Element zum Einbetten externer Inhalte"
short-title: <embed>
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 456c370394c0cd8869feb60c4e9926f35422beaf
---

Das [HTML](/de/docs/Web/HTML)-Element **`<embed>`** bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Diese Inhalte werden vom Browser oder einer externen Anwendung verarbeitet.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="image/jpeg"
  src="/shared-assets/images/examples/flowers.jpg"
  width="250"
  height="200" />
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentangaben sind _nicht_ zulässig.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}} der eingebetteten Ressource.
- `width`
  - : Die angezeigte Breite der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentangaben sind _nicht_ zulässig.

## Hinweise zur Verwendung

Moderne Browser unterstützen keine Browser-Plug-ins wie Flash mehr, aber `<embed>` kann weiterhin Inhalte anzeigen, die vom Browser selbst verarbeitet werden, beispielsweise PDFs in einem integrierten PDF-Viewer.

Für PDF-Vorschauen sollten Sie {{HTMLElement("object")}} oder {{HTMLElement("iframe")}} in Betracht ziehen. Im Gegensatz zu `<object>` kann `<embed>` keine Fallback-Inhalte enthalten. Im Gegensatz zu `<iframe>` verfügt es über keine Attribute zur Steuerung des Ladens.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des eingebetteten Objekts innerhalb des Rahmens des Elements anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) für ein `embed`-Element, um dessen Inhalt zu beschriften, damit Personen, die mit assistiven Technologien wie einem Screenreader navigieren, verstehen können, was es enthält. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben. Ohne einen Titel können sie möglicherweise nicht feststellen, worum es sich bei den eingebetteten Inhalten handelt. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

## Beispiele

```html
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
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
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Elemente zum Einbetten von Inhalten verschiedener Typen sind {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung des eingebetteten Inhalts innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
