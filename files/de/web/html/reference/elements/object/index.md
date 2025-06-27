---
title: "<object>: Das externe Objektelement"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: 41018309bf920684054c0c2d81d362365b543493
---

{{HTMLSidebar}}

Das **`<object>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, verschachtelter Browsing-Kontext oder als Ressource behandelt werden kann, die von einem Plugin verarbeitet wird.

{{InteractiveExample("HTML Demo: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive von Ressourcen für das Objekt.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Steuerelement, in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad, der verwendet wird, um relative URIs aufzulösen, die durch **classid**, **data** oder **archive** angegeben sind. Wenn nicht angegeben, ist der Standard die Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der Daten, die durch **classid** angegeben sind.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Das Vorhandensein dieses booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig, jedes Mal wenn die Ressource wiederverwendet wird.
- `form`
  - : Das Formularelement, falls vorhanden, dem das Objektelement zugewiesen ist (sein _Formularbesitzer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, ausgedrückt in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- `name`
  - : Der Name eines gültigen Browsing-Kontexts (HTML5) oder der Name des Steuerelements (HTML 4). Der Name wird zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window)- und [`Document`](/de/docs/Web/API/Document)-Objekte, die eine Referenz zum eingebetteten Fenster oder zu dem Element selbst enthalten.
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser während des Ladens der Implementierung und Daten des Objekts anzeigen kann.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der Ressource, die durch **data** angegeben ist. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Name-Referenz zu einem {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name)-Attributs eines Mapelements.
- `width`
  - : Die Breite der angezeigten Ressource, ausgedrückt in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.

## Beispiele

### Ein Video einbetten

#### HTML

```html
<object
  type="video/webm"
  data="/shared-assets/videos/flower.webm"
  width="600"
  height="140">
  <img src="path/image.jpg" alt="useful image description" />
</object>
```

#### Ergebnis

{{EmbedLiveSample("Embed a video")}}

Wenn das Video im Beispiel nicht geladen wird, erhält der Benutzer ein Bild als Fallback-Inhalt. Das {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut hinzu, das auf den Pfad des einzubettenden Bildes verweist. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Falls das Bild ebenfalls nicht geladen wird, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, greifbarer Inhalt; wenn das Element
        ein <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">einreichbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">Formular-assoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        null oder mehr {{HTMLElement("param")}}-Elemente, dann
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">transparenter</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteten Inhalt</a> akzeptiert.
      </td>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>
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
