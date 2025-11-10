---
title: "<small>: Das Side-Kommentar-Element"
slug: Web/HTML/Reference/Elements/small
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<small>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert Nebenbemerkungen und Kleindruck, wie Urheberrechts- und Rechtstexte, unabhängig von seiner gestylten Darstellung. Standardmäßig wird der Text darin eine Schriftgröße kleiner angezeigt, zum Beispiel von `small` zu `x-small`.

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

Obwohl das `<small>`-Element, wie die {{htmlelement("b")}}- und {{htmlelement("i")}}-Elemente, als Verletzung des Prinzips der Trennung von Struktur und Präsentation wahrgenommen werden könnte, sind alle drei in HTML gültig. Autoren sollten ihre beste Einschätzung verwenden, um zu entscheiden, ob sie `<small>` oder CSS verwenden.

## Technische Zusammenfassung

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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Ausdrucks-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Ausdrucks-Inhalt</a
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
          >Ausdrucks-Inhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließ-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
