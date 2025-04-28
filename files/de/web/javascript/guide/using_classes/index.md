---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Hinzufügung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel mehr im Einklang mit anderen objektorientierten Sprachen wie Java. In diesem Abschnitt zeigen wir, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypischen Vererbungsmechanismus — alle Muster sind auf eine prototypbasierte Vererbung übertragbar. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototypenketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new` Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und die Semantik besprechen, die Klassen bieten. Wenn Sie tief in das darunterliegende Prototypesystem eintauchen möchten, können Sie den [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) Leitfaden lesen.

Dieses Kapitel setzt voraus, dass Sie bereits mit JavaScript vertraut sind und normale Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie einige praktische Erfahrungen mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich schon Klassen verwendet, auch wenn Sie noch keine erstellt haben. Zum Beispiel könnte Ihnen das folgende [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) Methode zurückgegeben wurde, und die andere, die direkt von der `Date`-Klasse _selbst_ aufgerufen wurde, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse in JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen bekommen, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt wurden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zum Interagieren mit Instanzen verwendet werden.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und -felder;
- Statische Methoden und Felder.

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

Wenn Sie aus einer Zeit vor ES6 kommen, sind Sie möglicherweise eher mit der Verwendung von Funktionen als Konstruktoren vertraut. Das obige Muster lässt sich grob mit Funktionskonstruktoren so ausdrücken:

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
> Private Felder und Methoden sind neue Funktionen in Klassen, für die es kein triviales Äquivalent in Funktionskonstruktoren gibt.

### Konstruktion einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Wenn Sie jedoch versuchen, eine Klasse ohne `new` aufzurufen, führt das zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Hoisting von Klassendeklarationen

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoben")}} (oder, in einigen Interpretationen, gehoben, jedoch mit der temporalen Totzone-Einschränkung), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur im Körper der Klasse sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu fungieren. Zum Beispiel, wenn wir den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt liefert, das die Datumsdaten darstellt, die wir eingegeben haben — welches wir dann mit anderen Methoden, die die Instanz bereitstellt, manipulieren können. In Klassen wird die Instanzerstellung vom [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe darstellt. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Tripel übergeben.

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

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der eingegebenen RGB-Werte ist. Das ist ziemlich gleichbedeutend mit dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie die einer normalen Funktion — was bedeutet, dass Sie andere Syntaxen verwenden können, wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können Eigenschaften zuweisen oder vorhandene Eigenschaften (insbesondere Methoden — die wir als nächstes behandeln werden) lesen.

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX` Fabrikfunktion, die einfach einfache Objekte erstellt. Die Stärke von Klassen ist jedoch, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden zu Instanzen zuweisen.

Zum Beispiel können Sie bei `Date`-Instanzen eine Vielzahl von Methoden verwenden, um verschiedene Informationen von einem einzigen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay), usw. Sie können diese Werte auch durch die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Das funktioniert auch. Ein Problem dabei ist jedoch, dass bei jedem Erstellen einer `Color`-Instanz eine neue Funktion erstellt wird, selbst wenn sie alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird, wenn Sie eine Methode verwenden, diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, hat aber trotzdem ein unterschiedliches Verhalten, wenn sie von verschiedenen Instanzen aufgerufen wird, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist — sie ist im Prototyp aller Instanzen definiert, oder `Color.prototype`, was im Detail im [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) erklärt wird.

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

