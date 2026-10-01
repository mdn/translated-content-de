---
title: HTML-Element `<hr>` für einen thematischen Umbruch (horizontale Linie)
short-title: <hr>
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das [HTML](/de/docs/Web/HTML)-Element **`<hr>`** stellt einen thematischen Umbruch zwischen Elementen dar, beispielsweise einen Szenenwechsel in einer Geschichte oder einen Themenwechsel innerhalb eines Abschnitts.

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

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Ausrichtung der Linie auf der Seite fest. Wenn kein Wert angegeben wird, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Farbe der Linie durch einen Farbnamen oder einen Hexadezimalwert fest.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt fest, dass die Linie keine Schattierung hat.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Höhe der Linie in Pixeln fest.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Länge der Linie auf der Seite durch einen Pixel- oder Prozentwert fest.

## Hinweise zur Verwendung

Historisch wurde das Element `<hr>` stets als horizontale Linie dargestellt. Auch wenn es in grafischen Browsern weiterhin als horizontale Linie angezeigt werden kann, ist dieses Element heute nach seiner Semantik und nicht nach seiner Darstellung definiert. Wenn Sie eine horizontale Linie zeichnen möchten, sollten Sie daher mit CSS einem vorhandenen Element einen Rahmen hinzufügen.

Mit den `border-*`-Eigenschaften (beispielsweise {{cssxref("border-style")}} und {{cssxref("border-color")}}) können Sie das Erscheinungsbild einer Linie umfassend anpassen – unabhängig davon, ob Sie ein `<hr>`-Element oder einen Rahmen an einem anderen Element gestalten.

## Beispiele

### Thematischer Umbruch zwischen Absätzen

Das folgende Beispiel fügt einen thematischen Umbruch zwischen Elementen auf Absatzebene ein.

#### HTML

```html
<article>
  <p>
    This is the first paragraph of text. This is the first paragraph of text.
    This is the first paragraph of text. This is the first paragraph of text.
  </p>
  <hr />
  <p>
    This is the second paragraph of text. This is the second paragraph of text.
    This is the second paragraph of text. This is the second paragraph of text.
  </p>
</article>
```

#### Ergebnis

{{EmbedLiveSample("Thematic break between paragraphs")}}

### Thematischer Umbruch zwischen Listeneinträgen

Das `<hr>`-Tag kann innerhalb eines Listeneintrags platziert werden, um Abschnitte einer Liste optisch voneinander zu trennen.

#### HTML

```html
<ul>
  <li>Cut</li>
  <li>Copy</li>
  <li>Paste</li>
  <li role="presentation"><hr /></li>
  <li>Delete</li>
</ul>
```

```css hidden
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100px;
  margin: 0.75rem;
  padding: 0.75rem;
  border: 1px solid lightgrey;
}
hr {
  margin-block: 0.2rem;
  color: lightgrey;
}
```

#### Ergebnis

{{EmbedLiveSample("Thematic break between list items")}}

### Thematischer Umbruch zwischen Auswahloptionen

Das Element `<hr>` ist innerhalb eines `<select>`-Elements zulässig und erzeugt dort eine optische Trennung zwischen `<option>`-Elementen.

#### HTML

```html
<select>
  <option value="">--Choose an option--</option>
  <hr />
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <hr />
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
</select>
```

#### Ergebnis

{{EmbedLiveSample("Thematic break between select options")}}

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
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es handelt sich um ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Ein Start-Tag ist erforderlich; ein End-Tag darf nicht vorhanden sein.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">flow content</a> akzeptiert</li>
          <li>Das Element <a href="/de/docs/Web/HTML/Reference/Elements/select"><code>&lt;select></code></a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
