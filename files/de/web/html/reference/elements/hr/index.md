---
title: "<hr>: Das thematische Trennelement (Horizontale Linie)"
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: 479f72f9279246685bcf6eec93527ac3f470f93e
---

Das **`<hr>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert einen thematischen Bruch zwischen Elemente auf Absatzebene: zum Beispiel ein Szenenwechsel in einer Erzählung oder ein Themenwechsel innerhalb eines Abschnitts.

{{InteractiveExample("HTML Demo: &lt;hr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr />

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

```css interactive-example
hr {
  border: none;
  border-top: 3px double #333333;
  color: #333333;
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

Historisch gesehen wurde das `<hr>`-Element immer als horizontale Linie dargestellt. Während es in visuellen Browsern weiterhin als horizontale Linie angezeigt werden kann, wird dieses Element jetzt semantisch statt präsentationell definiert. Wenn Sie also eine horizontale Linie zeichnen möchten, sollten Sie dies tun, indem Sie einem bestehenden Element über CSS einen Rahmen hinzufügen.

Die Eigenschaften `border-*` (zum Beispiel {{cssxref("border-style")}} und {{cssxref("border-color")}}) ermöglichen es Ihnen, das Erscheinungsbild einer Linie erheblich anzupassen, unabhängig davon, ob Sie ein `<hr>`-Element oder einen auf einem anderen Element gezeichneten Rahmen anpassen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Ausrichtung der Linie auf der Seite. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Farbe der Linie über Farbnamen oder hexadezimale Werte.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt fest, dass die Linie keine Schattierung hat.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Höhe der Linie in Pixeln.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
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
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert</li>
          <li><a href="/de/docs/Web/HTML/Reference/Elements/select"><code>&lt;select></code></a>-Element</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
