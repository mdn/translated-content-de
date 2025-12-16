---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, wodurch Typprüfung und Einschränkungen möglich sind, Standardwerte gesetzt werden können und festgelegt wird, ob eine benutzerdefinierte Eigenschaft vererben kann oder nicht.

Die `@property`-Regel stellt eine Registrierung einer benutzerdefinierten Eigenschaft direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten benutzerdefinierten Eigenschaft, die dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnelt.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt. Kann ein Datentyp-Name sein (wie `<color>`, `<length>`, oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes Identifikator. Siehe die [Syntax](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptionsseite für mehr Details.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` angegebene benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Ausgangswert für die Eigenschaft festlegt.

## Beschreibung

Folgende Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss beide Deskriptoren {{cssxref("@property/syntax","syntax")}} und {{cssxref("@property/inherits","inherits")}} enthalten. Wenn einer fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der Deskriptor {{cssxref("@property/initial-value","initial-value")}} ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (das heißt, `syntax: "*"`). Wenn der `initial-value`-Deskriptor erforderlich ist, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der Deskriptor {{cssxref("@property/initial-value","initial-value")}} einen [rechenschaftsunabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne von anderen Werten abhängig zu sein, mit Ausnahme von "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel ist `10px` rechenschaftsunabhängig—it ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer gleichbedeutend mit `96px` ist. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} der Eltern abhängig ist.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen die `@property`-Regel aber nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property` zum Registrieren und Verwenden einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-At-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft legt den Anfangswert auf `40%` fest und beschränkt gültige Werte nur auf {{cssxref("percentage")}}-Werte. Das bedeutet, wenn sie als Wert für die Größe eines Elements verwendet wird, ist ihre Größe immer relativ zur Größe des Elternteils. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property`-At-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, um nur {{cssxref("&lt;color&gt;")}}-Werte zu akzeptieren und nicht vererbt wird.

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

{{ EmbedLiveSample('Verwendung von `@property` zum Registrieren und Verwenden einer benutzerdefinierten Eigenschaft', '100%', '250px') }}

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;`, werden auf dem `container`-Elternteil gesetzt und überschreiben die Standardwerte `40%` und `aqua`, die festgelegt wurden, als diese benutzerdefinierten Eigenschaften definiert wurden. Die Größe ist vererbbar festgelegt; die Farbe nicht.

Bei Element eins sind keine dieser benutzerdefinierten Eigenschaften gesetzt. Das `--item-size` ist vererbbar, daher wird der Wert `20%`, der auf seinem Elternteil `container` gesetzt ist, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, daher wird der auf dem Elternteil gesetzte Wert `orange` nicht berücksichtigt. Stattdessen wird der standardmäßige Anfangswert `aqua` verwendet.

Für Element zwei sind CSS-Globale Schlüsselwörter für beide benutzerdefinierten Eigenschaften gesetzt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom Wert des `syntax`-Deskriptors gültig sind. Das `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`-Wert, der in der `@property`-Erklärung festgelegt ist. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Das `--item-color` ist auf `inherit` gesetzt, erbt explizit den `orange`-Wert von seinem Elternteil, auch wenn die benutzerdefinierte Eigenschaft nicht vererbt werden soll. Aus diesem Grund ist Element zwei orange.

Für Element drei wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Erklärung, dass der Wert ein `<percentage>` ist, sodass die Erklärung ungültig ist und ignoriert wird, was bedeutet, dass das vererbbare `20%`, das auf dem Eltern festgelegt ist, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` auf nicht vererbbar gesetzt hat, wird der standardmäßige Anfangswert von `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

### Animieren eines benutzerdefinierten Eigenschaftswertes

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: Diese akzeptiert {{cssxref("percentage")}}-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbstopps in einem {{cssxref("linear-gradient()")}} zu definieren, der angibt, wo eine grüne Farbe endet und schwarz beginnt. Wir animieren dann den Wert von `--progress` auf `100%` über 2,5 Sekunden, was den Effekt hat, eine Fortschrittsleiste zu animieren.

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
- [Benutzerdefinierte CSS-Eigenschaften (Variablen) verwenden](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadierungsvariablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
