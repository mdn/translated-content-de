---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototyp-basierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) wird die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr in Einklang mit anderen objektorientierten Sprachen wie Java gebracht. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden Mechanismus der prototypischen Vererbung — alle Muster sind in die prototyp-basierte Vererbung überführbar. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototypketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new` Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

In diesem Tutorial werden wir mit dem gut abstrahierten Klassenmodell spielen und erörtern, welche Semantik Klassen bieten. Wenn Sie tiefer in das zugrundeliegende Prototypsystem eintauchen möchten, können Sie den [Leitfaden zu Vererbung und der Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel setzt voraus, dass Sie bereits mit JavaScript etwas vertraut sind und dass Sie gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, selbst wenn Sie noch keine erstellt haben. Zum Beispiel könnte dies [Ihnen bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay` Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) Methode zurückgegebene, die andere direkt von der `Date` Klasse _selbst_ aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse in JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen davon bekommen, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methode), die von der Klasse hinzugefügt werden.
- Die Klasse selbst speichert einige Eigenschaften (Daten oder Methode), die üblicherweise zur Interaktion mit den Instanzen verwendet werden.

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

Innerhalb eines Klassenrumpfes steht eine Reihe von Merkmalen zur Verfügung.

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

Wenn Sie aus einer Welt vor ES6 kommen, sind Sie möglicherweise vertrauter mit der Verwendung von Funktionen als Konstruktoren. Das oben dargestellte Muster würde ungefähr folgendermaßen mit Funktionskonstruktoren übersetzt:

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

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` zu "rufen", führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Hoisting von Klassendeklarationen

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoben")}} (oder, in einigen Interpretationen, gehoben, aber mit der Einschränkung der temporalen Todeszone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert wird.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben auch Klassendeklarationen ihre Ausdrucksgegenstücke.

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

Vielleicht die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu dienen. Zum Beispiel, wenn wir den `Date` Konstruktor verwenden, erwarten wir, dass er ein neues Objekt gibt, das das übergebene Datum darstellt — welches wir dann mit anderen Methoden der Instanz manipulieren können. In Klassen wird die Instanzerstellung vom [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}} Triplet übergeben.

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

Sie haben erfolgreich eine `Color` Instanz erstellt, und die Instanz hat eine `values` Eigenschaft, die ein Array der übergebenen RGB-Werte ist. Das ist ziemlich äquivalent zu folgendem:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie die einer normalen Funktion — was bedeutet, dass Sie andere Syntaxen verwenden können, wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihm Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden — über die wir als nächstes sprechen werden).

Der `this` Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird davon abgeraten, einen Wert aus dem Konstruktor zurückzugeben — weil, wenn Sie einen nicht-primären Wert zurückgeben, er der Wert des `new` Ausdrucks wird und der Wert von `this` verworfen wird. (Sie können mehr über das, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description) lesen.)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX` Fabrikfunktion, die einfach nur plain Objekte erstellt. Die Stärke von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die Instanzen automatisch Methoden zuweisen.

Zum Beispiel können Sie für `Date` Instanzen eine Reihe von Methoden verwenden, um unterschiedliche Informationen aus einem einfachen Datum abzurufen, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

Für unsere eigene `Color` Klasse können wir eine Methode namens `getRed` hinzufügen, die den Rotwert der Farbe zurückgibt.

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

Das funktioniert auch. Ein Problem dabei ist jedoch, dass bei jedem Erstellen einer `Color` Instanz eine neue Funktion erstellt wird, obwohl sie alle das gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird eine Methode zwischen allen Instanzen geteilt. Zwar kann eine Funktion zwischen allen Instanzen geteilt werden, aber dennoch kann ihr Verhalten unterschiedlich sein, wenn verschiedene Instanzen sie aufrufen, weil der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert wird — sie wird auf dem Prototyp aller Instanzen definiert, oder `Color.prototype`, was ausführlicher in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) erklärt wird.

Wir können ebenso eine neue Methode namens `setRed` erstellen, die den Rotwert der Farbe setzt.

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

Vielleicht fragen Sie sich: Warum sollten wir den Aufwand betreiben, `getRed` und `setRed` Methoden zu verwenden, wenn wir direkt auf das `values` Array in der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die "Kapselung" genannt wird. Das bedeutet, Sie sollten nicht auf die zugrundeliegende Implementierung eines Objekts zugreifen, sondern gut abstrahierte Methoden verwenden, um damit zu interagieren. Zum Beispiel, wenn wir plötzlich beschließen, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen und kann dazu führen, dass Ihre Logik fehlschlägt. Wenn Sie also Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers bricht, wenn Sie einige "harmlose Refaktorisierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erreicht.

