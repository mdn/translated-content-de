---
title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um [CSS-Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was die Überprüfung und Einschränkung von Eigenschaftstypen ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft vererbbar ist oder nicht.

> [!NOTE]
> Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) entspricht der `@property` At-Regel.

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
  inherits: "true";
  initial-value: 200px;
}
```

Der Name der benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es ist case-sensitiv.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Werttypen für die registrierte benutzerdefinierte Eigenschaft beschreibt.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die durch `@property` spezifizierte benutzerdefinierte Eigenschaft standardmäßig vererbt wird.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Anfangswert für die Eigenschaft festlegt.

## Beschreibung

Die `@property` At-Regel ist Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Set. Sie ermöglicht es Entwicklern, [CSS-Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was die Überprüfung und Einschränkung von Eigenschaftstypen ermöglicht, Standardwerte festlegt und definiert, ob eine benutzerdefinierte Eigenschaft vererbbar ist oder nicht.

Die `@property` Regel ermöglicht die Registrierung von benutzerdefinierten Eigenschaften direkt in Stylesheets, ohne dass JavaScript erforderlich ist. Gültige `@property` Regeln erzeugen registrierte benutzerdefinierte Eigenschaften, die denselben Effekt haben wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern.

Die folgenden Bedingungen müssen für die `@property` Regel erfüllt sein, damit sie gültig ist:

- Die `@property` Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten.
  Wenn einer von beiden fehlt, ist die gesamte `@property` Regel ungültig und wird ignoriert.
- Die `syntax` kann ein Datentypname sein (wie \<color>, \<length> oder \<number> usw.), mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), ein benutzerdefiniertes Ident oder die universelle Syntaxdefinition (`*`), was bedeutet, dass die Syntax jeder gültigen Token-Sequenz entsprechen kann. Der Wert ist ein {{cssxref("string")}}. Daher muss er in Anführungszeichen stehen.
- Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional, wenn der Wert des `syntax` Deskriptors die universelle Syntaxdefinition ist (`syntax: "*"`).
  Wenn der `initial-value` Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property` Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax` Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}} Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne von anderen Werten abhängig zu sein, außer für "globale" Definitionen, die unabhängig von CSS sind.
  Beispielsweise ist `10px` rechnerisch unabhängig - es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist auch gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert von `em` von der {{cssxref("font-size")}} des übergeordneten Elements abhängt.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property` Regel nicht ungültig.

Wenn mehrere gültige `@property` Regeln mit demselben Namen definiert sind, "gewinnt" die letzte in der Stylesheet-Reihenfolge. Wenn benutzerdefinierte Eigenschaften mit demselben Namen sowohl mit `@property` in CSS als auch mit `CSS.registerProperty()` in JavaScript registriert werden, hat die JavaScript-Registrierung Vorrang.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir die `@property` At-Regel, um zwei benutzerdefinierte Eigenschaften zu deklarieren, und verwenden dann diese Eigenschaften in unseren Style-Deklarationen.

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

Der Absatz sollte `200px` breit sein, mit einem lila Hintergrund und weißem Text.

### Animation eines benutzerdefinierten Eigenschaftswerts

In diesem Beispiel definieren wir eine benutzerdefinierte Eigenschaft namens `--progress` mit `@property`: dies akzeptiert {{cssxref("percentage")}}-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbstopps in einem {{cssxref("gradient/linear-gradient")}} zu definieren, wobei angegeben wird, wo eine grüne Farbe stoppt und Schwarz beginnt. Dann animieren wir den Wert von `--progress` zu `100%` über 2,5 Sekunden, was den Effekt einer animierten Fortschrittsleiste ergibt.

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
- [Registrierung von CSS-Custom Properties](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS Properties and Values](/de/docs/Web/API/CSS_Properties_and_Values_API) API-Dokumentation
- [Verwendung von CSS-Custom Properties (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS-Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
