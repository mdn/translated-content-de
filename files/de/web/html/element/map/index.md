---
title: "<map>: Das Image Map-Element"
slug: Web/HTML/Element/map
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<map>`** [HTML](/de/docs/Web/HTML)-Element wird zusammen mit {{HTMLElement("area")}}-Elementen verwendet, um eine Image Map (ein anklickbarer Linkbereich) zu definieren.

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `name`
  - : Das `name`-Attribut gibt der Karte einen Namen, sodass sie referenziert werden kann. Das Attribut muss vorhanden sein und einen nicht-leeren Wert ohne Leerzeichen enthalten. Der Wert des `name`-Attributs darf nicht gleich dem Wert des `name`-Attributs eines anderen `<map>`-Elements im selben Dokument sein. Wenn auch das [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut angegeben ist, müssen beide Attribute denselben Wert haben.

## Beispiele

### Image Map mit zwei Bereichen

Klicken Sie auf den linken Papagei für JavaScript oder auf den rechten Papagei für CSS.

#### HTML

```html
<!-- Photo by Juliana e Mariana Amorim on Unsplash -->
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  <area
    shape="circle"
    coords="275,75,75"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
</map>
<img
  usemap="#primary"
  src="parrots.jpg"
  alt="350 x 150 Bild von zwei Papageien" />
```

#### Ergebnis

{{ EmbedLiveSample('Image map with two areas', '', '250') }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
        >Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
        >Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
        >Phrasen-Inhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Jedes
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
        >transparentes</a>
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
        >Phrasen-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
        >Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
