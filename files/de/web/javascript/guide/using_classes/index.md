---
title: Klassen verwenden
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache — das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps festgelegt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekt-Hierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel stärker an andere objektorientierte Sprachen wie Java angelehnt. In diesem Abschnitt zeigen wir, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypbasierten Vererbungsmechanismus — alle Muster lassen sich in prototypbasierte Vererbung umwandeln. Klassen selbst sind ebenfalls normale JavaScript-Werte und haben ihre eigenen Prototyp-Chains. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden — Sie verwenden den `new` Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und besprechen, welche Semantiken Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypen-System eintauchen möchten, können Sie den [Leitfaden zu Vererbung und der Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

Dieses Kapitel geht davon aus, dass Sie bereits ein wenig mit JavaScript vertraut sind und gewöhnliche Objekte verwendet haben.

## Übersicht über Klassen

Wenn Sie praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie keine erstellt haben. Zum Beispiel könnte dies [Ihnen vertraut vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} namens [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Anschließend haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wird, und die andere direkt aus der `Date`-Klasse selbst als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now) aufgerufen.

`Date` ist eine eingebaute Klasse von JavaScript. Anhand dieses Beispiels können wir einige grundlegende Ideen davon bekommen, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methoden), die von der Klasse hinzugefügt wurden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methoden) selbst, die normalerweise zur Interaktion mit Instanzen verwendet werden.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzenmethoden und Instanzenfelder;
- Statische Methoden und statische Felder.

## Deklarieren einer Klasse

Klassen werden üblicherweise mit _Klassen-Deklarationen_ erstellt.

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

Wenn Sie aus einer ~vor-ES6-Welt~ kommen, sind Sie möglicherweise mit der Verwendung von Funktionen als Konstruktoren vertrauter. Das obige Muster würde ungefähr so mit Funktionskonstruktoren übersetzt werden:

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
> Private Felder und Methoden sind neue Funktionen in Klassen, die kein einfaches Äquivalent in Funktionskonstruktoren haben.

### Erstellen einer Klasse

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

### Anheben der Klassendeklaration

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "angehoben")}} (oder, in einigen Interpretationen, angehoben, aber mit der Einschränkung des temporären toten Bereichs), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich dem von Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden.

### Klassenausdrücke

Ähnlich wie Funktionen haben Klassendeklarationen auch ihre Ausdrucksgegenstücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassenausdrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur für den Klassenkörper sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht die wichtigste Aufgabe einer Klasse besteht darin, als "Fabrik" für Objekte zu fungieren. Zum Beispiel, wenn wir den `Date`-Konstruktor verwenden, erwarten wir, dass er uns ein neues Objekt gibt, das die Datumsdaten, die wir eingegeben haben, repräsentiert — die wir dann mit anderen Methoden, die die Instanz zur Verfügung stellt, manipulieren können. In Klassen wird die Instanzerstellung durch den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) durchgeführt.

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Triplet übergeben.

```js
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
```

Öffnen Sie die Devtools Ihres Browsers, fügen Sie den obigen Code in die Konsole ein und erstellen Sie dann eine Instanz:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Sie sollten eine Ausgabe wie diese sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der RGB-Werte ist, die Sie eingegeben haben. Das ist ziemlich gleichwertig mit dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau dieselbe wie die einer normalen Funktion — was bedeutet, dass Sie andere Syntaxen wie [rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden können:

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden — die wir als nächstes behandeln werden).

Der Wert von `this` wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben — denn wenn Sie einen nicht primitiven Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

```js
class MyClass {
  constructor() {
    this.myField = "foo";
    return {};
  }
}

console.log(new MyClass().myField); // undefined
```

## Instanzenmethoden

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Der Vorteil von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden zu Instanzen zuweisen.

Zum Beispiel können Sie bei `Date`-Instanzen eine Reihe von Methoden nutzen, um verschiedene Informationen aus einem einzigen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) festlegen.

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

Das funktioniert auch. Ein Problem ist jedoch, dass dies jedes Mal, wenn eine `Color`-Instanz erstellt wird, eine neue Funktion erstellt, auch wenn sie alle dasselbe tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird bei Verwendung einer Methode diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann unterschiedlich sein, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert ist — sie wird im Prototyp aller Instanzen definiert, oder `Color.prototype`, was im [Leitfaden zur Vererbung und der Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) genauer erklärt wird.

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

