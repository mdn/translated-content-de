---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichstärke der Dekorationslinie fest, die auf Text in einem Element verwendet wird, wie z.B. ein Durchstreichen, Unterstreichen oder Überstreichen.

{{EmbedInteractiveExample("pages/css/text-decoration-thickness.html")}}

## Syntax

```css
/* Single keyword */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* length */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* percentage */
text-decoration-thickness: 10%;

/* Global values */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: revert;
text-decoration-thickness: revert-layer;
text-decoration-thickness: unset;
```

### Werte

- `auto`
  - : Der Browser wählt eine geeignete Breite für die Textdekoration.
- `from-font`
  - : Wenn die Schriftdatei Informationen über eine bevorzugte Stärke enthält, verwenden Sie diesen Wert. Falls nicht, verhält es sich so, als ob `auto` gesetzt wäre, wobei der Browser eine geeignete Stärke wählt.
- `<length>`
  - : Bestimmt die Dicke der Textdekoration mittels einer {{cssxref('length')}}, wobei die Vorschläge der Schriftdatei oder die Standardeinstellung des Browsers überschrieben werden.
- `<percentage>`
  - : Gibt die Dicke der Textdekoration als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen in der Schriftart. Der Browser muss mindestens 1 Gerätepixel verwenden. Für eine gegebene Anwendung dieser Eigenschaft bleibt die Dicke im gesamten angewendeten Bereich konstant, auch wenn es Kindelemente mit einer anderen Schriftgröße gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Unterschiedliche Stärken

#### HTML

```html
<p class="thin">Here's some text with a 1px red underline.</p>
<p class="thick">This one has a 5px red underline.</p>
<p class="shorthand">This uses the equivalent shorthand.</p>
```

#### CSS

```css
.thin {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 1px;
}

.thick {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 5px;
}

.shorthand {
  text-decoration: underline solid red 5px;
}
```

#### Ergebnisse

{{EmbedLiveSample('Varying_thickness')}}

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Die Eigenschaft hieß früher `text-decoration-width`, wurde aber 2019 in `text-decoration-thickness` umbenannt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
