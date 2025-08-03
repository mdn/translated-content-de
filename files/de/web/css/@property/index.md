---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 16efed0a3f70be8b7046fc9097338a453b8edbca
---

Die **`@property`**-Regel ([CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule)) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) APIs. Sie ermöglicht es Entwicklern, [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, was das Überprüfen und Einschränken von Eigenschaftstypen, das Festlegen von Standardwerten sowie das Definieren, ob eine Benutzereigenschaft vererbbar ist, erlaubt.

Die `@property`-Regel stellt eine Benutzereigenschaftsregistrierung direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten Benutzereigenschaft, ähnlich wie bei einem Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit entsprechenden Parametern.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und auf einen gültigen, benutzerdefinierten Bezeichner folgt. Es wird zwischen Groß- und Kleinschreibung unterschieden.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Werttypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentypname sein (wie `<color>`, `<length>`, oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator.
    Weitere Informationen finden Sie auf der Seite zum [Syntax](/de/docs/Web/CSS/@property/syntax)-Deskriptor.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die von `@property` spezifizierte Benutzereigistrierung standardmäßig vererbbar ist.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Anfangswert für die Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten.
  Wenn einer von beiden fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (d.h. `syntax: "*"`).
  Wenn der `initial-value`-Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, außer von "globalen" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` rechnerisch unabhängig – es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist auch gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des übergeordneten Elements abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen aber die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property` zur Registrierung und Nutzung einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der folgenden drei Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS-`@property`-At-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft legt den Anfangswert auf `40%` fest und beschränkt gültige Werte auf {{cssxref("prozent")}}-Werte. Das bedeutet, dass sie bei Verwendung als Wert für die Größe eines Elements immer relativ zur Größe seines Elternelements sein wird. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) statt CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property`-At-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte akzeptiert und nicht vererbart wird.

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

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;`, werden auf dem übergeordneten `container` festgelegt und überschreiben die Standardwerte `40%` und `aqua`, die bei der Definition dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist vererbbar; die Farbe nicht.

Für das erste Element wurden keine dieser benutzerdefinierten Eigenschaften festgelegt. Die `--item-size` ist vererbbar, sodass der auf ihrem Elternteil `container` festgelegte Wert `20%` verwendet wird. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, sodass der auf dem Elternteil festgelegte Wert `orange` nicht berücksichtigt wird. Stattdessen wird der Standard-Anfangswert `aqua` verwendet.

Für das zweite Element sind CSS-Globale Schlüsselwörter für beide benutzerdefinierten Eigenschaften festgelegt, die gültige Werte für alle Werttypen sind und daher unabhängig vom Wert des `syntax`-Deskriptors gültig. Die `--item-size` ist auf `initial` gesetzt und verwendet den `initial-value: 40%;`, der in der `@property`-Deklaration festgelegt ist. Der Wert `initial` bedeutet, dass der `initialValue`-Wert der Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange` Wert von ihrem Elternteil, obwohl die benutzerdefinierte Eigenschaft so eingestellt ist, dass sie ansonsten nicht vererbt wird. Deshalb ist das zweite Element orange.

Für das dritte Element wird der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("Länge")}}-Wert ist, verlangt die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass das vererbliche `20%`, das auf dem Elternteil festgelegt ist, verwendet wird. Der `xyz`-Wert ist ebenfalls ungültig. Da `registerProperty()` `--item-color` nicht vererbbar gesetzt hat, wird der Standard-Anfangswert `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

### Animieren eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: diese akzeptiert [`<percentage>`](/de/docs/Web/CSS/percentage)-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um die Positionswerte der Farbabschnitte in einem {{cssxref("linear-gradient()")}} festzulegen, bei dem eine grüne Farbe aufhört und schwarz beginnt. Anschließend animieren wir den Wert von `--progress` zu `100%` über 2,5 Sekunden, was den Effekt hat, eine Fortschrittsbalken-Animation zu erzeugen.

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
    #000000 var(--progress)
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
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Leitfaden
- [CSS-Benutzereigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
