---
title: Verwendung der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: 98bbdcd90e5487539cebe19b12fe3d731fb5a03e
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — als Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Reihe von APIs — ermöglicht die Registrierung von [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), was das Überprüfen von Eigenschaftstypen, Standardwerten und Eigenschaften, die ihre Werte vererben oder nicht, ermöglicht.

## Registrierung einer benutzerdefinierten Eigenschaft

Die Registrierung einer benutzerdefinierten Eigenschaft ermöglicht es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt, und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren, in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-prop` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben, und es wird seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-prop` unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben, und es wird seinen Wert nicht erben:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft ist, dass der Browser jetzt weiß, wie er Ihre benutzerdefinierte Eigenschaft in Dingen wie Übergängen behandeln soll! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, daher geht er davon aus, dass jeder Wert verwendet werden kann und kann sie daher nicht animieren. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser diese Syntax optimieren, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` unter Verwendung der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann bei Hover oder Focus auf eine andere Farbe übergegangen. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, aber nicht mit der nicht registrierten!

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

Auch wenn es nicht vollständig korrekt ist, eine gute Möglichkeit, über den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft nachzudenken, ist der Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl, wenn versucht wird, {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, da der Browser den Wert von `auto` nicht kennt, bis er berechnet wird. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenso wenig, welchen Wert sie _haben könnte_, bis er berechnet wird, und kann deshalb keinen Übergang von einem Wert zum anderen festlegen. Wenn sie jedoch registriert ist, haben Sie dem Browser mitgeteilt, welchen Typ von Wert er erwarten soll, und weil er das weiß, kann er die Übergänge ordnungsgemäß einrichten.

## Überraschungen

Es gibt zwei Überraschungen bei der Registrierung einer Eigenschaft. Die erste ist, dass, sobald eine Eigenschaft registriert ist, es keine Möglichkeit gibt, sie zu aktualisieren, und der Versuch, sie erneut mit [JavaScript](/de/docs/Web/JavaScript) zu registrieren, einen Fehler auslöst, der anzeigt, dass sie bereits definiert wurde.

Zweitens, im Gegensatz zu Standard-Eigenschaften werden registrierte Eigenschaften nicht validiert, wenn sie analysiert werden. Vielmehr werden sie validiert, wenn sie berechnet werden. Das bedeutet sowohl, dass ungültige Werte nicht als ungültig erscheinen, wenn die Eigenschaften des Elements inspiziert werden, und dass das Hinzufügen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Registrieren von benutzerdefinierten Eigenschaften mit CSS](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
