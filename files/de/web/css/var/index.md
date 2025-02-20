---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Die **`var()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal als "CSS-Variable" bezeichnet) in den Wert einer anderen Eigenschaft einzufügen.

{{EmbedInteractiveExample("pages/css/var.html")}}

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem außer Eigenschaftswerten verwendet werden. (Ein solcher Einsatz führt normalerweise zu einem ungültigen Syntaxfehler oder zu einem Wert, dessen Bedeutung keine Verbindung zur Variablen hat.)

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

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft, die ersetzt werden soll. Ein optionales zweites Argument dient als Fallback-Wert. Falls die benutzerdefinierte Eigenschaft, auf die das erste Argument verweist, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, verwendet die Funktion den zweiten Wert als Ersatz.

Die Syntax des Fallback-Werts erlaubt, wie die der benutzerdefinierten Eigenschaften selbst, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles nach dem ersten Komma bis zum Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`

  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für Autoren und Nutzer vorgesehen; CSS wird diesen keine andere Bedeutung als die hier dargestellte geben.

- `<declaration-value>`

  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht. Dieser Wert kann jedes Zeichen außer einigen Zeichen mit spezieller Bedeutung enthalten, wie z. B. Zeilenumbrüche, nicht passende abschließende Klammern (z. B. `)`, `]` oder `}`), höherstufige Semikolons oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft mithilfe der `var()`-Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, wird die `var()`-Funktion zu einem [ungültigen Wert](#ungültige_werte) aufgelöst.

    > **Note:** `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, die `var()` durch nichts ersetzt werden soll.

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

Hier wird der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt, sodass die Hintergrundfarbe des HTML-Bodens pink ist.

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

In diesem Beispiel ist die Hintergrundfarbe des HTML-Bodens pink, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

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

Die Hintergrundfarbe des HTML-Bodens wird pink, auch wenn die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallback für den Fall, dass die Eigenschaft nicht gesetzt ist

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

Da `--main-bg-color` nicht gesetzt ist, fällt die `background-color` des Bodens auf `--backup-bg-color` zurück, die teal ist.

### Ungültige Werte

`var()`-Funktionen können zu ungültigen Werten aufgelöst werden, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert für die Eigenschaft, in der sie verwendet wird, ungültig ist.

Wenn dies passiert, wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können wie andere Syntaxfehler. Daher verwirft die Benutzeragentur die anderen kaskadierten Werte erst, nachdem sie festgestellt hat, dass ein Eigenschaftswert ungültig ist.

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

Beachten Sie, dass die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, während der Absatz mit einem ungültigen literalen Farbwert rot bleibt, da die `color: 20px`-Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die von der Benutzeragentur gesteuert werden.
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} at-rule
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
