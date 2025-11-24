---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: b19d25f12f5e3cca05e82ce4b6f0ba38b330d593
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps spezifiziert. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) folgt die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr dem Ansatz anderer objektorientierter Sprachen wie Java. In diesem Abschnitt zeigen wir, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen werden _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen in erster Linie eine Abstraktion über den bestehenden prototypischen Vererbungsmechanismus — alle Muster sind in eine auf Prototypen basierte Vererbung umwandelbar. Klassen selbst sind ebenfalls normale JavaScript-Werte und haben ihre eigenen Prototypketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell spielen und diskutieren, welche Semantik Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypsystem eintauchen möchten, können Sie den [Leitfaden "Vererbung und die Prototypenkette"](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel setzt voraus, dass Sie bereits mit JavaScript vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie praktische Erfahrungen mit JavaScript gesammelt haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, selbst wenn Sie keine erstellt haben. Zum Beispiel könnte Ihnen dies [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die eine Zeichenfolge zurückgibt. Dann verglichen wir zwei Zahlen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wurde, die andere direkt von der `Date`-Klasse _selbst_ aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen darüber ableiten, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt werden.
- Die Klasse speichert selbst einige Eigenschaften (Daten oder Methoden), die üblicherweise zur Interaktion mit Instanzen verwendet werden.

Diese entsprechen den drei Schlüsselmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklaration einer Klasse

Klassen werden normalerweise mit _Klassendeklarationen_ erstellt.

```js
class MyClass {
  // class body...
}
```

Innerhalb eines Klassenkörpers stehen eine Reihe von Funktionen zur Verfügung.

```js
class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = "foo";
  // Instance method
  myMethod() {
    // myMethod body
  }
  // Static field
  static myStaticField = "bar";
  // Static method
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static initialization code
  }
  // Fields, methods, static fields, and static methods all have
  // "private" forms
  #myPrivateField = "bar";
}
```

Wenn Sie aus einer Welt vor ES6 kommen, sind Sie möglicherweise eher mit der Verwendung von Funktionen als Konstruktoren vertraut. Das obige Muster würde in etwa wie folgt mit Funktionskonstruktoren übersetzt werden:

```js
function MyClass() {
  this.myField = "foo";
  // Constructor body
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod body
};
MyClass.prototype.myMethod = function () {
  // myMethod body
};

(function () {
  // Static initialization code
})();
```

> [!NOTE]
> Private Felder und Methoden sind neue Funktionen in Klassen, die keine einfache Entsprechung in Funktionskonstruktoren haben.

### Konstruktion einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` zu "aufrufen", führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Klassen-Deklarations-Hoisting

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoisted")}} (oder, nach einigen Interpretationen, gehoben, aber mit der Einschränkung der temporären Totzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ähnelt Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur für den Körper der Klasse sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht ist die wichtigste Aufgabe einer Klasse, als "Fabrik" für Objekte zu fungieren. Zum Beispiel erwarten wir beim Verwenden des `Date`-Konstruktors, dass er ein neues Objekt liefert, das die Datendaten, die wir übergeben haben, darstellt — die wir dann mit anderen Methoden manipulieren können, die die Instanz bereitstellt. In Klassen wird die Instanzerstellung vom [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Triplet übergeben.

```js
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
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

Sie haben erfolgreich eine `Color`-Instanz erstellt und die Instanz hat eine `values`-Eigenschaft, die ein Array der von Ihnen übergebenen RGB-Werte ist. Das entspricht ziemlich dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion — das bedeutet, dass Sie andere Syntaxen verwenden können, wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// Creates an instance with the same shape as above.
```

Jedes Mal, wenn Sie `new` aufrufen, wird eine andere Instanz erstellt.

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihm Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden — die wir als nächstes behandeln werden).

Der Wert von `this` wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben — denn wenn Sie einen nicht-primären Wert zurückgeben, wird dieser zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX`-Fabrikfunktion, die einfach nur einfache Objekte erstellt. Die Stärke von Klassen liegt jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden zu Instanzen zuweisen.

Zum Beispiel für `Date`-Instanzen können Sie eine Reihe von Methoden verwenden, um verschiedene Informationen aus einem einzigen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), [Tag der Woche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Ohne Methoden könnten Sie versucht sein, die Funktion im Konstruktor zu definieren:

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

Auch das funktioniert. Ein Problem dabei ist jedoch, dass diese Funktion jedes Mal eine neue erstellt, wenn eine `Color`-Instanz erstellt wird, selbst wenn sie alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird eine Methode, wenn Sie sie verwenden, zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann abweichen, wenn verschiedene Instanzen sie aufrufen, weil der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist — sie ist im Prototyp aller Instanzen definiert oder `Color.prototype`, was im Leitfaden [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) ausführlicher erklärt wird.

Ähnlich können wir eine neue Methode namens `setRed` erstellen, die den Rotwert der Farbe setzt.

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
console.log(red.getRed()); // 0; of course, it should be called "black" at this stage!
```

## Private Felder

Sie fragen sich vielleicht: Warum sollten wir uns die Mühe machen, die `getRed`- und `setRed`-Methoden zu verwenden, wenn wir direkt auf das `values`-Array der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die als "Kapselung" bezeichnet wird. Damit ist gemeint, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden, um mit ihm zu interagieren. Zum Beispiel, wenn wir plötzlich entscheiden würden, Farben als [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) statt in RGB darzustellen:

```js
class Color {
  constructor(r, g, b) {
    // values is now an HSL array!
    this.values = rgbToHSL([r, g, b]);
  }
  getRed() {
    return hslToRGB(this.values)[0];
  }
  setRed(value) {
    const rgb = hslToRGB(this.values);
    rgb[0] = value;
    this.values = rgbToHSL(rgb);
  }
}

const red = new Color(255, 0, 0);
console.log(red.values[0]); // 0; It's not 255 anymore, because the H value for pure red is 0
```

Die Annahme des Benutzers, dass `values` die RGB-Werte bedeuten, bricht plötzlich zusammen und könnte dazu führen, dass ihre Logik fehlerhaft wird. Wenn Sie also Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers beim Durchführen von "harmlosen Refactorings" kaputt geht. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Rautezeichen) vorangestellt ist. Die Raute ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass ein privates Feld niemals Namenskonflikte mit einem öffentlichen Feld oder einer Methode haben kann. Um in irgendeinem Teil der Klasse auf ein privates Feld zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Element spontan erstellen). Davon abgesehen ist ein privates Feld so ziemlich gleichwertig mit einer normalen Eigenschaft.

