---
title: CSS-Funktion `random()`
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`random()`** erzeugt einen Zufallswert innerhalb eines angegebenen Bereichs. Optional können die möglichen Werte auf bestimmte Schrittweiten innerhalb dieses Bereichs begrenzt werden. Sie kann verwendet werden, wenn innerhalb eines Eigenschaftswerts ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} angegeben wird.

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
  - : Steuert, welche `random()`-Funktionen im Dokument einen gemeinsamen Zufalls-Ausgangswert, den sogenannten _Seed_, verwenden und welche unterschiedliche Werte erhalten.
    Der Wert wird auf eine der folgenden Arten angegeben:
    - `auto`
      - : `auto` ist der Standardwert und wird verwendet, wenn `<random-key>` weggelassen wird. Die Zufallsfunktionen erzeugen damit voneinander unabhängige Zufallswerte. Der Name des Zufallscaches und damit das Ergebnis unterscheidet sich zwischen den einzelnen `random()`-Aufrufen in einem Wert mit mehreren Komponenten, zwischen verschiedenen Eigenschaften und zwischen verschiedenen Elementen. Dies entspricht der Angabe `element-scoped property-index-scoped`.
    - `element-scoped`
      - : Fügt dem Namen des Zufallscaches eine elementspezifische Kennung hinzu. Wird die Funktion für mehrere Eigenschaften verwendet (z. B. `width` und `height`), verwenden beide Eigenschaften denselben Wert, aber jedes Element (z. B. `<div>`) erhält einen anderen Zufallswert.
    - `property-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen hinzu. Wird die Funktion für mehrere Eigenschaften verwendet (z. B. `width` und `height`), erhalten die Eigenschaften unterschiedliche Zufallswerte, aber jedes Element (z. B. `<div>`) verwendet dieselben Werte.
    - `property-index-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen und die Position der `random()`-Funktion unter allen Zufallsfunktionen im selben Eigenschaftswert hinzu. Dadurch erhält jeder Aufruf innerhalb derselben Deklaration einen eigenen Zufallswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Name für den Schlüssel des Zufallscaches (z. B. `--my-random-key`). Wird er allein verwendet, teilen sich alle Elemente und Eigenschaften mit derselben Kennung denselben Zufalls-Ausgangswert. In Kombination mit einem `*-scoped`-Schlüsselwort bestimmt dieses, wie der Wert gemeinsam verwendet wird.
    - `fixed <number>`
      - : Umgeht den Namen des Zufallscaches und verwendet `<number>` als Seed-Wert. Dieser muss zwischen `0` und `1` liegen, einschließlich `0`, aber ausschließlich `1`.

- `<calc-sum>, <calc-sum>`
  - : Werte vom Typ `<number>`, `<dimension>` oder `<percentage>` beziehungsweise Berechnungen, die einen dieser Typen ergeben. Sie legen den Mindest- beziehungsweise Höchstwert fest. Beide Werte müssen sich in denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösen lassen. Ist der Höchstwert kleiner als der Mindestwert, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Gibt die Schrittweite an. Ist dieser Parameter vorhanden und hat er denselben Datentyp wie der Mindest- und der Höchstwert, ist der Rückgabewert entweder der Mindestwert oder ein Wert, der sich ausgehend vom Mindestwert in Schritten der angegebenen Größe ergibt, bis zum Höchstwert.

### Rückgabewert

Gibt einen zufälligen Wert vom Typ `<number>`, `<dimension>` oder `<percentage>` zwischen dem Mindest- und dem Höchstwert einschließlich der Grenzen zurück. Der Typ entspricht dem der `<calc-sum>`-Parameter.

## Beschreibung

