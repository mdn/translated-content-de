---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs)-APIs. Es erlaubt Entwicklern, ihre [CSS-Custom-Properties](/de/docs/Web/CSS/--*) explizit zu definieren, einschließlich der Überprüfung und Einschränkung der Eigenschaftstypen, das Setzen von Standardwerten und die Festlegung, ob eine Custom-Property Werte erben kann oder nicht.

Die `@property`-Regel ermöglicht die Registrierung einer Custom-Property direkt in einem Stylesheet, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten Custom-Property, als ob [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern aufgerufen worden wäre.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}

  - : Beschreibt die zulässige Syntax für die Eigenschaft. Kann ein `<length>`, `<number>`, `<percentage>`, `<length-percentage>`, `<color>`, `<image>`, `<url>`, `<integer>`, `<angle>`, `<time>`, `<resolution>`, `<transform-function>`, oder `<custom-ident>` sein, oder eine Liste von Datentyp- und Schlüsselwortwerten.

    Die Multiplikatoren `+` (leerzeichengetrennt) und `#` (kommagetrennt) geben an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine kommagetrennte Liste von `<color>`-Werten die erwartete Syntax ist.

    Vertikale Linien (`|`) können "oder"-Bedingungen für die erwartete Syntax erstellen, zum Beispiel akzeptiert `<length> | auto` ein `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine kommagetrennte Liste von `<color>`-Werten oder eine kommagetrennte Liste von `<integer>`-Werten.

- {{cssxref("@property/inherits","inherits")}}
  - : Bestimmt, ob die durch `@property` spezifizierte Registrierung der Custom-Property standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Legt den Anfangswert der Eigenschaft fest.

Die `@property`-Regel muss sowohl die Deskriptoren {{cssxref("@property/syntax","syntax")}} als auch {{cssxref("@property/inherits","inherits")}} enthalten; falls einer fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert. Der Deskriptor {{cssxref("@property/initial-value","initial-value")}} ist ebenfalls erforderlich, es sei denn, die Syntax ist die [`*` universelle Syntaxdefinition](https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition) (z. B. `syntax: "*"`). Wenn der Deskriptor `initial-value` erforderlich und ausgelassen ist, ist die gesamte `@property` Regel ungültig und wird ignoriert.

Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen die `@property`-Regel jedoch nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel definieren wir zwei Custom-Properties, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente festzulegen.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` at-rule, um eine Custom-Property mit dem Namen `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und beschränkt gültige Werte auf {{cssxref("percentage")}}-Werte. Das bedeutet, dass bei der Verwendung als Wert für die Größe eines Elements seine Größe immer relativ zur Größe seines Elternteils ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite Custom-Property, `--item-color`, unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property` at-rule. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte akzeptiert und nicht vererbt wird.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die beiden Custom-Properties, um die Elemente zu stylen:

```css
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;

  /* set custom property values on parent */
  --item-size: 20%;
  --item-color: orange;
}

/* use custom properties to set item size and background color */
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}

/* set custom property values on element itself */
.two {
  --item-size: initial;
  --item-color: inherit;
}

.three {
  /* invalid values */
  --item-size: 1000px;
  --item-color: xyz;
}
```

{{ EmbedLiveSample('examples', '100%', '250px') }}

Die beiden Custom-Properties, `--item-size: 20%` und `--item-color: orange;` werden auf dem `container`-Elternteil festgelegt und überschreiben die standardmäßigen `40%` und `aqua`-Werte, die festgelegt wurden, als diese Custom-Properties definiert wurden. Die Größe ist vererbbar; die Farbe jedoch nicht.

Für das erste Element wurden keine dieser Custom-Properties festgelegt. Die `--item-size` ist vererbbar, also wird der Wert `20%`, der auf ihrem Elternteil `container` gesetzt wurde, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der Wert `orange`, der auf dem Elternteil festgelegt wurde, nicht berücksichtigt wird. Stattdessen wird der standardmäßige Anfangswert `aqua` verwendet.

Für das zweite Element sind CSS-Globale Schlüsselwörter für beide Custom-Properties gesetzt, welche gültige Werte für alle Wertetypen sind und daher unabhängig vom `syntax`-Deskriptorwert gültig sind. Die `--item-size` ist auf `initial` gesetzt und verwendet den in der `@property`-Deklaration festgelegten `initial-value: 40%;`. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange`-Wert von ihrem Elternteil, obwohl die Custom-Property nicht vererbbar ist. Deshalb ist Element zwei orange.

Für das dritte Element wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass der vererbbare `20%`, der auf dem Elternteil gesetzt ist, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` als nicht vererbbar gesetzt hat, wird der standardmäßige Anfangswert `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("var")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [CSS-Custom-Properties (Variablen) verwenden](/de/docs/Web/CSS/Using_CSS_custom_properties) Leitfaden
- [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
