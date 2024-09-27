---
title: "<hr>: Das Thematic Break (Horizontal Rule) Element"
slug: Web/HTML/Element/hr
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{HTMLSidebar}}

Das **`<hr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen thematischen Bruch zwischen Paragraphen-Elementen: zum Beispiel ein Szenenwechsel in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Historisch wurde dies als horizontale Linie dargestellt. Während es in visuellen Browsern weiterhin als horizontale Linie angezeigt werden kann, ist dieses Element nun in semantischen Begriffen definiert und nicht mehr in Präsentationsbegriffen. Wenn Sie also eine horizontale Linie zeichnen möchten, sollten Sie dies mit angemessenem CSS tun.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Ausrichtung der Linie auf der Seite fest. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Farbe der Linie durch Farbnamen oder einen hexadezimalen Wert.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Linie auf keine Schattierung.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt die Höhe der Linie in Pixeln.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Länge der Linie auf der Seite durch einen Pixel- oder Prozentwert fest.

## Beispiel

### HTML

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>

<hr />

<p>
  This is the second paragraph of text. This is the second paragraph of text.
  This is the second paragraph of text. This is the second paragraph of text.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example")}}

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
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [Leerelement](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert</li>
          <li><a href="/de/docs/Web/HTML/Element/select"><code>&lt;select></code></a> Element</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLHRElement`](/de/docs/Web/API/HTMLHRElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement('p')}}
- [`<hr>` in `<select>`](/de/docs/Web/HTML/Element/select#select_with_grouping_options)
