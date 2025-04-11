---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe des **Einfügemarkers** fest, des sichtbaren Markers, an dem das nächste eingegebene Zeichen eingefügt wird. Dies wird manchmal als **Texteingabecursor** bezeichnet. Der Cursor erscheint in Elementen wie {{HTMLElement("input")}} oder in solchen mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable). Der Cursor ist typischerweise eine dünne vertikale Linie, die blinkt, um besser sichtbar zu sein. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

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

Beachten Sie, dass der Einfügemarker nur eine Art von Cursor ist. Viele Browser haben beispielsweise einen "Navigationscursor", der ähnlich wie ein Einfügemarker funktioniert, sich aber in nicht bearbeitbarem Text bewegen lässt. Andererseits ist das Mauszeigersymbol, das angezeigt wird, wenn man über Text schwebt, bei dem die {{cssxref("cursor")}}-Eigenschaft `auto` ist, oder wenn man über ein Element schwebt, bei dem die `cursor`-Eigenschaft `text` oder `vertical-text` ist, kein Cursor (auch wenn er manchmal wie ein Marker aussieht).

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

  - : Der Benutzeragent wählt eine geeignete Farbe für den Marker aus. Dies ist im Allgemeinen {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der Benutzeragent kann eine andere Farbe wählen, um gute Sichtbarkeit und Kontrast zum umliegenden Inhalt zu gewährleisten, wobei er den Wert von `currentcolor`, den Hintergrund, Schatten und andere Faktoren berücksichtigt.

    > [!NOTE]
    > Auch wenn Benutzeragenten `currentcolor` (das normalerweise animierbar ist) für den `auto`-Wert verwenden können, wird `auto` nicht in Übergängen und Animationen interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Markers.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer benutzerdefinierten Markerfarbe

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

- Das {{HTMLElement("input")}}-Element
- Das HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), das verwendet werden kann, um den Text jedes Elements bearbeitbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
