---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 5be0cd7ad28c5b4d0bd31d8d17d28574ad342423
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, was das Überprüfen und Einschränken von Eigenschaftstypen, das Setzen von Standardwerten und das Festlegen, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht, erlaubt.

Die `@property` Regel repräsentiert eine Registrierung benutzerdefinierter Eigenschaften direkt in einem Stylesheet, ohne dass JavaScript ausgeführt werden muss. Gültige `@property` Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, was dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnelt.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentypname (wie `<color>`, `<length>` oder `<number>`, etc.) mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`) oder ein benutzerdefiniertes Ident sein.
    Weitere Details finden Sie auf der Seite zum [Syntax](/de/docs/Web/CSS/@property/syntax) Deskriptor.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` registrierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Anfangswert für die Eigenschaft setzt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property` Regel gültig ist:

- Die `@property` Regel muss sowohl die {{cssxref("@property/syntax","syntax")}} als auch die {{cssxref("@property/inherits","inherits")}} Deskriptoren enthalten.
  Fehlt einer von beiden, ist die gesamte `@property` Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax` Deskriptors die universelle Syntaxdefinition ist (also `syntax: "*"`).
  Wenn der `initial-value` Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property` Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax` Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}} Deskriptor einen [rechenunabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, abgesehen von "globalen" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` rechnerisch unabhängig—es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer 96px entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` vom Elternelement abhängt {{cssxref("font-size")}}.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen aber die `@property` Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `@property` zum Registrieren und Verwenden einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden werden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` at-rule, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%`, begrenzt gültige Werte nur auf {{cssxref("percentage")}} Werte. Das bedeutet, wenn sie als Wert für die Größe eines Elements verwendet wird, ist ihre Größe immer relativ zur Größe des übergeordneten Elements. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property` at-rule. Die Eigenschaft ist so definiert, dass sie einen anfänglichen Wert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value) Werte akzeptiert und nicht vererbt wird.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die beiden benutzerdefinierten Eigenschaften, um die Elemente zu stylen:

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

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` sind auf dem `container`-Element gesetzt, wodurch die `40%` und `aqua` Standardwerte überschrieben werden, die bei der Definition dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist so eingestellt, dass sie vererbbar ist; die Farbe ist es nicht.

Für Element eins sind keine dieser benutzerdefinierten Eigenschaften eingestellt. Die `--item-size` ist vererbbar, sodass der Wert `20%`, der auf seinem übergeordneten `container` gesetzt ist, verwendet wird. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der auf dem übergeordneten Element gesetzte Wert `orange` nicht berücksichtigt wird. Stattdessen wird der Standardanfangswert `aqua` verwendet.

Für Element zwei sind die globalen CSS-Schlüsselwörter für beide benutzerdefinierten Eigenschaften gesetzt, die für alle Wertetypen gültige Werte sind und daher unabhängig vom Wert des `syntax` Deskriptor gültig sind. Die `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;` in der `@property`-Deklaration gesetzt. Der `initial` Wert bedeutet, dass der `initialValue` Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt, erbt explizit den `orange` Wert von ihrem übergeordneten Element, obwohl die benutzerdefinierte Eigenschaft sonst nicht vererbt werden soll. Deshalb ist Element zwei orange.

Für Element drei wird der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}} Wert ist, erfordert die `@property` Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration nicht gültig ist und ignoriert wird, was bedeutet, dass das vererbbare `20%`, das auf dem übergeordneten Element gesetzt ist, verwendet wird. Der `xyz` Wert ist ebenfalls ungültig. Da `registerProperty()` festgelegt hat, dass `--item-color` nicht vererbt wird, wird der Standardanfangswert `aqua` verwendet und nicht der `orange` Wert des übergeordneten Elements.

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
- [Using CSS custom properties (variables)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) Modul
