---
title: caption-side
slug: Web/CSS/caption-side
l10n:
  sourceCommit: 8ae9de1b4c2562579812019be4542914236bc7c5
---

{{CSSRef}}

Die **`caption-side`**-[CSS](/de/docs/Web/CSS)-Eigenschaft platziert den Inhalt einer {{HTMLElement("caption")}} einer Tabelle auf der angegebenen Seite. Die Werte sind relativ zum {{cssxref("writing-mode")}} der Tabelle.

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

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

Die `caption-side`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben.

### Werte

- `top`
  - : Die caption box sollte an der Block-Startseite der Tabelle positioniert werden.
- `bottom`
  - : Die caption box sollte an der Block-Endseite der Tabelle positioniert werden.

> [!NOTE]
> Das Modul [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert zwei logische Werte, `inline-start` und `inline-end`, um die caption box an der Inline-Anfangskante bzw. Inline-Endkante der Tabelle zu positionieren. Diese Werte werden in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Captions oben und unten einstellen

#### HTML

```html
<table class="top">
  <caption>
    Caption ABOVE the table
  </caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br />

<table class="bottom">
  <caption>
    Caption BELOW the table
  </caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
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
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
- [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
