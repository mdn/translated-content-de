---
title: Verwendung von CSS-Mathematikfunktionen
short-title: Verwendung von Mathematikfunktionen
slug: Web/CSS/Guides/Values_and_units/Using_math_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Mathematikfunktionen** ermöglichen es, einen Eigenschaftswert - wie zum Beispiel die `height`, `animation-duration` oder `font-size` eines Elements - als mathematischen Ausdruck zu schreiben.

Ohne die Verwendung von Mathematik sind die eingebauten [CSS-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente zu gestalten und ein bestimmtes Benutzererlebnis zu erreichen.

Es gibt jedoch Fälle, in denen wir uns eingeschränkt fühlen könnten, indem wir den Stil eines Elements nur mit einem einzelnen Wert und einer Einheit ausdrücken. Betrachten Sie die folgenden Beispiele:

1. Wir möchten die Höhe eines Inhaltsbereichs auf "die Höhe des Viewports minus der Höhe einer Navigationsleiste" setzen.
2. Wir möchten die Breite von zwei Elementen zusammenzählen, um die Breite eines dritten Elements zu definieren.
3. Wir möchten verhindern, dass eine variable `font-size` eines Textes über eine bestimmte Größe hinauswächst.

In all diesen Fällen müssen wir auf Mathematik zurückgreifen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte darin bestehen, auf mathematische Funktionen zu setzen, die von JavaScript definiert werden, und die Styles der Elemente dynamisch basierend auf den von unseren Skripten berechneten Ergebnissen festzulegen.

In vielen Fällen, einschließlich der oben genannten Beispiele, können **wir stattdessen Mathematikfunktionen verwenden, die direkt in CSS integriert sind**. Diese Lösung ist oft einfacher zu implementieren und schneller für den Browser auszuführen als die Verwendung von JavaScript.

Insgesamt können Entwickler eine Kombination aus [fast zwei Dutzend CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der häufig verwendeten Funktionen exemplarisch darstellen und die fortgeschritteneren einführen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei oben genannten Beispiele möchten wir den Stil eines Elements entsprechend dem Ergebnis einer Additions- oder Subtraktionsoperation festlegen. Genau dies ist einer der Anwendungsfälle für {{CSSxRef("calc", "calc()")}}.

Die **`calc()`**-Funktion ermöglicht es Ihnen, CSS-Eigenschaftswerte mithilfe von **Addition, Subtraktion, Multiplikation und Division** anzugeben. Sie wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten zu kombinieren, wie z. B. `%` und `px`.

Die `calc()`-Mathematikfunktion nimmt einen mathematischen Ausdruck als Parameter und gibt das Ergebnis dieses Ausdrucks zurück, z. B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `calc()`-Beispiel im Code-Playground zu sehen und probieren Sie es selbst aus.

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

## `min()`: Den Mindestwert in einer Menge finden

Es gibt Fälle, in denen wir nicht möchten, dass der Wert einer CSS-Eigenschaft eine bestimmte Zahl überschreitet. Angenommen, wir möchten die Breite unseres Inhaltscontainers als den kleineren Wert von "der gesamten Breite unseres Bildschirms" und "500 Pixel" festlegen. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("min", "min()")}} verwenden.

Die `min()`-Mathematikfunktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den kleinsten dieser Werte zurück, z. B.:

```css
width: min(32px, 50%, 2rem);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten zu vergleichen, wie z. B. `%` und `px`.

### `min()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `min()`-Beispiel im Code-Playground zu sehen und probieren Sie es selbst aus.

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

## `max()`: Den Höchstwert in einer Menge finden

Ähnlich wie bei `min()` möchten wir manchmal nicht, dass der Wert einer CSS-Eigenschaft unter eine bestimmte Zahl fällt. Zum Beispiel möchten wir möglicherweise die Breite unseres Inhaltscontainers als den _größeren_ Wert von "der gesamten Breite unseres Bildschirms" und "500 Pixel" festlegen. In diesen Fällen können wir die CSS-Mathematikfunktion {{CSSxRef("max", "max()")}} verwenden.

