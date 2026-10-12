---
title: Benutzerdefinierte Eigenschaften in CSS registrieren
slug: Web/CSS/Guides/Properties_and_values_API/Registering_properties
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

Die At-Regel `@property`, die zu den [CSS-Houdini-APIs](/de/docs/Web/API/Houdini_APIs) gehört, ermöglicht es Entwicklern, [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) ausdrücklich zu definieren. In diesem Leitfaden erfahren Sie, wie Sie mit `@property` Typen prüfen und zulässige Werte einschränken, Standardwerte für benutzerdefinierte Eigenschaften in CSS festlegen und bestimmen, ob eine benutzerdefinierte Eigenschaft Werte erben kann.

## Warum benutzerdefinierte Eigenschaften registrieren?

Benutzerdefinierte CSS-Eigenschaften, häufig CSS-Variablen genannt, lassen sich durch einfache Deklarationen definieren. Üblicherweise werden sie auf {{cssxref(":root")}} deklariert und können in nachfolgenden Regelsätzen mit einem anderen Wert überschrieben werden – auch in Regeln, die vom UI-Zustand abhängen, sowie innerhalb von Container- und Media-Queries.

In diesem Beispiel wird `--myColor` auf `:root` der Wert `#bada55` zugewiesen. Auf `main` erhält die Eigenschaft einen anderen Wert, den alle Nachfahren von `main` erben. Dieser Wert wird überschrieben, wenn der Mauszeiger über `main` bewegt wird oder wenn sich `main` in einem Viewport befindet, der weniger als `750px` breit ist. Innerhalb von Elementen mit der Klasse `circles` wird `--myColor` auf `45deg` gesetzt – einen Wert eines anderen Datentyps.

```css
:root {
  --myColor: #bada55;
}
main {
  --myColor: #cacaca;
}
main:hover {
  --myColor: #aabbbbaa;
}
@media (width < 750px) {
  main {
    --myColor: #aabbbbaa;
  }
}

.circles {
  --myColor: 45deg;
}
```

Die [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) stellt Methoden zum Registrieren benutzerdefinierter Eigenschaften bereit. Durch die Registrierung werden Typ, Vererbung und Standardwert einer Variablen festgelegt. Dadurch wird ihr Verhalten vorhersehbarer und die Verarbeitung effizienter.

Registrierte Eigenschaften werden bei der Berechnung ihrer Werte validiert, nicht bereits beim Parsen. Das bedeutet:

- Ungültige Werte werden bei der Untersuchung der Eigenschaften eines Elements nicht als ungültig angezeigt.
- Folgt eine ungültige Deklaration auf eine gültige, wird nicht auf die gültige Deklaration zurückgegriffen. Stattdessen wird für die ungültige Eigenschaft ihr registrierter Standardwert verwendet.

Standardmäßig werden alle CSS-Variablen vererbt. Wenn Sie den Wert einer nicht registrierten Variablen ändern, parst der Browser den DOM-Baum erneut, um zu prüfen, welche Elemente betroffen sind. Bei registrierten Eigenschaften teilen Sie dem Browser mit `inherits: false;` mit, dass die Kindelemente bei einer Wertänderung nicht erneut geparst werden müssen. Das begrenzt den Umfang der Neuberechnung von Stilen.

Im Allgemeinen sollten Sie benutzerdefinierte Eigenschaften registrieren, wenn Sie sie animieren, eine Typprüfung umsetzen oder ein vorhersehbares Vererbungsverhalten sicherstellen möchten. Wenn Sie ein CSS-Framework erstellen, versehen Sie Ihre benutzerdefinierten Eigenschaften mit einem Namensraum und registrieren Sie sie. So haben sie stets einen Standardwert, und Nutzer des Frameworks können ihnen bei einer Wertänderung keine Werte eines ungültigen Datentyps zuweisen.

In CSS werden Eigenschaften mit der At-Regel `@property` registriert. In diesem Beispiel wird `--myColor` global als vererbbare Farbe mit dem Wert `#bada55` registriert und für `main` verwendet, wenn sich der Mauszeiger darüber befindet. Die Registrierung verbessert die Animationsleistung: Der Wert hat den richtigen Typ, und der Browser muss ihn vor der Animation nicht parsen. Die Zuweisung für `.circles` wird ignoriert, weil als Datentyp der Eigenschaft `<color>` und nicht `<angle>` registriert ist.

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: #bada55;
}

main:hover {
  color: var(--myColor);
  animation: color-change 2s linear forwards;
}

@keyframes color-change {
  to {
    color: red;
  }
}

