---
title: Verwendung von CSS-Mathematikfunktionen
short-title: Verwendung von Mathematikfunktionen
slug: Web/CSS/Guides/Values_and_units/Using_math_functions
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS-Mathematikfunktionen** ermöglichen es, einen Eigenschaftswert - wie die `Höhe`, `Animationsdauer` oder `Schriftgröße` eines Elements - als mathematischen Ausdruck zu schreiben.

Ohne die Verwendung von Mathematik sind die eingebauten [CSS-Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) wie `rem`, `vw` und `%` oft flexibel genug, um HTML-Elemente zu gestalten und eine bestimmte Benutzererfahrung zu erreichen.

Es gibt jedoch Fälle, in denen wir uns bei der Angabe eines Stilwertes auf eine einzelne Einheit beschränkt fühlen. Betrachten Sie die folgenden Beispiele:

1. Wir wollen die Höhe eines Inhaltsbereiches auf "die Höhe des Viewports minus die Höhe einer Navigationsleiste" festlegen.
2. Wir wollen die Breite von zwei Elementen addieren, um die Breite eines dritten Elements zu definieren.
3. Wir wollen verhindern, dass eine variable `Schriftgröße` eines Textes über eine bestimmte Größe hinaus wächst.

In all diesen Fällen müssen wir uns auf Mathematik verlassen, um die gewünschten Ergebnisse zu erzielen. Eine Lösung könnte darin bestehen, auf mathematische Funktionen zu setzen, die durch JavaScript definiert sind, und die Stile von Elementen dynamisch basierend auf den von unseren Skripten berechneten Ergebnissen zu setzen.

In vielen Fällen, einschließlich der obigen Beispiele, **können wir stattdessen Mathematikfunktionen verwenden, die direkt in CSS eingebaut sind**. Diese Lösung ist oft einfacher zu implementieren und schneller für den Browser auszuführen als die Nutzung von JavaScript.

Insgesamt können Entwickler eine Kombination aus [fast zwei Dutzend CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) in ihren Stylesheets verwenden. In diesem Leitfaden werden wir vier der am häufigsten verwendeten exemplifizieren und die fortgeschritteneren vorstellen.

## `calc()`: Grundlegende mathematische Operationen

In den ersten beiden unserer drei oben genannten Beispiele möchten wir den Stil eines Elements gemäß dem Ergebnis einer Additions- oder Subtraktionsoperation festlegen. Dies ist genau einer der Anwendungsfälle für {{cssxref("calc()")}}.

Die **`calc()`**-Funktion ermöglicht es Ihnen, CSS-Eigenschaftswerte unter Verwendung von **Addition, Subtraktion, Multiplikation und Division** anzugeben. Sie wird oft verwendet, um zwei CSS-Werte zu kombinieren, die unterschiedliche Einheiten haben, zum Beispiel `%` und `px`.

Die `calc()`-Mathematikfunktion nimmt einen mathematischen Ausdruck als Parameter und gibt das Ergebnis dieses Ausdrucks zurück, z.B.:

```css
property: calc(expression);
```

### `calc()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `calc()`-Beispiel im Code-Spielplatz zu sehen und probieren Sie es selbst aus.

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

## `min()`: Den minimalen Wert in einem Satz finden

Es gibt Fälle, in denen wir nicht wollen, dass der Wert einer CSS-Eigenschaft eine bestimmte Zahl überschreitet. Angenommen, wir wollen die Breite unseres Inhaltscontainers auf die kleinere von "der vollen Breite unseres Bildschirms" und "500 Pixel" festlegen. In diesen Fällen können wir die CSS-Mathematikfunktion {{cssxref("min()")}} verwenden.

Die `min()`-Mathematikfunktion nimmt eine Reihe von durch Kommas getrennten Werten als Argumente und gibt den kleinsten dieser Werte zurück, z.B.:

```css
width: min(32px, 50%, 2rem);
```

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `min()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `min()`-Beispiel im Code-Spielplatz zu sehen und probieren Sie es selbst aus.

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

## `max()`: Den maximalen Wert in einem Satz finden

Ähnlich wie bei `min()` möchten wir manchmal nicht, dass der Wert einer CSS-Eigenschaft unter eine bestimmte Zahl fällt. Zum Beispiel könnten wir wollen, dass die Breite unseres Inhaltscontainers die _größere_ von "der vollen Breite unseres Bildschirms" und "500 Pixel" ist. In diesen Fällen können wir die CSS-Mathematikfunktion {{cssxref("max()")}} verwenden.

Die `max()`-Mathematikfunktion nimmt eine Reihe von durch Kommas getrennten Werten als Argumente und gibt den größten dieser Werte zurück, z.B.:

```css
width: max(32px, 50%, 2rem);
```

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

Beachten Sie die Ähnlichkeiten und Unterschiede zwischen den Beispielen für `min()` und `max()`.

### `max()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `max()`-Beispiel im Code-Spielplatz zu sehen und probieren Sie es selbst aus.

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

