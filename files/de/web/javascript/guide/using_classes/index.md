---
title: Verwenden von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 8fc371f14e899fc9389ed98b20b9ee57e6b0886d
---

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypbasierte Sprache – das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekthierarchien und die Vererbung von Eigenschaften und deren Werten jedoch viel stärker an andere objektorientierte Sprachen wie Java angelehnt. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen werden _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden mechanismus der prototypischen Vererbung – alle Muster können in prototypbasierte Vererbung umgewandelt werden. Klassen selbst sind auch normale JavaScript-Werte und haben ihre eigenen Prototypenketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden – Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

Wir werden in diesem Tutorial mit dem gut abstrahierten Klassenmodell arbeiten und diskutieren, welche Semantik Klassen bieten. Wenn Sie tiefer in das zugrunde liegende Prototypsystem eintauchen möchten, können Sie den Leitfaden [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

In diesem Kapitel wird vorausgesetzt, dass Sie bereits ein gewisses Maß an Vertrautheit mit JavaScript haben und dass Sie gewöhnliche Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits praktische Erfahrung mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich schon Klassen verwendet, auch wenn Sie noch keine erstellt haben. Zum Beispiel dürfte dies Ihnen [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Dann haben wir zwei Zahlen verglichen: eine, die von der [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)-Methode zurückgegeben wurde, die andere direkt von der `Date`-Klasse _selbst_ aufgerufen, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse von JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen davon ableiten, was Klassen tun:

- Klassen erstellen Objekte durch den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator.
- Jedes Objekt hat einige Eigenschaften (Daten oder Methode), die durch die Klasse hinzugefügt werden.
- Die Klasse speichert einige Eigenschaften (Daten oder Methode) selbst, die normalerweise verwendet werden, um mit Instanzen zu interagieren.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

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

Innerhalb eines Klassenblocks stehen Ihnen eine Reihe von Funktionen zur Verfügung.

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

Wenn Sie aus einer Umgebung vor ES6 stammen, sind Sie möglicherweise besser damit vertraut, Funktionen als Konstruktoren zu verwenden. Das oben genannte Muster würde sich ungefähr mit Funktionskonstruktoren in Folgendes übersetzen:

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
> Private Felder und Methoden sind neue Funktionen in Klassen, die keine triviale Entsprechung in Funktionskonstruktoren haben.

### Konstruktion einer Klasse

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator erstellen.

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

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoistet")}} (oder in einigen Interpretationen gehoistet, aber mit der Einschränkung der temporalen Todeszone), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ist ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert sind.

### Klassenausdrücke

Ähnlich wie Funktionen haben auch Klassendeklarationen ihre Ausdrucksgegenstücke.

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

Vielleicht die wichtigste Aufgabe einer Klasse ist es, als "Fabrik" für Objekte zu fungieren. Zum Beispiel, wenn wir den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt gibt, das die Datumsinformationen darstellt, die wir übergeben haben — die wir dann mit anderen Methoden, die die Instanz bietet, manipulieren können. In Klassen erfolgt die Instanzerstellung durch den [constructor](/de/docs/Web/JavaScript/Reference/Classes/constructor).

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben durch das Übergeben eines {{Glossary("RGB", "RGB")}}-Triplets.

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

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der RGB-Werte ist, die Sie übergeben haben. Das ist ziemlich gleichbedeutend mit dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax eines Konstruktors ist genau die gleiche wie eine normale Funktion — was bedeutet, dass Sie andere Syntaxe wie [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwenden können:

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihr Eigenschaften zuweisen oder bestehende Eigenschaften lesen (insbesondere Methoden — die wir als nächstes behandeln werden).

Der `this`-Wert wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben — denn wenn Sie einen nicht-primitiven Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber, was `new` tut, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description) lesen.)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht wesentlich von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Der Vorteil von Klassen besteht jedoch darin, dass sie als "Vorlagen" verwendet werden können, die automatisch Methoden an Instanzen zuweisen.

Zum Beispiel können Sie für `Date`-Instanzen eine Reihe von Methoden verwenden, um unterschiedliche Informationen aus einem einzigen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Das funktioniert auch. Ein Problem besteht jedoch darin, dass bei jeder Erstellung einer `Color`-Instanz eine neue Funktion erstellt wird, auch wenn sie alle das gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu wird eine Methode, wenn Sie sie verwenden, zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann sich ändern, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Wenn Sie neugierig sind, _wo_ diese Methode gespeichert wird — sie ist auf dem Prototyp aller Instanzen definiert, oder `Color.prototype`, was im Abschnitt [Vererbung und die Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) ausführlicher erklärt wird.

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

Sie fragen sich vielleicht: Warum sollten wir uns die Mühe machen, `getRed`- und `setRed`-Methoden zu verwenden, wenn wir direkt auf das `values`-Array auf der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung namens "Kapselung". Das bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um mit ihm zu interagieren. Zum Beispiel, wenn wir plötzlich entscheiden, Farben als [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) darzustellen:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen und es kann dazu führen, dass ihre Logik fehlerhaft ist. Wenn Sie also ein Implementierer einer Klasse sind, würden Sie die interne Datenstruktur Ihrer Instanz von Ihrem Benutzer verbergen wollen, sowohl um die API sauber zu halten als auch um zu verhindern, dass der Code des Benutzers bricht, wenn Sie einige "harmlose Refaktorisierungen" vornehmen. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Rautezeichen) vorangestellt wird. Das Rautezeichen ist ein integraler Bestandteil des Namens des Feldes, was bedeutet, dass ein privates Feld niemals einen Namenskonflikt mit einem öffentlichen Feld oder einer Methode haben kann. Um auf ein privates Feld irgendwo in der Klasse zu verweisen, müssen Sie es im Klassenkörper _deklarieren_ (Sie können kein privates Element im Handumdrehen erstellen). Abgesehen davon ist ein privates Feld so ziemlich ein normales Attribut.

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

