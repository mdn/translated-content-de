---
title: "<hr>: Das Thematische Trennelement (Horizontale Linie)"
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<hr>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen thematischen Bruch zwischen Elementen auf Absatzebene: zum Beispiel ein Szenenwechsel in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

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
  background: #fff;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

Historisch wurde dies als horizontale Linie oder Regel dargestellt. Während es in visuellen Browsern möglicherweise immer noch als horizontale Linie angezeigt wird, wird dieses Element jetzt in semantischen Begriffen definiert, anstatt in darstellenden Begriffen. Wenn Sie eine horizontale Linie zeichnen möchten, sollten Sie dies mit geeignetem CSS tun.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Ausrichtung der Linie auf der Seite fest. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Farbe der Linie durch Farbnamen oder hexadezimalen Wert fest.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt fest, dass die Linie keine Schattierung hat.
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
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert</li>
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
