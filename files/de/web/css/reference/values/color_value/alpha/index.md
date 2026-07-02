---
title: "`alpha()` CSS-Funktion"
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: fb0c5c4bd92cfdc043afcfca944c658cbf592b34
---

Die **`alpha()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) nimmt einen ursprünglichen {{cssxref("color_value","Farbwert")}} und gibt dieselbe Farbe mit einem modifizierten Alpha-(Transparenz-)Kanal zurück. Die Farbkomponenten der ursprünglichen Farbe bleiben unverändert. Das Ergebnis befindet sich im selben Farbraum wie die ursprüngliche Farbe.

## Syntax

```css
/* Replace alpha with a fixed value */
alpha(from red / 50%)
alpha(from var(--mycolor) / 80%)

/* Derive alpha relative to the origin color's alpha */
alpha(from var(--mycolor) / calc(alpha * 0.5))
```

### Parameter

- `from <color>`
  - : Das [relative Farbsystem](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) Syntax-Schlüsselwort `from` gefolgt von einem gültigen {{cssxref("&lt;color&gt;")}} Wert, der die **ursprüngliche Farbe** definiert. Die Farbbestandteile der ursprünglichen Farbe werden unverändert auf das Ergebnis übertragen; nur der Alphakanal wird beeinflusst.

- `/ <alpha-value>` {{optional_inline}}
  - : Ein {{cssxref("&lt;alpha-value&gt;")}}, das das Alpha der Ausgabefarbe spezifiziert. Dies kann eine `<number>` zwischen `0` und `1`, ein `<percentage>` zwischen `0%` und `100%` oder ein {{cssxref("calc()")}} Ausdruck sein. Innerhalb dieses Wertes kann das Schlüsselwort **`alpha`** verwendet werden, um auf den Alphakanal der ursprünglichen Farbe als `<number>` (wobei `1.0` `100%` entspricht) zu verweisen. Wenn dieses Argument weggelassen wird, wird das Alpha der ursprünglichen Farbe unverändert verwendet.

### Rückgabewert

Ein Farbwert im selben Farbraum wie die ursprüngliche Farbe, mit identischen Farbkomponenten und einem modifizierten Alphakanalwert wie angegeben.

## Beschreibung

Die `alpha()` Funktion ist eine [relative Farb](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) Funktion, die es Ihnen ermöglicht, die Transparenz einer Farbe anzupassen, ohne ihre anderen Komponenten neu zu schreiben. Dies ist besonders nützlich, wenn Sie eine halbtransparente Variante eines Design-Tokens oder einer benutzerdefinierten Farbe benötigen und diese automatisch von der Originalfarbe ableiten möchten, anstatt einen separaten Wert zu pflegen.

Innerhalb des Alpha-Wert Arguments löst das Komponenten-Schlüsselwort `alpha` den Alphakanal der ursprünglichen Farbe als {{cssxref("&lt;number&gt;")}} im Bereich `[0, 1]` auf. Dadurch können Sie das Output-Alpha relativ zum Input ausdrücken, z.B. indem Sie es mit `calc(alpha * 0.5)` halbieren oder mit `clamp(0.2, alpha, 0.8)` begrenzen.

Im Gegensatz zur allgemeinen [relativen Farbsynchron-Syntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (z.B. `oklch(from ...)`) gibt die `alpha()` Funktion die individuellen Farbkanal-Schlüsselwörter des ursprünglichen Farbraums nicht preis. Sie befasst sich ausschließlich mit dem Alphakanal und behält den Rest der Farbe unverändert.

Der Rückgabewert befindet sich immer im selben Farbraum wie die ursprüngliche Farbe. Wenn die ursprüngliche Farbe beispielsweise eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe ist, wird das Ergebnis ebenfalls in OKLCh aufgelöst, mit der gleichen Helligkeit, Chroma und Farbton.

## Beispiele

### Ersetzen des Alpha einer Farbe

In diesem Beispiel definieren wir zwei Farben. Die zweite Farbe wird durch Übergeben der ersten Farbe in die `alpha()` Funktion definiert, wobei ihr Alphakanal auf einen festen Wert von `80%` gesetzt wird. Die beiden Farben werden als {{cssxref("background-color")}} von zwei {{htmlelement("div")}} Elementen gesetzt, um den Unterschied zu demonstrieren.

```html live-sample___replace-alpha
<div class="box1">Original</div>
<div class="box2">Fixed 80% alpha</div>
```

```css live-sample___replace-alpha
:root {
  --mycolor: oklch(60% 0.25 315 / 0.3);

  /* Same color, but with alpha set to 80% */
  --mycolor-80: alpha(from var(--mycolor) / 80%);
}

.box1 {
  background-color: var(--mycolor);
}

.box2 {
  background-color: var(--mycolor-80);
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

Dieses Beispiel ähnelt dem vorherigen sehr, mit dem Unterschied, dass das Alpha der zweiten Farbe dieses Mal als die Hälfte des Alphas der ersten Farbe berechnet wird, indem das `alpha` Komponenten-Schlüsselwort in einem `calc()` Ausdruck verwendet wird.

```html live-sample___derive-alpha
<div class="box1">Original</div>
<div class="box2">Derived 50% alpha</div>
```

```css live-sample___derive-alpha
:root {
  --mycolor: oklch(60% 0.25 315 / 0.8);

  /* Half the opacity of --mycolor */
  --mycolor-half-opacity: alpha(from var(--mycolor) / calc(alpha * 0.5));
}

.box1 {
  background-color: var(--mycolor);
}

.box2 {
  background-color: var(--mycolor-half-opacity);
}
```

{{EmbedLiveSample("derive-alpha", "100%", 100)}}

### Ausblenden einer Farbe beim Hover

In diesem Beispiel wird die Hintergrundfarbe eines Elements beim {{cssxref(":hover")}} auf `40%` Opazität ausgeblendet, während die Farbe selbst gleich bleibt.

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
    padding: 1rem 0;

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
- [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
