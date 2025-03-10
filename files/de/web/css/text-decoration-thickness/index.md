---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichdicke der Dekorationslinie fest, die auf Text in einem Element angewendet wird, wie zum Beispiel Durchstreichung, Unterstreichung oder Überstreichung.

{{InteractiveExample("CSS Demo: text-decoration-thickness")}}

```css interactive-example-choice
text-decoration-line: underline;
text-decoration-thickness: 3px;
```

```css interactive-example-choice
text-decoration-line: line-through;
text-decoration-thickness: 0.4rem;
```

```css interactive-example-choice
text-decoration-line: underline overline;
text-decoration-thickness: from-font;
font-size: 2rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Confusion kissed me on the cheek, and left a taste so bittersweet
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-color: #ff0000;
}
```

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
  - : Der Browser wählt eine passende Breite für die Textdekoration aus.
- `from-font`
  - : Wenn die Schriftdatei Informationen über eine bevorzugte Dicke enthält, wird dieser Wert verwendet. Wenn die Schriftdatei diese Informationen nicht enthält, wird diese als `auto` behandelt und der Browser wählt eine passende Dicke.
- `<length>`
  - : Spezifiziert die Dicke der Textdekoration als {{cssxref('length')}}, wodurch der Vorschlag der Schriftdatei oder der Standardwert des Browsers überschrieben wird.
- `<percentage>`
  - : Spezifiziert die Dicke der Textdekoration als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart. Ein Prozentsatz wird als relativer Wert geerbt und passt sich daher an Änderungen in der Schriftart an. Der Browser muss ein Minimum von 1 Gerätpixel verwenden. Für eine gegebene Anwendung dieser Eigenschaft bleibt die Dicke über das gesamte angewendete Element konstant, auch wenn es untergeordnete Elemente mit einer anderen Schriftgröße gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Unterschiedliche Dicken

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
> Die Eigenschaft hieß früher `text-decoration-width`, wurde jedoch 2019 zu `text-decoration-thickness` aktualisiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
