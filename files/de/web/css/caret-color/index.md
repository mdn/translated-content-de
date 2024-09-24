---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfüge-Carets** fest, des sichtbaren Markers, an dem das nächste getippte Zeichen eingefügt wird. Dies wird manchmal als **Texteingabe-Cursor** bezeichnet. Das Caret erscheint in Elementen wie {{HTMLElement("input")}} oder solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut. Das Caret ist typischerweise eine dünne vertikale Linie, die blinkt, um es besser erkennbar zu machen. Standardmäßig ist es schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Beachten Sie, dass das Einfüge-Caret nur eine Art von Caret ist. Beispielsweise haben viele Browser ein "Navigations-Caret", das ähnlich wie ein Einfüge-Caret funktioniert, jedoch in nicht editierbarem Text verschoben werden kann. Andererseits ist das Mauszeiger-Symbol, das angezeigt wird, wenn Sie über Text schweben, wo die {{cssxref("cursor")}} Eigenschaft `auto` ist, oder wenn Sie über ein Element schweben, bei dem die `cursor` Eigenschaft `text` oder `vertical-text` ist, obwohl es manchmal wie ein Caret aussieht, kein Caret (es ist ein Cursor).

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

  - : Der Benutzeragent wählt eine geeignete Farbe für das Caret aus. Dies ist im Allgemeinen {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der Benutzeragent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und Kontrast mit dem umgebenden Inhalt sicherzustellen, unter Berücksichtigung des Werts von `currentcolor`, des Hintergrunds, von Schatten und anderen Faktoren.

    > [!NOTE]
    > Während Benutzeragenten `currentcolor` (das normalerweise animierbar ist) für den `auto` Wert verwenden können, wird `auto` in Übergängen und Animationen nicht interpoliert.

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
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut, das verwendet werden kann, um beliebigen Text in einem Element editierbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}} und {{cssxref("column-rule-color")}}
