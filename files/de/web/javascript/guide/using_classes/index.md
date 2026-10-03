---
title: Klassen verwenden
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 44b7cee840c2c4b4f9fa164d45bb4f397e5af5da
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache: Das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ähnelt das Erstellen von Objekthierarchien und das Vererben von Eigenschaften und deren Werten jedoch stärker dem Vorgehen in anderen objektorientierten Sprachen wie Java. In diesem Abschnitt zeigen wir, wie Sie Objekte aus Klassen erstellen.

In vielen anderen Sprachen wird klar zwischen _Klassen_ beziehungsweise Konstruktoren und _Objekten_ beziehungsweise Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über dem bestehenden Mechanismus der prototypbasierten Vererbung – alle entsprechenden Muster lassen sich auf prototypbasierte Vererbung zurückführen. Klassen sind selbst ebenfalls gewöhnliche JavaScript-Werte und haben eigene Prototypketten. Tatsächlich lassen sich die meisten gewöhnlichen JavaScript-Funktionen als Konstruktoren verwenden: Mit dem Operator `new` und einer Konstruktorfunktion erstellen Sie ein neues Objekt.

In diesem Tutorial arbeiten wir mit dem abstrahierten Klassenmodell und besprechen, welche Semantik Klassen bieten. Wenn Sie das zugrunde liegende Prototypsystem genauer kennenlernen möchten, lesen Sie den Leitfaden [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Dieses Kapitel setzt voraus, dass Sie bereits etwas mit JavaScript vertraut sind und gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie praktische Erfahrung mit JavaScript haben oder dem Leitfaden bisher gefolgt sind, haben Sie wahrscheinlich schon Klassen verwendet, auch wenn Sie selbst noch keine erstellt haben. Beispielsweise [dürfte Ihnen Folgendes bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir die {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der Instanz `bigDay` aufgerufen. Sie gibt einen String zurück. Anschließend haben wir zwei Zahlen verglichen: Die eine stammt aus der Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime), die andere wurde über [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) direkt von der Klasse `Date` _selbst_ abgerufen.

`Date` ist eine integrierte JavaScript-Klasse. Dieses Beispiel vermittelt einige grundlegende Vorstellungen davon, was Klassen tun:

- Klassen erstellen Objekte mit dem Operator [`new`](/de/docs/Web/JavaScript/Reference/Operators/new).
- Die Klasse fügt jedem Objekt Eigenschaften hinzu, die Daten oder Methoden enthalten.
- Die Klasse besitzt selbst Eigenschaften, die Daten oder Methoden enthalten und üblicherweise zur Interaktion mit Instanzen verwendet werden.

Das entspricht den drei zentralen Merkmalen von Klassen:

- Konstruktor
- Instanzmethoden und Instanzfelder
- Statische Methoden und statische Felder

## Eine Klasse deklarieren

Klassen werden üblicherweise mit _Klassendeklarationen_ erstellt.

```js
class MyClass {
  // class body...
}
```

Innerhalb eines Klassenkörpers stehen verschiedene Funktionen zur Verfügung.

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

Wenn Sie JavaScript schon vor ES6 verwendet haben, sind Sie möglicherweise eher damit vertraut, Funktionen als Konstruktoren zu verwenden. Das obige Muster ließe sich ungefähr wie folgt mit Funktionskonstruktoren umsetzen:

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
> Private Felder und Methoden sind neue Klassenfunktionen, für die es in Funktionskonstruktoren keine einfache Entsprechung gibt.

### Eine Instanz einer Klasse erstellen

Nachdem eine Klasse deklariert wurde, können Sie mit dem Operator [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Instanzen davon erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` als auch ohne `new` aufgerufen werden. Der Versuch, eine Klasse ohne `new` „aufzurufen“, führt dagegen zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Hoisting von Klassendeklarationen

Anders als Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "durch Hoisting vorgezogen")}} – oder nach manchen Auslegungen zwar vorgezogen, unterliegen aber der Einschränkung der Temporal Dead Zone. Das bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert wurde.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ähnelt dem von Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden.

### Klassenausdrücke

Wie bei Funktionen gibt es auch für Klassendeklarationen entsprechende Ausdrücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls einen Namen haben. Der Name des Ausdrucks ist nur innerhalb des Klassenkörpers sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Die vielleicht wichtigste Aufgabe einer Klasse besteht darin, als „Fabrik“ für Objekte zu dienen. Wenn wir beispielsweise den Konstruktor `Date` verwenden, erwarten wir ein neues Objekt, das die übergebenen Datumsdaten repräsentiert. Dieses Objekt können wir anschließend mit weiteren Methoden bearbeiten, die die Instanz bereitstellt. In Klassen übernimmt der [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) die Erstellung der Instanz.

Als Beispiel erstellen wir eine Klasse namens `Color`, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Tripel übergeben.

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

Sie sollten ungefähr die folgende Ausgabe sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt. Die Instanz hat eine Eigenschaft `values`, die ein Array mit den übergebenen RGB-Werten enthält. Das entspricht weitgehend Folgendem:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors entspricht genau der einer normalen Funktion. Sie können daher auch andere Syntaxformen wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden:

```js
class Color {
  constructor(...values) {
    this.values = values;
  }
}

const red = new Color(255, 0, 0);
// Creates an instance with the same shape as above.
```

Bei jedem Aufruf von `new` wird eine andere Instanz erstellt.

```js
const red = new Color(255, 0, 0);
const anotherRed = new Color(255, 0, 0);
console.log(red === anotherRed); // false
```

Innerhalb eines Klassenkonstruktors verweist `this` auf die neu erstellte Instanz. Sie können ihr Eigenschaften zuweisen oder vorhandene Eigenschaften auslesen – insbesondere Methoden, auf die wir als Nächstes eingehen.

Der Wert von `this` wird automatisch als Ergebnis von `new` zurückgegeben. Sie sollten daher keinen Wert aus dem Konstruktor zurückgeben: Wenn Sie einen nicht-primitiven Wert zurückgeben, wird dieser zum Wert des `new`-Ausdrucks und der Wert von `this` wird verworfen. (Mehr darüber, was `new` bewirkt, erfahren Sie in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich kaum von einer Fabrikfunktion `createX`, die lediglich gewöhnliche Objekte erstellt. Die Stärke von Klassen liegt jedoch darin, dass sie als „Vorlagen“ dienen können, die Instanzen automatisch Methoden zur Verfügung stellen.

Bei `Date`-Instanzen können Sie beispielsweise mit verschiedenen Methoden Informationen aus einem einzelnen Datumswert abrufen, etwa das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth) oder den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay). Mit den entsprechenden `setX`-Methoden wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) können Sie diese Werte auch setzen.

Unserer Klasse `Color` können wir eine Methode namens `getRed` hinzufügen, die den Rotwert der Farbe zurückgibt.

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

Das funktioniert ebenfalls. Allerdings wird dabei jedes Mal eine neue Funktion erstellt, wenn eine `Color`-Instanz erzeugt wird – obwohl alle diese Funktionen dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Wenn Sie stattdessen eine Methode verwenden, wird sie von allen Instanzen gemeinsam genutzt. Eine Funktion kann von allen Instanzen gemeinsam genutzt werden und sich beim Aufruf durch verschiedene Instanzen dennoch unterschiedlich verhalten, weil der Wert von `this` jeweils ein anderer ist. Falls Sie wissen möchten, _wo_ diese Methode gespeichert ist: Sie wird auf dem Prototyp aller Instanzen definiert, also auf `Color.prototype`. Näheres dazu finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

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
console.log(red.getRed()); // 0; of course, it should be called "black" at this stage!
```

## Private Felder

Vielleicht fragen Sie sich: Warum sollten wir uns die Mühe machen, `getRed` und `setRed` zu verwenden, wenn wir direkt auf das Array `values` der Instanz zugreifen können?

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

In der objektorientierten Programmierung gibt es ein Prinzip namens „Kapselung“. Es besagt, dass Sie nicht direkt auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern über abstrahierte Methoden mit ihm interagieren. Angenommen, wir beschließen plötzlich, Farben stattdessen als [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) darzustellen:

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

Die Annahme der Benutzer, `values` enthalte RGB-Werte, trifft dann nicht mehr zu, wodurch ihre Programmlogik fehlschlagen kann. Wenn Sie eine Klasse implementieren, möchten Sie deshalb die interne Datenstruktur ihrer Instanzen vor Benutzern verbergen. So bleibt die API übersichtlich, und der Code der Benutzer geht nicht durch eine vermeintlich „harmlose Umstrukturierung“ kaputt. In Klassen erreichen Sie das mit [_privaten Feldern_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

Ein privates Feld ist ein Bezeichner mit vorangestelltem `#` (dem Rautezeichen). Die Raute ist fester Bestandteil des Feldnamens. Deshalb kann der Name eines privaten Feldes niemals mit dem eines öffentlichen Feldes oder einer Methode kollidieren. Damit Sie innerhalb der Klasse auf ein privates Feld zugreifen können, müssen Sie es im Klassenkörper _deklarieren_ – ein privates Element lässt sich nicht spontan erstellen. Abgesehen davon entspricht ein privates Feld weitgehend einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse führt bereits beim Parsen zu einem Syntaxfehler. Die Sprache kann dies verhindern, weil `#privateField` eine besondere Syntax ist. Dadurch kann sie den Code statisch analysieren und alle Verwendungen privater Felder finden, noch bevor der Code ausgeführt wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auch außerhalb der Klasse auf private Elemente zugreifen. Diese Lockerung der JavaScript-Syntaxbeschränkung gilt nur für die Entwicklertools.

Private Felder in JavaScript sind _streng privat_: Wenn die Klasse keine Methoden implementiert, die diese Felder zugänglich machen, gibt es keinerlei Möglichkeit, sie von außerhalb der Klasse abzurufen. Sie können die privaten Felder Ihrer Klasse daher bedenkenlos umstrukturieren, solange das Verhalten der öffentlich zugänglichen Methoden gleich bleibt.

Nachdem wir das Feld `values` privat gemacht haben, können wir die Methoden `getRed` und `setRed` um zusätzliche Logik erweitern, statt sie nur Werte durchreichen zu lassen. Beispielsweise können wir in `setRed` prüfen, ob der übergebene R-Wert gültig ist:

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

Wenn die Eigenschaft `values` öffentlich zugänglich bleibt, können Benutzer diese Prüfung leicht umgehen, indem sie `values[0]` direkt einen Wert zuweisen, und so ungültige Farben erzeugen. Mit einer gut gekapselten API können wir unseren Code dagegen robuster machen und Folgefehler in der Programmlogik verhindern.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, sofern diese derselben Klasse angehören.

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

Wenn `anotherColor` jedoch keine `Color`-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ebenfalls ein privates Feld namens `#values` hat, handelt es sich nicht um dasselbe Feld und es kann hier nicht darauf zugegriffen werden.) Der Zugriff auf ein nicht vorhandenes privates Element löst einen Fehler aus, statt wie bei normalen Eigenschaften `undefined` zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert, und ohne `try`/`catch` darauf zugreifen möchten, können Sie den Operator [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) verwenden.

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
> Beachten Sie, dass `#` Teil einer besonderen Bezeichnersyntax ist und Sie den Feldnamen nicht wie einen String verwenden können. `"#values" in anotherColor` würde nach einer Eigenschaft suchen, die wörtlich `"#values"` heißt, nicht nach einem privaten Feld.

Für private Elemente gelten einige Einschränkungen: Derselbe Name darf innerhalb einer Klasse nicht zweimal deklariert werden, und private Elemente können nicht gelöscht werden. Beides führt bereits beim Parsen zu Syntaxfehlern.

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

Auch Methoden, [Getter und Setter](#zugriffsfelder) können privat sein. Sie sind nützlich, wenn eine Klasse intern eine komplexere Aufgabe ausführen muss, die von keinem anderen Teil des Codes aufgerufen werden soll.

Stellen Sie sich beispielsweise vor, Sie erstellen [benutzerdefinierte HTML-Elemente](/de/docs/Web/API/Web_components/Using_custom_elements), die beim Anklicken, Antippen oder einer anderen Aktivierung eine etwas komplexere Aktion ausführen sollen. Außerdem sollen die dabei ausgeführten Vorgänge auf diese Klasse beschränkt bleiben, weil kein anderer Teil des JavaScript-Codes darauf zugreifen wird oder sollte.

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

In diesem Fall sind nahezu alle Felder und Methoden für die Klasse privat. Gegenüber dem übrigen Code bietet sie damit eine Schnittstelle, die im Wesentlichen der eines integrierten HTML-Elements entspricht. Kein anderer Teil des Programms kann den internen Zustand von `Counter` beeinflussen.

## Zugriffsfelder

Mit `color.getRed()` und `color.setRed()` können wir den Rotwert einer Farbe lesen und schreiben. Wenn Sie aus einer Sprache wie Java kommen, ist Ihnen dieses Muster vermutlich sehr vertraut. In JavaScript ist es jedoch etwas umständlich, Methoden nur für den Zugriff auf eine Eigenschaft zu verwenden. _Zugriffsfelder_ ermöglichen es uns, einen Wert so zu verwenden, als wäre er eine „echte Eigenschaft“.

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` – tatsächlich gibt es auf der Instanz jedoch keine solche Eigenschaft! Es gibt nur zwei Methoden. Da ihnen aber `get` und `set` vorangestellt sind, lassen sie sich wie Eigenschaften verwenden.

Wenn ein Feld nur einen Getter, aber keinen Setter hat, ist es praktisch schreibgeschützt.

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

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) löst die Zeile `red.red = 0` einen Typfehler aus: „Cannot set property red of #\<Color> which has only a getter“. Außerhalb des Strict Mode wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Zu privaten Feldern gibt es öffentliche Gegenstücke, mit denen jede Instanz eine eigene Eigenschaft erhalten kann. Felder sind üblicherweise so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder entsprechen nahezu einer Zuweisung einer Eigenschaft an `this`. Das obige Beispiel lässt sich beispielsweise auch so schreiben:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Im Beispiel mit `Date` haben wir auch die Methode [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) kennengelernt, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner einzelnen Datumsinstanz, sondern zur Klasse selbst. Sie ist in der Klasse `Date` definiert und wird nicht als globale Funktion `DateNow()` bereitgestellt, weil sie vor allem im Zusammenhang mit Datumsinstanzen nützlich ist.

> [!NOTE]
> Hilfsmethoden mit einem Präfix zu versehen, das ihren Zuständigkeitsbereich angibt, wird „Namespacing“ genannt und gilt als gute Praxis. Beispielsweise hat JavaScript neben der älteren Methode [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) ohne Präfix später auch die Methode [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) mit Präfix eingeführt, um zu verdeutlichen, dass sie für die Verarbeitung von Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) umfassen Klassenfunktionen, die auf der Klasse selbst statt auf einzelnen Instanzen definiert sind. Dazu gehören:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Für alle gibt es auch private Varianten. Für unsere Klasse `Color` können wir beispielsweise eine statische Methode erstellen, die prüft, ob ein bestimmtes Tripel einen gültigen RGB-Wert darstellt:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften ähneln den entsprechenden Instanzeigenschaften sehr. Der Unterschied ist:

- Ihnen ist jeweils `static` vorangestellt.
- Auf sie kann nicht über Instanzen zugegriffen werden.

Außerdem gibt es ein besonderes Konstrukt namens [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks). Dabei handelt es sich um einen Codeblock, der ausgeführt wird, wenn die Klasse zum ersten Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke entsprechen nahezu Code, der unmittelbar nach der Deklaration einer Klasse ausgeführt wird. Der einzige Unterschied besteht darin, dass sie auf statische private Elemente zugreifen können.

## `extends` und Vererbung

Ein wesentliches Merkmal von Klassen ist neben der einfachen Kapselung durch private Felder die _Vererbung_. Sie ermöglicht es einem Objekt, einen großen Teil des Verhaltens eines anderen Objekts zu übernehmen und bestimmte Teile mit eigener Logik zu überschreiben oder zu erweitern.

Angenommen, unsere Klasse `Color` soll nun auch Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld für die Transparenz hinzuzufügen:

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

Dann müsste jedoch jede Instanz einen zusätzlichen Alphawert enthalten – auch die große Mehrheit der Instanzen, die nicht transparent sind und deren Alphawert 1 beträgt. Das ist wenig elegant. Wenn weitere Funktionen hinzukommen, wird unsere Klasse `Color` außerdem zunehmend aufgebläht und schwer zu pflegen.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse kann auf alle öffentlichen Eigenschaften der Elternklasse zugreifen. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die angibt, von welcher Klasse sie erben.

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

Dabei fallen sofort einige Dinge auf. Erstens rufen wir im Konstruktor `super(r, g, b)` auf. Die Sprache verlangt, dass [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, bevor auf `this` zugegriffen wird. Der Aufruf von `super()` ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren. Hier entspricht das ungefähr `this = new Color(r, g, b)`. Vor `super()` darf Code stehen, aber Sie dürfen vor dem Aufruf von `super()` nicht auf `this` zugreifen: Die Sprache verhindert den Zugriff auf das noch nicht initialisierte `this`.

Nachdem die Elternklasse `this` bearbeitet hat, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und ein Paar aus Getter und Setter bereitgestellt, um darauf zuzugreifen.

Eine abgeleitete Klasse erbt alle Methoden ihrer Elternklasse. Betrachten wir beispielsweise den Zugriff über `get red()`, den wir im Abschnitt [Zugriffsfelder](#zugriffsfelder) zu `Color` hinzugefügt haben. Obwohl wir ihn nicht in `ColorWithAlpha` deklariert haben, können wir weiterhin auf `red` zugreifen, weil dieses Verhalten von der Elternklasse definiert wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können Methoden der Elternklasse auch überschreiben. Beispielsweise erben alle Klassen implizit von der Klasse [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die grundlegende Implementierung von `toString()` ist allerdings oft wenig hilfreich, da sie in den meisten Fällen `[object Object]` ausgibt:

```js
console.log(red.toString()); // [object Object]
```

Unsere Klasse kann die Methode stattdessen überschreiben, damit sie die RGB-Werte der Farbe ausgibt:

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

Innerhalb abgeleiteter Klassen können Sie mit `super` auf Methoden der Elternklasse zugreifen. So können Sie Methoden erweitern, ohne Code zu duplizieren.

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

Wenn Sie `extends` verwenden, werden auch statische Methoden vererbt. Sie können sie daher ebenfalls überschreiben oder erweitern.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder ihrer Elternklasse. Das ist ein weiterer wichtiger Aspekt der strengen Privatheit von JavaScript-Feldern. Private Felder sind auf den jeweiligen Klassenkörper beschränkt und gewähren _keinem_ Code außerhalb davon Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer einzigen Klasse erben. Dadurch werden Probleme der Mehrfachvererbung wie das [Diamond-Problem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem) vermieden. Aufgrund der dynamischen Natur von JavaScript lässt sich der Effekt einer Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) dennoch erzielen.

Instanzen abgeleiteter Klassen sind zugleich [Instanzen der](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Bisher war dieser Leitfaden pragmatisch ausgerichtet: Wir haben uns darauf konzentriert, _wie_ Klassen verwendet werden. Eine Frage ist jedoch noch offen: _Warum_ sollte man eine Klasse verwenden? Die Antwort lautet: Es kommt darauf an.

Klassen führen ein _Paradigma_ ein, also eine Art, Code zu organisieren. Sie bilden die Grundlage der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) beruht, insbesondere auf _Subtyp-Polymorphismus_. Viele Menschen lehnen jedoch bestimmte Praktiken der objektorientierten Programmierung grundsätzlich ab und verwenden deshalb keine Klassen.

Ein Grund für den schlechten Ruf von `Date`-Objekten ist beispielsweise, dass sie _veränderbar_ sind.

```js
function incrementDay(date) {
  return new Date(date.setDate(date.getDate() + 1));
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// The old date is modified as well!?
console.log(date); // 2019-06-20
```

Veränderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung. Sie erschweren es jedoch oft, das Verhalten von Code nachzuvollziehen, weil selbst eine scheinbar harmlose Operation unerwartete Nebenwirkungen haben und das Verhalten anderer Programmteile verändern kann.

Um Code wiederzuverwenden, greifen wir häufig darauf zurück, Klassen zu erweitern. Dadurch können große Vererbungshierarchien entstehen.

![Ein typischer OOP-Vererbungsbaum mit fünf Klassen auf drei Ebenen](figure8.1.png)

Vererbung lässt sich jedoch oft nur schwer klar abbilden, wenn eine Klasse nur von einer anderen Klasse erben kann. Häufig möchten wir das Verhalten mehrerer Klassen kombinieren. In Java geschieht das über Interfaces, in JavaScript über Mixins. Besonders bequem ist es letztlich trotzdem nicht.

Andererseits sind Klassen ein sehr leistungsfähiges Mittel, um Code auf einer höheren Ebene zu organisieren. Ohne die Klasse `Color` müssten wir beispielsweise möglicherweise ein Dutzend Hilfsfunktionen erstellen:

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

Mit Klassen können wir sie jedoch alle unter dem Namespace `Color` zusammenfassen und so die Lesbarkeit verbessern. Darüber hinaus können wir mit privaten Feldern bestimmte Daten vor Benutzern der API verbergen und eine klare Schnittstelle schaffen.

Grundsätzlich sollten Sie Klassen in Betracht ziehen, wenn Sie Objekte erstellen möchten, die eigene interne Daten speichern und viele Funktionen bereitstellen. Beispiele dafür sind integrierte JavaScript-Klassen:

- Die Klassen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) speichern Sammlungen von Elementen und ermöglichen unter anderem mit `get()`, `set()` und `has()` den Zugriff auf beziehungsweise die Arbeit mit ihnen.
- Die Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) speichert ein Datum als Unix-Zeitstempel (eine Zahl). Sie ermöglicht es, das Datum zu formatieren und zu aktualisieren sowie einzelne Datumsbestandteile auszulesen.
- Die Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) speichert Informationen über eine bestimmte Ausnahme, darunter die Fehlermeldung, den Stack-Trace und die Ursache. Sie gehört zu den wenigen Klassen mit einer umfangreichen Vererbungsstruktur: Mehrere integrierte Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) erben von `Error`. Bei Fehlern ermöglicht diese Vererbung eine genauere Unterscheidung: Jede Fehlerklasse repräsentiert einen bestimmten Fehlertyp, der sich leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) prüfen lässt.

JavaScript bietet die Möglichkeit, Code auf klassische objektorientierte Weise zu organisieren. Ob und wie Sie diese Möglichkeit nutzen, liegt ganz in Ihrem Ermessen.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
