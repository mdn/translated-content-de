---
title: "<object>: Das externe Objektelement"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<object>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, eingebetteter Browser-Kontext oder als eine von einem Plugin verarbeitete Ressource behandelt werden kann.

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
  - : Die Breite eines Rahmens um das Steuerelement in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad zum Auflösen relativer URIs, die von **classid**, **data** oder **archive** angegeben werden. Wenn nicht angegeben, ist der Standard die Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der Daten, die durch **classid** angegeben werden.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens **data** oder **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Das Vorhandensein dieses Boolean-Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Replizieren Sie das `<object>`-Element vollständig jedes Mal, wenn die Ressource erneut verwendet wird.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das Formularelement, falls vorhanden, mit dem das Objektelement assoziiert ist (sein _Formular-Eigentümer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixel")}}.
- `name`
  - : Der Name eines gültigen Browser-Kontexts (HTML5) oder der Name des Steuerelements (HTML 4). Der Name wird zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window)- und [`Document`](/de/docs/Web/API/Document)-Objekte und enthält eine Referenz auf das eingebettete Fenster oder das Element selbst.
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser beim Laden der Implementierung und der Daten des Objekts anzeigen kann.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der durch **data** angegebenen Ressource. Mindestens **data** oder **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Eine Hash-Name-Referenz zu einem {{HTMLElement("map")}}-Element; das ist ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) eines Map-Elements.
- `width`
  - : Die Breite der Anzeigeressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixel")}}.

## Beispiele

### Ein Video einbetten

#### HTML

```html
<object
  type="video/webm"
  data="/shared-assets/videos/flower.webm"
  width="600"
  height="140">
  <img
    src="/shared-assets/images/examples/flowers.jpg"
    alt="Some beautiful flowers" />
</object>
```

#### Ergebnis

{{EmbedLiveSample("Embed a video")}}

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt angeboten. Das {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut mit dem Pfad zu dem Bild ein, das wir einbetten möchten. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Wenn das Bild ebenfalls nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, greifbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktive Inhalte</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">einreichbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">form-assoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("param")}} Elemente, dann
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
