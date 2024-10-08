---
title: "<small>: das Seitenskommentarelement"
slug: Web/HTML/Element/small
l10n:
  sourceCommit: 533dc583856cfc95c1b9129335cd24793eac1093
---

{{HTMLSidebar}}

Das **`<small>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Seitenskommentare und Kleingedrucktes, wie Urheberrechts- und Rechtstexte, unabhängig von der dargestellten Formatierung. Standardmäßig rendert es den Text darin eine Schriftgröße kleiner, z. B. von `small` zu `x-small`.

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Grundlegende Verwendung

```html
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_usage")}}

### CSS-Alternative

```html
<p>
  This is the first sentence.
  <span style="font-size:0.8em">This whole sentence is in small letters.</span>
</p>
```

#### Ergebnis

{{EmbedLiveSample("CSS_alternative")}}

## Hinweise

Obwohl das `<small>`-Element, ähnlich wie die {{htmlelement("b")}}- und {{htmlelement("i")}}-Elemente, möglicherweise das Prinzip der Trennung von Struktur und Darstellung verletzt, sind alle drei in HTML gültig. Autoren werden ermutigt, ihr bestes Urteilsvermögen anzuwenden, wenn sie entscheiden, ob sie `<small>` oder CSS verwenden.

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
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl einen Start- als auch einen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("b")}}
- {{HTMLElement("sub")}} und {{HTMLElement("sup")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}
- HTML 4.01 Spezifikation: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
