---
title: Grundlagen zu JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende Syntax von JavaScript-Objekten und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs kennengelernt haben. Wir betonen dabei, dass viele der Funktionen, die Sie bereits verwendet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich jedes Mal, wenn Sie JavaScript verwendet haben, Objekte verwendet haben.</li>
          <li>Grundlegende Syntax: Objekt-Literale, Eigenschaften und Methoden, verschachtelte Objekte und Arrays in Objekten.</li>
          <li>Konstruktoren verwenden, um ein neues Objekt zu erstellen.</li>
          <li>Objektscope und <code>this</code>.</li>
          <li>Eigenschaften und Methoden aufrufen — Klammer- und Punkt-Syntax.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen zu Objekten

Ein Objekt ist eine Sammlung verwandter Daten und/oder Funktionalität. Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die Eigenschaften und Methoden genannt werden, wenn sie in Objekten enthalten sind). Schauen wir uns ein Beispiel an, um zu verstehen, wie sie aussehen.

Erstellen Sie zuerst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html)-Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir verwenden dies als Grundlage, um die grundlegende Objektsyntax zu erforschen. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts häufig mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unter dem bereits in Ihrer Datei vorhandenen JavaScript-Code einzugeben, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, ähnlich einer der folgenden Zeilen:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber das ist ein leeres Objekt, daher können wir nicht viel damit anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei so aktualisieren:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Nach dem Speichern und Aktualisieren versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole in Ihren Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben nun einige Daten und Funktionalitäten in Ihrem Objekt und können nun mit einer schönen einfachen Syntax darauf zugreifen!

Was passiert hier also? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt werden, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem `person`-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als Eigenschaft des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als Methoden des Objekts bezeichnet.

Wenn die Mitglieder des Objekts Funktionen sind, gibt es eine einfachere Syntax. Anstelle von `bio: function ()` können wir `bio()` schreiben. So:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Von jetzt an verwenden wir diese kürzere Syntax.

Ein solches Objekt wird als **Objekt-Literal** bezeichnet — wir haben den Inhalt des Objekts buchstäblich geschrieben, als wir es erstellt haben. Dies unterscheidet sich von Objekten, die von Klassen instanziiert werden, die wir später betrachten werden.

Es ist sehr üblich, ein Objekt mithilfe eines Objekt-Literals zu erstellen, wenn Sie eine Reihe strukturierter, verwandter Datenelemente auf irgendeine Weise übertragen möchten, zum Beispiel beim Senden einer Anfrage an den Server, um in eine Datenbank aufgenommen zu werden. Das Senden eines einzelnen Objekts ist viel effizienter, als mehrere Elemente einzeln zu senden, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente namentlich identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit der **Punktnotation** zugegriffen. Der Objektname (`person`) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf etwas innerhalb des Objekts zuzugreifen. Dann schreiben Sie einen Punkt und anschließend das Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie zum Beispiel, das Mitglied `name` von

```js
const person = {
  name: ["Bob", "Smith"],
};
```

zu

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

zu ändern.

Um auf diese Elemente zuzugreifen, müssen Sie lediglich den zusätzlichen Schritt am Ende mit einem weiteren Punkt anfügen. Probieren Sie diese in der JS-Konsole aus:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methoden-Code durchgehen und alle Instanzen von

```js
name[0];
name[1];
```

durch

```js
name.first;
name.last;
```

