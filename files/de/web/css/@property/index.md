---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs)-API. Sie erlaubt es Entwicklern, [CSS-Custom-Properties](/de/docs/Web/CSS/--*) explizit zu definieren, mit der Möglichkeit, den Typ von Eigenschaften zu überprüfen, Einschränkungen festzulegen, Standardwerte zu setzen und zu definieren, ob eine Custom Property Werte erben kann oder nicht.

Die `@property`-Regel stellt eine Registrierung von Custom Properties direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten Custom Property, ähnlich wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit entsprechenden Parametern.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der Custom Property ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und durch einen gültigen, benutzerdefinierten Bezeichner folgt. Der Name ist case-sensitiv (Groß-/Kleinschreibung wird beachtet).

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte Custom Property beschreibt.
    Kann ein Datentyp-Name sein (wie `<color>`, `<length>`, `<number>` usw.) mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes `ident`.
    Siehe die Seite des [syntax](/de/docs/Web/CSS/@property/syntax)-Deskriptors für weitere Details.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein Boolean-Wert, der steuert, ob die durch `@property` angegebene Custom Property standardmäßig Werte erbt.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert der Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}-Deskriptor als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten.
  Wenn einer von beiden fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der `syntax`-Deskriptor die universelle Syntaxdefinition (`syntax: "*"`) verwendet.
  Wenn der `initial-value`-Deskriptor erforderlich ist, aber fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property`, um eine Custom Property zu registrieren und zu verwenden

In diesem Beispiel definieren wir zwei Custom Properties, `--item-size` und `--item-color`, die wir nutzen, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-At-Regel, um eine Custom Property mit dem Namen `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und beschränkt gültige Werte auf {{cssxref("percentage")}}-Werte. Dies bedeutet, dass die Größe eines Elements, wenn sie als Wert verwendet wird, immer relativ zur Größe des Elternelements ist. Die Eigenschaft ist erbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite Custom Property, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) statt CSS. Die [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode von JavaScript ist äquivalent zur `@property`-At-Regel. Die Eigenschaft ist definiert mit einem Anfangswert von `aqua`, akzeptiert nur Werte vom Typ [`<color>`](/de/docs/Web/CSS/color_value), und ist nicht erbbar.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die beiden Custom Properties, um die Elemente zu gestalten:

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

Die beiden Custom Properties `--item-size: 20%` und `--item-color: orange;` werden auf das Elternelement `container` gesetzt und überschreiben die Standardwerte `40%` und `aqua`, die beim Definieren dieser Custom Properties festgelegt wurden. Die Größe ist erbbar; die Farbe nicht.

Für Element eins wurden keine dieser Custom Properties festgelegt. Da `--item-size` erbbar ist, wird der Wert `20%`, der im Elternelement `container` definiert ist, übernommen. Andererseits wird die Eigenschaft `--item-color` nicht vererbt, sodass der Standardanfangswert `aqua` verwendet wird.

Für Element zwei werden globale CSS-Schlüsselwörter für beide Custom Properties gesetzt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom Wert des `syntax`-Deskriptors gültig sind. `--item-size` wird auf `initial` gesetzt und verwendet den `initial-value: 40%;`-Wert, der in der `@property`-Deklaration gesetzt wurde. Der Wert `initial` bedeutet, dass der `initialValue`-Wert der Eigenschaft verwendet wird. `--item-color` wird auf `inherit` gesetzt, wodurch der `orange`-Wert explizit vom Elternelement geerbt wird, auch wenn die Custom Property ansonsten nicht erblich ist. Aus diesem Grund ist Element zwei orange.

Für Element drei wird der Wert `--item-size` auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist. Daher ist diese Deklaration ungültig und wird ignoriert, was bedeutet, dass der erblich gesetzte Wert `20%` auf das Elternelement angewendet wird. Der Wert `xyz` ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so definiert hat, dass es nicht erblich ist, wird der Standardanfangswert `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

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
- [CSS-Custom-Properties verwenden (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
