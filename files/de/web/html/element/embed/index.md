---
title: "<embed>: Das Embed External Content Element"
slug: Web/HTML/Element/embed
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<embed>`** [HTML](/de/docs/Web/HTML)-Element bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Diese Inhalte werden von einer externen Anwendung oder einer anderen Quelle für interaktive Inhalte wie ein Browser-Plug-in bereitgestellt.

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

Beachten Sie, dass die meisten modernen Browser die Unterstützung für Browser-Plug-ins eingestellt und entfernt haben, sodass die Verwendung von `<embed>` im Allgemeinen nicht ratsam ist, wenn Sie möchten, dass Ihre Website im Browser des durchschnittlichen Benutzers funktionsfähig ist.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der {{Glossary("MIME_type", "MIME-Typ")}}, der verwendet wird, um das zu instanziierende Plug-in auszuwählen.
- `width`
  - : Die angezeigte Breite der Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.

## Nutzungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des eingebetteten Objekts innerhalb des Rahmens des Elements anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) bei einem `embed`-Element, um dessen Inhalt so zu kennzeichnen, dass Personen mit Hilfstechnologien wie einem Screenreader verstehen können, was es enthält. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben. Ohne einen Titel könnten sie möglicherweise nicht feststellen, was das eingebettete Inhalt darstellt. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, eingebetteter Inhalt, interaktiver Inhalt,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
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
      <th scope="row">Erlaubte Elternelemente</th>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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

- Andere Elemente, die zum Einbetten von Inhalten verschiedener Typen verwendet werden, umfassen {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung der eingebetteten Inhalte innerhalb ihres Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
