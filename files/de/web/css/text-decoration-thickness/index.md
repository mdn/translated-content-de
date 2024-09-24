---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-decoration-thickness`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichstärke der Dekorationslinie fest, die auf Text in einem Element angewendet wird, wie zum Beispiel bei einer Durchstreichung, Unterstreichung oder Überstrich.

{{EmbedInteractiveExample("pages/css/text-decoration-thickness.html")}}

## Syntax

```css
/* Einzelnes Schlüsselwort */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* Länge */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* Prozentwert */
text-decoration-thickness: 10%;

/* Globale Werte */
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
  - : Wenn die Schriftartdatei Informationen über eine bevorzugte Dicke enthält, diesen Wert verwenden. Falls nicht, verhält sich der Browser, als wäre `auto` gesetzt, und wählt eine entsprechende Dicke.
- `<length>`
  - : Gibt die Dicke der Textdekoration als {{cssxref('length')}} an, was die Schriftdatei-Empfehlung oder die Standardeinstellung des Browsers überschreibt.
- `<percentage>`
  - : Gibt die Dicke der Textdekoration als {{cssxref('percentage')}} von **1em** in der aktuellen Schriftart an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen in der Schriftart. Der Browser muss mindestens 1 Gerätepixel verwenden. Für eine gegebene Anwendung dieser Eigenschaft ist die Dicke über das gesamte angewendete Element konstant, selbst wenn es Kindelemente mit einer anderen Schriftgröße gibt.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Unterschiedliche Dicken

#### HTML

```html
<p class="thin">Hier ist ein Text mit einer roten Unterstreichung von 1px.</p>
<p class="thick">Dieser hat eine rote Unterstreichung von 5px.</p>
<p class="shorthand">Dies verwendet die entsprechende Kurzschreibweise.</p>
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
> Die Eigenschaft wurde früher `text-decoration-width` genannt, aber 2019 in `text-decoration-thickness` umbenannt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
