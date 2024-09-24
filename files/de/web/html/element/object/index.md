---
title: "<object>: Das Externe Objekt-Element"
slug: Web/HTML/Element/object
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{HTMLSidebar}}

Das **`<object>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine externe Ressource, die als Bild, ein verschachtelter Browsing-Kontext oder eine Ressource behandelt werden kann, die von einem Plugin verarbeitet wird.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive der Ressourcen des Objekts.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um die Steuerung in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Es kann zusammen mit dem **data**-Attribut verwendet werden oder es ersetzen.
- `codebase` {{deprecated_inline}}
  - : Der Basispfad, der zur Auflösung relativer URIs verwendet wird, die durch **classid**, **data** oder **archive** angegeben werden. Wenn nicht angegeben, ist die Standardeinstellung der Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der durch **classid** angegebenen Daten.
- `data`
  - : Die Adresse der Ressource als gültige URL. Es muss mindestens eines der Attribute **data** und **type** definiert sein.
- `declare` {{deprecated_inline}}
  - : Das Vorhandensein dieses booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss von einem nachfolgenden `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig jedes Mal, wenn die Ressource erneut verwendet wird.
- `form`
  - : Das Formularelement, sofern vorhanden, mit dem das Objektelelement verknüpft ist (sein _Formularbesitzer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [KEINE Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- `name`
  - : Der Name eines gültigen Browsing-Kontexts (HTML5) oder der Name der Steuerung (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser anzeigen kann, während die Implementierung und Daten des Objekts geladen werden.
- `type`
  - : Der [Inhaltstyp](/de/docs/Glossary/MIME_type) der durch **data** angegebenen Ressource. Es muss mindestens eines der Attribute **data** und **type** definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Name-Verweis auf ein {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Element/map#name) eines Karten-Elements.
- `width`
  - : Die Breite der angezeigten Ressource in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [KEINE Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

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

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Der {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut hinzu, das auf den Pfad zu dem Bild verweist, das wir einbetten möchten. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Wenn das Bild ebenfalls nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasierender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content">eingebetteter Inhalt</a>, fassbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">einreichbar</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularassoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        null oder mehr {{HTMLElement("param")}} Elemente, dann
        <a href="/de/docs/Web/HTML/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#embedded_content">eingebetteten Inhalt</a> akzeptiert.
      </td>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
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
