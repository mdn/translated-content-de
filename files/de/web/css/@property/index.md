---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`@property`**- [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren. Dadurch kann die Eigenschaft auf Typüberprüfung und Einschränkungen überprüft werden, Standardwerte können festgelegt werden und es kann definiert werden, ob eine Benutzereigenschaft Werte erben kann oder nicht.

Die `@property`-Regel stellt eine Registrierung benutzerdefinierter Eigenschaften direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten Benutzereigenschaft, die ähnlich wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit entsprechenden Parametern ist.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und einem gültigen, benutzerdefinierten Bezeichner folgt. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentyp-Name (wie `<color>`, `<length>` oder `<number>`, etc.) sein, mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`) oder ein benutzerdefinierter Identifikator.
    Details siehe die [Beschreibung des Syntax-Deskriptors](/de/docs/Web/CSS/@property/syntax).
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die benutzerdefinierte Eigenschaftsregistrierung, die von `@property` angegeben wird, standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten.
  Wenn einer davon fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (d.h. `syntax: "*"`).
  Wenn der `initial-value`-Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [unabhängig berechenbaren](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Dies bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abzuhängen, mit Ausnahme von "globalen" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` unabhängig berechenbar—es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist auch gültig, weil `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, weil der Wert eines `em` von der `{{cssxref("font-size")}}` des Elternteils abhängig ist.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, aber sie machen die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property`, um eine benutzerdefinierte Eigenschaft zu registrieren und zu verwenden

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-At-Regel, um eine benutzerdefinierte Eigenschaft mit dem Namen `--item-size` zu definieren. Die Eigenschaft legt den Anfangswert auf `40%` fest und beschränkt gültige Werte nur auf {{cssxref("percentage")}}-Werte. Das bedeutet, dass die Größe eines Elements, wenn es als Wert verwendet wird, immer relativ zur Größe des Elternelements ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist gleichwertig zur `@property`-At-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte akzeptiert und nicht vererbt wird.

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

{{ EmbedLiveSample('Verwendung von `@property`, um eine benutzerdefinierte Eigenschaft zu registrieren und zu verwenden', '100%', '250px') }}

Die beiden benutzerdefinierten Eigenschaften `--item-size: 20%` und `--item-color: orange;` werden auf dem übergeordneten `container`-Element gesetzt und überschreiben die `40%` und `aqua` Standardwerte, die definiert wurden, als diese benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist vererbbar; die Farbe jedoch nicht.

Für das erste Element wurden keine dieser benutzerdefinierten Eigenschaften gesetzt. Die `--item-size` ist vererbbar, daher wird der auf dem Eltern-`container` gesetzte Wert `20%` verwendet. Die Eigenschaft `--item-color` ist hingegen nicht vererbbar, daher wird der auf dem Eltern gesetzte Wert `orange` nicht berücksichtigt. Stattdessen wird der Standardanfangswert `aqua` verwendet.

Für das zweite Element werden für beide benutzerdefinierten Eigenschaften CSS-Globale Schlüsselwörter gesetzt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom Wert des `syntax`-Deskriptors gültig sind. Die `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration festgelegt wurde. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange`-Wert von ihrem Eltern, obwohl die benutzerdefinierte Eigenschaft so gesetzt ist, dass sie sonst nicht vererbt wird. Daher ist das zweite Element orange.

Für das dritte Element wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, daher ist die Deklaration ungültig und wird ignoriert, was bedeutet, dass das vererbbare `20%`, das auf dem Eltern gesetzt ist, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` auf nicht vererbbar gesetzt hat, wird der Standardanfangswert von `aqua` verwendet und nicht der `orange`-Wert des Eltern.

### Animieren eines benutzerdefinierten Eigenschaftswertes

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: diese akzeptiert [`<percentage>`](/de/docs/Web/CSS/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress` zur Definition des Positionswertes der Farbstops in einem {{cssxref("linear-gradient()")}}, der angibt, wo eine grüne Farbe endet und schwarz beginnt. Wir animieren dann den Wert von `--progress` auf `100%` über 2,5 Sekunden, was den Effekt eines animierten Fortschrittsbalkens gibt.

```html
<div class="bar"></div>
```

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

{{ EmbedLiveSample('Animieren eines benutzerdefinierten Eigenschaftswertes', '100%', '60px') }}

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
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
