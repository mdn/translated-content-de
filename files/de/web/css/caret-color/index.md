---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Eingabecursors** fest, das sichtbare Markierungselement, an dem das nächste eingegebene Zeichen eingefügt wird. Dies wird manchmal als **Texteingabe-Cursor** bezeichnet. Der Cursor erscheint in Elementen wie {{HTMLElement("input")}} oder solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut. Der Cursor ist typischerweise eine dünne vertikale Linie, die blinkt, um ihn besser sichtbar zu machen. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

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

Beachten Sie, dass der Eingabecursor nur eine Art von Cursor ist. Zum Beispiel haben viele Browser einen "Navigationscursor", der ähnlich wie ein Eingabecursor funktioniert, sich aber in nicht editierbarem Text bewegen lässt. Andererseits ist das Symbol des Mauszeigers, das angezeigt wird, wenn über Text geschwebt wird, wo die {{cssxref("cursor")}} Eigenschaft auf `auto` steht, oder bei einem Element, wo die `cursor` Eigenschaft `text` oder `vertical-text` ist, obwohl es manchmal wie ein Cursor aussieht, kein Cursor (sondern ein Zeiger).

## Syntax

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

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
  - : Der Benutzeragent wählt eine geeignete Farbe für den Cursor. Dies ist im Allgemeinen {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}}, aber der Benutzeragent kann auch eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt zu gewährleisten, wobei der Wert von `currentColor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Obwohl Benutzeragenten `currentColor` (das normalerweise animierbar ist) für den `auto` Wert verwenden können, wird `auto` bei Übergängen und Animationen nicht interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Cursors.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Cursorfarbe festlegen

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
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut, das verwendet werden kann, um den Text jedes Elements editierbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
