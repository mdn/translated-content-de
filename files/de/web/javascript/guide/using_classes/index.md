---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache – das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) entspricht die Erstellung von Objekthierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr den Mustern anderer objektorientierter Sprachen wie Java. In diesem Abschnitt zeigen wir, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypischen Vererbungsmechanismus – alle Muster sind in eine prototypbasierte Vererbung konvertierbar. Klassen selbst sind ebenfalls normale JavaScript-Werte und haben ihre eigenen Prototypketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden – Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und erörtern, welche Semantiken Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypsystem eintauchen möchten, können Sie den Leitfaden zu [Vererbung und Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel setzt voraus, dass Sie bereits mit JavaScript einigermaßen vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrungen mit JavaScript gesammelt oder den Leitfaden verfolgt haben, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie keine erstellt haben. Zum Beispiel könnte Ihnen das [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Numbers_and_dates):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Es war einmal...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine [Methode](/de/docs/Glossary/Method) [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die eine Zeichenkette zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wird, die andere direkt von der `Date`-Klasse _selbst_ aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen davon ableiten, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator.
- Jedes Objekt hat einige vom `Klasse` hinzugefügte Eigenschaften (Daten oder Methoden).
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zur Interaktion mit Instanzen verwendet werden.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklaration einer Klasse

Klassen werden normalerweise mit _Klassendeklarationen_ erstellt.

```js
class MyClass {
  // Klassenkörper...
}
```

Innerhalb eines Klassenkörpers stehen eine Reihe von Funktionen zur Verfügung.

```js
class MyClass {
  // Konstruktor
  constructor() {
    // Konstruktor-Körper
  }
  // Instanzfeld
  myField = "foo";
  // Instanzmethode
  myMethod() {
    // myMethod-Körper
  }
  // Statisches Feld
  static myStaticField = "bar";
  // Statische Methode
  static myStaticMethod() {
    // myStaticMethod-Körper
  }
  // Statischer Block
  static {
    // Statischer Initialisierungscode
  }
  // Felder, Methoden, statische Felder und statische Methoden haben alle
  // "private" Formen
  #myPrivateField = "bar";
}
```

Wenn Sie aus einer Welt vor ES6 kommen, sind Sie möglicherweise mehr daran gewöhnt, Funktionen als Konstruktoren zu verwenden. Das oben genannte Muster würde ungefähr in das Folgende mit Funktionskonstruktoren übersetzt:

```js
function MyClass() {
  this.myField = "foo";
  // Konstruktor-Körper
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod-Körper
};
MyClass.prototype.myMethod = function () {
  // myMethod-Körper
};

(function () {
  // Statischer Initialisierungscode
})();
```

> [!NOTE]
> Private Felder und Methoden sind neue Funktionen in Klassen ohne triviale Entsprechung in Funktionskonstruktoren.

### Konstruieren einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` zu "rufen", führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Klass Konstruktor MyClass kann nicht ohne 'new' aufgerufen werden
```

### Hoisting von Klassendeklarationen

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht [gehoben](/de/docs/Glossary/Hoisting) (oder, in einigen Interpretationen, gehoben, aber mit dem Einschränkungen der zeitlichen Totzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: 'MyClass' kann nicht vor der Initialisierung aufgerufen werden

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Klassenkörper...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur für den Klassenkörper sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Klassenkörper. Hier verweisen MyClass und MyClassLongerName auf dieselbe Klasse.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName ist nicht definiert
```

## Konstruktor

Die vielleicht wichtigste Aufgabe einer Klasse besteht darin, als "Fabrik" für Objekte zu agieren. Wenn wir beispielsweise den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt liefert, das das Datum darstellt, das wir eingegeben haben – welches wir dann mit anderen Methoden manipulieren können, die die Instanz offenlegt. In Klassen wird die Instanzerstellung vom [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Zum Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben, indem sie ein [RGB](/de/docs/Glossary/RGB)-Triplet übergeben.

```js
class Color {
  constructor(r, g, b) {
    // Weisen Sie die RGB-Werte als Eigenschaft von `this` zu.
    this.values = [r, g, b];
  }
}
```

Öffnen Sie die Entwicklertools Ihres Browsers, fügen Sie den obigen Code in die Konsole ein und erstellen Sie dann eine Instanz:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Sie sollten eine Ausgabe wie diese sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der RGB-Werte enthält, die Sie eingegeben haben. Das ist ziemlich gleichbedeutend mit dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Der Konstruktor hat die gleiche Syntax wie eine normale Funktion – was bedeutet, dass Sie andere Syntaxen wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden können:

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// Erstellt eine Instanz mit der gleichen Struktur wie oben.
```

Jedes Mal, wenn Sie `new` aufrufen, wird eine andere Instanz erstellt.

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

Innerhalb eines Klassenkonstruktors verweist der Wert von `this` auf die neu erstellte Instanz. Sie können ihr Eigenschaften zuweisen oder bestehende Eigenschaften lesen (insbesondere Methoden – auf diese kommen wir als Nächstes).

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert vom Konstruktor zurückzugeben – denn wenn Sie einen nicht-primären Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [dessen Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

```js
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}

console.log(new MyClass().myField); // undefined
```

## Instanzmethoden

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht sehr von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Der Vorteil von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden zu Instanzenzuweisen.

Zum Beispiel können Sie für `Date`-Instanzen eine Reihe von Methoden verwenden, um unterschiedliche Informationen aus einem einzelnen Datum zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die jeweiligen `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) einstellen.

Für unsere eigene `Color`-Klasse können wir eine Methode namens `getRed` hinzufügen, die den Rotwert der Farbe zurückgibt.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

Ohne Methoden könnten Sie versucht sein, die Funktion innerhalb des Konstruktors zu definieren:

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}
```

Das funktioniert auch. Ein Problem besteht jedoch darin, dass bei jeder Erstellung einer `Color`-Instanz eine neue Funktion erstellt wird, selbst wenn sie alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird bei der Verwendung einer Methode diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, ihr Verhalten kann jedoch unterschiedlich sein, wenn sie von verschiedenen Instanzen aufgerufen wird, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, wo diese Methode gespeichert ist – sie ist im Prototyp aller Instanzen oder `Color.prototype` definiert, was im Detail in [Vererbung und Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) erklärt wird.

Ebenso können wir eine neue Methode namens `setRed` erstellen, die den Rotwert der Farbe setzt.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(0);
console.log(red.getRed()); // 0; natürlich sollte es jetzt "Schwarz" genannt werden!
```

