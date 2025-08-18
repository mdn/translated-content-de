---
title: "<embed>: Das Element zur Einbettung externer Inhalte"
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 5dc9a1731aec0c04cebb4fdfa436b01cd30a20ae
---

Das **`<embed>`** [HTML](/de/docs/Web/HTML) Element bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Diese Inhalte werden von einer externen Anwendung oder anderen Quellen interaktiver Inhalte, wie einem Browser-Plug-in, bereitgestellt.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="image/jpeg"
  src="/shared-assets/images/examples/flowers.jpg"
  width="250"
  height="200" />
```

> [!NOTE]
> Dieses Thema dokumentiert nur das Element, das als Teil des [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) definiert ist. Es befasst sich nicht mit früheren, nicht standardisierten Implementierungen des Elements.

Beachten Sie, dass die meisten modernen Browser die Unterstützung für Browser-Plug-ins eingestellt und entfernt haben. Daher ist es im Allgemeinen nicht ratsam, sich auf `<embed>` zu verlassen, wenn Sie möchten, dass Ihre Website im Durchschnitts-Browser eines Benutzers funktionsfähig ist.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der zu verwendende {{Glossary("MIME_type", "MIME-Typ")}}, um das zu instanziierende Plug-in auszuwählen.
- `width`
  - : Die angezeigte Breite der Ressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.

## Hinweise zur Nutzung

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des eingebetteten Objekts innerhalb des Rahmens des Elements anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkungen auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `embed`-Element, um dessen Inhalt zu kennzeichnen, sodass Personen, die mit unterstützenden Technologien wie einem Bildschirmleser navigieren, verstehen können, was es enthält. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben. Ohne Titel könnten sie nicht in der Lage sein, den eingebetteten Inhalt zu bestimmen. Dieser Kontextwechsel kann verwirrend und zeitraubend sein, besonders wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierungstreuer Inhalt</a>, eingebetteter Inhalt, interaktiver Inhalt,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- Andere Elemente, die zum Einbetten von Inhalten verschiedener Arten verwendet werden, umfassen {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung des eingebetteten Inhalts innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