```js
class Color {
  // Declare: every Color instance has a private field called #values.
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

Der Zugriff auf private Felder außerhalb der Klasse führt zu einem frühen Syntaxfehler. Die Sprache kann dies verhindern, weil `#privateField` eine spezielle Syntax ist, sodass sie statische Analysen durchführen und alle Verwendungen privater Felder finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Elemente außerhalb der Klasse zugreifen. Dies ist eine DevTools-spezifische Lockerung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Das bedeutet, dass Sie sicher sind, dass Sie jede beliebige Refaktorisierung an den privaten Feldern Ihrer Klasse durchführen können, solange das Verhalten der offen gelegten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir etwas mehr Logik in den `getRed`- und `setRed`-Methoden hinzufügen, anstatt sie einfache Durchgangsmethoden sein zu lassen. Beispielsweise können wir in `setRed` eine Überprüfung hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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
      throw new RangeError("Invalid R value");
    }
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError: Invalid R value
```

Wenn wir die `values`-Eigenschaft ungeschützt lassen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erzeugen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler weiter unten verhindern.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, solange sie zur gleichen Klasse gehören.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    // #values doesn't necessarily need to be accessed from this:
    // you can access private fields of other instances belonging
    // to the same class.
    return this.#values[0] - anotherColor.#values[0];
  }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35
```

