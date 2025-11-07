---
title: var()
slug: Web/CSS/Reference/Values/var
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (manchmal als "CSS-Variable" bezeichnet) in einem anderen Eigenschaftswert zu verwenden.

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

Die Funktion `var()` kann nicht in Eigenschaftsnamen, Selektoren oder anderen Elementen außer Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder zu einem Wert ohne direkte Verbindung zur Variablen.)

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

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument dient als Rückfallwert. Wenn die benutzerdefinierte Eigenschaft, auf die durch das erste Argument verwiesen wird, nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) entspricht, wird der zweite Wert verwendet.

Die Syntax des Rückfalls, wie auch die der benutzerdefinierten Eigenschaften, erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Rückfall von `red, blue`; alles zwischen dem ersten Komma und dem Ende der Funktion wird als Rückfallwert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich für die Verwendung durch Autoren und Benutzer vorgesehen; CSS wird ihnen keine über das hier präsentierte hinausgehende Bedeutung geben.

- `<declaration-value>`
  - : Der Rückfallwert der benutzerdefinierten Eigenschaft, der verwendet wird, falls die benutzerdefinierte Eigenschaft nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) entspricht. Dieser Wert kann jedes Zeichen enthalten, außer einigen Zeichen mit besonderer Bedeutung wie Zeilenumbrüche, nicht übereinstimmende schließende Klammern, d.h. `)`, `]` oder `}`, Start-Semikolons oder Ausrufezeichen. Der Rückfallwert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()`-Syntax sein. Wenn der Rückfallwert weggelassen wird und die benutzerdefinierte Eigenschaft nicht definiert ist, löst die `var()`-Funktion einen [ungültigen Wert](#ungültige_werte) auf.

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass, falls die benutzerdefinierte Eigenschaft `--a` nicht definiert ist oder einem [CSS-weiten Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) entspricht, die `var()` mit Nichts ersetzt wird.

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

#### Resultat

{{EmbedLiveSample("Using a custom property set on :root")}}

Hier wurde der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. So wird die Hintergrundfarbe des HTML-Körpers pink sein.

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

#### Resultat

{{EmbedLiveSample("Using a custom property before it is set")}}

In diesem Beispiel wird die Hintergrundfarbe des HTML-Körpers pink, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

### Verwendung einer in einer anderen Datei gesetzten benutzerdefinierten Eigenschaft

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

#### Resultat

{{EmbedLiveSample("Using a custom property set in another file")}}

Die Hintergrundfarbe des HTML-Körpers wird in diesem Fall pink sein, auch wenn die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert wurde.

### Benutzerdefinierte Eigenschaften mit Rückfallwerten zur Verwendung, wenn die Eigenschaft nicht gesetzt wurde

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

#### Resultat

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

#### Resultat

{{EmbedLiveSample("Using a custom property as a fallback")}}

Da `--main-bg-color` nicht gesetzt ist, fällt die `background-color` des Körpers auf `--backup-bg-color`, welche türkis ist, zurück.

### Ungültige Werte

`var()`-Funktionen können auf ungültige Werte aufgelöst werden, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Rückfallwert bereitgestellt wird.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ist ein ungültiger Wert für die Eigenschaft, in der sie verwendet wird.

Wenn dies passiert, wird die Eigenschaft behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können, wie es bei anderen Syntaxfehlern der Fall ist, sodass der Benutzeragent, wenn er feststellt, dass ein Eigenschaftswert ungültig ist, die anderen kaskadierten Werte bereits verworfen hat.

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

#### Resultat

{{EmbedLiveSample("Invalid values")}}

Beachten Sie, wie die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen Literalfarbe ist immer noch rot, weil die `color: 20px`-Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die vom User-Agent gesteuert werden.
- [Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} at-rule
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
