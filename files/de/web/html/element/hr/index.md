---
title: "<hr>: Das Thematische Unterbrechungselement (Horizontale Linie)"
slug: Web/HTML/Element/hr
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{HTMLSidebar}}

Das **`<hr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine thematische Unterbrechung zwischen Absatzelementen: zum Beispiel ein Szenenwechsel in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Historisch wurde dies als horizontale Linie dargestellt. Während es in visuellen Browsern noch als horizontale Linie angezeigt werden kann, wird dieses Element nun semantisch und nicht mehr präsentationstechnisch definiert. Wenn Sie also eine horizontale Linie zeichnen möchten, sollten Sie dies mit geeignetem CSS tun.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Ausrichtung der Linie auf der Seite fest. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Farbe der Linie durch Farbnamen oder hexadezimalen Wert fest.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Linie auf keine Schattierung.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Höhe der Linie in Pixeln fest.
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

## Technische Übersicht

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert</li>
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
