---
title: "`alpha()` CSS-Funktion"
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`alpha()`** [CSS](/de/docs/Web/CSS) [Function](/de/docs/Web/CSS/Reference/Values/Functions) nimmt einen ursprünglichen {{cssxref("color_value","Farbwert")}} und gibt dieselbe Farbe mit einem modifizierten Alpha-(Transparenz-)Kanal zurück. Die Farbkomponenten der ursprünglichen Farbe bleiben unverändert. Das Ergebnis befindet sich im selben Farbraum wie die ursprüngliche Farbe.

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
  - : Das [relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)-Schlüsselwort `from`, gefolgt von einem gültigen {{cssxref("&lt;color&gt;")}}-Wert, der die **ursprüngliche Farbe** definiert. Die Farbkomponenten der ursprünglichen Farbe werden unverändert in das Ergebnis übernommen; nur der Alpha-Kanal wird beeinflusst.

- `/ <alpha-value>` {{optional_inline}}
  - : Ein {{cssxref("&lt;alpha-value&gt;")}}, das die Alpha des Ausgabe-Farbtons spezifiziert. Dies kann eine `<number>` zwischen `0` und `1`, ein `<percentage>` zwischen `0%` und `100%` oder ein {{cssxref("calc()")}}-Ausdruck sein. Innerhalb dieses Werts kann das Schlüsselwort **`alpha`** verwendet werden, um auf den Alpha-Kanal der ursprünglichen Farbe als `<number>` zu verweisen (wobei `1.0` `100%` entspricht). Wenn dieses Argument weggelassen wird, wird die Alpha der ursprünglichen Farbe unverändert verwendet.

### Rückgabewert

Ein Farbwert im selben Farbraum wie die ursprüngliche Farbe, mit identischen Farbkomponenten und einem modifizierten Alpha-Kanalwert, wie angegeben.

## Beschreibung

Die `alpha()`-Funktion ist eine [relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)-Funktion, die es Ihnen ermöglicht, die Transparenz einer Farbe anzupassen, ohne ihre anderen Komponenten neu zu schreiben. Dies ist besonders nützlich, wenn Sie eine halbtransparente Variante eines Designtokens oder einer benutzerdefinierten Eigenschaftsfarbe benötigen und die Farbe automatisch aus dem Original ableiten möchten, anstatt einen separaten Wert zu pflegen.

Innerhalb des Alpha-Wert-Arguments wird das Komponentenschlüsselwort `alpha` auf den Alpha-Kanal der ursprünglichen Farbe als {{cssxref("&lt;number&gt;")}} im Bereich `[0, 1]` aufgelöst. Dies ermöglicht es Ihnen, die Ausgabetransparenz relativ zur Eingabe auszudrücken, zum Beispiel, indem Sie es mit `calc(alpha * 0.5)` halbieren oder mit `clamp(0.2, alpha, 0.8)` clampen.

Im Gegensatz zur allgemeinen [relativen Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) (z. B. `oklch(from ...)`) gibt die `alpha()`-Funktion die einzelnen Farbkanal-Schlüsselwörter des ursprünglichen Farbraums nicht preis. Sie befasst sich ausschließlich mit dem Alpha-Kanal und hält den Rest der Farbe intakt.

Der Rückgabewert befindet sich immer im selben Farbraum wie die ursprüngliche Farbe. Zum Beispiel, wenn die ursprüngliche Farbe eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe ist, wird das Ergebnis ebenfalls in OKLCh aufgelöst, mit der gleichen Helligkeit, Chroma und dem gleichen Farbton.

## Beispiele

### Ersetzen des Alpha-Wertes einer Farbe

In diesem Beispiel spezifizieren wir zwei Farben. Die zweite Farbe wird definiert, indem die erste Farbe in die `alpha()`-Funktion übergeben und ihr Alpha-Kanal auf einen festen Wert von `80%` gesetzt wird. Die beiden Farben werden als {{cssxref("background-color")}} von zwei {{htmlelement("div")}}-Elementen gesetzt, um den Unterschied zu demonstrieren.

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

Dieses Beispiel ist dem vorhergehenden sehr ähnlich, außer dass dieses Mal die Alpha der zweiten Farbe als die Hälfte der Alpha der ersten Farbe berechnet wird, wobei das `alpha`-Komponentenschlüsselwort in einem `calc()`-Ausdruck verwendet wird.

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

### Ausblenden einer Farbe bei Hover

In diesem Beispiel verblasst die Hintergrundfarbe eines Elements bei {{cssxref(":hover")}} auf `40%` Deckkraft, während die Farbe selbst gleich bleibt.

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

- Datentyp {{cssxref("&lt;color&gt;")}}
- Datentyp {{cssxref("&lt;alpha-value&gt;")}}
- [Relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
