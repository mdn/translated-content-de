---
title: JavaScript-Objektgrundlagen
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende JavaScript-Objektsyntax und gehen einige JavaScript-Funktionen erneut durch, die wir bereits früher im Kurs gesehen haben. Dabei wiederholen wir, dass viele der Features, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie die Vertrautheit mit den JavaScript-Grundlagen, die in den vorhergehenden Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich jedes Mal Objekte verwendet haben, wenn Sie mit JavaScript gearbeitet haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden, Objekte und Arrays in Objekten schachteln.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objekt-Gültigkeitsbereich und <code>this</code>.</li>
          <li>Zugriff auf Eigenschaften und Methoden — Klammer- und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Objektgrundlagen

Ein Objekt ist eine Sammlung von zusammenhängenden Daten und/oder Funktionalitäten. Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie innerhalb von Objekten sind). Lassen Sie uns an einem Beispiel arbeiten, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}} Element, in das wir unseren Quellcode schreiben können. Wir verwenden dies als Grundlage, um die grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie die [JavaScript-Konsole Ihrer Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzutippen.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts oft damit, dass eine Variable definiert und initialisiert wird. Versuchen Sie, die folgende Zeile unterhalb des bereits in Ihrer Datei vorhandenen JavaScript-Codes einzugeben, und speichern und aktualisieren Sie dann:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Eingabetaste</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Gut gemacht! Aber dies ist ein leeres Objekt, also können wir damit nicht viel anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei wie folgt aktualisieren:

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

Nachdem Sie gespeichert und aktualisiert haben, versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Browser-Entwicklungstools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt einige Daten und Funktionalitäten in Ihrem Objekt und können auf sie mit einer schönen einfachen Syntax zugreifen!

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z. B. `name` und `age` oben) und einen Wert (z. B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall sind durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann fast alles sein — in unserem `person`-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

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

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben buchstäblich die Inhalte des Objekts geschrieben, als wir es erstellt haben. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert sind, auf die wir später noch eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, zusammenhängenden Datenelementen auf irgendeine Weise übertragen möchten, beispielsweise zum Senden einer Anfrage an den Server, um sie in eine Datenbank einzufügen. Das Senden eines einzelnen Objekts ist viel effizienter, als mehrere Elemente einzeln zu senden, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente nach Namen identifizieren möchten.

## Punkt-Syntax

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit der **Punkt-Syntax** zugegriffen. Der Objektname (`person`) fungiert als **Namespace** — er muss zuerst eingetragen werden, um auf alles innerhalb des Objekts zuzugreifen. Danach schreiben Sie einen Punkt und dann das Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer Methode des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Ändern Sie dazu beispielsweise das `name`-Mitglied von

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

Um auf diese Elemente zuzugreifen, müssen Sie nur den zusätzlichen Schritt mit einem weiteren Punkt an das Ende anhängen. Versuchen Sie dies in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methodencode durchsehen und alle Instanzen von

```js
name[0];
name[1];
```

in

```js
name.first;
name.last;
```

ändern.

Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammern-Notation

Die Klammern-Notation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Statt die [Punkt-Syntax](#punkt-syntax) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus, wie Sie auf die Elemente in einem Array zugreifen, und es ist im Grunde das Gleiche — anstelle einer Indexzahl verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist. Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Strings Werten zu, so wie Arrays Zahlen Werten zuordnen.

Die Punkt-Syntax wird im Allgemeinen gegenüber der Klammern-Notation bevorzugt, da sie prägnanter und leichter lesbar ist. Es gibt jedoch einige Fälle, in denen man eckige Klammern verwenden muss. Wenn zum Beispiel der Name einer Objekteigenschaft in einer Variablen gespeichert ist, können Sie die Punkt-Syntax nicht verwenden, um auf den Wert zuzugreifen, aber Sie können den Wert mit der Klammern-Notation abrufen.

Im folgenden Beispiel kann die `logProperty()` Funktion `person[propertyName]` verwenden, um den Wert der in `propertyName` benannten Eigenschaft abzurufen.

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

## Einstellen von Objektmitgliedern

Bisher haben wir uns nur damit beschäftigt, Objektmitglieder abzurufen (oder **zu holen**) — Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mithilfe von Punkt- oder Klammern-Notation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und rufen Sie dann die Mitglieder erneut ab, um zu sehen, wie sie sich geändert haben, so:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern beschränkt sich nicht nur auf die Aktualisierung der Werte vorhandener Eigenschaften und Methoden; Sie können auch komplett neue Mitglieder erstellen. Versuchen Sie dies in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Sie können Ihre neuen Mitglieder jetzt testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammern-Notation ist, dass sie nicht nur zum dynamischen Setzen von Mitgliederwerten verwendet werden kann, sondern auch von Mitgliedernamen. Angenommen, wir möchten den Benutzern ermöglichen, benutzerdefinierte Werttypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und den Wert in zwei Texteingabefelder eingeben. Wir könnten diese Werte folgendermaßen abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und den Wert dem `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code direkt unter der schließenden geschweiften Klammer des `person`-Objekts einzufügen:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie jetzt und geben Sie die folgenden Werte in Ihr Texteingabefeld ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punkt-Syntax nicht möglich, da sie nur ein wörtliches Mitgliedsnamen akzeptieren kann, nicht einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben in unseren Methoden vielleicht etwas leicht Seltsames bemerkt. Betrachten Sie zum Beispiel diese:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das Schlüsselwort `this` bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns verdeutlichen, was wir meinen, mit einem vereinfachten Paar von Personenobjekten:

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil `this` beim Aufruf der Methode auf das Objekt verweist, auf dem die Methode aufgerufen wurde, was es ermöglicht, dieselbe Methodendefinition für mehrere Objekte zu verwenden.

Dies ist nicht sehr nützlich, wenn Sie Objektschreibweisen von Hand erstellen, da die Verwendung des Objektnamens (`person1` und `person2`) zum gleichen Ergebnis führt, aber es wird entscheidend sein, wenn wir anfangen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdarstellung zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung von Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen den gleichen Code für jedes Objekt, das wir erstellen, wiederholt schreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - beispielsweise das Hinzufügen einer `height`-Eigenschaft - dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir würden gerne eine Möglichkeit haben, die "Form" eines Objekts zu definieren - die Menge der Methoden und Eigenschaften, die es haben kann - und dann so viele Objekte erstellen, wie wir möchten, nur mit aktualisierten Werten für die Eigenschaften, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` annimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle mit dieser Funktion erstellten Objekte derselben sein. Dies ist ein sehr häufiges Muster zur Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert gut, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Möglichkeit besteht darin, einen **Konstruktor** zu verwenden. Ein Konstruktor ist einfach eine Funktion, die mit dem Schlüsselwort {{jsxref("operators/new", "new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen konventionell mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Wir könnten unser Beispiel also so umschreiben:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

Um `Person()` als Konstruktor zu verwenden, verwenden wir `new`:

```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## Sie haben die ganze Zeit Objekte verwendet

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich bemerkt, dass die Punkt-Syntax, die Sie verwendet haben, sehr vertraut ist. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, weil solche Features mit genau den gleichen Arten von Objektstrukturen gebaut sind, die wir uns hier ansehen, wenn auch komplexer als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Also, wenn Sie Zeichenfolgenmethoden wie:

```js
myString.split(",");
```

verwendet haben, verwendeten Sie eine Methode, die für ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt verfügbar ist. Jedes Mal, wenn Sie eine Zeichenfolge in Ihrem Code erstellen, wird diese automatisch als Instanz von `String` erstellt und hat daher mehrere gebräuchliche Methoden und Eigenschaften, die darauf verfügbar sind.

Wenn Sie mit Zeilen wie dieser auf das Dokument-Objektmodell zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

verwendeten Sie Methoden, die für ein [`Document`](/de/docs/Web/API/Document) Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Funktionen wie die URL der Seite darstellt. Auch hier bedeutet dies, dass darauf mehrere gebräuchliche Methoden und Eigenschaften verfügbar sind.

Das Gleiche gilt für fast jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math), und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Beispielsweise erfordert die [Notifications-API](/de/docs/Web/API/Notifications_API) — die modernen Browsern ermöglicht, Systembenachrichtigungen auszugeben —, dass Sie für jede Benachrichtigung, die Sie ausgeben möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, folgende Zeilen in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch verstehen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen nachzuverfolgen, wäre es ineffizient und frustrierend, und wir würden Gefahr laufen, Konflikte mit anderen Variablen und Funktionen zu haben, die die gleichen Namen haben. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket zu speichern, fernab von Schaden.

Im nächsten Artikel stellen wir Ihnen einige Tests zur Verfügung, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
