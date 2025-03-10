---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfügemarkers** fest, des sichtbaren Markers, an dem das nächste getippte Zeichen eingefügt wird. Dieser wird manchmal als **Texteingabecursor** bezeichnet. Der Caret erscheint in Elementen wie {{HTMLElement("input")}} oder in solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut. Der Caret ist typischerweise eine dünne vertikale Linie, die blinkt, um ihn besser erkennbar zu machen. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

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

Beachten Sie, dass der Einfügemarker nur eine Art von Caret ist. Viele Browser haben beispielsweise einen "Navigations-Caret", der ähnlich wie ein Einfügemarker funktioniert, aber in nicht editierbarem Text bewegt werden kann. Das Mauszeigerbild, das angezeigt wird, wenn über Text geschwebt wird, bei dem die {{cssxref("cursor")}} Eigenschaft `auto` ist, oder wenn über ein Element geschwebt wird, bei dem die `cursor` Eigenschaft `text` oder `vertical-text` ist, sieht manchmal aus wie ein Caret, ist aber kein Caret (es ist ein Cursor).

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

  - : Der User-Agent wählt eine geeignete Farbe für den Caret aus. Dies ist in der Regel {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der User-Agent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt zu gewährleisten. Dabei wird der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt.

    > [!NOTE]
    > Während User-Agents `currentcolor` (das üblicherweise animierbar ist) für den `auto` Wert verwenden können, wird `auto` bei Übergängen und Animationen nicht interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Caret-Farbe festlegen

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
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut, das verwendet werden kann, um den Text eines Elements bearbeitbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
