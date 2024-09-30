---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 11f1b8f19a3c5e644ee14ffe87c43253a7e22d82
---

{{CSSRef}}

Die **`var()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal auch "CSS-Variable" genannt) anstelle eines beliebigen Teils eines Wertes einer anderen Eigenschaft einzufügen.

{{EmbedInteractiveExample("pages/css/var.html")}}

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder etwas anderem als Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder einem Wert, dessen Bedeutung keinen Bezug zur Variablen hat.)

## Syntax

```css
/* Simple usage */
var(--custom-prop);

/* With fallback */
var(--custom-prop,);  /* empty value as fallback */
var(--custom-prop, initial); /* initial value of the property as fallback */
var(--custom-prop, #FF0000);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft, die ersetzt werden soll. Ein optionales zweites Argument der Funktion dient als Rückfallwert. Wenn die benutzerdefinierte Eigenschaft, die durch das erste Argument referenziert wird, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Rückfalls, ähnlich wie die von benutzerdefinierten Eigenschaften, erlaubt Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Rückfall von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Rückfallwert betrachtet.

### Werte

- `<custom-property-name>`

  - : Der Name einer benutzerdefinierten Eigenschaft, die durch einen Bezeichner dargestellt wird, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich zur Verwendung durch Autoren und Benutzer gedacht; CSS wird ihnen niemals eine andere Bedeutung geben als die hier dargestellte.

- `<declaration-value>`

  - : Der Rückfallwert der benutzerdefinierten Eigenschaft, der verwendet wird, wenn die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht. Dieser Wert kann jedes Zeichen enthalten, außer einigen Zeichen mit spezieller Bedeutung wie Zeilenumbrüchen, nicht übereinstimmenden schließenden Klammern, d.h., `)`, `]` oder `}`, Semikolons auf oberster Ebene oder Ausrufezeichen. Der Rückfallwert kann selbst eine benutzerdefinierte Eigenschaft sein, die die `var()`-Syntax verwendet. Wenn der Rückfallwert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst sich die `var()`-Funktion zu einem [ungültigen Wert](#ungültige_werte) auf.

    > **Note:** `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, die `var()` durch nichts ersetzt werden sollte.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Eigenschaft auf `:root`

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

Hier wurde der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` festgelegt. Somit wird die Hintergrundfarbe des HTML-Bodys rosa sein.

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Bodys rosa, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

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

Die Hintergrundfarbe des HTML-Bodys wird in diesem Fall rosa sein, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Rückfallen zur Verwendung, wenn die Eigenschaft nicht gesetzt ist

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

Da `--header-color` nicht gesetzt ist, wird der Text "Header" blau, der Rückfallwert.

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

Da `--main-bg-color` nicht gesetzt ist, wird die `background-color` des Körpers auf `--backup-bg-color` zurückfallen, was teal ist.

### Ungültige Werte

`var()`-Funktionen können zu ungültigen Werten aufgelöst werden, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Rückfallwert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

Wenn dies passiert, wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig scheitern" können wie andere Syntaxfehler, so dass der Benutzeragent, wenn er erkennt, dass ein Eigenschaftswert ungültig ist, die anderen kaskadierenden Werte bereits verworfen hat.

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

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einem ungültigen literalen Farbwert bleibt rot, weil die Deklaration `color: 20px` einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom Benutzeragenten gesteuert werden.
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- {{cssxref("@property")}} - At-Regel
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul
