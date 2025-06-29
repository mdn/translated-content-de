---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototype-basierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps spezifiziert. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist das Erstellen von Objekt-Hierarchien und das Vererben von Eigenschaften und deren Werten jedoch mehr im Einklang mit anderen objektorientierten Sprachen wie Java. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden Mechanismus der prototype-basierten Vererbung — alle Muster können auf prototype-basierte Vererbung umgeschrieben werden. Klassen selbst sind ebenfalls normale JavaScript-Werte und haben ihre eigenen Prototyp-Ketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new` Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

In diesem Tutorial werden wir mit dem gut abstrahierten Klassenmodell arbeiten und darüber sprechen, welche Semantiken Klassen bieten. Wenn Sie tiefer in das zugrundeliegende Prototypsystem eintauchen möchten, können Sie den Leitfaden [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

In diesem Kapitel wird vorausgesetzt, dass Sie bereits etwas mit JavaScript vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrungen mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie noch keine erstellt haben. Zum Beispiel könnte Ihnen dies [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay` Instanz aufgerufen, welche einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) Methode zurückgegeben wird, und die andere, die direkt von der `Date`-Klasse _selbst_ aufgerufen wird, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse in JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen ableiten, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt werden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zur Interaktion mit Instanzen verwendet werden.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklaration einer Klasse

Klassen werden üblicherweise mit _Klassendeklarationen_ erstellt.

```js
class MyClass {
  // class body...
}
```

Innerhalb eines Klassenkörpers gibt es eine Reihe von verfügbaren Funktionen.

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

Wenn Sie aus einer Zeit vor ES6 kommen, sind Sie möglicherweise eher mit der Verwendung von Funktionen als Konstruktoren vertraut. Das obige Muster würde in etwa mit Funktionskonstruktoren folgendermaßen übersetzt:

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
> Private Felder und Methoden sind neue Funktionen in Klassen, für die es in Funktionskonstruktoren keine triviale Entsprechung gibt.

### Konstruktion einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` aufzurufen, führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Klassendeklarations-Hoisting

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "hochgezogen")}} (oder, nach einigen Interpretationen, hochgezogen, aber mit der Einschränkung der temporären "toten Zone"), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert wird.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert sind.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassen-Ausdrücke können auch Namen haben. Der Name des Ausdrucks ist nur im Klassenkörper sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu fungieren. Zum Beispiel, wenn wir den `Date` Konstruktor verwenden, erwarten wir, dass er ein neues Objekt gibt, das die Datumsdaten repräsentiert, die wir übergeben haben — welches wir dann mit anderen Methoden, die die Instanz bereitstellt, manipulieren können. In Klassen wird die Instanzerstellung durch den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben durch das Übergeben eines {{Glossary("RGB", "RGB")}} Triplets.

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

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values` Eigenschaft, die ein Array der von Ihnen übergebenen RGB-Werte ist. Das entspricht ziemlich genau dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion — was bedeutet, dass Sie andere Syntaxen verwenden können, wie zum Beispiel [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihm Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (besonders Methoden — auf die wir als nächstes eingehen werden).

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert vom Konstruktor zurückzugeben — denn wenn Sie einen nicht-primitiven Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX` Fabrikfunktion, die nur einfache Objekte erstellt. Die Stärke von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden zu Instanzen zuweisen.

Zum Beispiel, bei `Date` Instanzen, können Sie eine Reihe von Methoden verwenden, um verschiedene Informationen aus einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), etc. Sie können diese Werte auch über die `setX` Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

Für unsere eigene `Color` Klasse könnten wir eine Methode namens `getRed` hinzufügen, die den Rotwert der Farbe zurückgibt.

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

Ohne Methoden könnten Sie dazu verleitet werden, die Funktion im Konstruktor zu definieren:

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

Das funktioniert ebenfalls. Ein Problem besteht jedoch darin, dass dies bei jeder Erstellung einer `Color` Instanz eine neue Funktion erzeugt, auch wenn sie alle das Gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu, wenn Sie eine Methode verwenden, wird sie zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, kann aber dennoch ihr Verhalten ändern, wenn sie von verschiedenen Instanzen aufgerufen wird, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist — sie ist im Prototyp aller Instanzen definiert, oder `Color.prototype`, was im Detail in [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) erklärt wird.

Ähnlich könnten wir eine neue Methode namens `setRed` erstellen, die den Rotwert der Farbe setzt.

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

Sie könnten sich fragen: warum sollten wir die Mühe machen, `getRed` und `setRed` Methoden zu verwenden, wenn wir direkt auf das `values` Array der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung namens "Kapselung". Dies bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrakte Methoden verwenden sollten, um mit ihm zu interagieren. Zum Beispiel, wenn wir plötzlich entscheiden würden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

```js
class Color {
  constructor(r, g, b) {
    // values is now an HSL array!
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
console.log(red.values[0]); // 0; It's not 255 anymore, because the H value for pure red is 0
```

Die Annahme des Benutzers, dass `values` die RGB-Werte bedeutet, bricht plötzlich zusammen, und es könnte ihre Logik beschädigen. Als Implementor einer Klasse möchten Sie daher die internen Datenstrukturen Ihrer Instanz vor dem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers bei "harmlosen Refaktorisierungen" bricht. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Hash-Symbol) vorangestellt ist. Der Hash ist ein integraler Bestandteil des Namens des Feldes, was bedeutet, dass ein privates Feld niemals einen Namenskonflikt mit einem öffentlichen Feld oder einer Methode haben kann. Um in der Klasse auf ein privates Feld zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Element spontan erstellen). Abgesehen davon ist ein privates Feld fast gleichbedeutend mit einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse führt zu einem frühen Syntaxfehler. Die Sprache kann dies verhindern, weil `#privateField` eine spezielle Syntax ist und sie daher eine statische Analyse durchführen kann, um alle Verwendungen privater Felder zu finden, bevor der Code überhaupt ausgeführt wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur in den DevTools geltende Lockerung der JavaScript-Syntaxeinschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Dies bedeutet, dass Sie sicher sind, alle Refaktorisierungen an den privaten Feldern Ihrer Klasse vorzunehmen, solange das Verhalten der offenlegten Methoden unverändert bleibt.

Nachdem wir das `values` Feld privat gemacht haben, können wir etwas mehr Logik in die `getRed` und `setRed` Methoden hinzufügen, anstatt sie nur als einfache Durchgangsmethoden zu gestalten. Zum Beispiel können wir in `setRed` eine Überprüfung hinzufügen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values` Eigenschaft offen lassen, könnten unsere Benutzer diese Prüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster gestalten und Logikfehler im weiteren Verlauf verhindern.

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

Wenn jedoch `anotherColor` keine `Color`-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein identisch benanntes `#values` privates Feld hat, bezieht es sich nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf ein nicht vorhandenes privates Element führt zu einem Fehler, anstatt wie bei normalen Eigenschaften `undefined` zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und darauf zugreifen möchten, ohne `try`/`catch` zur Fehlerbehandlung zu verwenden, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Denken Sie daran, dass `#` eine spezielle Bezeichner-Syntax ist, und Sie den Feldnamen nicht verwenden können, als wäre er ein String. `"#values" in anotherColor` würde nach einer Eigenschaft mit dem Namen `"#values"` suchen, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Elemente: Der gleiche Name kann nicht zweimal in einer Klasse deklariert werden, und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#accessor_felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes darf darauf zugreifen.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Custom-Elemente](/de/docs/Web/API/Web_components/Using_custom_elements), die bei einem Klick/Tipp/Berühren etwas ziemlich Kompliziertes tun sollen. Darüber hinaus sollten die etwas komplizierten Dinge, die passieren, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScripts jemals darauf zugreifen wird (oder sollte).

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

In diesem Fall sind so ziemlich alle Felder und Methoden privat zur Klasse. Sie stellt so eine Schnittstelle zum Rest des Codes bereit, die im Wesentlichen genau wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms kann die internen Prozesse von `Counter` beeinflussen.

## Accessor Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, sind Sie mit diesem Muster sehr vertraut. In JavaScript ist es jedoch immer noch ziemlich unergonomisch, Methoden einfach zu verwenden, um auf eine Eigenschaft zuzugreifen. _Accessor Felder_ ermöglichen uns, etwas zu manipulieren, als wäre es eine "echte Eigenschaft".

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

Es sieht so aus, als ob das Objekt eine Eigenschaft namens `red` hat — aber tatsächlich existiert auf der Instanz keine solche Eigenschaft! Es gibt nur zwei Methoden, die jedoch mit `get` und `set` vorangestellt sind, was es erlaubt, sie zu manipulieren, als wären sie Eigenschaften.

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

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler werfen: "Cannot set property red of #\<Color> which has only a getter". Im Nicht-Strict-Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind in der Regel unabhängig von den Parametern des Konstruktors konzipiert.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichbedeutend damit, eine Eigenschaft zu `this` zuzuweisen. Zum Beispiel kann das obige Beispiel auch wie folgt umgeschrieben werden:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem Datum-Beispiel, haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) Methode kennengelernt, die das aktuelle Datum zurückgibt. Diese Methode gehört nicht zu einer Datumsinstanz — sie gehört zur Klasse selbst. Sie wird jedoch auf der `Date`-Klasse platziert, anstatt als globale `DateNow()` Funktion exponiert zu werden, da sie hauptsächlich nützlich ist, wenn man mit Datumsinstanzen umgeht.

> [!NOTE]
> Das Präfixieren von Dienstprogrammmethoden mit dem, was sie behandeln, wird "Namensraum" genannt und gilt als gute Praxis. Zum Beispiel, zusätzlich zur älteren, unpräfixierten Methode [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt), hat JavaScript auch später die präfixierte Methode [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) hinzugefügt, um anzuzeigen, dass sie für den Umgang mit Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, anstatt auf einzelnen Instanzen der Klasse. Zu diesen Funktionen gehören:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Zum Beispiel, für unsere `Color` Klasse könnten wir eine statische Methode erstellen, die prüft, ob ein gegebenes Triplet ein gültiger RGB-Wert ist:

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

- Sie alle mit `static` vorangestellt sind, und
- Sie von Instanzen nicht zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch eine spezielle Konstruktion namens [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), der ein Block von Code ist, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig damit, sofort nach der Deklaration einer Klasse Code auszuführen. Der einzige Unterschied besteht darin, dass sie auf statische private Elemente zugreifen können.

## Erweitern und Vererbung

Ein Schlüsselmerkmal, das Klassen mitbringen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern), ist _Vererbung_, was bedeutet, dass ein Objekt einen Großteil der Verhaltensweisen eines anderen Objekts "entleihen" kann, während bestimmte Teile mit der eigenen Logik überschrieben oder erweitert werden.

Zum Beispiel, nehmen wir an, dass unsere `Color` Klasse jetzt Transparenz unterstützen muss. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das die Transparenz angibt:

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

Das würde jedoch bedeuten, dass jede Instanz — auch die überwiegende Mehrheit, die nicht transparent ist (die mit einem Alpha-Wert von 1) — den zusätzlichen Alpha-Wert haben müsste, was nicht sehr elegant ist. Außerdem, wenn die Funktionen weiter wachsen, wird unsere `Color` Klasse sehr aufgebläht und schwer zu warten.

Stattdessen würde man in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) Klausel erklärt, die angibt, von welcher Klasse sie erbt.

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

