---
title: "`random()` CSS-Funktion"
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: bbab8819f2226fc65cd5f38112856e0dc8010471
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`random()`** erzeugt einen Zufallswert innerhalb eines angegebenen Bereichs. Optional können die möglichen Werte auf Schrittintervalle innerhalb dieses Bereichs begrenzt werden. Sie kann verwendet werden, wenn innerhalb eines Eigenschaftswerts ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} angegeben wird.

{{InteractiveExample("CSS Demo: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(property-scoped, 0deg, 360deg);
  width: random(property-scoped, 50px, 300px);
  background-color: hsl(random(property-scoped, 0, 360) 50% 50%);
  height: random(property-scoped, 50px, 300px);
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

/* With <random-key> */
random(auto, 0, 360)
random(element-scoped, 0s, 5s)
random(property-scoped, 0s, 5s)
random(property-index-scoped, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base property-scoped, 100dpi, 300dpi)

/* With <random-key> and step interval */
random(property-scoped, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Parameter

Die Funktion `random(seed, min, max, step)` akzeptiert zwei bis vier durch Kommas getrennte Ausdrücke als Parameter.

- `<random-key>` {{optional_inline}}
  - : Steuert, welche `random()`-Funktionen im Dokument einen zufälligen Basiswert – einen _Seed_ – gemeinsam verwenden und welche unterschiedliche Werte erhalten.
    Wird als einer der folgenden Werte angegeben:
    - `auto`
      - : Der Wert `auto` ist der Standardwert und wird verwendet, wenn `<random-key>` weggelassen wird. Diese Zufallsfunktion erzeugt unabhängige Zufallswerte. Der Name des Zufallscaches und damit das Ergebnis unterscheiden sich zwischen jeder `random()`-Instanz in einem Wert mit mehreren Komponenten, zwischen verschiedenen Eigenschaften und zwischen verschiedenen Elementen. Dies entspricht der Angabe von `element-scoped property-index-scoped`.
    - `element-scoped`
      - : Fügt dem Namen des Zufallscaches eine elementspezifische Kennung hinzu. Wird die Funktion auf mehrere Eigenschaften angewendet (z. B. `width` und `height`), verwenden beide Eigenschaften denselben Wert, aber jedes Element (z. B. `<div>`) erhält andere Zufallswerte.
    - `property-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen hinzu. Wird die Funktion auf mehrere Eigenschaften angewendet (z. B. `width` und `height`), erhalten die Eigenschaften unterschiedliche Zufallswerte, aber jedes Element (z. B. `<div>`) verwendet dieselben Zufallswerte.
    - `property-index-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen und die Position der `random()`-Funktion unter allen Zufallsfunktionen hinzu, die im selben Eigenschaftswert verwendet werden. Dadurch erhält jede Instanz innerhalb derselben Deklaration einen anderen Zufallswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Name für den Schlüssel des Zufallscaches (z. B. `--my-random-key`). Wird er allein verwendet, teilen sich alle Elemente und Eigenschaften mit derselben Kennung denselben zufälligen Basiswert. In Kombination mit einem `*-scoped`-Schlüsselwort bestimmt dieses Schlüsselwort, wie der Wert gemeinsam verwendet wird.
    - `fixed <number>`
      - : Umgeht den Namen des Zufallscaches und verwendet `<number>` – einen Wert zwischen `0` und `1`, einschließlich 0 und ausschließlich 1 – als Seed-Wert.

- `<calc-sum>, <calc-sum>`
  - : Werte, die als `<number>`, `<dimension>` oder `<percentage>` angegeben werden, beziehungsweise Berechnungen, deren Ergebnis einer dieser Typen ist. Sie definieren den Mindest- beziehungsweise Höchstwert. Beide Werte müssen sich demselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) zuordnen lassen. Ist der Höchstwert kleiner als der Mindestwert, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Gibt das Schrittintervall an. Wenn dieser Parameter vorhanden ist und denselben Datentyp wie die `<calc-sum>`-Werte für Mindest- und Höchstwert hat, ist der Rückgabewert entweder der Mindestwert oder ein Wert, der sich ausgehend vom Mindestwert in Schritten der angegebenen Größe bis zum Höchstwert ergibt.

### Rückgabewert

Gibt einen zufälligen `<number>`-, `<dimension>`- oder `<percentage>`-Wert zwischen dem Mindest- und Höchstwert zurück, einschließlich beider Grenzen und mit demselben Typ wie die `<calc-sum>`-Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` legt den Mindest- und Höchstwert sowie optionale Schrittintervalle fest, die beim Mindestwert beginnen. Sie erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler `<random-key>`-Parameter](#random-key), ermöglicht es, zufällige Basiswerte zwischen verschiedenen Eigenschaften und Elementen gemeinsam zu verwenden oder voneinander zu unterscheiden.

Damit die Funktion gültig ist, müssen der angegebene Mindestwert, Höchstwert und Schrittwert denselben Datentyp haben. Die Einheiten der zwei bis drei `<calc-sum>`-Parameter müssen zwar nicht identisch sein, aber demselben Datentyp entsprechen, etwa {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für die Zufallserzeugung")}}. Er ist eine Ausgangszahl, aus der das endgültige Zufallsergebnis erzeugt wird. Wenn zwei `random()`-Funktionen denselben Basiswert verwenden, ändern sich ihre Ergebnisse gemeinsam nach einem vorhersehbaren Muster. Bei unterschiedlichen Basiswerten sind ihre Ergebnisse vollständig voneinander unabhängig.

Der optionale erste Parameter `<random-key>` steuert, wie der zufällige Basiswert gemeinsam verwendet wird. Er kann `auto`, ein Schlüsselwort für den Geltungsbereich (`element-scoped`, `property-scoped` oder `property-index-scoped`), ein benutzerdefiniertes {{cssxref("dashed-ident")}}, `fixed <number>` oder ein mit einem Schlüsselwort für den Geltungsbereich kombiniertes `<dashed-ident>` sein.

#### Schlüsselwörter für den Geltungsbereich

Allein verwendet steuern die Schlüsselwörter für den Geltungsbereich die gemeinsame Verwendung ohne benutzerdefinierten Namen:

- `property-scoped` verwendet pro Eigenschaft denselben Basiswert für alle Elemente.
- `element-scoped` gibt jedem Element einen eigenen Basiswert pro Eigenschaft.
- `property-index-scoped` funktioniert wie `property-scoped`, unterscheidet `random()`-Aufrufe aber zusätzlich nach ihrer Position innerhalb einer Kurzschreibweise.

Mit dem Schlüsselwort `property-scoped` werden `.a`, `.b` und `.c` zu identischen Rechtecken, da jedes Element denselben `width`-Wert und denselben `height`-Wert erhält:

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

Mit `element-scoped` würde jedes Element einen eigenen, unabhängig festgelegten `width`-Wert und `height`-Wert erhalten.

Das Schlüsselwort `property-index-scoped` ist in Kurzschreibweisen nützlich, wenn für jede Position ein eigener gemeinsam verwendeter Wert benötigt wird:

```css
.a,
.b,
.c {
  margin: random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px)
    random(property-index-scoped, 5px, 40px);
}
```

Alle drei Elemente erhalten denselben oberen Außenabstand, denselben rechten Außenabstand und so weiter. Die vier Außenabstandswerte unterscheiden sich jedoch voneinander.

#### Benutzerdefinierte Namen

Ein allein verwendetes `<dashed-ident>` (z. B. `--custom-name`) verwendet seinen Basiswert global gemeinsam: Jeder `random()`-Aufruf im Dokument mit derselben Kennung erhält dasselbe Ergebnis. Dadurch werden `.a`, `.b` und `.c` zu identischen Quadraten, da jeder `width`- und `height`-Wert zum selben Wert aufgelöst wird:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

Kombinieren Sie ein `<dashed-ident>` mit einem Schlüsselwort für den Geltungsbereich, um die gemeinsame Verwendung einzuschränken. Mit `property-scoped` bleibt der Wert elementübergreifend gleich, wird aber nach Eigenschaft unterschieden:

```css
.a,
.b,
.c {
  width: random(--custom-name property-scoped, 10px, 200px);
  height: random(--custom-name property-scoped, 10px, 200px);
}
```

`element-scoped` dagegen verknüpft `width` und `height` innerhalb jedes Elements, gibt aber jedem Element einen eigenen Wert. Dadurch werden `.a`, `.b` und `.c` zu Quadraten unterschiedlicher Größe:

```css
.a,
.b,
.c {
  width: random(--custom-name element-scoped, 10px, 200px);
  height: random(--custom-name element-scoped, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder ausdrücklich auf `auto` gesetzt wird, wird aus dem Eigenschaftsnamen und der Position automatisch eine Kennung erzeugt. Dieses Verhalten kann dazu führen, dass zufällige Basiswerte unerwartet gemeinsam verwendet werden.

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

Wenn `<random-key>` standardmäßig oder ausdrücklich auf `auto` gesetzt ist, erzeugt der User Agent nach festen Regeln anhand des Eigenschaftsnamens und der Reihenfolge automatisch einen Seed-Namen, auch _Kennung für die gemeinsame Verwendung erzeugter Werte_ genannt. Deshalb können `random()`-Funktionen denselben Seed-Namen und somit denselben zufälligen Basiswert erhalten. In diesem Beispiel ist die erzeugte Kennung für die `random()`-Funktion im `width`-Eigenschaftswert bei `.foo` und `.foo:hover` gleich. Der Wert ändert sich daher beim Zustandswechsel nicht. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen jeweils dieselbe erzeugte Kennung. Das bedeutet, dass die ersten beiden Werte der `margin`-Kurzschreibweise beim Darüberfahren mit der Maus unverändert bleiben: Der obere und der rechte Außenabstand von `bar` bleiben gleich, während der untere und der linke Außenabstand unabhängige Zufallswerte erhalten. Um für jede `random()`-Funktion einen unabhängigen Wert zu erhalten, geben Sie jeweils ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt der Wert eine Funktion, wenn eine `random()`-Funktion im Wert einer benutzerdefinierten Eigenschaft enthalten ist. Er verhält sich wie eine Textersetzung und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel „speichert“ die benutzerdefinierte Eigenschaft `--random-size` das zufällig erzeugte Ergebnis nicht. Beim Verarbeiten von `var(--random-size)` wird es effektiv durch `random(1px, 100px)` ersetzt. Somit entsteht bei jeder Verwendung ein neuer `random()`-Funktionsaufruf mit einem eigenen Basiswert, der vom jeweiligen Kontext abhängt.

Anders verhält es sich bei der Verwendung von `random()`, wenn eine benutzerdefinierte Eigenschaft mit {{cssxref("@property")}} registriert wird. Registrierte benutzerdefinierte Eigenschaften berechnen Zufallswerte und speichern sie.

Da `--defaultSize` im folgenden Beispiel registriert ist, werden `.a`, `.b` und `.c` zu gleich großen Quadraten. Ihre Farben sind jedoch zufällig, weil `--random-angle` nicht registriert wurde:

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

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle über das Ergebnis. Dies kann zu nicht barrierefreien Ergebnissen führen. Wenn Sie beispielsweise mit `random()` eine Textfarbe erzeugen, könnte deren Kontrast zum Hintergrund zu gering sein. Achten Sie deshalb auf den Kontext, in dem `random()` verwendet wird, und stellen Sie sicher, dass die Ergebnisse stets barrierefrei sind.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel erzeugen wir zufällige Farben für einige kreisförmige Abzeichen, um die grundlegende Verwendung der Funktion `random()` zu zeigen.

#### HTML

Wir fügen fünf Abzeichen hinzu: eines mit der Klasse `desaturated` und zwei mit der Klasse `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir stellen die fünf Abzeichen als Kreise dar. Innerhalb der Farbfunktion {{cssxref("color_value/hsl()")}} verwenden wir die Funktion `random()`, um den {{cssxref("angle")}} des {{cssxref("hue")}} festzulegen. Mit `property-scoped` verwenden das standardmäßige `badge` und das Abzeichen mit `desaturated` denselben zufälligen Basiswert. Letzteres ist dadurch eine weniger gesättigte Variante desselben {{cssxref("hue")}}. Anschließend überschreiben wir die `unique`-Abzeichen, sodass sie einen wirklich zufälligen `hue` erhalten, indem wir für den Parameter zur gemeinsamen Verwendung des Basiswerts den Standardwert `auto` beibehalten.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(property-scoped, 0, 360) 50% 50%);
}
.badge.desaturated {
  background: hsl(random(property-scoped, 0, 360) 10% 50%);
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

{{EmbedLiveSample('basic_usage', '100%', '300px')}}

### Gemeinsame Verwendung von Zufallswerten zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenübersäten Hintergrund. Er zeigt, wie sich ein `<dashed-ident>` mit `element-scoped` kombinieren lässt, um innerhalb jedes einzelnen Elements einen zufälligen Basiswert zwischen Eigenschaften gemeinsam zu verwenden, ohne ihn zwischen Elementen zu teilen.

#### HTML

Wir fügen fünf Partikel hinzu, die alle denselben Klassennamen haben.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Alle Partikel haben dieselben Stile. Für die Werte von {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}} verwenden wir die Funktion `random()`, um Größe und Position jedes Partikels zufällig festzulegen. Für `height` und `width` kombinieren wir ein `<dashed-ident>` mit `element-scoped`. So ist jedes Partikel ein Kreis (seine Höhe entspricht seiner Breite), seine Größe ist jedoch unabhängig von den anderen. Für `top` und `left` bleibt der Standardwert `auto` bestehen, sodass die Position auf jeder Achse unabhängig festgelegt wird.

```css
body {
  background: black;
}

.particle {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--particle-size element-scoped, 0.25em, 1em);
  height: random(--particle-size element-scoped, 0.25em, 1em);
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
- Modul [CSS-Einheiten und -Werte](/de/docs/Web/CSS/Guides/Values_and_units)
- {{jsxref("Math.random()")}}
- [Rolling the Dice with CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) auf webkit.org (2025)
- [CSS Almanac: random()](https://css-tricks.com/almanac/functions/r/random/) auf CSS-Tricks.com
