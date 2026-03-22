---
title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) generiert einen Zufallswert innerhalb eines angegebenen Bereichs und kann optional die möglichen Werte auf Intervallschritte zwischen diesen Grenzen einschränken.

Die `random()`-Funktion kann verwendet werden, wenn eine {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswertes angegeben wird.

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
  - : Bestimmt, welche `random()`-Funktionen im Dokument einen gemeinsamen Zufallsbasiswert teilen und welche unterschiedliche Werte erhalten.
    Dies kann einer der folgenden Werte sein oder sowohl ein benutzerdefinierter Schlüssel als auch der Schlüsselbegriff `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält ihren eigenen einzigartigen Zufallsbasiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z.B. `--my-random-key`), um denselben Zufallsbasiswert über Eigenschaften eines Elements hinweg zu teilen.
    - `element-shared`
      - : Ein Zufallsbasiswert wird für alle Elemente für dieselbe Eigenschaft, die diesen Schlüsselbegriff verwenden, gemeinsam genutzt. Dieser Basiswert ist unabhängig von den `random()`-Funktionen, die in den Werten anderer Eigenschaften desselben Elements enthalten sind, es sei denn, die Zufallsfunktionen enthalten auch denselben benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1` an, inklusive, von dem der Zufallswert generiert werden soll.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, kommagetrennte `<number>`, `<dimension>`, oder `<percentage>` Werte oder Berechnungen, die sich auf einen dieser Typen auflösen, die die minimalen und maximalen Werte definieren. Beide Werte müssen auf denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Das optionale dritte `<calc-sum>`, dem ein Komma vorausgeht, gibt das Schrittintervall an. Wenn vorhanden und vom selben Datentyp wie die beiden kommagetrennten minimalen und maximalen `<calc-sum>`-Werte, definiert es den Rückgabewert als minimalen Wert oder in Schritten des Schrittwerts vom minimalen Wert bis zum maximalen Wert.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>`, oder `<percentage>` zwischen den minimalen und maximalen Bereichswerten zurück, einschließlich, im gleichen Typ wie die `<calc-sum>`-Parameter.

## Beschreibung

Die `random(SEED, MIN, MAX, STEP)` Funktion gibt die minimalen und maximalen Werte sowie optionale Schrittinkremente an, beginnend beim minimalen Wert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optional `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren von Zufallsbasiswerten über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen minimalen, maximalen und Schrittwerte müssen vom selben Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>`-Parametern nicht gleich sein müssen, müssen sie vom selben Datentyp sein, wie {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startnummer, die verwendet wird, um das endgültige zufällige Ergebnis zu erzeugen. Wenn zwei `random()`-Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse in einem vorhersehbaren Muster zusammen. Wenn sie unterschiedliche Basiswerte haben, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>` Parameter bestimmt, wie der zufällige Basiswert geteilt wird. Das Teilen ermöglicht das Wiederverwenden desselben zufällig generierten Wertes, was für einige Design-Effekte notwendig ist. Der Wert kann auf `auto`, das Schlüsselwort `element-shared`, ein benutzerdefiniertes {{cssxref("dashed-ident")}}, oder `fixed <number>` eingestellt werden. Auch das Einbeziehen eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem Schlüsselwort `element-shared`, mit Leerzeichen getrennt, ist gültig.

#### Das Schlüsselwort `element-shared`

Alle `random()`-Funktionen mit dem Schlüsselwort `element-shared` teilen denselben zufälligen Basiswert für eine einzelne Eigenschaft über alle Elemente hinweg. Zum Beispiel, wenn das Folgende erklärt wird, werden A, B und C identisch große Rechtecke sein, alle drei haben dieselbe zufällige Breite und alle drei haben dieselbe, unabhängig generierte zufällige Höhe:

```css
A,
B,
C {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` (z.B. `--custom-name`) angeben, teilen alle Eigenschaften in den Stilen eines Elements mit demselben Namen denselben zufälligen Basiswert, und diejenigen mit unterschiedlichen `<dashed-ident>`-Werten erhalten unterschiedliche zufällige Basiswerte. Wenn das Folgende erklärt wird, werden A, B und C alle Quadrate sein, da innerhalb jedes Elements alle Eigenschaften, die denselben Ident referenzieren, denselben Basiswert teilen. Daher ist die Breite jedes Elements gleich seiner Höhe. Beachten Sie, dass in diesem Fall A, B und C unterschiedliche Größen haben werden, da das Teilen des Basiswerts zwischen Eigenschaften eines Elements und nicht zwischen Elementen erfolgt.

```css
A,
B,
C {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Einstellung von `<dashed-ident>` und `element-shared`

Die Kombination eines `<dashed-ident>` mit `element-shared` (z.B. `random(--custom-name element-shared, 0, 100)`) teilt den zufälligen Basiswert sowohl zwischen den Elementen als auch den Eigenschaften, die denselben `<random-value-sharing>`-Parameter verwenden. Angesichts des Folgenden werden A, B, und C alle Quadrate derselben Größe sein:

```css
A,
B,
C {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen wird oder explizit auf `auto` gesetzt wird, wird ein Ident automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann zu unerwartetem Teilen von Zufallsbasiswerten führen.

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

Wenn die `<random-value-sharing>` Standardeinstellung verwendet wird oder explizit auf `auto` gesetzt ist, generiert der Benutzeragent automatisch einen Seed-Namen oder eine _Generated Value Sharing Identifier_, nach konsistenten Regeln basierend auf Eigenschaftsnamen und Reihenfolge. Aufgrund dessen können `random()`-Funktionen mit demselben Seed-Namen und damit demselben Zufallsbasiswert enden. In diesem Beispiel ist der für die `random()`-Funktion im `width`-Eigenschaftswert generierte Wertanzahlteiler für `.foo` derselbe wie für `.foo:hover`, sodass sich der Wert zwischen den Zuständen nicht ändert. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen denselben generierten Wertanzahlteiler, was bedeutet, dass die ersten beiden Werte in der `margin`-Kurzschrift beim Hover unverändert bleiben; beim Hover bleiben die oberen und rechten Ränder von `bar` gleich, aber die unteren und linken Ränder erhalten unabhängige Zufallswerte. Um einen unabhängigen Wert für jede `random()`-Funktion zu erhalten, geben Sie einen eindeutigen {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt der Wert, wenn eine `random()`-Funktion innerhalb eines benutzerdefinierten Eigenschaftswerts enthalten ist, eine Funktion; sie verhält sich wie ein Textersetzungsmechanismus und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel speichert die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig erzeugte Ergebnis. Wenn `var(--random-size)` geparst wird, wird es effektiv durch `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()`-Funktionsaufruf mit seinem eigenen Basiswert erzeugt, abhängig vom Kontext, in dem er verwendet wird.

Dies trifft nicht zu, wenn `random()` verwendet wird, wenn eine benutzerdefinierte Eigenschaft mit {{cssxref("@property")}} registriert wird. Registrierte benutzerdefinierte Eigenschaften berechnen zufällige Werte und speichern sie.

In diesem Beispiel werden, da `--defaultSize` registriert ist, A, B, und C Quadrate gleicher Größe sein, aber ihre Farben werden zufällig sein, da `--random-angle` nicht registriert wurde:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie keine vollständige Kontrolle darüber, was Sie erhalten. Dies kann zu unzugänglichen Ergebnissen führen. Wenn Sie beispielsweise `random()` verwenden, um eine Textfarbe zu generieren, könnten Sie mit einem Wert enden, der einen geringen Kontrast zu seinem Hintergrund hat. Es ist wichtig, auf den Kontext zu achten, in dem `random()` verwendet wird, um sicherzustellen, dass Ihre Ergebnisse immer zugänglich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel erzeugen wir zufällige Farben für einige kreisförmige Abzeichen, um die grundlegende Verwendung der `random()`-Funktion zu demonstrieren.

#### HTML

Wir fügen fünf Abzeichen hinzu, eines mit der Klasse `desaturated` und zwei mit der Klasse `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()`-Funktion innerhalb einer {{cssxref("hsl()")}}-Farbfunktions, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den zufälligen Basiswert zwischen dem Standard-`badge` und dem `desaturated`-Abzeichen zu teilen, sodass es eine weniger gesättigte Version desselben {{cssxref("hue")}} ist. Wir überschreiben dann die `unique`-Abzeichen, um eine wirklich zufällige `hue` zu haben, indem wir den Teilen-Parameter des Basiswerts auf `auto` lassen.

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

### Zufälliger Wert zwischen Eigenschaften teilen

In diesem Beispiel erstellen wir einen sterneübersäten Hintergrund, um die Verwendung eines `<dashed-ident>` zu demonstrieren, um einen Seed-Wert zwischen Eigenschaften eines Elements zu teilen.

#### HTML

Wir fügen fünf Partikel hinzu, die alle denselben Klassennamen teilen.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Jedes Partikel hat dieselben Stile. Wir verwenden die `random()`-Funktion für die Werte von {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}}, um jedes Partikel zufällig zu dimensionieren und zu positionieren. Wir verwenden ein `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängigen, innerhalb eines angegebenen Bereichs gelegenen, Variationen unterliegt, aber die `height` eines jeden Partikels dieselbe ist wie seine `width`. Wir erlauben dem Basiswert, sich für die `top` und `left` Eigenschaften auf `auto` aufzulösen, sodass der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

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
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) via webkit.org (2025)
- [CSS Almanach: random()](https://css-tricks.com/almanac/functions/r/random/) via CSS-Tricks.com
