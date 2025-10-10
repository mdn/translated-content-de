---
title: Verwendung von CSS-Mathematischen Funktionen
short-title: Verwendung von mathematischen Funktionen
slug: Web/CSS/CSS_values_and_units/Using_CSS_math_functions
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**CSS-mathematische Funktionen** erlauben es, einen Eigenschaftswert - wie die `height`, `animation-duration` oder `font-size` eines Elements - als mathematischen Ausdruck zu schreiben.

Ohne den Einsatz von Mathematik sind die eingebauten [CSS-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente so zu gestalten, dass eine bestimmte Benutzererfahrung erreicht wird.

Es gibt jedoch Fälle, in denen wir uns durch die Darstellung eines Stils eines Elements mittels eines einzigen Werts und einer Einheit eingeschränkt fühlen könnten. Betrachten Sie die folgenden Beispiele:

1. Wir möchten die Höhe eines Inhaltsbereichs auf "die Höhe des Ansichtsfensters minus der Höhe einer Navigationsleiste" festlegen.
2. Wir möchten die Breite von zwei Elementen zusammen addieren, um die Breite eines dritten Elements zu definieren.
3. Wir möchten verhindern, dass eine variable `font-size` eines Textes über eine bestimmte Größe hinaus wächst.

In all diesen Fällen müssen wir uns auf Mathematik verlassen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte darin bestehen, sich auf mathematische Funktionen zu stützen, die von JavaScript definiert wurden, und die Stile von Elementen dynamisch basierend auf den durch unsere Skripte berechneten Ergebnissen festzulegen.

In vielen Fällen, einschließlich der oben genannten Beispiele, **können wir stattdessen mathematische Funktionen verwenden, die direkt in CSS eingebaut sind**. Diese Lösung ist oft einfacher zu implementieren und schneller für den Browser auszuführen als die Verwendung von JavaScript.

Insgesamt können Entwickler eine Kombination aus [fast zwei Dutzend CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der am häufigsten verwendeten Funktionen exemplarisch darstellen und diese fortgeschritteneren einführen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei obigen Beispiele möchten wir den Stil eines Elements entsprechend dem Ergebnis einer Addition oder Subtraktion festlegen. Dies ist genau eine der Einsatzmöglichkeiten für {{CSSxRef("calc", "calc()")}}.

Die **`calc()`**-Funktion ermöglicht es Ihnen, CSS-Eigenschaftswerte mit **Addition, Subtraktion, Multiplikation und Division** anzugeben. Sie wird oft verwendet, um zwei CSS-Werte zu kombinieren, die unterschiedliche Einheiten haben, wie `%` und `px`.

Die `calc()`-Mathematikfunktion nimmt einen mathematischen Ausdruck als Parameter entgegen und gibt das Ergebnis dieses Ausdrucks zurück, z.B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Abspielsymbol unten, um das `calc()`-Beispiel im Code-Playground anzusehen und es selbst auszuprobieren.

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

## `min()`: Ermittlung des kleinsten Wertes in einem Satz

Es gibt Fälle, in denen wir nicht möchten, dass der Wert einer CSS-Eigenschaft einen bestimmten Wert überschreitet. Nehmen wir zum Beispiel an, wir möchten, dass die Breite unseres Inhaltscontainers die kleinere von "der vollen Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Math-Funktion {{CSSxRef("min", "min()")}} verwenden.

Die `min()`-Mathematikfunktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den kleinsten dieser Werte zurück, z.B.:

```css
width: min(32px, 50%, 2rem);
```

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `min()` Beispiel

Klicken Sie auf das Abspielsymbol unten, um das `min()`-Beispiel im Code-Playground anzusehen und es selbst auszuprobieren.

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

## `max()`: Ermittlung des größten Wertes in einem Satz

Ähnlich wie `min()`, gibt es manchmal den Wunsch, dass der Wert einer CSS-Eigenschaft nicht unter einen bestimmten Wert fällt. Beispielsweise könnten wir möchten, dass die Breite unseres Inhaltscontainers die _größere_ von "der vollen Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Math-Funktion {{CSSxRef("max", "max()")}} verwenden.

Die `max()`-Mathematikfunktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den größten dieser Werte zurück, z.B.:

```css
width: max(32px, 50%, 2rem);
```

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

Beachten Sie die Ähnlichkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Abspielsymbol unten, um das `max()`-Beispiel im Code-Playground anzusehen und es selbst auszuprobieren.

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

## `clamp()`: Einschränken eines Wertes zwischen zwei Werten

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{CSSxRef("clamp", "clamp()")}} verwenden. Die `clamp()`-Mathematikfunktion nimmt einen Mindestwert, den zu begrenzenden Wert und den Höchstwert als Argumente, z.B.:

```css
/* clamped value: 50%, minimum: 100px, maximum: 300px */
width: clamp(100px, 50%, 300px);
```

- Wenn der zu begrenzende Wert kleiner ist als der übergebene Mindestwert, gibt die Funktion den Mindestwert zurück.
- Wenn der zu begrenzende Wert größer ist als der übergebene Höchstwert, gibt die Funktion den Höchstwert zurück.
- Wenn der zu begrenzende Wert zwischen den übergebenen Mindest- und Höchstwerten liegt, gibt die Funktion den ursprünglichen zu begrenzenden Wert zurück.

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `clamp()` Beispiel

Klicken Sie auf das Abspielsymbol unten, um das `clamp()`-Beispiel im Code-Playground anzusehen und es selbst auszuprobieren.

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

## Erweiterte CSS-Mathematische Funktionen

Beim Layouten und Stylen von DOM-Elementen reichen die vier grundlegenden mathematischen Funktionen {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und {{CSSxRef("clamp", "clamp()")}} oft aus. Für fortgeschrittene Anwendungen wie Lernmaterialien für Mathematik, 3D-Visualisierungen oder CSS-Animationen können Sie jedoch überlegen, die folgenden Funktionen zu verwenden:

- [Stufenwertfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: berechnet einen **Wert gemäß einer Rundungsstrategie**
  - {{CSSxRef("mod", "mod()")}}: berechnet den **Rest** einer Division mit demselben Vorzeichen wie der Divisor
  - {{CSSxRef("rem", "rem()")}}: berechnet den **Rest** einer Division mit demselben Vorzeichen wie der Dividend
- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: berechnet den **trigonometrischen Sinus** einer Zahl
  - {{CSSxRef("cos", "cos()")}}: berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{CSSxRef("tan", "tan()")}}: berechnet den **trigonometrischen Tangens** einer Zahl
  - {{CSSxRef("asin", "asin()")}}: berechnet den **trigonometrischen Arcus-Sinus** einer Zahl
  - {{CSSxRef("acos", "acos()")}}: berechnet den **trigonometrischen Arcus-Kosinus** einer Zahl
  - {{CSSxRef("atan", "atan()")}}: berechnet den **trigonometrischen Arcus-Tangens** einer Zahl
  - {{CSSxRef("atan2", "atan2()")}}: berechnet den **trigonometrischen Arcus-Tangens**, gegeben zwei Zahlen
- [Exponentialfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: berechnet eine Zahl **hoch einer anderen Zahl**
  - {{CSSxRef("sqrt", "sqrt()")}}: berechnet die **Quadratwurzel** einer Zahl
  - {{CSSxRef("hypot", "hypot()")}}: berechnet die **Quadratwurzel der Summe der Quadrate** der gegebenen Zahlen
  - {{CSSxRef("log", "log()")}}: berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{CSSxRef("exp", "exp()")}}: berechnet **`e` hoch einer anderen Zahl**
- [Vorzeichenfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: berechnet den **absoluten Wert** einer Zahl
  - {{CSSxRef("sign", "sign()")}}: berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Mathematikfunktionen verwenden, um responsive Benutzeroberflächen zu erstellen, ohne JavaScript-Code zu schreiben.
- CSS-Mathematikfunktionen können manchmal anstelle von [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 wählten Mitglieder des Interop-Projekts [„CSS Math Functions“ als einen Schwerpunktbereich der Verbesserung](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Dies bedeutet, dass Browseranbieter zusammenarbeiten, um sicherzustellen, dass CSS-Mathematikfunktionen in allen Browsern und auf allen Geräten gleich funktionieren.
