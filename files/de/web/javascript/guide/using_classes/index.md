---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr im Einklang mit anderen objektorientierten Sprachen wie Java. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen zu unterscheiden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypischen Vererbungsmechanismus — alle Patterns sind auf Prototyp-Vererbung übertragbar. Klassen selbst sind ebenfalls normale JavaScript-Werte und haben ihre eigenen Prototyp-Ketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

In diesem Tutorial werden wir uns mit dem gut abstrahierten Klassenmodell beschäftigen und diskutieren, welche Semantik Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototyp-System eintauchen möchten, können Sie den [Vererbungs- und Prototyp-Ketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Leitfaden lesen.

Dieses Kapitel setzt voraus, dass Sie bereits mit JavaScript vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie keine erstellt haben. Zum Beispiel könnte Ihnen das [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt, die wir `bigDay` genannt haben. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wurde, und die andere, die direkt von der `Date`-Klasse _selbst_ aufgerufen wurde, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Vorstellungen davon gewinnen, was Klassen tun:

- Klassen erstellen Objekte über den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt werden.
- Die Klasse speichert selbst einige Eigenschaften (Daten oder Methoden), die normalerweise zur Interaktion mit Instanzen verwendet werden.

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

Wenn Sie aus einer Zeit vor ES6 kommen, sind Sie vielleicht eher mit der Verwendung von Funktionen als Konstruktoren vertraut. Das obige Pattern würde in etwa folgendermaßen mit Funktionskonstruktoren übersetzt werden:

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
> Private Felder und Methoden sind neue Merkmale in Klassen ohne triviale Entsprechung in Funktionskonstruktoren.

### Klasse konstruieren

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mithilfe des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` aufzurufen, führt jedoch zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Klassendeklaration Hoisting

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoben")}} (oder, in einigen Interpretationen, gehoben, aber mit der Einschränkung der temporären Totzone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert wird.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ähnelt Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie bei Funktionen haben Klassendeklarationen auch Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassen-Ausdrücke können auch Namen haben. Der Name des Ausdrucks ist nur für den Körpers der Klasse sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht ist die wichtigste Aufgabe einer Klasse, als "Fabrik" für Objekte zu fungieren. Wenn wir zum Beispiel den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt gibt, das die Datum-Daten darstellt, die wir eingegeben haben — die wir dann mit anderen Methoden bearbeiten können, die die Instanz bereitstellt. In Klassen wird die Instanzerstellung durch den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) vorgenommen.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Triplet eingeben.

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

Sie sollten eine Ausgabe ähnlich dieser sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der RGB-Werte ist, die Sie eingegeben haben. Das entspricht in etwa dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion — das bedeutet, Sie können andere Syntaxen wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden:

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

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben — denn wenn Sie einen nicht-primitiven Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht wesentlich von einer `createX` Fabrik-Funktion, die nur einfache Objekte erstellt. Der Vorteil von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden an Instanzen zuweisen.

Zum Beispiel können Sie bei `Date`-Instanzen eine Reihe von Methoden verwenden, um unterschiedliche Informationen aus einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Dies funktioniert auch. Ein Problem ist jedoch, dass dies jedes Mal eine neue Funktion erstellt, wenn eine `Color`-Instanz erstellt wird, auch wenn sie alle das gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird, wenn Sie eine Methode verwenden, diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber dennoch ihr Verhalten ändern, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist — sie ist im Prototyp aller Instanzen oder `Color.prototype` definiert, was im Detail im [Vererbungs- und Prototyp-Ketten](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Leitfaden erklärt wird.

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

Sie fragen sich vielleicht: Warum sollten wir uns die Mühe machen, `getRed` und `setRed` Methoden zu verwenden, wenn wir direkt auf das `values`-Array in der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die als "Kapselung" bezeichnet wird. Das bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um mit ihm zu interagieren. Wenn wir zum Beispiel plötzlich entscheiden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) statt als RGB darzustellen:

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

Die Annahme des Benutzers, dass `values` die RGB-Werte bedeutet, bricht plötzlich zusammen, und es könnte dazu führen, dass ihre Logik nicht mehr korrekt funktioniert. Wenn Sie also Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, um sowohl die API sauber zu halten als auch zu verhindern, dass der Code des Benutzers zusammenbricht, wenn Sie einige "harmlose Refaktorisierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, dem ein `#` (Das Rautezeichen) vorangestellt ist. Die Raute ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass ein privates Feld niemals einen Namenkonflikt mit einem öffentlichen Feld oder einer Methode haben kann. Um auf ein privates Feld irgendwo in der Klasse zu verweisen, müssen Sie es _im Klassenkörper deklarieren_ (Sie können kein privates Element im Handumdrehen erstellen). Abgesehen davon ist ein privates Feld nahezu gleichwertig mit einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, weil `#privateField` eine spezielle Syntax ist, sodass sie einige statische Analysen durchführen und alle Verwendungen privater Felder finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur in den Entwicklertools geltende Entspannung der JavaScript-Syntaxeinschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder freigeben, gibt es absolut keinen Mechanismus, um sie außerhalb der Klasse zu erhalten. Das bedeutet, dass es sicher ist, beliebige Refaktorisierungen der privaten Felder Ihrer Klasse vorzunehmen, solange das Verhalten der freigelegten Methoden gleich bleibt.

Nachdem wir das Feld `values` privat gemacht haben, können wir etwas mehr Logik in die `getRed` und `setRed` Methoden einfügen, anstatt sie einfache Durchreichmethoden sein zu lassen. Wir können zum Beispiel eine Überprüfung in `setRed` hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft freilegen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt auf `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler nachgelagerter Prozesse verhindern.

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

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein gleichnamiges `#values` privates Feld hat, bezieht es sich nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf ein nicht existentes privates Element führt zu einem Fehler, anstatt `undefined` wie normale Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld in einem Objekt existiert und Sie ohne `try`/`catch` darauf zugreifen möchten, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden.

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
> Beachten Sie, dass `#` eine spezielle Identifikatorsyntax ist und Sie den Feldnamen nicht verwenden können, als wäre es ein String. `"#values" in anotherColor` würde nach einer Eigenschaft namens `" #values"` suchen, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Elemente: Der gleiche Name kann nicht zweimal in einer einzelnen Klasse deklariert werden, und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#zugriffs-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes darauf zugreifen darf.

Stellen Sie sich zum Beispiel vor, dass [HTML-benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) erstellt werden, die etwas kompliziertes tun sollen, wenn sie angeklickt/getippt oder anderweitig aktiviert werden. Darüber hinaus sollten die komplizierten Dinge, die passieren, wenn das Element angeklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript darauf zugreifen (oder darauf zugreifen dürfen sollte).

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

In diesem Fall sind praktisch alle Felder und Methoden privat für die Klasse. Dadurch wird eine Schnittstelle zum Rest des Codes bereitgestellt, die im Wesentlichen wie ein eingebautes HTML-Element aussieht. Kein anderer Teil des Programms hat die Macht, eines der internen Elemente von `Counter` zu beeinflussen.

## Zugriffs-Felder

`color.getRed()` und `color.setRed()` ermöglichen uns das Lesen und Schreiben des roten Werts einer Farbe. Wenn Sie aus Sprachen wie Java kommen, werden Sie sehr vertraut mit diesem Muster sein. Der Gebrauch von Methoden zum einfachen Zugriff auf eine Eigenschaft ist jedoch in JavaScript immer noch etwas unergonomisch. _Accessor Fields_ (Zugriffs-Felder) ermöglichen es uns, etwas zu manipulieren, als ob es eine "tatsächliche Eigenschaft" wäre.

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` — aber tatsächlich gibt es keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` vorangehend, wodurch sie manipuliert werden können, als ob sie Eigenschaften wären.

Wenn ein Feld nur über einen Getter, aber keinen Setter verfügt, wird es effektiv schreibgeschützt.

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

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler auslösen: "Eigenschaft red von #\<Color> kann nicht gesetzt werden, da sie nur einen Getter hat". Im Nicht-Strict-Mode wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind in der Regel so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichbedeutend mit dem Zuordnen einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch in folgendes umgewandelt werden:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel sind wir auch auf die Methode [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) gestoßen, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner Date-Instanz — sie gehört zur Klasse selbst. Allerdings wird sie auf der `Date`-Klasse platziert anstatt als globale `DateNow()`-Funktion veröffentlicht zu werden, weil sie hauptsächlich dann nützlich ist, wenn man sich mit Date-Instanzen beschäftigt.

> [!NOTE]
> Das Präfixn von Hilfsmethoden mit dem, womit sie sich beschäftigen, wird "namespacing" genannt und wird als gute Praxis betrachtet. Zum Beispiel hat JavaScript zusätzlich zur älteren, nicht vorgezeichneten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) Funktion auch die vorgezeichnete [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) Methode hinzugefügt, um anzudeuten, dass sie sich mit Zahlen beschäftigt.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenmerkmalen, die auf der Klasse selbst definiert sind, anstatt auf den einzelnen Instanzen der Klasse. Zu diesen Merkmalen gehören:

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

Statische Eigenschaften sind sehr ähnlich zu ihren Instanz-Gegenstücken, außer dass:

- Sie alle mit `static` vorgezeichnet sind, und
- Sie sind nicht von Instanzen aus zugänglich.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt, das als [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) bekannt ist, welcher ein Codeblock ist, der ausgeführt wird, wenn die Klasse zuerst geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichbedeutend mit dem sofortigen Ausführen eines Codes nach einer Klassendeklaration. Der einzige Unterschied ist, dass sie Zugriff auf statische private Elemente haben.

## Erweitert und Vererbung

Ein Schlüsselmerkmal, das Klassen mit sich bringen (zusätzlich zu ergonomischer Kapselung mit privaten Feldern), ist _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil der Verhaltensweisen eines anderen Objekts "ausleihen" kann, während bestimmte Teile mit seiner eigenen Logik überschrieben oder erweitert werden.

Nehmen wir zum Beispiel an, unser `Color`-Klasse muss nun Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das die Transparenz angibt:

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

Dies bedeutet jedoch, dass jede Instanz — selbst die große Mehrheit, die nicht transparent ist (diejenigen mit einem Alphawert von 1) — den zusätzlichen Alpha-Wert haben muss, was nicht sehr elegant ist. Außerdem wird unsere `Color`-Klasse, wenn die Funktionen weiter wachsen, sehr aufgebläht und schwer zu pflegen.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der übergeordneten Klasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) Klausel deklariert, die die Klasse angibt, von der sie erbt.

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

