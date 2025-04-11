---
title: "<embed>: Das Element zum Einbetten externer Inhalte"
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<embed>`** [HTML](/de/docs/Web/HTML)-Element bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Diese Inhalte werden von einer externen Anwendung oder einer anderen Quelle interaktiver Inhalte wie einem Browser-Plugin bereitgestellt.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

> [!NOTE]
> Dieses Thema dokumentiert nur das Element, das als Teil des [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) definiert ist. Es behandelt nicht frühere, nicht standardisierte Implementierungen des Elements.

Beachten Sie, dass die meisten modernen Browser die Unterstützung für Browser-Plugins eingestellt und entfernt haben. Daher ist es im Allgemeinen nicht ratsam, sich auf `<embed>` zu verlassen, wenn Ihre Website auf dem durchschnittlichen Benutzerbrowser funktionieren soll.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentwerte sind _nicht_ erlaubt.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}}, der verwendet wird, um das zu instanzierende Plugin auszuwählen.
- `width`
  - : Die angezeigte Breite der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentwerte sind _nicht_ erlaubt.

## Nutzungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des eingebetteten Objekts innerhalb des Rahmens des Elements anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkung auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) in einem `embed`-Element, um dessen Inhalt zu kennzeichnen, damit Personen, die assistive Technologien wie einen Screenreader nutzen, verstehen können, was es enthält. Der Titelwert sollte den eingebetteten Inhalt kurz beschreiben. Ohne einen Titel könnten sie möglicherweise nicht feststellen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann besonders verwirrend und zeitaufwändig sein, wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, eingebettete Inhalte, interaktive Inhalte,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbare Inhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
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

- Andere Elemente, die zum Einbetten von Inhalten verschiedener Typen verwendet werden, umfassen {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung des eingebetteten Inhalts innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
