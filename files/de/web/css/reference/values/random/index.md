---
title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 84384e0029a4ba7b4646d2d1c989e0865ac8d9e1
---

{{SeeCompatTable}}

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) generiert einen zufälligen Wert innerhalb eines angegebenen Bereichs, wobei optional die möglichen Werte auf Schrittgrößen-Intervalle zwischen diesen Grenzen beschränkt werden können. Sie kann verwendet werden, wenn ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswerts angegeben wird.

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
  - : Steuert, welche `random()`-Funktionen im Dokument einen gemeinsamen zufälligen Basiswert teilen und welche unterschiedliche Werte erhalten.
    Dies kann einer der folgenden Werte sein oder ein benutzerdefinierter Schlüssel zusammen mit dem Schlüsselbegriff `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält ihren eigenen einzigartigen zufälligen Basiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z. B. `--my-random-key`) zur gemeinsamen Nutzung desselben zufälligen Basiswerts über die Eigenschaften eines Elements hinweg.
    - `element-shared`
      - : Ein zufälliger Basiswert wird über alle Elemente für dieselbe Eigenschaft, die diesen Schlüsselbegriff verwenden, geteilt. Dieser Basiswert ist unabhängig von den `random()`-Funktionen, die in den Werten anderer Eigenschaften auf demselben Element enthalten sind, es sei denn, die zufälligen Funktionen enthalten auch denselben benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1`, einschließlich, für den zu generierenden zufälligen Wert an.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, kommagetrennte `<number>`, `<dimension>`, oder `<percentage>` Werte oder Berechnungen, die zu einem dieser Typen aufgelöst werden, die die minimalen und maximalen Werte definieren. Beide Werte müssen auf denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>` Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`, dem ein Komma vorausgeht, gibt das Schrittintervall an. Wenn vorhanden und vom gleichen Datentyp wie die beiden kommagetrennten minimalen und maximalen `<calc-sum>` Werte, definiert es den Rückgabewert, der der Mindestwert oder in Schritten des Schrittwertes ab dem Mindestwert bis zum Höchstwert ist.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>`, oder `<percentage>` zwischen den minimalen und maximalen Bereichswerten zurück, und zwar im gleichen Typ wie die `<calc-sum>` Parameter.

## Beschreibung

Die `random(SEED, MIN, MAX, STEP)` Funktion spezifiziert die minimalen und maximalen Werte und optionale Schrittinkremente, beginnend beim Minimalwert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optional `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren von zufälligen Basiswerten über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen Minimal-, Maximal- und Schrittwerte müssen vom gleichen Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>` Parametern nicht gleich sein müssen, müssen sie vom gleichen Datentyp, wie {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, sein, um gültig zu sein.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startzahl, die zur Generierung des endgültigen zufälligen Ergebnisses verwendet wird. Wenn zwei `random()`-Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse zusammen in einem vorhersehbaren Muster. Haben sie unterschiedliche Basiswerte, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>` Parameter steuert, wie der zufällige Basiswert geteilt wird. Das Teilen ermöglicht die Wiederverwendung desselben zufällig generierten Werts, eine Notwendigkeit für einige Design-Effekte. Der Wert kann auf `auto`, das `element-shared` Schlüsselwort, ein benutzerdefiniertes {{cssxref("dashed-ident")}}, oder `fixed <number>` gesetzt werden. Das Einfügen eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem `element-shared` Schlüsselwort, getrennt durch ein Leerzeichen, ist ebenfalls gültig.

#### Das `element-shared` Schlüsselwort

Alle `random()`-Funktionen mit dem `element-shared` Schlüsselwort teilen denselben zufälligen Basiswert für eine einzelne Eigenschaft über alle Elemente hinweg. Wenn zum Beispiel folgendes deklariert wird, werden A, B und C identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig erzeugten zufälligen Höhe:

```css
A,
B,
C {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` angeben (z.B. `--custom-name`), teilt jedes Element in den Stilen eines Elements mit demselben Namen denselben zufälligen Basiswert, und solche mit unterschiedlichen `<dashed-ident>` Werten erhalten unterschiedliche zufällige Basiswerte. Wenn folgendes deklariert wird, werden A, B und C alle Quadrate sein, da innerhalb jedes Elements alle Eigenschaften, die sich auf dasselbe ident beziehen, denselben Basiswert teilen. Deshalb wird die Breite jeder der Höhe entsprechen. Beachten Sie jedoch, dass in diesem Fall A, B und C unterschiedliche Größen haben werden, da das Teilen des Basiswerts zwischen Eigenschaften eines Elements, nicht zwischen Elementen erfolgt.