Es gibt einige Dinge, die sofort ins Auge fallen. Zuerst ist da der Aufruf `super(r, g, b)` im Konstruktor. Es ist eine Sprachvorgabe, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufzurufen, bevor `this` zugänglich gemacht wird. Der Aufruf von `super()` ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren — hier ist es in etwa gleichwertig mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` zugreifen, bevor `super()` aufgerufen wird — die Sprache verhindert, dass auf das nicht initialisierte `this` zugegriffen wird.

Nachdem die Elternklasse mit der Änderung von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Getter-/Setter-Paar bereitgestellt, um mit ihnen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, obwohl `ColorWithAlpha` keinen `get red()` Accessor selbst deklariert, können Sie dennoch auf `red` zugreifen, da dieses Verhalten von der Elternklasse spezifiziert ist:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die Basismethode `toString()` ist jedoch notorisch nutzlos, weil sie in den meisten Fällen `[object Object]` ausgibt:

```js
console.log(red.toString()); // [object Object]
```

Stattdessen kann unsere Klasse sie überschreiben, um die RGB-Werte der Farbe auszugeben:

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

Innerhalb abgeleiteter Klassen können Sie Methoden der Elternklasse mit `super` zugreifen. Dies erlaubt es Ihnen, Verbesserungsmethoden zu erstellen und Code-Duplikate zu vermeiden.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden ebenfalls voneinander, sodass Sie diese auch überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — dies ist ein weiterer Schlüsselaspekt von JavaScripts privaten Feldern, die "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren keinen Zugriff auf _irgendeinen_ externen Code.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme bei der Mehrfachvererbung wie das [Diamant-Problem](https://de.wikipedia.org/wiki/Mehrfachvererbung#Das_Diamantproblem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen abgeleiteter Klassen sind ebenfalls [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es bleibt eine Frage unbeantwortet: _warum_ sollte man eine Klasse verwenden? Die Antwort ist: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Methode, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://de.wikipedia.org/wiki/Vererbung_(Informatik)>) und [Polymorphie](<https://de.wikipedia.org/wiki/Polymorphismus_(Informatik)>) basiert (insbesondere _Subtyp-Polymorphie_). Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen deshalb nicht.

Zum Beispiel, eines der Dinge, die `Date`-Objekte berüchtigt machen, ist, dass sie _veränderlich_ sind.

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

Veränderlichkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen den Code jedoch oft schwer nachvollziehbar — da jede scheinbar harmlose Operation unerwartete Seiteneffekte haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbung-Baum, mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft möchten wir das Verhalten mehrerer Klassen. In Java wird dies durch Interfaces erreicht; in JavaScript kann es durch Mixins getan werden. Aber am Ende des Tages ist es immer noch nicht sehr bequem.

Auf der positiven Seite sind Klassen eine sehr mächtige Methode, um unseren Code auf einer höheren Ebene zu organisieren. Zum Beispiel, ohne die `Color` Klasse, könnten wir ein Dutzend von Dienstprogrammfunktionen erstellen müssen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namensraum zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus erlaubt die Einführung von privaten Feldern, bestimmte Daten vor nachgelagerten Benutzern zu verbergen und eine saubere API zu schaffen.

Im Allgemeinen sollten Sie in Erwägung ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viele Verhaltensweisen bereitstellen. Nehmen Sie die eingebauten JavaScript-Klassen als Beispiele:

- Die Klassen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) speichern eine Sammlung von Elementen und erlauben den Zugriff auf sie über Schlüssel mit `get()`, `set()`, `has()`, etc.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, einzelne Datumskomponenten zu formatieren, zu aktualisieren und zu lesen.
- Die Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, Stapelverfolgung, Ursache, etc. Sie ist eine der wenigen Klassen mit einer reichhaltigen Vererbungsstruktur: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern erlaubt diese Vererbung, die Semantik von Fehlern zu verfeinern: Jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet die Mechanismen, um Ihren Code auf eine kanonische objektorientierte Weise zu organisieren, aber ob und wie man ihn verwendet, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
