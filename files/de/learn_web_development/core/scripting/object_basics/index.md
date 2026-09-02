---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel werfen wir einen Blick auf die grundlegende JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir im Laufe des Kurses bereits gesehen haben. Dies betont, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

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
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich bereits jedes Mal Objekte verwendet haben, wenn Sie mit JavaScript gearbeitet haben.</li>
          <li>Grundsyntax: Objektliterale, Eigenschaften und Methoden, verschachtelte Objekte und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objektscope und <code>this</code>.</li>
          <li>Zugriff auf Eigenschaften und Methoden – Klammer- und Punktnotation.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung von zusammengehörigen Daten und/oder Funktionalitäten.
Diese bestehen üblicherweise aus mehreren Variablen und Funktionen (die innerhalb von Objekten als Eigenschaften und Methoden bezeichnet werden).
Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir werden dies als Grundlage verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie an diesem Beispiel arbeiten, sollten Sie Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit haben, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unterhalb des bereits in Ihrer Datei vorhandenen JavaScript-Codes einzugeben, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Job erledigt! Doch dies ist ein leeres Objekt, also können wir nicht wirklich viel damit machen. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, damit es folgendermaßen aussieht:

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

Nachdem Sie dies gespeichert und aktualisiert haben, versuchen Sie, einige der folgenden Dinge in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben nun Daten und Funktionalität in Ihrem Objekt und können jetzt auf diese mit einer schönen, einfachen Syntax zugreifen!

Was geschieht hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, die jeweils einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) haben. Jedes Name/Wert-Paar muss durch ein Komma getrennt werden, und der Name und der Wert werden jeweils durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem `person`-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten zwei Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten zwei Elemente sind Funktionen, die es dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

Wenn die Mitglieder eines Objekts Funktionen sind, gibt es eine einfachere Syntax. Anstatt `bio: function ()` können wir `bio()` schreiben. So zum Beispiel:

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

Von nun an werden wir diese kürzere Syntax verwenden.

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben die Inhalte des Objekts buchstäblich so ausgeschrieben, wie wir sie erstellt haben. Dies unterscheidet sich von Objekten, die von Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, zusammenhängenden Datenelementen in irgendeiner Weise übertragen möchten, zum Beispiel beim Senden einer Anfrage an den Server, um sie in eine Datenbank zu speichern. Das Senden eines einzelnen Objekts ist viel effizienter, als mehrere Elemente einzeln zu senden, und es ist einfacher zu handhaben als ein Array, wenn Sie individuelle Elemente anhand von Namen identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mittels **Punktnotation** zugegriffen. Der Objektname (`person`) dient als **Namespace** — er muss zuerst eingegeben werden, um auf alles innerhalb des Objekts zuzugreifen. Danach schreiben Sie einen Punkt und dann das Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Arrays-Eigenschaft oder ein Aufruf zu einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie zum Beispiel, das `name`-Mitglied von

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

Um auf diese Elemente zuzugreifen, müssen Sie einfach den zusätzlichen Schritt mit einem weiteren Punkt anfügen. Versuchen Sie dies in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methodencode durchgehen und alle Instanzen von

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

## Klammernotation