Sie fragen sich vielleicht: warum sollten wir uns die Mühe machen, `getRed` und `setRed` Methoden zu verwenden, wenn wir direkt auf das `values`-Array auf der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die "Kapselung" genannt wird. Das bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um damit zu interagieren. Zum Beispiel, wenn wir plötzlich beschließen, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) darzustellen:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen, und es könnte dazu führen, dass ihre Logik fehlschlägt. Wenn Sie also Implementierer einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor dem Benutzer verbergen, um sowohl die API sauber zu halten als auch zu verhindern, dass der Code des Benutzers bricht, wenn Sie einige "harmlose Refaktorisierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Rautezeichen) versehen ist. Die Raute ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass sich ein privates Attribut nie mit einem öffentlichen Attribut überlappen kann. Um innerhalb der Klasse auf ein privates Feld zu verweisen, müssen Sie es _im Körper der Klasse_ deklarieren (Sie können kein privates Attribut spontan erstellen). Abgesehen davon ist ein privates Feld ziemlich gleichwertig mit einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse führt zu einem frühen Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, sodass sie eine statische Analyse durchführen und alle Verwendungen von privaten Feldern finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur in den Entwicklerwerkzeugen vorhandene Entspannung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _stark privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Das bedeutet, dass Sie sicher alle Refaktorisierungen an den privaten Feldern Ihrer Klasse vornehmen können, solange das Verhalten der offen gelegten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir in den `getRed` und `setRed` Methoden zusätzliche Logik hinzufügen, anstatt sie einfache Durchgangsmethoden zu machen. Zum Beispiel können wir in `setRed` eine Überprüfung hinzufügen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft ungeschützt lassen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler downstream verhindern.

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

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Auch wenn eine andere Klasse ein identisch benanntes `#values` privates Feld hat, bezieht es sich nicht auf dasselbe und kann hier nicht zugegriffen werden.) Der Zugriff auf eine nicht vorhandene private Eigenschaft führt zu einem Fehler, anstatt `undefined` wie bei normalen Eigenschaften zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld in einem Objekt existiert und darauf zugreifen möchten, ohne den Fehler mit `try`/`catch` zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Beachten Sie, dass `#` eine spezielle Bezeichner-Syntax ist, und Sie können den Feldnamen nicht verwenden, als ob es sich um einen String handelt. `"#values" in anotherColor` würde nach einer Eigenschaft mit dem Namen buchstäblich `"#values"` suchen, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung von privaten Eigenschaften: derselbe Name kann nicht zweimal in einer einzigen Klasse deklariert werden, und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#accessor-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern erledigen muss, aber kein anderer Teil des Codes darauf zugreifen sollte.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Benutzerelemente](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas Kompliziertes tun sollen, wenn sie aktiviert werden. Darüber hinaus sollten die komplizierten Dinge, die passieren, wenn das Element angeklickt wird, auf diese Klasse beschränkt werden, da kein anderer Teil des JavaScript darauf zugreifen wird (oder sollte).

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

In diesem Fall ist praktisch jedes Feld und jede Methode der Klasse privat. Dadurch präsentiert es eine Schnittstelle zum restlichen Code, die im Grunde genommen genau wie ein integriertes HTML-Element ist. Kein anderer Teil des Programms hat die Möglichkeit, die internen Details von `Counter` zu beeinflussen.

## Accessor-Felder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, sind Sie mit diesem Muster sehr vertraut. Trotzdem ist es in JavaScript immer noch etwas unergonomisch, Methoden zu verwenden, um einfach auf eine Eigenschaft zuzugreifen. _Accessor-Felder_ ermöglichen es uns, etwas so zu manipulieren, als wäre es eine "echte Eigenschaft".

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` — tatsächlich existiert jedoch keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, die jedoch mit `get` und `set` versehen sind, wodurch sie so manipuliert werden können, als wären sie Eigenschaften.

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

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird die Zeile `red.red = 0` einen Typfehler werfen: "Cannot set property red of #\<Color> which has only a getter". Im nicht-strikten Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. In der Regel sind Felder so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig damit, einer Eigenschaft `this` zuzuweisen. Zum Beispiel kann das obige Beispiel auch umgewandelt werden in:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel sind wir auch auf die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) Methode gestoßen, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner Datumsinstanz — sie gehört zur Klasse selbst. Sie wurde jedoch auf der `Date`-Klasse platziert, anstatt als globale `DateNow()`-Funktion exponiert zu werden, weil sie hauptsächlich nützlich ist, wenn man mit Datumsinstanzen arbeitet.

> [!NOTE]
> Utility-Methoden mit dem vorangestellten Namen dessen, womit sie arbeiten, zu versehen, wird als "Namespacing" bezeichnet und gilt als gute Praxis. Zum Beispiel hat JavaScript zusätzlich zur älteren, unpräfixierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) Methode später auch die präfixierte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) Methode hinzugefügt, um anzuzeigen, dass sie für den Umgang mit Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenmerkmalen, die auf der Klasse selbst und nicht auf individuellen Instanzen der Klasse definiert sind. Diese Funktionen umfassen:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Jede dieser Funktionen hat auch ein privates Gegenstück. Zum Beispiel können wir für unsere `Color`-Klasse eine statische Methode erstellen, die überprüft, ob ein gegebenes Tripel ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind ihren Instanzgegenstücken sehr ähnlich, mit der Ausnahme, dass:

- Sie alle mit `static` versehen sind, und
- Sie sind nicht von Instanzen zugänglich.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt namens [statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), das ein Block von Code ist, der ausgeführt wird, wenn die Klasse erstmals geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig damit, dass sofort etwas Code ausgeführt wird, nachdem eine Klasse deklariert wurde. Der einzige Unterschied besteht darin, dass sie Zugriff auf private statische Eigenschaften haben.

## Erweitern und Vererbung

Ein Hauptmerkmal, das Klassen bieten (zusätzlich zur ergonomischen Kapselung mit privaten Feldern) ist die _Vererbung_, was bedeutet, dass ein Objekt "einen großen Teil des Verhaltens eines anderen Objekts ausleihen" kann, während es bestimmte Teile mit seiner eigenen Logik überschreibt oder verbessert.

Angenommen, unsere `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das die Transparenz anzeigt:

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

