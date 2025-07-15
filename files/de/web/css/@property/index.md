---
title: "@property"
slug: Web/CSS/@property
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Suite. Sie ermöglicht es Entwicklern, [CSS Custom Properties](/de/docs/Web/CSS/--*) explizit zu definieren, wodurch Eigenschaftsprüfungen und Einschränkungen, das Setzen von Standardwerten und die Definition, ob eine benutzerdefinierte Eigenschaft vererbt werden kann oder nicht, möglich sind.

Die `@property`-Regel stellt eine Registrierung einer benutzerdefinierten Eigenschaft direkt in einem Stylesheet dar, ohne dass JavaScript ausgeführt werden muss. Gültige `@property`-Regeln resultieren in einer registrierten benutzerdefinierten Eigenschaft, ähnlich wie das Aufrufen von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit äquivalenten Parametern.

## Syntax

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
    Kann ein Datentyp-Name sein (wie `<color>`, `<length>` oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes Identifikationsmittel. Weitere Details finden Sie auf der Seite des [syntax](/de/docs/Web/CSS/@property/syntax)-Deskriptors.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein Boolescher Wert, der steuert, ob die durch `@property` festgelegte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft festlegt.

## Beschreibung

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl die {{cssxref("@property/syntax","syntax")}} als auch die {{cssxref("@property/inherits","inherits")}} Deskriptoren enthalten.
  Fehlt einer davon, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (d.h. `syntax: "*"`).
  Wenn der `initial-value`-Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [berechnungsunabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, ausgenommen "globale" Definitionen, die unabhängig von CSS sind.
  Zum Beispiel ist `10px` berechnungsunabhängig – es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist auch gültig, da `1in` immer gleich `96px` ist. Allerdings ist `3em` nicht gültig, da der Wert einer `em` von der übergeordneten {{cssxref("font-size")}} abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von `@property`, um eine benutzerdefinierte Eigenschaft zu registrieren und zu nutzen

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften, `--item-size` und `--item-color`, die wir verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Der folgende Code verwendet die CSS `@property`-At-Regel, um eine benutzerdefinierte Eigenschaft namens `--item-size` zu definieren. Die Eigenschaft setzt den Anfangswert auf `40%` und begrenzt die zulässigen Werte auf {{cssxref("percentage")}}-Werte. Das bedeutet, dass, wenn sie als Wert für die Größe eines Elements verwendet wird, die Größe immer relativ zur Größe des übergeordneten Elements ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Wir definieren eine zweite benutzerdefinierte Eigenschaft, `--item-color`, jedoch mit [JavaScript](/de/docs/Web/JavaScript) anstelle von CSS. Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property`-At-Regel. Die Eigenschaft wird so definiert, dass sie einen Anfangswert von `aqua` hat, nur [`<color>`](/de/docs/Web/CSS/color_value)-Werte akzeptiert und nicht vererbt wird.

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

Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;`, werden auf das übergeordnete `container`-Element gesetzt, wodurch die `40%` und `aqua` Standardwerte überschrieben werden, die bei der Definition dieser benutzerdefinierten Eigenschaften festgelegt wurden. Die Größe ist vererbbar; die Farbe nicht.

Bei Element eins sind keine dieser benutzerdefinierten Eigenschaften festgelegt. Die `--item-size` ist vererbbar, daher wird der auf das übergeordnete `container` gesetzte Wert `20%` verwendet. Andererseits ist die Eigenschaft `--item-color` nicht vererbbar, daher wird der auf das übergeordnete Element gesetzte Wert `orange` nicht berücksichtigt. Stattdessen wird der standardmäßige Anfangswert `aqua` verwendet.

Bei Element zwei sind für beide benutzerdefinierten Eigenschaften CSS Global Keywords gesetzt, die gültige Werte für alle Wertetypen sind und daher unabhängig vom `syntax`-Deskriptor-Wert gültig sind. Die `--item-size` ist auf `initial` gesetzt und verwendet den bei der `@property`-Deklaration gesetzten `initial-value: 40%;`. Der Wert `initial` bedeutet, dass der `initialValue` Wert für die Eigenschaft verwendet wird. Die `--item-color` ist auf `inherit` gesetzt und erbt explizit den `orange`-Wert vom übergeordneten Element, obwohl die benutzerdefinierte Eigenschaft ansonsten nicht vererbbar festgelegt ist. Dies ist der Grund, warum Element zwei orange ist.

Bei Element drei wird der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>` ist, wodurch die Deklaration ungültig ist und ignoriert wird, was bedeutet, dass der auf das übergeordnete Element gesetzte vererbbare Wert `20%` verwendet wird. Der Wert `xyz` ist ebenfalls ungültig. Da `registerProperty()` `--item-color` nicht als vererbt festgelegt hat, wird der standardmäßige Anfangswert `aqua` verwendet und nicht der `orange`-Wert des übergeordneten Elements.

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
- Leitfaden zum [Verwenden von CSS Custom Properties (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- Modul zu [CSS Custom Properties für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables)
