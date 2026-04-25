---
title: "`random()` CSS-Funktion"
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) generiert einen zufälligen Wert innerhalb eines angegebenen Bereichs und kann optional die möglichen Werte auf Intervalle gemäß Schrittgröße zwischen diesen Grenzen begrenzen. Sie kann verwendet werden, wenn eine {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswerts angegeben wird.

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
  - : Bestimmt, welche `random()` Funktionen im Dokument einen gemeinsamen Zufallsbasiswert teilen und welche unterschiedliche Werte erhalten.
    Dies kann einer der folgenden Werte sein oder ein benutzerdefinierter Schlüssel zusammen mit dem Schlüsselbegriff `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält einen einzigartigen Zufallsbasiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z.B. `--my-random-key`) zum Teilen des gleichen Zufallsbasiswerts über Eigenschaften eines Elements.
    - `element-shared`
      - : Ein Zufallsbasiswert wird über alle Elemente für die gleiche Eigenschaft mit diesem Schlüsselbegriff geteilt. Dieser Basiswert ist unabhängig von den `random()` Funktionen, die in den Werten anderer Eigenschaften auf demselben Element enthalten sind, es sei denn, die Zufallsfunktionen enthalten auch denselben benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1`, inklusive, an, aus dem der Zufallswert generiert werden soll.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, durch Komma getrennte, `<number>`, `<dimension>` oder `<percentage>` Werte, oder Berechnungen, die auf einen dieser Typen auflösen, welche die minimalen und maximalen Werte definieren. Beide Werte müssen auf den gleichen [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>` Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`, vorangestellt von einem Komma, gibt das Schrittintervall an. Wenn vorhanden und vom gleichen Datentyp wie die beiden durch Komma getrennten minimalen und maximalen `<calc-sum>` Werte, definiert es den Rückgabewert als den minimalen Wert oder in Schritten des Schrittwerts vom minimalen Wert bis zum maximalen Wert.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>` oder `<percentage>` zwischen den minimalen und maximalen Bereichswerten, inklusiv, im selben Typ wie die `<calc-sum>` Parameter zurück.

## Beschreibung

Die `random(SEED, MIN, MAX, STEP)` Funktion spezifiziert die minimalen und maximalen Werte und optionale Schrittinkremente, beginnend beim minimalen Wert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Die Seed, ein [optionaler `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren von Zufallsbasiswerten über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen minimalen, maximalen und Schrittwerte müssen vom gleichen Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>` Parametern nicht dieselben sein müssen, müssen sie vom gleichen Datentyp sein, wie {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufallsbasiswert

Der Zufallsbasiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Er ist eine Startnummer, die verwendet wird, um das endgültige Zufallsresultat zu generieren. Wenn zwei `random()` Funktionen denselben Basiswert teilen, variieren ihre Ergebnisse gemeinsam in einem vorhersehbaren Muster. Haben sie unterschiedliche Basiswerte, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>` Parameter steuert, wie der Zufallsbasiswert geteilt wird. Teilen ermöglicht die Wiederverwendung desselben zufällig generierten Wertes, eine Notwendigkeit für einige Design-Effekte. Der Wert kann so gesetzt werden, dass er `auto`, das Schlüsselwort `element-shared`, einen benutzerdefinierten {{cssxref("dashed-ident")}}, oder `fixed <number>` verwendet. Es ist auch gültig, einen benutzerdefinierten {{cssxref("dashed-ident")}} mit dem Schlüsselwort `element-shared`, durch Leerzeichen getrennt, einzuschließen.

#### Das Schlüsselwort `element-shared`

Alle `random()` Funktionen mit dem Schlüsselwort `element-shared` teilen denselben Zufallsbasiswert für eine einzelne Eigenschaft über alle Elemente. Wenn zum Beispiel das Folgende deklariert wird, werden `.a`, `.b` und `.c` identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig generierten zufälligen Höhe:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie einen `<dashed-ident>` angeben (z.B. `--custom-name`), teilt jedes Element in den Stilen eines Elements mit demselben Namen denselben Zufallsbasiswert, und solche mit unterschiedlichen `<dashed-ident>` Werten erhalten unterschiedliche Zufallsbasiswerte. Wenn das Folgende deklariert wird, werden `.a`, `.b` und `.c` alle Quadrate sein, weil innerhalb jedes Elements alle Eigenschaften, die denselben Identifikator referenzieren, denselben Basiswert teilen. Daher wird die Breite jedes Elements dieselbe sein wie ihre Höhe. Beachten Sie, dass in diesem Fall `.a`, `.b` und `.c` unterschiedliche Größen haben werden, da das Basiswertteilen zwischen Eigenschaften eines Elements erfolgt und nicht zwischen den Elementen.

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Festlegen von sowohl `<dashed-ident>` als auch `element-shared`

Das Kombinieren eines `<dashed-ident>` mit `element-shared` (z.B. `random(--custom-name element-shared, 0, 100)`) teilt den Zufallsbasiswert sowohl über die Elemente als auch über die Eigenschaften, die denselben `<random-value-sharing>` Parameter verwenden. Angesichts des Folgenden werden `.a`, `.b` und `.c` alle Quadrate derselben Größe sein:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder explizit auf `auto` gesetzt wird, wird ein Identifikator automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann unerwartetes Teilen von Zufallsbasiswerten verursachen.

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

Wenn die `<random-value-sharing>` Standardwerte auf `auto` gesetzt ist oder explizit auf `auto` gesetzt wird, generiert der Benutzeragent einen Seed-Namen oder _generierten Werteteilenidentifikator_ gemäß konsistenter Regeln basierend auf dem Eigenschaftsnamen und der Reihenfolge. Aufgrund dessen können `random()` Funktionen mit demselben Seed-Namen enden und daher denselben Zufallsbasiswert haben. In diesem Beispiel ist der generierte Werteteilenidentifikator für die `random()` Funktion im `width` Eigenschaftswert für `.foo` derselbe wie für `.foo:hover`, sodass sich der Wert nicht zwischen den Zuständen ändert. Ebenso haben die ersten beiden `random()` Funktionen in beiden `margin` Deklarationen denselben generierten Werteteilenidentifikator, was bedeutet, dass die ersten beiden Werte in der `margin` Kurzform beim Schweben unverändert bleiben werden; beim Schweben bleiben `bar`'s oberer und rechter Rand gleich, aber die unteren und linken Ränder erhalten unabhängige Zufallswerte. Um für jede `random()` Funktion einen unabhängigen Wert zu erhalten, geben Sie einen einzigartigen {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()` Funktion, wenn sie innerhalb eines benutzerdefinierten Eigenschaftswertes enthalten ist, eine Funktion; sie verhält sich wie ein Textersetzungsmechanismus und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel speichert die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig generierte Ergebnis. Wenn `var(--random-size)` geparst wird, wird es effektiv mit `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()` Funktionsaufruf mit seinem eigenen Basiswert je nach Kontext, in dem sie verwendet wird, erzeugt.

Dies gilt nicht im Fall der Verwendung von `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}}. Registrierte benutzerdefinierte Eigenschaften berechnen Zufallswerte und speichern diese.

In diesem Beispiel, da `--defaultSize` registriert ist, werden `.a`, `.b` und `.c` Quadrate gleicher Größe sein, aber ihre Farben werden zufällig sein, da `--random-angle` nicht registriert war:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs generieren kann, haben Sie keine vollständige Kontrolle darüber, was Sie erhalten. Dies kann zu nicht barrierefreien Ergebnissen führen. Zum Beispiel, wenn Sie `random()` verwenden, um eine Textfarbe zu generieren, könnten Sie am Ende einen Wert mit geringem Kontrast zum Hintergrund erhalten. Es ist wichtig, achtsam bezüglich des Kontexts zu sein, in dem `random()` verwendet wird, um sicherzustellen, dass Ihre Ergebnisse immer barrierefrei sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel generieren wir zufällige Farben für einige kreisförmige Abzeichen, um die grundlegende Verwendung der `random()` Funktion zu demonstrieren.

#### HTML

Wir fügen fünf Abzeichen ein, eines mit der Klasse `desaturated` und zwei mit der Klasse `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()` Funktion innerhalb einer {{cssxref("color_value/hsl()")}} Farbfunktion, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den Zufallsbasiswert zwischen dem Standardabzeichen und dem `desaturated`-Abzeichen zu teilen, sodass es eine weniger gesättigte Version desselben {{cssxref("hue")}} ist. Wir überschreiben dann die `unique`-Abzeichen, um einen wirklich zufälligen `hue` zu haben, indem wir den Basiswertteilparameter auf `auto` zurücklassen.

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
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "Your browser doesn't support the random() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Generieren zufälliger Farben für kreisförmiges Abzeichen', '100%', '300px')}}

### Teilen von Zufallswerten zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenklaren Hintergrund, um zu demonstrieren, wie man einen `<dashed-ident>` verwendet, um einen Seed-Wert zwischen den Eigenschaften eines Elements zu teilen.

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

Jedes Partikel hat die gleichen Stile. Wir verwenden die `random()` Funktion für die Werte {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}}, um jedes Partikel zufällig zu dimensionieren und zu positionieren. Wir verwenden einen `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängig voneinander, innerhalb eines angegebenen Bereichs, ist, aber die `height` jedes Partikels wird dieselbe sein wie seine `width`. Wir erlauben dem Basiswert, sich für die `top` und `left` Eigenschaften und für jedes Element unabhängig auf `auto` zu lösen.

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
    content: "Your browser doesn't support the random() function.";
    color: white;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Teilen von Zufallswerten zwischen Eigenschaften', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc()")}}
- [CSS-Einheiten und Werte](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) über webkit.org (2025)
- [CSS Almanach: random()](https://css-tricks.com/almanac/functions/r/random/) über CSS-Tricks.com
