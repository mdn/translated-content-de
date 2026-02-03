---
title: Registrieren von benutzerdefinierten Eigenschaften in CSS
slug: Web/CSS/Guides/Properties_and_values_API/Registering_properties
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

Die `@property`-Atregel, Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sets, ermöglicht es Entwicklern, [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren. In diesem Leitfaden lernen wir, wie man `@property` für Typprüfung und Einschränkung verwendet, Standardwerte für benutzerdefinierte Eigenschaften in CSS festlegt und definiert, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

## Warum benutzerdefinierte Eigenschaften registrieren?

CSS-Benutzerdefinierte Eigenschaften, allgemein als CSS-Variablen bekannt, können durch einfache Deklaration definiert werden. In der Regel werden diese auf dem {{cssxref(":root")}} deklariert und können mit einem anderen Wert in nachfolgenden Regelsätzen überschrieben werden — einschließlich Regeln, die auf dem UI-Zustand basieren sowie innerhalb von Container- und Media Queries.

In diesem Beispiel wird `--myColor` auf `#bada55` auf `:root` gesetzt und dann auf `main` auf einen anderen Wert gesetzt, der von allen Nachkommen von `main` geerbt wird. Dieser Wert wird überschrieben, wenn `main` schwebend ist oder sich in einem Viewport befindet, der weniger als `750px` breit ist. Innerhalb von Elementen mit einer Klasse namens `circles` wird `--myColor` auf `45deg` gesetzt, was ein anderer Datentyp ist.

```css
:root {
  --myColor: #bada55;
}
main {
  --myColor: #cacaca;
}
main:hover {
  --myColor: #abba;
}
@media (width < 750px) {
  main {
    --myColor: #abba;
  }
}

.circles {
  --myColor: 45deg;
}
```

Die [API für CSS-Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Properties_and_values_API) bietet Methoden zum Registrieren benutzerdefinierter Eigenschaften. Durch die Registrierung von CSS-Benutzerdefinierten Eigenschaften werden der Typ, die Vererbung und der Standardwert der Variable festgelegt, was sie vorhersagbarer und leistungsfähiger macht.

Registrierte Eigenschaften werden validiert, wenn sie berechnet werden, anstatt wenn sie analysiert werden. Das bedeutet:

- Ungültige Werte werden bei der Inspektion der Eigenschaften des Elements nicht als ungültig angezeigt.
- Eine ungültige Eigenschaft, die nach einer gültigen enthalten ist, fällt nicht auf die gültige Eigenschaft zurück. Eine ungültige Eigenschaft fällt jedoch auf ihren registrierten Standardwert zurück.

Standardmäßig erben alle CSS-Variablen. Wenn Sie den Wert einer nicht registrierten Variable ändern, analysiert der Browser das DOM erneut, um zu überprüfen, welche Elemente im DOM-Baum betroffen sind. Bei registrierten Eigenschaften weist das Setzen des Werts `inherits: false;` den Browser darauf hin, dass, wenn sich der Wert ändert, die Kinder nicht erneut analysiert werden müssen, wodurch der Umfang der Stilneuberechnung eingegrenzt wird.

In der Regel möchten Sie Ihre benutzerdefinierten Eigenschaften registrieren, wenn Sie die Variable animieren, die Typprüfung implementieren oder ein vorhersehbares Vererbungsvorverhalten garantieren möchten. Wenn Sie ein CSS-Framework erstellen, sollten Sie Ihre benutzerdefinierten Eigenschaften unter einem Namensraum registrieren, um sicherzustellen, dass sie immer einen Standardwert haben und um zu verhindern, dass Framework-Benutzer ihnen ungültige Datentypen zuweisen, wenn sie ihre Werte ändern.

In CSS werden Eigenschaften mit der `@property`-Atregel registriert. In diesem Beispiel wird `--myColor` global als erbbare Farbe mit dem Wert `#bada55` registriert und im schwebenden Zustand in `main` verwendet. Das Registrieren verbessert die Animationsleistung, da der Wert vom korrekten Typ ist und der Browser den Wert vor der Animation nicht analysieren muss. Die Zuweisung von `.circles` wird ignoriert, weil der Datentyp der Eigenschaft als `<color>`, nicht als `<angle>` registriert ist.

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: #bada55;
}

main:hover {
  color: var(--myColor);
  animation: colorChange 2s linear forwards;
}

@keyframes colorChange {
  to {
    color: red;
  }
}

