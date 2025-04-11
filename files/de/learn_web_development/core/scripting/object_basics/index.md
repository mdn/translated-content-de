---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir grundlegende JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, um zu verdeutlichen, dass viele der Funktionen, mit denen Sie bereits umgegangen sind, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und dass Sie wahrscheinlich jedes Mal, wenn Sie JavaScript verwenden, mit Objekten gearbeitet haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden, Verschachteln von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objektscope und <code>this</code>.</li>
          <li>Zugang zu Eigenschaften und Methoden — Klammer- und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung von verwandten Daten und/oder Funktionalität.
Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie sich innerhalb von Objekten befinden).
Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}} Element, in das wir unseren Quellcode schreiben können. Wir werden dies als Basis verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihr [JavaScript-Konsolenfenster der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit haben, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unter dem JavaScript-Code, der bereits in Ihrer Datei vorhanden ist, einzugeben, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Job erledigt! Aber dies ist ein leeres Objekt, daher können wir nicht wirklich viel damit anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei folgendermaßen aktualisieren:

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

Nach dem Speichern und Aktualisieren, versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt einige Daten und Funktionalität in Ihrem Objekt und können diese mit einer schönen, einfachen Syntax aufrufen!

Also, was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem Objekt `person` haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

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

Von nun an werden wir diese kürzere Syntax verwenden.

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben den Objektinhalt wortwörtlich so geschrieben, wie wir ihn erstellen. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert wurden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mithilfe eines Objektliterales zu erstellen, wenn Sie eine Reihe strukturierter, verwandter Daten auf irgendeine Weise übertragen möchten, zum Beispiel beim Senden einer Anfrage an den Server, um diese in eine Datenbank einzufügen. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer einzelner Elemente, und es ist einfacher zu handhaben als ein Array, wenn Sie Elemente anhand ihres Namens identifizieren möchten.

## Punktsyntax

Oben haben Sie die Eigenschaften und Methoden des Objekts mit der **Punktsyntax** aufgerufen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um etwas innerhalb des Objekts aufzurufen. Als nächstes schreiben Sie einen Punkt und dann das Element, das Sie aufrufen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Ändern Sie zum Beispiel das `name`-Mitglied von

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

Um auf diese Elemente zuzugreifen, müssen Sie nur den zusätzlichen Schritt mit einem weiteren Punkt anhängen. Versuchen Sie diese in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methoden-Code durchgehen und alle Instanzen von

```js
name[0];
name[1];
```

zu

```js
name.first;
name.last;
```

ändern. Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammernsyntax

Die Klammernsyntax bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen.
Anstatt die [Punktsyntax](#punktsyntax) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

Sie können stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht der Art und Weise, wie Sie auf die Elemente eines Arrays zugreifen, sehr ähnlich und ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der dem Wert jedes Mitglieds zugeordnet ist.
Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten auf die gleiche Weise zu, wie Arrays Zahlen Werten zuordnen.

Punktsyntax wird allgemein der Klammernsyntax vorgezogen, weil sie prägnanter und leichter zu lesen ist.
Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen.
Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gespeichert ist, können Sie nicht die Punktsyntax verwenden, um den Wert abzurufen, aber Sie können den Wert mithilfe der Klammernsyntax abrufen.

Im folgenden Beispiel kann die `logProperty()`-Funktion `person[propertyName]` verwenden, um den Wert der Eigenschaft abzurufen, die in `propertyName` genannt wird.

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

Bisher haben wir uns nur angeschaut, wie man Objektmitglieder abruft (oder **holt**) — Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mithilfe der Punkt- oder der Klammernsyntax), etwa so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und dann die Mitglieder erneut abzurufen, um zu sehen, wie sie sich verändert haben, etwa so:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern beschränkt sich nicht nur auf das Aktualisieren der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

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

Ein nützlicher Aspekt der Klammernsyntax ist, dass sie nicht nur verwendet werden kann, um Mitgliedswerte dynamisch zu setzen, sondern auch Mitgliedsnamen. Angenommen, wir wollten Benutzern ermöglichen, benutzerdefinierte Wertetypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert zum `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unter der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Versuchen Sie nun zu speichern und zu aktualisieren und das Folgende in Ihre Texteingabe einzugeben:

```js
person.height;
```

Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punktsyntax nicht möglich, die nur einen literalen Mitgliedsnamen akzeptiert, nicht einen Variablenwert, der auf einen Namen verweist.

## Was ist "this"?

Sie haben vielleicht etwas leicht Merkwürdiges in unseren Methoden bemerkt. Sehen Sie sich zum Beispiel diese an:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this`-Schlüsselwort bezieht sich normalerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies passiert, weil, wenn die Methode aufgerufen wird, `this` sich auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es ermöglicht, dass dieselbe Methodendefinition für mehrere Objekte funktioniert.

Das ist nicht sehr nützlich, wenn Sie Objektliterale von Hand schreiben, da das Verwenden des Objektnamens (`person1` und `person2`) zu genau demselben Ergebnis führt, aber es wird essentiell sein, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern wollen - wie das Hinzufügen einer `height`-Eigenschaft - müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit haben, die "Struktur" eines Objekts zu definieren — die Menge der Methoden und der Eigenschaften, die es haben kann — und dann so viele Objekte wie wir möchten erstellen, wobei wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` übernimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle Objekte gleich sein, die mit dieser Funktion erstellt werden. Dies ist ein sehr häufiges Muster für die Erstellung von Objekten.

Nun können wir so viele Objekte erstellen, wie wir wollen, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert einwandfrei, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Methode ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem Schlüsselwort {{jsxref("operators/new", "new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie sich in Ihrem Konstruktionscode auf `this` beziehen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen üblicherweise mit einem Großbuchstaben und werden nach dem Typ des Objekts benannt, das sie erstellen. So könnten wir unser Beispiel wie folgt umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass Ihnen die Punktsyntax sehr vertraut vorkommt. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel mit einem eingebauten Browser-API oder JavaScript-Objekt bearbeitet haben, haben wir Objekte verwendet, da solche Funktionen mit genau derselben Art von Objektstrukturen aufgebaut sind, die wir hier betrachten, wenngleich komplexer als in unseren eigenen einfachen benutzerdefinierten Beispielen.

Also, wenn Sie Zeichenfolgenmethoden wie:

```js
myString.split(",");
```

verwendet haben, verwendeten Sie eine Methode, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt verfügbar ist. Jedes Mal, wenn Sie eine Zeichenfolge in Ihrem Code erstellen, wird diese Zeichenfolge automatisch als eine Instanz von `String` erstellt und hat daher mehrere gängige Methoden und Eigenschaften verfügbar.

Wenn Sie auf das Document Object Model mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

verwendeten Sie Methoden, die auf einem [`Document`](/de/docs/Web/API/Document) Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Merkmale der Seite wie ihre URL repräsentiert. Auch hier bedeutet das, dass es mehrere gängige Methoden und Eigenschaften zur Verfügung hat.

Das gleiche gilt für fast jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel dafür ist die [Notifications API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — Sie müssen eine neue Objektinstanz mit dem Konstruktor für jede Benachrichtigung, die Sie auslösen möchten, instanziieren. Versuchen Sie, das folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen von Objekten](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Object_basics).

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich sind als Strukturen zur Speicherung verwandter Daten und Funktionalitäten — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verwalten, wäre das ineffizient und frustrierend, und wir liefen Gefahr, mit anderen Variablen und Funktionen in Konflikt zu geraten, die denselben Namen haben. Objekte lassen uns die Informationen sicher in ihren eigenen Paketen aufbewahren, aus dem Weg potenzieller Probleme.

Im nächsten Artikel werden wir uns mit **DOM-Scripting** befassen, das eine Vielzahl grundlegender Browser-API-Funktionalitäten freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
