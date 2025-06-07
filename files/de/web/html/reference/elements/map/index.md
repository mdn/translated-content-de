---
title: "<map>: Das Bild-Karten-Element"
slug: Web/HTML/Reference/Elements/map
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<map>`**-[HTML](/de/docs/Web/HTML)-Element wird zusammen mit {{HTMLElement("area")}}-Elementen verwendet, um eine Bildkarte (einen klickbaren Linkbereich) zu definieren.

{{InteractiveExample("HTML Demo: &lt;map&gt;", "tabbed-standard")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info2.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Das `name`-Attribut gibt der Karte einen Namen, sodass sie referenziert werden kann. Das Attribut muss vorhanden sein und einen nicht-leeren Wert ohne Leerzeichen enthalten. Der Wert des `name`-Attributs darf nicht gleich dem Wert des `name`-Attributs eines anderen `<map>`-Elements im selben Dokument sein. Wenn das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ebenfalls angegeben ist, müssen beide Attribute denselben Wert haben.

## Beispiele

### Bildkarte mit zwei Bereichen

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
  alt="350 x 150 picture of two parrots" />
```

#### Ergebnis

{{ EmbedLiveSample('Image map with two areas', '', '250') }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Satzinhalt</a>, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Jedes
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">transparentes</a>
        Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Satzinhalt</a>
        akzeptiert.
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
