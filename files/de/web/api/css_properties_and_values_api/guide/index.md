---
title: Verwenden der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Gruppe von APIs — ermöglicht die Registrierung von [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Dadurch wird die Überprüfung des Eigenschaftstyps, Standardwerte und Eigenschaften, die ihren Wert erben oder nicht, ermöglicht.

## Eine benutzerdefinierte Eigenschaft registrieren

Die Registrierung einer benutzerdefinierten Eigenschaft ermöglicht es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben und es wird seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule). `--my-prop` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben und es wird seinen Wert nicht erben:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung von registrierten benutzerdefinierten Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft besteht darin, dass der Browser nun weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, z.B. bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, daher geht er davon aus, dass jeder Wert verwendet werden kann und kann sie daher nicht animieren. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser diese Syntax optimieren, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann beim Schweben oder Fokussieren auf eine andere Farbe übergegangen. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

### HTML

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

### CSS

```css
.registered {
  --registered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--registered));
  transition: --registered 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --registered: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
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

Obwohl es funktional nicht akkurat ist, ist ein guter Weg, um den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft zu verstehen, der Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl, wenn versucht wird, {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, weil der Browser den Wert von `auto` nicht kennt, bis er berechnet wird. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, welchen Wert sie _haben kann_, bis er berechnet wird, und deswegen kann er keinen Übergang von einem Wert zu einem anderen einrichten. Wenn die Eigenschaft jedoch registriert ist, haben Sie dem Browser mitgeteilt, welche Art von Wert er erwarten soll, und weil er das weiß, kann er die Übergänge korrekt einrichten.

## Fallstricke

Es gibt zwei Fallstricke bei der Registrierung einer Eigenschaft. Der erste ist, dass es nach der Registrierung einer Eigenschaft keine Möglichkeit gibt, sie zu aktualisieren, und ein erneuter Registrierungsversuch mit [JavaScript](/de/docs/Web/JavaScript) wird einen Fehler auslösen, der darauf hinweist, dass sie bereits definiert wurde.

Zweitens, im Gegensatz zu Standard-Eigenschaften, werden registrierte Eigenschaften nicht validiert, wenn sie geparst werden. Stattdessen werden sie validiert, wenn sie berechnet werden. Das bedeutet, dass ungültige Werte nicht als ungültig erscheinen, wenn man die Eigenschaften des Elements inspiziert, und dass das Hinzufügen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
