---
title: "`alpha()` CSS-Funktion"
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: 77ee105b32c153b8822321ce54462134d4767c50
---

Die **`alpha()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) nimmt eine Ursprungs-{{cssxref("color_value","color")}} und gibt diese Farbe mit einem geänderten Alpha (Transparenz)-Kanal zurück. Die Farbkomponenten der Ursprungsfarbe bleiben unverändert. Das Ergebnis befindet sich im gleichen Farbraum wie die Ursprungsfarbe.

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
  - : Das [relative color](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) Syntax-Schlüsselwort `from` gefolgt von einem gültigen {{cssxref("&lt;color&gt;")}} Wert, der die **Ursprungsfarbe** definiert. Die Farbkomponenten der Ursprungsfarbe werden unverändert in das Ergebnis übernommen; nur der Alphakanal wird beeinflusst.

- `/ <alpha-value>`
  - : Ein {{cssxref("&lt;alpha-value&gt;")}}, das das Alpha der Ausgabefarbe spezifiziert. Dies kann eine `<number>` zwischen `0` und `1`, ein `<percentage>` zwischen `0%` und `100%`, oder ein {{cssxref("calc()")}} Ausdruck sein. Innerhalb dieses Werts kann das Schlüsselwort **`alpha`** verwendet werden, um auf den Alphakanal der Ursprungsfarbe als `<number>` zu verweisen (wobei `1.0` äquivalent zu `100%` ist).

### Rückgabewert

Ein Farbwert im gleichen Farbraum wie die Ursprungsfarbe, mit identischen Farbkomponenten und einem geänderten Alphakanalwert gemäß der Spezifikation.

## Beschreibung

Die `alpha()` Funktion ist eine [relative color](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) Funktion, die Ihnen ermöglicht, die Transparenz jeder Farbe anzupassen, ohne ihre anderen Komponenten neu zu schreiben. Dies ist besonders nützlich, wenn Sie eine halbtransparente Variante eines Design-Tokens oder einer benutzerdefinierten Eigenschaftsfarbe benötigen und diese automatisch aus dem Original ableiten möchten, anstatt einen separaten Wert zu verwalten.

Innerhalb des Alphawertarguments löst das Komponenten-Schlüsselwort `alpha` sich zum Alphakanal der Ursprungsfarbe als {{cssxref("&lt;number&gt;")}} im Bereich `[0, 1]` auf. Dies ermöglicht es Ihnen, das Ausgabe-Alpha relativ zum Eingabewert auszudrücken, z.B. indem Sie es mit `calc(alpha * 0.5)` halbieren oder mit `clamp(0.2, alpha, 0.8)` abklemmen.

Im Gegensatz zur allgemeinen [relative color syntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (z.B. `oklch(from ...)`) zeigt die `alpha()` Funktion nicht die individuellen Farbkanal-Schlüsselwörter des Ursprungsfarbraums. Sie bezieht sich ausschließlich auf den Alphakanal und lässt den Rest der Farbe unberührt.

Der Rückgabewert befindet sich immer im selben Farbraum wie die Ursprungsfarbe. Zum Beispiel, wenn die Ursprungsfarbe eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe ist, wird das Ergebnis auch in OKLCh aufgelöst, mit derselben Helligkeit, Chroma und Farbton.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Das Alpha einer Farbe ersetzen

In diesem Beispiel spezifizieren wir zwei Farben. Die zweite Farbe wird definiert, indem die erste Farbe in die `alpha()` Funktion übergeben wird, wobei ihr Alphakanal auf einen festen Wert von `80%` gesetzt wird. Die beiden Farben werden als {{cssxref("background-color")}} von zwei {{htmlelement("div")}} Elementen gesetzt, um den Unterschied zu demonstrieren.

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

Dieses Beispiel ist dem vorhergehenden sehr ähnlich, es sei denn, dass dieses Mal das Alpha der zweiten Farbe als die Hälfte des Alphas der ersten Farbe berechnet wird, unter Verwendung des `alpha` Komponentenschlüsselworts innerhalb eines `calc()` Ausdrucks.

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

### Eine Farbe beim Hover verblassen lassen

In diesem Beispiel verblasst der Hintergrund eines Elements auf `40%` Opazität bei {{cssxref(":hover")}}, während die Farbe selbst gleich bleibt.

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
- [Relative color syntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS colors](/de/docs/Web/CSS/Guides/Colors) Modul
- [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