Der Zugriff auf private Felder außerhalb der Klasse ist ein früher Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, so dass sie eine statische Analyse durchführen und alle Verwendungen von privaten Feldern finden kann, bevor der Code überhaupt ausgewertet wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur für DevTools vorkommende Lockerung der JavaScript-Syntax-Einschränkung.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder entblößen, gibt es absolut keinen Mechanismus, um sie von außerhalb der Klasse abzurufen. Das bedeutet, dass Sie sicher sind, jede Refaktorisierung an den privaten Feldern Ihrer Klasse vorzunehmen, solange das Verhalten der sichtbaren Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir mehr Logik in den `getRed` und `setRed`-Methoden hinzufügen, anstatt sie zu einfachen Durchreichmethoden zu machen. Zum Beispiel können wir eine Überprüfung in `setRed` hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft offen lassen, können unsere Benutzer diese Überprüfung leicht umgehen, indem sie direkt `values[0]` zuweisen und ungültige Farben erstellen. Aber mit einer gut gekapselten API können wir unseren Code robuster machen und Logikfehler in weiteren Code verhindern.

Eine Klassenmethode kann die privaten Felder anderer Instanzen lesen, solange sie derselben Klasse angehören.

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

Wenn `anotherColor` jedoch keine Color-Instanz ist, existiert `#values` nicht. (Auch wenn eine andere Klasse ein identisch benanntes privates Feld `#values` hat, bezieht es sich nicht auf das gleiche Ding und kann hier nicht zugegriffen werden.) Der Zugriff auf ein nicht vorhandenes privates Element wirft einen Fehler anstelle von `undefined` wie normale Eigenschaften. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und Sie darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden.

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
> Beachten Sie, dass das `#` eine spezielle Bezeichner-Syntax ist und Sie den Feldnamen nicht verwenden können, als ob er eine Zeichenfolge wäre. `"#values" in anotherColor` würde nach einer Eigenschaft namens `"#values"` suchen, anstelle eines privaten Feldes.

Es gibt einige Einschränkungen bei der Verwendung von privaten Elementen: derselbe Name kann nicht zweimal in einer einzigen Klasse deklariert werden und sie können nicht gelöscht werden. Beides führt zu frühen Syntaxfehlern.

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

