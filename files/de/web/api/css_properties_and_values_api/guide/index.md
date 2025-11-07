---
title: Verwendung der CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API/guide
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Gruppe — ermöglicht die Registrierung von [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), wodurch eine Typprüfung der Eigenschaften, Standardwerte und Eigenschaften, die ihre Werte erben oder nicht, möglich werden.

## Registrierung einer benutzerdefinierten Eigenschaft

Die Registrierung einer benutzerdefinierten Eigenschaft erlaubt es Ihnen, dem Browser mitzuteilen, wie diese Eigenschaft sich verhalten soll: welche Typen erlaubt sind, ob die Eigenschaft ihren Wert erbt, und welcher Standardwert die Eigenschaft hat. Es gibt zwei Methoden zur Registrierung einer Eigenschaft, entweder in [JavaScript](/de/docs/Web/JavaScript) oder in [CSS](/de/docs/Web/CSS).

### CSS.registerProperty

Folgendes registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--my-prop` mittels [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```js
window.CSS.registerProperty({
  name: "--my-prop",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

### @property

Die gleiche Registrierung kann auch in CSS erfolgen. Folgendes registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-prop` mit der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules). `--my-prop` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt seinen Wert nicht:

```css
@property --my-prop {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Verwendung registrierter benutzerdefinierter Eigenschaften

Einer der Vorteile, wenn eine Eigenschaft registriert ist, ist, dass der Browser nun weiß, wie er mit Ihrer benutzerdefinierten Eigenschaft umgehen soll, etwa bei Übergängen! Wenn eine Eigenschaft nicht registriert ist, weiß der Browser nicht, wie er sie behandeln soll, also nimmt er an, dass jeder Wert verwendet werden kann und kann sie daher nicht animieren. Bei einer registrierten Syntax kann der Browser jedoch optimieren und sie unter anderem animieren!

In diesem Beispiel wurde die benutzerdefinierte Eigenschaft `--registered` mit der Syntax `<color>` registriert und dann in einem linearen Verlauf verwendet. Diese Eigenschaft wird dann bei Hover oder Fokus auf eine andere Farbe übergegangen. Beachten Sie, dass der Übergang mit der registrierten Eigenschaft funktioniert, nicht jedoch mit der nicht registrierten!

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

Obwohl nicht funktionsgenau, kann man den Unterschied zwischen der nicht registrierten Eigenschaft im obigen Beispiel und der registrierten Eigenschaft so verstehen, wie den Unterschied zwischen einem {{cssxref('custom-ident')}} und einer Zahl bei dem Versuch, die {{cssxref('height')}} zu animieren. Sie können nicht von `auto` zu einer Zahl übergehen oder animieren, da der Browser den Wert von `auto` erst kennt, wenn er berechnet wurde. Bei einer nicht registrierten Eigenschaft weiß der Browser ebenso nicht, welcher Wert _sein könnte_, bis er berechnet wird. Daher kann er keinen Übergang von einem Wert zum anderen einrichten. Wenn registriert, haben Sie dem Browser jedoch mitgeteilt, welchen Werttyp er erwarten soll. Weil er das weiß, kann er die Übergänge entsprechend einrichten.

## Stolpersteine

Es gibt zwei Stolpersteine bei der Registrierung einer Eigenschaft. Der erste ist, dass es, sobald eine Eigenschaft registriert ist, keine Möglichkeit gibt, sie zu aktualisieren, und ein Versuch, sie erneut mit [JavaScript](/de/docs/Web/JavaScript) zu registrieren, einen Fehler auslöst, der anzeigt, dass sie bereits definiert ist.

Zweitens werden registrierte Eigenschaften im Gegensatz zu Standard-Eigenschaften nicht validiert, wenn sie geparst werden, sondern erst, wenn sie berechnet werden. Das bedeutet, dass ungültige Werte nicht als ungültig erscheinen, wenn die Eigenschaften des Elements inspiziert werden, und dass das Einschließen einer ungültigen Eigenschaft nach einer gültigen nicht auf die gültige Eigenschaft zurückfällt. Eine ungültige Eigenschaft wird jedoch auf ihren registrierten Standardwert zurückfallen.

## Browser-Kompatibilität

{{Compat}}
