---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`text-decoration-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Linien fest, die durch {{ cssxref("text-decoration-line") }} spezifiziert werden. Der Stil wird auf alle Linien angewendet, die mit `text-decoration-line` festgelegt sind.

{{EmbedInteractiveExample("pages/css/text-decoration-style.html")}}

Wenn die angegebene Dekoration eine spezifische semantische Bedeutung hat, wie zum Beispiel eine durchgestrichene Linie, die darauf hinweist, dass ein Text gelöscht wurde, wird Autoren empfohlen, diese Bedeutung mit einem HTML-Tag zu kennzeichnen, wie {{ HTMLElement("del") }} oder {{ HTMLElement("s") }}. Da Browser in einigen Fällen das Styling deaktivieren können, würde die semantische Bedeutung in einer solchen Situation nicht verloren gehen.

Wenn mehrere Linendekorations-Eigenschaften auf einmal festgelegt werden, kann es praktischer sein, die {{cssxref("text-decoration")}} Kurzschreibweise zu verwenden.

## Syntax

```css
/* Keyword-Werte */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Globale Werte */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

### Werte

- solid
  - : Zeichnet eine einzelne Linie.
- double
  - : Zeichnet eine doppelte Linie.
- dotted
  - : Zeichnet eine gepunktete Linie.
- dashed
  - : Zeichnet eine gestrichelte Linie.
- wavy
  - : Zeichnet eine wellenförmige Linie.
- \-moz-none
  - : Zeichnet keine Linie. Verwenden Sie {{cssxref("text-decoration-line", "text-decoration-line: none")}} stattdessen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer wellenförmigen Unterstreichung

Das folgende Beispiel erstellt eine rote, wellenförmige Unterstreichung:

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">This text has a wavy red line beneath it.</p>
```

#### Ergebnisse

{{EmbedLiveSample('Setting_a_wavy_underline')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn mehrere Linendekorations-Eigenschaften auf einmal festgelegt werden, kann es praktischer sein, die {{cssxref("text-decoration")}} Kurzschreibweise zu verwenden.
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