Allerdings, wenn `anotherColor` keine Color-Instanz ist, wird `#values` nicht existieren. (Selbst wenn eine andere Klasse ein identisch benanntes `#values`-privates Feld hat, verweist es nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf ein nicht vorhandenes privates Element wirft einen Fehler anstelle von `undefined` wie normale Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und es zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden.

```js
class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  redDifference(anotherColor) {
    if (!(#values in anotherColor)) {
      throw new TypeError("Color instance expected");
    }
    return this.#values[0] - anotherColor.#values[0];
  }
}
```

> [!NOTE]
> Beachten Sie, dass `#` eine spezielle Identifiersyntax ist und Sie den Feldnamen nicht so verwenden können, alsof wäre es eine Zeichenfolge. `"#values" in anotherColor` würde nach einem Eigenschaftsnamen suchen, der wörtlich `"#values"` lautet, anstatt eines privaten Feldes.

Es gibt einige Einschränkungen bei der Verwendung privater Elemente: Der gleiche Name kann nicht zweimal innerhalb einer Klasse deklariert werden und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

```js-nolint example-bad
class BadIdeas {
  #firstName;
  #firstName; // syntax error occurs here
  #lastName;
  constructor() {
    delete this.#lastName; // also a syntax error
  }
}
```

Methoden, [Getter und Setter](#zugriffsorach_eigenschaften) können auch privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes darf es aufrufen.

Zum Beispiel, stellen Sie sich vor, Sie erstellen [HTML-Benutzerelemente](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas etwas kompliziertes tun sollten, wenn sie angeklickt oder auf andere Weise aktiviert werden. Zudem sollten die etwas komplizierten Dinge, die passieren, wenn das Element angeklickt wird, auf diese Klasse beschränkt bleiben, denn kein anderer Teil des JavaScript wird (oder sollte) jemals darauf zugreifen.

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

In diesem Fall sind im Wesentlichen fast alle Felder und Methoden privat zur Klasse. Somit präsentiert es eine Schnittstelle für den restlichen Code, die im Wesentlichen genau wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Befugnis, die Interna von `Counter` zu beeinflussen.

## Zugriffsorach Eigenschaften

`color.getRed()` und `color.setRed()` erlauben uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, sind Sie mit diesem Muster sehr vertraut. Allerdings ist es in JavaScript immer noch etwas unergonomisch, Methoden zu verwenden, um einfach auf eine Eigenschaft zuzugreifen. _Zugriffsorach Eigenschaften_ ermöglichen es uns, etwas so zu manipulieren, als ob es eine "tatsächliche Eigenschaft" wäre.

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

Es sieht so aus, als ob das Objekt eine Eigenschaft namens `red` hat — tatsächlich existiert keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` versehen, was erlaubt, sie zu manipulieren, als ob sie Eigenschaften wären.

Wenn ein Feld nur über einen Getter verfügt, aber über keinen Setter, wird es effektiv schreibgeschützt sein.

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

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` eine Typfehlermeldung werfen: "Cannot set property red of #\<Color> which has only a getter". Im nicht-strengen Modus wird die Zuordnung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz erlauben, eine Eigenschaft zu haben. Felder werden meist so gestaltet, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig mit dem Zuweisen einer Eigenschaft zu `this`. Zum Beispiel lässt sich das obige Beispiel auch in Folgendes umwandeln:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode kennengelernt, die das aktuelle Datum zurückgibt. Diese Methode gehört nicht zu einer beliebigen Instanz — sie gehört zur Klasse selbst. Sie ist jedoch auf der `Date`-Klasse platziert, anstatt als globale `DateNow()`-Funktion offen zu liegen, weil sie hauptsächlich nützlich ist, wenn mit Datumsinstanzen gearbeitet wird.

> [!NOTE]
> Das Präfixieren von Hilfsmethoden mit dem, was sie behandeln, wird "Namespacing" genannt und gilt als gute Praxis. Beispielsweise hat JavaScript neben der älteren ungeprefixten Methode [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) später die vorgeführte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzugefügt, um anzuzeigen, dass sie für Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, statt auf einzelnen Instanzen der Klasse. Dazu gehören:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Zum Beispiel können wir für unsere `Color`-Klasse eine statische Methode erstellen, die überprüft, ob ein gegebenes Triplet ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind ihren Instanzgegenstücken sehr ähnlich, außer dass:

- Sie alle mit `static` vorangestellt werden und
- Sie nicht aus Instanzen zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch eine spezielle Konstruktion namens [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), welches ein Block von Code ist, der beim ersten Laden der Klasse ausgeführt wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit dem sofortigen Ausführen von etwas Code, nachdem eine Klasse deklariert wurde. Einziger Unterschied ist, dass sie auf statische private Elemente zugreifen können.

## Erweitern und Vererbung

Ein Schlüsselelement, das Klassen mit sich bringen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern), ist _Vererbung_, was bedeutet, dass ein Objekt einen Großteil des Verhaltens eines anderen Objekts "ausleihen" kann, während es bestimmte Teile mit seiner eigenen Logik überschreibt oder verbessert.

Zum Beispiel, nehmen wir an, unsere `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das dessen Transparenz anzeigt:

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
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#values[3] = value;
  }
}
```

Das bedeutet jedoch, dass jede Instanz — selbst die überwiegende Mehrheit, die nicht transparent ist (diejenigen mit einem Alpha-Wert von 1) — den zusätzlichen Alpha-Wert haben muss, was nicht sehr elegant ist. Plus, wenn die Merkmale weiter wachsen, wird unsere `Color` klasse sehr aufgebläht sein und schwer zu warten.

Stattdessen würde man im objektorientierten Design eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Basisklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die die Klasse angibt, von der sie ableiten.

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
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}
```

Einige Dinge fallen sofort auf. Zuerst rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Anforderung der Sprache, `super()` aufzurufen, bevor auf `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Basisklasse auf, um `this` zu initialisieren — hier ist es in etwa äquivalent zu `this = new Color(r, g, b)`. Sie können vor `super()` Code haben, aber Sie können nicht auf `this` zugreifen, bevor `super()` aufgerufen wurde — die Sprache verhindert den Zugriff auf ein nicht initialisiertes `this`.

Nachdem die Basisklasse mit der Modifikation von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um damit zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Basisklasse. Zum Beispiel, nehmen wir den `get red()`-Accessor, den wir zur `Color` im Abschnitt [Zugriffsorach Eigenschaften](#zugriffsorach_eigenschaften) hinzugefügt haben — obwohl wir keinen in `ColorWithAlpha` deklariert haben, können wir `red` trotzdem zugreifen, weil dieses Verhalten von der Basisklasse angegeben wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Basisklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die grundlegende `toString()`-Methode ist jedoch bekanntermaßen nutzlos, da sie in den meisten Fällen `[object Object]` druckt:

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

Innerhalb abgeleiteter Klassen können Sie die Methoden der Basisklasse mit `super` aufrufen. Dadurch können Sie Verbesserungsmethoden erstellen und Code-Duplizierung vermeiden.

```js
class ColorWithAlpha extends Color {
  #alpha;
  // …
  toString() {
    // Call the parent class's toString() and build on the return value
    return `${super.toString()}, ${this.#alpha}`;
  }
}

console.log(new ColorWithAlpha(255, 0, 0, 0.5).toString()); // '255, 0, 0, 0.5'
```

Wenn Sie `extends` verwenden, erben auch die statischen Methoden voneinander, sodass Sie auch diese überschreiben oder verbessern können.

```js
class ColorWithAlpha extends Color {
  // …
  static isValid(r, g, b, a) {
    // Call the parent class's isValid() and build on the return value
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Basisklasse — dies ist ein weiteres Schlüsselelement von JavaScript-privaten Feldern, die "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren keinen Zugang zu _irgendeinem_ externen Code.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur eine andere Klasse erweitern. Dies verhindert Probleme bei der Mehrfachvererbung wie das [Diamantproblem](https://de.wikipedia.org/wiki/Mehrfachvererbung#Das_Diamantproblem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch dennoch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber eine Frage bleibt unbeantwortet: _warum_ sollte man eine Klasse verwenden? Die Antwort lautet: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Möglichkeit, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://de.wikipedia.org/wiki/Vererbung_(informatik)>) und [Polymorphismus](<https://de.wikipedia.org/wiki/Polymorphismus_(informatik)>) (insbesondere _Subtypen-Polymorphismus_) basiert. Viele Menschen sind jedoch aus philosophischen Gründen gegen bestimmte OOP-Praktiken und verwenden daher keine Klassen.

Zum Beispiel ist eine Sache, die `Date`-Objekte berüchtigt macht, dass sie _änderbar_ sind.

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// The old date is modified as well!?
console.log(date); // 2019-06-20
```

Änderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, aber sie machen Code oft schwer zu verstehen — weil jede scheinbar harmlose Operation unerwartete Seiteneffekte haben und das Verhalten in anderen Teilen des Programms verändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern erstellen kann.

![Ein typischer OOP-Vererbungsbaum mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann es durch Mixins geschehen. Aber am Ende des Tages ist es immer noch nicht sehr bequem.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf höherer Ebene zu organisieren. Zum Beispiel, ohne die `Color`-Klasse könnten wir ein Dutzend von Hilfsfunktionen erstellen müssen:

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
// …
```

Aber mit Klassen können wir sie alle unter dem `Color`-Namespace zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung von privaten Feldern, bestimmte Daten vor nachgelagerten Benutzern zu verbergen, was eine saubere API schafft.

Im Allgemeinen sollten Sie in Betracht ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten bereitstellen. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die Klassen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) speichern eine Sammlung von Elementen und ermöglichen den Zugriff auf sie per Schlüssel über `get()`, `set()`, `has()` usw.
- Die Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, Datumskomponenten zu formatieren, zu aktualisieren und auszulesen.
- Die Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache usw. Es ist eine der wenigen Klassen, die sich durch eine umfassende Vererbungsstruktur auszeichnet: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die von `Error` abgeleitet sind. Im Fall von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: Jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) einfach überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code in einer kanonischen objektorientierten Weise zu organisieren, aber ob und wie Sie ihn verwenden, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
