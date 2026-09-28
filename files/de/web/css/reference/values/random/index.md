---
title: CSS-Funktion `random()`
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`random()`** erzeugt einen zufälligen Wert innerhalb eines angegebenen Bereichs. Optional lassen sich die möglichen Werte auf Intervalle einer bestimmten Schrittweite begrenzen. Die Funktion kann verwendet werden, wenn innerhalb eines Eigenschaftswerts ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} angegeben wird.

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
  - : Steuert, welche `random()`-Funktionen im Dokument einen gemeinsamen zufälligen Basiswert verwenden und welche unterschiedliche Werte erhalten. Zulässig ist einer der folgenden Werte oder eine Kombination aus einem benutzerdefinierten Schlüssel und dem Schlüsselwort `element-shared`, getrennt durch ein Leerzeichen:
    - `auto`
      - : Jede Verwendung von `random()` im Stil eines Elements erhält einen eigenen, eindeutigen zufälligen Basiswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Schlüssel (z. B. `--my-random-key`), mit dem Eigenschaften eines Elements denselben zufälligen Basiswert verwenden.
    - `element-shared`
      - : Für dieselbe Eigenschaft wird über alle Elemente hinweg ein zufälliger Basiswert gemeinsam verwendet. Dieser Basiswert ist unabhängig von den `random()`-Funktionen in den Werten anderer Eigenschaften desselben Elements, sofern diese Funktionen nicht auch denselben benutzerdefinierten Schlüssel enthalten.
    - `fixed <number>`
      - : Gibt einen Basiswert zwischen `0` und `1` einschließlich an, aus dem der Zufallswert erzeugt wird.

- `<calc-sum>, <calc-sum>`
  - : Zwei erforderliche, durch ein Komma getrennte Werte vom Typ `<number>`, `<dimension>` oder `<percentage>` beziehungsweise Berechnungen, die einen dieser Typen ergeben. Sie legen den Mindest- beziehungsweise Höchstwert fest. Beide Werte müssen sich zum selben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösen lassen. Ist der Höchstwert kleiner als der Mindestwert, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Der optionale dritte `<calc-sum>`-Wert wird durch ein Komma eingeleitet und gibt die Schrittweite an. Wenn er vorhanden ist und denselben Datentyp wie die beiden durch Kommas getrennten `<calc-sum>`-Werte für Mindest- und Höchstwert hat, ist der Rückgabewert entweder der Mindestwert oder ein Wert, der sich durch wiederholtes Hinzufügen der Schrittweite zum Mindestwert ergibt, höchstens jedoch der Höchstwert.

### Rückgabewert

Die Funktion gibt einen zufälligen Wert vom Typ `<number>`, `<dimension>` oder `<percentage>` innerhalb des Bereichs vom Mindest- bis zum Höchstwert einschließlich zurück. Der Typ entspricht dem der `<calc-sum>`-Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` legt den Mindest- und Höchstwert sowie optional die Schrittweite fest, ausgehend vom Mindestwert. Sie erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler `<random-value-sharing>`-Parameter](#random-value-sharing), ermöglicht es, zufällige Basiswerte für verschiedene Eigenschaften und Elemente gemeinsam zu verwenden oder voneinander zu unterscheiden.

Damit die Funktion gültig ist, müssen der angegebene Mindestwert, Höchstwert und die Schrittweite denselben Datentyp haben. Die Einheiten der zwei bis drei `<calc-sum>`-Parameter müssen nicht identisch sein. Die Parameter müssen jedoch denselben Datentyp haben, etwa {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}.

### Zufälliger Basiswert

Der zufällige Basiswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufallszahlen")}}. Er ist ein Ausgangswert, aus dem das endgültige Zufallsergebnis erzeugt wird. Wenn zwei `random()`-Funktionen denselben Basiswert verwenden, variieren ihre Ergebnisse gemeinsam nach einem vorhersagbaren Muster. Bei unterschiedlichen Basiswerten sind ihre Ergebnisse vollständig voneinander unabhängig.

Der optionale erste Parameter `<random-value-sharing>` steuert, wie der zufällige Basiswert gemeinsam verwendet wird. Dadurch lässt sich derselbe zufällig erzeugte Wert wiederverwenden, was für manche Gestaltungseffekte erforderlich ist. Als Wert können `auto`, das Schlüsselwort `element-shared`, ein benutzerdefiniertes {{cssxref("dashed-ident")}} oder `fixed <number>` verwendet werden. Auch die Kombination eines benutzerdefinierten {{cssxref("dashed-ident")}} mit dem Schlüsselwort `element-shared`, getrennt durch ein Leerzeichen, ist gültig.

#### Das Schlüsselwort `element-shared`

Alle `random()`-Funktionen mit dem Schlüsselwort `element-shared` verwenden für eine bestimmte Eigenschaft über alle Elemente hinweg denselben zufälligen Basiswert. Bei der folgenden Deklaration sind `.a`, `.b` und `.c` beispielsweise gleich große Rechtecke: Alle drei haben dieselbe zufällige Breite und dieselbe, unabhängig davon erzeugte zufällige Höhe:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Benutzerdefinierte Namen

Wenn Sie ein `<dashed-ident>` angeben (z. B. `--custom-name`), verwenden alle Stellen mit diesem Namen innerhalb der Stile eines Elements denselben zufälligen Basiswert. Stellen mit unterschiedlichen `<dashed-ident>`-Werten erhalten unterschiedliche zufällige Basiswerte. Bei der folgenden Deklaration sind `.a`, `.b` und `.c` Quadrate, da innerhalb jedes Elements alle Eigenschaften, die auf denselben Bezeichner verweisen, denselben Basiswert verwenden. Daher entspricht die Breite jedes Elements seiner Höhe. Beachten Sie, dass `.a`, `.b` und `.c` in diesem Fall unterschiedliche Größen haben: Der Basiswert wird zwischen Eigenschaften eines Elements geteilt, nicht zwischen Elementen.

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

#### `<dashed-ident>` und `element-shared` gemeinsam festlegen

Die Kombination eines `<dashed-ident>` mit `element-shared` (z. B. `random(--custom-name element-shared, 0, 100)`) verwendet denselben zufälligen Basiswert sowohl für Elemente als auch für Eigenschaften, die denselben `<random-value-sharing>`-Parameter verwenden. Im folgenden Beispiel sind `.a`, `.b` und `.c` gleich große Quadrate:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder ausdrücklich auf `auto` gesetzt wird, wird anhand des Eigenschaftsnamens und der Position automatisch ein Bezeichner erzeugt. Dieses Verhalten kann dazu führen, dass zufällige Basiswerte unerwartet gemeinsam verwendet werden.

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

Wenn für `<random-value-sharing>` der Standardwert gilt oder der Parameter ausdrücklich auf `auto` gesetzt ist, erzeugt der User Agent nach festen Regeln anhand von Eigenschaftsname und Reihenfolge automatisch einen Seed-Namen, auch _generated value sharing identifier_ genannt. Dadurch können `random()`-Funktionen denselben Seed-Namen und somit denselben zufälligen Basiswert erhalten. In diesem Beispiel hat die `random()`-Funktion im Wert der Eigenschaft `width` für `.foo` denselben erzeugten Bezeichner wie für `.foo:hover`. Der Wert ändert sich daher nicht zwischen den Zuständen. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen jeweils denselben erzeugten Bezeichner. Die ersten beiden Werte der `margin`-Kurzschreibweise bleiben deshalb beim Überfahren mit der Maus unverändert: Der obere und der rechte Außenabstand von `bar` bleiben gleich, während der untere und der linke Außenabstand unabhängige Zufallswerte erhalten. Um für jede `random()`-Funktion einen unabhängigen Wert zu erhalten, geben Sie jeweils ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt `random()` innerhalb des Werts einer benutzerdefinierten Eigenschaft eine Funktion. Die Eigenschaft verhält sich wie eine Textersetzung und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel „speichert“ die benutzerdefinierte Eigenschaft `--random-size` das zufällig erzeugte Ergebnis nicht. Beim Verarbeiten von `var(--random-size)` wird der Ausdruck praktisch durch `random(1px, 100px)` ersetzt. Jede Verwendung erzeugt somit einen neuen `random()`-Funktionsaufruf mit einem eigenen Basiswert, der vom jeweiligen Kontext abhängt.

Das gilt nicht, wenn `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} verwendet wird. Registrierte benutzerdefinierte Eigenschaften berechnen Zufallswerte und speichern sie.

