---
title: "<hr>: Das Element für thematische Unterbrechungen (Horizontale Linie)"
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<hr>`** [HTML](/de/docs/Web/HTML) Element stellt eine thematische Unterbrechung zwischen Elemente auf Absatzebene dar: zum Beispiel ein Szenenwechsel in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

{{InteractiveExample("HTML Demo: &lt;hr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr />

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

```css interactive-example
hr {
  border: none;
  border-top: 3px double #333;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr::after {
  background: white;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

Historisch wurde dies als eine horizontale Linie dargestellt. Während es in visuellen Browsern immer noch als horizontale Linie angezeigt werden kann, wird dieses Element jetzt in semantischen, anstatt in präsentativen Begriffen definiert. Wenn Sie also eine horizontale Linie zeichnen möchten, sollten Sie dies mit geeignetem CSS tun.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt die Ausrichtung der Linie auf der Seite. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Farbe der Linie mittels eines Farbnamen oder eines hexadezimalen Werts.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt, dass die Linie keinen Schatten haben soll.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt die Höhe der Linie in Pixeln.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt die Länge der Linie auf der Seite in Pixeln oder Prozentwerten.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließende Inhalte</a> akzeptiert</li>
          <li><a href="/de/docs/Web/HTML/Reference/Elements/select"><code>&lt;select></code></a> Element</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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
- [`<hr>` in `<select>`](/de/docs/Web/HTML/Reference/Elements/select#select_with_grouping_options)