Aber das bedeutet, dass jede Instanz — auch die überwiegende Mehrheit, die nicht transparent ist (d.h. mit einem Alphawert von 1) — den zusätzlichen Alphawert haben muss, was nicht sehr elegant ist. Außerdem wird unsere `Color`-Klasse, wenn die Funktionen weiter zunehmen, sehr aufgebläht und schwer zu warten.

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

Es gibt einige Dinge, die sofort ins Auge fallen. Zuerst fällt auf, dass wir im Konstruktor `super(r, g, b)` aufrufen. Es ist eine Sprachanforderung, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufzurufen, bevor auf `this` zugegriffen wird. Der `super()` Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren — hier ist es ungefähr gleichbedeutend mit `this = new Color(r, g, b)`. Sie können Code vor `super()` haben, aber Sie können nicht auf `this` zugreifen, bevor `super()` nicht aufgerufen wurde — die Sprache verhindert den Zugriff auf das nicht initialisierte `this`.

Nachdem die Elternklasse mit der Modifikation von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar von Getter und Setter bereitgestellt, um mit diesen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden der Elternklasse. Obwohl `ColorWithAlpha` hier keinen `get red()` Accessor selbst deklariert, können Sie dennoch auf `red` zugreifen, weil dieses Verhalten von der Elternklasse definiert ist:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden von der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die Basismethode `toString()` ist jedoch dafür berüchtigt, dass sie in den meisten Fällen nutzlos ist, weil sie `[object Object]` ausgibt:

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

Innerhalb abgeleiteter Klassen können Sie die Methoden der Elternklasse verwenden, indem Sie `super` verwenden. Dies ermöglicht es Ihnen, Erweiterungsmethoden zu erstellen und Code-Duplikate zu vermeiden.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden ebenfalls von einander, sodass Sie auch diese überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — dies ist ein weiterer wichtiger Aspekt von JavaScript-Privatfeldern, die "stark privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme in der Mehrfachvererbung wie das [Diamantproblem](https://de.wikipedia.org/wiki/Mehrfachvererbung#Das_Problem_der_Diamantvererbung). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erreichen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber eine Frage bleibt unbeantwortet: _warum_ sollte man eine Klasse verwenden? Die Antwort lautet: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Art, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://de.wikipedia.org/wiki/Vererbung_(Objektorientierung)>) und [Polymorphismus](<https://de.wikipedia.org/wiki/Polymorphismus_(Programmierer)>) aufbaut (insbesondere _Subtyp-Polymorphismus_). Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen deshalb nicht.

Ein Beispiel: Was `Date` Objekte berüchtigt macht, ist, dass sie _veränderbar_ sind.

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

Veränderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen den Code jedoch oft schwer nachvollziehbar — denn jede scheinbar harmlose Operation kann unerwartete Nebeneffekte haben und das Verhalten in anderen Teilen des Programms ändern.

Um Code wiederzuverwenden, greifen wir normalerweise auf die Erweiterung von Klassen zurück, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungsbaum mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwer, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Oft wollen wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann es durch Mixins erreicht werden. Am Ende des Tages ist es trotzdem nicht sehr bequem.

Auf der helleren Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf höherer Ebene zu organisieren. Zum Beispiel, ohne die `Color` Klasse, müssten wir vielleicht ein Dutzend von Utility-Funktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color` Namensraum zusammenführen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung von privaten Feldern, dass wir bestimmte Daten vor Benutzern downstream verbergen und so eine saubere API schaffen.

Im Allgemeinen sollten Sie Klassen in Betracht ziehen, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten offenbaren. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Klassen speichern eine Sammlung von Elementen und erlauben Ihnen, auf sie anhand von Schlüsseln mit `get()`, `set()`, `has()` usw. zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, einzelne Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache usw. Es ist eine der wenigen Klassen mit einer reichen Vererbungsstruktur: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: jede Fehlerklasse repräsentiert einen bestimmten Fehler, der einfach mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code in einer kanonischen objektorientierten Weise zu organisieren, aber ob und wie man ihn verwendet, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
