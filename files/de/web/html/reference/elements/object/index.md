---
title: "<object>: Das externe Objektelelement"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<object>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, eingebetteter Browserkontext oder als Ressource behandelt werden kann, die von einem Plugin verarbeitet wird.

{{InteractiveExample("HTML Demo: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive von Ressourcen für das Objekt.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um die Steuerung, in Pixeln.
- `classid` {{deprecated_inline}}
  - : Die URI der Implementierung des Objekts. Kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad, der verwendet wird, um relative URIs aufzulösen, die durch **classid**, **data** oder **archive** angegeben sind. Wenn nicht angegeben, ist die Standardangabe die Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der durch **classid** angegebenen Daten.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens einer der beiden Attribute **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Die Anwesenheit dieses Boolean-Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig bei jeder Wiederverwendung der Ressource.
- `form`
  - : Das Formular-Element, mit dem das Objektelelement, falls vorhanden, assoziiert ist (sein _Formularbesitzer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im gleichen Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixel")}}.
- `name`
  - : Der Name eines gültigen Browserkontextes (HTML5) oder der Name der Steuerung (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser während des Ladevorgangs der Implementierung und der Daten des Objekts anzeigen kann.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der durch **data** spezifizierten Ressource. Mindestens einer der beiden Attribute **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Namen-Verweis auf ein {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name)-Attributs eines Map-Elements.
- `width`
  - : Die Breite der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixel")}}.

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

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt zur Verfügung gestellt. Das {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut ein, das auf den Pfad des einzubettenden Bildes gesetzt wird. Wir fügen auch das `alt`-Attribut ein, das dem Bild einen zugänglichen Namen gibt. Wenn das Bild ebenfalls nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, greifbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">überreicherbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">formularverbundenes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        null oder mehr {{HTMLElement("param")}}-Elemente, dann
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteten Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
