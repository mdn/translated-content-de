---
title: "<object>: Das External Object-Element"
slug: Web/HTML/Element/object
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

Das **`<object>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, eingebetteter Browsing-Kontext oder als Ressource, die von einem Plugin behandelt wird, betrachtet werden kann.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive der Ressourcen für das Objekt.
- `border` {{deprecated_inline}}
  - : Die Breite des Randes um das Steuerungselement, in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad, der zur Auflösung relativer URIs, die von **classid**, **data** oder **archive** angegeben werden, verwendet wird. Wenn nicht angegeben, ist der Standard der Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der Daten, die von **classid** angegeben werden.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Die Anwesenheit dieses Booleschen Attributs macht dieses Element zu einer reinen Deklaration. Das Objekt muss von einem nachfolgenden `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig jedes Mal, wenn die Ressource wiederverwendet wird.
- `form`
  - : Das Formular-Element, mit dem das Objekt-Element (sein _Formular-Eigentümer_) verbunden ist, falls vorhanden. Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [KEINE Prozentangaben](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- `name`
  - : Der Name eines gültigen Browsing-Kontextes (HTML5) oder der Name des Steuerelements (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser beim Laden der Implementierung und der Daten des Objekts anzeigen kann.
- `type`
  - : Der [Inhaltstyp](/de/docs/Glossary/MIME_type) der Ressource, die von **data** angegeben wird. Mindestens eines der Attribute **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Name-Verweis auf ein {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Element/map#name)-Attributs eines Karten-Elements.
- `width`
  - : Die Breite der angezeigten Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [KEINE Prozentangaben](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

## Beispiele

### Ein Video einbetten

#### HTML

```html
<object
  type="video/mp4"
  data="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
  width="600"
  height="140">
  <img src="path/image.jpg" alt="useful image description" />
</object>
```

#### Ergebnis

{{EmbedLiveSample("Embed a video")}}

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Das {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut hinzu, das auf den Pfad zu dem Bild verweist, das wir einbetten möchten. Wir fügen auch das `alt`-Attribut hinzu, welches dem Bild einen zugänglichen Namen gibt. Wenn auch das Bild nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content">eingebetteter Inhalt</a>, wahrnehmbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">aufgeführt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">übermittelbar</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularbezogenes</a> Element.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#embedded_content">eingebetteten Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
