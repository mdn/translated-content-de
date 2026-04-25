---
title: "`@property` CSS at-rule"
short-title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was eine Überprüfung und Einschränkung des Eigenschaftentyps, das Festlegen von Standardwerten und die Definition ermöglicht, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

> [!NOTE]
> Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) entspricht der `@property`-At-Regel.

## Syntax

```css
@property --canBeAnything {
  syntax: "*";
  inherits: true;
}

@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und mit einem gültigen, benutzerdefinierten Bezeichner fortgesetzt wird. Er ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` spezifizierte Registrierung der benutzerdefinierten Eigenschaft standardmäßig erbt.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Startwert für die Eigenschaft festlegt.

## Beschreibung

Die `@property`-At-Regel ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung. Sie ermöglicht es Entwicklern, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was eine Überprüfung und Einschränkung des Eigenschaftentyps, das Festlegen von Standardwerten und die Definition ermöglicht, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

Die `@property`-Regel ermöglicht die Registrierung benutzerdefinierter Eigenschaften direkt innerhalb von Stylesheets, ohne dass JavaScript erforderlich ist. Gültige `@property`-Regeln erzeugen registrierte benutzerdefinierte Eigenschaften und haben denselben Effekt wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern.

Folgende Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten. Ist einer von beiden fehlend, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Die `syntax` kann ein Datentypname sein (wie `<color>`, `<length>`, oder `<number>`, etc.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), einem benutzerdefinierten Identifikator oder der universelle Syntax-Definition (`*`), was bedeutet, dass die Syntax jeder gültige Tokenstrom sein kann. Der Wert ist ein {{cssxref("string")}} und muss daher in Anführungszeichen stehen.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntax-Definition (`syntax: "*")` ist. Wenn der `initial-value`-Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntax-Definition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [computationally independent](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Dies bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, außer von "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel ist `10px` rechnerisch unabhängig, da es sich nicht ändert, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des übergeordneten Elements abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen aber die `@property`-Regel nicht ungültig.

Wenn mehrere gültige `@property`-Regeln mit demselben Namen definiert sind, "gewinnt" die letzte in der Stylesheet-Reihenfolge. Wenn benutzerdefinierte Eigenschaften mit demselben Namen mit `@property` in CSS und `CSS.registerProperty()` in JavaScript registriert werden, gewinnt die JavaScript-Registrierung.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir die `@property`-At-Regel, um zwei benutzerdefinierte Eigenschaften zu deklarieren und diese dann in unseren Stil-Deklarationen zu verwenden.

#### HTML

```html
<p>Hello world!</p>
```

#### CSS

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}

@property --myWidth {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

p {
  background-color: var(--myColor);
  width: var(--myWidth);
  color: white;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Basic example', '100%', '60px') }}

Der Absatz sollte `200px` breit sein, mit einem purpurnen Hintergrund und weißem Text.

### Animieren eines Wertes einer benutzerdefinierten Eigenschaft

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: Diese akzeptiert {{cssxref("percentage")}}-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Wert der Farbstopps in einem {{cssxref("gradient/linear-gradient")}} zu definieren, der angibt, wo ein grüner Farbton endet und ein schwarzer beginnt. Wir animieren dann den Wert von `--progress` auf `100%` über 2,5 Sekunden, was den Effekt eines animierten Fortschrittsbalkens ergibt.

#### HTML

```html
<div class="bar"></div>
```

#### CSS

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

#### Ergebnisse

{{ EmbedLiveSample('Animating a custom property value', '100%', '60px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("var")}}
- [Benutzerdefinierte Eigenschaften (`--*`)](/de/docs/Web/CSS/Reference/Properties/--*)
- [Registrierung von CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS Properties and Values](/de/docs/Web/API/CSS_Properties_and_Values_API) API-Dokumentation
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
