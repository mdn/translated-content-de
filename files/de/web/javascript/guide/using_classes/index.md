---
title: Verwendung von Klassen
slug: Web/JavaScript/Guide/Using_classes
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}

JavaScript ist eine prototypenbasierte Sprache - das Verhalten eines Objekts wird durch seine eigenen Eigenschaften und die Eigenschaften seines Prototyps bestimmt. Mit der Einführung von [Klassen](/de/docs/Web/JavaScript/Reference/Classes) ist die Erstellung von Objekt-Hierarchien und das Erben von Eigenschaften und deren Werten jedoch viel mehr im Einklang mit anderen objektorientierten Sprachen wie Java. In diesem Abschnitt werden wir demonstrieren, wie Objekte aus Klassen erstellt werden können.

In vielen anderen Sprachen sind _Klassen_ oder Konstruktoren klar von _Objekten_ oder Instanzen unterschieden. In JavaScript sind Klassen hauptsächlich eine Abstraktion über den bestehenden prototypbasierten Vererbungsmechanismus - alle Muster können in prototypbasierte Vererbung umgewandelt werden. Klassen selbst sind ebenfalls normale JavaScript-Werte und besitzen ihre eigenen Prototypketten. Tatsächlich können die meisten einfachen JavaScript-Funktionen als Konstruktoren verwendet werden - Sie verwenden den `new`-Operator mit einer Konstruktorfunktion, um ein neues Objekt zu erstellen.