Die Klammernotation bietet eine alternative Methode, um auf Objekteigenschaften zuzugreifen.
Anstatt die [Punktnotation](#punktnotation) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

Können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht der Art und Weise, wie Sie auf die Elemente in einem Array zugreifen, sehr ähnlich, und es ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist.
Kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten auf dieselbe Weise zu, wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie knapper und einfacher zu lesen ist.
Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen.
Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gehalten wird, dann können Sie die Punktnotation nicht verwenden, um auf den Wert zuzugreifen, aber Sie können auf den Wert mit der Klammernotation zugreifen.

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

## Objektsmitglieder setzen

Bisher haben wir nur das Abrufen (oder **Abfragen**) von Objektsmitgliedern betrachtet — Sie können auch den Wert von Objektsmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mithilfe der Punkt- oder Klammernotation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und rufen Sie dann die Mitglieder erneut ab, um zu sehen, wie sie sich geändert haben:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern hört nicht bei der Aktualisierung der Werte bestehender Eigenschaften und Methoden auf; Sie können auch völlig neue Mitglieder erstellen. Probieren Sie dies in der JS-Konsole aus:

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

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur zum dynamischen Setzen von Mitgliedswerten, sondern auch für die Mitgliedsnamen verwendet werden kann. Angenommen, wir möchten den Benutzern ermöglichen, benutzerdefinierte Wertetypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte wie folgt abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert wie folgt zum `person`-Objekt hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unter der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie, und geben Sie die folgenden Werte in Ihre Texteingabe ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mithilfe der obigen Methode ist mit der Punktnotation nicht möglich, da diese nur einen literalen Mitgliedsnamen akzeptieren kann, nicht jedoch einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben vielleicht etwas Seltsames in unseren Methoden bemerkt. Schauen Sie sich zum Beispiel diese an:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das Schlüsselwort `this` bezieht sich normalerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns veranschaulichen, was wir meinen, mit einem vereinfachten Paar von Person-Objekten:

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

In diesem Fall gibt `person1.introduceSelf()` aus "Hi! I'm Chris."; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies passiert, weil `this` sich beim Aufruf der Methode auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es derselben Methodendefinition ermöglicht, für mehrere Objekte zu funktionieren.

Dies ist nicht besonders nützlich, wenn Sie Objektsliterale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum gleichen Ergebnis führt, aber es wird wesentlich, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektsdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt schreiben, das wir erstellen, und wenn wir einige Eigenschaften des Objekts ändern möchten — wie das Hinzufügen einer `height`-Eigenschaft — dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit haben, die "Form" eines Objekts zu definieren — die Menge der Methoden und der Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, nur indem wir die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der Eigenschaft `name` festzulegen, aber der Wert der Methode `introduceSelf()` wird für alle Objekte gleich sein, die mit dieser Funktion erstellt wurden. Dies ist ein sehr häufiges Muster zur Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert gut soweit, ist jedoch etwas umständlich: wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Möglichkeit ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem Schlüsselwort {{jsxref("new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen aus Konvention mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Wir könnten unser Beispiel also wie folgt umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass Ihnen die Punktnotation, die Sie verwendet haben, sehr vertraut vorkommt. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen genau mit der Art von Objektstrukturen aufgebaut sind, die wir hier gesehen haben, wenngleich komplexere als in unseren eigenen einfachen benutzerdefinierten Beispielen.

Wenn Sie also Zeichenkettenmethoden verwendet haben wie:

```js
myString.split(",");
```

haben Sie eine Methode verwendet, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenkette erstellen, wird diese Zeichenkette automatisch als Instanz von `String` erstellt und hat daher mehrere allgemeine Methoden und Eigenschaften, die darauf verfügbar sind.

Als Sie das Document Object Model mit Zeilen wie dieser aufgerufen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die vollständige Struktur der Seite, deren Inhalt sowie andere Funktionen wie die URL repräsentiert. Dies bedeutet wiederum, dass es mehrere allgemeine Methoden und Eigenschaften hat, die darauf verfügbar sind.

Das Gleiche gilt für nahezu jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Zum Beispiel erfordert die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) — die modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen —, dass Sie für jede Benachrichtigung, die Sie auslösen möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, die folgende Zeile in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten jetzt eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung eigener einfacher Objekte. Sie sollten auch den Nutzen von Objekten als Strukturen zum Speichern zusammengehöriger Daten und Funktionalitäten schätzen — wenn Sie versuchen würden, alle Eigenschaften und Methoden unseres `person`-Objekts als separate Variablen und Funktionen zu verwalten, wäre es ineffizient und frustrierend, und wir würden das Risiko eingehen, mit anderen Variablen und Funktionen mit denselben Namen in Konflikt zu geraten. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket, außerhalb des Gefahrenbereichs, zu bewahren.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Events","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
