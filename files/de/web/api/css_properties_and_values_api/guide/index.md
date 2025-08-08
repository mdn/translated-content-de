---
title: Verwenden der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Sammlung von APIs — ermöglicht die Registrierung von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*), einschließlich Typprüfung der Eigenschaften, Standardwerten und Eigenschaften, die ihren Wert entweder erben oder nicht.

## Registrierung einer benutzerdefinierten Eigenschaft

Die Registrierung einer benutzerdefinierten Eigenschaft ermöglicht es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen zulässig sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren, entweder in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft ist, dass der Browser nun weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, beispielsweise bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, und nimmt an, dass jeder Wert verwendet werden kann und deshalb nicht animiert werden kann. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser diese Syntax optimieren, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann bei Hover oder Fokus zu einer anderen Farbe übergegangen. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

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

Während es nicht funktional genau ist, ist ein guter Weg, um über den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft nachzudenken, der Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl, wenn versucht wird, die {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, weil der Browser den Wert von `auto` erst kennt, wenn er berechnet wird. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenso nicht, welchen Wert sie haben _könnte_, bis er berechnet wird, und deshalb kann er keinen Übergang von einem Wert zu einem anderen einrichten. Wenn die Eigenschaft jedoch registriert ist, haben Sie dem Browser mitgeteilt, welchen Typ von Wert er erwarten soll, und da er dies weiß, kann er die Übergänge ordnungsgemäß einrichten.

## Fallstricke

Es gibt zwei Fallstricke bei der Registrierung einer Eigenschaft. Der erste ist, dass es, einmal registriert, keine Möglichkeit gibt, die Eigenschaft zu aktualisieren, und der Versuch, sie erneut mit [JavaScript](/de/docs/Web/JavaScript) zu registrieren, einen Fehler auslöst, der anzeigt, dass sie bereits definiert wurde.

Zweitens werden registrierte Eigenschaften im Gegensatz zu Standard-Eigenschaften nicht validiert, wenn sie geparst werden, sondern erst, wenn sie berechnet werden. Das bedeutet sowohl, dass ungültige Werte beim Inspizieren der Eigenschaften des Elements nicht als ungültig erscheinen, als auch, dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen Eigenschaft nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
