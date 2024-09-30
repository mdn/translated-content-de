---
title: Verwendung von CSS-Mathematikfunktionen
slug: Web/CSS/CSS_Functions/Using_CSS_math_functions
l10n:
  sourceCommit: 8b70438172c589ea52ffb24714818da73d759537
---

{{CSSRef}}

**CSS-Mathematikfunktionen** ermöglichen es, einen Eigenschaftswert - wie `height`, `animation-duration` oder `font-size` eines Elements - als mathematischen Ausdruck zu schreiben.

Ohne Verwendung von Mathematik sind die eingebauten [CSS-Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente so zu gestalten, dass ein bestimmtes Benutzererlebnis erreicht wird.

Es gibt jedoch Fälle, in denen wir uns eingeschränkt fühlen könnten, den Stil eines Elements mit einem einzigen Wert und einer Einheit auszudrücken. Betrachten Sie die folgenden Beispiele:

1. Wir möchten die Höhe eines Inhaltsbereichs auf "die Höhe des Viewports minus die Höhe einer Navigationsleiste" setzen.
2. Wir möchten die Breite von zwei Elementen zusammenfügen, um die Breite eines dritten Elements zu definieren.
3. Wir möchten verhindern, dass eine variable `font-size` eines Textes über eine bestimmte Größe hinauswächst.

In all diesen Fällen müssen wir uns auf Mathematik verlassen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte darin bestehen, auf mathematische Funktionen zu setzen, die durch JavaScript definiert sind, und die Stile von Elementen dynamisch basierend auf den von unseren Skripten berechneten Ergebnissen festzulegen.

In vielen Fällen, einschließlich der oben genannten Beispiele, **können wir stattdessen Mathematikfunktionen direkt in CSS nutzen**. Diese Lösung ist oft einfacher zu implementieren und schneller vom Browser auszuführen als die Verwendung von JavaScript.

Insgesamt können Entwickler eine Kombination von [fast zwei Dutzend CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der häufiger verwendeten Beispiele veranschaulichen und die fortgeschritteneren vorstellen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei oben genannten Beispiele möchten wir den Stil eines Elements entsprechend dem Ergebnis einer Addition oder Subtraktion festlegen. Dies ist genau ein Anwendungsfall für {{CSSxRef("calc", "calc()")}}.

Die **`calc()`**-Funktion erlaubt es Ihnen, CSS-Eigenschaftswerte unter Verwendung von **Addition, Subtraktion, Multiplikation und Division** anzugeben. Sie wird häufig verwendet, um zwei CSS-Werte zu kombinieren, die unterschiedliche Einheiten haben, wie `%` und `px`.

Die `calc()`-Mathematikfunktion nimmt einen mathematischen Ausdruck als Parameter und gibt das Ergebnis dieses Ausdrucks zurück, z.B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Abspielen-Symbol unten, um das `calc()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

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

## `min()`: Den minimalen Wert in einer Menge finden

Es gibt Fälle, in denen wir nicht wollen, dass der Wert einer CSS-Eigenschaft eine bestimmte Zahl überschreitet. Angenommen, wir möchten, dass die Breite unseres Inhaltscontainers der kleinere Wert von "die volle Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("min", "min()")}} verwenden.

Die `min()`-Mathematikfunktion nimmt eine Reihe von durch Kommas getrennten Werten als Argumente und gibt den kleinsten dieser Werte zurück, z.B.:

```css
property: min(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `min()` Beispiel

Klicken Sie auf das Abspielen-Symbol unten, um das `min()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

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

## `max()`: Den maximalen Wert in einer Menge finden

Ähnlich wie `min()` wollen wir manchmal nicht, dass der Wert einer CSS-Eigenschaft unter eine bestimmte Zahl fällt. Beispielsweise möchten wir, dass die Breite unseres Inhaltscontainers der _größere_ Wert von "die volle Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("max", "max()")}} verwenden.

Die `max()`-Mathematikfunktion nimmt eine Reihe von durch Kommas getrennten Werten als Argumente und gibt den größten dieser Werte zurück, z.B.:

```css
property: max(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

Beachten Sie die Ähnlichkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Abspielen-Symbol unten, um das `max()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

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

## `clamp()`: Einen Wert zwischen zwei Werten begrenzen

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{CSSxRef("clamp", "clamp()")}} verwenden. Die `clamp()`-Mathematikfunktion nimmt einen minimalen Wert, den zu begrenzenden Wert und den maximalen Wert als Argumente, z.B.:

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

- Wenn der zu begrenzende Wert kleiner ist als der übergebene Minimalwert, gibt die Funktion den Minimalwert zurück.
- Wenn der zu begrenzende Wert größer ist als der übergebene Maximalwert, gibt die Funktion den Maximalwert zurück.
- Wenn der zu begrenzende Wert zwischen dem übergebenen minimalen und maximalen Wert liegt, gibt die Funktion den ursprünglichen zu begrenzenden Wert zurück.

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `clamp()` Beispiel

Klicken Sie auf das Abspielen-Symbol unten, um das `clamp()`-Beispiel im Code-Spielplatz zu sehen und es selbst auszuprobieren.

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

## Erweiterte CSS-Mathematikfunktionen

Beim Layouten und Gestalten von DOM-Elementen sind die vier grundlegenden Mathematikfunktionen {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und {{CSSxRef("clamp", "clamp()")}} oft ausreichend. Für fortgeschrittene Verwendungen wie Lernmaterialien zur Mathematik, 3D-Visualisierungen oder CSS-Animationen sollten Sie jedoch in Betracht ziehen, folgende Funktionen zu verwenden:

- [Stufungsfunktionen](/de/docs/Web/CSS/CSS_Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: berechnet einen **Wert gemäß einer Rundungsstrategie**
  - {{CSSxRef("mod", "mod()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Divisor**
  - {{CSSxRef("rem", "rem()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Dividend**
- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: berechnet den **trigonometrischen Sinus** einer Zahl
  - {{CSSxRef("cos", "cos()")}}: berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{CSSxRef("tan", "tan()")}}: berechnet den **trigonometrischen Tangens** einer Zahl
  - {{CSSxRef("asin", "asin()")}}: berechnet den **trigonometrischen Arkussinus** einer Zahl
  - {{CSSxRef("acos", "acos()")}}: berechnet den **trigonometrischen Arkuskosinus** einer Zahl
  - {{CSSxRef("atan", "atan()")}}: berechnet den **trigonometrischen Arkustangens** einer Zahl
  - {{CSSxRef("atan2", "atan2()")}}: berechnet den **trigonometrischen Arkustangens** mit zwei Zahlen
- [Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: berechnet eine Zahl, die **auf die Potenz** einer anderen Zahl erhöht wird
  - {{CSSxRef("sqrt", "sqrt()")}}: berechnet die **Quadratwurzel** einer Zahl
  - {{CSSxRef("hypot", "hypot()")}}: berechnet die **Quadratwurzel der Summe der Quadrate** der angegebenen Zahlen
  - {{CSSxRef("log", "log()")}}: berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{CSSxRef("exp", "exp()")}}: berechnet **`e` hoch** eine andere Zahl
- [Vorzeichenfunktionen](/de/docs/Web/CSS/CSS_Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: berechnet den **absoluten Wert** einer Zahl
  - {{CSSxRef("sign", "sign()")}}: berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Mathematikfunktionen nutzen, um responsive Benutzeroberflächen zu erstellen, ohne JavaScript-Code zu schreiben.
- CSS-Mathematikfunktionen können manchmal anstelle von [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 wählten Mitglieder des Interop-Projekts [„CSS-Mathematikfunktionen“ als einen Schwerpunktbereich für Verbesserungen aus](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Das bedeutet, dass Browserhersteller zusammenarbeiten, um sicherzustellen, dass CSS-Mathematikfunktionen in allen Browsern und Geräten gleich funktionieren.
