---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS Custom Properties](/de/docs/Web/CSS/--*) explizit zu definieren, sodass eine Prüfung und Einschränkung der Eigenschaftsarten, die Festlegung von Standardwerten sowie die Definition, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht, möglich ist.

Die `@property`-Regel stellt eine Registrierung für benutzerdefinierte Eigenschaften direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, ähnlich einem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und einem gültigen, benutzerdefinierten Bezeichner folgt. Er ist groß- und kleinschreibungssensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Er kann ein Datentypname sein (wie `<color>`, `<length>` oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator.
    Weitere Details finden Sie auf der [Syntax-Deskriptorseite](/de/docs/Web/CSS/@property/syntax).
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` angegebene Registrierung einer benutzerdefinierten Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Ausgangswert für die Eigenschaft festlegt.

## Beschreibung

Folgende Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl die Deskriptoren {{cssxref("@property/syntax","syntax")}} als auch {{cssxref("@property/inherits","inherits")}} enthalten. Falls einer davon fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der Deskriptor {{cssxref("@property/initial-value","initial-value")}} ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (d.h. `syntax: "*"`). Wenn der `initial-value`-Deskriptor erforderlich ist, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der Deskriptor {{cssxref("@property/initial-value","initial-value")}} einen [computationally independent](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Dies bedeutet, dass der Wert konvertiert werden kann, um einen berechneten Wert zu erhalten, ohne von anderen Werten abhängig zu sein, außer "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel ist `10px` rechnerisch unabhängig — es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer gleich `96px` ist. Jedoch ist `3em` nicht gültig, da der Wert eines `em` von der Elterneigenschaft {{cssxref("font-size")}} abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `@property` zur Registrierung und Verwendung einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente festzulegen.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` at-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft legt den Anfangswert auf `40%` fest und beschränkt die gültigen Werte ausschließlich auf {{cssxref("percentage")}}-Werte. Dies bedeutet, dass bei Verwendung als Wert für die Größe eines Elements die Größe immer relativ zur Größe des Elternelements sein wird. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) entspricht der `@property`-at-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte akzeptiert und nicht vererbt wird.

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

{{ EmbedLiveSample('Verwenden von `@property` zur Registrierung und Verwendung einer benutzerdefinierten Eigenschaft', '100%', '250px') }}

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` werden auf dem `container`-Elternelement gesetzt und überschreiben die Standardwerte `40%` und `aqua`, die festgelegt wurden, als diese benutzerdefinierten Eigenschaften definiert wurden. Die Größe ist vererbbar festgelegt; die Farbe nicht.

Für Element eins wurde keine dieser benutzerdefinierten Eigenschaften festgelegt. Da `--item-size` vererbbar ist, wird der auf seinem übergeordneten `container` festgelegte Wert `20%` verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, daher wird der auf dem Elternteil festgelegte Wert `orange` nicht berücksichtigt. Stattdessen wird der anfängliche Standardwert `aqua` verwendet.

Für Element zwei sind CSS-Globale Schlüsselwörter für beide benutzerdefinierten Eigenschaften festgelegt, die für alle Werttypen gültige Werte darstellen und daher unabhängig vom Wert des `syntax`-Deskriptors gültig sind. Das `--item-size` wird auf `initial` gesetzt und verwendet den in der `@property`-Deklaration festgelegten Wert `initial-value: 40%;`. Der Wert `initial` bedeutet, dass der `initialValue` für die Eigenschaft verwendet wird. Das `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange`-Wert von seinem Elternteil, obwohl die benutzerdefinierte Eigenschaft sonst so eingestellt ist, dass sie nicht vererbt wird. Dies ist der Grund, warum Element zwei orange ist.

Für Element drei wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass das vererbbare `20%` auf dem Elternteil verwendet wird. Der Wert `xyz` ist ebenfalls ungültig. Da `registerProperty()` `--item-color` so festgelegt hat, dass es nicht vererbt wird, wird der Standardanfangswert `aqua` verwendet und nicht der Wert `orange` des Elternelements.

### Animieren eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mithilfe von `@property`: Diese akzeptiert [`<percentage>`](/de/docs/Web/CSS/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbverläufe in einem {{cssxref("linear-gradient()")}} zu definieren, wobei spezifiziert wird, wo eine grüne Farbe endet und schwarz beginnt. Wir animieren dann den Wert von `--progress` über 2,5 Sekunden auf `100%`, was den Effekt einer animierten Fortschrittsanzeige ergibt.

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
- [CSS-Mal-API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typisiertes Objektmodell](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
