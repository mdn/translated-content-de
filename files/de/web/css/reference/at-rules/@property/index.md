---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Die **`@property`**-Regel in [CSS](/de/docs/Web/CSS) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) APIs. Sie erlaubt es Entwicklern, [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was die Überprüfung und Einschränkung von Eigenschaftstypen ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel repräsentiert eine Registrierung benutzerdefinierter Eigenschaften direkt in einem Stylesheet, ohne dass zusätzlich JavaScript ausgeführt werden muss. Gültige `@property`-Regeln führen zu einer registrierten benutzerdefinierten Eigenschaft, die einem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern ähnelt.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Es kann ein Datentyp sein (wie zum Beispiel `<color>`, `<length>`, oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes Ident.
    Für weitere Informationen siehe die [syntax](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptorseite.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` spezifizierte Registrierung der benutzerdefinierten Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Anfangswert für die Eigenschaft setzt.

## Beschreibung

Folgende Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}} als auch den {{cssxref("@property/inherits","inherits")}} Deskriptor enthalten.
  Falls einer fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (das heißt, `syntax: "*"`).
  Wenn der `initial-value` Deskriptor erforderlich ist, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Falls der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ein [rechnerisch unabhängiger](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert sein.
  Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, außer von "globalen" Definitionen, die unabhängig von CSS sind.
  Beispielsweise ist `10px` rechnerisch unabhängig—es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, weil `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der übergeordneten {{cssxref("font-size")}} abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen aber die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von `@property` zur Registrierung und Verwendung einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir nutzen, um die Größe (Breite und Höhe) und Hintergrundfarbe der folgenden drei Items zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property` At-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` fest und begrenzt gültige Werte auf {{cssxref("percentage")}} Werte. Dies bedeutet, dass bei Verwendung als Wert für die Größe eines Items, seine Größe immer relativ zur Größe seines Elternteils sein wird. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) statt CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist gleichwertig zur `@property` At-Regel. Die Eigenschaft wird definiert, einen Anfangswert von `aqua` zu haben, nur {{cssxref("&lt;color&gt;")}} Werte zu akzeptieren und nicht vererbt zu werden.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Wir verwenden die beiden benutzerdefinierten Eigenschaften, um die Items zu stylen:

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

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;`, werden auf dem Eltern-Element `container` gesetzt und überschreiben die Standardwerte `40%` und `aqua`, die beim Definieren dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist so gesetzt, dass sie vererbbar ist; die Farbe nicht.

Für das erste Item sind keine dieser benutzerdefinierten Eigenschaften gesetzt. Der `--item-size` ist vererbbar, sodass der Wert `20%`, der auf seinem Eltern-Element `container` gesetzt ist, verwendet wird. Andererseits wird die Eigenschaft `--item-color` nicht vererbt, sodass der Wert `orange`, der auf dem Eltern-Element gesetzt ist, nicht berücksichtigt wird. Stattdessen wird der Standardanfangswert `aqua` verwendet.

Für das zweite Item sind CSS-Globale-Schlüsselwörter für beide benutzerdefinierte Eigenschaften gesetzt, die gültige Werte für alle Wertetypen und daher unabhängig vom `syntax`-Deskriptorwert gültig sind. Der `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration festgelegt wurde. Der `initial`-Wert bedeutet, dass der `initialValue` Wert für die Eigenschaft verwendet wird. Der `--item-color` ist auf `inherit` gesetzt, und erbt explizit den `orange` Wert von seinem Elternteil, obwohl die benutzerdefinierte Eigenschaft standardmäßig nicht vererbt werden soll. Deshalb ist das zweite Item orange.

Für das dritte Item wird der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}} Wert ist, erfordert die `@property` Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration nicht gültig ist und ignoriert wird, was bedeutet, dass der vererbbare `20%`, der auf dem Elternteil gesetzt ist, verwendet wird. Der Wert `xyz` ist ebenfalls ungültig. Da `registerProperty()` festgelegt hat, dass `--item-color` nicht vererbt wird, wird der Standardanfangswert `aqua` verwendet und nicht der `orange` Wert des Elternteils.

### Animieren eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: Diese akzeptiert {{cssxref("percentage")}} Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbverläufe in einem {{cssxref("gradient/linear-gradient")}} zu definieren, der spezifiziert, wo eine grüne Farbe aufhört und schwarz beginnt. Dann animieren wir den Wert von `--progress` zu `100%` über 2,5 Sekunden, was den Effekt einer animierten Fortschrittsanzeige erzeugt.

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
- [CSS-Eigenschaften und -Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [Den CSS-Leitfaden zur Verwendung benutzerdefinierter Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [CSS benutzerdefinierte Eigenschaften für Kaskadierungsvariablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
