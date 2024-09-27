---
title: Verwenden von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache – das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Hinzufügung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Hierarchien von Objekten und die Vererbung von Eigenschaften und deren Werten jedoch viel ähnlicher zu anderen objektorientierten Sprachen wie Java. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den vorhandenen prototypischen Vererbungsmechanismus – alle Muster sind in prototypbasierte Vererbung umwandelbar. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototypketten. Tatsächlich können die meisten normalen JavaScript-Funktionen als Konstruktoren verwendet werden – Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

In diesem Tutorial werden wir mit dem gut abstrahierten Klassenmodell arbeiten und diskutieren, welche Semantiken Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypensystem eintauchen möchten, können Sie den [Leitfaden zur Vererbung und der Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel geht davon aus, dass Sie bereits mit JavaScript etwas vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie keine erstellt haben. Zum Beispiel [könnte Ihnen dies bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Numbers_and_dates):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine [Methode](/de/docs/Glossary/Method) [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wurde, und die andere direkt von der `Date`-Klasse _selbst_ aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Vorstellungen davon bekommen, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die durch die Klasse hinzugefügt werden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zur Interaktion mit Instanzen verwendet werden.

Diese entsprechen den drei Schlüsselmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklarieren einer Klasse

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

Wenn Sie aus einer prä-ES6-Welt kommen, sind Sie möglicherweise vertrauter mit der Verwendung von Funktionen als Konstruktoren. Das obige Muster würde ungefähr dem Folgenden mit Funktionskonstruktoren entsprechen:

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
> Private Felder und Methoden sind neue Funktionen in Klassen ohne triviales Äquivalent in Funktionskonstruktoren.

### Eine Klasse konstruieren

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

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht [gehoben](/de/docs/Glossary/Hoisting) (oder, in einigen Interpretationen, gehoben, jedoch mit der Einschränkung der temporalen Sperrzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Ausdrucksname ist nur für den Klassenkörper sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu wirken. Zum Beispiel, wenn wir den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt zurückgibt, das das Datumsdatum darstellt, das wir eingegeben haben – mit dem wir dann mit anderen Methoden, die die Instanz bereitstellt, interagieren können. In Klassen erfolgt die Instanzerstellung durch den [constructor](/de/docs/Web/JavaScript/Reference/Classes/constructor).

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben durch Eingabe eines [RGB](/de/docs/Glossary/RGB) Triplets.

```js
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
```

Öffnen Sie die Entwicklerwerkzeuge Ihres Browsers, fügen Sie den obigen Code in die Konsole ein und erstellen Sie dann eine Instanz:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Sie sollten eine Ausgabe wie diese sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der RGB-Werte ist, die Sie eingegeben haben. Das entspricht ziemlich genau dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion – was bedeutet, dass Sie andere Syntaxen wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden können:

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihm Eigenschaften zuweisen oder bestehende Eigenschaften lesen (insbesondere Methoden, die wir als nächstes behandeln werden).

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Sie werden angewiesen, keinen Wert aus dem Konstruktor zurückzugeben – denn wenn Sie einen nicht-primären Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` in [dessen Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description) tut.)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht wesentlich von einer `createX` Fabrikfunktion, die nur einfache Objekte erstellt. Die Stärke von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden an Instanzen zuweisen.

Zum Beispiel können Sie bei `Date`-Instanzen eine Vielzahl von Methoden verwenden, um verschiedene Informationen aus einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), usw. Sie können diese Werte auch durch die `setX` Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

Für unsere eigene `Color`-Klasse können wir eine Methode namens `getRed` hinzufügen, die den roten Wert der Farbe zurückgibt.

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

Das funktioniert auch. Ein Problem dabei ist jedoch, dass diese Funktion jedes Mal neu erstellt wird, wenn eine `Color`-Instanz erstellt wird, selbst wenn alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz, wenn Sie eine Methode verwenden, wird sie zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann unterschiedlich sein, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist - sie ist auf dem Prototyp aller Instanzen definiert oder `Color.prototype`, welches in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) detaillierter erklärt wird.

Ähnlich können wir eine neue Methode namens `setRed` erstellen, die den roten Wert der Farbe setzt.

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

Vielleicht fragen Sie sich: warum möchten wir überhaupt `getRed` und `setRed`-Methoden verwenden, wenn wir direkt auf das `values` Array der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung namens "Kapselung". Dies bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden nutzen sollten, um mit ihnen zu interagieren. Zum Beispiel, wenn wir plötzlich entscheiden würden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

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

Die Annahme des Benutzers, dass `values` die RGB-Werte darstellt, bricht plötzlich zusammen und könnte ihre Logik zum Absturz bringen. Wenn Sie also ein Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, um sowohl die API sauber zu halten als auch zu verhindern, dass der Code des Benutzers bei einigen "harmlosen Refaktorisierungen" bricht. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) getan.

Ein privates Feld ist ein Bezeichner mit der Voranstellung `#` (dem Hashtag-Symbol). Das Hashtag ist ein wesentlicher Bestandteil des Namens des Feldes, was bedeutet, dass ein privates Feld niemals einen Namenskonflikt mit einem öffentlichen Feld haben kann. Zum Verweisen auf ein privates Feld überall in der Klasse müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Feld spontant erstellen). Abgesehen davon ist ein privates Feld fast äquivalent zu einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, die eine statische Analyse durchführen kann, um alle Verwendung von privaten Feldern zu finden, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur in DevTools-Entspannung der JavaScript-Syntax-Einschränkung.

Private Felder in JavaScript sind _"hart privat"_: wenn die Klasse keine Methoden implementiert, die diese privaten Felder auslagern, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Dies bedeutet, dass Sie sicher jede Refaktorisierung der privaten Felder Ihrer Klasse durchführen können, solange das Verhalten der exponierten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir in den `getRed` und `setRed` Methoden etwas mehr Logik hinzufügen, anstatt sie zu einfachen Pass-Through-Methoden zu machen. Zum Beispiel können wir in `setRed` eine Prüfung hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft exponiert lassen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut verkapselten API können wir unseren Code robuster gestalten und Logikfehler weiter unten verhindern.

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

Wenn jedoch `anotherColor` keine Color-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein identisch benanntes `#values` privates Feld hätte, bezieht es sich nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf eine nicht vorhandene private Eigenschaft löst einen Fehler anstelle der Rückgabe von `undefined` aus, wie es normale Eigenschaften tun. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` für die Fehlerbehandlung zu verwenden, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Denken Sie daran, dass `#` eine spezielle Bezeichner-Syntax ist und Sie den Feldnamen nicht verwenden können, als wäre er ein String. `"#values" in anotherColor` würde nach einer Eigenschaft suchen, die buchstäblich `"#values"` heißt, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Eigenschaften: Der gleiche Name kann nicht zweimal in einer einzelnen Klasse deklariert werden und sie können nicht gelöscht werden. Beide führen zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#accessor_felder) können ebenfalls privat sein. Sie sind nützlich, wenn es etwas Komplexes gibt, das die Klasse intern tun muss, zu dem jedoch kein anderer Teil des Codes aufgerufen werden sollte.

Zum Beispiel, stellen Sie sich vor, Sie erstellen [HTML Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas Kompliziertes tun sollen, wenn sie geklickt/angepasst/aktiviert werden. Weiterhin sollten die etwas komplizierten Dinge, die passieren, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript darauf zugreifen soll.

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

In diesem Fall ist im Wesentlichen jedes Feld und jede Methode privat für die Klasse. Somit bietet es eine Schnittstelle für den Rest des Codes, die im Wesentlichen wie ein integriertes HTML-Element aussieht. Kein anderer Teil des Programms hat die Macht, die Interna

von `Counter` zu beeinflussen.

## Accessor Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den roten Wert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, werden Sie mit diesem Muster sehr vertraut sein. In JavaScript ist die Verwendung von Methoden für den einfachen Zugriff auf eine Eigenschaft jedoch immer noch etwas umständlich. _Accessor Felder_ ermöglichen es uns, etwas so zu manipulieren, als ob es sich um eine „echte Eigenschaft“ handelt.

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` – aber tatsächlich existiert auf der Instanz keine solche Eigenschaft! Es gibt nur zwei Methoden, die jedoch mit `get` und `set` vorangestellt sind, was es ermöglicht, sie zu manipulieren, als wären sie Eigenschaften.

Wenn ein Feld nur einen Getter, aber keinen Setter hat, ist es im Wesentlichen schreibgeschützt.

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

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird in der Zeile `red.red = 0` ein Typfehler ausgelöst: „Kann die Eigenschaft red von #\<Color> nicht festlegen, die nur einen Getter hat“. Im Nicht-Strikter-Modus wird die Zuordnung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz erlauben, eine Eigenschaft zu haben. Felder sind in der Regel so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichbedeutend mit dem Zuweisen einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch in Folgendes umgewandelt werden:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) Methode behandelt, die das aktuelle Datum zurückgibt. Diese Methode gehört keiner Datuminstanz — sie gehört der Klasse selbst. Sie ist jedoch in der `Date`-Klasse untergebracht, anstatt als globale Funktion `DateNow()` exponiert zu werden, weil sie hauptsächlich nützlich ist, wenn es um Datuminstanzen geht.

> [!NOTE]
> Die Voranstellung von Dienstprogrammmethoden mit dem, womit sie zu tun haben, wird „Namensraumgebung“ genannt und als gute Praxis angesehen. Zum Beispiel hat JavaScript zusätzlich zur älteren, unbutierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) Methode auch die später hinzugefügte, benannte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) Methode, um anzugeben, dass sie zur Behandlung von Zahlen dient.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenmerkmalen, die auf der Klasse selbst definiert sind, anstatt auf einzelnen Instanzen der Klasse. Zu diesen Merkmalen gehören:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Zum Beispiel können wir für unsere `Color`-Klasse eine statische Methode erstellen, die überprüft, ob ein gegebenes Tripel ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind den Instanzgegenstücken sehr ähnlich, mit dem Unterschied, dass:

- Sie alle mit `static` vorangestellt sind und
- Sie nicht von Instanzen aus zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch eine spezielle Konstruktion, die als [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) bezeichnet wird, bei der es sich um einen Codeblock handelt, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig damit, unmittelbar nach der Deklaration einer Klasse einen Code auszuführen. Der einzige Unterschied besteht darin, dass sie Zugriff auf statische private Eigenschaften haben.

## Erweitern und Vererbung

Ein Schlüsselmerkmal, das Klassen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern) mit sich bringen, ist _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts „leihen“ kann, während bestimmte Teile mit eigener Logik überschreiben oder verbessert werden.

Zum Beispiel, nehmen wir an, unsere `Color`-Klasse muss nun Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das seine Transparenz angibt:

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

Das würde jedoch bedeuten, dass jede Instanz – sogar die große Mehrheit, die nicht transparent ist (die mit einem Alpha-Wert von 1) – den zusätzlichen Alpha-Wert haben muss, was nicht sehr elegant ist. Außerdem, wenn die Funktionen weiterhin wachsen, wird unsere `Color`-Klasse sehr aufgebläht und schwer zu warten sein.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) Klausel deklariert, die angibt, von welcher Klasse sie erben.

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

Es gibt ein paar Dinge, die sofort auffallen. Zuerst rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Sprachvorschrift, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufzurufen, bevor `this` verwendet wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren – hier ist es annäherungsweise gleichwertig mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` vor `super()` zugreifen – die Sprache verhindert, dass Sie auf `this` im nicht initialisierten Zustand zugreifen.

Nachdem die Elternklasse fertig ist, `this` zu modifizieren, kann die abgeleitete Klasse ihre eigene Logik verwenden. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar von Getter/Settern bereitgestellt, um mit ihnen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, obwohl `ColorWithAlpha` keinen `get red()` Accessor selbst deklariert, können Sie dennoch `red` darauf zugreifen, weil dieses Verhalten von der Elternklasse festgelegt ist:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die grundlegende `toString()` Methode ist jedoch berücht

igt nutzlos, weil sie in den meisten Fällen `[object Object]` ausgibt:

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

Innerhalb abgeleiteter Klassen können Sie auf die Methoden der Elternklasse mit `super` zugreifen. Dies ermöglicht Ihnen, verbessende Methoden zu erstellen und Code-Duplikation zu vermeiden.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden auch voneinander, sodass Sie sie ebenfalls überschreiben oder verbessern können.

```js
class ColorWithAlpha extends Color {
  // ...
  static isValid(r, g, b, a) {
    // Call the parent class's isValid() and build on the return value
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse – das ist ein weiterer wesentlicher Aspekt, um JavaScript-Private-Felder als "hart privat" zu gestalten. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme in der Mehrfachvererbung wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch weiterhin möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen von abgeleiteten Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es bleibt eine unbeantwortete Frage: _warum_ würde man eine Klasse verwenden? Die Antwort lautet: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Möglichkeit, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Subtyp-Polymorphismus_) aufgebaut sind. Viele Menschen sind jedoch philosophisch gegen bestimmte Praktiken der OOP und verwenden Klassen daher nicht.

Ein Beispiel dafür, was `Date` Objekte berüchtigt macht, ist, dass sie _veränderbar_ sind.

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

Veränderlichkeit und interner Zustand sind wesentliche Aspekte der objektorientierten Programmierung, machen jedoch den Code oft schwer verständlich – weil jede scheinbar harmlose Operation unerwartete Nebeneffekte haben und das Verhalten in anderen Teilen des Programms verändern kann.

Um Code wiederzuverwenden, greifen wir in der Regel darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP Vererbungsbaum, mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erledigt; in JavaScript kann es durch Mixins erledigt werden. Aber am Ende des Tages ist es immer noch nicht sehr bequem.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf einer höheren Ebene zu organisieren. Ohne die `Color` Klasse müssten wir zum Beispiel ein Dutzend Dienstprogrammfunktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color` Namensraum zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht uns die Einführung privater Felder, bestimmte Daten vor den Benutzern zu verbergen und eine saubere API zu schaffen.

Im Allgemeinen sollten Sie in Betracht ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten bieten. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Klassen speichern eine Sammlung von Elementen und ermöglichen es Ihnen, auf sie durch `get()`, `set()`, `has()` usw. zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht Ihnen die Formatierung, Aktualisierung und das Lesen einzelner Datumskomponenten.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich Fehlermeldung, Stapelverfolgung, Ursache usw. Es ist eine der wenigen Klassen, die eine reiche Vererbungsstruktur aufweist: es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: jede Fehlerklasse stellt einen bestimmten Fehlertyp dar, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code in einer kanonischen objektorientierten Weise zu organisieren, aber ob und wie man ihn nutzt, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
