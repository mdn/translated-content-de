---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@property`**-Regel (engl. *at-rule*) von [CSS](/de/docs/Web/CSS) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) APIs. Sie erlaubt es Entwicklern, [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, indem Typüberprüfung und Einschränkungen ermöglicht werden. Zudem können Standardwerte gesetzt und festgelegt werden, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel ermöglicht die Registrierung einer benutzerdefinierten Eigenschaft direkt in einem Stylesheet, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten benutzerdefinierten Eigenschaft, die dem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern ähnelt.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt, gefolgt von einem gültigen, benutzerdefinierten Bezeichner. Er ist groß-/klein-schreibungssensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Es kann ein Datentypname (wie `<color>`, `<length>` oder `<number>` usw.) sein, mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes ident sein.
    Siehe die [syntax](/de/docs/Web/CSS/Reference/At-rules/@property/syntax) Deskriptorseite für mehr Details.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` spezifizierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft setzt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}} als auch den {{cssxref("@property/inherits","inherits")}} Deskriptor enthalten.
  Fehlt einer von beiden, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax` Deskriptors die universelle Syntaxdefinition ist (also `syntax: "*"`).
  Wenn der `initial-value` Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax` Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ein [computationally independent](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert sein.
  Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne dass er von anderen Werten abhängt, außer von "globalen" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` rechnerisch unabhängig—es ändert sich nicht bei der Umwandlung in einen berechneten Wert. `2in` ist auch gültig, da `1in` immer gleich `96px` ist. `3em` ist jedoch nicht gültig, da der Wert von `em` von der übergeordneten {{cssxref("font-size")}} abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, aber sie machen die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `@property`, um eine benutzerdefinierte Eigenschaft zu registrieren und zu verwenden

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften: `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property`-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%`, wobei gültige Werte auf {{cssxref("percentage")}}-Werte beschränkt werden. Das bedeutet, dass die Größe eines Elements immer relativ zur Größe seines Elternteils ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, mithilfe von [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) entspricht der `@property`-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte akzeptiert und nicht vererbt wird.

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

{{ EmbedLiveSample('Verwenden von `@property`, um eine benutzerdefinierte Eigenschaft zu registrieren und zu verwenden', '100%', '250px') }}

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf dem übergeordneten `container`-Element gesetzt und überschreiben die `40%` und `aqua`-Standardwerte, die beim Definieren dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist vererbbar; die Farbe nicht.

Für Artikel eins wurde keine dieser benutzerdefinierten Eigenschaften gesetzt. Da `--item-size` vererbbar ist, wird der Wert `20%`, der auf dem übergeordneten `container` gesetzt ist, verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der auf dem Elternteil gesetzte Wert `orange` nicht berücksichtigt wird. Stattdessen wird der Standardanfangswert `aqua` verwendet.

Für Artikel zwei werden CSS-Globale Schlüsselwörter für beide benutzerdefinierten Eigenschaften eingestellt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom Wert des `syntax` Deskriptors gültig sind. `--item-size` wird auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration gesetzt ist. Der `initial` Wert bedeutet, dass der `initialValue` Wert für die Eigenschaft verwendet wird. `--item-color` wird auf `inherit` gesetzt und erbt explizit den `orange` Wert von seinem Elternteil, obwohl die benutzerdefinierte Eigenschaft so eingestellt ist, dass sie sonst nicht vererbt wird. Deshalb ist Artikel zwei orange.

Für Artikel drei wird der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, verlangt die `@property`-Deklaration, dass der Wert ein `<percentage>` ist. Daher ist die Deklaration nicht gültig und wird ignoriert, was bedeutet, dass die vererbbare `20%`, die auf dem Elternteil gesetzt ist, verwendet wird. Der `xyz` Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so eingestellt hat, dass es nicht vererbt wird, wird der Standardanfangswert von `aqua` verwendet und nicht der `orange` Wert des Elternteils.

### Animieren eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: Diese akzeptiert [`<percentage>`](/de/docs/Web/CSS/Reference/Values/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbverläufe in einem {{cssxref("linear-gradient()")}} zu definieren, der angibt, wo eine grüne Farbe stoppt und schwarz beginnt. Dann animieren wir den Wert von `--progress` auf `100%` über 2,5 Sekunden, wodurch der Effekt einer animierten Fortschrittsanzeige entsteht.

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

{{ EmbedLiveSample('Animieren eines benutzerdefinierten Eigenschaftswerts', '100%', '60px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("var")}}
- [CSS-Eigenschaften und Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Malerei-API](/de/docs/Web/API/CSS_Painting_API)
- [CSS-typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [CSS Custom Properties (Variablen) verwenden](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
