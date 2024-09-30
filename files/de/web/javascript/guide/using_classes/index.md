---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypenbasierte Sprache – das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) entspricht die Erstellung von Hierarchien von Objekten und die Vererbung von Eigenschaften und deren Werten jedoch stärker der anderer objektorientierter Sprachen wie Java. In diesem Abschnitt zeigen wir, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den vorhandenen prototypischen Vererbungsmechanismus – alle Muster sind in prototypische Vererbung konvertierbar. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototypketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden – Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und diskutieren, welche Semantik Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypsystem eintauchen möchten, können Sie den [Leitfaden zu Vererbung und Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel geht davon aus, dass Sie bereits mit JavaScript etwas vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie noch keine erstellt haben. Zum Beispiel [mag Ihnen dies bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Numbers_and_dates):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine [Methode](/de/docs/Glossary/Method) [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wurde, die andere direkt von der Klasse `Date` selbst aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige Grundideen darüber gewinnen, was Klassen tun:

- Klassen erstellen Objekte über den Operator [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).
- Jedes Objekt hat einige von der Klasse hinzugefügte Eigenschaften (Daten oder Methoden).
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise verwendet werden, um mit Instanzen zu interagieren.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklaration einer Klasse

Klassen werden normalerweise mit _Klassen-Deklarationen_ erstellt.

```js
class MyClass {
  // class body...
}
```

Innerhalb eines Klassenrumpfes stehen eine Reihe von Funktionen zur Verfügung.

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

Wenn Sie aus einer Welt vor ES6 kommen, sind Sie möglicherweise eher vertraut mit der Verwendung von Funktionen als Konstruktoren. Das oben gezeigte Muster würde ungefähr wie folgt mit Funktionskonstruktoren aussehen:

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
> Private Felder und Methoden sind neue Funktionen in Klassen ohne triviale Entsprechung in Funktionskonstruktoren.

### Konstruktion einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Wenn Sie jedoch versuchen, eine Klasse ohne `new` aufzurufen, wird ein Fehler zurückgegeben.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Klassen-Deklarationsheben

Im Gegensatz zu Funktionsdeklarationen werden Klassen-Deklarationen nicht [gehoben](/de/docs/Glossary/Hoisting) (oder in einigen Interpretationen gehoben, jedoch mit der Restriktion der temporalen Totzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ähnelt Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur für den Klassenrumpf sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht ist die wichtigste Aufgabe einer Klasse, als "Fabrik" für Objekte zu fungieren. Wenn wir beispielsweise den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt liefert, das das Datumsdatum darstellt, das wir übergeben haben — das wir dann mit anderen Methoden manipulieren können, die die Instanz bereitstellt. In Klassen erfolgt die Instanz-Erstellung durch den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor).

Zum Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben durch übergeben eines [RGB](/de/docs/Glossary/RGB)-Triplets.

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

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der übergebenen RGB-Werte ist. Das entspricht ziemlich genau dem folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion — was bedeutet, dass Sie andere Syntaxen wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden können:

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

Innerhalb eines Klassenkonstruktors verweist der Wert von `this` auf die neu erstellte Instanz. Sie können Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden — die wir als nächstes behandeln werden).

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben — denn wenn Sie einen nicht primitiven Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht wesentlich von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Die Stärke von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden Instanzen zuweisen.

Zum Beispiel können Sie für `Date`-Instanzen eine Reihe von Methoden verwenden, um unterschiedliche Informationen aus einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), [Tag der Woche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können auch diese Werte über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Ohne Methoden könnte man versucht sein, die Funktion im Konstruktor zu definieren:

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

Das funktioniert auch. Ein Problem dabei ist jedoch, dass jedes Mal, wenn eine `Color`-Instanz erstellt wird, eine neue Funktion erstellt wird, selbst wenn sie alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird, wenn Sie eine Methode verwenden, diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten unterscheidet sich trotzdem, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie sich fragen, _wo_ diese Methode gespeichert ist — sie ist auf dem Prototyp aller Instanzen definiert, also `Color.prototype`, was im Detail in [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) erklärt wird.

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

Sie fragen sich vielleicht: Warum sollten wir uns die Mühe machen, `getRed` und `setRed`-Methoden zu verwenden, wenn wir direkt auf das `values`-Array der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die "Kapselung" genannt wird. Das bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um damit zu interagieren. Wenn wir beispielsweise plötzlich entscheiden würden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, würde plötzlich zusammenbrechen und könnte seine Logik zum Scheitern bringen. Wenn Sie also ein Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers bricht, wenn Sie einige "harmlose Refaktorisierungen" durchführen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erreicht.

Ein privates Feld ist ein Bezeichner, dem ein `#` (Rautezeichen) vorangestellt ist. Die Raute ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass ein privates Feld niemals Namenskollisionen mit einem öffentlichen Feld haben kann. Um in der Klasse auf ein privates Feld zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Feld spontan erstellen). Abgesehen davon ist ein privates Feld grundsätzlich gleichwertig mit einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse führt zu einem frühen Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, sodass sie eine statische Analyse durchführen und alle Verwendung privater Felder finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Im Chrome-Konsolencode können private Eigenschaften außerhalb der Klasse abgerufen werden. Dies ist eine nur für Entwicklerwerkzeuge gültige Lockerung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder exponieren, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Das bedeutet, dass Sie alle Refaktorisierungen der privaten Felder Ihrer Klasse sicher durchführen können, solange das Verhalten der exponierten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir etwas mehr Logik in den Methoden `getRed` und `setRed` hinzufügen, anstatt sie zu einfachen Durchleitungsmethoden zu machen. Wir können zum Beispiel eine Überprüfung in `setRed` hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft freigeben, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und logische Fehler downstream verhindern.

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