Wir können die Funktionen von `min()` und `max()` kombinieren, indem wir {{cssxref("clamp()")}} verwenden. Die `clamp()`-Mathematikfunktion nimmt einen Minimalwert, den einzuschränkenden Wert und den Maximalwert als Argumente, z.B.:

```css
/* clamped value: 50%, minimum: 100px, maximum: 300px */
width: clamp(100px, 50%, 300px);
```

- Wenn der einzuschränkende Wert kleiner als der übergebene Minimalwert ist, gibt die Funktion den Minimalwert zurück.
- Wenn der einzuschränkende Wert größer als der übergebene Maximalwert ist, gibt die Funktion den Maximalwert zurück.
- Wenn der einzuschränkende Wert zwischen den übergebenen Minimal- und Maximalwerten liegt, gibt die Funktion den ursprünglichen einzuschränkenden Wert zurück.

Diese Funktion wird oft verwendet, um zwei CSS-Werte zu vergleichen, die unterschiedliche Einheiten haben, wie `%` und `px`.

### `clamp()` Beispiel

Klicken Sie auf das Wiedergabesymbol unten, um das `clamp()`-Beispiel im Code-Spielplatz zu sehen und probieren Sie es selbst aus.

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

## Fortgeschrittene CSS-Mathematikfunktionen

Beim Layouten und Stylen von DOM-Elementen sind die vier grundlegenden Mathematikfunktionen {{cssxref("calc()")}}, {{cssxref("min()")}}, {{cssxref("max()")}}, und {{cssxref("clamp()")}} oft ausreichend. Für fortgeschrittene Anwendungen wie Mathematik-Lernmaterialien, 3D-Visualisierungen oder CSS-Animationen können Sie jedoch erwägen, folgende Funktionen zu verwenden:

- [Wert in Stufen-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#stepped_value_functions)
  - {{cssxref("round()")}}: berechnet einen **Wert anhand einer Rundungsstrategie**
  - {{cssxref("mod()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Divisor**
  - {{cssxref("rem()")}}: berechnet den **Rest** einer Division mit dem **gleichen Vorzeichen wie der Dividend**
- [Trigonometrische Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#trigonometric_functions)
  - {{cssxref("sin()")}}: berechnet den **trigonometrischen Sinus** einer Zahl
  - {{cssxref("cos()")}}: berechnet den **trigonometrischen Kosinus** einer Zahl
  - {{cssxref("tan()")}}: berechnet den **trigonometrischen Tangens** einer Zahl
  - {{cssxref("asin()")}}: berechnet den **trigonometrischen inversen** Sinus einer Zahl
  - {{cssxref("acos()")}}: berechnet den **trigonometrischen inversen** Kosinus einer Zahl
  - {{cssxref("atan()")}}: berechnet den **trigonometrischen inversen** Tangens einer Zahl
  - {{cssxref("atan2()")}}: berechnet den **trigonometrischen inversen** Tangens unter Verwendung zweier Zahlen
- [Exponentielle Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#exponential_functions)
  - {{cssxref("pow()")}}: berechnet eine Zahl **erhöht um die Potenz** einer anderen Zahl
  - {{cssxref("sqrt()")}}: berechnet die **Quadratwurzel** einer Zahl
  - {{cssxref("hypot()")}}: berechnet die **Quadratwurzel der Summe der Quadrate** der gegebenen Zahlen
  - {{cssxref("log()")}}: berechnet den **Logarithmus** einer Zahl (mit `e` als Standardbasis)
  - {{cssxref("exp()")}}: berechnet **`e` hoch der Potenz** einer anderen Zahl
- [Vorzeichenbezogene Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#sign-related_functions)
  - {{cssxref("abs()")}}: berechnet den **absoluten Wert** einer Zahl
  - {{cssxref("sign()")}}: berechnet das **Vorzeichen (positiv, negativ oder null)** einer Zahl

## Abschließende Gedanken

- Sie können CSS-Mathematikfunktionen verwenden, um responsive Benutzeroberflächen zu erstellen, ohne JavaScript-Code zu schreiben.
- CSS-Mathematikfunktionen können manchmal anstelle von [CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet werden, um Layout-Breakpoints zu definieren.
- Im Jahr 2023 haben Mitglieder des Interop-Projekts [„CSS-Mathematikfunktionen“ als Schwerpunktbereich für Verbesserungen ausgewählt](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). Das bedeutet, dass Browserhersteller zusammenarbeiten, um sicherzustellen, dass CSS-Mathematikfunktionen in allen Browsern und Geräten gleich funktionieren.
