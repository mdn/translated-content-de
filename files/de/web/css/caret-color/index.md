---
title: caret-color
slug: Web/CSS/caret-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`caret-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des **Einfüge-Carets** fest, das sichtbare Zeichen, wo das nächste getippte Zeichen eingefügt wird. Dies wird manchmal auch als **Text-Eingabe-Cursor** bezeichnet. Der Caret erscheint in Elementen wie {{HTMLElement("input")}} oder solchen mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut. Der Caret ist typischerweise eine dünne vertikale Linie, die blinkt, um ihn hervorzuheben. Standardmäßig ist er schwarz, aber seine Farbe kann mit dieser Eigenschaft geändert werden.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

Beachten Sie, dass der Einfüge-Caret nur eine Art von Caret ist. Zum Beispiel haben viele Browser einen "Navigations-Caret", der ähnlich wie ein Einfüge-Caret funktioniert, aber in nicht-editierbarem Text bewegt werden kann. Andererseits ist das Maus-Cursor-Bild, das angezeigt wird, wenn über Text geschwebt wird, bei dem die {{cssxref("cursor")}} Eigenschaft auf `auto` gesetzt ist, oder wenn über ein Element geschwebt wird, bei dem die `cursor` Eigenschaft `text` oder `vertical-text` ist, obwohl es manchmal wie ein Caret aussieht, kein Caret (es ist ein Cursor).

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

  - : Der Benutzeragent wählt eine geeignete Farbe für den Caret aus. Dies ist im Allgemeinen {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, aber der Benutzeragent kann eine andere Farbe wählen, um eine gute Sichtbarkeit und einen Kontrast zum umgebenden Inhalt sicherzustellen, wobei der Wert von `currentcolor`, der Hintergrund, Schatten und andere Faktoren berücksichtigt werden.

    > [!NOTE]
    > Obwohl Benutzeragenten möglicherweise `currentcolor` (das normalerweise animierbar ist) für den `auto` Wert verwenden, wird `auto` bei Übergängen und Animationen nicht interpoliert.

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Carets.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benutzerdefinierte Caret-Farbe setzen

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
- Das HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut, das verwendet werden kann, um den Text eines beliebigen Elements editierbar zu machen
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, und {{cssxref("column-rule-color")}}
