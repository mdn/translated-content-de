---
title: Verwenden von CSS-Mathematikfunktionen
slug: Web/CSS/CSS_Functions/Using_CSS_math_functions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**CSS-Mathematikfunktionen** ermöglichen, dass ein Eigenschaftswert - wie die `height`, `animation-duration` oder `font-size` eines Elements - als mathematischer Ausdruck geschrieben wird.

Ohne mathematische Ausdrücke zu verwenden, sind die eingebauten [CSS-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente zu gestalten, um ein bestimmtes Benutzererlebnis zu erreichen.

Es gibt jedoch Fälle, in denen wir uns eingeschränkt fühlen, wenn wir den Stil eines Elements mit einem einzelnen Wert und einer Einheit ausdrücken. Betrachten Sie die folgenden Beispiele:

1. Wir möchten die Höhe eines Inhaltsbereichs auf "die Höhe des Viewports minus die Höhe einer Navigationsleiste" setzen.
2. Wir möchten die Breite von zwei Elementen addieren, um die Breite eines dritten Elements zu definieren.
3. Wir wollen verhindern, dass eine variable `font-size` eines Texts über eine bestimmte Größe hinauswächst.

In all diesen Fällen müssen wir uns auf Mathematik verlassen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte sein, sich auf mathematische Funktionen zu verlassen, die von JavaScript definiert sind, und die Stile der Elemente dynamisch auf Basis der von unseren Skripten berechneten Ergebnisse festzulegen.

In vielen Fällen, einschließlich der oben genannten Beispiele, **können wir stattdessen Mathematikfunktionen verwenden, die direkt in CSS eingebaut sind**. Diese Lösung lässt sich oft einfacher implementieren und ist für den Browser schneller auszuführen als die Verwendung von JavaScript.

Insgesamt können Entwickler eine Kombination aus [fast zwei Dutzend CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der häufiger verwendeten Funktionen beispielhaft erläutern und die fortgeschritteneren vorstellen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei obigen Beispiele möchten wir den Stil eines Elements entsprechend dem Ergebnis einer Additions- oder Subtraktionsoperation festlegen. Genau dafür ist {{CSSxRef("calc", "calc()")}} gedacht.

Die **`calc()`**-Funktion ermöglicht es, CSS-Property-Werte unter Verwendung von **Addition, Subtraktion, Multiplikation und Division** festzulegen. Sie wird häufig verwendet, um zwei CSS-Werte zu kombinieren, die unterschiedliche Einheiten haben, wie `%` und `px`.

Die `calc()`-Mathefunktion nimmt einen mathematischen Ausdruck als Parameter und gibt das Ergebnis dieses Ausdrucks zurück, z.B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `calc()`-Beispiel im Code-Playground zu sehen und es selbst auszuprobieren.

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

Es gibt Fälle, in denen wir nicht möchten, dass der Wert einer CSS-Eigenschaft eine bestimmte Zahl überschreitet. Angenommen, wir möchten, dass die Breite unseres Inhaltscontainers die kleinere von "der gesamten Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("min", "min()")}} verwenden.

Die `min()`-Mathefunktion nimmt eine Menge kommagetrennter Werte als Argumente und gibt den kleinsten dieser Werte zurück, z.B.:

```css
property: min(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `min()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `min()`-Beispiel im Code-Playground zu sehen und es selbst auszuprobieren.

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

Ähnlich wie bei `min()` möchten wir manchmal nicht, dass der Wert einer CSS-Eigenschaft unter eine bestimmte Zahl sinkt. Zum Beispiel könnten wir möchten, dass die Breite unseres Inhaltscontainers die _größere_ von "der gesamten Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("max", "max()")}} verwenden.

Die `max()`-Mathefunktion nimmt eine Menge kommagetrennter Werte als Argumente und gibt den größten dieser Werte zurück, z.B.:

```css
property: max(<first value>, <second value>, <third value>, ...);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

Beachten Sie die Ähnlichkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `max()`-Beispiel im Code-Playground zu sehen und es selbst auszuprobieren.

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

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{CSSxRef("clamp", "clamp()")}} verwenden. Die `clamp()`-Mathefunktion nimmt einen minimalen Wert, den zu klemmenden Wert und den maximalen Wert als Argumente, z.B.:

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

- Wenn der zu klemmende Wert kleiner als der übergebene Mindestwert ist, gibt die Funktion den Mindestwert zurück.
- Wenn der zu klemmende Wert größer als der übergebene Höchstwert ist, gibt die Funktion den Höchstwert zurück.
- Wenn der zu klemmende Wert zwischen den übergebenen Mindest- und Höchstwerten liegt, gibt die Funktion den ursprünglichen zu klemmenden Wert zurück.

Diese Funktion wird häufig verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `clamp()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `clamp()`-Beispiel im Code-Playground zu sehen und es selbst auszuprobieren.

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

Beim Layouten und Stylen von DOM-Elementen sind die vier grundlegenden Mathematikfunktionen {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, und {{CSSxRef("clamp", "clamp()")}} oft ausreichend. Für fortgeschrittenere Anwendungen wie Lernmaterialien zur Mathematik, 3D-Visualisierungen oder CSS-Animationen könnten Sie jedoch in Betracht ziehen, folgende Funktionen zu verwenden:

- [Schrittwertfunktionen](/de/docs/Web/CSS/CSS_Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: Berechnet einen **Wert unter Verwendung einer Rundungsstrategie**
  - {{CSSxRef("mod", "mod()")}}: Berechnet den **Rest** einer Divisionsoperation mit demselben **Vorzeichen wie der Divisor**
  - {{CSSxRef("rem", "rem()")}}: Berechnet den **Rest** einer Divisionsoperation mit demselben **Vorzeichen wie der Dividende**
- [Trigonometrische Funktionen](/de/docs/Web/CSS/CSS_Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: Berechnet den **trigonometrischen Sinus** einer Zahl
  - {{CSSxRef("cos", "cos()")}}: Berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{CSSxRef("tan", "tan()")}}: Berechnet den **trigonometrischen Tangens** einer Zahl
  - {{CSSxRef("asin", "asin()")}}: Berechnet den **trigonometrischen Arkussinus** einer Zahl
  - {{CSSxRef("acos", "acos()")}}: Berechnet den **trigonometrischen Arkuskosinus** einer Zahl
  - {{CSSxRef("atan", "atan()")}}: Berechnet den **trigonometrischen Arkustangens** einer Zahl
  - {{CSSxRef("atan2", "atan2()")}}: Berechnet den **trigonometrischen Arkustangens**, gegeben zwei Zahlen
- [Exponentielle Funktionen](/de/docs/Web/CSS/CSS_Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: Berechnet eine Zahl, **erhoben zu einer Potenz** einer anderen Zahl
  - {{CSSxRef("sqrt", "sqrt()")}}: Berechnet die **Quadratwurzel** einer Zahl
  - {{CSSxRef("hypot", "hypot()")}}: Berechnet die **Quadratwurzel der Summe der Quadrate** der gegebenen Zahlen
  - {{CSSxRef("log", "log()")}}: Berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{CSSxRef("exp", "exp()")}}: Berechnet **`e` erhoben zur Potenz** einer anderen Zahl
- [Vorzeichenfunktionen](/de/docs/Web/CSS/CSS_Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: Berechnet den **absoluten Wert** einer Zahl
  - {{CSSxRef("sign", "sign()")}}: Berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Mathematikfunktionen verwenden, um reaktionsfähige Benutzeroberflächen zu erstellen, ohne JavaScript-Code zu schreiben.
- CSS-Mathematikfunktionen können manchmal anstelle von [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 haben Mitglieder des Interop-Projekts [„CSS-Mathematikfunktionen“ als Schwerpunktbereich für Verbesserungen ausgewählt](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Dies bedeutet, dass Browseranbieter zusammenarbeiten, um sicherzustellen, dass CSS-Mathematikfunktionen in allen Browsern und auf allen Geräten gleich funktionieren.
