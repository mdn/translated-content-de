---
title: "<embed>: Das Element für das Einbetten externer Inhalte"
slug: Web/HTML/Element/embed
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<embed>`** [HTML](/de/docs/Web/HTML)-Element bettet externe Inhalte an der angegebenen Stelle im Dokument ein. Dieser Inhalt wird von einer externen Anwendung oder einer anderen Quelle interaktiver Inhalte wie einem Browser-Plug-in bereitgestellt.

{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}

> [!NOTE]
> Dieses Thema dokumentiert nur das Element, das als Teil des [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element) definiert ist. Es behandelt nicht frühere, nicht standardisierte Implementierungen des Elements.

Beachten Sie, dass die meisten modernen Browser die Unterstützung für Browser-Plug-ins abgelehnt und entfernt haben, sodass die Verwendung von `<embed>` im Allgemeinen nicht ratsam ist, wenn Ihre Webseite im durchschnittlichen Browser eines Benutzers funktionieren soll.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `height`
  - : Die angezeigte Höhe der Ressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.
- `src`
  - : Die URL der eingebetteten Ressource.
- `type`
  - : Der [MIME-Typ](/de/docs/Glossary/MIME_type), der verwendet wird, um das zu instanziierende Plug-in auszuwählen.
- `width`
  - : Die angezeigte Breite der Ressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). Dies muss ein absoluter Wert sein; Prozentsätze sind _nicht_ erlaubt.

## Verwendungshinweise

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Position des eingebetteten Objekts innerhalb des Rahmens des Elements anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<embed>`-Elemente.

## Barrierefreiheit

Verwenden Sie das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `embed`-Element, um dessen Inhalt zu benennen, damit Personen, die mit unterstützender Technologie wie einem Screenreader navigieren, verstehen können, was es enthält. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben. Ohne einen Titel könnten sie möglicherweise nicht bestimmen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere wenn das `embed`-Element interaktive Inhalte wie Video oder Audio enthält.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>, eingebetteter Inhalt, interaktiver Inhalt,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Fehler</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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

- Andere Elemente, die zum Einbetten von Inhalten verschiedener Typen verwendet werden, sind {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} und {{HTMLElement("video")}}.
- Positionierung und Größenanpassung des eingebetteten Inhalts innerhalb seines Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}.
