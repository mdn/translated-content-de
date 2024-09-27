---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Rahmens von APIs. Sie ermöglicht es Entwicklern, ihre [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren. Dadurch können Eigenschaften-Typprüfungen und Einschränkungen vorgenommen, Standardwerte festgelegt und definiert werden, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel stellt eine Registrierung einer benutzerdefinierten Eigenschaft direkt in einem Stylesheet dar, ohne dass dafür JS ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten benutzerdefinierten Eigenschaft, so als ob [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern aufgerufen worden wäre.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

### Deskriptoren

- {{cssxref("@property/syntax","Syntax")}}

  - : Beschreibt die zulässige Syntax für die Eigenschaft. Kann ein `<length>`, `<number>`, `<percentage>`, `<length-percentage>`, `<color>`, `<image>`, `<url>`, `<integer>`, `<angle>`, `<time>`, `<resolution>`, `<transform-function>` oder `<custom-ident>` sein oder eine Liste von Datentypen und Schlüsselwortwerten.

    Die Multiplikatoren `+` (durch Leerzeichen getrennt) und `#` (durch Kommas getrennt) geben an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine durch Kommas getrennte Liste von `<color>`-Werten die erwartete Syntax ist.

    Vertikale Linien (`|`) können "oder"-Bedingungen für die erwartete Syntax erstellen, zum Beispiel akzeptiert `<length> | auto` entweder eine `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Kommas getrennte Liste von `<color>`-Werten oder eine durch Kommas getrennte Liste von `<integer>`-Werten.

- {{cssxref("@property/inherits","inherits")}}
  - : Steuert, ob die durch `@property` spezifizierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Legt den Anfangswert für die Eigenschaft fest.

Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","Syntax")}}-Deskriptor als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten; wenn einer von beiden fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist ebenfalls erforderlich, es sei denn, die Syntax ist die [`*` universelle Syntaxdefinition](https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition) (z.B. `syntax: "*"`).
Wenn der `initial-value`-Deskriptor erforderlich und ausgelassen ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir nutzen werden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und begrenzt gültige Werte nur auf {{cssxref("percentage")}}-Werte. Das bedeutet, wenn diese als Wert für die Größe eines Elements verwendet wird, ist die Größe immer relativ zur Größe des übergeordneten Elements. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstatt mit CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property`-Regel. Die Eigenschaft wird definiert mit einem Anfangswert `aqua`, um nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte zu akzeptieren, und wird nicht vererbt.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die zwei benutzerdefinierten Eigenschaften, um die Elemente zu stylen:

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

Die zwei benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf das `container`-Elternelement gesetzt, wodurch die Standardwerte `40%` und `aqua`, die beim Definieren dieser benutzerdefinierten Eigenschaften festgelegt wurden, überschrieben werden. Die Größe ist so eingestellt, dass sie vererbbar ist; die Farbe nicht.

Für Element eins wurden keine dieser benutzerdefinierten Eigenschaften gesetzt. Das `--item-size` ist vererbbar, sodass der Wert `20%`, der auf seinen übergeordneten `container` gesetzt wurde, verwendet wird. Andererseits wird die Eigenschaft `--item-color` nicht vererbt, sodass der auf das Elternelement gesetzte Wert `orange` nicht berücksichtigt wird. Stattdessen wird der Standardanfgangswert `aqua` verwendet.

Für Element zwei sind CSS-Globale Schlüsselwörter für beide benutzerdefinierten Eigenschaften gesetzt, die gültige Werte für alle Werttypen sind und daher gültig, unabhängig vom `syntax`-Deskriptorwert. Das `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration gesetzt wurde. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Das `--item-color` ist auf `inherit` gesetzt, was den `orange`-Wert explizit vom übergeordneten Objekt erbt, obwohl die benutzerdefinierte Eigenschaft ansonsten nicht vererbt wird. Aus diesem Grund ist Element zwei orange.

Für Element drei wird der Wert `--item-size` auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, daher ist die Deklaration ungültig und wird ignoriert, was bedeutet, dass das vererbbare `20%`, das auf das übergeordnete Element gesetzt wurde, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so eingestellt hat, dass es nicht vererbt wird, wird der Standard-Anfangswert `aqua` verwendet und nicht der `orange`-Wert des Eltern.

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
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
