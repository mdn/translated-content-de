---
title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{SeeCompatTable}}

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt einen zufälligen Wert innerhalb eines festgelegten Bereichs und kann optional die möglichen Werte auf Intervallgrößen zwischen diesen Grenzen begrenzen. Sie kann verwendet werden, um einen {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswertes festzulegen.

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(element-shared, 0deg, 360deg);
  width: random(element-shared, 50px, 300px);
  background-color: hsl(random(element-shared, 0, 360) 50% 50%);
  height: random(element-shared, 50px, 300px);
}

@supports not (order: random(1, 2)) {
  body::before {
    content: "Your browser doesn't support the random() function.";
  }
}
```

## Syntax

```css
/* Basic usage */
random(0, 100)
random(10px, 500px)
random(0deg, 360deg)

/* With step interval */
random(0, 100, 10)
random(0rad, 1turn, 30deg)

/* With base value */
random(auto, 0, 360)
random(element-shared, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base element-shared, 100dpi, 300dpi)

/* With base and step values */
random(element-shared, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Parameter

- `<random-value-sharing>` {{optional_inline}}
  - : Bestimmt, welche `random()` Funktionen im Dokument einen gemeinsamen Zufallsbasiswert nutzen und welche unabhängige Werte erhalten.
    Dies kann einer der folgenden Werte sein, oder sowohl ein benutzerdefinierter Schlüssel als auch der Schlüsselbegriff `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält einen eigenen eindeutigen Zufallsbasiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z.B. `--my-random-key`) zur gemeinsamen Nutzung desselben Zufallsbasiswertes über Eigenschaften eines Elements hinweg.
    - `element-shared`
      - : Ein Zufallsbasiswert wird über alle Elemente für dasselbe Attribut, das dieses Schlüsselwort verwendet, geteilt. Dieser Basiswert ist unabhängig von den `random()` Funktionen, die in den Werten anderer Eigenschaften desselben Elements enthalten sind, es sei denn, die zufälligen Funktionen beinhalten auch den gleichen benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1` an, inklusiv, von dem aus der Zufallswert generiert wird.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, kommagetrennte `<number>`, `<dimension>` oder `<percentage>` Werte oder Berechnungen, die sich zu einem dieser Typen auflösen, und die die minimalen und maximalen Werte definieren. Beide Werte müssen zu demselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>` Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`, durch ein Komma getrennt, spezifiziert das Intervall der Schritte. Wenn vorhanden und vom gleichen Datentyp wie die beiden kommagetrennten minimalen und maximalen `<calc-sum>` Werte, definiert dies den Rückgabewert, der der Minimalwert oder in Schritten des Schrittswertes vom Minimalwert bis zum Maximalwert ist.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>`, oder `<percentage>` Wert zwischen den minimalen und maximalen Bereichswerten zurück, inklusiv, im gleichen Typ wie die `<calc-sum>` Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` spezifiziert die minimalen und maximalen Werte und optionale Schrittinkremente, beginnend beim Minimalwert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionalem `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren von Zufallsbasiswerten über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen Minimal-, Maximal- und Schrittwerte müssen vom gleichen Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>` Parametern nicht gleich sein müssen, müssen sie vom gleichen Datentyp sein, z.B. {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufallsbasiswert

Der Zufallsbasiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startzahl, die verwendet wird, um das endgültige Zufallsergebnis zu generieren. Wenn zwei `random()` Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse zusammen in einem vorhersehbaren Muster. Wenn sie unterschiedliche Basiswerte haben, sind ihre Ergebnisse völlig unabhängig voneinander.

Der optionale erste `<random-value-sharing>` Parameter steuert, wie der Zufallsbasiswert geteilt wird. Das Teilen ermöglicht die Wiederverwendung desselben zufällig generierten Werts, eine notwendige Funktion für einige Designeffekte. Der Wert kann so eingestellt werden, dass er `auto`, das Schlüsselwort `element-shared`, ein benutzerdefiniertes {{cssxref("dashed-ident")}}, oder `fixed <number>` verwendet. Das Einbeziehen eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem `element-shared` Schlüsselwort, getrennt durch ein Leerzeichen, ist ebenfalls zulässig.

#### Das `element-shared` Schlüsselwort

Alle `random()` Funktionen mit dem `element-shared` Schlüsselwort teilen denselben Zufallsbasiswert für eine einzelne Eigenschaft über alle Elemente hinweg. Zum Beispiel, wenn Folgendes deklariert wird, werden `.a`, `.b` und `.c` identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig generierten zufälligen Höhe:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` (z.B. `--custom-name`) angeben, teilen alle Stile eines Elements mit demselben Namen denselben Zufallsbasiswert und solche mit unterschiedlichen `<dashed-ident>` Werten zugewiesene unterschiedliche Zufallsbasiswerte. Wenn das Folgende deklariert wird, werden `.a`, `.b`, und `.c` alle Quadrate sein, da innerhalb jedes Elements alle Eigenschaften, die denselben Ident nutzen, denselben Basiswert teilen werden. Daher wird die Breite jedes Elements gleich der Höhe sein. Beachten Sie, dass in diesem Fall `.a`, `.b`, und `.c` unterschiedliche Größen haben werden, da das Basiswertteilen zwischen Eigenschaften eines Elements und nicht zwischen Elementen erfolgt.

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Festlegung beider `<dashed-ident>` und `element-shared`

Kombinieren eines `<dashed-ident>` mit `element-shared` (z.B., `random(--custom-name element-shared, 0, 100)`) teilt den Zufallsbasiswert sowohl über die Elemente als auch über die Eigenschaften, die denselben `<random-value-sharing>` Parameter verwenden. Gegeben das Folgende, werden `.a`, `.b`, und `.c` alle Quadrate von gleicher Größe sein:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder explizit auf `auto` gesetzt wird, wird ein Ident automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann einige unerwartete Zufallsbasiswert-Teilen verursachen.

```css
.foo {
  width: random(100px, 200px);
}
.foo:hover {
  width: random(100px, 200px);
}
.bar {
  margin: random(1px, 100px) random(1px, 100px);
}
.bar:hover {
  margin: random(1px, 100px) random(1px, 100px) random(1px, 100px)
    random(1px, 100px);
}
```

Wenn `<random-value-sharing>` standardmäßig oder explizit auf `auto` gesetzt ist, generiert der Benutzeragent einen Seed-Namen oder _generated value sharing identifier_ nach konsistenten Regeln basierend auf Eigenschaftsnamen und Reihenfolge. Dadurch können `random()` Funktionen den gleichen Seed-Namen und daher den gleichen Zufallsbasiswert haben. In diesem Beispiel ist der generierte Wert-Teilen-Identifikator für die `random()` Funktion im `width` Eigenschaftswert der gleiche für `.foo` wie für `.foo:hover`, sodass der Wert zwischen den Zuständen nicht ändert. Ebenso haben die ersten zwei `random()` Funktionen in beiden `margin` Deklarationen denselben generierten Wert-Teilen-Identifikator, was bedeutet, dass die ersten beiden Werte im `margin` Shorthand sich nicht ändern, wenn darüber gefahren wird; beim Hovern werden `bar`'s obere und rechte Ränder gleich bleiben, aber die unteren und linken Ränder erhalten unabhängige zufällige Werte. Um für jede `random()` Funktion einen unabhängigen Wert zu erhalten, geben Sie einen eindeutigen {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()` Funktion, wenn sie in einem benutzerdefinierten Eigenschaftswert enthalten ist, eine Funktion; sie verhält sich wie ein Textersetzungsmechanismus und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel speichert die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig generierte Ergebnis. Wenn `var(--random-size)` geparst wird, wird es effektiv durch `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()` Funktionsaufruf mit einem eigenen Basiswert abhängig vom Kontext, in dem es verwendet wird, erzeugt.

Dies ist nicht der Fall bei der Verwendung von `random()` beim Registrieren einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}}. Registrierte benutzerdefinierte Eigenschaften berechnen zufällige Werte und speichern sie.