Wenn `anotherColor` jedoch keine Instanz von Color ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein privat identisch benanntes `#values`-Feld hat, bezieht sich dies nicht auf dasselbe und kann hier nicht abgerufen werden.) Der Zugriff auf eine nicht vorhandene private Eigenschaft führt zu einem Fehler, anstatt `undefined` wie normale Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld in einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden.

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
> Denken Sie daran, dass `#` ein spezieller Identifiziersyntax ist und Sie den Feldnamen nicht so verwenden können, als ob es ein String wäre. `"#values" in anotherColor` würde nach einem Feldeintrag suchen, der tatsächlich `"#values"` heißt, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Eigenschaft: Der gleiche Name kann nicht zweimal in einer Klasse deklariert werden und sie können nicht gelöscht werden. Beide führen zu frühen Syntaxfehlern.

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

Methoden, [Getters und Setters](#accessor-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes ihn aufrufen sollte.

Beispielsweise stellen Sie sich vor, dass HTML-Custom-Elemente [erstellen](/de/docs/Web/API/Web_components/Using_custom_elements), die beim Klick/Antippen oder anderweitig aktiviert werden, etwas Kompliziertes tun sollen. Darüber hinaus sollten die etwas komplizierten Dinge, die passieren, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript sie jemals (oder sollte sie) jemals darauf zugreifen.

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

In diesem Fall ist fast jedes Feld und jede Methode privat zur Klasse. So bietet es eine Schnittstelle zu dem restlichen Code, die im Wesentlichen genauso wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms kann die Interna von `Counter` beeinflussen.

## Accessor-Felder

`color.getRed()` und `color.setRed()` ermöglichen uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, wird Ihnen dieses Muster sehr vertraut sein. In JavaScript ist es jedoch immer noch etwas unergonomisch, Methoden einfach zum Zugriff auf eine Eigenschaft zu verwenden. _Accessor-Felder_ ermöglichen es uns, etwas so zu manipulieren, als wäre es eine "echte Eigenschaft".

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` — aber eigentlich existiert keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` präfixiert, wodurch sie manipuliert werden können, als wären es Eigenschaften.

Wenn ein Feld nur einen Getter hat, aber keinen Setter, ist es faktisch schreibgeschützt.

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

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler auslösen: "Kann Eigenschaft red nicht setzen, die nur einen Getter hat". Im Nicht-Strict-Mode wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind normalerweise unabhängig von den Parametern des Konstruktors konzipiert.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig damit, eine Eigenschaft zu `this` zuzuweisen. Zum Beispiel kann das obige Beispiel auch übersetzt werden in:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode gesehen, die das aktuelle Datum zurückgibt. Diese Methode gehört nicht zu einer bestimmten Datumsinstanz — sie gehört zur Klasse selbst. Es ist jedoch in der `Date`-Klasse und nicht als globale `DateNow()`-Funktion exponiert, da es hauptsächlich nützlich ist, wenn man mit Datumsinstanzen arbeitet.

> [!NOTE]
> Das Präfixieren von Hilfsmethoden mit dem, womit sie umgehen, wird "Namespacing" genannt und gilt als gute Praxis. Zum Beispiel fügte JavaScript zusätzlich zu der älteren, nicht präfixierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt)-Methode später die präfixierte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzu, um anzuzeigen, dass sie zum Umgang mit Zahlen ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst und nicht auf einzelnen Instanzen der Klasse definiert sind. Zu diesen Funktionen gehören:

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

