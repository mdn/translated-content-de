---
title: CSS-Funktion `var()`
short-title: var()
slug: Web/CSS/Reference/Values/var
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die **`var()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (manchmal als „CSS-Variable“ bezeichnet) anstelle eines beliebigen Teils eines Werts einer anderen Eigenschaft einzufügen.

Die Funktion `var()` kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem außer Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder zu einem Wert, dessen Bedeutung keinen Bezug zur Variablen hat.)

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

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Der Fallback wird verwendet, wenn die referenzierte benutzerdefinierte Eigenschaft keinen verwendbaren Wert hat — was die Spezifikation als {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} bezeichnet. In der Praxis bedeutet dies, dass der Fallback verwendet wird, wenn:

- Die benutzerdefinierte Eigenschaft nicht in einer Regel deklariert wurde, die auf das Element zutrifft, und sie nicht (mit {{cssxref("@property")}}) mit einem `initial-value`-Deskriptor registriert ist.
- Die benutzerdefinierte Eigenschaft auf das Schlüsselwort [`initial`](/de/docs/Web/CSS/Reference/Values/initial) gesetzt ist und keine registrierte benutzerdefinierte Eigenschaft mit einem `initial-value` ist. Das Setzen einer nicht registrierten benutzerdefinierten Eigenschaft auf `initial` setzt sie auf den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} zurück.
- Der deklarierte Wert der benutzerdefinierten Eigenschaft [zum Zeitpunkt der Berechnung ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties) ist — beispielsweise aufgrund einer zyklischen Abhängigkeit zwischen benutzerdefinierten Eigenschaften — und die Eigenschaft nicht registriert ist oder mit der universellen `*`-Syntax registriert ist.

Wenn die benutzerdefinierte Eigenschaft mit {{cssxref("@property")}} unter Verwendung einer nicht universellen `syntax` und eines `initial-value` registriert ist, wird dieser Anfangswert eingesetzt, wenn keine andere Deklaration zutrifft. Der Fallback wird in diesem Fall _nicht_ verwendet.

Die anderen [CSS-weiten Schlüsselwörter](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) — `inherit`, `unset`, `revert`, `revert-layer` und `revert-rule` — verhalten sich, wenn sie als Wert einer benutzerdefinierten Eigenschaft gesetzt werden, genauso wie bei jeder anderen Eigenschaft. Sie können die benutzerdefinierte Eigenschaft zu einem geerbten oder zuvor kaskadierten Wert auflösen lassen, statt zum {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}}, sodass sie nicht notwendigerweise den Fallback auslösen. Wenn beispielsweise `--foo` in einer Kaskadenschicht auf `revert-layer` und in einer anderen Schicht auf eine Farbe gesetzt ist, wird `var(--foo)` zum Farbwert aufgelöst, statt den Fallback zu verwenden.

Die Syntax des Fallbacks erlaubt, wie die von benutzerdefinierten Eigenschaften, Kommas. Beispielsweise definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich zur Verwendung durch Autoren und Benutzer vorgesehen; CSS wird ihnen niemals eine Bedeutung über die hier dargestellte hinaus geben.

- `<declaration-value>`
  - : Ein Fallback-Wert für die benutzerdefinierte Eigenschaft, der verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} hat (siehe den Abschnitt [Syntax](#syntax) oben für die Bedingungen, unter denen dies geschieht). Dieser Wert darf jedes Zeichen enthalten, mit Ausnahme einiger Zeichen mit besonderer Bedeutung wie Zeilenumbrüche, nicht passende schließende Klammern, also `)`, `]` oder `}`, Semikolons auf oberster Ebene oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft mit der `var()`-Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} hat, wird die Funktion `var()` zu einem [ungültigen Wert](#ungültige_werte) aufgelöst.

    > [!NOTE]
    > `var(--a,)` ist gültig und legt fest, dass die `var()` durch nichts ersetzt werden soll, wenn die benutzerdefinierte Eigenschaft `--a` den garantiert ungültigen Wert hat.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer auf :root gesetzten benutzerdefinierten Eigenschaft

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

Hier wurde der Wert der Eigenschaft `background-color` über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. Daher ist die Hintergrundfarbe des HTML-Body rosa.

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

In diesem Beispiel ist die Hintergrundfarbe des HTML-Body rosa, obwohl die benutzerdefinierte Eigenschaft später gesetzt wird.

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

#### Ergebnis

{{EmbedLiveSample("Using a custom property set in another file")}}

Die Hintergrundfarbe des HTML-Body ist in diesem Fall rosa, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallbacks für die Verwendung, wenn die Eigenschaft nicht gesetzt wurde

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

Da `--header-color` nicht gesetzt ist, ist der Text „Header“ blau, also der Fallback-Wert.

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

Da `--main-bg-color` nicht gesetzt ist, fällt `background-color` des Body auf `--backup-bg-color` zurück, das blaugrün ist.

### Ungültige Werte

`var()`-Funktionen können zu ungültigen Werten aufgelöst werden, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert angegeben wurde.
- Die benutzerdefinierte Eigenschaft definiert ist, ihr Wert jedoch für die Eigenschaft, in der sie verwendet wird, ungültig ist.

Wenn dies geschieht, wird die Eigenschaft so behandelt, als hätte sie den Wert {{cssxref("unset")}}. Dies liegt daran, dass Variablen nicht wie andere Syntaxfehler „früh fehlschlagen“ können. Wenn der User-Agent erkennt, dass ein Eigenschaftswert ungültig ist, hat er die anderen kaskadierten Werte bereits verworfen.

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

Beachten Sie, dass die Absätze, die `var()` verwenden, auf das standardmäßige Schwarz zurückgesetzt werden, während der Absatz mit einer ungültigen literalen Farbe weiterhin rot ist, da die Deklaration `color: 20px` einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die durch den User-Agent gesteuert werden.
- [Verwendung benutzerdefinierter CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- {{cssxref("@property")}}-At-Regel
- [Registrieren benutzerdefinierter CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [Modul für benutzerdefinierte CSS-Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)
