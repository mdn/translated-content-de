---
title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: c8522f47d8123fe529f39851b13b9fc01345ffbf
---

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt einen zufälligen Wert innerhalb eines festgelegten Bereichs und begrenzt optional die möglichen Werte auf Intervallgrößen zwischen diesen Grenzen.

Die `random()`-Funktion kann verwendet werden, wenn ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswerts angegeben wird.

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
  - : Bestimmt, welche `random()`-Funktionen im Dokument denselben zufälligen Basiswert verwenden und welche unterschiedliche Werte erhalten. Dies kann einer der folgenden Werte sein, oder sowohl ein benutzerdefinierter Schlüssel als auch der Begriff `element-shared`, durch ein Leerzeichen getrennt:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält ihren eigenen einzigartigen zufälligen Basiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z. B. `--my-random-key`) zur gemeinsamen Nutzung des gleichen zufälligen Basiswerts über die Eigenschaften eines Elements hinweg.
    - `element-shared`
      - : Ein zufälliger Basiswert wird über alle Elemente für dieselbe Eigenschaft geteilt, die diesen Schlüsselbegriff verwenden. Dieser Basiswert ist unabhängig von den `random()`-Funktionen, die in den Werten anderer Eigenschaften desselben Elements enthalten sind, sofern die Zufallsfunktionen nicht denselben benutzerdefinierten Schlüssel enthalten.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1`, einschließlich, für den zu generierenden Zufallswert an.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, kommagetrennte `<number>`, `<dimension>`, oder `<percentage>`-Werte oder Berechnungen, die zu einem dieser Typen führen, und die minimalen und maximalen Werte definieren. Beide Werte müssen auf denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) aufgelöst werden können. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`, gefolgt von einem Komma, gibt das Schrittintervall an. Wenn vorhanden und vom selben Datentyp wie die beiden kommagetrennten minimalen und maximalen `<calc-sum>`-Werte, definiert es den Rückgabewert als minimalen Wert oder in Schritten des Schrittwerts vom minimalen Wert, bis zum maximalen Wert.

### Rückgabewert

Gibt eine zufällige `<number>`, `<dimension>` oder `<percentage>` zwischen den minimalen und maximalen Bereichswerten, einschließlich, im gleichen Typ wie die `<calc-sum>`-Parameter zurück.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` legt die minimalen und maximalen Werte und optionale Schrittinkremente fest, beginnend beim minimalen Wert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren der zufälligen Basiswerte über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen minimalen, maximalen und Schrittwerte müssen vom selben Datentyp sein, damit die Funktion gültig ist. Während die Einheiten der zwei bis drei `<calc-sum>`-Parameter nicht gleich sein müssen, müssen sie vom selben Datentyp sein, wie {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startzahl, die verwendet wird, um das endgültige zufällige Ergebnis zu generieren. Wenn zwei `random()`-Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse in einem vorhersehbaren Muster gemeinsam. Wenn sie unterschiedliche Basiswerte haben, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>`-Parameter steuert, wie der zufällige Basiswert geteilt wird. Teilen ermöglicht die Wiederverwendung desselben zufällig generierten Werts, was für einige Design-Effekte notwendig ist. Der Wert kann so eingestellt werden, dass er `auto`, das Schlüsselwort `element-shared`, einen benutzerdefinierten {{cssxref("dashed-ident")}}, oder `fixed <number>` verwendet. Auch das Hinzufügen eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem Schlüsselwort `element-shared`, durch ein Leerzeichen getrennt, ist gültig.

#### Das Schlüsselwort `element-shared`

Alle `random()`-Funktionen mit dem Schlüsselwort `element-shared` teilen denselben zufälligen Basiswert für eine einzelne Eigenschaft über alle Elemente. Wenn beispielsweise Folgendes deklariert ist, werden A, B und C identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig generierten zufälligen Höhe:

