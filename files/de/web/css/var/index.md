---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal auch als "CSS-Variable" bezeichnet) anstelle eines Teils eines Wertes einer anderen Eigenschaft einzufügen.

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
  border: 10px solid #000;
  padding: 10px;
}
```

Die `var()` Funktion kann nicht in Eigenschaftsnamen, Selektoren oder anderen Dingen außer Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder einem Wert, dessen Bedeutung keine Verbindung zur Variablen hat.)

## Syntax

```css
/* Basic usage */
var(--custom-prop);

/* With fallback */
var(--custom-prop,);  /* empty value as fallback */
var(--custom-prop, initial); /* initial value of the property as fallback */
var(--custom-prop, #FF0000);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Wenn die durch das erste Argument referenzierte benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, die durch einen Bezeichner dargestellt wird, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich zur Verwendung durch Autoren und Benutzer gedacht; CSS wird ihnen niemals eine andere Bedeutung als die hier dargestellte geben.

- `<declaration-value>`
  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht. Dieser Wert darf jedes Zeichen enthalten, mit Ausnahme einiger Zeichen mit spezieller Bedeutung wie neuen Zeilen, nicht übereinstimmender schließender Klammern, d.h. `)`, `]` oder `}`, Semikolons auf höchster Ebene oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()` Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst die `var()` Funktion sich zu einem [ungültigen Wert](#ungültige_werte) auf.

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, die `var()` durch nichts ersetzt werden soll.

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

Hier wurde der Wert der Eigenschaft `background-color` über die benutzerdefinierte Eigenschaft `--main-bg-color` festgelegt. Somit wird die Hintergrundfarbe des HTML-Körpers rosa.

### Verwendung einer benutzerdefinierten Eigenschaft, bevor sie festgelegt ist

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers rosa, auch wenn die benutzerdefinierte Eigenschaft später gesetzt wird.

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

In diesem Fall wird die Hintergrundfarbe des HTML-Körpers rosa, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallbacks für die Nutzung, wenn die Eigenschaft nicht gesetzt wurde

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
  --text-color: #080;
}
```

#### Ergebnis

{{EmbedLiveSample("Custom properties with fallbacks for use when the property has not been set")}}

Da `--header-color` nicht gesetzt ist, wird der Text "Header" blau, der Fallback-Wert.

### Verwendung einer benutzerdefinierten Eigenschaft als Fallback

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

Da `--main-bg-color` nicht gesetzt ist, fällt die `background-color` des Körpers auf `--backup-bg-color` zurück, das türkis ist.

### Ungültige Werte

`var()` Funktionen können sich in ungültige Werte auflösen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert angegeben wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

In diesen Fällen wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können wie andere Syntaxfehler, sodass, wenn der User-Agent feststellt, dass ein Eigenschaftswert ungültig ist, die anderen gekaskadierten Werte bereits verworfen wurden.

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

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, während der Absatz mit einer ungültigen literalen Farbe weiterhin rot ist, da die `color: 20px` Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom User-Agent gesteuert werden.
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} At-Regel
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
