---
title: "<hr>: Das Thematische Trennelement (Horizontale Linie)"
slug: Web/HTML/Element/hr
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<hr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen thematischen Bruch zwischen Absatzelementen: zum Beispiel einen Szenenwechsel in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

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

Historisch wurde dies als horizontale Linie dargestellt. Während es in visuellen Browsern immer noch als horizontale Linie angezeigt werden kann, wird dieses Element jetzt in semantischen statt presentationalen Begriffen definiert. Wenn Sie eine horizontale Linie zeichnen möchten, sollten Sie dies mit entsprechendem CSS tun.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt die Ausrichtung der Linie auf der Seite. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Farbe der Linie durch Farbnamen oder hexadezimalen Wert.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Bestimmt, dass die Linie keine Schattierung hat.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Definiert die Höhe der Linie in Pixeln.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Länge der Linie auf der Seite durch einen Pixel- oder Prozentwert.

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
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