```css
A,
B,
C {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie einen `<dashed-ident>` (z. B. `--custom-name`) angeben, teilen alle Elemente in den Stilen eines Elements mit demselben Namen denselben zufälligen Basiswert, und solche mit unterschiedlichen `<dashed-ident>`-Werten erhalten unterschiedliche zufällige Basiswerte. Wenn Folgendes deklariert ist, werden A, B und C alle Quadrate sein, denn innerhalb jedes Elements teilen alle Eigenschaften, die denselben Ident-Referenzieren, denselben Basiswert. Daher wird die Breite von jedem so groß wie seine Höhe sein. Beachten Sie, dass in diesem Fall A, B und C unterschiedliche Größen haben werden, da das Teilen von Basiswerten zwischen Eigenschaften eines Elements und nicht zwischen Elementen erfolgt.

```css
A,
B,
C {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Beides `<dashed-ident>` und `element-shared` festlegen

Die Kombination eines `<dashed-ident>` mit `element-shared` (z. B. `random(--custom-name element-shared, 0, 100)`) teilt den zufälligen Basiswert sowohl über die Elemente als auch über die Eigenschaften, die denselben `<random-value-sharing>` Parameter verwenden. Unter Berücksichtigung des Folgenden werden A, B und C alle Quadrate derselben Größe sein:

```css
A,
B,
C {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen wird oder ausdrücklich auf `auto` eingestellt wird, wird ein Ident automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann zu unerwartetem Teilen von zufälligen Basiswerten führen.

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

Wenn die Standardeinstellung von `<random-value-sharing>` oder ausdrücklich auf `auto` gesetzt ist, generiert der Benutzeragent automatisch einen Seed-Namen oder einen _generated value sharing identifier_, nach konsistenten Regeln basierend auf Eigenschaftsnamen und Reihenfolge. Dadurch können `random()`-Funktionen denselben Seed-Namen und somit denselben zufälligen Basiswert erhalten. In diesem Beispiel ist der generierte Wert-Teiler-Identifikator für die `random()`-Funktion im `width`-Eigenschaftswert derselbe für `.foo` wie für `.foo:hover`, sodass sich der Wert zwischen den Zuständen nicht ändert. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen denselben generierten Wert-Teiler-Identifikator, was bedeutet, dass sich die ersten beiden Werte in der `margin`-Kurzform bei Hover nicht ändern werden; beim Überfahren bleiben die oberen und rechten Ränder von `bar` gleich, aber die unteren und linken Ränder erhalten unabhängige zufällige Werte. Um einen unabhängigen Wert für jede `random()`-Funktion zu erhalten, geben Sie einen eindeutigen {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()`-Funktion innerhalb eines benutzerdefinierten Eigenschaftswerts eine Funktion; sie verhält sich wie ein Textersatzmechanismus, der keinen einzelnen Rückgabewert speichert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel speichert die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig generierte Ergebnis. Wenn `var(--random-size)` geparst wird, wird es effektiv durch `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()`-Funktionsaufruf mit eigenem Basiswert erzeugt, abhängig vom Kontext, in dem es verwendet wird.

Dies trifft nicht zu, wenn `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} verwendet wird. Registrierte benutzerdefinierte Eigenschaften berechnen zufällige Werte und speichern sie.

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie keine vollständige Kontrolle darüber, was Sie erhalten. Dies kann zu nicht zugänglichen Ergebnissen führen. Wenn Sie zum Beispiel `random()` verwenden, um die Textfarbe zu generieren, könnten Sie einen Wert erhalten, der einen niedrigen Kontrast zu seinem Hintergrund hat. Es ist wichtig, den Kontext zu berücksichtigen, in dem `random()` verwendet wird, um sicherzustellen, dass Ihre Ergebnisse immer zugänglich sind.

## Offizielle Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel werden wir zufällige Farben für einige runde Abzeichen generieren, um die grundlegende Verwendung der `random()`-Funktion zu demonstrieren.

#### HTML

Wir inkludieren fünf Abzeichen, eines verwendet die `desaturated`-Klasse und zwei verwenden die `unique`-Klasse.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()`-Funktion innerhalb einer {{cssxref("hsl()")}}-Farbfunktionskette, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den zufälligen Basiswert zwischen dem Standard-`badge` und dem `desaturated` zu teilen, sodass es sich um eine weniger gesättigte Version desselben {{cssxref("hue")}} handelt. Danach überschreiben wir die `unique`-Abzeichen, um einen wirklich zufälligen `hue` zu haben, indem wir den Basiswert-Teiler-Parameter auf `auto` setzen.

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

### Teilen von Zufallswerten zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenbedeckten Hintergrund, um die Nutzung eines `<dashed-ident>` zu demonstrieren, um einen Seed-Wert zwischen Eigenschaften eines Elements zu teilen.

#### HTML

Wir inkludieren fünf Partikel, die alle denselben Klassennamen teilen.

```html
<html>
  <body>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </body>
</html>
```

#### CSS

Jedes Partikel hat die gleichen Stile. Wir verwenden die `random()`-Funktion für die Werte von {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}}, um jedes Partikel zufällig zu dimensionieren und zu positionieren. Wir verwenden einen `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängig voneinander ist, jedoch für jedes Partikel die `height` dieselbe wie die `width` ist. Wir erlauben, dass der Basiswert für die `top`- und `left`-Eigenschaften zu `auto` aufgelöst wird, sodass der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

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
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) von webkit.org (2025)
- [CSS Almanach: random()](https://css-tricks.com/almanac/functions/r/random/) von CSS-Tricks.com
