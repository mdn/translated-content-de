---
title: "<object>: Das externe Objektelement"
slug: Web/HTML/Element/object
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<object>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, als verschachtelter Browsing-Kontext oder als eine Ressource behandelt werden kann, die von einem Plugin verarbeitet werden soll.

{{InteractiveExample("HTML Demo: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive von Ressourcen für das Objekt.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um die Steuerung, in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Er kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basisweg, der verwendet wird, um relative URIs aufzulösen, die durch **classid**, **data** oder **archive** spezifiziert sind. Wird er nicht angegeben, ist der Standard der Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der Daten, die durch **classid** spezifiziert sind.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Die Anwesenheit dieses Booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig jedes Mal, wenn die Ressource erneut verwendet wird.
- `form`
  - : Das Formular-Element, falls vorhanden, mit dem das Objektelelement verknüpft ist (sein _Formularbesitzer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- `name`
  - : Der Name eines gültigen Browsing-Kontextes (HTML5) oder der Name der Steuerung (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser anzeigen kann, während die Implementierung und die Daten des Objekts geladen werden.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der Ressource, die durch **data** spezifiziert ist. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Referenzname auf ein {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Element/map#name) eines Map-Elements.
- `width`
  - : Die Breite der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.

## Beispiele

### Ein Video einbetten

#### HTML

```html
<object
  type="video/webm"
  data="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
  width="600"
  height="140">
  <img src="path/image.jpg" alt="useful image description" />
</object>
```

#### Ergebnis

{{EmbedLiveSample("Embed a video")}}

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Der {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild darzustellen. Wir fügen das `src`-Attribut mit dem Pfad zu dem einzubettenden Bild hinzu. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Falls das Bild ebenfalls nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content">Eingebetteter Inhalt</a>, greifbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">übermittelbar</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularassoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        null oder mehr {{HTMLElement("param")}}-Elemente, dann
        <a href="/de/docs/Web/HTML/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#embedded_content">eingebetteten Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
