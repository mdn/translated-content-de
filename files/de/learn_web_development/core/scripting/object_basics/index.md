---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel werden wir uns die grundlegende Syntax von JavaScript-Objekten ansehen und einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, erneut betrachten. Wir wiederholen damit, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den Grundlagen von JavaScript, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind, und dass Sie wahrscheinlich Objekte jedes Mal verwendet haben, wenn Sie mit JavaScript gearbeitet haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden, Verschachtelung von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objektumfang und <code>this</code>.</li>
          <li>Zugriff auf Eigenschaften und Methoden — Klammersyntax und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung von zusammengehörigen Daten und/oder Funktionen. Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie sich innerhalb von Objekten befinden). Lassen Sie uns an einem Beispiel arbeiten, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir werden dies als Grundlage verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie an diesem Beispiel arbeiten, sollten Sie Ihre [Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit haben, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit dem Definieren und Initialisieren einer Variablen. Versuchen Sie, die folgende Zeile unter dem JavaScript-Code einzugeben, der bereits in Ihrer Datei steht, und speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, das ähnlich einer der folgenden Zeilen aussieht:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, daher können wir damit nicht viel machen. Lassen Sie uns das JavaScript-Objekt in unserer Datei so aktualisieren:

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

Nach dem Speichern und Aktualisieren versuchen Sie, einige der folgenden Zeilen in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt Daten und Funktionen in Ihrem Objekt und können jetzt mit einer schönen einfachen Syntax darauf zugreifen!

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Namens/Wertepaar muss durch ein Komma getrennt werden, und der Name und der Wert in jedem Fall wird durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem `person`-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die dem Objekt erlauben, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

Wenn die Mitglieder des Objekts Funktionen sind, gibt es eine einfachere Syntax. Statt `bio: function ()` können wir `bio()` schreiben. So:

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

Von nun an verwenden wir diese kürzere Syntax.

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben den Inhalt des Objekts buchstäblich geschrieben, als wir es erstellt haben. Dies ist anders als bei Objekten, die aus Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr häufig, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe strukturierter, zusammengehöriger Datenelemente in irgendeiner Weise übertragen wollen, zum Beispiel eine Anfrage an den Server zu senden, die in einer Datenbank gespeichert werden soll. Das Senden eines einzigen Objekts ist viel effizienter als das Senden mehrerer Elemente einzeln, und es ist einfacher damit zu arbeiten als mit einem Array, wenn Sie einzelne Elemente nach Namen identifizieren möchten.

## Punkt-Syntax

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit der **Punkt-Syntax** zugegriffen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf irgendetwas innerhalb des Objekts zuzugreifen. Dann schreiben Sie einen Punkt, gefolgt vom Element, auf das Sie zugreifen möchten — das kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Zum Beispiel, versuchen Sie, das `name` Mitglied von

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

Um auf diese Elemente zuzugreifen, müssen Sie einfach den zusätzlichen Schritt mit einem weiteren Punkt an das Ende anhängen. Versuchen Sie diese in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch durch Ihren Methoden-Code gehen und alle Instanzen von

```js
name[0];
name[1];
```

ändern zu

```js
name.first;
name.last;
```

Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammer-Syntax

Die Klammer-Syntax bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Anstatt [Punkt-Syntax](#punkt-syntax) wie diese zu verwenden:

```js
person.age;
person.name.first;
```

Können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — statt einer Indexnummer, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds assoziiert ist. Es ist kein Wunder, dass Objekte manchmal **assoziative Arrays** genannt werden — sie ordnen Zeichenfolgen Werten zu, genauso wie Arrays Zahlen Werten zuordnen.

Die Punkt-Syntax wird im Allgemeinen der Klammer-Syntax vorgezogen, weil sie kürzer und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Zum Beispiel, wenn ein Objekt-Eigenschaftsname in einer Variablen gespeichert ist, können Sie mit der Punkt-Syntax nicht auf den Wert zugreifen, aber Sie können den Wert mit der Klammer-Syntax abrufen.

Im folgenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der in `propertyName` genannten Eigenschaft abzurufen.

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

## Setzen von Objektmitgliedern

Bisher haben wir nur das Abrufen (oder **Holen**) von Objektmitgliedern betrachtet — Sie können den Wert von Objektmitgliedern auch **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mit Punkt- oder Klammer-Syntax), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und rufen Sie dann die Mitglieder erneut ab, um zu sehen, wie sie sich geändert haben, so:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern geht nicht nur so weit, dass die Werte vorhandener Eigenschaften und Methoden aktualisiert werden; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Sie können jetzt Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammer-Syntax ist, dass sie verwendet werden kann, um nicht nur Mitgliedswerte dynamisch zu setzen, sondern auch Mitgliedsnamen. Angenommen, wir möchten, dass Benutzer benutzerdefinierte Werttypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert dem `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code direkt unter der abschließenden geschweiften Klammer des `person`-Objekts einzufügen:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie nun, und geben Sie Folgendes in Ihr Texteingabefeld ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punkt-Syntax nicht möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, keinen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben vielleicht etwas leicht Merkwürdiges in unseren Methoden bemerkt. Sehen Sie sich zum Beispiel diese Methode an:

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

Sie fragen sich vermutlich, was "this" ist. Das Schlüsselwort `this` bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns mit einem vereinfachten Paar von Personen-Objekten veranschaulichen, was wir meinen:

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil, wenn die Methode aufgerufen wird, `this` sich auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es ermöglicht, dass dieselbe Methodendefinition für mehrere Objekte funktioniert.

Dies ist nicht besonders nützlich, wenn Sie Objektliterale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum gleichen Ergebnis führt. Es wird jedoch unerlässlich sein, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, wieder und wieder schreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - wie das Hinzufügen einer `height`-Eigenschaft - dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit, die "Form" eines Objekts zu definieren — die Menge der Methoden und die Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, nur mit der Aktualisierung der Werte für die Eigenschaften, die sich unterscheiden.

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

Diese Funktion erstellt und gibt ein neues Objekt jedes Mal zurück, wenn wir sie aufrufen. Das Objekt wird zwei Mitglieder haben:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der `name`-Eigenschaft festzulegen, der Wert der `introduceSelf()`-Methode jedoch für alle Objekte, die mit dieser Funktion erstellt werden, gleich ist. Dies ist ein sehr häufiges Muster zur Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Dies funktioniert gut, ist aber etwas umständlich: wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Ein besserer Weg ist die Verwendung eines **Konstructors**. Ein Konstruktor ist einfach eine Funktion, die mit dem Schlüsselwort {{jsxref("operators/new", "new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie im Konstruktor-Code auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen in der Regel mit einem Großbuchstaben und sind nach dem Typ des Objekts, das sie erstellen, benannt. Wir könnten unser Beispiel also so umschreiben:

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

## Sie haben die ganze Zeit über Objekte verwendet

Während Sie diese Beispiele durchlaufen haben, haben Sie wahrscheinlich gedacht, dass Ihnen die Punkt-Syntax sehr vertraut vorkommt. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, denn solche Features werden mit genau der gleichen Art von Objektstrukturen aufgebaut, die wir hier betrachtet haben, wenn auch komplexere als in unseren eigenen einfachen benutzerdefinierten Beispielen.

Wenn Sie String-Methoden verwenden wie:

```js
myString.split(",");
```

haben Sie eine verfügbare Methode auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verwendet. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenfolge erstellen, wird diese Zeichenfolge automatisch als Instanz von `String` erstellt und hat daher mehrere gewöhnliche Methoden und Eigenschaften darauf verfügbar.

Wenn Sie das Dokumentobjektmodell mit Zeilen wie dieser zugreifen:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verwendet. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Funktionen der Seite wie ihre URL darstellt. Auch hier bedeutet dies, dass es mehrere gewöhnliche Methoden und Eigenschaften darauf verfügbar hat.

Dasselbe gilt für so gut wie jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Als Beispiel, die [Notifications API](/de/docs/Web/API/Notifications_API) — die modernen Browsern erlaubt, Systembenachrichtigungen zu senden — erfordert, dass Sie für jede Benachrichtigung, die Sie senden möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, das Folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Grundlagen von Objekten](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics).

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie Sie mit Objekten in JavaScript arbeiten — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich als Strukturen zur Speicherung verwandter Daten und Funktionen sind — wenn Sie versuchen würden, den Überblick über alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu behalten, wäre das ineffizient und frustrierend, und wir würden das Risiko eingehen, Konflikte mit anderen Variablen und Funktionen zu bekommen, die denselben Namen haben. Objekte erlauben es uns, die Informationen sicher verpackt zu halten, aus dem Weg.

Im nächsten Artikel werden wir uns **DOM-Skripting** ansehen, das eine große Menge grundlegender Browser-API-Funktionalität freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
