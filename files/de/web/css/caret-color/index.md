---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfügepunktes** fest, dem sichtbaren Marker, an dem das nächste eingegebene Zeichen eingefügt wird. Dieser wird manchmal auch als **Texteingabecursor** bezeichnet. Der Einfügepunkt erscheint in Elementen wie {{HTMLElement("input")}} oder solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut. Der Einfügepunkt ist normalerweise eine dünne vertikale Linie, die blinkt, um besser sichtbar zu sein. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft verändert werden.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Beachten Sie, dass der Einfügepunkt nur eine Art von Caret ist. Zum Beispiel haben viele Browser einen "Navigations-Caret", der ähnlich wie ein Einfügepunkt funktioniert, aber im nicht bearbeitbaren Text bewegt werden kann. Andererseits ist das Mauszeiger-Bild, das beim Überfahren von Text erscheint, wo die {{cssxref("cursor")}} Eigenschaft auf `auto` steht, oder beim Überfahren eines Elements, wo die `cursor` Eigenschaft `text` oder `vertical-text` ist, obwohl es manchmal wie ein Caret aussieht, kein Caret (es ist ein Cursor).

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

  - : Der User-Agent wählt eine geeignete Farbe für den Caret. Dies ist in der Regel {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der User-Agent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt sicherzustellen, wobei der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Während User-Agents möglicherweise `currentcolor` (das normalerweise animierbar ist) für den `auto`-Wert verwenden, wird `auto` in Übergängen und Animationen nicht interpoliert.

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
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut, das verwendet werden kann, um den Text eines beliebigen Elements bearbeitbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