Ein privates Feld ist ein Bezeichner, der mit einem `#` (dem Raute-Symbol) vorangestellt wird. Die Raute ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass eine private Eigenschaft nie Namenskollisionen mit einer öffentlichen Eigenschaft haben kann. Um sich auf ein privates Feld irgendwo in der Klasse zu beziehen, müssen Sie es _im Klassenrumpf_ deklarieren (Sie können keine private Eigenschaft im Vorbeigehen erstellen). Abgesehen davon ist ein privates Feld ziemlich gleichwertig mit einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, weil `#privateField` eine spezialisierte Syntax ist, sodass sie eine statische Analyse durchführen und alle Verwendungen privater Felder finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Im Chrome-Konsolelauf ausgeführter Code kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-Sonderentspannung der JavaScript-Syntaxeinschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Dies bedeutet, dass Sie sicher alle Refaktorisierungen an den privaten Feldern Ihrer Klasse vornehmen können, solange das Verhalten der offenlegenden Methoden gleich bleibt.

Nachdem wir das `values` Feld privat gemacht haben, können wir etwas mehr Logik in die `getRed` und `setRed` Methoden einbauen, anstatt sie einfache Durchleitungsmethoden sein zu lassen. Zum Beispiel können wir eine Überprüfung in `setRed` einbauen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values` Eigenschaft freilegen, können unsere Nutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Mit einer gut gekapselten API können wir jedoch unseren Code robuster machen und Logikfehler weiter unten vermeiden.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, solange sie zur gleichen Klasse gehört.

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

Wenn `anotherColor` jedoch keine `Color` Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein privatfeld mit identischem Namen hat, bezieht es sich nicht auf das Gleiche und kann hier nicht zugegriffen werden.) Der Zugriff auf eine nicht existierende private Eigenschaft führt zu einem Fehler anstelle der Rückgabe von `undefined` wie bei normalen Eigenschaften. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Denken Sie daran, dass `#` eine spezielle Bezeichnersyntax ist, und Sie können den Feldnamen nicht so verwenden, als wäre er ein String. `"#values" in anotherColor` würde nach einer Eigenschaft suchen, die buchstäblich `"#values"` heißt, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Eigenschaften: Der gleiche Name darf in einer einzelnen Klasse nicht zweimal deklariert werden, und sie dürfen nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#accessor_felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern erledigen muss, aber kein anderer Teil des Codes sollte darauf zugreifen können.

Stellen Sie sich zum Beispiel vor, dass Sie [HTML-Benutzerelemente](/de/docs/Web/API/Web_components/Using_custom_elements) erstellen, die beim Klicken/Tippen/Aktivieren etwas Kompliziertes tun sollten. Darüber hinaus sollten die etwas komplizierten Dinge, die passieren, wenn auf das Element geklickt wird, nur auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript jemals darauf zugreift oder darauf zugreifen sollte.

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

In diesem Fall ist so ziemlich jedes Feld und jede Methode privat für die Klasse. So bietet es eine Schnittstelle zum Rest des Codes, die im Grunde genau wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Macht, eine der internen Funktionen von `Counter` zu beeinflussen.

## Accessor Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den roten Wert einer Farbe zu lesen und zu schreiben. Wenn Sie aus einer Sprache wie Java kommen, werden Sie mit diesem Muster sehr vertraut sein. Die Verwendung von Methoden zum einfachen Zugriff auf eine Eigenschaft ist jedoch in JavaScript immer noch etwas unergonomisch. _Accessor Felder_ erlauben es uns, etwas zu manipulieren, als ob es eine "tatsächliche Eigenschaft" wäre.

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

Es sieht so aus, als ob das Objekt eine Eigenschaft namens `red` hat — aber tatsächlich existiert eine solche Eigenschaft nicht in der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` vorangestellt, was es erlaubt, sie zu manipulieren, als wären sie Eigenschaften.

Wenn ein Feld nur einen Getter, aber keinen Setter hat, ist es effektiv schreibgeschützt.

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

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typenfehler werfen: "Eigenschaft `red` von #\<Color>, die nur einen Getter hat, kann nicht gesetzt werden". Im Nicht-Strikten Modus wird die Zuordnung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz erlauben, eine Eigenschaft zu haben. Felder sind normalerweise so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig mit der Zuordnung einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch umgewandelt werden in:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode kennengelernt, die das aktuelle Datum zurückgibt. Diese Methode gehört nicht zu einer bestimmten Datum-Instanz — sie gehört zur Klasse selbst. Es wurde jedoch in die `Date`-Klasse aufgenommen, anstatt als globale `DateNow()`-Funktion ausgesetzt zu werden, weil sie hauptsächlich nützlich ist, wenn man mit Datum-Instanzen arbeitet.

> [!NOTE]
> Methoden mit einem Präfix zu versehen, mit dem sie umgehen sollen, wird als "Namensraum" bezeichnet und gilt als gute Praxis. Zum Beispiel hat JavaScript zusätzlich zu der älteren, unpräfixierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt)-Methode auch später die mit dem Präfix versehenen [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzugefügt, um anzuzeigen, dass es sich um Zahlen handelt.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die an der Klasse selbst definiert sind, anstatt an einzelnen Instanzen der Klasse. Diese Funktionen umfassen:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Zum Beispiel, für unsere `Color`-Klasse können wir eine statische Methode erstellen, die überprüft, ob ein gegebenes Triplet ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind ihren Instanz-Gegenstücken sehr ähnlich, außer dass:

- Sie alle mit `static` vorangestellt sind, und
- Sie sind von Instanzen nicht zugänglich.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch eine spezielle Konstruktion, die als [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) bezeichnet wird, ein Codeblock, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit der sofortigen Ausführung von Code, nachdem eine Klasse deklariert wurde. Der einzige Unterschied besteht darin, dass sie Zugriff auf statische private Eigenschaften haben.

## Erweitern und Vererbung

Ein wesentlicher Aspekt, den Klassen zusätzlich zur ergonomischen Kapselung mit privaten Feldern einbringen, ist die _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts „entleihen“ kann, während bestimmte Teile mit seiner eigenen Logik überschrieben oder erweitert werden.

Beispielsweise nehmen wir an, unsere `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das seine Transparenz angibt:

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

