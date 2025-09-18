---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 8c56e742169bd80f27cbc57591f6b3a00e23c873
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache - das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr im Einklang mit anderen objektorientierten Sprachen wie Java. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypischen Vererbungsmechanismus - alle Muster können in prototypische Vererbung umgewandelt werden. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototyp-Ketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden - Sie verwenden den `new` Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und darüber diskutieren, welche Semantiken Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototyp-System eintauchen möchten, können Sie den [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Leitfaden lesen.

Dieses Kapitel geht davon aus, dass Sie bereits mit JavaScript einigermaßen vertraut sind und bereits normale Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich schon Klassen verwendet, auch wenn Sie noch keine erstellt haben. Zum Beispiel könnte Ihnen dies [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile riefen wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz auf, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) zurückgegeben wurde, die andere direkt von der `Date`-Klasse selbst aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen darüber gewinnen, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt werden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zur Interaktion mit den Instanzen verwendet werden.

Diese entsprechen den drei Schlüsselfunktionen von Klassen:

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

Wenn Sie aus einer Welt vor ES6 kommen, sind Sie möglicherweise mit der Verwendung von Funktionen als Konstruktoren vertrauter. Das oben gezeigte Muster würde etwa mit Funktionskonstruktoren in Folgendes übersetzt werden:

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

### Konstruieren einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` zu "aufrufen", führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Klassendeklaration und Hoisting

Anders als Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoistet")}} (oder, in einigen Interpretationen, gehoistet, aber mit der Einschränkung der temporären Totzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie Funktionen haben Klassendeklarationen auch ihre ausdrucksbezogenen Gegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Namen solcher Ausdrücke ist nur für den Körper der Klasse sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu fungieren. Wenn wir zum Beispiel den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt gibt, das die Datumsdaten repräsentiert, die wir eingegeben haben - die wir dann mit anderen Methoden manipulieren können, die die Instanz bereitstellt. In Klassen erfolgt die Erstellung der Instanz durch den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor).

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}} Triplet übergeben.

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

Sie haben erfolgreich eine `Color`-Instanz erstellt, und diese Instanz hat eine `values`-Eigenschaft, die ein Array der von Ihnen übergebenen RGB-Werte ist. Dies ist ziemlich gleichwertig mit dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion - was bedeutet, dass Sie andere Syntaxen verwenden können, wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihm Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden — die wir als Nächstes behandeln).

Der Wert von `this` wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben - denn wenn Sie einen nicht-primitiven Wert zurückgeben, wird dieser zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description) tut.)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich kaum von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Die Kraft von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden auf Instanzen zuweisen.

Zum Beispiel können Sie bei `Date`-Instanzen eine Reihe von Methoden verwenden, um verschiedene Informationen von einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), usw. Diese Werte können auch über die entsprechenden `setX`-Gegenstücke festgelegt werden, wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear).

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

Das funktioniert ebenfalls. Ein Problem dabei ist jedoch, dass jedes Mal, wenn eine `Color`-Instanz erstellt wird, eine neue Funktion erstellt wird, auch wenn sie alle das gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird eine Methode, wenn Sie sie verwenden, zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann sich unterscheiden, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, wo diese Methode gespeichert ist — sie wird im Prototyp aller Instanzen definiert oder `Color.prototype`, was im [Leitfaden Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) ausführlicher erklärt wird.

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

Sie könnten sich fragen: Warum sollten wir uns die Mühe machen, `getRed` und `setRed`-Methoden zu verwenden, wenn wir das `values`-Array direkt auf der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die "Kapselung" genannt wird. Dies bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um mit ihm zu interagieren. Wenn wir zum Beispiel plötzlich entscheiden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) zu repräsentieren:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen, und dies könnte ihre Logik zum Absturz bringen. Wenn Sie also ein Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihren Benutzern verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers durcheinander gerät, wenn Sie einige "harmlose Refaktorisierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, dem ein `#` (Hash-Symbol) vorangestellt ist. Der Hash ist ein integraler Bestandteil des Namens des Feldes, was bedeutet, dass ein privates Feld niemals Namenskollisionen mit einem öffentlichen Feld oder einer Methode haben kann. Um auf ein privates Feld innerhalb der Klasse zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Element spontan erstellen). Davon abgesehen ist ein privates Feld ziemlich gleichwertig mit einer normalen Eigenschaft.

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