Die `max()`-Mathematikfunktion nimmt eine Menge von durch Kommas getrennten Werten als Argumente und gibt den größten dieser Werte zurück, z. B.:

```css
width: max(32px, 50%, 2rem);
```

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten zu vergleichen, wie z. B. `%` und `px`.

Beachten Sie die Ähnlichkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `max()`-Beispiel im Code-Playground zu sehen und probieren Sie es selbst aus.

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

## `clamp()`: Einen Wert zwischen zwei Werten einschränken

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{CSSxRef("clamp", "clamp()")}} verwenden. Die `clamp()`-Mathematikfunktion nimmt einen Mindestwert, den einzugrenzenden Wert und den Höchstwert als Argumente entgegen, z. B.:

```css
/* clamped value: 50%, minimum: 100px, maximum: 300px */
width: clamp(100px, 50%, 300px);
```

- Wenn der einzugrenzende Wert kleiner als der übergebene Mindestwert ist, gibt die Funktion den Mindestwert zurück.
- Wenn der einzugrenzende Wert größer als der übergebene Höchstwert ist, gibt die Funktion den Höchstwert zurück.
- Wenn der einzugrenzende Wert zwischen den übergebenen Mindest- und Höchstwerten liegt, gibt die Funktion den ursprünglichen einzugrenzenden Wert zurück.

Diese Funktion wird häufig verwendet, um zwei CSS-Werte mit unterschiedlichen Einheiten zu vergleichen, wie z. B. `%` und `px`.

### `clamp()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `clamp()`-Beispiel im Code-Playground zu sehen und probieren Sie es selbst aus.

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

Beim Layouten und Gestalten von DOM-Elementen sind die vier grundlegenden Mathematikfunktionen {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}} und {{CSSxRef("clamp", "clamp()")}} oft ausreichend. Für fortgeschrittene Anwendungen wie Lernmaterialien zur Mathematik, 3D-Visualisierungen oder CSS-Animationen könnten Sie jedoch erwägen, zu verwenden:

- [Stufen-Wert-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: berechnet einen **Wert unter Anwendung einer Rundungsstrategie**
  - {{CSSxRef("mod", "mod()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Divisor**
  - {{CSSxRef("rem", "rem()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Dividend**
- [Trigonometrische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: berechnet den **trigonometrischen Sinus** einer Zahl
  - {{CSSxRef("cos", "cos()")}}: berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{CSSxRef("tan", "tan()")}}: berechnet den **trigonometrischen Tangens** einer Zahl
  - {{CSSxRef("asin", "asin()")}}: berechnet den **trigonometrischen Arkussinus** einer Zahl
  - {{CSSxRef("acos", "acos()")}}: berechnet den **trigonometrischen Arkuskosinus** einer Zahl
  - {{CSSxRef("atan", "atan()")}}: berechnet den **trigonometrischen Arkustangens** einer Zahl
  - {{CSSxRef("atan2", "atan2()")}}: berechnet den **trigonometrischen Arkustangens** zweier Zahlen
- [Exponentialfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: berechnet eine Zahl, **potenziert mit einer anderen Zahl**
  - {{CSSxRef("sqrt", "sqrt()")}}: berechnet die **Quadratwurzel** einer Zahl
  - {{CSSxRef("hypot", "hypot()")}}: berechnet die **Quadratwurzel der Summe der Quadrate** der gegebenen Zahlen
  - {{CSSxRef("log", "log()")}}: berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{CSSxRef("exp", "exp()")}}: berechnet **`e` potenziert mit einer anderen Zahl**
- [Vorzeichenfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: berechnet den **Betrag** einer Zahl
  - {{CSSxRef("sign", "sign()")}}: berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Mathematikfunktionen nutzen, um responsive Benutzeroberflächen zu erstellen, ohne JavaScript-Code zu schreiben.
- CSS-Mathematikfunktionen können manchmal anstelle von [CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 wählten Mitglieder des Interop-Projekts ["CSS Math Functions" als Schwerpunktbereich für Verbesserungen](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Dies bedeutet, dass Browseranbieter zusammen daran arbeiten, sicherzustellen, dass CSS-Mathematikfunktionen in allen Browsern und Geräten gleich funktionieren.
