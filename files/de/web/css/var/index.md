---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal als "CSS-Variable" bezeichnet) anstelle eines Teils eines Werts einer anderen Eigenschaft einzufügen.

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

Die `var()` Funktion kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem verwendet werden, das nicht Eigenschaftswerte betrifft. (Dies führt normalerweise zu einer ungültigen Syntax oder zu einem Wert, dessen Bedeutung keine Verbindung zur Variablen hat.)

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

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Ersatzwert. Falls die durch das erste Argument referenzierte benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Fallbacks erlaubt, wie die der benutzerdefinierten Eigenschaften, Kommas. Zum Beispiel definiert `var(--foo, red, blue)` ein Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für die Verwendung durch Autoren und Benutzer bestimmt; CSS wird ihnen niemals eine Bedeutung über das hier Dargelegte hinaus geben.

- `<declaration-value>`
  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht. Dieser Wert darf jedes Zeichen außer einigen Zeichen mit besonderer Bedeutung wie Zeilenumbrüchen, nicht übereinstimmenden abschließenden Klammern, d.h. `)`, `]` oder `}`, Top-Level-Strichpunkten oder Ausrufezeichen enthalten. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()` Syntax enthalten. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, wird die `var()` Funktion zu einem [ungültigen Wert](#ungültige_werte).

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass, falls die `--a` benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, `var()` durch nichts ersetzt werden sollte.

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

Hier wurde der Wert der `background-color` Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` festgelegt. Somit wird die Hintergrundfarbe des HTML-Körpers rosa sein.

### Verwendung einer benutzerdefinierten Eigenschaft, bevor sie gesetzt wird

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers rosa sein, auch wenn die benutzerdefinierte Eigenschaft später gesetzt wird.

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

Die Hintergrundfarbe des HTML-Körpers wird in diesem Fall rosa sein, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallbacks zur Verwendung, wenn die Eigenschaft nicht gesetzt ist

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

Da `--header-color` nicht gesetzt ist, wird der Text "Header" blau sein, der Fallback-Wert.

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

Da `--main-bg-color` nicht gesetzt ist, wird die `background-color` des Körpers auf `--backup-bg-color` fallen, die türkis ist.

### Ungültige Werte

`var()` Funktionen können zu ungültigen Werten führen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert für die Eigenschaft, in der sie verwendet wird, ungültig ist.

Wenn dies passiert, wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können wie andere Syntaxfehler, sodass, wenn der Benutzeragent erkennt, dass ein Eigenschaftswert ungültig ist, er die anderen überlagerten Werte bereits verworfen hat.

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

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen literalen Farbe weiterhin rot ist, da die `color: 20px` Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom Benutzeragenten gesteuert werden.
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} Regel
- [CSS-Benutzerdefinierte Eigenschaften für die Kaskadierungsvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
