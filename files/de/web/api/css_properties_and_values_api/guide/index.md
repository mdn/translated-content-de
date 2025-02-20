---
title: Verwenden der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — ein Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Sammelprojekts — ermöglicht die Registrierung von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*), einschließlich Typüberprüfung, Standardwerten und Eigenschaften, die ihren Wert erben oder nicht.

## Eine benutzerdefinierte Eigenschaft registrieren

Durch die Registrierung einer benutzerdefinierten Eigenschaft können Sie dem Browser mitteilen, wie sich die benutzerdefinierte Eigenschaft verhalten soll: Welche Typen erlaubt sind, ob die benutzerdefinierte Eigenschaft ihren Wert erbt und was der Standardwert der benutzerdefinierten Eigenschaft ist. Es gibt zwei Möglichkeiten, eine Eigenschaft zu registrieren: in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) mit dem Namen `--my-prop` mittels [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann in CSS erfolgen. Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) mit dem Namen `--my-prop` mittels der {{cssxref('@property')}}-Regel ([at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Ein Vorteil der Registrierung einer Eigenschaft besteht darin, dass der Browser nun weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, z. B. bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, sodass er davon ausgeht, dass jeder Wert verwendet werden kann, und sie daher nicht animieren kann. Wenn eine Eigenschaft jedoch eine registrierte Syntax hat, kann der Browser diese Syntax optimieren, einschließlich der Fähigkeit, sie zu animieren.

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann beim Hover oder Fokus auf eine andere Farbe übergeblendet. Beachten Sie, dass der Übergang bei der registrierten Eigenschaft funktioniert, nicht jedoch bei der nicht registrierten!

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

Auch wenn es funktional nicht akkurat ist, könnte man den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft mit dem Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl vergleichen, wenn Sie versuchen, die {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl überblenden, da der Browser den Wert von `auto` nicht kennt, bis er berechnet wird. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenfalls nicht, welchen Wert sie _haben könnte_, bis er berechnet wird. Dadurch kann kein Übergang zwischen zwei Werten eingerichtet werden. Wenn die Eigenschaft jedoch registriert ist, haben Sie dem Browser mitgeteilt, welchen Typ von Wert er erwarten sollte, und da er dies weiß, kann er die Übergänge korrekt einrichten.

## Stolperfallen

Es gibt zwei Stolperfallen bei der Registrierung einer Eigenschaft. Die erste besteht darin, dass, sobald eine Eigenschaft registriert ist, es keine Möglichkeit gibt, sie zu aktualisieren, und ein erneuter Registrierungsversuch mit [JavaScript](/de/docs/Web/JavaScript) einen Fehler auslöst, der besagt, dass sie bereits definiert ist.

Zweitens werden registrierte Eigenschaften im Gegensatz zu Standard-Eigenschaften nicht beim Parsen validiert. Stattdessen werden sie beim Berechnen validiert. Das bedeutet erstens, dass ungültige Werte beim Inspektieren der Eigenschaften des Elements nicht als ungültig angezeigt werden, und zweitens, dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft fällt jedoch auf ihren registrierten Standardwert zurück.

## Browser-Kompatibilität

{{Compat}}
