---
title: Die CSS-Funktion `random()`
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 5cea7df435db1905b06d693b0192ef1e2166d6a7
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`random()`** erzeugt einen zufälligen Wert innerhalb eines angegebenen Bereichs. Optional lassen sich die möglichen Werte auf Schritte einer bestimmten Größe innerhalb dieses Bereichs beschränken. Die Funktion kann verwendet werden, wenn innerhalb eines Eigenschaftswerts ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} angegeben wird.

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
  - : Steuert, welche `random()`-Funktionen im Dokument einen gemeinsamen zufälligen Ausgangswert, den sogenannten _Seed_, verwenden und welche unterschiedliche Werte erhalten. Der Parameter wird als einer der folgenden Werte angegeben:
    - `auto`
      - : Der Wert `auto` ist die Standardeinstellung und wird verwendet, wenn `<random-key>` weggelassen wird. Diese Zufallsfunktion erzeugt unabhängige Zufallswerte. Der Name des Zufallscaches und damit das Ergebnis unterscheiden sich für jede `random()`-Instanz in einem aus mehreren Komponenten bestehenden Wert, für verschiedene Eigenschaften und für verschiedene Elemente. Dies entspricht der Angabe von `element-scoped property-index-scoped`.
    - `element-scoped`
      - : Fügt dem Namen des Zufallscaches einen elementspezifischen Bezeichner hinzu. Wird die Funktion für mehrere Eigenschaften verwendet (z. B. `width` und `height`), verwenden beide Eigenschaften denselben Wert, aber jedes Element (z. B. `<div>`) erhält andere Zufallswerte.
    - `property-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen hinzu. Wird die Funktion für mehrere Eigenschaften verwendet (z. B. `width` und `height`), erhalten die Eigenschaften unterschiedliche Zufallswerte, aber jedes Element (z. B. `<div>`) verwendet dieselben Zufallswerte.
    - `property-index-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen und den Index der `random()`-Funktion unter allen im selben Eigenschaftswert verwendeten Zufallsfunktionen hinzu. Dadurch erhält jede Instanz in derselben Deklaration einen anderen Zufallswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Name für den Zufallscacheschlüssel (z. B. `--my-random-key`). Wird er allein verwendet, teilen sich alle Elemente und Eigenschaften mit demselben Bezeichner denselben zufälligen Ausgangswert. In Kombination mit einem `*-scoped`-Schlüsselwort bestimmt das Schlüsselwort, wie der Wert geteilt wird.
    - `fixed <number>`
      - : Umgeht den Namen des Zufallscaches und verwendet `<number>` als Seed-Wert. Dieser muss zwischen `0` und `1` liegen, einschließlich `0`, aber ausschließlich `1`.

- `<calc-sum>, <calc-sum>`
  - : Werden als Werte vom Typ `<number>`, `<dimension>` oder `<percentage>` oder als Berechnungen angegeben, die zu einem dieser Typen aufgelöst werden. Sie definieren den Mindest- beziehungsweise Höchstwert. Beide Werte müssen sich zum selben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösen lassen. Ist der Höchstwert kleiner als der Mindestwert, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Gibt die Schrittweite an. Wenn dieser Parameter vorhanden ist und denselben Datentyp wie die `<calc-sum>`-Werte für Mindest- und Höchstwert hat, ist der Rückgabewert entweder der Mindestwert oder ein Wert, der sich durch Vielfache der Schrittweite vom Mindestwert aus ergibt, bis zum Höchstwert.

### Rückgabewert

