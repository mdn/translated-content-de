---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Eingabescheitels** fest, des sichtbaren Markers, an dem das nächste eingegebene Zeichen eingefügt wird. Dies wird manchmal als **Text-Eingabecursor** bezeichnet. Der Scheitel erscheint in Elementen wie {{HTMLElement("input")}} oder solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut. Der Scheitel ist typischerweise eine dünne vertikale Linie, die blinkt, um auffälliger zu sein. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

{{InteractiveExample("CSS Demo: caret-color")}}

```css interactive-example-choice
caret-color: red;
```

```css interactive-example-choice
caret-color: auto;
```

```css interactive-example-choice
caret-color: transparent;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>Enter text in the field to see the caret:</p>
    <p><input id="example-element" type="text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
}
```

Beachten Sie, dass der Eingabescheitel nur eine Art von Scheitel ist. Zum Beispiel haben viele Browser einen "Navigationsscheitel", der ähnlich wie ein Eingabescheitel funktioniert, jedoch in nicht editierbarem Text bewegt werden kann. Das Mauszeigerbild, das beim Überfahren von Text angezeigt wird, bei dem die {{cssxref("cursor")}} Eigenschaft auf `auto` steht, oder beim Überfahren eines Elements, bei dem die `cursor` Eigenschaft auf `text` oder `vertical-text` steht, ist zwar manchmal ähnlich einem Scheitel, jedoch kein Scheitel (es ist ein Cursor).

## Syntax

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Global values */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Werte

- `auto`

  - : Der User-Agent wählt eine passende Farbe für den Scheitel. Dies ist im Allgemeinen {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der User-Agent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umliegenden Inhalt zu gewährleisten, wobei der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Während User-Agents `currentcolor` (was normalerweise animierbar ist) für den Wert `auto` verwenden können, wird `auto` bei Übergängen und Animationen nicht interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Scheitels.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benutzerdefinierten Scheitelfarbe

#### HTML

```html
<input value="This field uses a default caret." size="64" />
<input class="custom" value="I have a custom caret color!" size="64" />
<p contenteditable class="custom">
  This paragraph can be edited, and its caret has a custom color as well!
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("input")}} Element
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut, das verwendet werden kann, um den Text eines beliebigen Elements bearbeitbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
