---
title: "`<object>` HTML-Externobjekt-Element"
short-title: <object>
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<object>`**-Element repräsentiert eine externe Ressource, die als Bild, eingebetteter Browsing-Kontext oder als Ressource, die von einem Plugin verarbeitet werden kann, behandelt werden kann.

{{InteractiveExample("HTML Demo: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive der Ressourcen des Objekts.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um die Steuerung in Pixeln.
- `classid` {{deprecated_inline}}
  - : Die URI der Implementierung des Objekts. Sie kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basispfad, der verwendet wird, um relative URIs aufzulösen, die durch **classid**, **data** oder **archive** angegeben werden. Falls nicht angegeben, ist die Standard-Basis-URI das aktuelle Dokument.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der durch **classid** angegebenen Daten.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eine der Eigenschaften **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Die Anwesenheit dieses Booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Das `<object>`-Element muss jedes Mal vollständig wiederholt werden, wenn die Ressource erneut verwendet wird.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das Formelement, mit dem das Objektelement assoziiert ist (sein _Formbesitzer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- `name`
  - : Der Name eines gültigen Browsing-Kontextes (HTML5) oder der Name der Steuerung (HTML 4). Der Name wird eine Eigenschaft der [`Window`](/de/docs/Web/API/Window)- und [`Document`](/de/docs/Web/API/Document)-Objekte, die einen Verweis auf das eingebettete Fenster oder das Element selbst enthalten.
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser anzeigen kann, während die Implementierung und Daten des Objekts geladen werden.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der durch **data** angegebenen Ressource. Mindestens eine der Eigenschaften **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Ein Hash-Name-Referenz zu einem {{HTMLElement("map")}}-Element; das heißt ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) eines Map-Elements.
- `width`
  - : Die Breite der angezeigten Ressource, wie in {{cssxref("&lt;integer&gt;")}} in {{Glossary("CSS_pixel", "CSS-Pixel")}}.

## Beispiele

### Einbetten eines Videos

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

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Das {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das Attribut `src` hinzu, das auf den Pfad des einzubettenden Bildes gesetzt ist. Außerdem fügen wir das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen gibt. Wenn das Bild ebenfalls nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Strömungsinhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content">eingebetteter Inhalt</a>, fühlbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">einreichbar</a>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">form-assoziiertes</a> Element.
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
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
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
      <th scope="row">DOM-Interface</th>
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
