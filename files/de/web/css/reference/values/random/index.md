---
title: CSS-Funktion `random()`
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: 384b5a2cd42f6ed77add9a1bd96321468456a3cb
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`random()`** erzeugt einen zufälligen Wert innerhalb eines angegebenen Bereichs. Optional können die möglichen Werte auf Schrittintervalle innerhalb dieses Bereichs beschränkt werden. Sie kann verwendet werden, wenn innerhalb eines Eigenschaftswerts ein {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;resolution&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} oder {{CSSxRef("&lt;integer&gt;")}} angegeben wird.

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
  - : Steuert, welche `random()`-Funktionen im Dokument einen zufälligen Ausgangswert, auch _Seed_ genannt, gemeinsam verwenden und welche unterschiedliche Werte erhalten. Der Parameter wird als einer der folgenden Werte angegeben:
    - `auto`
      - : `auto` ist der Standardwert und wird verwendet, wenn `<random-key>` weggelassen wird. Diese Funktion erzeugt unabhängige Zufallswerte. Der Name des Zufallscaches und damit das Ergebnis unterscheidet sich zwischen jeder `random()`-Instanz in einem Wert mit mehreren Komponenten, zwischen verschiedenen Eigenschaften und zwischen verschiedenen Elementen. Dies entspricht der Angabe von `element-scoped property-index-scoped`.
    - `element-scoped`
      - : Fügt dem Namen des Zufallscaches eine elementspezifische Kennung hinzu. Bei Verwendung für mehrere Eigenschaften (z. B. `width` und `height`) verwenden beide Eigenschaften denselben Wert, aber jedes Element (z. B. `<div>`) erhält andere Zufallswerte.
    - `property-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen hinzu. Bei Verwendung für mehrere Eigenschaften (z. B. `width` und `height`) erhält jede Eigenschaft einen anderen Zufallswert, aber jedes Element (z. B. `<div>`) verwendet dieselben Zufallswerte.
    - `property-index-scoped`
      - : Fügt dem Namen des Zufallscaches den Eigenschaftsnamen und die Position der `random()`-Funktion unter allen Zufallsfunktionen hinzu, die im selben Eigenschaftswert verwendet werden. Dadurch erhält jede Instanz in derselben Deklaration einen anderen Zufallswert.
    - {{cssxref("dashed-ident")}}
      - : Ein benutzerdefinierter Name für den Schlüssel des Zufallscaches (z. B. `--my-random-key`). Allein verwendet, wird derselbe zufällige Ausgangswert von allen Elementen und Eigenschaften mit derselben Kennung gemeinsam genutzt. In Kombination mit einem `*-scoped`-Schlüsselwort bestimmt dieses Schlüsselwort, wie der Wert gemeinsam genutzt wird.
    - `fixed <number>`
      - : Umgeht den Namen des Zufallscaches und verwendet `<number>` als Seed-Wert. Der Wert liegt zwischen `0` und `1`, einschließlich 0 und ausschließlich 1.

- `<calc-sum>, <calc-sum>`
  - : Werden als `<number>`-, `<dimension>`- oder `<percentage>`-Werte beziehungsweise als Berechnungen angegeben, deren Ergebnis einem dieser Typen entspricht. Sie definieren den Mindest- beziehungsweise Höchstwert. Beide Werte müssen sich in denselben [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) auflösen lassen. Ist der Höchstwert kleiner als der Mindestwert, gibt die Funktion den ersten `<calc-sum>`-Wert zurück.

- `<calc-sum>` {{optional_inline}}
  - : Gibt das Schrittintervall an. Wenn dieser Parameter vorhanden ist und denselben Datentyp wie die `<calc-sum>`-Werte für Mindest- und Höchstwert hat, ist der Rückgabewert entweder der Mindestwert oder ein Wert, der sich durch wiederholtes Addieren der Schrittweite zum Mindestwert ergibt, bis zum Höchstwert.

### Rückgabewert

Gibt einen zufälligen `<number>`-, `<dimension>`- oder `<percentage>`-Wert zwischen dem Mindest- und dem Höchstwert einschließlich dieser Grenzen zurück. Der Rückgabewert hat denselben Typ wie die `<calc-sum>`-Parameter.

## Beschreibung

Mit der Funktion `random(SEED, MIN, MAX, STEP)` werden der Mindest- und der Höchstwert sowie optional eine Schrittweite angegeben, ausgehend vom Mindestwert. Die Funktion erzeugt ein zufälliges Ergebnis innerhalb des angegebenen Bereichs. Der Seed, ein [optionaler `<random-key>`-Parameter](#random-key), ermöglicht es, zufällige Ausgangswerte zwischen verschiedenen Eigenschaften und Elementen gemeinsam zu verwenden oder voneinander zu unterscheiden.

Damit die Funktion gültig ist, müssen Mindestwert, Höchstwert und Schrittweite denselben Datentyp haben. Die Einheiten der zwei bis drei `<calc-sum>`-Parameter müssen nicht übereinstimmen. Sie müssen aber demselben Datentyp angehören, beispielsweise {{cssxref("number")}}, {{cssxref("percentage")}}, {{cssxref("length")}}, {{cssxref("angle")}}, {{cssxref("time")}} oder {{cssxref("frequency")}}.

### Zufälliger Ausgangswert

Der zufällige Ausgangswert funktioniert wie ein {{Glossary("RNG", "Seed für Zufallszahlen")}}. Er ist eine Ausgangszahl, aus der das endgültige Zufallsergebnis erzeugt wird. Wenn zwei `random()`-Funktionen denselben Ausgangswert verwenden, ändern sich ihre Ergebnisse gemeinsam nach einem vorhersagbaren Muster. Bei unterschiedlichen Ausgangswerten sind ihre Ergebnisse vollständig unabhängig voneinander.

Der optionale erste Parameter `<random-key>` steuert, wie der zufällige Ausgangswert gemeinsam genutzt wird. Er kann `auto`, ein Schlüsselwort für den Geltungsbereich (`element-scoped`, `property-scoped` oder `property-index-scoped`), ein benutzerdefiniertes {{cssxref("dashed-ident")}}, `fixed <number>` oder ein mit einem Schlüsselwort für den Geltungsbereich kombiniertes `<dashed-ident>` sein.

#### Schlüsselwörter für den Geltungsbereich

Allein verwendet, steuern die Schlüsselwörter für den Geltungsbereich die gemeinsame Nutzung ohne benutzerdefinierten Namen:

- `property-scoped` verwendet einen Ausgangswert für alle Elemente gemeinsam, jeweils pro Eigenschaft.
- `element-scoped` gibt jedem Element einen eigenen Ausgangswert, jeweils pro Eigenschaft.
- `property-index-scoped` funktioniert wie `property-scoped`, unterscheidet `random()`-Aufrufe aber zusätzlich nach ihrer Position innerhalb einer Kurzschreibweise.

Durch das Schlüsselwort `property-scoped` werden `.a`, `.b` und `.c` zu identischen Rechtecken, da jedes Element denselben `width`-Wert und denselben `height`-Wert erhält:

```css
.a,
.b,
.c {
  width: random(property-scoped, 10px, 200px);
  height: random(property-scoped, 10px, 200px);
}
```

Mit `element-scoped` würde jedes Element einen eigenen, unabhängig bestimmten `width`-Wert und `height`-Wert erhalten.

Das Schlüsselwort `property-index-scoped` ist in Kurzschreibweisen nützlich, wenn für jede Position ein eigener gemeinsam genutzter Wert benötigt wird:

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

Ein allein verwendetes `<dashed-ident>` (z. B. `--custom-name`) verwendet seinen Ausgangswert global gemeinsam: Jeder `random()`-Aufruf mit derselben Kennung erhält überall im Dokument dasselbe Ergebnis. Dadurch werden `.a`, `.b` und `.c` zu identischen Quadraten, da jeder `width`- und `height`-Wert zum selben Wert aufgelöst wird:

```css
.a,
.b,
.c {
  width: random(--custom-name, 10px, 200px);
  height: random(--custom-name, 10px, 200px);
}
```

Kombinieren Sie ein `<dashed-ident>` mit einem Schlüsselwort für den Geltungsbereich, um die gemeinsame Nutzung einzuschränken. `property-scoped` sorgt dafür, dass der Ausgangswert elementübergreifend gemeinsam genutzt wird, unterscheidet ihn aber nach Eigenschaft:

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

Wenn der erste Parameter weggelassen oder ausdrücklich auf `auto` gesetzt wird, wird eine Kennung aus dem Eigenschaftsnamen und der Position automatisch erzeugt. Dieses Verhalten kann dazu führen, dass zufällige Ausgangswerte unerwartet gemeinsam genutzt werden.

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

Wenn `<random-key>` standardmäßig oder ausdrücklich auf `auto` gesetzt ist, erzeugt der User-Agent nach einheitlichen Regeln anhand des Eigenschaftsnamens und der Reihenfolge automatisch einen Seed-Namen, auch _Kennung für gemeinsam genutzte generierte Werte_ genannt. Dadurch können `random()`-Funktionen denselben Seed-Namen und somit denselben zufälligen Ausgangswert erhalten. In diesem Beispiel ist die Kennung für gemeinsam genutzte generierte Werte der `random()`-Funktion im `width`-Eigenschaftswert für `.foo` und `.foo:hover` identisch. Daher ändert sich der Wert zwischen den Zuständen nicht. Ebenso haben die ersten beiden `random()`-Funktionen in beiden `margin`-Deklarationen dieselbe Kennung. Die ersten beiden Werte der `margin`-Kurzschreibweise bleiben beim Überfahren mit der Maus folglich unverändert: Der obere und der rechte Randabstand von `bar` bleiben gleich, während der untere und der linke Randabstand unabhängige Zufallswerte erhalten. Um für jede `random()`-Funktion einen unabhängigen Wert zu erhalten, geben Sie jeweils ein eindeutiges {{cssxref("dashed-ident")}} an.

### Benutzerdefinierte Eigenschaften

Wie bei allen CSS-Funktionen bleibt der Wert eine Funktion, wenn eine `random()`-Funktion im Wert einer benutzerdefinierten Eigenschaft enthalten ist. Er verhält sich wie ein Textersetzungsmechanismus, statt einen einzelnen Rückgabewert zu speichern.

```css
--random-size: random(1px, 100px);
```

In diesem Beispiel „speichert“ die benutzerdefinierte Eigenschaft `--random-size` das zufällig erzeugte Ergebnis nicht. Beim Verarbeiten von `var(--random-size)` wird dieser Ausdruck faktisch durch `random(1px, 100px)` ersetzt. Jede Verwendung erzeugt somit einen neuen `random()`-Funktionsaufruf mit einem eigenen Ausgangswert, der vom jeweiligen Kontext abhängt.

Anders verhält es sich, wenn `random()` bei der Registrierung einer benutzerdefinierten Eigenschaft mit {{cssxref("@property")}} verwendet wird. Registrierte benutzerdefinierte Eigenschaften berechnen und speichern Zufallswerte.

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

Da `random()` einen unbekannten Wert innerhalb eines Bereichs erzeugen kann, haben Sie keine vollständige Kontrolle über das Ergebnis. Das kann zu Problemen mit der Barrierefreiheit führen. Wenn Sie beispielsweise mit `random()` eine Textfarbe erzeugen, könnte diese einen zu geringen Kontrast zum Hintergrund aufweisen. Achten Sie daher auf den Kontext, in dem Sie `random()` verwenden, und stellen Sie sicher, dass die Ergebnisse stets barrierefrei sind.

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

Wir stellen die fünf Abzeichen als Kreise dar. Innerhalb einer {{cssxref("color_value/hsl()")}}-Farbfunktion verwenden wir `random()`, um den {{cssxref("angle")}} des {{cssxref("hue")}} festzulegen. Mit `property-scoped` verwenden das Standardabzeichen `badge` und das Abzeichen `desaturated` denselben zufälligen Ausgangswert. Letzteres erhält dadurch eine weniger gesättigte Variante desselben {{cssxref("hue")}}. Für die Abzeichen mit `unique` überschreiben wir diese Einstellung: Der Parameter für die gemeinsame Nutzung des Ausgangswerts bleibt auf dem Standardwert `auto`, sodass sie einen unabhängigen zufälligen `hue` erhalten.

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

{{EmbedLiveSample('Generate random colors for circular badge', '100%', '300px')}}

### Gemeinsame Nutzung von Zufallswerten zwischen Eigenschaften

In diesem Beispiel erstellen wir einen Sternenhintergrund. Er zeigt, wie sich ein `<dashed-ident>` mit `element-scoped` kombinieren lässt, um einen zufälligen Ausgangswert zwischen den Eigenschaften eines einzelnen Elements gemeinsam zu verwenden, ohne ihn mit anderen Elementen zu teilen.

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

Alle Partikel haben dieselben Styles. Mit der Funktion `random()` legen wir die Werte für {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("top")}} und {{cssxref("left")}} fest, um Größe und Position jedes Partikels zufällig zu bestimmen. Für `height` und `width` kombinieren wir ein `<dashed-ident>` mit `element-scoped`. Dadurch ist jedes Partikel ein Kreis (seine Höhe entspricht seiner Breite), dessen Größe unabhängig von den anderen bestimmt wird. Für `top` und `left` bleibt der Standardwert `auto` bestehen, sodass die Position auf jeder Achse unabhängig bestimmt wird.

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
