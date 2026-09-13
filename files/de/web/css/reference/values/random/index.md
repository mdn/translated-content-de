---
title: "`random()` CSS-Funktion"
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

{{SeeCompatTable}}

Die **`random()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) generiert einen zufälligen Wert innerhalb eines angegebenen Bereichs, wobei optional die möglichen Werte auf Intervallgrößen zwischen diesen Grenzen begrenzt werden können. Sie kann verwendet werden, wenn ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} innerhalb eines Eigenschaftswerts angegeben werden soll.

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
  - : Bestimmt, welche `random()`-Funktionen im Dokument einen gemeinsamen Zufallsbasiswert teilen und welche unterschiedliche Werte erhalten. Dies kann einer der folgenden Werte sein oder sowohl ein benutzerdefinierter Schlüssel als auch der Schlüsselbegriff `element-shared`, durch ein Leerzeichen getrennt:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält einen eigenen, eindeutigen Zufallsbasiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z. B. `--my-random-key`) zum Teilen desselben Zufallsbasiswerts über die Eigenschaften eines Elements.
    - `element-shared`
      - : Ein Zufallsbasiswert wird über alle Elemente für dieselbe Eigenschaft mit diesem Schlüsselbegriff geteilt. Dieser Basiswert ist unabhängig von den `random()`-Funktionen, die in den Werten anderer Eigenschaften desselben Elements enthalten sind, es sei denn, die Zufallsfunktionen beinhalten auch denselben benutzerdefinierten Schlüssel.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1` an, inklusiv, aus dem der Zufallswert generiert wird.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, durch Komma getrennte `<number>`, `<dimension>`, oder `<percentage>` Werte, oder Berechnungen, die zu einem dieser Typen führen und den Minimal- sowie Maximalwert definieren. Beide Werte müssen auf den gleichen [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösbar sein. Wenn das Maximum kleiner als das Minimum ist, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Das optionale dritte `<calc-sum>`, durch ein Komma vorangestellt, gibt das Schrittintervall an. Wenn vorhanden und vom gleichen Datentyp wie die beiden durch Komma getrennten Minimal- und Maximalwerte, definiert es den Rückgabewert als Minimalwert oder in Inkrementen des Schrittwerts vom Minimalwert bis zum Maximalwert.

### Rückgabewert

Gibt einen zufälligen `<number>`, `<dimension>`, oder `<percentage>` zwischen den Minimal- und Maximalbereichswerten zurück, inklusiv, im gleichen Typ wie die `<calc-sum>` Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` gibt die Minimal- und Maximalwerte sowie optionale Schrittinkremente an, beginnend mit dem Minimalwert. Die Funktion generiert ein zufälliges Ergebnis innerhalb des festgelegten Bereichs. Der Samen, ein [optional `<random-value-sharing>`](#random-value-sharing) Parameter, ermöglicht das Teilen oder Variieren von Zufallsbasiswerten über verschiedene Eigenschaften und Elemente hinweg.

Die angegebenen Minimal-, Maximal- und Schrittwerte müssen vom gleichen Datentyp sein, damit die Funktion gültig ist. Während die Einheiten in den zwei bis drei `<calc-sum>` Parametern nicht gleich sein müssen, müssen sie jedoch vom gleichen Datentyp sein, wie z. B. {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}}, oder {{cssxref("frequency")}}, um gültig zu sein.

### Zufallsbasiswert

Der Zufallsbasiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufälligkeit")}}. Es ist eine Startnummer, die verwendet wird, um das endgültige zufällige Ergebnis zu generieren. Wenn zwei `random()`-Funktionen denselben Basiswert teilen, variieren sich ihre Ergebnisse in einem vorhersehbaren Muster. Wenn sie unterschiedliche Basiswerte haben, sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste `<random-value-sharing>` Parameter steuert, wie der Zufallsbasiswert geteilt wird. Teilen ermöglicht es, denselben zufällig generierten Wert wiederzuverwenden, was für einige Designeffekte notwendig ist. Der Wert kann auf `auto`, das Schlüsselwort `element-shared`, einen benutzerdefinierten {{cssxref("dashed-ident")}} oder `fixed <number>` gesetzt werden. Auch das Einbinden eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem `element-shared` Schlüsselwort, durch Leerzeichen getrennt, ist gültig.

#### Das `element-shared` Schlüsselwort

Alle `random()`-Funktionen mit dem `element-shared` Schlüsselwort teilen denselben Zufallsbasiswert für eine einzelne Eigenschaft über alle Elemente hinweg. Zum Beispiel, wenn das Folgende deklariert wird, werden `.a`, `.b` und `.c` identisch große Rechtecke sein, alle drei mit derselben zufälligen Breite und alle drei mit derselben, unabhängig generierten zufälligen Höhe:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` angeben (z. B. `--custom-name`), teilen alle Eigenschaften im Stil eines Elements mit demselben Namen denselben Zufallsbasiswert, und solche mit verschiedenen `<dashed-ident>` Werten erhalten unterschiedliche Zufallsbasiswerte. Wenn das Folgende deklariert wird, werden `.a`, `.b` und `.c` alle Quadrate sein, weil innerhalb jedes Elements alle Eigenschaften, die auf das gleiche Ident verweisen, denselben Basiswert teilen. Daher wird die Breite jeder derselben wie ihre Höhe sein. Beachten Sie, dass in diesem Fall `.a`, `.b` und `.c` unterschiedliche Größen haben werden, weil das Teilen des Basiswerts zwischen Eigenschaften eines Elements erfolgt, nicht zwischen Elementen.

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### Einstellung von sowohl `<dashed-ident>` als auch `element-shared`

Das Kombinieren eines `<dashed-ident>` mit `element-shared` (z. B. `random(--custom-name element-shared, 0, 100)`) teilt den Zufallsbasiswert über die Elemente und die Eigenschaften, die denselben `<random-value-sharing>` Parameter verwenden. Gegeben das Folgende, werden `.a`, `.b` und `.c` alle Quadrate gleicher Größe sein:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, , 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder explizit auf `auto` gesetzt wird, wird ein Ident automatisch aus dem Eigenschaftsnamen und der Position generiert. Dieses Verhalten kann zu unerwartetem Teilen von Zufallsbasiswerten führen.

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

Wenn das `<random-value-sharing>` auf Standard oder explizit auf `auto` gesetzt ist, generiert der Benutzeragent einen Samenname oder _generierten Werteteilungsidentifier_ nach konsistenten Regeln basierend auf Eigenschaftsname und Reihenfolge. Aufgrunddessen können `random()`-Funktionen mit dem gleichen Samenname enden und folglich denselben Zufallsbasiswert haben. In diesem Beispiel ist der generierte Werteteilungsidentifier für die `random()`-Funktion im `width` Eigenschaftswert derselbe für `.foo` wie für `.foo:hover`, sodass sich der Wert zwischen den Zuständen nicht ändert. Ähnlich haben die ersten beiden `random()`-Funktionen in beiden `margin` Deklarationen denselben generierten Werteteilungsidentifier, was bedeutet, dass die ersten beiden Werte in der `margin` Kurzschrift beim Hover unverändert bleiben; bei Hover bleiben `bar`s obere und rechte Abstände gleich, aber die unteren und linken Abstände erhalten unabhängige Zufallswerte. Um einen unabhängigen Wert für jede `random()`-Funktion zu erhalten, geben Sie ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()`-Funktion, die in einem benutzerdefinierten Eigenschaftswert enthalten ist, eine Funktion; sie verhält sich wie ein Textersetzungsmechanismus, der keinen einzelnen Rückgabewert speichert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel speichert die benutzerdefinierte Eigenschaft `--random-size` nicht das zufällig generierte Ergebnis. Wenn `var(--random-size)` ausgewertet wird, wird es effektiv durch `random(1px, 100px)` ersetzt, was bedeutet, dass jede Verwendung einen neuen `random()`-Funktionsaufruf mit eigenem Basiswert erstellt, abhängig vom Kontext, in dem es verwendet wird.

Dies ist im Fall der Verwendung von `random()` beim Registrieren einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} nicht der Fall. Registrierte benutzerdefinierte Eigenschaften berechnen Zufallswerte und speichern sie.

In diesem Beispiel werden, da `--defaultSize` registriert ist, `.a`, `.b`, und `.c` Quadrate gleicher Größe sein, aber ihre Farben werden zufällig sein, da `--random-angle` nicht registriert wurde:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle darüber, was Sie erhalten. Dies kann zu unzugänglichen Ergebnissen führen. Zum Beispiel, wenn Sie `random()` verwenden, um eine Textfarbe zu generieren, könnten Sie einen Wert erhalten, der wenig Kontrast zu seinem Hintergrund hat. Es ist wichtig, den Kontext, in dem `random()` verwendet wird, zu beachten und sicherzustellen, dass Ihre Ergebnisse immer zugänglich sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel erzeugen wir zufällige Farben für einige runde Abzeichen, um die grundlegende Verwendung der `random()`-Funktion zu demonstrieren.

#### HTML

Wir fügen fünf Abzeichen ein, eine mit der Klasse `desaturated` und zwei mit der Klasse `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir rendern die fünf Abzeichen als Kreise. Wir verwenden die `random()`-Funktion innerhalb einer {{cssxref("color_value/hsl()")}} Farb-Funktion, um den {{cssxref("angle")}} des {{cssxref("hue")}} zu definieren. Wir setzen `element-shared`, um den Zufallsbasiswert zwischen dem Standardabzeichen und dem `desaturated`-Abzeichen zu teilen, sodass es eine weniger gesättigte Version des gleichen {{cssxref("hue")}} ist. Dann überschreiben wir die `unique`-Abzeichen, sodass sie einen wirklich zufälligen `hue` haben, indem wir den Basiswertteilung-Parameter auf `auto` einstellen.

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

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Teilen von Zufallswerten zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenbedeckten Hintergrund, um die Verwendung eines `<dashed-ident>` zur Teilung eines Samenwerts zwischen Eigenschaften eines Elements zu demonstrieren.

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

Jedes Partikel hat die gleichen Stile. Wir verwenden die `random()`-Funktion für die {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}}, und {{cssxref("left")}} Werte, um jedes Partikel zufällig zu dimensionieren und zu positionieren. Wir verwenden ein `<dashed-ident>` als Basiswert für die `height` und `width`, was bedeutet, dass die Größe der Partikel unabhängig voneinander ist, innerhalb eines festgelegten Bereichs, aber die `height` jedes Partikels gleich seiner `width` sein wird. Wir erlauben es, dass der Basiswert für die `top` und `left` Eigenschaften zu `auto` aufgelöst wird, sodass der Basiswert für jede Eigenschaft und jedes Element unabhängig voneinander ist.

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
- [CSS Almanach: random()](https://css-tricks.com/almanac/functions/r/random/) über CSS-Tricks.com