## Private Felder

Sie fragen sich vielleicht: Warum sollten wir die Mühe machen, `getRed` und `setRed` Methoden zu verwenden, wenn wir direkt auf das `values`-Array der Instanz zugreifen können?

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
red.values[0] = 0;
console.log(red.values[0]); // 0
```

Es gibt eine Philosophie in der objektorientierten Programmierung, die als "Kapselung" bekannt ist. Dies bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden, um damit zu interagieren. Stellen Sie sich vor, wir hätten plötzlich beschlossen, Farben stattdessen als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

```js
class Color {
  constructor(r, g, b) {
    // values ist jetzt ein HSL-Array!
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0; Es ist nicht mehr 255, da der H-Wert für reines Rot 0 ist
```

Die Annahme des Nutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen, und es könnte ihre Logik zum Scheitern bringen. Wenn Sie also ein Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor dem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers beim Durchführen von "harmlosen Refactorings" bricht. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erreicht.

Ein private Feld ist ein Bezeichner, der mit `#` (dem Hashtagsymbol) vorangestellt ist. Das Hashtag ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass eine private Eigenschaft nie Namenskonflikte mit einer öffentlichen Eigenschaft haben kann. Um in der Klasse auf ein privates Feld zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können nicht auf die Schnelle eine private Eigenschaft erstellen). Davon abgesehen ist ein privates Feld nahezu gleichwertig mit einer normalen Eigenschaft.

```js
class Color {
  // Deklarieren: Jede Color-Instanz hat ein privates Feld namens #values.
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255
```

Der Zugriff auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, so kann sie einige statische Analysen durchführen und alle Verwendungen von privaten Feldern finden, bevor der Code überhaupt ausgeführt wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Privatfeld '#values' muss in einer umschließenden Klasse deklariert werden
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-spezifische Lockerung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um sie außerhalb der Klasse abzurufen. Dies bedeutet, dass Sie sicher sind, und Refactorings an den privaten Feldern Ihrer Klasse vornehmen können, solange das Verhalten der offengelegten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir weitere Logik in den `getRed`- und `setRed`-Methoden hinzufügen, anstatt sie nur einfache Durchgangsmethoden zu machen. Zum Beispiel können wir in `setRed` eine Prüfung hinzufügen, ob es sich um einen gültigen R-Wert handelt:

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Ungültiger R-Wert");
    }
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError: Ungültiger R-Wert
```

Wenn wir die `values`-Eigenschaft öffentlich lassen, können unsere Benutzer diese Prüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler weiter unten verhindern.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, solange sie zur selben Klasse gehören.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // #values muss nicht unbedingt von `this` zugegriffen werden:
    // Sie können auf private Felder anderer Instanzen zugreifen, die
    // zur gleichen Klasse gehören.
    return this.#values[0] - anotherColor.#values[0];
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35
```

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Auch wenn eine andere Klasse ein identisch benanntes `#values`-Privatfeld hat, bezieht es sich nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf eine nicht existierende private Eigenschaft löst einen Fehler aus, anstatt `undefined` wie normale Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("Color-Instanz erwartet");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> [!NOTE]
> Denken Sie daran, dass `#` eine spezielle Identifikatorsyntax ist, und Sie können den Feldnamen nicht verwenden, als ob er eine Zeichenkette wäre. `"#values" in anotherColor` würde nach einer Eigenschaft mit dem Namen `"#values"` suchen, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung von privaten Eigenschaften: derselbe Name kann nicht zweimal in einer einzigen Klasse deklariert werden, und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

```js-nolint example-bad
class BadIdeas {
  #firstName;
  #firstName; // Hier tritt ein Syntaxfehler auf
  #lastName;
  constructor() {
    delete this.#lastName; // Auch ein Syntaxfehler
  }
}
```

Methoden, [Getter und Setter](#accessor-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes darauf zugreifen sollte.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Benutzerelemente](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas komplizierteres tun sollen, wenn sie angeklickt/angezapft/sonst aktiviert werden. Darüber hinaus sollten die etwas komplizierten Dinge, die passieren, wenn das Element angeklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScripts darauf zugreifen wird oder sollte.

```js
class Counter extends HTMLElement {
  #xValue = 0;
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  get #x() {
    return this.#xValue;
  }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  #render() {
    this.textContent = this.#x.toString();
  }
  connectedCallback() {
    this.#render();
  }
}

customElements.define("num-counter", Counter);
```

In diesem Fall ist nahezu jedes Feld und jede Methode privat für die Klasse. Daher präsentiert sie eine Schnittstelle für den Rest des Codes, die im Grunde genauso wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Möglichkeit, auf irgendeines der Interna von `Counter` zuzugreifen.

## Accessor-Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, werden Sie mit diesem Muster sehr vertraut sein. Die Verwendung von Methoden zum einfachen Zugriff auf eine Eigenschaft ist jedoch in JavaScript immer noch etwas unergonomisch. _Accessor-Felder_ ermöglichen es uns, etwas zu manipulieren, als ob es eine "echte Eigenschaft" wäre.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 0
```

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` – aber tatsächlich existiert eine solche Eigenschaft nicht auf der Instanz! Es gibt lediglich zwei Methoden, aber sie sind mit `get` und `set` vorangestellt, was es ermöglicht, sie zu manipulieren, als wären es Eigenschaften.

Wenn ein Feld nur einen Getter, aber keinen Setter hat, wird es effektiv schreibgeschützt.

```js
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 255
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler auslösen: "Eigenschaft red von #\<Color> kann nicht gesetzt werden, die nur einen Getter hat". Im nicht-strikten Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind normalerweise so gestaltet, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig mit einer Eigenschaft auf `this` zuzuweisen. Beispiel, das obige:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode kennengelernt, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner Datuminstanz – sie gehört zur Klasse selbst. Sie wird jedoch an die `Date`-Klasse angehängt, anstatt als eine globale Funktion `DateNow()` exponiert zu werden, da sie hauptsächlich nützlich ist, wenn man mit Datuminstanzen umgeht.

> [!NOTE]
> Dienstprogramme mit einem Präfix zu versehen, das angibt, worum es geht, wird "Namensraum" genannt und als gute Praxis angesehen. Zum Beispiel, zusätzlich zur älteren, unpräfixierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt)-Methode fügte JavaScript später die präfixierte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzu, um anzugeben, dass sie zum Umgang mit Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die in der Klasse selbst definiert sind, anstatt auf individuellen Instanzen der Klasse. Diese Funktionen umfassen:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Beispielsweise können wir für unsere `Color`-Klasse eine statische Methode erstellen, die überprüft, ob ein gegebenes Triplet ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind den Instanzgegenstücken sehr ähnlich, außer dass:

- Sie sind alle mit `static` vorangestellt, und
- Sie sind von Instanzen nicht zugänglich.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch eine spezielle Konstruktion namens [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), bei der es sich um einen Codeblock handelt, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit dem sofortigen Ausführen eines Codes, nachdem eine Klasse deklariert wurde. Der einzige Unterschied besteht darin, dass sie Zugriff auf statische private Eigenschaften haben.

## Erweitern und Vererbung

Ein zentrales Merkmal, das Klassen zusätzlich zur ergonomischen Kapselung mit privaten Feldern bringen, ist _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil der Verhaltensweisen eines anderen Objekts "ausleihen" kann, während es bestimmte Teile mit seiner eigenen Logik überschreibt oder erweitert.

Angenommen, unser `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das die Transparenz angibt:

```js
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alphawert muss zwischen 0 und 1 liegen");
    }
    this.#values[3] = value;
  }
}
```

Das bedeutet jedoch, dass jede Instanz – sogar die große Mehrheit, die nicht transparent ist (mit einem Alphawert von 1) – den extra Alphawert tragen muss, was nicht sehr elegant ist. Außerdem würde unsere `Color`-Klasse sehr aufgebläht und schwer zu warten, wenn die Funktionen wachsen würden.

Stattdessen würden wir im objektorientierten Programmieren eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die die Klasse angibt, von der sie erbt.

```js
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alphawert muss zwischen 0 und 1 liegen");
    }
    this.#alpha = value;
  }
}
```

Es gibt einige Dinge, die sofort auffallen. Erstens rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Sprachvoraussetzung, `super()` zu rufen, bevor auf `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren – hier ist es ungefähr gleichbedeutend mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` vor `super()` zugreifen – die Sprache verhindert den Zugriff auf ein nicht initialisiertes `this`.

Nachdem die Elternklasse `this` verändert hat, kann die abgeleitete Klasse ihre eigene Logik anwenden. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um mit ihnen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden ihrer Eltern. Zum Beispiel, obwohl `ColorWithAlpha` selbst keinen Zugriff „get red()“ deklariert, können Sie dennoch auf `red` zugreifen, da dieses Verhalten von der Elternklasse spezifiziert ist:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die grundlegende `toString()`-Methode ist jedoch notorisch nutzlos, da sie in den meisten Fällen `[object Object]` druckt:

```js
console.log(red.toString()); // [object Object]
```

Stattdessen kann unsere Klasse sie überschreiben, um die RGB-Werte der Farbe zu drucken:

```js
class Color {
  #values;
  // …
  toString() {
    return this.#values.join(", ");
  }
}

console.log(new Color(255, 0, 0).toString()); // '255, 0, 0'
```

Innerhalb abgeleiteter Klassen können Sie auf die Methoden der Elternklasse zugreifen, indem Sie `super` verwenden. Dies ermöglicht es Ihnen, Erweiterungsmethoden zu erstellen und Code-Duplikate zu vermeiden.

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // Rufen Sie die toString() der Elternklasse auf und erweitern Sie den Rückgabewert
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

Wenn Sie `extends` verwenden, erben auch die statischen Methoden voneinander, sodass Sie sie ebenfalls überschreiben oder verbessern können.

```js
class ColorWithAlpha extends Color {
  // ...
  static isValid(r, g, b, a) {
    // Rufen Sie die isValid() der Elternklasse auf und erweitern Sie den Rückgabewert
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse – dies ist ein weiterer wesentlicher Aspekt, der JavaScript private Felder "hart privat" macht. Private Felder sind in den Klassenkörper selbst eingeschlossen und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Privatfeld '#values' muss in einer eingeschlossenen Klasse deklariert werden
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme bei mehrfacher Vererbung wie das [Diamantenproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt einer mehrfachen Vererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden ist bisher pragmatisch gewesen: wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es bleibt eine Frage unbeantwortet: _Warum_ sollte man eine Klasse verwenden? Die Antwort lautet: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Methode, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](https://de.wikipedia.org/wiki/Vererbung_(Java)) und [Polymorphismus](https://de.wikipedia.org/wiki/Polymorphismus_(Informatik)) (insbesondere _Subtypen-Polymorphismus_) aufgebaut ist. Allerdings sind viele Menschen philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen deshalb nicht.

Ein Beispiel: Etwas, das `Datum`-Objekte berüchtigt macht, ist, dass sie _änderbar_ sind.

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// Das alte Datum wird auch geändert!?
console.log(date); // 2019-06-20
```

Änderbarkeit und interner Status sind wichtige Aspekte der objektorientierten Programmierung, machen jedoch oft den Code schwer verständlich – da jede scheinbar harmlose Operation ungeahnte Nebenwirkungen haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise auf das Erweitern von Klassen zurück, was große Hierarchien von Vererbungsmustern erzeugen kann.

![Ein typischer OOP-Vererbungsbaum, mit fünf Klassen und drei Ebenen](figure8.1.png)

Allerdings ist es oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen realisiert; in JavaScript kann dies durch Mixins geschehen. Aber am Ende des Tages ist es immer noch nicht sehr bequem.

Auf der positiven Seite: Klassen sind eine sehr mächtige Möglichkeit, unseren Code auf einer höheren Ebene zu organisieren. Ohne die `Color`-Klasse müssten wir beispielsweise ein Dutzend Dienstfunktionen erstellen:

```js
function isRed(color) {
  return color.red === 255;
}
function isValidColor(color) {
  return (
    color.red >= 0 &&
    color.red <= 255 &&
    color.green >= 0 &&
    color.green <= 255 &&
    color.blue >= 0 &&
    color.blue <= 255
  );
}
// ...
```

Aber mit Klassen können wir sie alle unter dem `Color`-Namensraum zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung privater Felder, bestimmte Daten vor nachgeschalteten Benutzern zu verbergen, was eine saubere API schafft.

Im Allgemeinen sollten Sie in Betracht ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten offenbaren. Nehmen Sie eingebettete JavaScript-Klassen als Beispiele:

- Die Klassen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) speichern eine Sammlung von Elementen und ermöglichen Ihnen den Zugriff darauf nach Schlüssel mit `get()`, `set()`, `has()`, usw.
- Die Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, es zu formatieren, zu aktualisieren und einzelne Datumsbestandteile zu lesen.
- Die Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache usw. Es ist eine der wenigen Klassen mit einer reichen Vererbungsstruktur: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die von `Error` erben. Im Fall von Fehlern ermöglicht diese Vererbung eine Verfeinerung der Fehlersensationen: Jede Fehlerklasse stellt einen spezifischen Fehlertyp dar, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code auf eine kanonische objektorientierte Weise zu organisieren, aber ob und wie Sie ihn verwenden, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