Im folgenden Beispiel ist `--defaultSize` registriert. Daher sind `.a`, `.b` und `.c` gleich große Quadrate. Ihre Farben sind jedoch zufällig, da `--random-angle` nicht registriert wurde:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle über das Ergebnis. Das kann zu Ergebnissen führen, die nicht barrierefrei sind. Wenn Sie beispielsweise mit `random()` eine Textfarbe erzeugen, könnte deren Kontrast zum Hintergrund zu gering sein. Berücksichtigen Sie deshalb den Kontext, in dem `random()` verwendet wird, und stellen Sie sicher, dass die Ergebnisse stets barrierefrei sind.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel erzeugen wir zufällige Farben für einige runde Abzeichen, um die grundlegende Verwendung der Funktion `random()` zu zeigen.

#### HTML

Wir fügen fünf Abzeichen ein: eines mit der Klasse `desaturated` und zwei mit der Klasse `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturated"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Wir stellen die fünf Abzeichen als Kreise dar. Innerhalb einer {{cssxref("color_value/hsl()")}}-Farbfunktion verwenden wir `random()`, um den {{cssxref("angle")}} des {{cssxref("hue")}} festzulegen. Mit `element-shared` teilen sich das normale `badge` und das Abzeichen mit `desaturated` denselben zufälligen Basiswert. Letzteres erhält dadurch eine weniger gesättigte Version desselben {{cssxref("hue")}}. Für die Abzeichen mit `unique` überschreiben wir diese Einstellung und lassen den Parameter für die gemeinsame Verwendung des Basiswerts auf `auto` zurückfallen, damit sie jeweils einen unabhängigen zufälligen `hue` erhalten.

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

### Zufallswerte zwischen Eigenschaften gemeinsam verwenden

In diesem Beispiel erstellen wir einen Sternenhintergrund, um zu zeigen, wie ein `<dashed-ident>` verwendet wird, damit Eigenschaften eines Elements denselben Seed-Wert teilen.

#### HTML

Wir fügen fünf Partikel ein, die alle denselben Klassennamen verwenden.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Alle Partikel haben dieselben Stile. Mit `random()` legen wir die Werte für {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}} fest, um Größe und Position jedes Partikels zufällig zu bestimmen. Für `height` und `width` verwenden wir ein `<dashed-ident>` als Basiswert. So ist die Größe der Partikel innerhalb eines angegebenen Bereichs voneinander unabhängig, während `height` und `width` eines einzelnen Partikels gleich sind. Für die Eigenschaften `top` und `left` lassen wir den Basiswert auf `auto` zurückfallen, sodass er für jede Eigenschaft und jedes Element unabhängig ist.

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
- Modul [CSS-Einheiten und -Werte](/de/docs/Web/CSS/Guides/Values_and_units)
- {{jsxref("Math.random()")}}
- [Mit CSS random() würfeln](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) auf webkit.org (2025)
- [CSS-Almanach: random()](https://css-tricks.com/almanac/functions/r/random/) auf CSS-Tricks.com
