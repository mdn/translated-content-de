---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Eingabe-Carets** fest, das sichtbare Markierung, wo das nächste eingegebene Zeichen eingefügt wird. Dies wird manchmal als **Texteingabe-Cursor** bezeichnet. Das Caret erscheint in Elementen wie {{HTMLElement("input")}} oder in solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut. Das Caret ist typischerweise eine dünne vertikale Linie, die blinkt, um die Sichtbarkeit zu erhöhen. Standardmäßig ist es schwarz, aber seine Farbe kann mit dieser Eigenschaft verändert werden.

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

Beachten Sie, dass das Eingabe-Caret nur eine Art von Caret ist. Viele Browser haben zum Beispiel ein "Navigations-Caret", das ähnlich wie ein Eingabe-Caret funktioniert, aber in nicht bearbeitbarem Text bewegt werden kann. Der Mauszeiger, der angezeigt wird, wenn man über Text schwebt, wo die {{cssxref("cursor")}} Eigenschaft `auto` ist, oder wenn man über ein Element schwebt, wo die `cursor` Eigenschaft `text` oder `vertical-text` ist, sieht zwar manchmal wie ein Caret aus, ist aber kein Caret (es ist ein Cursor).

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
  - : Der User-Agent wählt eine passende Farbe für das Caret. Dies ist in der Regel {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der User-Agent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, wobei der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Auch wenn User-Agents möglicherweise `currentcolor` (was normalerweise animierbar ist) für den `auto` Wert verwenden, wird `auto` nicht in Transitionen und Animationen interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benutzerdefinierten Caret-Farbe

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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}.
