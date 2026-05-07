---
title: "`var()` CSS-Funktion"
short-title: var()
slug: Web/CSS/Reference/Values/var
l10n:
  sourceCommit: f551881c1f8f168c5a6e7ac5c7dbc15474b9c642
---

Die **`var()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) (manchmal als "CSS-Variable" bezeichnet) anstelle eines Teils des Wertes einer anderen Eigenschaft einzufügen.

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

Die `var()`-Funktion kann nicht in Eigenschaftsnamen, Selektoren oder irgendetwas anderem außer Eigenschaftswerten verwendet werden. (Dies führt normalerweise zu ungültiger Syntax oder zu einem Wert, dessen Bedeutung nichts mit der Variablen zu tun hat.)

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

Das erste Argument der Funktion ist der Name der zu ersetzenden benutzerdefinierten Eigenschaft. Ein optionales zweites Argument der Funktion dient als Fallback-Wert. Der Fallback wird verwendet, wenn die referenzierte benutzerdefinierte Eigenschaft keinen verwendbaren Wert hat — was die Spezifikation als {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} bezeichnet. Praktisch bedeutet dies, dass der Fallback verwendet wird, wenn:

- Die benutzerdefinierte Eigenschaft in einer Regel, die auf das Element angewendet wird, nicht deklariert wurde und nicht mit {{cssxref("@property")}} und einem `initial-value` Deskriptor registriert ist.
- Die benutzerdefinierte Eigenschaft auf das [`initial`](/de/docs/Web/CSS/Reference/Values/initial) Schlüsselwort gesetzt ist und es sich nicht um eine registrierte benutzerdefinierte Eigenschaft mit einem `initial-value` handelt. Das Setzen einer nicht registrierten benutzerdefinierten Eigenschaft auf `initial` setzt sie auf den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} zurück.
- Der deklarierte Wert der benutzerdefinierten Eigenschaft ist [ungültig zur Zeit der Berechnung des Wertes](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties) — zum Beispiel aufgrund einer zyklischen Abhängigkeit zwischen benutzerdefinierten Eigenschaften — und die Eigenschaft ist nicht registriert oder ist mit der universellen `*`-Syntax registriert.

Wenn die benutzerdefinierte Eigenschaft mit {{cssxref("@property")}} unter Verwendung einer nicht-universellen `syntax` und einem `initial-value` registriert wird, wird dieser Initialwert ersetzt, wenn keine andere Deklaration zutrifft. Der Fallback wird in diesem Fall _nicht_ verwendet.

Die anderen [CSS-weiten Schlüsselwörter](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) — `inherit`, `unset`, `revert`, `revert-layer` und `revert-rule` — verhalten sich beim Setzen als benutzerdefinierter Eigenschaftswert genauso wie bei jeder anderen Eigenschaft. Sie können die benutzerdefinierte Eigenschaft auf einen geerbten oder zuvor kaskadierten Wert auflösen, anstatt auf den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}}, sodass sie nicht unbedingt den Fallback auslösen. Zum Beispiel, wenn `--foo` in einer Kaskadenschicht auf `revert-layer` und in einer anderen Schicht auf eine Farbe gesetzt ist, löst sich `var(--foo)` auf den Farbwert auf, anstatt den Fallback zu verwenden.

Die Syntax des Fallbacks erlaubt, wie die der benutzerdefinierten Eigenschaften, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue`; das heißt, alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Werte

- `<custom-property-name>`
  - : Der Name einer benutzerdefinierten Eigenschaft, dargestellt durch einen Bezeichner, der mit zwei Bindestrichen beginnt. Benutzerdefinierte Eigenschaften sind ausschließlich zur Verwendung durch Autoren und Benutzer gedacht; CSS wird ihnen niemals eine Bedeutung über das hier Präsentierte hinaus geben.

- `<declaration-value>`
  - : Ein Fallback-Wert für die benutzerdefinierte Eigenschaft, der verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} hat (siehe den [Syntax](#syntax) Abschnitt oben für die Bedingungen, unter denen dies geschieht). Dieser Wert darf jedes Zeichen enthalten, außer einigen Zeichen mit besonderer Bedeutung wie Zeilenumbrüche, nicht übereinstimmende schließende Klammern, d.h. `)`, `]`, oder `}`, Semikolons auf oberster Ebene oder Ausrufezeichen. Der Fallback-Wert kann selbst eine benutzerdefinierte Eigenschaft unter Verwendung der `var()`-Syntax sein. Wenn der Fallback-Wert weggelassen wird und die benutzerdefinierte Eigenschaft den {{Glossary("guaranteed_invalid_value", "garantiert ungültigen Wert")}} hat, löst sich die `var()`-Funktion in einen [ungültigen Wert](#ungültige_werte) auf.

    > [!NOTE]
    > `var(--a,)` ist gültig und gibt an, dass die `var()`-Funktion mit nichts ersetzt wird, wenn die benutzerdefinierte Eigenschaft `--a` den garantiert ungültigen Wert hat.

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

Hier wurde der Wert der `background-color`-Eigenschaft über die benutzerdefinierte Eigenschaft `--main-bg-color` gesetzt. Somit wird die Hintergrundfarbe des HTML-Körpers pink sein.

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

Die Hintergrundfarbe des HTML-Körpers wird in diesem Fall pink sein, obwohl die benutzerdefinierte Eigenschaft in einer anderen Datei deklariert ist.

### Benutzerdefinierte Eigenschaften mit Fallbacks für den Fall, dass die Eigenschaft nicht gesetzt wurde

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

Da `--main-bg-color` nicht gesetzt ist, fällt die `background-color` des Körpers auf `--backup-bg-color` zurück, welches aquamarin ist.

### Ungültige Werte

`var()`-Funktionen können zu ungültigen Werten führen, wenn:

- Die benutzerdefinierte Eigenschaft nicht definiert ist und kein Fallback-Wert angegeben ist.
- Die benutzerdefinierte Eigenschaft definiert ist, aber ihr Wert ein ungültiger Wert für die Eigenschaft ist, in der sie verwendet wird.

Wenn dies geschieht, wird die Eigenschaft so behandelt, als ob sie den Wert {{cssxref("unset")}} hat. Dies liegt daran, dass Variablen nicht "frühzeitig fehlschlagen" können wie andere Syntaxfehler, sodass der Benutzer-Agent bereits die anderen kaskadierten Werte verworfen hat, wenn er feststellt, dass ein Eigenschaftswert ungültig ist.

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

Beachten Sie, dass die Absätze, die `var()` verwenden, auf das Standard-Schwarz zurückgesetzt werden, aber der Absatz mit einer ungültigen literalen Farbe bleibt rot, da die `color: 20px`-Deklaration einfach ignoriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("env","env(…)")}} – schreibgeschützte Umgebungsvariablen, die durch den Benutzer-Agent gesteuert werden.
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- {{cssxref("@property")}} At-Regel
- [Registrierung von CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