- Sie alle mit `static` präfixiert sind, und
- Sie nicht von Instanzen aus zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt namens [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), was ein Block von Code ist, der ausgeführt wird, wenn die Klasse erstmals geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit dem sofortigen Ausführen von Code, nachdem eine Klasse deklariert wurde. Der einzige Unterschied besteht darin, dass sie Zugriff auf private statische Eigenschaften haben.

## Erweitern und Vererbung

Ein Schlüsselmerkmal, das Klassen einführen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern), ist _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts "leihen" kann, während es bestimmte Teile mit eigener Logik überschreibt oder verbessert.

Wenn unser Beispiel `Color` nun Transparenz unterstützen muss, könnten wir versucht sein, ein neues Feld hinzuzufügen, das die Transparenz angibt:

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

Das würde jedoch bedeuten, dass jede Instanz — auch die überwiegende Mehrheit, die nicht transparent ist (siehe eine Alpha-Wert von 1) — den zusätzlichen Alphawert haben muss, was nicht sehr elegant ist. Wenn die Features weiter wachsen, wird unsere `Color`-Klasse sehr aufgebläht und schwer zu warten.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die die Klasse angibt, die sie erweitert.

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

Es gibt einige Dinge, die sofort auffallen. Erstens rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Sprachvoraussetzung, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufzurufen, bevor auf `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren — hier ist es ungefähr gleichwertig mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` vor `super()` zugreifen — die Sprache verhindert, dass Sie auf das nicht initialisierte `this` zugreifen.

Nachdem die Elternklasse mit der Modifizierung von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik implementieren. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um damit zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Beispielsweise, obwohl `ColorWithAlpha` keinen `get red()`-Accessor selbst deklariert, können Sie immer noch auf `red` zugreifen, da dieses Verhalten von der Elternklasse festgelegt wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Elternklasse überschreiben. Beispielsweise erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die Basis `toString()`-Methode ist jedoch notorisch nutzlos, da sie in den meisten Fällen `[object Object]` ausgibt:

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

In abgeleiteten Klassen können Sie auf die Methoden der Elternklasse mit `super` zugreifen. Dadurch können Sie Methoden verbessern und Code-Duplizierung vermeiden.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden ebenfalls voneinander, sodass Sie sie auch überschreiben oder verbessern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — dies ist ein weiterer wichtiger Aspekt, dass JavaScript private Felder "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur eine Klasse erweitern. Dies verhindert Probleme bei der Mehrfachvererbung wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir haben uns darauf konzentriert, _wie_ Klassen verwendet werden können, aber es gibt eine unbeantwortete Frage: _warum_ sollte man eine Klasse verwenden? Die Antwort ist: Es kommt darauf an.

Klassen führen ein _Paradigma_ ein oder eine Art und Weise, Ihren Code zu organisieren. Klassen sind die Grundlage der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Subtyping-Polymorphismus_) aufgebaut ist. Viele Menschen stehen jedoch bestimmten OOP-Praktiken philosophisch gegen und verwenden daher keine Klassen.

Ein Beispiel: Ein Problem, das `Date`-Objekte berüchtigt macht, ist, dass sie _veränderlich_ sind.

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

Veränderlichkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, erschweren jedoch oft das Verstehen des Codes — da jede scheinbar harmlose Operation unerwartete Nebenwirkungen haben kann und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise dazu, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungsbaum mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur von einer anderen Klasse erben kann. Häufig möchten wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann es durch Mixins erreicht werden. Aber letztendlich ist es immer noch nicht sehr bequem.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf höherer Ebene zu organisieren. Zum Beispiel, ohne die `Color`-Klasse, müssten wir möglicherweise ein Dutzend von Hilfsfunktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namensraum gruppieren, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung von privaten Feldern, dass wir bestimmte Daten vor nachgelagerten Benutzern verbergen und eine saubere API erstellen.

Im Allgemeinen sollten Sie erwägen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten bereitstellen. Nehmen Sie eingebauten JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Klassen speichern eine Sammlung von Elementen und ermöglichen es Ihnen, mit `get()`, `set()`, `has()` usw. darauf zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, einzelne Datumskomponenten zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich Fehlermeldung, Stack-Trace, Ursache usw. Es ist eine der wenigen Klassen, die mit einer reichen Vererbungsstruktur ausgestattet sind: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern ermöglicht diese Vererbung, die Semantik von Fehlern zu verfeinern: Jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code in einer kanonischen objektorientierten Weise zu organisieren, aber ob und wie man ihn verwendet, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
