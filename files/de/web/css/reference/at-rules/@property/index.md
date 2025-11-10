---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, wodurch eine Typüberprüfung und Einschränkung der Eigenschaften ermöglicht wird, Standardwerte festgelegt werden können und definiert werden kann, ob eine benutzerdefinierte Eigenschaft vererbt werden kann oder nicht.

Die `@property`-Regel stellt eine benutzerdefinierte Eigenschaften-Registrierung direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, die dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnlich ist.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt. Kann ein Datentypname sein (wie `<color>`, `<length>` oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator.
    Siehe die [Seite zum Syntax-Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@property/syntax) für mehr Details.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die benutzerdefinierte Eigenschaftsregistrierung, die durch `@property` angegeben wird, standardmäßig vererbbar ist.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Ausgangswert für die Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten. Wenn einer von beiden fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (also `syntax: "*"`). Wenn der `initial-value`-Deskriptor erforderlich ist, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, außer von "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel ist `10px` rechnerisch unabhängig—es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, weil der Wert eines `em` von der {{cssxref("font-size")}} des Elternelements abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, führen aber nicht zur Ungültigkeit der `@property`-Regel.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property` zur Registrierung und Nutzung einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-At-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%`, wobei gültige Werte auf {{cssxref("percentage")}}-Werte beschränkt sind. Das bedeutet, dass, wenn sie als Wert für die Größe eines Elements verwendet wird, die Größe immer relativ zur Größe des Elternelements ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property`-At-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte akzeptiert und nicht vererbbar ist.

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

{{ EmbedLiveSample('Using `@property` to register and use a custom property', '100%', '250px') }}

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf dem `container`-Elternelement gesetzt, was die `40%` und `aqua`-Standardwerte überschreibt, die festgelegt wurden, als diese benutzerdefinierten Eigenschaften definiert wurden. Die Größe ist so eingestellt, dass sie vererbbar ist; die Farbe nicht.

Für Element eins wurden keine dieser benutzerdefinierten Eigenschaften gesetzt. Die `--item-size` ist vererbbar, daher wird der Wert `20%`, der auf ihrem Elternelement `container` gesetzt wurde, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der auf dem Elternelement gesetzte `orange`-Wert nicht berücksichtigt wird. Stattdessen wird der anfängliche Standardwert `aqua` verwendet.

Für Element zwei sind globale CSS-Schlüsselwörter für beide benutzerdefinierten Eigenschaften festgelegt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom Wert des `syntax`-Deskriptors gültig sind. Die `--item-size` wird auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration festgelegt ist. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Die `--item-color` wird auf `inherit` gesetzt, was explizit den `orange`-Wert von ihrem Elternelement erbt, obwohl die benutzerdefinierte Eigenschaft sonst nicht vererbt werden soll. Das ist der Grund, warum Element zwei orange ist.

Für Element drei wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration nicht gültig ist und ignoriert wird, was bedeutet, dass das vererbbare `20%`, das auf dem Elternelement gesetzt wurde, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so setzt, dass es nicht vererbbar ist, wird der anfängliche Standardwert `aqua` verwendet und nicht der `orange`-Wert des Elternelements.

### Eine benutzerdefinierte Eigenschaft animieren

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: diese akzeptiert [`<percentage>`](/de/docs/Web/CSS/Reference/Values/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbstopps in einem {{cssxref("linear-gradient()")}} zu definieren, wobei wir angeben, wo eine grüne Farbe stoppt und Schwarz beginnt. Wir animieren dann den Wert von `--progress` auf `100%` über 2,5 Sekunden, was den Effekt einer animierten Fortschrittsleiste gibt.

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

{{ EmbedLiveSample('Animating a custom property value', '100%', '60px') }}

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
- [Anleitung zur Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadierungsvariablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
