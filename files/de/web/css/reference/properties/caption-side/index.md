---
title: caption-side
slug: Web/CSS/Reference/Properties/caption-side
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`caption-side`** [CSS](/de/docs/Web/CSS) Eigenschaft positioniert den Inhalt eines Tabellen-{{HTMLElement("caption")}} an der angegebenen Seite. Die Werte sind relativ zum {{cssxref("writing-mode")}} der Tabelle.

{{InteractiveExample("CSS Demo: caption-side")}}

```css interactive-example-choice
caption-side: top;
```

```css interactive-example-choice
caption-side: bottom;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <caption>
      Famous animals
    </caption>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Location</th>
      </tr>
      <tr>
        <td>Giraffe</td>
        <td>Africa</td>
      </tr>
      <tr>
        <td>Penguin</td>
        <td>Antarctica</td>
      </tr>
      <tr>
        <td>Sloth</td>
        <td>South America</td>
      </tr>
      <tr>
        <td>Tiger</td>
        <td>Asia</td>
      </tr>
    </tbody>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: black;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #ffcc33;
  padding: 0.5rem 1rem;
}

tr {
  background: #eeeeee;
}

tr:nth-child(even) {
  background: #cccccc;
}
```

## Syntax

```css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Global values */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: revert-layer;
caption-side: unset;
```

Die `caption-side` Eigenschaft wird als einer der unten aufgeführten Schlüsselwerten angegeben.

### Werte

- `top`
  - : Der Beschriftungskasten sollte am Blockanfang der Tabelle positioniert werden.
- `bottom`
  - : Der Beschriftungskasten sollte am Blockende der Tabelle positioniert werden.

> [!NOTE]
> Das Modul der [logischen CSS-Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert zwei logische Werte, `inline-start` und `inline-end`, um den Beschriftungskasten am Inline-Anfang und Inline-Ende der Tabelle zu positionieren. Diese Werte werden in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beschriftungen oben und unten setzen

#### HTML

```html
<table class="top">
  <caption>
    Caption ABOVE the table
  </caption>
  <tbody>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
    </tr>
  </tbody>
</table>

<br />

<table class="bottom">
  <caption>
    Caption BELOW the table
  </caption>
  <tbody>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLelement("caption")}}
- [CSS-Tabellen](/de/docs/Web/CSS/Guides/Table) Modul
- [Logische CSS-Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
