---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`var()`**-Funktion von [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal auch "CSS-Variable" genannt) anstelle eines beliebigen Teils eines Werts einer anderen Eigenschaft einzufügen.

{{InteractiveExample("CSS Demo: var()")}}

```css interactive-example-choice
border-color: var(--color-a);
```

```css interactive-example-choice
border-color: var(--color-b);
```

```css interactive-example-choice
border-color: var(--color-c);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    Three color options have been set on the :root use these to change the
    border color.
  </div>
</section>
```

```css interactive-example
:root {
  --color-a: pink;
  --color-b: green;
  --color-c: rebeccapurple;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder in etwas anderem als Eigenschaftswerten verwendet werden. (Ein solcher Versuch führt normalerweise zu einem ungültigen Syntaxfehler oder einem Wert, dessen Bedeutung keinen Zusammenhang mit der Variablen hat.)

## Syntax

```css
/* Basic usage */
var(--custom-prop);

/* With fallback */
var(--custom-prop,);  /* empty value as fallback */
var(--custom-prop, initial); /* initial value of the property as fallback */
var(--custom-prop, red);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Rückfallwert. Wenn die benutzerdefinierte Eigenschaft, auf die das erste Argument verweist, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Rückfalls erlaubt, wie die der benutzerdefinierten Eigenschaften, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Rückfall von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Rückfallwert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für Autoren und Benutzer; CSS wird ihnen niemals eine andere Bedeutung geben als die, die hier beschrieben wird.

- `<declaration-value>`
  - : Der Rückfallwert der benutzerdefinierten Eigenschaft, der verwendet wird, wenn die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) entspricht. Dieser Wert kann beliebige Zeichen enthalten, außer einigen Zeichen mit besonderer Bedeutung wie neuen Zeilen, nicht übereinstimmenden schließenden Klammern, d.h. `)`, `]` oder `}`, Semikolons auf oberster Ebene oder Ausrufezeichen. Der Rückfallwert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()`-Syntax sein. Wenn der Rückfallwert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst die `var()`-Funktion einen [ungültigen Wert](#ungültige_werte) auf.

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords) entspricht, `var()` durch nichts ersetzt werden sollte.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Eigenschaft, die auf :root gesetzt ist

#### CSS

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

#### Ergebnis

{{EmbedLiveSample("Using a custom property set on :root")}}

Hier wurde der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. Somit wird die Hintergrundfarbe des HTML-Body rosa sein.

### Verwendung einer benutzerdefinierten Eigenschaft, bevor sie gesetzt ist

#### CSS

```css
body {
  background-color: var(--main-bg-color);
}

:root {
  --main-bg-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Using a custom property before it is set")}}

In diesem Beispiel wird die Hintergrundfarbe des HTML-Body rosa sein, auch wenn die benutzerdefinierte Eigenschaft später gesetzt wird.

### Verwendung einer benutzerdefinierten Eigenschaft, die in einer anderen Datei gesetzt ist

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="1.css" />
    <link rel="stylesheet" href="2.css" />
  </head>
  <body></body>
</html>
```

#### CSS

```css
/* 1.css */
body {
  background-color: var(--main-bg-color);
}
```

```css
/* 2.css */
:root {
  --main-bg-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Using a custom property set in another file")}}

In diesem Fall wird die Hintergrundfarbe des HTML-Body rosa sein, auch wenn die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Rückfällen zur Verwendung, wenn die Eigenschaft nicht gesetzt wurde

#### HTML

```html
<div class="component">
  <h1 class="header">Header</h1>
  <p class="text">Text</p>
</div>
```

#### CSS

```css
/* In the component's style: */
.component .header {
  /* header-color isn't set, and so remains blue, the fallback value */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application's style: */
.component {
  --text-color: #008800;
}
```

#### Ergebnis

{{EmbedLiveSample("Custom properties with fallbacks for use when the property has not been set")}}

Da `--header-color` nicht gesetzt ist, wird der Text "Header" blau sein, der Rückfallwert.

### Verwendung einer benutzerdefinierten Eigenschaft als Rückfall

#### CSS

```css
:root {
  --backup-bg-color: teal;
}

body {
  background-color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

#### Ergebnis

{{EmbedLiveSample("Using a custom property as a fallback")}}

Da `--main-bg-color` nicht gesetzt ist, wird die `background-color` des Body zu `--backup-bg-color` zurückfallen, welches türkis ist.

### Ungültige Werte

`var()`-Funktionen können sich auf ungültige Werte auflösen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Rückfallwert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert für die Eigenschaft, in der sie verwendet wird, ungültig ist.

Wenn dies passiert, wird die Eigenschaft behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht „frühzeitig fehlschlagen“ können wie andere Syntaxfehler, so dass der User-Agent, wenn er feststellt, dass ein Eigenschaftswert ungültig ist, die anderen kaskadierten Werte bereits verworfen hat.

Zum Beispiel:

#### HTML

```html
<p class="p1">Undefined variable</p>
<p class="p2">Invalid variable</p>
<p class="p3">Invalid literal color</p>
```

#### CSS

```css
p {
  color: red;
}

.p1 {
  color: var(--invalid-color);
}

.p2 {
  --invalid-color: 20px;
  color: var(--invalid-color);
}

.p3 {
  color: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample("Invalid values")}}

Beachten Sie, dass die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einem ungültigen literalen Farbwert bleibt rot, weil die `color: 20px` Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom User-Agent gesteuert werden.
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} Regel
- [CSS Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
