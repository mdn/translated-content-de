---
title: var()
slug: Web/CSS/var
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) (manchmal als "CSS-Variable" bezeichnet) anstelle eines Teils eines Wertes einer anderen Eigenschaft einzufügen.

{{EmbedInteractiveExample("pages/css/var.html")}}

Die `var()` Funktion kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem außer Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder zu einem Wert, dessen Bedeutung keine Verbindung zur Variablen hat.)

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

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft, die ersetzt werden soll. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Wenn die benutzerdefinierte Eigenschaft, auf die das erste Argument verweist, nicht definiert ist oder einem [CSS-weitens Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht, verwendet die Funktion den zweiten Wert.

Die Syntax des Fallbacks, ähnlich der von benutzerdefinierten Eigenschaften, erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`

  - : Der Name der benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für die Nutzung durch Autoren und Benutzer gedacht; CSS wird ihnen niemals eine Bedeutung über das hier Dargestellte hinaus geben.

- `<declaration-value>`

  - : Der Fallback-Wert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weitens Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht. Dieser Wert kann jedes Zeichen außer einigen Zeichen mit spezieller Bedeutung enthalten, wie Zeilenumbrüche, nicht übereinstimmende schließende Klammern, d.h. `)`, `]` oder `}`, oberste Ebenen Semikolons oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()` Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, ergibt die `var()` Funktion einen [ungültigen Wert](#ungültige_werte).

    > **Note:** `var(--a,)` ist gültig und gibt an, dass die `var()` durch nichts ersetzt werden sollte, wenn die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weitens Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values) entspricht.

### Formale Syntax

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

Hier wird der Wert der Eigenschaft `background-color` über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. Dadurch wird die Hintergrundfarbe des HTML-Körpers pink sein.

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

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers pink sein, selbst wenn die benutzerdefinierte Eigenschaft später gesetzt wird.

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

Die Hintergrundfarbe des HTML-Körpers wird in diesem Fall pink sein, selbst wenn die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert wird.

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

Da `--main-bg-color` nicht gesetzt ist, wird die Hintergrundfarbe des Körpers auf `--backup-bg-color` zurückgreifen, welches teal ist.

### Ungültige Werte

`var()` Funktionen können zu ungültigen Werten werden, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

Wenn dies geschieht, wird die Eigenschaft behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig scheitern" können wie andere Syntaxfehler, sodass der Benutzeragent den Wert einer Eigenschaft als ungültig erkennt, nachdem er bereits die anderen kaskadierten Werte verworfen hat.

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

Beachten Sie, wie die Absätze mit `var()` auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen literalen Farbe bleibt rot, weil die `color: 20px` Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom Benutzer-Agenten gesteuert werden.
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- {{cssxref("@property")}} Regel
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
