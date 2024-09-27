---
title: "<map>: Das Image Map-Element"
slug: Web/HTML/Element/map
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<map>`** [HTML](/de/docs/Web/HTML)-Element wird zusammen mit {{HTMLElement("area")}}-Elementen verwendet, um eine Image Map (einen klickbaren Linkbereich) zu definieren.

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `name`
  - : Das `name`-Attribut verleiht der Karte einen Namen, sodass sie referenziert werden kann. Das Attribut muss vorhanden sein und einen nicht-leeren Wert ohne Leerzeichenzeichen enthalten. Der Wert des `name`-Attributs darf nicht dem Wert des `name`-Attributs eines anderen `<map>`-Elements im selben Dokument entsprechen. Wenn auch das [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut angegeben ist, müssen beide Attribute denselben Wert haben.

## Beispiele

### Image Map mit zwei Bereichen

Klicken Sie auf den linken Papagei für JavaScript oder den rechten Papagei für CSS.

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
  alt="350 x 150 picture of two parrots" />
```

#### Ergebnis

{{ EmbedLiveSample('Image map with two areas', '', '250') }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Jedes
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >transparent</a
        >
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement)</td>
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