Methoden, [Getter und Setter](#zugriffsfelder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das intern von der Klasse erledigt werden muss, aber kein anderer Teil des Codes darf darauf zugreifen darf.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Custom-Elemente](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas recht Komplexes tun sollten, wenn sie geklickt/angeklickt/aktiviert werden. Außerdem sollten die recht komplexen Dinge, die geschehen, wenn das Element geklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScript jemals darauf zugreifen wird (oder sollte).

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

In diesem Fall ist praktisch jedes Feld und jede Methode für die Klasse privat. Dies stellt somit eine Schnittstelle für den Rest des Codes dar, die im Wesentlichen genau wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Möglichkeit, die internen Struktur von `Counter` zu beeinflussen.

## Zugriffsfelder

`color.getRed()` und `color.setRed()` ermöglichen es uns, den Rotwert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, werden Sie mit diesem Muster sehr vertraut sein. Es ist jedoch in JavaScript immer noch etwas unergonomisch, Methoden zu verwenden, um einfach auf eine Eigenschaft zuzugreifen. _Zugriffsfelder_ ermöglichen es uns, mit etwas zu arbeiten, als wäre es eine "tatsächliche Eigenschaft".

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

Es sieht so aus, als ob das Objekt eine Eigenschaft namens `red` hat - aber in Wirklichkeit gibt es keine solche Eigenschaft auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` versehen, die es erlauben, sie zu manipulieren, als wären sie Eigenschaften.

Wenn ein Feld nur einen Getter hat, aber keinen Setter, wird es effektiv schreibgeschützt.

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

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wirft die Zeile `red.red = 0` einen Typfehler: "Kann Eigenschaft red von #\<Color> nicht setzen, welche nur einen Getter hat". Im nicht-strengen Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz ermöglichen, eine Eigenschaft zu haben. Felder sind normalerweise unabhängig von den Parametern des Konstruktors konzipiert.

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

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode getroffen, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner bestimmten Instanz — sie gehört zur Klasse selbst. Sie wird jedoch auf der `Date`-Klasse anstelle als einer globalen `DateNow()` Funktion belassen, weil sie hauptsächlich nützlich ist, wenn es sich um Datumsinstanzen handelt.

> [!NOTE]
> Das Präfixieren von Dienstprogrammmethoden mit dem, womit sie zu tun haben, wird als "Namensraumbildung" bezeichnet und gilt als eine gute Praxis. Zum Beispiel neben der alten, unpräfixierten [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) Methode, fügte JavaScript später zusätzlich die präfixierte [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) Methode hinzu, um anzuzeigen, dass es um Zahlen geht.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, anstatt auf individuellen Instanzen der Klasse. Diese Funktionen umfassen:

- Statische Methoden
- Statische Felder
- Statische Getter und Setter

Alles hat auch private Gegenstücke. Zum Beispiel können wir für unsere `Color`-Klasse eine statische Methode erstellen, die überprüft, ob ein bestimmtes Triplet ein gültiger RGB-Wert ist:

```js
class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
```

Statische Eigenschaften sind sehr ähnlich wie ihre Instanzgegenstücke, mit der Ausnahme, dass:

- Sie alle mit `static` versehen sind und
- Sie nicht von Instanzen aus zugänglich sind.

```js
console.log(new Color(0, 0, 0).isValid); // undefined
```

Es gibt auch ein spezielles Konstrukt, das als [_statischer Initialisierungsblock_](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) bezeichnet wird, bei dem es sich um einen Codeblock handelt, der ausgeführt wird, wenn die Klasse das erste Mal geladen wird.

```js
class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
```

Statische Initialisierungsblöcke sind fast gleichbedeutend damit, dass unmittelbar nach der Deklaration einer Klasse irgendein Code ausgeführt wird. Der einzige Unterschied besteht darin, dass sie Zugang zu statischen privaten Elementen haben.

## Extends und Vererbung

Ein Hauptmerkmal, das Klassen mit sich bringen (neben der ergonomischen Kapselung mit privaten Feldern), ist die _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts "ausleihen" kann, während es bestimmte Teile mit seiner eigenen Logik überschreibt oder verbessert.

Nehmen wir an, unsere `Color`-Klasse muss nun Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das seine Transparenz angibt:

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

Dies bedeutet jedoch, dass jede Instanz - auch die überwiegende Mehrheit, die nicht transparent ist (mit einem Alphawert von 1) - den zusätzlichen Alphawert haben muss, was nicht sehr elegant ist. Außerdem, wenn die Funktionen weiter wachsen, wird unsere `Color`-Klasse sehr aufgeblasen und schwer zu warten.

Stattdessen würden wir in der objektorientierten Programmierung eine _abgeleitete Klasse_ erstellen. Die abgeleitete Klasse hat Zugriff auf alle öffentlichen Eigenschaften der Elternklasse. In JavaScript werden abgeleitete Klassen mit einer [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Klausel deklariert, die die Klasse angibt, von der sie abgeleitet wird.

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

Es gibt ein paar Dinge, die sofort Aufmerksamkeit erregt haben. Zuallererst ist, dass wir im Konstruktor `super(r, g, b)` aufrufen. Es ist eine Sprachvorgabe, `super()` aufzurufen, bevor Sie auf `this` zugreifen. Der Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren – hier ist es ungefähr gleichbedeutend mit `this = new Color(r, g, b)`. Sie können vor `super()` Code haben, aber Sie dürfen nicht auf `this` zugreifen, bevor `super()` aufgerufen wurde – die Sprache verhindert, dass Sie auf das nicht initialisierte `this` zugreifen.

Nachdem die Elternklasse ihre Maßnahmen gegenüber `this` abgeschlossen hat, kann die abgeleitete Klasse ihre eigenen Logikmaßnahmen einführen. Hier haben wir ein privates Feld namens `#alpha` hinzugefügt und auch ein Paar Getter/Setter bereitgestellt, um mit ihnen zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden ihrer Eltern. Betrachten Sie zum Beispiel den `get red()`-Accessor, den wir der `Color` hinzugefügt haben, im Abschnitt [Zugriffsfelder](#zugriffsfelder) - obwohl wir in `ColorWithAlpha` keine deklariert haben, können wir `red` dennoch aufrufen, da dieses Verhalten von der Elternklasse spezifiziert wird:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Elternklasse überschreiben. Zum Beispiel erben alle Klassen implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Die Standard-`toString()`-Methode ist jedoch notorisch nutzlos, da sie in den meisten Fällen `[object Object]` ausgibt:

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

Innerhalb abgeleiteter Klassen können Sie die Methoden der Elternklasse mit `super` aufrufen. Dies ermöglicht es Ihnen, Methoden zu erweitern und Code-Duplizierung zu vermeiden.

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

Wenn Sie `extends` verwenden, erben auch die statischen Methoden voneinander, sodass Sie diese ebenfalls überschreiben oder erweitern können.

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

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse – dies ist ein weiterer wesentlicher Aspekt der "harten Privatsphäre" von JavaScript-privaten Feldern. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme bei mehrfacher Vererbung wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der mehrfachen Vererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen abgeleiteter Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen verwenden?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber eine Frage bleibt unbeantwortet: _Warum_ würde man eine Klasse verwenden? Die Antwort lautet: Es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Möglichkeit, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Subtyp-Polymorphismus_) aufgebaut ist. Viele Menschen sind jedoch philosophisch gegen bestimmte OOP-Praktiken eingestellt und verwenden Klassen daher nicht.