Das Zugreifen auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, sodass sie eine statische Analyse durchführen und alle Verwendungen privater Felder finden kann, noch bevor der Code ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur in den DevTools vorhandene Lockerung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder freigeben, gibt es absolut keinen Mechanismus, um sie außerhalb der Klasse abzurufen. Dies bedeutet, dass Sie sicher sind, alle Refaktorisierungen der privaten Felder Ihrer Klasse durchzuführen, solange sich das Verhalten der freigelegten Methoden nicht ändert.

Nachdem wir das `values`-Feld privat gemacht haben, können wir in den `getRed`- und `setRed`-Methoden mehr Logik hinzufügen, anstatt sie einfache Durchgangsmethoden zu machen. Zum Beispiel können wir in `setRed` eine Überprüfung hinzufügen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft exponiert lassen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler weiter unten verhindern.

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

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein identisch benanntes `#values` privates Feld hat, bedeutet das nicht, dass es dasselbe ist und hier darauf zugegriffen werden kann.) Der Zugriff auf ein nicht vorhandenes privates Element führt zu einem Fehler, anstatt `undefined` wie bei normalen Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Beachten Sie, dass das `#` eine spezielle Identifier-Syntax ist und Sie den Feldnamen nicht verwenden können, als wäre es ein String. `"#values" in anotherColor` würde nach einem Eigenschaftsnamen suchen, der buchstäblich `"#values"` ist, anstatt ein privates Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Elemente: Der gleiche Name kann nicht zweimal in einer einzigen Klasse deklariert werden, und sie können nicht gelöscht werden. Beide führen zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#zugriffsmodifizierer-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes sollte darauf zugreifen dürfen.

Zum Beispiel stellen Sie sich vor, HTML-Custom-Elements zu erstellen, die bei Klick/Tap/anders aktiviert etwas relativ Kompliziertes tun sollen. Darüber hinaus sollten die relativ komplizierten Dinge, die passieren, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript darauf zuzugreifen darf (oder sollte).

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

In diesem Fall ist fast jedes Feld und jede Methode privat für die Klasse. Es präsentiert somit eine Schnittstelle zum Rest des Codes, die im Wesentlichen mit einem eingebauten HTML-Element vergleichbar ist. Kein anderer Teil des Programms hat die Möglichkeit, irgendeinen der internen Teile von `Counter` zu beeinflussen.