Gibt einen zufälligen Wert vom Typ `<number>`, `<dimension>` oder `<percentage>` zwischen dem Mindest- und Höchstwert einschließlich der Grenzen zurück. Der Typ entspricht dem der `<calc-sum>`-Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` legt den Mindest- und Höchstwert sowie optional Schrittweiten fest, die beim Mindestwert beginnen. Sie erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler Parameter `<random-key>`](#random-key), ermöglicht es, zufällige Ausgangswerte über verschiedene Eigenschaften und Elemente hinweg zu teilen oder voneinander zu unterscheiden.

Damit die Funktion gültig ist, müssen Mindestwert, Höchstwert und Schrittweite denselben Datentyp haben. Die Einheiten der zwei bis drei `<calc-sum>`-Parameter müssen nicht identisch sein. Sie müssen aber demselben Datentyp angehören, etwa {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}.

### Zufälliger Ausgangswert

Der zufällige Ausgangswert funktioniert wie ein {{Glossary("RNG", "Seed für die Zufallsgenerierung")}}. Er ist eine Ausgangszahl, aus der das endgültige Zufallsergebnis erzeugt wird. Wenn zwei `random()`-Funktionen denselben Ausgangswert verwenden, verändern sich ihre Ergebnisse gemeinsam nach einem vorhersehbaren Muster. Bei unterschiedlichen Ausgangswerten sind ihre Ergebnisse vollständig voneinander unabhängig.

Der optionale erste Parameter `<random-key>` steuert, wie der zufällige Ausgangswert geteilt wird. Er kann `auto`, ein Schlüsselwort für den Geltungsbereich (`element-scoped`, `property-scoped` oder `property-index-scoped`), ein benutzerdefinierter {{cssxref("dashed-ident")}}, `fixed <number>` oder ein mit einem Schlüsselwort für den Geltungsbereich kombinierter `<dashed-ident>` sein.

#### Schlüsselwörter für den Geltungsbereich

Allein verwendet, steuern die Schlüsselwörter für den Geltungsbereich die gemeinsame Nutzung ohne benutzerdefinierten Namen:

- `property-scoped` teilt einen Ausgangswert für jede Eigenschaft über alle Elemente hinweg.
- `element-scoped` gibt jedem Element einen eigenen Ausgangswert für jede Eigenschaft.
- `property-index-scoped` funktioniert wie `property-scoped`, unterscheidet `random()`-Aufrufe aber zusätzlich nach ihrer Position innerhalb einer Kurzschreibweise.

Mit `property-scoped` werden `.a`, `.b` und `.c` zu identischen Rechtecken, da jedes Element denselben `width`-Wert und denselben `height`-Wert erhält:

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

Mit `element-scoped` würden `width` und `height` für jedes Element unabhängig voneinander bestimmt.

Das Schlüsselwort `property-index-scoped` ist bei Kurzschreibweisen nützlich, wenn jede Position einen eigenen gemeinsam genutzten Wert benötigt:

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

Ein allein verwendeter `<dashed-ident>` (z. B. `--custom-name`) teilt seinen Ausgangswert global: Jeder `random()`-Aufruf im Dokument mit demselben Bezeichner erhält dasselbe Ergebnis. Dadurch werden `.a`, `.b` und `.c` zu identischen Quadraten, da jeder `width`- und `height`-Wert zum selben Wert aufgelöst wird:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

Kombinieren Sie einen `<dashed-ident>` mit einem Schlüsselwort für den Geltungsbereich, um diese gemeinsame Nutzung einzuschränken. `property-scoped` behält die globale gemeinsame Nutzung über Elemente hinweg bei, trennt die Werte aber nach Eigenschaften:

```css
.a,
.b,
.c {
  width: random(--custom-name property-scoped, 10px, 200px);
  height: random(--custom-name property-scoped, 10px, 200px);
}
```

`element-scoped` hält dagegen `width` und `height` innerhalb jedes Elements gekoppelt, gibt aber jedem Element einen eigenen Wert. So werden `.a`, `.b` und `.c` zu unterschiedlich großen Quadraten:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wenn der erste Parameter weggelassen oder ausdrücklich auf `auto` gesetzt wird, wird anhand des Eigenschaftsnamens und der Position automatisch ein Bezeichner erzeugt. Dieses Verhalten kann dazu führen, dass zufällige Ausgangswerte unerwartet gemeinsam genutzt werden.

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

Wenn `<random-key>` standardmäßig oder ausdrücklich auf `auto` gesetzt ist, erzeugt der User Agent nach festen Regeln anhand des Eigenschaftsnamens und der Reihenfolge automatisch einen Seed-Namen, einen sogenannten _Bezeichner für die gemeinsame Nutzung erzeugter Werte_. Daher können `random()`-Funktionen denselben Seed-Namen und somit denselben zufälligen Ausgangswert erhalten. In diesem Beispiel ist der erzeugte Bezeichner für die `random()`-Funktion im Wert der Eigenschaft `width` bei `.foo` und `.foo:hover` derselbe. Der Wert ändert sich deshalb zwischen den Zuständen nicht. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen jeweils denselben erzeugten Bezeichner. Das bedeutet, dass die ersten beiden Werte der `margin`-Kurzschreibweise beim Bewegen des Mauszeigers über das Element unverändert bleiben: Der obere und der rechte Außenabstand von `bar` bleiben gleich, während der untere und der linke Außenabstand unabhängige Zufallswerte erhalten. Geben Sie einen eindeutigen {{cssxref("dashed-ident")}} an, damit jede `random()`-Funktion einen unabhängigen Wert erhält.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt der Wert einer benutzerdefinierten Eigenschaft, die eine `random()`-Funktion enthält, eine Funktion. Sie wirkt wie eine Textersetzung und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel „speichert“ die benutzerdefinierte Eigenschaft `--random-size` das zufällig erzeugte Ergebnis nicht. Beim Verarbeiten von `var(--random-size)` wird der Ausdruck praktisch durch `random(1px, 100px)` ersetzt. Jede Verwendung erzeugt daher einen neuen `random()`-Funktionsaufruf mit einem eigenen Ausgangswert, der vom jeweiligen Kontext abhängt.

Anders verhält es sich, wenn `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} verwendet wird. Registrierte benutzerdefinierte Eigenschaften berechnen Zufallswerte und speichern sie.