.circles {
  --myColor: 45deg;
}
```

## Die At-Regel @property und ihre Deskriptoren

Mit der Regel `@property` können benutzerdefinierte Eigenschaften direkt in Stylesheets registriert werden, ohne dass JavaScript erforderlich ist. Gültige `@property`-Regeln erzeugen registrierte benutzerdefinierte Eigenschaften und haben dieselbe Wirkung wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit entsprechenden Parametern.

Der Name einer benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, das mit `--` beginnt und auf das ein gültiger, benutzerdefinierter Bezeichner folgt. Dabei wird zwischen Groß- und Kleinschreibung unterschieden. Die Deklaration enthält bis zu drei Deskriptoren: {{cssxref("@property/syntax","syntax")}}, {{cssxref("@property/inherits","inherits")}} und {{cssxref("@property/initial-value","initial-value")}}.

In diesem Beispiel erstellen wir die benutzerdefinierte Eigenschaft `--rotation`.

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

### @property-Deskriptoren

Damit eine `@property`-Regel gültig ist, muss sie sowohl den Deskriptor {{cssxref("@property/syntax","syntax")}} als auch den Deskriptor {{cssxref("@property/inherits","inherits")}} enthalten. Der Deskriptor {{cssxref("@property/initial-value","initial-value")}} ist optional.

- `syntax`
  - : Der Deskriptor {{cssxref("@property/syntax","syntax")}} ist ein String, der die zulässigen Werttypen der registrierten benutzerdefinierten Eigenschaft beschreibt. Sein Wert kann ein Datentypname wie `<color>`, `<length>` oder `<number>` sein, gegebenenfalls mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Bezeichner. In unserem Beispiel wird die Eigenschaft `--rotation` auf `<angle>` festgelegt. Ihr kann damit nur ein {{cssxref("angle")}}-Wert zugewiesen werden.

- `inherits`
  - : Der Deskriptor {{cssxref("@property/inherits","inherits")}} ist ein {{Glossary("boolean", "boolescher")}} Wert, der steuert, ob die benutzerdefinierte Eigenschaft standardmäßig vererbt wird: Mit `true` wird sie vererbt, mit `false` nicht. Ein Beispiel für beide Werte finden Sie unter [Benutzerdefinierte Eigenschaften registrieren und verwenden](#benutzerdefinierte_eigenschaften_registrieren_und_verwenden).

- `initial-value`
  - : Die At-Regel `@property` akzeptiert außerdem den Deskriptor {{cssxref("@property/initial-value","initial-value")}}. Sein Wert legt den Anfangswert der Eigenschaft fest. Dieser Deskriptor ist nur dann optional, wenn der Deskriptor `syntax` die universelle Syntaxdefinition enthält, also `syntax: "*"`. Bei jedem anderen Syntaxwert ist er erforderlich und muss einen _rechnerisch unabhängigen_ Wert enthalten. Das bedeutet, dass der Wert nicht von einem anderen Wert abhängen darf, wie es etwa bei Werten mit den Einheiten `%` oder `em` der Fall ist.

Fehlt der Deskriptor `syntax` oder `inherits`, ist die gesamte `@property`-Regel ungültig und wird ignoriert. Dasselbe gilt, wenn der Deskriptor `initial-value` erforderlich ist, aber fehlt. Unbekannte Deskriptoren sind ungültig und werden ignoriert; sie machen die `@property`-Regel jedoch nicht ungültig.

## Benutzerdefinierte Eigenschaften registrieren und verwenden

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften: `--item-size` und `--item-color`. Anschließend verwenden wir sie, um die Größe (Breite und Höhe) und die Hintergrundfarbe der drei folgenden Elemente festzulegen.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Hier verwenden wir die CSS-At-Regel `@property`, um die benutzerdefinierte Eigenschaft `--item-size` zu definieren. Wir setzen ihren Anfangswert auf `40%` und beschränken gültige Werte auf {{cssxref("percentage")}}-Werte. Wird diese Eigenschaft verwendet, um die Größe eines Elements festzulegen, ist dessen Größe somit immer relativ zur Größe seines Elternelements. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Sie können Eigenschaften auch mit [JavaScript](/de/docs/Web/JavaScript) registrieren. Die JavaScript-Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) entspricht der At-Regel `@property`. Hier definieren wir für unsere zweite benutzerdefinierte Eigenschaft `--item-color` den Anfangswert `aqua`, lassen nur {{cssxref("&lt;color&gt;")}}-Werte zu und legen fest, dass sie nicht vererbt wird.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Weitere Informationen finden Sie im [Leitfaden zur Registrierung benutzerdefinierter Eigenschaften mit der JavaScript-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide).

### Registrierte benutzerdefinierte Eigenschaften verwenden

Registrierten Eigenschaften können wir neue Werte zuweisen. Hier setzen wir Werte für benutzerdefinierte Eigenschaften zunächst auf dem übergeordneten Container und anschließend auf den Elementen selbst. Die für `two` festgelegten Werte sind gültig, die für `three` festgelegten dagegen ungültig.

```css
.container {
  --item-size: 20%;
  --item-color: orange;
}
.two {
  --item-size: initial;
  --item-color: inherit;
}
.three {
  --item-size: 1000px;
  --item-color: xyz;
}
```

Wir verwenden die beiden benutzerdefinierten Eigenschaften als Werte für die Eigenschaften {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}} der Elemente:

```css
.item {
  width: var(--item-size);
  height: var(--item-size);
  background-color: var(--item-color);
}
```

```css hidden
.container {
  display: flex;
  height: 200px;
  border: 1px dashed black;
}
```

{{ EmbedLiveSample('Registering and using custom properties', '100%', '250px') }}

### Vererbung

Der Deskriptor `inherits` steuert, ob die registrierte benutzerdefinierte CSS-Eigenschaft standardmäßig vererbt wird.

In unserem Beispiel wurde festgelegt, dass die Eigenschaft für die Größe vererbt wird, die für die Farbe jedoch nicht. Auf dem Elternelement `container` wurden die beiden benutzerdefinierten Eigenschaften auf `--item-size: 20%` und `--item-color: orange;` gesetzt. Damit wurden die beim Definieren dieser Eigenschaften festgelegten Standardwerte `40%` und `aqua` überschrieben.

Für das erste Element wurde keine dieser benutzerdefinierten Eigenschaften gesetzt. Da `--item-size` vererbbar ist, wurde der auf dem Elternelement `container` festgelegte Wert `20%` geerbt und verwendet. Die Eigenschaft `--item-color` ist nicht vererbbar; daher wurde der auf dem Elternelement festgelegte Wert `orange` nicht berücksichtigt. Stattdessen wurde der Standardanfangswert `aqua` verwendet.

`inherits` ist ein erforderlicher Deskriptor. Würde er fehlen oder wäre er ungültig, wäre die gesamte `@property`-Regel ungültig und würde ignoriert.

### Gültige und ungültige Werte

Ein Vorteil der Registrierung benutzerdefinierter Eigenschaften gegenüber einfachen Deklarationen besteht darin, dass sich festlegen lässt, welche Werte ihnen bei einer erneuten Zuweisung zugewiesen werden dürfen. Der Deskriptor `syntax` bestimmt, welche Werte gültig sind. Jede Deklaration mit einem Wert, der diese Bedingungen nicht erfüllt, wird ignoriert.

Für das zweite Element wurden für beide benutzerdefinierten Eigenschaften globale CSS-Schlüsselwörter gesetzt. Die globalen CSS-Schlüsselwörter {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}} sind für alle Werttypen gültig – unabhängig vom Wert des Deskriptors `syntax`. `--item-size` wurde auf `initial` gesetzt und verwendet daher den in der `@property`-Deklaration festgelegten Wert `initial-value: 40%;`. `--item-color` wurde auf `inherit` gesetzt. Dadurch wird der Wert `orange` ausdrücklich vom Elternelement geerbt, obwohl für diese benutzerdefinierte Eigenschaft ansonsten festgelegt wurde, dass sie nicht vererbt wird. Deshalb ist das zweite Element orange.

Für das dritte Element wurde `--item-size` auf `1000px` gesetzt. `1000px` ist zwar ein {{cssxref("length")}}-Wert, die `@property`-Deklaration verlangt jedoch einen `<percentage>`-Wert. Die Deklaration ist deshalb ungültig und wird ignoriert; stattdessen wird der vererbbare Wert `20%` des Elternelements verwendet. Auch der Wert `xyz` ist ungültig. Da `registerProperty()` festgelegt hat, dass `--item-color` nicht vererbt wird, kommt der Standardanfangswert `aqua` zum Einsatz und nicht der Wert `orange` des Elternelements.

### Werte benutzerdefinierter Eigenschaften animieren

Registrierte benutzerdefinierte CSS-Eigenschaften bieten einen Leistungsvorteil, weil sie als typisierte Daten statt als Strings behandelt werden. Dadurch stehen der Rendering-Engine des Browsers eine definierte Syntax und Vererbungsregeln zur Verfügung. Der Browser parst die definierte Syntax einmalig. Wird die Variable an anderer Stelle verwendet, sind ihr Typ und ihre interne Darstellung bereits bekannt, sodass sie nicht erneut geparst werden muss.

Da nicht registrierte benutzerdefinierte Eigenschaften lediglich Strings sind, kann der Browser sie nicht {{Glossary("interpolation", "interpolieren")}} und folglich nicht fließend animieren. Stattdessen werden ihre Werte diskret animiert. Registrierte Variablen lassen sich interpolieren und damit fließend animieren. Die Berechnungen für die Interpolation werden an die GPU ausgelagert, was effizienter ist als Animationen auf dem Haupt-Thread.

Ein Animationsbeispiel finden Sie unter [Einen Wert einer benutzerdefinierten Eigenschaft animieren](/de/docs/Web/CSS/Reference/At-rules/@property#animating_a_custom_property_value).

## Siehe auch

- {{cssxref("var()")}}
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
- Leitfaden zur [Verwendung benutzerdefinierter CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- Modul [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API)
- API [CSS Properties and Values](/de/docs/Web/API/CSS_Properties_and_Values_API)
- Modul [Benutzerdefinierte CSS-Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)
