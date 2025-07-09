---
title: "<embed>: Das Element zum Einbetten externer Inhalte"
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<embed>`** [HTML](/de/docs/Web/HTML)-Element bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Diese Inhalte werden von einer externen Anwendung oder einer anderen Quelle für interaktive Inhalte wie einem Browser-Plug-in bereitgestellt.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

> [!NOTE]
> Dieses Thema dokumentiert nur das Element, das im Rahmen des [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) definiert ist. Es bezieht sich nicht auf frühere, nicht standardisierte Implementierungen des Elements.

Beachten Sie, dass die meisten modernen Browser die Unterstützung von Browser-Plug-ins abgeschafft und entfernt haben. Wenn Sie möchten, dass Ihre Website im Durchschnittsbrowser eines Benutzers funktioniert, ist es im Allgemeinen nicht ratsam, sich auf `<embed>` zu verlassen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentwerte sind _nicht_ erlaubt.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der zu verwendende {{Glossary("MIME_type", "MIME-Typ")}}, um das zu instanziierende Plug-in auszuwählen.
- `width`
  - : Die angezeigte Breite der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentwerte sind _nicht_ erlaubt.

## Verwendungshinweise

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um die Positionierung des eingebetteten Objekts innerhalb des Rahmen des Elements anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkung auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) bei einem `embed`-Element, um dessen Inhalt zu kennzeichnen, damit Personen, die mit assistiver Technologie wie einem Bildschirmleser navigieren, verstehen können, was es enthält. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben. Ohne einen Titel könnten sie möglicherweise nicht feststellen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >greifbarer Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
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

- Andere Elemente, die zum Einbetten verschiedener Inhaltstypen verwendet werden, sind {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung der eingebetteten Inhalte innerhalb ihres Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
