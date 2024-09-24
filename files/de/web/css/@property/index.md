---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) APIs. Sie ermöglicht es Entwicklern, ihre [CSS Custom Properties](/de/docs/Web/CSS/--*) explizit zu definieren, was die Überprüfung und Einschränkung von Eigenschaftstypen ermöglicht, Standardwerte setzt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel stellt eine Registrierung benutzerdefinierter Eigenschaften direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, als ob {{domxref('CSS.registerProperty_static', 'registerProperty()')}} mit gleichwertigen Parametern aufgerufen worden wäre.

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

  - : Beschreibt die zulässige Syntax für die Eigenschaft. Kann ein `<length>`, `<number>`, `<percentage>`, `<length-percentage>`, `<color>`, `<image>`, `<url>`, `<integer>`, `<angle>`, `<time>`, `<resolution>`, `<transform-function>` oder `<custom-ident>` sein oder eine Liste von Datentypen und Schlüsselwortwerten.

    Die Multiplikatoren `+` (durch Leerzeichen getrennt) und `#` (durch Kommas getrennt) zeigen an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine durch Kommas getrennte Liste von `<color>`-Werten die erwartete Syntax ist.

    Vertikale Linien (`|`) können "oder"-Bedingungen für die erwartete Syntax erstellen. Zum Beispiel akzeptiert `<length> | auto` entweder ein `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Kommas getrennte Liste von `<color>`-Werten oder eine durch Kommas getrennte Liste von `<integer>`-Werten.

- {{cssxref("@property/inherits","inherits")}}
  - : Bestimmt, ob die durch `@property` spezifizierte Registrierung der benutzerdefinierten Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Legt den Standardwert für die Eigenschaft fest.

Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten; wenn einer fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert. Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist ebenfalls erforderlich, es sei denn, die Syntax ist die [`*` universelle Syntaxdefinition](https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition) (z. B. `syntax: "*"`).
Wenn der `initial-value`-Deskriptor erforderlich und weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen die `@property`-Regel jedoch nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente festzulegen.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` at-rule, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und beschränkt gültige Werte auf {{cssxref("percentage")}}-Werte. Das bedeutet, wenn sie als Wert für die Größe eines Elements verwendet wird, ist ihre Größe immer relativ zur Größe des Elternelements. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode {{domxref('CSS.registerProperty_static', 'registerProperty()')}} ist äquivalent zur `@property` at-rule. Die Eigenschaft ist definiert mit einem Anfangswert von `aqua`, akzeptiert nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte und wird nicht vererbt.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die beiden benutzerdefinierten Eigenschaften, um die Elemente zu gestalten:

```css
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;

  /* Benutzerdefinierte Eigenschaftswerte am Elternteil setzen */
  --item-size: 20%;
  --item-color: orange;
}

/* Benutzerdefinierte Eigenschaften verwenden, um Elementgröße und Hintergrundfarbe zu setzen */
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}

/* Benutzerdefinierte Eigenschaftswerte am Element selbst setzen */
.two {
  --item-size: initial;
  --item-color: inherit;
}

.three {
  /* Ungültige Werte */
  --item-size: 1000px;
  --item-color: xyz;
}
```

{{ EmbedLiveSample('examples', '100%', '250px') }}

Die zwei benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden am darüberliegenden `container` gesetzt und überschreiben die `40%` und `aqua` Standardwerte, die beim Definieren dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist so eingestellt, dass sie vererbbar ist; die Farbe nicht.

Für Element eins sind keine dieser benutzerdefinierten Eigenschaften gesetzt. Da `--item-size` vererbbar ist, wird der Wert `20%`, der am Elternelement `container` gesetzt wurde, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, daher wird der als Standard festgelegte Initialwert `aqua` verwendet.

Für Element zwei sind globale CSS-Schlüsselwörter für beide benutzerdefinierten Eigenschaften festgelegt, die gültige Werte für alle Werttypen sind und daher unabhängig vom `syntax`-Deskriptorwert gültig sind. `--item-size` ist auf `initial` eingestellt und verwendet den `initial-value: 40%;` aus der `@property`-Deklaration. Der Wert `initial` bedeutet, dass der `initialValue`-Wert der Eigenschaft verwendet wird. `--item-color` ist auf `inherit` gesetzt und erbt dadurch explizit den `orange`-Wert vom Elternelement, obwohl die benutzerdefinierte Eigenschaft standardmäßig so eingestellt ist, dass sie nicht vererbt wird. Deshalb ist Element zwei orange.

Für Element drei wird der Wert `--item-size` auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass das vererbbare `20%`, das am Elternelement gesetzt wurde, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so eingestellt hat, dass es nicht vererbt wird, wird der Standardinitialwert `aqua` verwendet und nicht der `orange`-Wert des Elternelements.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("var")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [Leitfaden zur Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) Modul
