---
title: "<small>: Das Side-Comment-Element"
slug: Web/HTML/Reference/Elements/small
l10n:
  sourceCommit: 5698ba3454ba5f45e90562ba5df3865bf4f2ff94
---

{{HTMLSidebar}}

Das **`<small>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Nebenkommentare und Kleingedrucktes, wie z. B. Urheberrechts- und rechtliche Texte, unabhängig von seiner gestylten Darstellung. Standardmäßig rendert es den Text innerhalb des Elements in einer Schriftgröße kleiner, wie von `small` zu `x-small`.

{{InteractiveExample("HTML Demo: &lt;small&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  MDN Web Docs is a learning platform for Web technologies and the software that
  powers the Web.
</p>

<hr />

<p>
  <small
    >The content is licensed under a Creative Commons Attribution-ShareAlike 2.5
    Generic License.</small
  >
</p>
```

```css interactive-example
small {
  font-size: 0.7em;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

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
  <span class="small">This whole sentence is in small letters.</span>
</p>
```

```css
.small {
  font-size: 0.8em;
}
```

#### Ergebnis

{{EmbedLiveSample("CSS_alternative")}}

## Hinweise

Obwohl das `<small>`-Element, ähnlich wie die {{htmlelement("b")}}- und {{htmlelement("i")}}-Elemente, möglicherweise als Verletzung des Prinzips der Trennung zwischen Struktur und Präsentation wahrgenommen wird, sind alle drei in HTML gültig. Autoren werden ermutigt, ihr bestes Urteil anzuwenden, wenn sie entscheiden, ob sie `<small>` oder CSS verwenden.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl einen Start- als auch einen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
- HTML 4.01 Spezifikation: [Schriftstile](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