In diesem Tutorial werden wir mit dem gut abstrahierten Klassenmodell arbeiten und diskutieren, welche Semantik Klassen bieten. Wenn Sie tief in das zugrunde liegende Prototypsystem eintauchen möchten, können Sie den [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Leitfaden lesen.

Dieses Kapitel geht davon aus, dass Sie bereits etwas mit JavaScript vertraut sind und dass Sie normale Objekte verwendet haben.

## Überblick über Klassen

Wenn Sie bereits einige praktische Erfahrungen mit JavaScript haben oder dem Leitfaden gefolgt sind, haben Sie wahrscheinlich bereits Klassen verwendet, auch wenn Sie nicht selbst eine erstellt haben. Zum Beispiel könnte Ihnen dies [bekannt vorkommen](/de/docs/Web/JavaScript/Guide/Representing_dates_times):

```js
const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}
```

In der ersten Zeile haben wir eine Instanz der Klasse [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) erstellt und sie `bigDay` genannt. In der zweiten Zeile haben wir eine {{Glossary("Method", "Methode")}} [`toLocaleDateString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) auf der `bigDay`-Instanz aufgerufen, die einen String zurückgibt. Danach haben wir zwei Zahlen verglichen: eine, die von der Methode [`getTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) zurückgegeben wurde, und die andere, die direkt von der `Date`-Klasse selbst aufgerufen wurde, als [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

`Date` ist eine eingebaute Klasse in JavaScript. Aus diesem Beispiel können wir einige grundlegende Ideen ableiten, was Klassen tun:

- Klassen erstellen Objekte über den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator.
- Jedes Objekt erhält einige von der Klasse hinzugefügte Eigenschaften (Daten oder Methode).
- Die Klasse speichert einige Eigenschaften (Daten oder Methode) selbst, die normalerweise verwendet werden, um mit Instanzen zu interagieren.

Diese entsprechen den drei Hauptmerkmalen von Klassen:

- Konstruktor;
- Instanzmethoden und Instanzfelder;
- Statische Methoden und statische Felder.

## Deklarieren einer Klasse

Klassen werden normalerweise durch _Klassendeklarationen_ erstellt.

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

Wenn Sie aus einer Zeit vor ES6 stammen, sind Sie möglicherweise mit der Verwendung von Funktionen als Konstruktoren vertrauter. Das obige Muster würde grob übersetzt wie folgt aussehen mit Funktionskonstruktoren:

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
> Private Felder und Methoden sind neue Features in Klassen, für die es in Funktionskonstruktoren keine triviale Entsprechung gibt.

### Eine Klasse konstruieren

Nachdem eine Klasse deklariert wurde, können Sie Instanzen davon mithilfe des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators erstellen.

```js
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod();
```

Typische Funktionskonstruktoren können sowohl mit `new` konstruiert als auch ohne `new` aufgerufen werden. Wenn Sie jedoch versuchen, eine Klasse ohne `new` aufzurufen, führt dies zu einem Fehler.

```js
const myInstance = MyClass(); // TypeError: Class constructor MyClass cannot be invoked without 'new'
```

### Hoisting von Klassendeklarationen

Im Gegensatz zu Funktionsdeklarationen werden Klassendeklarationen nicht {{Glossary("Hoisting", "gehoistet")}} (oder in einigen Auslegungen gehoistet, jedoch mit der "temporal dead zone"-Einschränkung), was bedeutet, dass Sie eine Klasse nicht verwenden können, bevor sie deklariert ist.

```js
new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {}
```

Dieses Verhalten ähnlich wie bei Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden.

### Klassaudrücke

Ähnlich wie bei Funktionen gibt es auch bei Klassendeklarationen Ausdrücke.

```js
const MyClass = class {
  // Class body...
};
```

Klassaudrücke können ebenfalls Namen haben. Der Name des Ausdrucks ist nur im Klassenkörper sichtbar.

```js
const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined
```

## Konstruktor

Vielleicht ist die wichtigste Aufgabe einer Klasse, als "Fabrik" für Objekte zu fungieren. Wenn wir zum Beispiel den `Date`-Konstruktor verwenden, erwarten wir, dass er ein neues Objekt liefert, das die Datumsdaten repräsentiert, die wir übergeben haben - die wir dann mit anderen Methoden manipulieren können, die die Instanz zur Verfügung stellt. In Klassen erfolgt die Instanzerstellung über den [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor).

Als Beispiel würden wir eine Klasse namens `Color` erstellen, die eine bestimmte Farbe repräsentiert. Benutzer erstellen Farben, indem sie ein {{Glossary("RGB", "RGB")}}-Triplet übergeben.

```js
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}
```

Öffnen Sie die DevTools Ihres Browsers, fügen Sie den obigen Code in die Konsole ein und erstellen Sie dann eine Instanz:

```js
const red = new Color(255, 0, 0);
console.log(red);
```

Sie sollten eine Ausgabe wie diese sehen:

```plain
Object { values: (3) […] }
  values: Array(3) [ 255, 0, 0 ]
```

Sie haben erfolgreich eine `Color`-Instanz erstellt, und die Instanz hat eine `values`-Eigenschaft, die ein Array der übergebenen RGB-Werte ist. Das entspricht fast dem Folgenden:

```js
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
```

Die Syntax des Konstruktors ist genau die gleiche wie bei einer normalen Funktion - das bedeutet, dass Sie andere Syntaxen verwenden können, wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters):

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

Innerhalb eines Klassenkonstruktors zeigt der Wert von `this` auf die neu erstellte Instanz. Sie können ihr Eigenschaften zuweisen oder vorhandene Eigenschaften lesen (insbesondere Methoden - die wir als Nächstes behandeln werden).

Der Wert von `this` wird automatisch als Ergebnis von `new` zurückgegeben. Es wird empfohlen, keinen Wert aus dem Konstruktor zurückzugeben - denn wenn Sie einen nicht-primitive Wert zurückgeben, wird er zum Wert des `new`-Ausdrucks, und der Wert von `this` wird verworfen. (Sie können mehr darüber lesen, was `new` macht, in [seiner Beschreibung](/de/docs/Web/JavaScript/Reference/Operators/new#description).)

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

Wenn eine Klasse nur einen Konstruktor hat, unterscheidet sie sich nicht viel von einer `createX`-Fabrikfunktion, die nur einfache Objekte erstellt. Der Vorteil von Klassen besteht jedoch darin, dass sie als "Templates" verwendet werden können, die automatisch Methoden Instanzen zuordnen.

Zum Beispiel können Sie für `Date`-Instanzen eine Reihe von Methoden verwenden, um verschiedene Informationen aus einem einzelnen Datumswert zu erhalten, wie das [Jahr](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear), den [Monat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), den [Wochentag](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) usw. Sie können diese Werte auch über die `setX`-Gegenstücke wie [`setFullYear`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) setzen.

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

Das funktioniert ebenfalls. Allerdings gibt es ein Problem: Bei jedem Erstellen einer `Color`-Instanz wird eine neue Funktion erstellt, auch wenn sie alle das Gleiche tun!

```js
console.log(new Color().getRed === new Color().getRed); // false
```

Im Gegensatz dazu, wenn Sie eine Methode verwenden, wird diese zwischen allen Instanzen geteilt. Eine Funktion kann zwischen allen Instanzen geteilt werden, aber ihr Verhalten kann sich unterscheiden, wenn verschiedene Instanzen sie aufrufen, da der Wert von `this` unterschiedlich ist. Falls Sie neugierig sind, _wo_ diese Methode gespeichert wird - sie ist im Prototyp aller Instanzen definiert, oder `Color.prototype`, was im Detail in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) erklärt wird.

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

Sie fragen sich vielleicht, warum wir die Mühe mit `getRed`- und `setRed`-Methoden auf uns nehmen, wenn wir direkt auf das `values`-Array der Instanz zugreifen können?

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

Es gibt eine Philosophie in der objektorientierten Programmierung namens "Kapselung". Das bedeutet, dass Sie nicht auf die zugrunde liegende Implementierung eines Objekts zugreifen sollten, sondern stattdessen gut abstrahierte Methoden verwenden sollten, um mit ihm zu interagieren. Zum Beispiel, wenn wir plötzlich entscheiden, Farben als [HSL](/de/docs/Web/CSS/color_value/hsl) zu repräsentieren:

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

Die Annahme des Benutzers, dass `values` den RGB-Wert bedeutet, bricht plötzlich zusammen und könnte dazu führen, dass ihre Logik fehlschlägt. Wenn Sie also ein Implementor einer Klasse sind, möchten Sie die interne Datenstruktur Ihrer Instanz vor Ihrem Benutzer verbergen, um sowohl die API sauber zu halten als auch zu verhindern, dass der Code des Benutzers bei "harmlosen Refactorings" bricht. In Klassen wird dies durch [_private Felder_](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) erreicht.

Ein privates Feld ist ein Bezeichner, der mit `#` (dem Hash-Symbol) versehen ist. Der Hash ist ein integraler Bestandteil des Feldnamens, was bedeutet, dass ein privates Feld niemals denselben Namen wie ein öffentliches Feld haben kann. Um in der Klasse auf ein privates Feld zu verweisen, muss es _im Klassenkörper deklariert_ werden (Sie können kein privates Feld spontan erstellen). Abgesehen davon entspricht ein privates Feld weitgehend einer normalen Eigenschaft.

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

Der Zugriff auf private Felder außerhalb der Klasse ist ein frühzeitiger Syntaxfehler. Die Sprache kann dies verhindern, da `#privateField` eine spezielle Syntax ist, sodass eine statische Analyse durchgeführt werden kann, um jede Verwendung privater Felder zu finden, bevor der Code überhaupt evaluiert wird.

```js-nolint example-bad
console.log(red.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
```

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse aufrufen. Dies ist eine Einschränkung der JavaScript-Syntax, die nur für DevTools gilt.

Private Felder in JavaScript sind _hart privat_: Wenn die Klasse keine Methoden implementiert, die diese privaten Felder offenlegen, gibt es absolut keinen Mechanismus, um darauf von außerhalb der Klasse zuzugreifen. Dies bedeutet, dass Sie sicher sind, beliebige Refactorings an den privaten Feldern der Klasse vorzunehmen, solange das Verhalten der exponierten Methoden gleich bleibt.

Nachdem wir das `values`-Feld privat gemacht haben, können wir etwas mehr Logik in den Methoden `getRed` und `setRed` hinzufügen, anstatt sie zu einfachen Durchlaufmethoden zu machen. Beispielsweise können wir in `setRed` eine Prüfung hinzufügen, um zu sehen, ob es sich um einen gültigen R-Wert handelt:

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

Wenn wir die `values`-Eigenschaft freilegen würden, könnte unser Benutzer diese Prüfung leicht umgehen, indem er direkt `values[0]` zuweist und ungültige Farben erstellt. Aber mit einer gut gekapselten API können wir unseren Code robuster gestalten und logische Fehler weiter unten verhindern.

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

Wenn `anotherColor` jedoch keine `Color`-Instanz ist, existiert `#values` nicht. (Auch wenn eine andere Klasse ein privat benanntes `#values`-Feld hat, bezieht sich dies nicht auf dasselbe und kann hier nicht aufgerufen werden.) Der Zugriff auf eine nicht vorhandene private Eigenschaft löst einen Fehler aus, anstatt wie bei normalen Eigenschaften `undefined` zurückzugeben. Wenn Sie nicht wissen, ob ein privates Feld auf einem Objekt existiert und darauf zugreifen möchten, ohne `try`/`catch` zu verwenden, um den Fehler zu behandeln, können Sie den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden.

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
> Beachten Sie, dass `#` eine spezielle Bezeichnersyntax ist und Sie den Feldnamen nicht so verwenden können, als wäre es ein String. `"#values" in anotherColor` würde nach einem Eigenschaftsnamen suchen, der buchstäblich `"#values"` lautet, anstatt nach einem privaten Feld.

Es gibt einige Einschränkungen bei der Verwendung privater Eigenschaften: derselbe Name kann nicht zweimal in einer einzelnen Klasse deklariert werden und sie können nicht gelöscht werden. Beides führt zu frühzeitigen Syntaxfehlern.

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

Methoden, [Getter und Setter](#zugriffs-felder) können ebenfalls privat sein. Sie sind nützlich, wenn Sie etwas Komplexes haben, das die Klasse intern tun muss, aber kein anderer Teil des Codes darauf zugreifen sollte.

Stellen Sie sich zum Beispiel vor, Sie erstellen [HTML-Benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements), die etwas Kompliziertes tun sollen, wenn sie angeklickt/angetippt/aktiviert werden. Darüber hinaus sollten die etwas komplizierten Dinge, die passieren, wenn das Element angeklickt wird, auf diese Klasse beschränkt sein, da kein anderer Teil des JavaScripts jemals darauf zugreifen wird (oder sollte).

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

In diesem Fall sind fast alle Felder und Methoden für die Klasse privat. So präsentiert es der übrigen Programmierung ein Interface, das im Wesentlichen wie ein eingebautes HTML-Element ist. Kein anderer Teil des Programms hat die Möglichkeit, auf interne Mechanismen von `Counter` Einfluss zu nehmen.

## Zugriffs-Felder

`color.getRed()` und `color.setRed()` erlauben es uns, den roten Wert einer Farbe zu lesen und zu schreiben. Wenn Sie aus Sprachen wie Java kommen, werden Sie mit diesem Muster sehr vertraut sein. Dennoch ist das Verwenden von Methoden, um einfach auf eine Eigenschaft zuzugreifen, in JavaScript immer noch etwas unergonomisch. _Zugriffs-Felder_ erlauben es uns, mit etwas so zu manipulieren, als wäre es eine "echte Eigenschaft".

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

Es sieht so aus, als hätte das Objekt eine Eigenschaft namens `red` - aber tatsächlich existiert eine solche Eigenschaft nicht auf der Instanz! Es gibt nur zwei Methoden, aber sie sind mit `get` und `set` versehen, was es ihnen ermöglicht, so manipuliert zu werden, als wären sie Eigenschaften.

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

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt die Zeile `red.red = 0` zu einem Typfehler: "Eigenschaft `red` von #\<Color> kann nicht gesetzt werden, da sie nur ein Getter ist". Im nicht-strikten Modus wird die Zuweisung stillschweigend ignoriert.

## Öffentliche Felder

Private Felder haben auch ihre öffentlichen Gegenstücke, die es jeder Instanz erlauben, eine Eigenschaft zu haben. Felder sind in der Regel so konzipiert, dass sie unabhängig von den Parametern des Konstruktors sind.

```js
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3
```

Öffentliche Felder entsprechen fast der Zuweisung einer Eigenschaft zu `this`. Zum Beispiel kann das obige Beispiel auch in folgendes umgewandelt werden:

```js
class MyClass {
  constructor() {
    this.luckyNumber = Math.random();
  }
}
```

## Statische Eigenschaften

Mit dem `Date`-Beispiel haben wir auch die [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now)-Methode gesehen, die das aktuelle Datum zurückgibt. Diese Methode gehört zu keiner Datumsinstanz - sie gehört zur Klasse selbst. Sie wird jedoch in die `Date`-Klasse aufgenommen, anstatt als globale `DateNow()`-Funktion freigelegt zu werden, weil sie hauptsächlich nützlich ist, wenn man sich mit Date-Instanzen beschäftigt.

> [!NOTE]
> Das Präfixing von Hilfsmethoden mit dem, womit sie sich befassen, wird als "Namenstrukturierung" bezeichnet und als gute Praxis angesehen. Zum Beispiel fügte JavaScript zu der älteren, unpräfixen [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt)-Methode auch die prefixed [`Number.parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)-Methode hinzu, um anzuzeigen, dass sie für den Umgang mit Zahlen gedacht ist.

[_Statische Eigenschaften_](/de/docs/Web/JavaScript/Reference/Classes/static) sind eine Gruppe von Klassenfunktionen, die auf der Klasse selbst definiert sind, anstatt auf den einzelnen Instanzen der Klasse. Zu diesen Funktionen gehören:

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

Statische Eigenschaften sind den Instanz-Gegenstücken sehr ähnlich, außer dass:

- Sie alle mit `static` versehen sind, und
- Sie sind nicht von Instanzen zugänglich.

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

Statische Initialisierungsblöcke sind fast gleichbedeutend mit dem Ausführen von Code unmittelbar nachdem eine Klasse deklariert wurde. Der einzige Unterschied besteht darin, dass sie Zugriff auf statische private Eigenschaften haben.

## Extends und Vererbung

Ein Schlüsselmerkmal, das Klassen mit sich bringen (zusätzlich zur ergonomischen Kapselung mit privaten Feldern), ist die _Vererbung_, was bedeutet, dass ein Objekt einen großen Teil des Verhaltens eines anderen Objekts "ausleihen" kann, während bestimmte Teile mit eigener Logik überschrieben oder erweitert werden.

Zum Beispiel, nehmen wir an, unsere `Color`-Klasse muss jetzt Transparenz unterstützen. Wir könnten versucht sein, ein neues Feld hinzuzufügen, das die Transparenz anzeigt:

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

Allerdings würde dies bedeuten, dass jede Instanz - selbst die überwiegende Mehrheit, die nicht transparent ist (die mit einem Alphawert von 1) - den zusätzlichen Alphawert haben müsste, was nicht sehr elegant ist. Außerdem, wenn die Funktionen immer mehr wachsen, wird unsere `Color`-Klasse sehr aufgebläht und schwer zu warten.

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

Es gibt ein paar Dinge, die sofort ins Auge fallen. Erstens rufen wir im Konstruktor `super(r, g, b)` auf. Es ist eine Spracheanforderung, [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufzurufen, bevor `this` zugegriffen wird. Der `super()`-Aufruf ruft den Konstruktor der Elternklasse auf, um `this` zu initialisieren - hier ist es ungefähr gleichwertig mit `this = new Color(r, g, b)`. Man kann Code vor `super()` haben, aber `this` kann nicht vor `super()` aufgerufen werden - die Sprache verhindert den Zugriff auf das nicht initialisierte `this`.

Nachdem die Elternklasse `this` modifiziert hat, kann die abgeleitete Klasse ihre eigene Logik einfügen. Hier fügen wir ein privates Feld namens `#alpha` hinzu und bieten auch ein Paar Getter/Setter an, um damit zu interagieren.

Eine abgeleitete Klasse erbt alle Methoden von ihrer Elternklasse. Zum Beispiel, obwohl `ColorWithAlpha` keinen `get red()`-Accessor selbst erklärt, können Sie immer noch auf `red` zugreifen, da dieses Verhalten von der Elternklasse spezifiziert wurde:

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color.red); // 255
```

Abgeleitete Klassen können auch Methoden der Elternklasse überschreiben. Zum Beispiel, alle Klassen erben implizit die [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Klasse, die einige grundlegende Methoden wie [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) definiert. Allerdings ist die grundlegende `toString()`-Methode notorisch nutzlos, da sie in den meisten Fällen `[object Object]` ausgibt:

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

Innerhalb von abgeleiteten Klassen können Sie die Methoden der Elternklasse mit `super` aufrufen. Dadurch können Sie Verbesserung der Methoden erstellen und Duplikationen im Code vermeiden.

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
  // ...
  static isValid(r, g, b, a) {
    // Call the parent class's isValid() and build on the return value
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
```

Abgeleitete Klassen haben keinen Zugriff auf die privaten Felder der Elternklasse - das ist ein weiterer wichtiger Aspekt, warum JavaScript private Felder "hart privat" sind. Private Felder sind auf den Klassenkörper selbst beschränkt und gewähren _keinem_ externen Code Zugriff.

```js-nolint example-bad
class ColorWithAlpha extends Color {
  log() {
    console.log(this.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class
  }
}
```

Eine Klasse kann nur von einer Klasse erben. Dies verhindert Probleme bei der Mehrfachvererbung wie das [Diamantproblem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Aufgrund der dynamischen Natur von JavaScript ist es jedoch immer noch möglich, den Effekt der Mehrfachvererbung durch Klassenkomposition und [Mixins](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) zu erzielen.

Instanzen von abgeleiteten Klassen sind auch [Instanzen von](/de/docs/Web/JavaScript/Reference/Operators/instanceof) der Basisklasse.

```js
const color = new ColorWithAlpha(255, 0, 0, 0.5);
console.log(color instanceof Color); // true
console.log(color instanceof ColorWithAlpha); // true
```

## Warum Klassen?

Der Leitfaden war bisher pragmatisch: Wir konzentrieren uns darauf, _wie_ Klassen verwendet werden können, aber es bleibt eine Frage unbeantwortet: _Warum_ sollte man eine Klasse verwenden? Die Antwort ist: Es kommt darauf an.

Klassen führen ein _Paradigma_ ein, oder eine Art, Ihren Code zu organisieren. Klassen sind die Grundlagen der objektorientierten Programmierung, die auf Konzepten wie [Vererbung](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) und [Polymorphismus](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>) (insbesondere _Subtyp-Polymorphismus_) aufbaut. Viele Leute sind jedoch philosophisch gegen bestimmte OOP-Praktiken und verwenden deshalb keine Klassen.

Zum Beispiel: Eine Sache, die `Date`-Objekte berüchtigt macht, ist, dass sie _veränderlich_ sind.

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

Veränderlichkeit und interner Zustand sind wichtige Aspekte der objektorientierten Programmierung, machen jedoch häufig Code schwer nachvollziehbar - weil jede scheinbar harmlose Operation unerwartete Nebenwirkungen haben und das Verhalten in anderen Teilen des Programms ändern kann.

Um Code wiederzuverwenden, greifen wir normalerweise darauf zurück, Klassen zu erweitern, was große Hierarchien von Vererbungsmustern schaffen kann.

![Ein typischer OOP-Vererbungsbaum, mit fünf Klassen und drei Ebenen](figure8.1.png)

Allerdings ist es oft schwierig, Vererbung sauber zu beschreiben, wenn eine Klasse nur eine andere Klasse erweitern kann. Häufig möchten wir das Verhalten mehrerer Klassen. In Java wird dies durch Schnittstellen gemacht; in JavaScript kann es durch Mixins gemacht werden. Aber am Ende des Tages ist es immer noch nicht sehr praktisch.

Auf der positiven Seite sind Klassen eine sehr mächtige Möglichkeit, unseren Code auf einer höheren Ebene zu organisieren. Beispielsweise, ohne die `Color`-Klasse, müssten wir möglicherweise ein Dutzend von Hilfsfunktionen erstellen:

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

Aber mit Klassen können wir sie alle unter dem `Color`-Namespace zusammenfassen, was die Lesbarkeit verbessert. Darüber hinaus ermöglicht die Einführung privater Felder, bestimmte Daten vor den Benutzern zu verbergen und eine saubere API zu schaffen.

Im Allgemeinen sollten Sie Klassen in Betracht ziehen, wenn Sie Objekte erstellen möchten, die ihre eigenen internen Daten speichern und viele Verhaltensweisen bereitstellen. Nehmen Sie eingebaute JavaScript-Klassen als Beispiele:

- Die [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Klassen speichern eine Sammlung von Elementen und erlauben Ihnen, mit `get()`, `set()`, `has()` usw. auf sie zuzugreifen.
- Die [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Klasse speichert ein Datum als Unix-Zeitstempel (eine Zahl) und erlaubt Ihnen, einzelne Datumskomponenten zu formatieren, zu aktualisieren und zu lesen.
- Die [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Klasse speichert Informationen über eine bestimmte Ausnahme, einschließlich der Fehlermeldung, des Stack-Trace, der Ursache usw. Es ist eine der wenigen Klassen, die mit einer reichen Vererbungshierarchie geliefert wird: Es gibt mehrere eingebaute Klassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), die `Error` erweitern. Im Fall von Fehlern ermöglicht diese Vererbung die Verfeinerung der Semantik von Fehlern: jede Fehlerklasse repräsentiert eine bestimmte Art von Fehler, die leicht mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) überprüft werden kann.

JavaScript bietet den Mechanismus, Ihren Code auf kanonische objektorientierte Weise zu organisieren, aber ob und wie man ihn verwendet, liegt ganz im Ermessen des Programmierers.

{{PreviousNext("Web/JavaScript/Guide/Working_with_objects", "Web/JavaScript/Guide/Using_promises")}}
