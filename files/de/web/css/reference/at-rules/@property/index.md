---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sets. Sie ermöglicht es Entwicklerinnen und Entwicklern, [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, wodurch eine Überprüfung und Einschränkung der Eigenschaftstypen, das Festlegen von Standardwerten und die Definition ermöglicht wird, ob eine benutzerdefinierte Eigenschaft vererbt werden kann oder nicht.

Die Regel `@property` stellt eine benutzerdefinierte Eigenschaftenregistrierung direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, was dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnelt.

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
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentypname (wie `<color>`, `<length>` oder `<number>`, etc.) sein, mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator.
    Siehe die [syntax](/de/docs/Web/CSS/Reference/At-rules/@property/syntax) Deskriptor-Seite für weitere Details.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die von `@property` spezifizierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft setzt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die Regel `@property` gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}} als auch den {{cssxref("@property/inherits","inherits")}} Deskriptor enthalten.
  Wenn einer von beiden fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (also `syntax: "*"`).
  Wenn der `initial-value`-Deskriptor erforderlich ist, aber fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}} Deskriptor einen [rechentechnisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne von anderen Werten abhängig zu sein, außer für "globale" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` rechentechnisch unabhängig — es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist auch gültig, da `1in` immer gleich `96px` ist. Allerdings ist `3em` nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des Elternteils abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen die `@property`-Regel jedoch nicht ungültig.

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

Der folgende Code nutzt die CSS-At-Regel `@property`, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und beschränkt die gültigen Werte auf {{cssxref("percentage")}}-Werte. Das bedeutet, dass bei Verwendung als Wert für die Größe eines Elements seine Größe immer relativ zur Größe des Elternteils sein wird. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mithilfe von [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist der At-Regel `@property` gleichwertig. Die Eigenschaft ist so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte akzeptiert und nicht vererbt wird.

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

{{ EmbedLiveSample('Using `@property` to register and use a custom property', '100%', '250px') }}

Die zwei benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf dem Elternelement `container` gesetzt und überschreiben die `40%` und `aqua` Standardwerte, die beim Definieren dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist als vererbbar festgelegt; die Farbe ist es nicht.

Für Element eins wurden keine dieser benutzerdefinierten Eigenschaften gesetzt. Die `--item-size` ist vererbbar, sodass der Wert `20%`, der auf seinem Eltern-`container` gesetzt ist, verwendet wird. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der Wert `orange`, der auf dem Elternteil gesetzt ist, nicht berücksichtigt wird. Stattdessen wird der anfängliche Standardwert `aqua` verwendet.

Für Element zwei sind globale CSS-Schlüsselwörter für beide benutzerdefinierten Eigenschaften gesetzt, die gültige Werte für alle Wertesätze sind und deshalb unabhängig vom `syntax`-Deskriptorwert gültig sind. Die `--item-size` ist auf `initial` gesetzt und verwendet den in der `@property`-Deklaration gesetzten `initial-value: 40%;`. Der `initial`-Wert bedeutet, dass der `initialValue`-Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange`-Wert von ihrem Elternteil, obwohl die benutzerdefinierte Eigenschaft ansonsten so eingestellt ist, dass sie nicht vererbbar ist. Deshalb ist Element zwei orange.

Für Element drei wird der `--item-size`-Wert auf `1000px` gesetzt. Obwohl `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>`-Wert ist, sodass die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass die vererbbare `20%`, die auf den Eltern gesetzt ist, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so eingestellt hat, dass es nicht vererbt wird, wird der Standard-Anfangswert `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

### Animieren eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: sie akzeptiert [`<percentage>`](/de/docs/Web/CSS/Reference/Values/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbstopps in einem {{cssxref("linear-gradient()")}} zu definieren, der angibt, wo eine grüne Farbe endet und schwarz beginnt. Wir animieren dann den Wert von `--progress` zu `100%` über 2,5 Sekunden, was den Effekt einer animierten Fortschrittsleiste ergibt.

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
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