In diesem Beispiel, da `--defaultSize` registriert ist, werden `.a`, `.b`, und `.c` Quadrate von gleicher Größe sein, aber ihre Farben werden zufällig sein, da `--random-angle` nicht registriert wurde:

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --random-angle: random(0deg, 360deg);
}
.a,
.b,
.c {
  background-color: hsl(var(--random-angle) 100% 50%);
  height: var(--defaultSize);
  width: var(--defaultSize);
}
```

## Barrierefreiheit

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie keine vollständige Kontrolle darüber, was Sie erhalten. Dies kann zu nicht zugänglichen Ergebnissen führen. Wenn Sie beispielsweise `random()` verwenden, um Textfarbe zu generieren, können Sie mit einem Wert enden, der einen geringen Kontrast zu seinem Hintergrund hat. Es ist wichtig, den Kontext zu berücksichtigen, in dem `random()` verwendet wird, um sicherzustellen, dass Ihre Ergebnisse stets zugänglich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel werden wir zufällige Farben für einige runde Abzeichen generieren, um die grundlegende Verwendung der `random()` Funktion zu demonstrieren.

#### HTML

Wir fügen fünf Abzeichen hinzu, eines mit der `desaturated` Klasse und zwei mit der `unique` Klasse.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()` Funktion innerhalb einer {{cssxref("color_value/hsl()")}} Farb-Funktion, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den Zufallsbasiswert zwischen dem Standard-Abzeichen und dem `desaturated` Abzeichen zu teilen, sodass es eine weniger gesättigte Version desselben {{cssxref("hue")}} ist. Wir überschreiben dann die `unique` Abzeichen, um einen wirklich zufälligen `hue` zu haben, indem wir das Basiswert-Teilen-Parameter auf `auto` basieren lassen.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(element-shared, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(element-shared, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(0, 360) 50% 50%);
}

@supports not (order: random(1, 2)) {
  :root::after {
    content: "Your browser doesn't support the random() function.";
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Zufälliges Wert-Teilen zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternklaren Hintergrund, um die Nutzung eines `<dashed-ident>` zu demonstrieren, um einen Seed-Wert zwischen Eigenschaften eines Elements zu teilen.

#### HTML

Wir fügen fünf Partikel hinzu, alle mit demselben Klassennamen.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Jedes Partikel hat dieselben Stile. Wir verwenden die `random()` Funktion für die {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}} Werte, um jede Partikel zufällig zu dimensionieren und zu positionieren. Wir verwenden ein `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängig voneinander innerhalb eines festgelegten Bereichs sind, aber die `height` jedes Partikels wird die gleiche wie die `width` sein. Wir erlauben es dem Basiswert, sich auf `auto` bei den `top` und `left` Eigenschaften aufzulösen, damit der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size, 0.25em, 1em);
  height: random(--particle-size, 0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
  animation: move 1s alternate-reverse infinite;
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    color: white;
    content: "Your browser doesn't support the random() function.";
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Random value sharing between properties', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- [CSS-Einheiten und -Werte](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) über webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) über CSS-Tricks.com