Ein Beispiel: Eines der Merkmale, das `Date`-Objekte berüchtigt macht, ist, dass sie _änderbar_ sind.

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

Änderbarkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen jedoch oft den Code schwer nachvollziehbar - da jeder scheinbar harmlose Vorgang unerwartete Nebeneffekte haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir häufig darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbung_tree mit fünf Klassen und drei Ebenen](figure8.1.png)

Es ist jedoch oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur von einer anderen Klasse erben kann. Oft möchten wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen erreicht; in JavaScript kann dies durch Mixins erreicht werden. Am Ende ist es jedoch immer noch nicht sehr bequem.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf einer höheren Ebene zu organisieren. Ohne die `Color`-Klasse könnten wir zum Beispiel ein Dutzend Utility-Funktionen erstellen müssen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namensraum versammeln, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung von privaten Feldern, bestimmte Daten vor nachgelagerten Benutzern zu verbergen, was eine saubere API schafft.

Im Allgemeinen sollten Sie überlegen, Klassen zu verwenden, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viel Verhalten freigeben. Nehmen Sie als Beispiel eingebaute JavaScript-Klassen:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Klassen speichern eine Sammlung von Elementen und ermöglichen den Zugriff darauf über `get()`, `set()`, `has()` usw.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und ermöglicht es Ihnen, individuelle Datumsbestandteile zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Traces, der Ursache usw. Sie ist eine der wenigen Klassen, die über eine reichhaltige Vererbungsstruktur verfügt: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Falle von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: Jede Fehlerklasse repräsentiert eine bestimmte Art von Fehler, die leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet die Möglichkeit, Ihren Code auf eine kanonische objektorientierte Weise zu organisieren, aber ob und wie man es verwendet, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