## Zugriffsmodifizierer-Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus einer Sprache wie Java kommen, sind Sie mit diesem Muster sehr vertraut. Die Verwendung von Methoden, um einfach auf eine Eigenschaft zuzugreifen, ist jedoch in JavaScript immer noch etwas unwirksam. _Accessor Fields_ ermöglichen es uns, etwas zu manipulieren, als ob es eine "tatsächliche Eigenschaft" wäre.

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` - aber tatsächlich existiert keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie werden mit `get` und `set` vorangestellt, was ermöglicht, dass sie manipuliert werden, als wären sie Eigenschaften.

Wenn ein Feld nur einen Getter, aber keinen Setter hat, wird es effektiv schreibgeschützt sein.

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

In [strikter Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler werfen: "Kann Eigenschaft red von #\<Color> nicht setzen, die nur einen Getter hat". Im Nicht-strikten Mode wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz erlauben, eine Eigenschaft zu haben. Felder sind normalerweise so gestaltet, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig mit dem Zuweisen einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch in folgendes umgewandelt werden:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel sind wir auch auf die Methode [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) gestoßen, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner Date-Instanz - sie gehört zur Klasse selbst. Sie wird jedoch auf die `Date`-Klasse gestellt, anstatt als globale `DateNow()`-Funktion exponiert zu sein, da sie hauptsächlich nützlich ist, wenn es um Date-Instanzen geht.

> [!NOTE]
> Das Präfixieren von Dienstprogrammmethoden mit dem, womit sie sich befassen, nennt man "Namenräumung" und wird als gute Praxis angesehen. Zum Beispiel fügte JavaScript zusätzlich zur älteren, nicht-geprüften [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) Methode später die geprüfte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) Methode hinzu, um anzuzeigen, dass sie für Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, anstatt auf einzelnen Instanzen der Klasse. Zu diesen Eigenschaften gehören:

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

Statische Eigenschaften sind ihren Instanz-Gegenstücken sehr ähnlich, mit dem Unterschied, dass:

- Sie alle mit `static` vorangestellt sind, und
- Sie nicht von Instanzen aus zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt, das einen [_statischen Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) darstellt, was ein Block von Code ist, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit der sofortigen Ausführung von Code nach einer Klassendeklaration. Der einzige Unterschied besteht darin, dass sie Zugriff auf statische private Elemente haben.

## Vererbung und Erweiterungen

Eine Schlüsselfunktion, die Klassen mit sich bringen (neben der ergonomischen Kapselung mit privaten Feldern), ist _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts "ausleihen" kann, während es bestimmte Teile mit seiner eigenen Logik überschreibt oder erweitert.

Wenn zum Beispiel unsere `Color`-Klasse jetzt Transparenz unterstützen soll, könnten wir versucht sein, ein neues Feld hinzuzufügen, das ihre Transparenz anzeigt:

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

Dies würde jedoch bedeuten, dass jede Instanz - selbst die große Mehrheit, die nicht transparent ist (also mit einem Alphawert von 1) - den zusätzlichen Alphawert haben müsste, was nicht sehr elegant wäre. Außerdem, wenn die Funktionen weiter wachsen, wird unsere `Color`-Klasse sehr aufgebläht und schwer zu warten sein.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die angibt, von welcher Klasse sie erbt.

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

Es gibt einige Dinge, die sofort auffallen. Erstens, dass wir im Konstruktor `super(r, g, b)` aufrufen. Es ist eine Sprachanforderung, `super()` zu rufen, bevor `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren - hier ist es ungefähr gleichwertig mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` vor `super()` zugreifen - die Sprache verhindert, dass Sie auf das nicht initialisierte `this` zugreifen.

Nachdem die Elternklasse mit der Modifikation von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um mit ihnen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, betrachten Sie den `get red()`-Zugriffsmodifizierer, den wir zur `Color` im Abschnitt [Zugriffsmodifizierer-Felder](#zugriffsmodifizierer-felder) hinzugefügt haben - auch wenn wir keinen in `ColorWithAlpha` deklariert haben, können wir immer noch auf `red` zugreifen, da dieses Verhalten durch die Elternklasse angegeben ist:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden, wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), definiert. Die grundlegende `toString()`-Methode ist jedoch notorisch nutzlos, da sie in den meisten Fällen `[object Object]` ausgibt:

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

Innerhalb abgeleiteter Klassen können Sie auf die Methoden der Elternklasse mit `super` zugreifen. Dies ermöglicht es Ihnen, erweiternde Methoden zu erstellen und Code-Duplikationen zu vermeiden.

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

Wenn Sie `extends` verwenden, erben auch die statischen Methoden voneinander, sodass Sie sie auch überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse - dies ist ein weiterer wichtiger Aspekt dafür, dass JavaScript-Private-Felder "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren keinen Zugriff auf _irgendeinen_ externen Code.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies vermeidet Probleme in der mehrfachen Vererbung wie das [Diamantproblem](https://de.wikipedia.org/wiki/Mehrfachvererbung#Das_Diamantproblem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt von mehrfacher Vererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber eine Frage bleibt unbeantwortet: _warum_ würde man eine Klasse verwenden? Die Antwort ist: Es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Möglichkeit, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://de.wikipedia.org/wiki/Vererbung_(Objektorientierte_Programmierung)>) und [Polymorphie](<https://de.wikipedia.org/wiki/Polymorphismus_(Informatik)>) (insbesondere _Subtyp-Polymorphie_) basiert sind. Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen daher nicht.

Ein Beispiel, warum `Date`-Objekte berüchtigt sind, ist, dass sie _veränderlich_ sind.

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

Veränderlichkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen jedoch oft den Code schwer nachvollziehbar - da jede scheinbar harmlose Operation unerwartete Nebenwirkungen haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern erzeugen kann.

![Typischer OOP-Vererbungsbaum mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwer, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann dies durch Mixins erreicht werden. Aber letztendlich ist es immer noch nicht sehr bequem.

Auf der helleren Seite sind Klassen eine sehr leistungsfähige Möglichkeit, unseren Code auf höherer Ebene zu organisieren. Zum Beispiel, ohne die `Color`-Klasse, müssten wir möglicherweise ein Dutzend von Dienstprogrammfunktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namespace zusammenfassen, was die Lesbarkeit verbessert. Zudem ermöglicht die Einführung privater Felder uns, bestimmte Daten vor den nachgelagerten Benutzern zu verbergen, wodurch eine saubere API erstellt wird.

Im Allgemeinen sollten Sie in Betracht ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und eine Menge Verhalten ausstellen. Nehmen Sie die eingebauten JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Klassen speichern eine Sammlung von Elementen und ermöglichen es Ihnen, auf sie mit dem Schlüssel über `get()`, `set()`, `has()`, etc. zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, einzelne Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache, etc. Es ist eine der wenigen Klassen, die mit einer reichen Vererbungsstruktur geliefert wird: es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code auf kanonische objektorientierte Weise zu organisieren, aber ob und wie er verwendet wird, liegt vollständig im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
