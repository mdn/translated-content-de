---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfüge-Carets** fest, des sichtbaren Markers, an dem das nächste getippte Zeichen eingefügt wird. Dies wird manchmal als **Text-Eingabecursor** bezeichnet. Der Caret erscheint in Elementen wie {{HTMLElement("input")}} oder in solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut. Der Caret ist typischerweise eine dünne vertikale Linie, die blinkt, um auffälliger zu wirken. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Beachten Sie, dass der Einfüge-Caret nur eine Art von Caret ist. Viele Browser haben beispielsweise einen "Navigations-Caret", der ähnlich wie ein Einfüge-Caret funktioniert, aber in nicht editierbarem Text bewegt werden kann. Andererseits ist das Mauszeigerbild, das angezeigt wird, wenn Sie über Text fahren, wo die {{cssxref("cursor")}} Eigenschaft `auto` ist, oder wenn Sie über ein Element fahren, wo die `cursor` Eigenschaft `text` oder `vertical-text` ist, obwohl es manchmal wie ein Caret aussieht, kein Caret (es ist ein Cursor).

## Syntax

```css
/* Schlüsselwort-Werte */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* <color> Werte */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Globale Werte */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Werte

- `auto`

  - : Der User-Agent wählt eine geeignete Farbe für den Caret aus. Dies ist in der Regel {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der User-Agent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast zum umgebenden Inhalt sicherzustellen, wobei der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Während User-Agents möglicherweise `currentcolor` (was normalerweise animierbar ist) für den `auto`-Wert verwenden, wird `auto` bei Übergängen und Animationen nicht interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Caret-Farbe

#### HTML

```html
<input value="Dieses Feld verwendet einen Standard-Caret." size="64" />
<input class="custom" value="Ich habe eine benutzerdefinierte Caret-Farbe!" size="64" />
<p contenteditable class="custom">
  Dieser Absatz kann bearbeitet werden, und auch sein Caret hat eine benutzerdefinierte Farbe!
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