Da `--defaultSize` in diesem Beispiel registriert ist, werden `.a`, `.b` und `.c` gleich große Quadrate. Ihre Farben werden jedoch zufällig bestimmt, da `--random-angle` nicht registriert wurde:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle über das Ergebnis. Das kann zu nicht barrierefreien Ergebnissen führen. Wenn Sie beispielsweise mit `random()` eine Textfarbe erzeugen, könnte deren Kontrast zum Hintergrund zu gering sein. Achten Sie deshalb auf den Kontext, in dem Sie `random()` verwenden, und stellen Sie sicher, dass die Ergebnisse stets barrierefrei sind.

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

Wir stellen die fünf Abzeichen als Kreise dar. Innerhalb einer {{cssxref("color_value/hsl()")}}-Farbfunktion verwenden wir `random()`, um den {{cssxref("angle")}} des {{cssxref("hue")}} festzulegen. Mit `property-scoped` teilen sich das standardmäßige `badge` und das Abzeichen mit `desaturated` denselben zufälligen Ausgangswert. Letzteres ist dadurch eine weniger gesättigte Version desselben {{cssxref("hue")}}. Für die Abzeichen mit `unique` überschreiben wir dies anschließend: Indem wir den Parameter für die gemeinsame Nutzung des Ausgangswerts auf der Standardeinstellung `auto` belassen, erhalten sie einen unabhängigen zufälligen `hue`.

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

### Gemeinsame Nutzung zufälliger Werte zwischen Eigenschaften

In diesem Beispiel erstellen wir einen sternenbesetzten Hintergrund. Damit zeigen wir, wie sich ein `<dashed-ident>` mit `element-scoped` kombinieren lässt, um innerhalb eines Elements einen zufälligen Ausgangswert zwischen Eigenschaften zu teilen, ohne ihn mit anderen Elementen zu teilen.

#### HTML

Wir fügen fünf Partikel ein, die alle denselben Klassennamen haben.

```html
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
```

#### CSS

Alle Partikel haben dieselben Stile. Mit der Funktion `random()` bestimmen wir die Werte für {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}}, um Größe und Position jedes Partikels zufällig festzulegen. Für `height` und `width` kombinieren wir einen `<dashed-ident>` mit `element-scoped`. So ist jedes Partikel ein Kreis (seine Höhe entspricht seiner Breite), dessen Größe unabhängig von den anderen bestimmt wird. Für `top` und `left` bleibt die Standardeinstellung `auto` bestehen, sodass jede Achse unabhängig positioniert wird.

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
