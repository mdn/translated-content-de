---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal als "CSS-Variable" bezeichnet) anstelle eines beliebigen Teils eines Werts einer anderen Eigenschaft einzufügen.

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

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder sonstigem außer in Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder einem Wert, dessen Bedeutung keinen Bezug zur Variablen hat.)

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

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft, die ersetzt werden soll. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Wenn die benutzerdefinierte Eigenschaft, auf die das erste Argument verweist, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für die Verwendung durch Autoren und Benutzer bestimmt; CSS wird ihnen niemals eine Bedeutung über das hier Präsentierte hinaus geben.

- `<declaration-value>`
  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht. Dieser Wert kann alle Zeichen außer einigen Zeichen mit spezieller Bedeutung wie Zeilenumbrüchen, unübereinstimmten schließenden Klammern, d.h. `)`, `]` oder `}`, oberflächlichen Semikolons oder Ausrufezeichen enthalten. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft mit der `var()`-Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst die `var()`-Funktion auf einen [ungültigen Wert](#ungültige_werte) auf.

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) entspricht, die `var()`-Funktion durch nichts ersetzt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Eigenschaft auf :root

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

Hier wurde der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` festgelegt. Daher wird die Hintergrundfarbe des HTML-Körpers pink sein.

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers pink sein, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

### Verwendung einer benutzerdefinierten Eigenschaft, die in einer anderen Datei festgelegt ist

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

Die Hintergrundfarbe des HTML-Körpers wird auch in diesem Fall pink sein, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallbacks zur Verwendung, wenn die Eigenschaft nicht gesetzt wurde

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

Da `--main-bg-color` nicht gesetzt ist, wird die `background-color` des Körpers auf `--backup-bg-color` zurückfallen, die ist teal.

### Ungültige Werte

`var()`-Funktionen können auf ungültige Werte auflösen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert und kein Fallback-Wert angegeben ist.
- Die benutzerdefinierte Eigenschaft definiert ist, ihr Wert jedoch ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

In diesem Fall wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können, wie andere Syntaxfehler dies tun können. Daher hat der Benutzeragent die anderen überlagerten Werte bereits verworfen, sobald er merkt, dass ein Eigenschaftswert ungültig ist.

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

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen wörtlichen Farbe immer noch rot ist, da die `color: 20px`-Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom Benutzeragenten gesteuert werden.
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} At-Regel
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
