---
title: Verwendung der API für CSS-Eigenschaften und -Werte
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **API für CSS-Eigenschaften und -Werte** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Sammlung von APIs — ermöglicht die Registrierung von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*), was die Überprüfung des Eigenschaftstyps, Standardwerte sowie Eigenschaften, die ihren Wert erben oder nicht, ermöglicht.

## Registrierung einer benutzerdefinierten Eigenschaft

Durch die Registrierung einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll; welche Typen zulässig sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` mithilfe von {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}. `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das Folgende registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-prop` mithilfe der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft besteht darin, dass der Browser nun weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, z.B. durch Übergänge! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, sodass er annimmt, dass jeder Wert verwendet werden kann und sie daher nicht animieren kann. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser um diese Syntax optimieren, einschließlich der Möglichkeit, sie zu animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` registriert, indem die Syntax `<color>` verwendet wird und dann in einem linearen Verlauf verwendet wird. Diese Eigenschaft wird dann beim Hover oder Fokus auf eine andere Farbe übergeblendet. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

### HTML

```html
<button class="registered">Hintergrund Registriert</button>
<button class="unregistered">Hintergrund Nicht Registriert</button>
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

Obwohl es nicht funktional genau ist, ist eine gute Möglichkeit, über den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft nachzudenken, der Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl beim Versuch, die {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl überblenden, weil der Browser den Wert von `auto` nicht kennt, bis er berechnet ist. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, welchen Wert sie _haben könnte_, bis er berechnet ist, und deswegen kann er keinen Übergang von einem Wert zu einem anderen einrichten. Wenn sie jedoch registriert ist, haben Sie dem Browser mitgeteilt, welcher Werttyp zu erwarten ist, und da er das weiß, kann er die Übergänge ordnungsgemäß einrichten.

## Stolpersteine

Es gibt zwei Stolpersteine bei der Registrierung einer Eigenschaft. Der erste ist, dass, sobald eine Eigenschaft registriert ist, es keine Möglichkeit gibt, sie zu aktualisieren, und dass der Versuch, sie erneut mit [JavaScript](/de/docs/Web/JavaScript) zu registrieren, einen Fehler auslöst, der anzeigt, dass sie bereits definiert wurde.

Zweitens werden im Gegensatz zu Standard-Eigenschaften registrierte Eigenschaften nicht validiert, wenn sie geparst werden. Stattdessen werden sie validiert, wenn sie berechnet werden. Das bedeutet, dass sowohl ungültige Werte bei der Inspektion der Eigenschaften des Elements nicht als ungültig erscheinen, als auch das Einfügen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch (auf ihren registrierten Standardwert) zurückfallen.

## Browser-Kompatibilität

{{Compat}}
