---
title: "`<hr>` HTML thematischer Bruch (horizontale Linie) Element"
short-title: <hr>
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: 1fc07c825d3f214516420cf0e986853a66deb426
---

Das **`<hr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen thematischen Bruch zwischen Elementen: zum Beispiel einen Szenenwechsel in einer Geschichte oder einen Themenwechsel innerhalb eines Abschnitts.

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

In der Vergangenheit wurde das `<hr>`-Element immer als horizontale Linie dargestellt. Während es in visuellen Browsern noch als horizontale Linie angezeigt werden kann, wird dieses Element jetzt in semantischen Begriffen und nicht in präsentationellen Begriffen definiert. Wenn Sie also eine horizontale Linie zeichnen möchten, sollten Sie dies tun, indem Sie einer bestehenden Element mit CSS eine Linie hinzufügen.

Die `border-*`-Eigenschaften (zum Beispiel {{cssxref("border-style")}} und {{cssxref("border-color")}}) ermöglichen es Ihnen, das Erscheinungsbild einer Linie erheblich anzupassen, egal ob Sie ein `<hr>`-Element oder eine auf einem anderen Element gezeichnete Linie anpassen.

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Ausrichtung der Linie auf der Seite. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Farbe der Linie durch Farbnamen oder hexadezimale Werte.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Linie so, dass sie keine Schattierung hat.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Höhe der Linie in Pixeln.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Länge der Linie auf der Seite durch einen Pixel- oder Prozentwert.

## Beispiel

### Thematischer Bruch zwischen Absätzen

Das folgende Beispiel fügt einen thematischen Bruch zwischen Elemente auf Absatzebene ein.

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

### Thematischer Bruch zwischen Listeneinträgen

Das `<hr>`-Tag kann innerhalb eines Listeneintrags platziert werden, um eine visuelle Trennung zu schaffen, und einen Separator zwischen Abschnitten einer Liste zu erstellen.

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

### Thematischer Bruch zwischen Auswahloptionen

Das `<hr>`-Element ist innerhalb eines `<select>`-Elements erlaubt, um einen visuellen Separator zwischen `<option>`-Elementen zu erstellen.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassener Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
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
      <th scope="row">Zugelassene ARIA-Rollen</th>
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