Die Funktion `random(SEED, MIN, MAX, STEP)` legt den Mindest- und Höchstwert sowie optional eine Schrittweite fest, die beim Mindestwert beginnt. Sie erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler `<random-key>`-Parameter](#random-key), ermöglicht es, Zufalls-Ausgangswerte zwischen verschiedenen Eigenschaften und Elementen gemeinsam zu verwenden oder voneinander zu unterscheiden.

Damit die Funktion gültig ist, müssen Mindestwert, Höchstwert und Schrittweite denselben Datentyp haben. Die Einheiten der zwei bis drei `<calc-sum>`-Parameter müssen nicht identisch sein, aber demselben Datentyp angehören, beispielsweise {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}.

### Zufalls-Ausgangswert

Der Zufalls-Ausgangswert funktioniert wie ein {{Glossary("RNG", "Seed für die Zufallserzeugung")}}. Er ist eine Ausgangszahl, aus der das endgültige Zufallsergebnis erzeugt wird. Wenn zwei `random()`-Funktionen denselben Ausgangswert verwenden, verändern sich ihre Ergebnisse gemeinsam nach einem vorhersagbaren Muster. Bei unterschiedlichen Ausgangswerten sind ihre Ergebnisse vollständig voneinander unabhängig.

Der optionale erste Parameter `<random-key>` steuert, wie der Zufalls-Ausgangswert gemeinsam verwendet wird. Möglich sind `auto`, ein Schlüsselwort für den Gültigkeitsbereich (`element-scoped`, `property-scoped` oder `property-index-scoped`), ein benutzerdefiniertes {{cssxref("dashed-ident")}}, `fixed <number>` oder ein `<dashed-ident>` in Kombination mit einem Schlüsselwort für den Gültigkeitsbereich.

#### Schlüsselwörter für den Gültigkeitsbereich

Allein verwendet steuern diese Schlüsselwörter ohne benutzerdefinierten Namen, welche Aufrufe einen Ausgangswert gemeinsam verwenden:

- `property-scoped` verwendet pro Eigenschaft denselben Ausgangswert für alle Elemente.
- `element-scoped` gibt jedem Element pro Eigenschaft einen eigenen Ausgangswert.
- `property-index-scoped` funktioniert wie `property-scoped`, unterscheidet aber zusätzlich `random()`-Aufrufe anhand ihrer Position innerhalb einer Kurzschreibweise.

Mit `property-scoped` werden `.a`, `.b` und `.c` zu identischen Rechtecken, da jedes Element denselben `width`-Wert und denselben `height`-Wert erhält:

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

Mit `element-scoped` erhielte dagegen jedes Element unabhängig bestimmte Werte für `width` und `height`.

`property-index-scoped` ist bei Kurzschreibweisen nützlich, wenn jede Position einen eigenen, gemeinsam verwendeten Wert benötigt:

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

Alle drei Elemente erhalten denselben oberen Randabstand, denselben rechten Randabstand und so weiter. Die vier Randabstände unterscheiden sich jedoch voneinander.

#### Benutzerdefinierte Namen

Ein allein verwendetes `<dashed-ident>` (z. B. `--custom-name`) teilt seinen Ausgangswert global: Jeder `random()`-Aufruf im Dokument mit derselben Kennung erhält dasselbe Ergebnis. Dadurch werden `.a`, `.b` und `.c` zu identischen Quadraten, da `width` und `height` jeweils denselben Wert ergeben:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

Kombinieren Sie ein `<dashed-ident>` mit einem Schlüsselwort für den Gültigkeitsbereich, um die gemeinsame Verwendung einzuschränken. `property-scoped` behält die gemeinsame Verwendung über alle Elemente hinweg bei, unterscheidet aber nach Eigenschaften:

```css
.a,
.b,
.c {
  width: random(--custom-name property-scoped, 10px, 200px);
  height: random(--custom-name property-scoped, 10px, 200px);
}
```

`element-scoped` verknüpft dagegen `width` und `height` innerhalb jedes Elements, gibt aber jedem Element einen eigenen Wert. So werden `.a`, `.b` und `.c` zu Quadraten unterschiedlicher Größe:

```css
.a,
.b,
.c {
  width: random(--custom-name element-shared, 10px, 200px);
  height: random(--custom-name element-shared, 10px, 200px);
}
```

#### Automatisches Verhalten

Wird der erste Parameter weggelassen oder ausdrücklich auf `auto` gesetzt, wird anhand des Eigenschaftsnamens und der Position automatisch eine Kennung erzeugt. Dieses Verhalten kann dazu führen, dass Zufalls-Ausgangswerte unerwartet gemeinsam verwendet werden.

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

Wenn für `<random-key>` der Standardwert gilt oder ausdrücklich `auto` angegeben wird, erzeugt der User Agent nach festen Regeln anhand des Eigenschaftsnamens und der Reihenfolge automatisch einen Seed-Namen, den sogenannten _Bezeichner für gemeinsam verwendete generierte Werte_. Deshalb können `random()`-Funktionen denselben Seed-Namen und somit denselben Zufalls-Ausgangswert erhalten. In diesem Beispiel ist der erzeugte Bezeichner für die `random()`-Funktion im Wert der Eigenschaft `width` bei `.foo` und `.foo:hover` identisch. Der Wert ändert sich daher beim Zustandswechsel nicht. Ebenso haben die jeweils ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen denselben erzeugten Bezeichner. Die ersten beiden Werte der `margin`-Kurzschreibweise bleiben beim Überfahren mit der Maus also unverändert: Der obere und rechte Randabstand von `bar` bleiben gleich, während der untere und linke Randabstand unabhängige Zufallswerte erhalten. Um für jede `random()`-Funktion einen unabhängigen Wert zu erhalten, geben Sie jeweils ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt eine `random()`-Funktion innerhalb des Werts einer benutzerdefinierten Eigenschaft eine Funktion. Die Eigenschaft wirkt dabei wie eine Textersetzung und speichert keinen einzelnen Rückgabewert.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel „speichert“ die benutzerdefinierte Eigenschaft `--random-size` das zufällig erzeugte Ergebnis nicht. Beim Verarbeiten von `var(--random-size)` wird der Ausdruck praktisch durch `random(1px, 100px)` ersetzt. Jede Verwendung erzeugt damit einen neuen `random()`-Funktionsaufruf mit einem eigenen Ausgangswert, der vom jeweiligen Kontext abhängt.

Anders verhält es sich, wenn `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} verwendet wird. Registrierte benutzerdefinierte Eigenschaften berechnen und speichern Zufallswerte.

Im folgenden Beispiel ist `--defaultSize` registriert. Deshalb werden `.a`, `.b` und `.c` gleich große Quadrate. Ihre Farben sind jedoch zufällig, da `--random-angle` nicht registriert wurde:

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle über das Ergebnis. Dies kann zu nicht barrierefreien Ergebnissen führen. Wenn Sie beispielsweise mit `random()` eine Textfarbe erzeugen, könnte ihr Kontrast zum Hintergrund zu gering sein. Berücksichtigen Sie daher den Kontext, in dem `random()` verwendet wird, und stellen Sie sicher, dass die Ergebnisse stets barrierefrei sind.

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

Wir stellen die fünf Abzeichen als Kreise dar. Innerhalb der Farbfunktion {{cssxref("color_value/hsl()")}} verwenden wir `random()`, um den {{cssxref("angle")}} des {{cssxref("hue")}} festzulegen. Mit `property-scoped` teilen sich das normale `badge` und das Abzeichen mit `desaturated` denselben Zufalls-Ausgangswert. Letzteres ist dadurch eine weniger gesättigte Variante desselben {{cssxref("hue")}}. Für die Abzeichen mit `unique` überschreiben wir dies und lassen den Parameter für die gemeinsame Verwendung des Ausgangswerts auf dem Standardwert `auto`, damit sie einen unabhängig bestimmten `hue` erhalten.

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

In diesem Beispiel erstellen wir einen Sternenhintergrund. Er zeigt, wie sich ein `<dashed-ident>` mit `element-scoped` kombinieren lässt, damit Eigenschaften innerhalb eines Elements denselben Zufalls-Ausgangswert verwenden, ohne ihn mit anderen Elementen zu teilen.

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

Alle Partikel haben dieselben Styles. Mit der Funktion `random()` bestimmen wir zufällige Werte für {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}} und legen so Größe und Position jedes Partikels fest. Für `height` und `width` kombinieren wir ein `<dashed-ident>` mit `element-scoped`. Dadurch ist jedes Partikel kreisförmig (seine Höhe entspricht seiner Breite), seine Größe wird aber unabhängig von den anderen bestimmt. Für `top` und `left` bleibt der Standardwert `auto` bestehen, sodass die Position auf jeder Achse unabhängig bestimmt wird.

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
