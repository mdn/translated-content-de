---
title: "<object>: Das External Object-Element"
slug: Web/HTML/Element/object
l10n:
  sourceCommit: a7328921d1c12a908c631580286c39595e4e7125
---

{{HTMLSidebar}}

Das **`<object>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine externe Ressource, die als Bild, eingebetteter Browsing-Kontext oder als von einem Plugin zu behandelnde Ressource behandelt werden kann.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `archive` {{deprecated_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URIs für Archive von Ressourcen für das Objekt.
- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Steuerungselement, in Pixeln.
- `classid` {{deprecated_inline}}
  - : Der URI der Implementierung des Objekts. Kann zusammen mit oder anstelle des **data**-Attributs verwendet werden.
- `codebase` {{deprecated_inline}}
  - : Der Basis-Pfad, der zum Auflösen relativer URIs verwendet wird, die durch **classid**, **data** oder **archive** angegeben sind. Wenn nicht angegeben, ist der Standard der Basis-URI des aktuellen Dokuments.
- `codetype` {{deprecated_inline}}
  - : Der Inhaltstyp der durch **classid** angegebenen Daten.
- `data`
  - : Die Adresse der Ressource als gültige URL. Mindestens eines von **data** und **type** muss definiert sein.
- `declare` {{deprecated_inline}}
  - : Das Vorhandensein dieses booleschen Attributs macht dieses Element nur zu einer Deklaration. Das Objekt muss durch ein nachfolgendes `<object>`-Element instanziiert werden. Wiederholen Sie das `<object>`-Element vollständig, jedes Mal, wenn die Ressource wiederverwendet wird.
- `form`
  - : Das Formularelement, falls vorhanden, mit dem das Objekttag verbunden ist (dessen _Formular-Eigentümer_). Der Wert des Attributs muss eine ID eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
- `height`
  - : Die Höhe der angezeigten Ressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [Keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- `name`
  - : Der Name eines gültigen Browsing-Kontexts (HTML5) oder der Name des Steuerungselements (HTML 4).
- `standby` {{deprecated_inline}}
  - : Eine Nachricht, die der Browser beim Laden der Implementierung und der Daten des Objekts anzeigen kann.
- `type`
  - : Der {{Glossary("MIME_type", "Inhaltstyp")}} der durch **data** angegebenen Ressource. Mindestens eines von **data** und **type** muss definiert sein.
- `usemap` {{deprecated_inline}}
  - : Eine Hash-Name-Referenz zu einem {{HTMLElement("map")}}-Element; das ist ein '#' gefolgt vom Wert eines [`name`](/de/docs/Web/HTML/Element/map#name) eines Karten-Elements.
- `width`
  - : Die Breite der Anzeigeressource, in [CSS-Pixeln](https://drafts.csswg.org/css-values/#px). — (Nur absolute Werte. [Keine Prozentsätze](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

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

Wenn das Video im Beispiel nicht geladen werden kann, wird dem Benutzer ein Bild als Fallback-Inhalt bereitgestellt. Der {{HTMLElement("img")}}-Tag wird verwendet, um ein Bild anzuzeigen. Wir fügen das `src`-Attribut hinzu, das auf den Pfad zu dem Bild gesetzt wird, das wir einbetten möchten. Wir fügen auch das `alt`-Attribut hinzu, das dem Bild einen zugänglichen Namen bereitstellt. Wenn das Bild auch nicht geladen werden kann, wird der Inhalt des `alt`-Attributs angezeigt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content">Eingebetteter Inhalt</a>, fühlbarer Inhalt; wenn das Element ein
        <a href="#usemap"><code>usemap</code></a>-Attribut hat, <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>;
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">aufgelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">absendbar</a>
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formularbezogenes</a> Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Null oder mehr {{HTMLElement("param")}}-Elemente, dann
        <a href="/de/docs/Web/HTML/Content_categories#transparent_content_model">durchsichtig</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
