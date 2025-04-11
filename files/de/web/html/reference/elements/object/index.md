---
title: "<object>: Das Externe Objekt-Element"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<object>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, verschachtelter Browsing-Kontext oder Ressource behandelt werden kann, die von einem Plugin bearbeitet wird.

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
  - : Die Breite eines Rahmens um das Steuerungselement in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Es kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad, der zur Auflösung relativer URIs verwendet wird, die von **classid**, **data** oder **archive** angegeben werden. Wenn nicht angegeben, ist der Standard der Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der Daten, der von **classid** angegeben wird.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eine der Eigenschaften **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Die Anwesenheit dieses Booleschen Attributs macht dieses Element zu einer reinen Erklärung. Das Objekt muss von einem nachfolgenden `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig jedes Mal, wenn die Ressource wiederverwendet wird.
- `form`
  - : Das Formular-Element, falls vorhanden, mit dem das Objekt-Element assoziiert ist (sein _form owner_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- `name`
  - : Der Name eines gültigen Browsing-Kontextes (HTML5) oder der Name des Steuerungselements (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser anzeigen kann, während die Implementierung und die Daten des Objekts geladen werden.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der Ressource, die durch **data** angegeben wird. Mindestens eine der Eigenschaften **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Name-Verweis auf ein {{HTMLElement("map")}}-Element, also ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) eines Map-Elements.
- `width`
  - : Die Breite der angezeigten Ressource in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.

## Beispiele

### Einbetten eines Videos

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

Wenn das Video im Beispiel nicht geladen wird, wird dem Benutzer ein Bild als Fallback-Inhalt zur Verfügung gestellt. Der {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut hinzu, das auf den Pfad des einzubettenden Bildes gesetzt ist. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Wenn auch das Bild nicht geladen wird, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Ausdrucksinhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">Eingebetteter Inhalt</a>, konkreter Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">einreichbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">Formular-assoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("param")}}-Elemente, dann
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