Sie könnten sich fragen: Warum wollen wir den Aufwand mit `getRed`- und `setRed`-Methoden betreiben, wenn wir direkt auf das `values`-Array auf der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung, die "Kapselung" genannt wird. Das bedeutet, dass Sie nicht auf die zugrundeliegende Implementierung eines Objekts zugreifen sollten, sondern gut abstrahierte Methoden verwenden sollten, um damit zu interagieren. Wenn wir beispielsweise plötzlich entscheiden, Farben stattdessen als [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) zu repräsentieren:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen und es kann seine Logik beschädigen. Wenn Sie Implementierer einer Klasse sind, möchten Sie daher die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers bricht, wenn Sie einige "harmlose Umstrukturierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Hash-Symbol) vorangestellt ist. Der Hash ist ein wesentlicher Bestandteil des Namens des Feldes, was bedeutet, dass ein privates Feld niemals einen Namenskonflikt mit einem öffentlichen Feld oder einer Methode haben kann. Um in der Klasse auf ein privates Feld zu verweisen, müssen Sie es _deklarieren_ im Klassenbody (Sie können kein privates Element ad-hoc erstellen). Abgesehen davon ist ein privates Feld ziemlich gleichwertig einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse führt zu einem frühen Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, sodass sie eine statische Analyse durchführen und alle Verwendungen privater Felder finden kann, bevor der Code überhaupt ausgeführt wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur in DevTools vorhandene Erleichterung der JavaScript-Syntaxbeschränkung.

Private Felder in JavaScript sind _hart privat_: wenn die Klasse keine Methoden implementiert, die diese privaten Felder freigeben, gibt es absolut keinen Mechanismus, sie von außerhalb der Klasse abzurufen. Das bedeutet, dass Sie sicher sind, alle Refaktorisierungen Ihrer Klasse' privater Felder durchzuführen, solange das Verhalten der bereitgestellten Methoden dasselbe bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir einige weitere Logiken in den `getRed`- und `setRed`-Methoden hinzufügen, anstatt sie zu einfachen Durchgangsmethoden zu machen. Zum Beispiel können wir in `setRed` eine Überprüfung hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft freigeben, können unsere Benutzer diese Überprüfung einfach umgehen, indem sie direkt auf `values[0]` zuweisen und ungültige Farben erzeugen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und logische Fehler im weiteren Verlauf verhindern.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, solange sie zur selben Klasse gehören.

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

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Selbst wenn eine andere Klasse ein identisch benanntes `#values`-Privatfeld hat, bezieht sich das nicht auf dasselbe und kann hier nicht aufgerufen werden.) Der Zugriff auf ein nicht vorhandenes privates Element führt zu einem Fehler statt `undefined` zurückzugeben, wie normale Eigenschaften es tun. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden.

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
> Bedenken Sie, dass das `#` eine spezielle Bezeichnersyntax ist, und Sie können den Feldnamen nicht so verwenden, als wäre es ein String. `"#values" in anotherColor` würde nach einem Eigenschaften-Namen suchen, der buchstäblich `"#values"` lautet, statt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Elemente: derselbe Name kann nicht zweimal in einer einzigen Klasse deklariert werden und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#zugriffs-_oder_accessor-felder) können auch privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes aufgerufen werden soll.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Custom-Elements](/de/docs/Web/API/Web_components/Using_custom_elements), die bei Klick/Tippen/sonstwie Aktivierung etwas Kompliziertes tun sollten. Außerdem sollten die komplizierten Dinge, die passieren, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScripts darauf zugreifen wird (oder sollte).

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

In diesem Fall sind fast alle Felder und Methoden privat für die Klasse. Damit präsentiert sie ein Interface für den Rest des Codes, das im Wesentlichen wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Möglichkeit, irgendwelche der internen Funktionen von `Counter` zu beeinflussen.

## Zugriffs- oder Accessor-Felder

`color.getRed()` und `color.setRed()` erlauben es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, wird Ihnen dieses Muster sehr vertraut sein. Das Verwenden von Methoden, um einfach auf eine Eigenschaft zuzugreifen, ist jedoch in JavaScript immer noch etwas umständlich. _Accessor-Felder_ erlauben es uns, etwas zu manipulieren, als ob es eine "tatsächliche Eigenschaft" wäre.

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

Es sieht so aus, als ob das Objekt eine Eigenschaft namens `red` hat — aber tatsächlich existiert keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` versehen, was erlaubt, sie zu manipulieren, als wären es Eigenschaften.

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

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) löst die Zeile `red.red = 0` einen Typfehler aus: "Kann die Eigenschaft red von #\<Color> nicht setzen, die nur einen Getter hat". Im nicht-strikten Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind normalerweise so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder sind fast gleichwertig mit der Zuweisung einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch umgewandelt werden in:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode getroffen, die das aktuelle Datum zurückgibt. Diese Methode gehört keiner bestimmten Instanz von `date` — sie gehört zur Klasse selbst. Sie wird jedoch auf die `Date`-Klasse gesetzt, anstatt als globale `DateNow()`-Funktion freigegeben zu werden, da sie hauptsächlich nützlich ist, wenn mit Date-Instanzen gearbeitet wird.

> [!NOTE]
> Das Präfixieren von Hilfsmethoden mit dem, womit sie umgehen, wird als "Namensraumverteilung" bezeichnet und als gute Praxis angesehen. Zum Beispiel wurde zusätzlich zur älteren, unbebebten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt)-Methode später in JavaScript die vorangestellte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzugefügt, um anzugeben, dass sie zum Umgang mit Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, anstatt auf einzelnen Instanzen der Klasse. Zu diesen Funktionen gehören:

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

Statische Eigenschaften sind ihren Instanzen-Gegenstücken sehr ähnlich, außer dass:

- Alle mit `static` vorangestellt sind und
- Sie nicht von Instanzen aus zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt, das als [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) bezeichnet wird, das ein Codeblock ist, der ausgeführt wird, wenn die Klasse zunächst geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichwertig mit dem sofortigen Ausführen von Code nach der Deklaration einer Klasse. Der einzige Unterschied besteht darin, dass sie Zugriff auf private statische Elemente haben.

## Extends und Vererbung

Ein Hauptmerkmal, das Klassen mit sich bringen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern), ist die _Vererbung_, was bedeutet, dass ein Objekt einen Großteil der Verhaltensweisen eines anderen Objekts "ausleihen" kann, während es bestimmte Teile mit eigener Logik überschreitet oder erweitert.

Angenommen, unsere `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das seine Transparenz anzeigt:

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

