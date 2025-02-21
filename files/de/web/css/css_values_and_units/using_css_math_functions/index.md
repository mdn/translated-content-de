---
title: Verwendung von CSS-Math-Funktionen
slug: Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

**CSS-Math-Funktionen** ermöglichen es, einen Eigenschaftswert - wie die `height`, `animation-duration` oder `font-size` eines Elements - als mathematischen Ausdruck zu schreiben.

Ohne die Verwendung von Mathematik sind die eingebauten [CSS-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente so zu gestalten, dass eine bestimmte Benutzererfahrung erreicht wird.

Es gibt jedoch Fälle, in denen wir uns durch die Angabe eines einzelnen Werts und einer Einheit zur Gestaltung eines Elements eingeschränkt fühlen könnten. Betrachten Sie die folgenden Beispiele:

1. Wir möchten die Höhe eines Inhaltsbereichs auf "die Höhe des Viewports minus die Höhe einer Navigationsleiste" festlegen.
2. Wir möchten die Breite von zwei Elementen addieren, um die Breite eines dritten Elements zu definieren.
3. Wir möchten verhindern, dass eine variable `font-size` eines Textes über eine bestimmte Größe hinauswächst.

In all diesen Fällen müssen wir uns auf Mathematik verlassen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte sein, sich auf mathematische Funktionen zu verlassen, die durch JavaScript definiert sind, und die Stile von Elementen dynamisch basierend auf den berechneten Ergebnissen unserer Skripte festzulegen.

In vielen Fällen, einschließlich der oben genannten Beispiele, **können wir stattdessen Math-Funktionen verwenden, die direkt in CSS integriert sind**. Diese Lösung ist oft einfacher zu implementieren und schneller für den Browser auszuführen als die Verwendung von JavaScript.

Insgesamt können Entwickler eine Kombination aus [fast zwei Dutzend CSS-Math-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der häufiger verwendeten Funktionen vorstellen und die fortgeschritteneren einführen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei Beispiele oben möchten wir den Stil eines Elements entsprechend dem Ergebnis einer Addition oder Subtraktion festlegen. Dies ist genau einer der Anwendungsfälle für {{CSSxRef("calc", "calc()")}}.

Die **`calc()`**-Funktion ermöglicht es Ihnen, CSS-Eigenschaftswerte unter Verwendung von **Addition, Subtraktion, Multiplikation und Division** anzugeben. Sie wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten zu kombinieren, wie `%` und `px`.

Die `calc()`-Math-Funktion nimmt einen mathematischen Ausdruck als Parameter an und gibt das Ergebnis dieses Ausdrucks zurück, z.B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `calc()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

```html hidden
<div class="calc1">
  <code>width: calc(10px + 100px);</code>
</div>
<div class="calc2">
  <code>width: calc(2em * 5);</code>
</div>
<div class="calc3">
  <code>width: calc(100% - 32px);</code>
</div>
<div class="calc4">
  <code>width: calc(var(--predefined-width) - calc(16px * 2));</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: red;
  color: white;
  height: 48px;
}

.calc1 > code {
  /* Output width: `110px` */
  width: calc(10px + 100px);
}

.calc2 > code {
  /* Output width: `10em` */
  width: calc(2em * 5);
}

.calc3 > code {
  /* Output width: Depends on the container's width */
  width: calc(100% - 32px);
}

.calc4 > code {
  --predefined-width: 100%;
  /* Output width: Depends on the container's width */
  width: calc(var(--predefined-width) - calc(16px * 2));
}
```

{{EmbedLiveSample('calc_Example', '100%', 212) }}

## `min()`: Finden des Minimalwerts in einer Menge

Es gibt Fälle, in denen wir nicht möchten, dass der Wert einer CSS-Eigenschaft eine bestimmte Zahl überschreitet. Nehmen wir zum Beispiel an, wir möchten, dass die Breite unseres Inhaltscontainers die kleinere von "der vollen Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Math-Funktion {{CSSxRef("min", "min()")}} nutzen.

Die `min()`-Math-Funktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den kleinsten dieser Werte zurück, z.B.:

```css
property: min(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten wie `%` und `px` zu vergleichen.

### `min()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `min()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

```html hidden
<div class="min1">
  <code>width: min(9999px, 50%);</code>
</div>
<div class="min2">
  <code>width: min(9999px, 100%);</code>
</div>
<div class="min3">
  <code>width: min(120px, 150px, 90%);</code>
</div>
<div class="min4">
  <code>width: min(80px, 90%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: darkblue;
  color: white;
  height: 48px;
}

.min1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `50%` of the container's width */
  width: min(9999px, 50%);
}

.min2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `100%` of the container's width */
  width: min(9999px, 100%);
}

.min3 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `120px` of the container's width */
  width: min(120px, 150px, 90%);
}

.min4 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `80px` of the container's width */
  width: min(80px, 90%);
}
```

{{EmbedLiveSample('min_Example', '100%', 212) }}

## `max()`: Finden des Maximalwerts in einer Menge

Ähnlich wie `min()` möchten wir manchmal nicht, dass der Wert einer CSS-Eigenschaft unter eine bestimmte Zahl fällt. Beispielsweise könnten wir möchten, dass die Breite unseres Inhaltscontainers die _größere_ von "der vollen Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Math-Funktion {{CSSxRef("max", "max()")}} verwenden.

Die `max()`-Math-Funktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den größten dieser Werte zurück, z.B.:

```css
property: max(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten wie `%` und `px` zu vergleichen.

Beachten Sie die Gemeinsamkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `max()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

```html hidden
<div class="max1">
  <code>width: max(50px, 50%);</code>
</div>
<div class="max2">
  <code>width: max(50px, 100%);</code>
</div>
<div class="max3">
  <code>width: max(20px, 50px, 90%);</code>
</div>
<div class="max4">
  <code>width: max(80px, 80%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkmagenta;
  color: white;
  height: 48px;
}

.max1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `50%` of the container's width */
  width: max(50px, 50%);
}

.max2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `100%` of the container's width */
  width: max(50px, 100%);
}

.max3 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `90%` of the container's width */
  width: max(20px, 50px, 90%);
}

.max4 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `80%` of the container's width */
  width: max(80px, 80%);
}
```

{{EmbedLiveSample('max_Example', '100%', 212) }}

## `clamp()`: Begrenzen eines Wertes zwischen zwei Werten

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{CSSxRef("clamp", "clamp()")}} verwenden. Die `clamp()`-Math-Funktion nimmt einen Minimalwert, den zu begrenzenden Wert und den Maximalwert als Argumente, z.B.:

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

- Wenn der zu begrenzende Wert kleiner als der angegebene Minimalwert ist, gibt die Funktion den Minimalwert zurück.
- Wenn der zu begrenzende Wert größer als der angegebene Maximalwert ist, gibt die Funktion den Maximalwert zurück.
- Wenn der zu begrenzende Wert zwischen den angegebenen Minimal- und Maximalwerten liegt, gibt die Funktion den ursprünglichen Wert zurück, der begrenzt werden soll.

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten wie `%` und `px` zu vergleichen.

### `clamp()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `clamp()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

```html hidden
<div class="clamp1">
  <code>width: clamp(10%, 1px, 90%);</code>
</div>
<div class="clamp2">
  <code>width: clamp(10%, 9999px, 90%);</code>
</div>
<div class="clamp3">
  <code>width: clamp(125px, 1px, 250px);</code>
</div>
<div class="clamp4">
  <code>width: clamp(25px, 9999px, 150px);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkgreen;
  color: white;
  height: 48px;
}

.clamp1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `20%` of the container's width */
  width: clamp(20%, 1px, 80%);
}

.clamp2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `90%` of the container's width */
  width: clamp(10%, 9999px, 90%);
}

.clamp3 > code {
  /* Output width: `125px` */
  width: clamp(125px, 1px, 250px);
}

.clamp4 > code {
  /* Output width: `150px` */
  width: clamp(25px, 9999px, 150px);
}
```

{{EmbedLiveSample('clamp_Example', '100%', 212) }}

## Fortgeschrittene CSS-Math-Funktionen

Beim Layout und der Gestaltung von DOM-Elementen sind die vier grundlegenden Math-Funktionen {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und {{CSSxRef("clamp", "clamp()")}} oft ausreichend. Für fortgeschrittene Anwendungen wie Lernmaterialien zu Mathematik, 3D-Visualisierungen oder CSS-Animationen können Sie jedoch in Betracht ziehen, Folgendes zu verwenden:

- [Gestufte Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: berechnet einen **Wert anhand einer Rundungsstrategie**
  - {{CSSxRef("mod", "mod()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Divisor**
  - {{CSSxRef("rem", "rem()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Dividend**
- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: berechnet den **trigonometrischen Sinus** einer Zahl
  - {{CSSxRef("cos", "cos()")}}: berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{CSSxRef("tan", "tan()")}}: berechnet den **trigonometrischen Tangens** einer Zahl
  - {{CSSxRef("asin", "asin()")}}: berechnet den **trigonometrischen Inversen** Sinus einer Zahl
  - {{CSSxRef("acos", "acos()")}}: berechnet den **trigonometrischen Inversen** Kosinus einer Zahl
  - {{CSSxRef("atan", "atan()")}}: berechnet den **trigonometrischen Inversen** Tangens einer Zahl
  - {{CSSxRef("atan2", "atan2()")}}: berechnet den **trigonometrischen Inversen** Tangens anhand von zwei Zahlen
- [Exponentialfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: berechnet eine Zahl **hoch** zu einer anderen Zahl
  - {{CSSxRef("sqrt", "sqrt()")}}: berechnet die **Quadratwurzel** einer Zahl
  - {{CSSxRef("hypot", "hypot()")}}: berechnet die **Quadratwurzel der Summe der Quadrate** der angegebenen Zahlen
  - {{CSSxRef("log", "log()")}}: berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{CSSxRef("exp", "exp()")}}: berechnet **`e` hoch eine andere Zahl**
- [Signalfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: berechnet den **absoluten Wert** einer Zahl
  - {{CSSxRef("sign", "sign()")}}: berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Math-Funktionen verwenden, um responsive Benutzeroberflächen zu erstellen, ohne JavaScript-Code schreiben zu müssen.
- CSS-Math-Funktionen können manchmal anstelle von [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 wählten Mitglieder des Interop-Projekts ["CSS Math Functions" als Fokusbereich für Verbesserungen](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Das bedeutet, dass Browser-Anbieter zusammenarbeiten, um sicherzustellen, dass CSS-Math-Funktionen in allen Browsern und Geräten gleich funktionieren.
