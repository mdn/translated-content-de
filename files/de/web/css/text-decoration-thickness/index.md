---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichstärke der Dekorationslinie fest, die auf Text in einem Element verwendet wird, wie z.B. Durchstreichung, Unterstreichung oder Oberstrich.

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
  - : Der Browser wählt eine geeignete Breite für die Textdekoration aus.
- `from-font`
  - : Wenn die Schriftdatei Informationen über eine bevorzugte Stärke enthält, wird dieser Wert verwendet. Wenn die Schriftdatei diese Informationen nicht enthält, verhält es sich so, als ob `auto` gesetzt ist, wobei der Browser eine geeignete Stärke auswählt.
- `<length>`
  - : Gibt die Stärke der Textdekoration als {{cssxref('length')}} an und überschreibt den Vorschlag der Schriftdatei oder die Standardeinstellung des Browsers.
- `<percentage>`
  - : Gibt die Stärke der Textdekoration als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen in der Schriftart. Der Browser muss mindestens 1 Pixel verwenden. Bei einer Anwendung dieser Eigenschaft bleibt der Dickenwert konstant über das gesamte Element, auf das sie angewendet wird, auch wenn es untergeordnete Elemente mit einer anderen Schriftgröße gibt.

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
