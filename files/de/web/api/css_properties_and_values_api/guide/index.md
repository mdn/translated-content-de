---
title: Verwendung der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Bereichs — ermöglicht die Registrierung von [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), die eine Überprüfung des Eigenschaftentyps, Standardwerte und Eigenschaften, die ihren Wert erben oder nicht, erlauben.

## Registrierung einer benutzerdefinierten Eigenschaft

Die Registrierung einer benutzerdefinierten Eigenschaft ermöglicht es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen zulässig sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt, und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-prop` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-prop` unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft besteht darin, dass der Browser nun weiß, wie er Ihre benutzerdefinierte Eigenschaft behandeln soll, beispielsweise im Hinblick auf Transitionen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, daher nimmt er an, dass jeder Wert verwendet werden kann und kann sie deshalb nicht animieren. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser diese Syntax optimieren, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Farbverlauf verwendet. Diese Eigenschaft wird dann beim Hover oder Fokussieren zu einer anderen Farbe übergeblendet. Beachten Sie, dass die Transition mit der registrierten Eigenschaft funktioniert, aber nicht mit der nicht registrierten!

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

Obwohl es funktional nicht ganz korrekt ist, ist eine gute Möglichkeit, den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft zu verstehen, der Vergleich zwischen einem {{cssxref('custom-ident')}} und einer Zahl, wenn man versucht, die {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl überblenden oder animieren, da der Browser den Wert von `auto` erst kennt, wenn er berechnet wurde. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, was der Wert _sein könnte_, bis er berechnet wurde, und kann deshalb keinen Übergang von einem Wert zum anderen einrichten. Wenn die Eigenschaft jedoch registriert ist, haben Sie dem Browser mitgeteilt, welche Art von Wert er erwarten soll, und weil er das weiß, kann er die Transitionen ordnungsgemäß einrichten.

## Fallstricke

Es gibt zwei Fallstricke bei der Registrierung einer Eigenschaft. Der erste ist, dass, sobald eine Eigenschaft registriert ist, es keine Möglichkeit gibt, sie zu aktualisieren, und ein erneuter Registrierungsversuch mit [JavaScript](/de/docs/Web/JavaScript) einen Fehler auslöst, dass sie bereits definiert wurde.

Zweitens werden registrierte Eigenschaften, im Gegensatz zu Standard-Eigenschaften, nicht beim Parsen validiert. Sie werden stattdessen beim Berechnen validiert. Das bedeutet, dass ungültige Werte nicht als ungültig erscheinen, wenn die Eigenschaften des Elements überprüft werden, und dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