```css
A,
B,
C {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Festlegen von sowohl `<dashed-ident>` als auch `element-shared`

Die Kombination eines `<dashed-ident>` mit `element-shared` (z.B. `random(--custom-name element-shared, 0, 100)`) teilt den zufälligen Basiswert sowohl über die Elemente als auch über die Eigenschaften, die denselben `<random-value-sharing>` Parameter verwenden. Bei folgendem werden A, B und C Quadrate derselben Größe sein:

```css
A,
B,
C {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder explizit auf `auto` gesetzt wird, wird ein Identifikator automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann zu unerwartetem Teilen des zufälligen Basiswerts führen.

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

Wenn der `<random-value-sharing>` Standardwert oder explizit auf `auto` gesetzt wird, generiert der Nutzeragent einen Seed-Namen oder einen _generated value sharing identifier_, basierend auf konsistenten Regeln in Bezug auf den Eigenschaftsnamen und die Reihenfolge. Aus diesem Grund können `random()`-Funktionen mit demselben Seed-Namen und daher demselben zufälligen Basiswert enden. In diesem Beispiel ist der generierte Value Sharing Identifier für die `random()`-Funktion im `width` Eigenschaftswert derselbe für `.foo` wie für `.foo:hover`, sodass sich der Wert zwischen den Zuständen nicht ändert. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen denselben generierten Value Sharing Identifier, was bedeutet, dass die ersten beiden Werte in der `margin`-Kurzform unverändert bleiben, wenn sie schwebt; beim Schweben bleiben die oberen und rechten Ränder von `bar` gleich, aber die unteren und linken Ränder erhalten unabhängige zufällige Werte. Um einen unabhängigen Wert für jede `random()`-Funktion zu erhalten, geben Sie ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt bei der Einbeziehung einer `random()`-Funktion in einen benutzerdefinierten Eigenschaftswert der Wert eine Funktion; verhält sich wie ein Textersetzungsmechanismus und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel "speichert" die `--random-size` benutzerdefinierte Eigenschaft das zufällig generierte Ergebnis nicht. Wenn `var(--random-size)` geparst wird, wird es effektiv durch `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()`-Funktionsaufruf mit eigenem Basiswert je nach Kontext, in dem sie verwendet wird, erstellt.

Dies ist nicht der Fall bei der Verwendung von `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}}. Registrierte benutzerdefinierte Eigenschaften berechnen zufällige Werte und speichern sie.

In diesem Beispiel, da `--defaultSize` registriert ist, werden A, B und C Quadrate gleicher Größe sein, aber ihre Farben werden zufällig sein, da `--random-angle` nicht registriert wurde:

```css
@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --random-angle: random(0deg, 360deg);
}
A,
B,
C {
  background-color: hsl(var(--random-angle) 100% 50%);
  height: var(--defaultSize);
  width: var(--defaultSize);
}
```

## Barrierefreiheit

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie nicht die volle Kontrolle darüber, was Sie erhalten. Dies kann zu nicht zugänglichen Ergebnissen führen. Wenn Sie beispielsweise `random()` verwenden, um eine Textfarbe zu generieren, könnten Sie am Ende mit einem Wert, der einen niedrigen Kontrast zu seinem Hintergrund hat, da stehen. Es ist wichtig, den Kontext, in dem `random()` verwendet wird, sorgfältig zu berücksichtigen, um sicherzustellen, dass Ihre Ergebnisse immer zugänglich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel werden wir zufällige Farben für einige kreisförmige Plaketten erzeugen, um die grundlegende Verwendung der `random()` Funktion zu demonstrieren.

#### HTML

Wir fügen fünf Plaketten ein, eine mit der `desaturated` Klasse und zwei mit der `unique` Klasse.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Plaketten als Kreise. Wir verwenden die `random()` Funktion innerhalb einer {{cssxref("hsl()")}} Farb-Funktion, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den zufälligen Basiswert zwischen der Standard-`badge` und der `desaturated` zu teilen, sodass es sich um eine weniger gesättigte Version desselben {{cssxref("hue")}} handelt. Wir überschreiben dann die `unique` Plaketten, um einen wirklich zufälligen `hue` zu haben, indem wir den Basiswert-Teilungsparameter standardmäßig auf `auto` lassen.

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

### Zufällige Wertteilung zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenklaren Hintergrund, um die Verwendung eines `<dashed-ident>` zur gemeinsamen Nutzung eines Seed-Werts zwischen den Eigenschaften eines Elements zu demonstrieren.

#### HTML

Wir fügen fünf Partikel ein, die alle denselben Klassennamen teilen.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Jedes Teilchen hat dieselben Stile. Wir verwenden die `random()` Funktion für die {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}} Werte, um jedes Teilchen zufällig zu dimensionieren und zu positionieren. Wir verwenden ein `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Teilchen unabhängig voneinander ist, innerhalb eines festgelegten Bereichs, aber die `height` jedes Teilchens die gleiche wie die `width` sein wird. Wir erlauben dem Basiswert, sich zu `auto` für die `top` und `left` Eigenschaften aufzulösen, sodass der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

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
- [`Math.random()`](/de/docs/Web/API/Math/random)
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) über webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) über CSS-Tricks.com