ändern.

Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammernotation

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Anstatt [Punktnotation](#punktnotation) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht der Art und Weise, wie Sie auf Elemente in einem Array zugreifen, sehr ähnlich und ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist. Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten zu, auf die gleiche Weise, wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie prägnanter und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gespeichert ist, können Sie nicht die Punktnotation verwenden, um den Wert zuzugreifen, aber Sie können den Wert mit Klammernotation zugreifen.

Im folgenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der Eigenschaft abzurufen, die in `propertyName` angegeben ist.

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

## Setzen von Objektelementen

Bisher haben wir uns nur das Abrufen (oder **Holen**) von Objektelementen angesehen — Sie können auch den Wert von Objektelementen **setzen** (aktualisieren), indem Sie das Element deklarieren, das Sie festlegen möchten (mithilfe von Punkt- oder Klammernotation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und holen Sie die Mitglieder erneut, um zu sehen, wie sie sich geändert haben, so:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern endet nicht nur beim Aktualisieren der Werte bestehender Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Sie können nun Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur Mitgliedswerte dynamisch setzen kann, sondern auch Mitgliedsnamen. Angenommen, wir wollten Benutzern die Möglichkeit geben, benutzerdefinierte Werttypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte so erhalten:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und Wert dem `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, fügen Sie die folgenden Zeilen in Ihren Code ein, direkt unter die schließende geschweifte Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie nun und geben Sie das Folgende in Ihre Texteingabe ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punktnotation nicht möglich, die nur einen wörtlichen Mitgliedsnamen akzeptiert, nicht einen Variablenwert, der auf einen Namen verweist.

## Was ist "this"?

Möglicherweise ist Ihnen etwas leicht Seltsames in unseren Methoden aufgefallen. Betrachten Sie zum Beispiel diese:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this`-Schlüsselwort bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns veranschaulichen, was wir meinen, mit einem vereinfachten Paar von Personenobjekten:

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
```

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies passiert, weil sich bei einem Methodenaufruf `this` auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es derselben Methodendefinition ermöglicht, für mehrere Objekte zu arbeiten.

Dies ist nicht besonders nützlich, wenn Sie Objekt-Literale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum genau gleichen Ergebnis führt, aber es wird wesentlich sein, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung von Konstruktoren

Die Verwendung von Objekt-Literalen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten, wie das Hinzufügen einer `height`-Eigenschaft, müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit haben, die "Form" eines Objekts zu definieren — die Menge der Methoden und Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, indem wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

Die erste Version davon ist einfach eine Funktion:

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

Diese Funktion erstellt und gibt jedes Mal, wenn wir sie aufrufen, ein neues Objekt zurück. Das Objekt wird zwei Mitglieder haben:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Beachten Sie, dass `createPerson()` einen Parameter `name` nimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der Methode `introduceSelf()` ist für alle mit dieser Funktion erstellten Objekte gleich. Dies ist ein sehr häufiges Muster zum Erstellen von Objekten.

Nun können wir so viele Objekte erstellen, wie wir möchten, und dabei die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Dies funktioniert einwandfrei, ist jedoch etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und es zurückgeben. Ein besserer Weg ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mithilfe des {{jsxref("new")}}-Schlüsselworts aufgerufen wird. Bei einem Konstruktoraufruf wird:

- ein neues Objekt erstellt
- `this` an das neue Objekt gebunden, sodass Sie im Konstruktorausdruck auf `this` verweisen können
- der Code im Konstruktor ausgeführt
- das neue Objekt zurückgegeben.

Konstruktoren beginnen der Konvention nach mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Wir könnten unser Beispiel also so umschreiben:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

Um `Person()` als Konstruktor aufzurufen, verwenden wir `new`:

```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## Sie haben die ganze Zeit Objekte verwendet

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass Ihnen die Punktnotation sehr vertraut vorkommt. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen genau mit den gleichen Arten von Objektstrukturen erstellt werden, die wir hier betrachtet haben, wenn auch komplexere als in unseren eigenen einfachen benutzerdefinierten Beispielen.

Als Sie also String-Methoden wie die folgende verwendet haben:

```js
myString.split(",");
```

haben Sie eine Methode verwendet, die in einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie einen String in Ihrem Code erstellen, wird dieser String automatisch als eine Instanz von `String` erstellt und hat daher mehrere gemeinsame Methoden und Eigenschaften zur Verfügung.

Wenn Sie auf das Document Object Model mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die in einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, `document` genannt, die die gesamte Seitenstruktur, den Inhalt und andere Funktionen wie ihre URL darstellt. Auch hier bedeutet dies, dass es mehrere gemeinsame Methoden und Eigenschaften zur Verfügung hat.

Dasselbe gilt so ziemlich für jedes andere eingebaute Objekt oder jede API, die Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer Objektinstanzen automatisch erstellen. Ein Beispiel ist die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — die erfordert, dass Sie eine neue Objektinstanz für jede Benachrichtigung, die Sie auslösen möchten, mithilfe des Konstruktors instanziieren. Versuchen Sie, Folgendes in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten jetzt eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich des Erstellens Ihrer eigenen einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verfolgen, wäre es ineffizient und frustrierend, und Sie würden das Risiko eingehen, mit anderen Variablen und Funktionen mit den gleichen Namen in Konflikt zu geraten. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket zu verschließen, außerhalb von Gefahren.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
