---
title: "`<object>`-HTML-Element für externe Objekte"
short-title: <object>
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: 456c370394c0cd8869feb60c4e9926f35422beaf
---

Das [HTML](/de/docs/Web/HTML)-Element **`<object>`** repräsentiert eine externe Ressource, die als Bild, verschachtelter Browsing-Kontext oder von einem Plugin zu verarbeitende Ressource behandelt werden kann.

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
  - : Die Breite eines Rahmens um das Steuerelement in Pixeln.
- `classid` {{deprecated_inline}}
  - : Die URI der Implementierung des Objekts. Sie kann zusammen mit oder anstelle des Attributs **data** verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basispfad, der zum Auflösen relativer URIs verwendet wird, die durch **classid**, **data** oder **archive** angegeben werden. Wenn nicht angegeben, ist die Basis-URI des aktuellen Dokuments der Standardwert.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der durch **classid** angegebenen Daten.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eines von **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Das Vorhandensein dieses booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig, jedes Mal wenn die Ressource erneut verwendet wird.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das Formularelement, falls vorhanden, mit dem das Objektelement verknüpft ist (sein _form owner_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, als {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- `name`
  - : Der Name eines gültigen Browsing-Kontexts (HTML5) oder der Name des Steuerelements (HTML 4). Der Name wird zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window) und [`Document`](/de/docs/Web/API/Document), die eine Referenz auf das eingebettete Fenster oder das Element selbst enthält.
- `standby` {{deprecated_inline}}
  - : Eine Meldung, die der Browser während des Ladens der Implementierung und Daten des Objekts anzeigen kann.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der durch **data** angegebenen Ressource. Mindestens eines von **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Eine Hash-Namensreferenz auf ein {{HTMLElement("map")}}-Element; das heißt ein `#`, gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) eines Map-Elements.
- `width`
  - : Die Breite der angezeigten Ressource, als {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.

## Hinweise zur Verwendung

Das `<object>`-Element kann PDFs mithilfe des integrierten PDF-Viewers des Browsers anzeigen. Seine Kindelemente stellen Fallback-Inhalte bereit, wenn die Ressource nicht angezeigt werden kann. Sie können dies verwenden, um einen Link zum PDF bereitzustellen, sollten jedoch auch außerhalb des Elements einen Link bereitstellen, damit dieser verfügbar bleibt, wenn der Viewer geladen wird, das PDF jedoch nicht anzeigen kann.

Im Gegensatz zu {{HTMLElement("iframe")}} verfügt `<object>` über keine Attribute zur Steuerung des Ladens. Die Content Security Policy der einbettenden Seite steuert ihre Quellen über {{CSP("object-src")}}.

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

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Das Tag {{HTMLElement("img")}} wird verwendet, um ein Bild anzuzeigen. Wir fügen das Attribut `src` hinzu, das auf den Pfad zu dem Bild gesetzt ist, das wir einbetten möchten. Außerdem fügen wir das Attribut `alt` hinzu, das dem Bild einen zugänglichen Namen gibt. Wenn auch das Bild nicht geladen werden kann, wird der Inhalt des Attributs `alt` angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, wahrnehmbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">übermittelbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">formularassoziiertes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        null oder mehr {{HTMLElement("param")}}-Elemente, anschließend
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
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
