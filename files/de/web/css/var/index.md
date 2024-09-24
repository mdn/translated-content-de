---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 11f1b8f19a3c5e644ee14ffe87c43253a7e22d82
---

{{CSSRef}}

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal "CSS-Variable" genannt) anstelle eines beliebigen Teils eines Wertes einer anderen Eigenschaft einzufügen.

{{EmbedInteractiveExample("pages/css/var.html")}}

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem als Eigenschaftswerten verwendet werden. (Andernfalls entsteht normalerweise eine ungültige Syntax oder ein Wert, dessen Bedeutung keinen Bezug zur Variablen hat.)

## Syntax

```css
/* Einfache Verwendung */
var(--custom-prop);

/* Mit Fallback */
var(--custom-prop,);  /* leerer Wert als Fallback */
var(--custom-prop, initial); /* Anfangswert der Eigenschaft als Fallback */
var(--custom-prop, #FF0000);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Wenn die benutzerdefinierte Eigenschaft, die durch das erste Argument referenziert wird, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`, das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`

  - : Ein Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Strichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich zur Verwendung durch Autoren und Benutzer gedacht; CSS gibt ihnen nie eine andere Bedeutung, als die hier dargestellte.

- `<declaration-value>`

  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, wenn die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht. Dieser Wert kann beliebige Zeichen enthalten, außer einigen Zeichen mit besonderer Bedeutung wie neue Zeilen, nicht übereinstimmende schließende Klammern, z.B. `)`, `]` oder `}`, obere Semikolons oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft mit der `var()`-Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst sich die `var()`-Funktion zu einem [ungültigen Wert](#ungültige_werte) auf.

    > **Note:** `var(--a,)` ist gültig und gibt an, dass, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, die `var()` ohne Ersatz sein sollte.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer benutzerdefinierten Eigenschaft in :root

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

Hier wurde der Wert der Eigenschaft `background-color` über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. Dadurch wird die Hintergrundfarbe des HTML-Körpers pink sein.

### Verwendung einer benutzerdefinierten Eigenschaft bevor sie gesetzt wird

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers pink, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

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

Die Hintergrundfarbe des HTML-Körpers wird in diesem Fall pink sein, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

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
/* In der Komponenteninfrastruktur: */
.component .header {
  /* header-color ist nicht gesetzt und bleibt daher blue, der Fallback-Wert */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* In der übergreifenden Anwendungsstil: */
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

Da `--main-bg-color` nicht gesetzt ist, wird die Hintergrundfarbe des Körpers auf `--backup-bg-color` zurückfallen, welcher teal ist.

### Ungültige Werte

`var()`-Funktionen können zu ungültigen Werten führen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert angegeben ist.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

Wenn dies passiert, wird die Eigenschaft behandelt, als ob sie den Wert {{cssxref("unset")}} hat. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können wie andere Syntaxfehler, sodass der Benutzeragent, sobald er erkennt, dass ein Eigenschaftswert ungültig ist, die anderen kaskadierten Werte bereits verworfen hat.

Zum Beispiel:

#### HTML

```html
<p class="p1">Undefinierte Variable</p>
<p class="p2">Ungültige Variable</p>
<p class="p3">Ungültige literale Farbe</p>
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

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen literal Farbe bleibt rot, weil die Deklaration `color: 20px` einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die von der Benutzer-Agent-Steuerung verwaltet werden.
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- {{cssxref("@property")}} Regel
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