Es gibt einige Dinge, die sofort auffallen. Zuerst ist, dass wir im Konstruktor `super(r, g, b)` aufrufen. Es ist eine Sprachanforderung, `super()` aufzurufen, bevor auf `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der übergeordneten Klasse auf, um `this` zu initialisieren — hier ungefähr gleichbedeutend mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie dürfen nicht auf `this` zugreifen, bevor `super()` — die Sprache verhindert, dass auf das nicht initialisierte `this` zugegriffen wird.

Nachdem die übergeordnete Klasse mit der Änderung von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik anwenden. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und bieten auch ein Paar Getter/Setter zum Interagieren mit ihnen.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, obwohl `ColorWithAlpha` keinen `get red()`-Accessor selbst angibt, können Sie dennoch auf `red` zugreifen, weil dieses Verhalten von der Elternklasse angegeben wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Elternklasse überschreiben. Zum Beispiel erbt jede Klasse implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Wenn jedoch die Basis `toString()` Methode berüchtigt nutzlos ist, weil sie in den meisten Fällen `[object Object]` druckt:

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

Innerhalb von abgeleiteten Klassen können Sie auf die Methoden der Elternklasse mit `super` zugreifen. Dies ermöglicht es Ihnen, Verbesserungsmethoden zu erstellen und Code-Duplizierung zu vermeiden.

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

Wenn Sie `extends` verwenden, erben auch die statischen Methoden voneinander, sodass Sie sie ebenfalls überschreiben oder verbessern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — dies ist ein weiterer Schlüsselaspekt, dass JavaScript privaten Felder "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer anderen Klasse erben. Dies verhindert Probleme bei der Mehrfachvererbung, wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen von abgeleiteten Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es bleibt eine Frage unbeantwortet: _warum_ sollte man eine Klasse verwenden? Die Antwort ist: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Möglichkeit, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Untertyp-Polymorphismus_) basieren. Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen deshalb nicht.

Zum Beispiel ist eines der Dinge, die `Date` Objekte berüchtigt machen, dass sie _veränderbar_ sind.

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

Veränderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen es jedoch oft schwierig, den Code zu begreifen — weil jede scheinbar unschuldige Operation unerwartete Nebenwirkungen haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungsbaum mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen gemacht; in JavaScript kann es durch Mixins gemacht werden. Aber letztlich ist es immer noch nicht sehr praktisch.

Auf der positiven Seite sind Klassen ein sehr mächtiges Mittel, um unseren Code auf einer höheren Ebene zu organisieren. Zum Beispiel könnten wir ohne die `Color` Klasse ein Dutzend Hilfsfunktionen erstellen müssen:

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

Aber mit Klassen können wir sie alle unter dem `Color` Namespace zusammenfassen, was die Lesbarkeit verbessert. Außerdem ermöglicht die Einführung von privaten Feldern, bestimmte Daten vor nachgelagerten Benutzern zu verbergen, wodurch eine saubere API geschaffen wird.

Im Allgemeinen sollten Sie in Betracht ziehen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und ein umfangreiches Verhalten bereitstellen. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Klassen speichern eine Sammlung von Elementen und ermöglichen es Ihnen, sie per Schlüssel zuzugreifen, indem Sie `get()`, `set()`, `has()`, usw. verwenden.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, bestimmte Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache, usw. Es ist eine der wenigen Klassen, die mit einer reichen Vererbungstruktur kommen: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern erlaubt diese Vererbung, die Semantik von Fehlern zu verfeinern: Jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code in einer kanonischen objektorientierten Weise zu organisieren, jedoch liegt es ganz im Ermessen des Programmierers, ob und wie er ihn verwenden möchte.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
