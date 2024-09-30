---
title: Die CSS Properties and Values API verwenden
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Gruppe von APIs — ermöglicht die Registrierung von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*), wodurch Typprüfungen, Standardwerte und Eigenschaften, die ihren Wert erben oder nicht, ermöglicht werden.

## Eine benutzerdefinierte Eigenschaft registrieren

Die Registrierung einer benutzerdefinierten Eigenschaft erlaubt es Ihnen, dem Browser mitzuteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll: welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und welchen Standardwert die benutzerdefinierte Eigenschaft hat. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` mit [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und wird seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` mit dem {{cssxref('@property')}} [At-rule](/de/docs/Web/CSS/At-rule). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und wird seinen Wert nicht erben:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft besteht darin, dass der Browser jetzt weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, z. B. bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, daher geht er davon aus, dass jeder Wert verwendet werden kann, und kann sie daher nicht animieren. Wenn eine Eigenschaft jedoch eine registrierte Syntax besitzt, kann der Browser diese Syntax optimieren, einschließlich der Fähigkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Gradient verwendet. Diese Eigenschaft wird dann bei Hover oder Fokus auf eine andere Farbe überführt. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

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

Obwohl es nicht funktional zutreffend ist, lässt sich der Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft gut mit dem Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl beim Versuch einer Animation von {{cssxref('height')}} veranschaulichen. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, weil der Browser den Wert von `auto` nicht kennt, bis er berechnet wird. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, welchen Wert sie _haben könnte_, bis er berechnet wird, und kann deshalb keinen Übergang von einem Wert zu einem anderen einrichten. Bei einer registrierten Eigenschaft haben Sie jedoch dem Browser mitgeteilt, welchen Wertetyp er erwarten sollte, und weil er das weiß, kann er dann die Übergänge korrekt einrichten.

## Stolpersteine

Es gibt zwei Stolpersteine bei der Registrierung einer Eigenschaft. Der erste ist, dass es, einmal registriert, keine Möglichkeit gibt, eine Eigenschaft zu aktualisieren. Der Versuch, sie mit [JavaScript](/de/docs/Web/JavaScript) erneut zu registrieren, wirft einen Fehler, der angibt, dass sie bereits definiert wurde.

Zweitens, im Gegensatz zu Standardmeldungen, werden registrierte Eigenschaften nicht validiert, wenn sie geparst werden. Vielmehr werden sie validiert, wenn sie berechnet werden. Das bedeutet sowohl, dass ungültige Werte beim Inspizieren der Eigenschaften des Elements nicht als ungültig erscheinen werden, und dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfallen wird. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
