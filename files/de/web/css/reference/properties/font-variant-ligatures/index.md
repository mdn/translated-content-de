---
title: font-variant-ligatures
slug: Web/CSS/Reference/Properties/font-variant-ligatures
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`font-variant-ligatures`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, welche {{Glossary("ligature", "Ligaturen")}} und {{Glossary("contextual_forms", "Kontextformen")}} im Textinhalt der Elemente verwendet werden, auf die sie angewendet wird. Dies führt zu harmonischeren Formen im resultierenden Text.

{{InteractiveExample("CSS Demo: font-variant-ligatures")}}

```css interactive-example-choice
font-variant-ligatures: normal;
```

```css interactive-example-choice
font-variant-ligatures: no-common-ligatures;
```

```css interactive-example-choice
font-variant-ligatures: common-ligatures;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## Syntax

```css
/* Keyword values */
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */

/* Two keyword values */
font-variant-ligatures: no-contextual common-ligatures;

/* Four keyword values */
font-variant-ligatures: common-ligatures no-discretionary-ligatures
  historical-ligatures contextual;

/* Global values */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

Die Eigenschaft `font-variant-ligatures` wird als `normal`, `none` oder als eine oder mehrere der unten aufgeführten Wertetypen angegeben. Leerzeichen trennen mehrere Werte.

### Werte

- `normal`
  - : Dieses Schlüsselwort aktiviert die üblichen Ligaturen und Kontextformen, die für eine korrekte Darstellung benötigt werden. Die aktivierten Ligaturen und Formen hängen von der Schriftart, der Sprache und der Art des Schriftsatzes ab. Dies ist der Standardwert.
- `none`
  - : Dieses Schlüsselwort legt fest, dass alle Ligaturen und Kontextformen deaktiviert sind, auch die allgemeinen.
- _`<common-lig-values>`_
  - : Diese Werte steuern die häufigsten Ligaturen, wie zum Beispiel für `fi`, `ffi`, `th` oder ähnliches. Sie entsprechen den OpenType-Werten `liga` und `clig`. Zwei Werte sind möglich:
    - `common-ligatures`, womit diese Ligaturen aktiviert werden. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen aktiviert.
    - `no-common-ligatures`, womit diese Ligaturen deaktiviert werden.

- _`<discretionary-lig-values>`_
  - : Diese Werte steuern spezifische Ligaturen, die spezifisch für die Schriftart und vom Schriftgestalter definiert sind. Sie entsprechen den OpenType-Werten `dlig`. Zwei Werte sind möglich:
    - `discretionary-ligatures`, womit diese Ligaturen aktiviert werden.
    - `no-discretionary-ligatures`, womit die Ligaturen deaktiviert werden. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen normalerweise deaktiviert.

- _`<historical-lig-values>`_
  - : Diese Werte steuern die historisch verwendeten Ligaturen, wie sie in alten Büchern vorkommen, wie etwa beim deutschen tz-Digraph, der als ꜩ dargestellt wird. Sie entsprechen den OpenType-Werten `hlig`. Zwei Werte sind möglich:
    - `historical-ligatures`, womit diese Ligaturen aktiviert werden.
    - `no-historical-ligatures`, womit die Ligaturen deaktiviert werden. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen normalerweise deaktiviert.

- _`<contextual-alt-values>`_
  - : Diese Werte steuern, ob Buchstaben sich ihrem Kontext anpassen, das heißt, ob sie sich den umliegenden Buchstaben anpassen. Diese Werte entsprechen den OpenType-Werten `calt`. Zwei Werte sind möglich:
    - `contextual`, gibt an, dass die kontextuellen Alternativen verwendet werden sollen. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen in der Regel auch aktiviert.
    - `no-contextual`, verhindert deren Verwendung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Schriftligaturen und Kontextformen

#### HTML

```html
<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<p class="normal">
  normal<br />
  if fi ff tf ft jf fj
</p>
<p class="none">
  none<br />
  if fi ff tf ft jf fj
</p>
<p class="common-ligatures">
  common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-common-ligatures">
  no-common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="discretionary-ligatures">
  discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-discretionary-ligatures">
  no-discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="historical-ligatures">
  historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-historical-ligatures">
  no-historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  contextual<br />
  if fi ff tf ft jf fj
</p>
<p class="no-contextual">
  no-contextual<br />
  if fi ff tf ft jf fj
</p>
```

#### CSS

```css
p {
  font-family: "Lora", serif;
}
.normal {
  font-variant-ligatures: normal;
}

.none {
  font-variant-ligatures: none;
}

.common-ligatures {
  font-variant-ligatures: common-ligatures;
}

.no-common-ligatures {
  font-variant-ligatures: no-common-ligatures;
}

.discretionary-ligatures {
  font-variant-ligatures: discretionary-ligatures;
}

.no-discretionary-ligatures {
  font-variant-ligatures: no-discretionary-ligatures;
}

.historical-ligatures {
  font-variant-ligatures: historical-ligatures;
}

.no-historical-ligatures {
  font-variant-ligatures: no-historical-ligatures;
}

.contextual {
  font-variant-ligatures: contextual;
}

.no-contextual {
  font-variant-ligatures: no-contextual;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting font ligatures and contextual forms', '', '700') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- [CSS fonts module](/de/docs/Web/CSS/Guides/Fonts)
