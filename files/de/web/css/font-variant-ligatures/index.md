---
title: font-variant-ligatures
slug: Web/CSS/font-variant-ligatures
l10n:
  sourceCommit: 8d8f3f44b498aef7b8cf2729d5656f96d2ff6ae5
---

{{CSSRef}}

Die **`font-variant-ligatures`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, welche {{Glossary("ligature", "Ligaturen")}} und {{Glossary("contextual forms", "kontextuelle Formen")}} im Textinhalt der Elemente verwendet werden, auf die sie angewendet wird. Dies führt zu harmonischeren Formen im resultierenden Text.

{{EmbedInteractiveExample("pages/css/font-variant-ligatures.html")}}

## Syntax

```css
/* Schlüsselwort-Werte */
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

/* Zwei Schlüsselwort-Werte */
font-variant-ligatures: no-contextual common-ligatures;

/* Vier Schlüsselwort-Werte */
font-variant-ligatures: common-ligatures no-discretionary-ligatures
  historical-ligatures contextual;

/* Globale Werte */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

Die Eigenschaft `font-variant-ligatures` wird als `normal`, `none` oder als eine oder mehrere der unten aufgeführten Werte angegeben. Mehrere Werte werden durch Leerzeichen getrennt.

### Werte

- `normal`
  - : Dieses Schlüsselwort aktiviert die üblichen Ligaturen und kontextuellen Formen, die für eine korrekte Darstellung benötigt werden. Die aktivierten Ligaturen und Formen hängen von der Schriftart, der Sprache und der Art des Schreibsystems ab. Dies ist der Standardwert.
- `none`
  - : Dieses Schlüsselwort gibt an, dass alle Ligaturen und kontextuellen Formen deaktiviert sind, auch die üblichen.
- _`<common-lig-values>`_

  - : Diese Werte steuern die gängigsten Ligaturen, wie für `fi`, `ffi`, `th` oder Ähnliches. Sie entsprechen den OpenType-Werten `liga` und `clig`. Es sind zwei Werte möglich:

    - `common-ligatures`, die diese Ligaturen aktivieren. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen aktiviert.
    - `no-common-ligatures`, die diese Ligaturen deaktivieren.

- _`<discretionary-lig-values>`_

  - : Diese Werte steuern spezifische Ligaturen, die speziell für die Schriftart sind und vom Schriftgestalter definiert wurden. Sie entsprechen den OpenType-Werten `dlig`. Es sind zwei Werte möglich:

    - `discretionary-ligatures`, die diese Ligaturen aktivieren.
    - `no-discretionary-ligatures` deaktivieren die Ligaturen. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen normalerweise deaktiviert.

- _`<historical-lig-values>`_

  - : Diese Werte steuern die historisch verwendeten Ligaturen, wie sie in alten Büchern vorkommen, wie z.B. das deutsche tz-Digraph, das als ꜩ angezeigt wird. Sie entsprechen den OpenType-Werten `hlig`. Es sind zwei Werte möglich:

    - `historical-ligatures`, die diese Ligaturen aktivieren.
    - `no-historical-ligatures` deaktivieren die Ligaturen. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen normalerweise deaktiviert.

- _`<contextual-alt-values>`_

  - : Diese Werte steuern, ob sich Buchstaben ihrem Kontext anpassen, d.h. ob sie sich den umgebenden Buchstaben anpassen. Diese Werte entsprechen den OpenType-Werten `calt`. Es sind zwei Werte möglich:

    - `contextual` gibt an, dass die kontextuellen Alternativen verwendet werden sollen. Beachten Sie, dass das Schlüsselwort `normal` diese Ligaturen in der Regel ebenfalls aktiviert.
    - `no-contextual` verhindert deren Verwendung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftligaturen und kontextuelle Formen festlegen

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
  font-family: Lora, serif;
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

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)
- [CSS fonts module](/de/docs/Web/CSS/CSS_fonts)
