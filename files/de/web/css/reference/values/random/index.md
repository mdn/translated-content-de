---
title: "`random()` CSS-Funktion"
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) generiert einen zufälligen Wert innerhalb eines festgelegten Bereichs und kann optional die möglichen Werte auf Schrittgrößen zwischen diesen Grenzen beschränken. Sie kann verwendet werden, wenn Sie ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswerts angeben.

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
  - : Bestimmt, welche `random()`-Funktionen im Dokument einen zufälligen Basiswert teilen und welche unterschiedliche Werte erhalten.
    Dies kann einer der folgenden Werte sein, oder sowohl ein benutzerdefinierter Schlüssel als auch der Begriff `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält ihren eigenen einzigartigen zufälligen Basiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z. B. `--my-random-key`) zum Teilen desselben zufälligen Basiswerts über die Eigenschaften eines Elements.
    - `element-shared`
      - : Ein zufälliger Basiswert wird über alle Elemente für dasselbe Eigenschaft, die diesen Schlüsselbegriff verwenden, geteilt. Dieser Basiswert ist unabhängig von den `random()`-Funktionen, die in den Werten anderer Eigenschaften auf demselben Element enthalten sind, es sei denn, die zufälligen Funktionen beinhalten denselben benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1`, einschließlich, an, von dem der zufällige Wert generiert werden soll.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, kommagetrennte `<number>`, `<dimension>`, oder `<percentage>` Werte oder Berechnungen, die zu einem dieser Typen aufgelöst werden und die minimalen bzw. maximalen Werte definieren. Beide Werte müssen auf denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`, der durch ein Komma vorangestellt wird, gibt das Intervall der Schritte an. Wenn vorhanden und vom gleichen Datentyp wie die beiden kommagetrennten minimalen und maximalen `<calc-sum>`-Werte, definiert er den Rückgabewert als minimaler Wert oder in Schritten des Schrittwertes vom minimalen Wert bis zum maximalen Wert.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>`, oder `<percentage>` zwischen den minimalen und maximalen Bereichswerten, einschließlich, im gleichen Typ wie die `<calc-sum>`-Parameter zurück.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` spezifiziert die minimalen und maximalen Werte und optionale Schrittinkremente, beginnend mit dem minimalen Wert. Die Funktion erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optional `<random-value-sharing>`](#random-value-sharing)-Parameter, ermöglicht das Teilen oder Variieren von zufälligen Basiswerten über verschiedene Eigenschaften und Elemente.

Die angegebenen minimalen, maximalen und Schrittwerte müssen vom gleichen Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>`-Parametern nicht gleich sein müssen, müssen sie vom gleichen Datentyp sein, wie z.B. {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startzahl, die zur Erzeugung des endgültigen zufälligen Ergebnisses verwendet wird. Wenn zwei `random()`-Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse zusammen in einem vorhersehbaren Muster. Wenn sie unterschiedliche Basiswerte haben, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>`-Parameter steuert, wie der zufällige Basiswert geteilt wird. Teilen ermöglicht das Wiederverwenden desselben zufällig generierten Wertes, was für einige Design-Effekte notwendig ist. Der Wert kann so festgelegt werden, dass `auto`, das Schlüsselwort `element-shared`, ein benutzerdefiniertes {{cssxref("dashed-ident")}}, oder `fixed <number>` verwendet wird. Die Verwendung eines benutzerdefinierten {{cssxref("dashed-ident")}} zusammen mit dem `element-shared` Schlüsselwort, durch Leerzeichen getrennt, ist ebenfalls gültig.

#### Das `element-shared` Schlüsselwort

Alle `random()`-Funktionen mit dem `element-shared` Schlüsselwort teilen denselben zufälligen Basiswert für eine einzelne Eigenschaft über alle Elemente. Wenn z.B. das Folgende deklariert wird, werden `.a`, `.b` und `.c` identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig generierten zufälligen Höhe:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` angeben (z.B. `--custom-name`), teilt jedes Element in den Stilen eines Elements mit demselben Namen denselben zufälligen Basiswert, und solche mit unterschiedlichen `<dashed-ident>`-Werten erhalten unterschiedliche zufällige Basiswerte. Wenn das Folgende deklariert wird, werden `.a`, `.b` und `.c` alle Quadrate sein, denn innerhalb jedes Elements teilen alle Eigenschaften, die dasselbe Ident referenzieren, denselben Basiswert. Deshalb wird die Breite jedes Elements dieselbe sein wie seine Höhe. Beachten Sie, dass in diesem Fall `.a`, `.b` und `.c` unterschiedliche Größen haben werden, weil das Teilen des Basiswerts zwischen den Eigenschaften eines Elements und nicht zwischen den Elementen erfolgt.

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Festlegen sowohl von `<dashed-ident>` als auch `element-shared`

Das Kombinieren eines `<dashed-ident>` mit `element-shared` (z.B. `random(--custom-name element-shared, 0, 100)`) teilt den zufälligen Basiswert sowohl über die Elemente als auch die Eigenschaften, die denselben `<random-value-sharing>`-Parameter verwenden. Angesichts des Folgenden werden `.a`, `.b` und `.c` alle Quadrate derselben Größe sein:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen wird, oder explizit auf `auto` gesetzt wird, wird ein Ident automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann zu unerwartetem Teilen des zufälligen Basiswerts führen.

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

Wenn das `<random-value-sharing>` standardmäßig oder explizit auf `auto` gesetzt wird, generiert der Benutzeragent einen Seed-Namen oder _Generated Value Sharing Identifier_ nach konsistenten Regeln basierend auf dem Eigenschaftsnamen und der Reihenfolge. Aufgrund dessen können `random()`-Funktionen denselben Seed-Namen haben und daher denselben zufälligen Basiswert. In diesem Beispiel ist der generierte Value Sharing Identifier für die `random()`-Funktion im `width` Eigenschaftswert für `.foo` der gleiche wie für `.foo:hover`, sodass der Wert sich nicht zwischen den Zuständen ändern wird. Ebenso haben die ersten zwei `random()`-Funktionen in beiden `margin` Deklarationen denselben generierten Value Sharing Identifier, was bedeutet, dass die ersten zwei Werte in der `margin`-Kurzform unverändert bleiben, wenn gehove, also ändern sich die oberen und rechten Abstände von `bar` nicht, aber die unteren und linken Abstände erhalten unabhängige zufällige Werte. Um einen unabhängigen Wert für jede `random()`-Funktion zu erhalten, geben Sie einen eindeutigen {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()`-Funktion innerhalb eines benutzerdefinierten Eigenschaftswerts eine Funktion; sie verhält sich wie ein Textersetzungsmechanismus und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel "speichert" die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig generierte Ergebnis. Wenn `var(--random-size)` geparst wird, wird es effektiv mit `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()`-Funktionsaufruf mit ihrem eigenen Basiswert erzeugt, abhängig vom Kontext, in dem sie verwendet wird.

Dies ist nicht der Fall bei der Verwendung von `random()`, wenn eine benutzerdefinierte Eigenschaft mit {{cssxref("@property")}} registriert wird. Registrierte benutzerdefinierte Eigenschaften berechnen zufällige Werte und speichern sie.

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

## Zugänglichkeit

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie keine volle Kontrolle darüber, was Sie erhalten. Dies kann zu unzugänglichen Ergebnissen führen. Wenn Sie beispielsweise `random()` verwenden, um eine Textfarbe zu generieren, könnten Sie am Ende einen Wert erhalten, der einen geringen Kontrast zum Hintergrund hat. Es ist wichtig, sich des Kontexts bewusst zu sein, in dem `random()` verwendet wird, und sicherzustellen, dass Ihre Ergebnisse immer zugänglich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel werden wir zufällige Farben für einige kreisförmige Abzeichen generieren, um die grundlegende Verwendung der `random()`-Funktion zu demonstrieren.

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

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()`-Funktion innerhalb einer {{cssxref("color_value/hsl()")}} Farbwert-Funktion, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den zufälligen Basiswert zwischen dem Standard `badge` und dem `desaturated`-Abzeichen zu teilen, sodass es eine weniger gesättigte Version desselben {{cssxref("hue")}} ist. Dann überschreiben wir die `unique`-Abzeichen, um einen wirklich zufälligen `hue` zu haben, indem wir den Basiswert-Teilungsparameter auf `auto` lassen.

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

### Teilen zufälliger Werte zwischen Eigenschaften

In diesem Beispiel erstellen wir einen Sternenhintergrund, um zu demonstrieren, wie ein `<dashed-ident>` verwendet wird, um einen Seed-Wert zwischen Eigenschaften eines Elements zu teilen.

#### HTML

Wir fügen fünf Partikel hinzu, alle mit demselben Klassennamen geteilt.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Jedes Partikel hat dieselben Stile. Wir verwenden die `random()`-Funktion für die {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}} Werte, um jedes Partikel zufällig zu größen und zu positionieren. Wir verwenden ein `<dashed-ident>` als den Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängig voneinander ist, innerhalb eines festgelegten Bereichs, aber die `height` jedes Partikels wird dieselbe sein wie seine `width`. Wir erlauben, dass der Basiswert sich auf `auto` für die `top` und `left` Eigenschaften auflöst, sodass der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

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
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) via webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) via CSS-Tricks.com
