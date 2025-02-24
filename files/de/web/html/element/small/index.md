---
title: "<small>: das Side-Comment-Element"
slug: Web/HTML/Element/small
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<small>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Randbemerkungen und Kleingedrucktes, wie Urheberrechts- und Rechtstexte, unabhängig von ihrer stilisierten Darstellung. Standardmäßig wird der Text innerhalb des Elements eine Schriftgröße kleiner angezeigt, z. B. von `small` zu `x-small`.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

### Grundlegende Nutzung

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

## Anmerkungen

Obwohl das `<small>`-Element, wie die Elemente {{htmlelement("b")}} und {{htmlelement("i")}}, möglicherweise als Verletzung des Prinzips der Trennung zwischen Struktur und Präsentation wahrgenommen wird, sind alle drei im HTML gültig. Autoren werden ermutigt, ihr bestes Urteilsvermögen zu nutzen, um zu bestimmen, ob `<small>` oder CSS verwendet werden soll.

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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; muss sowohl ein Start- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließ-Inhalt</a
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
- HTML 4.01-Spezifikation: [Schriftstile](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
