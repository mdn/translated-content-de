---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 6834ad69f8844894e0578ea06375e3e1e1e17e73
---

{{CSSRef}}

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sets. Sie ermöglicht Entwicklern, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, was eine Überprüfung und Einschränkung des Eigenschaftstyps, das Setzen von Standardwerten und die Definition ermöglicht, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel stellt eine benutzerdefinierte Eigenschaftsregistrierung direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten benutzerdefinierten Eigenschaft, die dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnelt.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und einem gültigen, benutzerdefinierten Bezeichner folgt. Er ist case-sensitive.

### Deskriptoren

- {{cssxref("@property/syntax", "syntax")}}
  - : Ein String, der die erlaubten Werttypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentypname sein (wie `<color>`, `<length>` oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator.
    Weitere Informationen finden Sie auf der Seite des [syntax](/de/docs/Web/CSS/@property/syntax) Deskriptors.
- {{cssxref("@property/inherits", "inherits")}}
  - : Ein boolescher Wert, der steuert, ob die von `@property` spezifizierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value", "initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax", "syntax")}} als auch den {{cssxref("@property/inherits", "inherits")}} Deskriptor enthalten.
  Fehlt einer von beiden, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value", "initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (d.h. `syntax: "*"`).
  Wenn der `initial-value` Deskriptor gefordert ist, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property` zur Registrierung und Nutzung einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir nutzen, um die Größe (Breite und Höhe) und die Hintergrundfarbe der folgenden drei Elemente festzulegen.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` at-rule, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und beschränkt gültige Werte auf {{cssxref("percentage")}} Werte. Das bedeutet, dass, wenn diese Eigenschaft für die Größe eines Elements verwendet wird, ihre Größe immer relativ zur Größe des übergeordneten Elements ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property` at-rule. Die Eigenschaft wird definiert, um einen Anfangswert von `aqua` zu haben, akzeptiert nur [`<color>`](/de/docs/Web/CSS/color_value) Werte und wird nicht vererbt.

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

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf dem Elternteil `container` gesetzt und überschreiben die `40%` und `aqua` Standardwerte, die beim Definieren dieser benutzerdefinierten Eigenschaften gesetzt wurden. Die Größe ist als vererbbar festgelegt, die Farbe nicht.

Für das erste Element sind keine dieser benutzerdefinierten Eigenschaften gesetzt. Die `--item-size` ist vererbbar, daher wird der Wert `20%`, der auf seinem Elternteil `container` gesetzt wurde, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der Wert `orange`, der auf dem Elternteil gesetzt ist, nicht berücksichtigt wird. Stattdessen wird der Standardanfangswert `aqua` verwendet.

Für das zweite Element sind für beide benutzerdefinierten Eigenschaften CSS-Globalschlüsselwörter gesetzt, die gültige Werte für alle Werttypen sind und daher gültig sind, unabhängig vom Wert des `syntax` Deskriptors. Die `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property` Deklaration gesetzt wurde. Der `initial` Wert bedeutet, dass der `initialValue` Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange` Wert von ihrem Elternteil, obwohl die benutzerdefinierte Eigenschaft standardmäßig nicht vererbt wird. Deshalb ist das zweite Element orange.

Für das dritte Element wird der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}} Wert ist, erfordert die `@property` Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig ist und ignoriert wird. Das bedeutet, dass der vererbbare `20%`, der auf dem Elternteil gesetzt ist, verwendet wird. Der `xyz` Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` auf nicht vererbbar gesetzt hat, wird der Standardanfangswert `aqua` verwendet und nicht der `orange` Wert des Elternteils.

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
- [Using CSS custom properties (variables)](/de/docs/Web/CSS/Using_CSS_custom_properties) Leitfaden
- [CSS custom properties for cascading variables](/de/docs/Web/CSS/CSS_cascading_variables) Modul