Das würde jedoch bedeuten, dass jede Instanz — auch die große Mehrheit, die nicht transparent ist (jene mit einem Alpha-Wert von 1) — den zusätzlichen Alpha-Wert haben müsste, was nicht sehr elegant ist. Außerdem, wenn die Funktionen weiter wachsen, wird unsere `Color`-Klasse sehr aufgebläht und schwer zu pflegen.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die die Klasse angibt, von der sie erbt.

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

Ein paar Dinge sind uns sofort aufgefallen. Erstens, dass wir im Konstruktor `super(r, g, b)` aufrufen. Es ist eine Sprachvorgabe, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) zu rufen, bevor `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren — hier ist es grob äquivalent zu `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` vor `super()` zugreifen — die Sprache verhindert, dass Sie auf das nicht initialisierte `this` zugreifen.

Nachdem die Elternklasse mit der Modifikation von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik durchführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und eine Reihe von Getter/Settern bereitgestellt, um mit diesen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, obwohl `ColorWithAlpha` keinen `get red()` Accessor selbst deklariert, können Sie dennoch `red` zugreifen, weil dieses Verhalten von der Elternklasse spezifiziert wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die Basis-`toString()` Methode ist jedoch notorisch nutzlos, weil sie in den meisten Fällen `[object Object]` ausgibt:

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

Innerhalb von abgeleiteten Klassen können Sie die Methoden der Elternklasse mit `super` aufrufen. Dies ermöglicht es Ihnen, Verbesserung der Methoden zu erstellen und Code-Duplizierung zu vermeiden.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden ebenfalls voneinander, sodass Sie sie auch überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — das ist ein weiterer Schlüsselpunkt für JavaScript private Felder, die „hart privat“ sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme bei der Mehrfachvererbung, wie das [Diamantenproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch dennoch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen von abgeleiteten Klassen sind ebenfalls [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber eine Frage bleibt unbeantwortet: _warum_ sollte man eine Klasse verwenden? Die Antwort lautet: es hängt davon ab.

Klassen führen ein _Paradigma_ ein, oder einen Weg, Ihren Code zu organisieren. Klassen sind die Grundlage der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Subtyp-Polymorphismus_) aufgebaut ist. Viele Menschen sind jedoch philosophisch gegen einige OOP-Praktiken und verwenden daher keine Klassen.

Zum Beispiel ist eine Sache, die `Date` Objekte berüchtigt macht, dass sie _veränderbar_ sind.

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

Veränderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen den Code jedoch oft schwer verständlich — weil jede scheinbar harmlose Operation unerwartete Nebeneffekte haben kann und das Verhalten an anderer Stelle im Programm verändern kann.

Um Code wiederzuverwenden, greifen wir in der Regel auf die Erweiterung von Klassen zurück, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungbaum, mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwer, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann es durch Mixins erreicht werden. Aber letztendlich ist es immer noch nicht sehr bequem.

Auf der hellen Seite sind Klassen ein sehr mächtiges Mittel, unseren Code auf einer höheren Ebene zu organisieren. Zum Beispiel, ohne die `Color` Klasse, müssten wir ein Dutzend Dienstprogramme erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color` Namensraum zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung privater Felder, bestimmte Daten vor nachgelagerten Benutzern zu verbergen, wodurch eine saubere API entsteht.

Im Allgemeinen sollten Sie Klassen in Betracht ziehen, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und eine Menge Verhalten offenlegen. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Klassen speichern eine Sammlung von Elementen und erlauben Ihnen, durch `get()`, `set()`, `has()` usw. darauf zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als einen Unix-Zeitstempel (eine Zahl) und erlaubt es Ihnen, einzelne Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache usw. Es ist eine der wenigen Klassen, die eine reiche Vererbungsstruktur mitbringen: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern erlaubt diese Vererbung die Verfeinerung der Semantik von Fehlern: Jede Fehlerklasse stellt einen spezifischen Fehlertyp dar, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) geprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code auf eine kanonische objektorientierte Weise zu organisieren, aber ob und wie man ihn nutzt, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