.circles {
  --myColor: 45deg;
}
```

## Die @property und Descriptoren

Die `@property`-Regel ermöglicht die Registrierung benutzerdefinierter Eigenschaften direkt innerhalb von Stylesheets, ohne dass JavaScript erforderlich ist. Gültige `@property`-Regeln erzeugen registrierte benutzerdefinierte Eigenschaften, die denselben Effekt haben wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit gleichwertigen Parametern.

Der benutzerdefinierte Eigenschaftsname ist ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist groß-/kleinschreibungsempfindlich. Die Deklaration umfasst bis zu drei Deskriptoren: {{cssxref("@property/syntax","syntax")}}, {{cssxref("@property/inherits","inherits")}} und {{cssxref("@property/initial-value","initial-value")}}.

In diesem Beispiel erstellen wir eine benutzerdefinierte Eigenschaft `--rotation`.

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

### @property deskriptoren

Damit die `@property`-Regel gültig ist, muss sie sowohl den {{cssxref("@property/syntax","syntax")}}- als auch den {{cssxref("@property/inherits","inherits")}}-Deskriptor enthalten. Der {{cssxref("@property/initial-value","initial-value")}}-Deskriptor ist optional.

- `syntax`
  - : Der {{cssxref("@property/syntax","syntax")}}-Deskriptor ist ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt. Der Wert des Deskriptors kann ein Datentypname sein, wie `<color>`, `<length>`, oder `<number>`, mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefiniertes Ident. In unserem Beispiel ist die Eigenschaft `--rotation` auf `<angle>` gesetzt, was bedeutet, dass sie nur einem {{cssxref("angle")}}-Wert zugewiesen werden kann.

- `inherits`
  - : Der {{cssxref("@property/inherits","inherits")}}-Deskriptor ist ein {{Glossary("boolean", "boolean")}}-Wert, der steuert, ob die benutzerdefinierte Eigenschaft standardmäßig vererbt wird: Setzen Sie ihn auf `true`, um die Vererbung zu aktivieren, oder `false`, um sie zu deaktivieren. Ein Beispiel für beide Werte finden Sie unter [Registrieren und Verwenden benutzerdefinierter Eigenschaften](#registrieren_und_verwenden_benutzerdefinierter_eigenschaften).

- `initial-value`
  - : Die `@property`-Atregel akzeptiert auch den {{cssxref("@property/initial-value","initial-value")}}-Deskriptor. Der Wert definiert den Startwert für die Eigenschaft. Dieser Deskriptor ist nur dann optional, wenn der Wert des `syntax`-Deskriptors die universelle Syntaxdefinition ist (das heißt, `syntax: "*"`). Wenn die Syntax andere Werte hat, ist er erforderlich und muss ein _berechnungsmäßig unabhängiger_ Wert sein, was bedeutet, dass der Wert nicht von einem anderen Wert abhängiger Datentyp sein kann, wie Werte mit `%` oder `em`-Einheiten.

Wenn entweder der `syntax`- oder der `inherits`-Deskriptor fehlt, ist die gesamte `@property`-Regel ungültig und wird ignoriert. Wenn der `initial-value`-Deskriptor erforderlich, aber ausgelassen ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert. Unbekannte Deskriptoren sind ungültig und werden ignoriert, machen die `@property`-Regel jedoch nicht ungültig.

## Registrieren und Verwenden benutzerdefinierter Eigenschaften

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften: `--item-size` und `--item-color`. Wir verwenden dann diese benutzerdefinierten Eigenschaften, um die Größe (Breite und Höhe) und die Hintergrundfarbe der folgenden drei Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Hier verwenden wir die CSS-`@property`-Atregel, um die benutzerdefinierte Eigenschaft `--item-size` zu definieren. Wir setzen den Anfangswert auf `40%` und beschränken gültige Werte auf {{cssxref("percentage")}}-Werte. Das bedeutet, dass, wenn diese Eigenschaft verwendet wird, um die Größe eines Elements zu bestimmen, die Größe des Elements immer relativ zur Größe des übergeordneten Elements ist. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Sie können auch [JavaScript](/de/docs/Web/JavaScript) verwenden, um Eigenschaften zu registrieren. Die `CSS.registerProperty()`-Methode von JavaScript ist äquivalent zur `@property`-Atregel. Hier haben wir unsere zweite benutzerdefinierte Eigenschaft, `--item-color`, definiert, um einen Anfangswert von `aqua` zu haben, nur {{cssxref("&lt;color&gt;")}}-Werte zu akzeptieren und nicht vererbt zu werden.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Weitere Informationen finden Sie im [JavaScript-API-Leitfaden zum Registrieren benutzerdefinierter Eigenschaften](/de/docs/Web/API/CSS_Properties_and_Values_API/guide).

### Verwenden registrierter benutzerdefinierter Eigenschaften

Wir können registrierten Eigenschaften neue Werte zuweisen. Hier setzen wir benutzerdefinierte Eigenschaftswerte auf das übergeordnete Container-Element und dann auf die Elemente selbst. Die Werte, die auf `two` gesetzt wurden, sind gültig, während die Werte, die auf `three` gesetzt wurden, ungültig sind.

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

Wir verwenden die zwei benutzerdefinierten Eigenschaften als Werte für die {{cssxref("width")}}, {{cssxref("height")}} und {{cssxref("background-color")}}-Eigenschaften der Elemente:

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

Der `inherits`-Deskriptor steuert, ob die registrierte CSS-benutzerdefinierte Eigenschaft standardmäßig vererbt wird oder nicht.

In unserem Beispiel wurde die Größen-Eigenschaft als vererbbar festgelegt; die Farbe nicht. Die beiden benutzerdefinierten Eigenschaften `--item-size: 20%` und `--item-color: orange;` wurden auf dem übergeordneten Element `container` gesetzt, wodurch die Standardwerte `40%` und `aqua` überschrieben wurden, die festgelegt wurden, als diese benutzerdefinierten Eigenschaften definiert wurden.

Für Element eins wurden keine dieser benutzerdefinierten Eigenschaften festgelegt. Da `--item-size` vererbbar ist, wurde der auf dem übergeordneten `container` gesetzte Wert `20%` geerbt und verwendet. Die Eigenschaft `--item-color` war nicht vererbbar, sodass der auf das übergeordnete Element gesetzte Wert `orange` nicht berücksichtigt wurde. Stattdessen wurde der Standard-Anfangswert `aqua` verwendet.

Der `inherits`-Deskriptor ist ein erforderlicher Deskriptor; wäre er fehlend oder ungültig, wäre die gesamte `@property`-Regel ungültig und ignoriert worden.

### Gültige und ungültige Werte

Ein Vorteil der Registrierung Ihrer benutzerdefinierten Eigenschaften (im Vergleich zur Verwendung einfacher Deklarationen) besteht darin, dass sie nur auf gültige Werte zurückgesetzt werden können. Der `syntax`-Deskriptor definiert, welche Werte gültig sind. Jede Deklaration mit einem Wert, der diese Einschränkungen nicht erfüllt, wird ignoriert.

Für Element zwei wurden für beide benutzerdefinierten Eigenschaften CSS-Schlüsselwörter gesetzt. Die CSS-Schlüsselwortwerte — {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, und {{cssxref("revert-layer")}} — sind für alle Werttypen gültig und daher unabhängig vom `syntax`-Deskriptorwert gültig. Der `--item-size` wurde auf `initial` gesetzt und daher wurde der `initial-value: 40%;` aus der `@property`-Deklaration verwendet. Der `--item-color` wurde auf `inherit` gesetzt, wodurch der `orange`-Wert explizit von seinem Elternteil geerbt wurde, obwohl die benutzerdefinierte Eigenschaft sonst nicht vererbt werden sollte. Aus diesem Grund war Element zwei orange.

Für Element drei wurde der `--item-size`-Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}}-Wert ist, erfordert die `@property`-Deklaration, dass der Wert ein `<percentage>`-Wert sein muss, sodass die Deklaration ungültig war und ignoriert wurde, was bedeutete, dass das vererbbare `20%` auf dem übergeordneten Element verwendet wurde. Der `xyz`-Wert war ebenfalls ungültig. Da `registerProperty()` `--item-color` so festgelegt hat, dass es nicht vererbt wird, wurde der Standard-Anfangswert `aqua` verwendet und nicht der `orange`-Wert des Elternteils.

### Animation von benutzerdefinierten Eigenschaftswerten

Registrierte CSS-benutzerdefinierte Eigenschaften bieten einen Leistungsvorteil, da sie als typisierte Daten und nicht als Strings behandelt werden. Dies liefert der Rendering-Engine des Browsers eine definierte Syntax und Vererbungsregeln. Der Browser analysiert die definierte Syntax einmal; wenn diese Variable anderswo verwendet wird, sind der Typ und die interne Darstellung bereits bekannt, sodass sie nicht erneut analysiert werden muss.

Da nicht-registrierte benutzerdefinierte Eigenschaften nur Strings sind, kann der Browser sie nicht {{Glossary("interpolation", "interpolieren")}} und somit nicht reibungslos animieren. Stattdessen werden nicht-registrierte benutzerdefinierte Eigenschaftswerte diskret animiert. Registrierte Variablen können interpoliert und damit animiert werden; ihre Interpolationsberechnungen werden an die GPU ausgelagert, was leistungsfähiger ist als Animationen, die im Hauptthread durchgeführt werden.

Siehe [Animieren eines benutzerdefinierten Eigenschaftswerts](/de/docs/Web/CSS/Reference/At-rules/@property#animating_a_custom_property_value) für ein Animationsbeispiel.

## Siehe auch

- {{cssxref("var()")}}
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS-Eigenschaften und Werte API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS-Eigenschaften und Werte](/de/docs/Web/API/CSS_Properties_and_Values_API) API
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
