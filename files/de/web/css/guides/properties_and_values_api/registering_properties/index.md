---
title: Registrierung benutzerdefinierter Eigenschaften in CSS
slug: Web/CSS/Guides/Properties_and_values_API/Registering_properties
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

Die `@property` Regel, welche Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sets ist, ermöglicht es Entwicklern, [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren. In diesem Leitfaden lernen Sie, wie Sie `@property` für die Typüberprüfung und Einschränkung verwenden, Standardwerte für benutzerdefinierte Eigenschaften in CSS festlegen und definieren, ob eine benutzerdefinierte Eigenschaft Werte erben kann oder nicht.

## Warum benutzerdefinierte Eigenschaften registrieren?

Benutzerdefinierte CSS-Eigenschaften, häufig als CSS-Variablen bezeichnet, können durch einfache Deklaration definiert werden. Diese werden in der Regel auf dem {{cssxref(":root")}} deklariert und können in nachfolgenden Regelwerken mit einem anderen Wert überschrieben werden — einschließlich in Regeln, die auf UI-Zustand basieren, sowie innerhalb von Container- und Media-Queries.

In diesem Beispiel wird `--myColor` auf `#bada55` im `:root` gesetzt und dann im `main` auf einen anderen Wert gesetzt, der von allen Nachkommen von `main` geerbt wird. Dieser Wert wird überschrieben, wenn `main` durch Hover interagiert wird oder sich in einem Viewport befindet, der weniger als `750px` breit ist. Innerhalb von Elementen mit der Klasse `circles` wird `--myColor` auf `45deg` gesetzt, was ein anderer Datentyp ist.

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

Die [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) bietet Methoden zur Registrierung benutzerdefinierter Eigenschaften. Durch die Registrierung von benutzerdefinierten CSS-Eigenschaften werden der Typ, die Vererbung und der Standardwert der Variablen festgelegt, was sie vorhersagbarer und leistungsfähiger macht.

Registrierte Eigenschaften werden validiert, wenn sie berechnet werden, anstatt wenn sie analysiert werden. Das bedeutet, dass:

- Ungültige Werte beim Inspizieren der Eigenschaften des Elements nicht als ungültig erscheinen.
- Eine ungültige Eigenschaft, die nach einer gültigen steht, nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft fällt jedoch auf ihren registrierten Standardwert zurück.

Standardmäßig erben alle CSS-Variablen. Wenn Sie einen nicht registrierten Variablenwert ändern, analysiert der Browser das DOM erneut, um zu überprüfen, welche Elemente im DOM-Baum betroffen sind. Mit registrierten Eigenschaften teilt die Einstellung des Wertes `inherits: false;` dem Browser mit, dass, wenn sich der Wert ändert, die Kinderelemente nicht neu analysiert werden müssen, was den Bereich der Neuberechnung von Stilen einschränkt.

In der Regel möchten Sie Ihre benutzerdefinierten Eigenschaften registrieren, wenn Sie die Variable animieren, eine Typüberprüfung implementieren oder vorhersehbares Vererbungsverhalten garantieren. Wenn Sie ein CSS-Framework erstellen, sollten Sie Ihre benutzerdefinierten Eigenschaften mit Namensräumen versehen und registrieren, um sicherzustellen, dass sie immer einen Standardwert haben, und um zu verhindern, dass Benutzer des Frameworks ihnen ungültige Datentypen zuweisen, wenn sie ihre Werte ändern.

In CSS werden Eigenschaften mit der `@property` Regel registriert. In diesem Beispiel wird `--myColor` global als vererbbare Farbe mit dem Wert `#bada55` registriert und im `main` im Hover-Zustand verwendet. Die Registrierung verbessert die Animationsleistung, weil der Wert vom richtigen Typ ist und der Browser den Wert vor der Animation nicht analysieren muss. Die Zuweisung in `.circles` wird ignoriert, weil der Datentyp der Eigenschaft als `<color>`, nicht `<angle>` registriert ist.

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

## Die @property Regel und Deskriptoren

Die `@property` Regel ermöglicht die Registrierung benutzerdefinierter Eigenschaften direkt in Stylesheets, ohne dass JavaScript erforderlich ist. Gültige `@property` Regeln erzeugen registrierte benutzerdefinierte Eigenschaften, die denselben Effekt haben wie ein Aufruf von [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) mit entsprechenden Parametern.

Der Name der benutzerdefinierten Eigenschaft ist ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv. Die Deklaration umfasst bis zu drei Deskriptoren: {{cssxref("@property/syntax","syntax")}}, {{cssxref("@property/inherits","inherits")}}, und {{cssxref("@property/initial-value","initial-value")}}.

In diesem Beispiel erstellen wir eine benutzerdefinierte Eigenschaft `--rotation`.

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

### @property Deskriptoren

Damit die `@property` Regel gültig ist, muss sie sowohl den {{cssxref("@property/syntax","syntax")}} als auch den {{cssxref("@property/inherits","inherits")}} Deskriptor enthalten. Der {{cssxref("@property/initial-value","initial-value")}} Deskriptor ist optional.

- `syntax`
  - : Der {{cssxref("@property/syntax","syntax")}} Deskriptor ist ein String, der die erlaubten Wertetypen für die registrierte benutzerdefinierte Eigenschaft beschreibt. Der Wert des Deskriptors kann ein Datentypname sein, wie `<color>`, `<length>`, oder `<number>`, mit Multiplikatoren (`+`, `#`) und Kombinatoren (`|`), oder ein benutzerdefinierter Identifikator. In unserem Beispiel ist die `--rotation` Eigenschaft auf `<angle>` gesetzt, was bedeutet, dass sie nur einen {{cssxref("angle")}} Wert zugewiesen bekommen kann.

- `inherits`
  - : Der {{cssxref("@property/inherits","inherits")}} Deskriptor ist ein {{Glossary("boolean", "boolean")}} Wert, der steuert, ob die benutzerdefinierte Eigenschaft standardmäßig vererbt wird: Setzen Sie ihn auf `true`, um die Vererbung zu aktivieren, auf `false`, um sie zu deaktivieren. Sehen Sie bei [Registrierung und Nutzung benutzerdefinierter Eigenschaften](#registrierung_und_nutzung_benutzerdefinierter_eigenschaften) ein Beispiel für beide Werte.

- `initial-value`
  - : Die `@property` Regel akzeptiert auch den {{cssxref("@property/initial-value","initial-value")}} Deskriptor. Der Wert definiert den Startwert für die Eigenschaft. Dieser Deskriptor ist nur dann optional, wenn der Wert des `syntax` Deskriptors die universelle Syntaxdefinition ist (also `syntax: "*"`). Wenn die Syntax andere Werte hat, ist er erforderlich und muss ein _rechnerisch unabhängiger_ Wert sein, was bedeutet, dass der Wert nicht von einem anderen Wert abhängiger Datentyp sein kann, wie z.B. Werte mit `%` oder `em` Einheiten.

Fehlt entweder der `syntax` oder der `inherits` Deskriptor, ist die gesamte `@property` Regel ungültig und wird ignoriert. Wenn der `initial-value` Deskriptor erforderlich, aber weggelassen wird, ist die gesamte `@property` Regel ungültig und wird ignoriert. Unbekannte Deskriptoren sind ungültig und werden ignoriert, aber machen die `@property` Regel nicht ungültig.

## Registrierung und Nutzung benutzerdefinierter Eigenschaften

In diesem Beispiel definieren wir zwei benutzerdefinierte Eigenschaften: `--item-size` und `--item-color`. Wir werden diese benutzerdefinierten Eigenschaften dann verwenden, um die Größe (Breite und Höhe) und die Hintergrundfarbe der folgenden drei Elemente zu definieren.

```html
<div class="container">
  <div class="item one">Item one</div>
  <div class="item two">Item two</div>
  <div class="item three">Item three</div>
</div>
```

Hier verwenden wir die CSS `@property` Regel, um die `--item-size` benutzerdefinierte Eigenschaft zu definieren. Wir setzen ihren Anfangswert auf `40%` und beschränken gültige Werte auf {{cssxref("percentage")}} Werte. Das bedeutet, dass, wenn diese Eigenschaft verwendet wird, um ein Element zu dimensionieren, die Größe des Elements immer relativ zur Größe seines Elternteils sein wird. Die Eigenschaft ist vererbbar.

```css
@property --item-size {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 40%;
}
```

Sie können auch [JavaScript](/de/docs/Web/JavaScript) verwenden, um Eigenschaften zu registrieren. Die JavaScript-Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) ist äquivalent zur `@property` Regel. Hier haben wir unsere zweite benutzerdefinierte Eigenschaft, `--item-color`, mit einem Anfangswert von `aqua` definiert, um nur {{cssxref("&lt;color&gt;")}} Werte zu akzeptieren, und damit diese nicht vererbt wird.

```js
window.CSS.registerProperty({
  name: "--item-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "aqua",
});
```

Siehe den [JavaScript API Leitfaden zur Registrierung benutzerdefinierter Eigenschaften](/de/docs/Web/API/CSS_Properties_and_Values_API/guide) für weitere Informationen.

### Verwendung registrierter benutzerdefinierter Eigenschaften

Wir können registrierten Eigenschaften neue Werte zuweisen. Hier setzen wir benutzerdefinierte Eigenschaftswerte auf das übergeordnete Container-Element und dann auf die Elemente selbst. Die für `two` gesetzten Werte sind gültig, während die für `three` gesetzten Werte ungültig sind.

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

Wir verwenden die beiden benutzerdefinierten Eigenschaften als Werte für die {{cssxref("width")}}, {{cssxref("height")}}, und {{cssxref("background-color")}} Eigenschaften der Elemente:

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

Der `inherits` Deskriptor steuert, ob die registrierte CSS-Eigenschaft standardmäßig vererbbar ist oder nicht.

In unserem Beispiel war die Größen-Eigenschaft so eingestellt, dass sie vererbbar ist; die Farbe war es nicht. Die beiden benutzerdefinierten Eigenschaften, `--item-size: 20%` und `--item-color: orange;` wurden auf dem übergeordneten `container` festgelegt und überschreiben die `40%` und `aqua` Standardwerte, die gesetzt wurden, als diese benutzerdefinierten Eigenschaften definiert wurden.

Für das erste Element wurden keine dieser benutzerdefinierten Eigenschaften gesetzt. Weil `--item-size` vererbbar ist, wurde der auf dem übergeordneten `container` gesetzte Wert `20%` geerbt und verwendet. Die Eigenschaft `--item-color` war nicht vererbbar, sodass der auf dem Elternteil gesetzte `orange` Wert nicht berücksichtigt wurde. Stattdessen wurde der Standard-Startwert `aqua` verwendet.

Der `inherits` Deskriptor ist ein erforderlicher Deskriptor; wenn er fehlen würde oder ungültig wäre, wäre die gesamte `@property` Regel ungültig und würde ignoriert.

### Gültige und ungültige Werte

Ein Vorteil der Registrierung Ihrer benutzerdefinierten Eigenschaften (im Gegensatz zur Verwendung einfacher Deklarationen) besteht darin, dass sie nur auf gültige Werte neu zugewiesen werden können. Der `syntax` Deskriptor definiert, welche Werte gültig sind. Jede Deklaration mit einem Wert, der diese Einschränkungen nicht erfüllt, wird ignoriert.

Für das zweite Element wurden CSS-Globale-Schlüsselwörter für beide benutzerdefinierten Eigenschaften gesetzt. Die CSS Globalen Schlüsselwortwerte — {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, und {{cssxref("revert-layer")}} — sind gültige Werte für alle Wertetypen und daher unabhängig vom `syntax` Deskriptor-Wert gültig. Die `--item-size` wurde auf `initial` gesetzt und daher der `initial-value: 40%;` verwendet, der in der `@property` Deklaration gesetzt wurde. Die `--item-color` wurde auf `inherit` gesetzt, was explizit den `orange` Wert von seinem Elternteil erbte, obwohl die benutzerdefinierte Eigenschaft ansonsten nicht vererbbar gesetzt war. Deshalb war das zweite Element orange.

Für das dritte Element wurde der `--item-size` Wert auf `1000px` gesetzt. Während `1000px` ein {{cssxref("length")}} Wert ist, erfordert die `@property` Deklaration, dass der Wert ein `<percentage>` ist, sodass die Deklaration ungültig war und ignoriert wurde, was bedeutete, dass das vererbbare `20%`, das auf dem Elternteil gesetzt wurde, verwendet wurde. Der Wert `xyz` war ebenfalls ungültig. Da `registerProperty()` `--item-color` als nicht vererbbar festlegte, wurde der Standard-Startwert von `aqua` verwendet und nicht der Wert `orange` des Elternteils.

### Animation benutzerdefinierter Eigenschaftswerte

Registrierte CSS benutzerdefinierte Eigenschaften bieten einen Leistungsvorteil, weil sie als getypte Daten und nicht als Strings behandelt werden, wodurch der Rendering-Engine des Browsers eine definierte Syntax und Vererbungsregeln zur Verfügung gestellt werden. Der Browser analysiert die definierte Syntax einmal; wenn diese Variable an anderer Stelle verwendet wird, sind der Typ und die interne Darstellung bereits bekannt, sodass sie nicht neu analysiert werden müssen.

Da nicht registrierte benutzerdefinierte Eigenschaften nur Strings sind, kann der Browser sie nicht {{Glossary("interpolation", "interpolieren")}}, wodurch eine sanfte Animation nicht möglich ist. Stattdessen werden nicht registrierte benutzerdefinierte Eigenschaftswerte diskret animiert. Registrierte Variablen können interpoliert und daher animiert werden; ihre Interpolationsberechnungen werden an die GPU ausgelagert, was leistungsfähiger ist als Animationen, die auf dem Hauptthread durchgeführt werden.

Siehe [Animation eines benutzerdefinierten Eigenschaftswertes](/de/docs/Web/CSS/Reference/At-rules/@property#animating_a_custom_property_value) für ein Animationsbeispiel.

## Siehe auch

- {{cssxref("var()")}}
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [CSS Properties and Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS Properties and Values](/de/docs/Web/API/CSS_Properties_and_Values_API) API
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
