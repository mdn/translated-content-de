---
title: "`alpha()` CSS-Funktion"
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Die **`alpha()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) nimmt einen Ursprungs{{cssxref("color_value","color")}} und gibt dieselbe Farbe mit einem modifizierten Alpha- (Transparenz-) Kanal zurück. Die Farbkomponenten der Ursprungsfarbe bleiben unverändert. Das Ergebnis befindet sich im selben Farbraum wie die Ursprungsfarbe.

## Syntax

```css
/* Replace alpha with a fixed value */
alpha(from red / 50%)
alpha(from var(--my-color) / 80%)

/* Derive alpha relative to the origin color's alpha */
alpha(from var(--my-color) / calc(alpha * 0.5))
```

### Parameter

- `from <color>`
  - : Das Schlüsselwort `from` der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), gefolgt von jedem gültigen {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** definiert. Die Farbkomponenten der Ursprungsfarbe werden unverändert in das Ergebnis übernommen; nur der Alpha-Kanal wird beeinflusst.

- `/ <alpha-value>` {{optional_inline}}
  - : Ein {{cssxref("&lt;alpha-value&gt;")}}, der das Alpha der Ausgabefarbe angibt. Dies kann ein `<number>` zwischen `0` und `1`, ein `<percentage>` zwischen `0%` und `100%` oder ein {{cssxref("calc()")}} Ausdruck sein. Innerhalb dieses Wertes kann das Schlüsselwort **`alpha`** verwendet werden, um auf den Alpha-Kanal der Ursprungsfarbe als `<number>` zu verweisen (wobei `1.0` gleich `100%` ist). Wenn dieses Argument weggelassen wird, bleibt das Alpha der Ursprungsfarbe unverändert.

### Rückgabewert

Ein Farbwert im selben Farbraum wie die Ursprungsfarbe, mit identischen Farbkomponenten und einem modifizierten Alpha-Kanalwert gemäß Angabe.

## Beschreibung

Die `alpha()`-Funktion ist eine Funktion der [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), die es Ihnen ermöglicht, die Transparenz einer beliebigen Farbe anzupassen, ohne ihre anderen Komponenten neu zu schreiben. Dies ist besonders nützlich, wenn Sie eine halbtransparente Variante eines Design-Tokens oder einer benutzerdefinierten Farbe benötigen und diese automatisch von der Originalfarbe ableiten möchten, anstatt einen separaten Wert zu pflegen.

Innerhalb des Alpha-Wert-Arguments löst das Schlüsselwort `alpha` den Alpha-Kanal der Ursprungsfarbe als {{cssxref("&lt;number&gt;")}} im Bereich `[0, 1]` auf. Dies ermöglicht es Ihnen, das Ausgabe-Alpha relativ zum Eingabewert auszudrücken, indem Sie es beispielsweise mit `calc(alpha * 0.5)` halbieren oder mit `clamp(0.2, alpha, 0.8)` einschränken.

Im Gegensatz zur allgemeinen [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (z.B. `oklch(from ...)`) gibt die `alpha()`-Funktion nicht die einzelnen Farbkanal-Schlüsselwörter des Ursprungsfarbraums preis. Sie bezieht sich ausschließlich auf den Alpha-Kanal und hält den Rest der Farbe intakt.

Der Rückgabewert ist immer im selben Farbraum wie die Ursprungsfarbe. Wenn die Ursprungsfarbe beispielsweise eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe ist, wird das Ergebnis ebenfalls in OKLCh aufgelöst, mit der gleichen Helligkeit, Chroma und dem gleichen Farbton.

## Beispiele

### Ersetzen des Alphas einer Farbe

In diesem Beispiel geben wir zwei Farben an. Die zweite Farbe wird definiert, indem die erste Farbe in die `alpha()`-Funktion übergeben wird, wobei ihr Alpha-Kanal auf einen festen Wert von `80%` gesetzt wird. Die beiden Farben werden als {{cssxref("background-color")}} von zwei {{htmlelement("div")}} Elementen gesetzt, um den Unterschied zu demonstrieren.

```html live-sample___replace-alpha
<div class="box1">Original</div>
<div class="box2">Fixed 80% alpha</div>
```

```css live-sample___replace-alpha
:root {
  --my-color: oklch(60% 0.25 315 / 0.3);

  /* Same color, but with alpha set to 80% */
  --my-color-80: alpha(from var(--my-color) / 80%);
}

.box1 {
  background-color: var(--my-color);
}

.box2 {
  background-color: var(--my-color-80);
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha
body {
  font-family: sans-serif;
  display: flex;
  gap: 10%;
  justify-content: center;
}

div {
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

{{EmbedLiveSample("replace-alpha", "100%", 100)}}

### Ableiten einer halbtransparenten Variante

Dieses Beispiel ist dem vorherigen sehr ähnlich, mit dem Unterschied, dass dieses Mal das Alpha der zweiten Farbe als die Hälfte des Alphas der ersten Farbe berechnet wird, indem das Schlüsselwort `alpha` innerhalb eines `calc()`-Ausdrucks verwendet wird.

```html live-sample___derive-alpha
<div class="box1">Original</div>
<div class="box2">Derived 50% alpha</div>
```

```css live-sample___derive-alpha
:root {
  --my-color: oklch(60% 0.25 315 / 0.8);

  /* Half the opacity of --my-color */
  --my-color-half-opacity: alpha(from var(--my-color) / calc(alpha * 0.5));
}

.box1 {
  background-color: var(--my-color);
}

.box2 {
  background-color: var(--my-color-half-opacity);
}
```

{{EmbedLiveSample("derive-alpha", "100%", 100)}}

### Einblenden einer Farbe bei Hover

In diesem Beispiel wird der Hintergrund eines Elements bei {{cssxref(":hover")}} auf `40%` Deckkraft ausgeblendet, während die Farbe selbst gleich bleibt.

```html live-sample___fade-on-hover
<button class="card">Hover over me</button>
```

```css live-sample___fade-on-hover
:root {
  --brand: oklch(55% 0.22 270);
}

.card {
  background-color: var(--brand);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card:hover {
  background-color: alpha(from var(--brand) / 40%);
}
```

```css hidden live-sample___fade-on-hover
body {
  padding: 2rem;
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha live-sample___fade-on-hover
@supports not (color: alpha(from red / 50%)) {
  body::before {
    font-family: sans-serif;
    content: "Your browser does not support the CSS alpha() function.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 30% 0 auto;
  }
}
```

{{EmbedLiveSample("fade-on-hover", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;color&gt;")}} Datentyp
- {{cssxref("&lt;alpha-value&gt;")}} Datentyp
- [Relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
