---
title: "`@property` CSS at-rule"
short-title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: 4560e287e8c75c40aa5ecf40a0c9e8ecd0217c56
---

Die **`@property`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um [CSS-Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren. Dies ermöglicht das Überprüfen und Einschränken von Eigenschaftstypen, das Festlegen von Standardwerten und das Definieren, ob eine Custom Property Werte erben kann oder nicht.

> [!NOTE]
> Die JavaScript-Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist gleichwertig zur `@property`-At-Regel.

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

Der Name der Custom Property ist ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und auf einen gültigen, benutzerdefinierten Identifier folgt. Er ist Groß- und Kleinschreibung empfindlich.

### Deskriptoren

- {{cssxref("@property/syntax","syntax")}}
  - : Ein String, der die erlaubten Wertetypen für die registrierte Custom Property beschreibt.
- {{cssxref("@property/inherits","inherits")}}
  - : Ein boolescher Wert, der steuert, ob die von `@property` spezifizierte Custom Property standardmäßig erbt.
- {{cssxref("@property/initial-value","initial-value")}}
  - : Ein Wert, der den Anfangswert für die Eigenschaft festlegt.

## Beschreibung

Die `@property`-At-Regel ist Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs)-API-Sets. Sie ermöglicht es Entwicklern, [CSS-Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren. Dies ermöglicht das Überprüfen und Einschränken von Eigenschaftstypen, das Festlegen von Standardwerten und das Definieren, ob eine Custom Property Werte erben kann oder nicht.

Die `@property`-Regel ermöglicht die Registrierung von Custom Properties direkt innerhalb von Stylesheets, ohne dass JavaScript erforderlich ist. Gültige `@property`-Regeln erzeugen registrierte Custom Properties, die denselben Effekt haben wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern.

Die folgenden Bedingungen müssen erfüllt sein, damit die `@property`-Regel gültig ist:

- Die `@property`-Regel muss sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten.
  Wenn einer fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Der `syntax`-Deskriptor kann ein Datentypenname sein (wie `<color>`, `<length>` oder `<number>` usw.) mit Multiplikatoren (`+`, um eine durch Leerzeichen getrennte Liste zu akzeptieren, oder `#`, um eine durch Kommas getrennte Liste zu akzeptieren) und Kombinatoren (`|`, um einen von mehreren Datentypen zu akzeptieren), ein benutzerdefiniertes Ident oder die universelle Syntaxdefinition (`*`), was bedeutet, dass die Syntax jeder gültigen Tokenfolge entsprechen kann. Der Wert ist ein {{cssxref("string")}} und muss daher in Anführungszeichen stehen.
- Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (`syntax: "*"`).
  Wenn der `initial-value`-Deskriptor erforderlich, aber nicht angegeben ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.
- Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben.
  Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne von anderen Werten abhängig zu sein, mit Ausnahme von nicht von CSS abhängigen "globalen" Definitionen.
  Zum Beispiel ist `10px` rechnerisch unabhängig, da es sich nicht ändert, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer gleich `96px` ist. Allerdings ist `3em` nicht valide, denn der Wert eines `em` hängt von der {{cssxref("font-size")}} des übergeordneten Elements ab.
- Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen jedoch die `@property`-Regel nicht ungültig.

Falls mehrere gültige `@property`-Regeln mit demselben Namen definiert sind, "gewinnt" die zuletzt im Stylesheet definierte. Wenn Custom Properties mit demselben Namen sowohl mit `@property` in CSS als auch mit `CSS.registerProperty()` in JavaScript registriert werden, gewinnt die JavaScript-Registrierung.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel verwenden wir die `@property`-At-Regel, um zwei Custom Properties zu deklarieren und dann diese Properties in unseren Stil-Deklarationen zu verwenden.

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

### Animieren eines Custom Property-Werts

In diesem Beispiel definieren wir eine Custom Property namens `--progress` mit `@property`: diese akzeptiert {{cssxref("percentage")}}-Werte und hat einen Anfangswert von `25%`. Wir verwenden `--progress`, um den Positionswert der Farbstopps in einem {{cssxref("gradient/linear-gradient")}} zu definieren, und legen fest, wo eine grüne Farbe aufhört und schwarz beginnt. Wir animieren dann den Wert von `--progress` auf `100%` über 2,5 Sekunden, was den Effekt eines animierten Fortschrittbalkens ergibt.

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
- [Custom Properties (`--*`)](/de/docs/Web/CSS/Reference/Properties/--*)
- [Registrieren von CSS-Custom-Properties](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS Properties and Values](/de/docs/Web/API/CSS_Properties_and_Values_API) API-Dokumentation
- [Verwendung von CSS-Custom-Properties (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Anleitung
- [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