Das bedeutet jedoch, dass jede Instanz — sogar die überwiegende Mehrheit, die nicht transparent ist (die mit einem Alpha-Wert von 1) — den zusätzlichen Alpha-Wert haben muss, was nicht sehr elegant ist. Außerdem wird unsere `Color`-Klasse, wenn die Funktionalitäten ständig wachsen, sehr überladen und schwer zu warten.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die anzeigt, von welcher Klasse sie abgeleitet sind.

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

Einige Dinge sind sofort bemerkbar. Zuerst rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Sprachanforderung, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) vor dem Zugriff auf `this` aufzurufen. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren — hier ist es ungefähr äquivalent zu `this = new Color(r, g, b)`. Sie können vor `super()` Code haben, aber Sie können nicht auf `this` vor `super()` zugreifen — die Sprache verhindert dies als Schutzmaßnahme.

Nachdem die Eltern-Klasse mit der Modifikation von `this` fertig ist, kann die abgeleitete Klasse ihre eigene Logik ausführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um damit zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Eltern-Klasse. Zum Beispiel beachten Sie den `get red()`-Accessor, den wir der `Color` in der [Accessor Felder](#zugriffs-_oder_accessor-felder)-Sektion hinzugefügt haben — auch wenn wir keinen `ColorWithAlpha` deklariert haben, können wir immer noch auf `red` zugreifen, da dieses Verhalten von der Elternklasse spezifiziert wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Eltern-Klasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die grundlegende `toString()`-Methode ist jedoch berüchtigt nutzlos, weil sie in den meisten Fällen `[object Object]` druckt:

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

In abgeleiteten Klassen können Sie die Eltern-Klassen-Methoden mit `super` aufrufen. Dies ermöglicht den Aufbau von Erweiterungsmethoden und vermeidet Code-Duplikationen.

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

Wenn Sie `extends` verwenden, erben die statischen Methoden ebenfalls, sodass Sie sie überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse — dies ist ein weiterer zentraler Aspekt von JavaScript-privaten Feldern als "hart privat". Private Felder sind auf den Klassenbody selbst beschränkt und gewähren keinem externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erweitert werden. Das verhindert Probleme bei mehrzelliger Vererbung wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt von Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es gibt eine unbeantwortete Frage: _warum_ sollte man eine Klasse verwenden? Die Antwort ist: es kommt darauf an.

Klassen führen ein _Paradigma_ ein, also eine Art, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Untertyp-Polymorphismus_) basiert. Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden Klassen daher nicht.

Zum Beispiel macht eines, was `Date`-Objekte berüchtigt macht, sie _änderbar_.

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

Änderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, erschweren jedoch oft das Verständnis des Codes — weil jede scheinbar harmlose Operation unerwartete Seiteneffekte haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir in der Regel auf die Erweiterung von Klassen zurück, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungstree, mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Häufig möchten wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann es durch Mixins geschehen. Aber am Ende des Tages ist es immer noch nicht sehr praktisch.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf einer höheren Ebene zu organisieren. Zum Beispiel müssten wir ohne die `Color`-Klasse ein Dutzend von Dienstprogrammfunktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namensraum zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung privater Felder uns, bestimmte Daten von unteren Benutzern zu verbergen und eine saubere API zu erzeugen.

Im Allgemeinen sollten Sie Klassen erwägen, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten bereitstellen. Nehmen Sie eingebaute JavaScript-Klassen als Beispiel:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Klassen speichern eine Sammlung von Elementen und ermöglichen Ihnen, diese per Schlüssel mit `get()`, `set()`, `has()` usw. zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Klasse speichert ein Datum als Unix-Timestamp (eine Zahl) und ermöglicht Ihnen, einzelne Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich Fehlermeldung, Stack-Trace, Ursache usw. Es ist eine der wenigen Klassen, die eine reichhaltige Vererbungsstruktur mit sich bringt: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern erlaubt diese Vererbung die Verfeinerung der Fehlersymantik: jede Fehlerklasse repräsentiert einen spezifischen Fehlertyp, der einfach mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, um Ihren Code auf kanonische Weise objektorientiert zu organisieren, aber ob und wie man es verwendet, bleibt letztlich dem Ermessen des Programmierers überlassen.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
