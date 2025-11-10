---
title: Verwenden der CSS-Eigenschaften- und Werte-API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS-Eigenschaften- und Werte-API** — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sets — ermöglicht die Registrierung von [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), was eine Überprüfung des Eigenschaftstyps, Standardwerte und Eigenschaften, die ihren Wert vererben oder nicht vererben, ermöglicht.

## Registrieren einer benutzerdefinierten Eigenschaft

Beim Registrieren einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--my-prop` mit [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` wird die CSS-Farbsyntax verwenden, hat einen Standardwert von `#c0ffee` und wird seinen Wert nicht vererben:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--my-prop` unter Verwendung der {{cssxref('@property')}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules). `--my-prop` wird die CSS-Farbsyntax verwenden, hat einen Standardwert von `#c0ffee` und wird seinen Wert nicht vererben:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwenden registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft ist, dass der Browser jetzt weiß, wie Ihre benutzerdefinierte Eigenschaft behandelt werden soll, zum Beispiel bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, daher geht er davon aus, dass jeder Wert verwendet werden kann und kann sie daher nicht animieren. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser die Optimierung um diese Syntax herum vornehmen, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann beim Hovern oder Fokussieren auf eine andere Farbe umgestellt. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

### HTML

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

### CSS

```css
.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, white, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, white, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}

button {
  height: 40vh;
  display: block;
  width: 100%;
  font-size: 3vw;
}
```

### JavaScript

```js
window.CSS.registerProperty({
  name: "--registered",
  syntax: "<color>",
  inherits: false,
  initialValue: "red",
});
```

### Ergebnis

{{EmbedLiveSample("Using_registered_custom_properties", 320, 320)}}

Auch wenn es nicht funktional korrekt ist, ist eine gute Möglichkeit, den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft zu verstehen, der Unterschied zwischen einer {{cssxref('custom-ident')}} und einer Zahl, wenn versucht wird, {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, weil der Browser den Wert von `auto` erst kennt, wenn er berechnet wurde. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, welchen Wert sie _haben könnte_, bis er berechnet wird, und deshalb kann er keinen Übergang von einem Wert zum anderen einrichten. Wenn sie jedoch registriert ist, haben Sie dem Browser mitgeteilt, welchen Typ von Wert er erwarten soll, und da er das weiß, kann er die Übergänge ordnungsgemäß einrichten.

## Stolpersteine

Es gibt zwei Fallstricke bei der Registrierung einer Eigenschaft. Der erste ist, dass eine Eigenschaft, sobald sie registriert wurde, nicht mehr aktualisiert werden kann, und der Versuch, sie mit [JavaScript](/de/docs/Web/JavaScript) erneut zu registrieren, einen Fehler auslöst, der besagt, dass sie bereits definiert wurde.

Zweitens werden registrierte Eigenschaften im Gegensatz zu Standard-Eigenschaften nicht validiert, wenn sie geparst werden. Vielmehr werden sie validiert, wenn sie berechnet werden. Das bedeutet sowohl, dass ungültige Werte nicht als ungültig erscheinen, wenn die Eigenschaften des Elements inspiziert werden, als auch, dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen Eigenschaft nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
