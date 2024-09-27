---
title: JavaScript-Objekt-Grundlagen
slug: Learn/JavaScript/Objects/Basics
l10n:
  sourceCommit: 50148158dd72162889c2f42d965bf4638cb57606
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

In diesem Artikel schauen wir uns die grundlegende JavaScript-Objektsyntax an und wiederholen einige JavaScript-Funktionen, die wir bereits zu Beginn des Kurses gesehen haben, um zu betonen, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit den JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der Grundlagen der Arbeit mit Objekten in JavaScript: Erstellen von Objekten, Zugreifen auf und Ändern von Objekteigenschaften und Verwendung von Konstruktoren.
      </td>
    </tr>
  </tbody>
</table>

## Objekt-Grundlagen

Ein Objekt ist eine Sammlung von verwandten Daten und/oder Funktionen.
Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die man Eigenschaften und Methoden nennt, wenn sie innerhalb von Objekten sind).
Gehen wir ein Beispiel durch, um zu verstehen, wie sie aussehen.

Beginnen Sie, indem Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei erstellen. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir werden dies als Basis verwenden, um die grundlegende Objektsyntax zu erforschen. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit haben, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit der Definition und Initialisierung einer Variablen. Probieren Sie, die folgende Zeile unter dem bereits in Ihrer Datei vorhandenen JavaScript-Code einzugeben, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein ähnliches Ergebnis wie in den folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, also können wir nicht viel damit anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, sodass es so aussieht:

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

Nach dem Speichern und Aktualisieren versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben nun einige Daten und Funktionen in Ihrem Objekt und können mit einer schönen, einfachen Syntax darauf zugreifen!

Also, was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert hat (z.B. `['Bob', 'Smith']` und `32`). Jedes Namen/Wert-Paar muss durch ein Komma getrennt werden, und der Name und der Wert in jedem Fall sind durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann fast alles sein — in unserem `person` Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt erlauben, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

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

Von jetzt an werden wir diese kürzere Syntax verwenden.

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben den Inhalt des Objekts buchstäblich geschrieben, während wir es kreieren. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert werden, die wir später betrachten werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe strukturierter, verwandter Datenelemente in irgendeiner Weise übertragen möchten, zum Beispiel eine Anfrage an den Server zu senden, um sie in eine Datenbank aufzunehmen. Es ist viel effizienter, ein einzelnes Objekt zu senden, als mehrere Elemente einzeln zu senden, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente nach Namen identifizieren möchten.

## Punkt-Notation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts unter Verwendung der **Punkt-Notation** zugegriffen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf irgendetwas innerhalb des Objekts zuzugreifen. Als nächstes schreiben Sie einen Punkt, gefolgt von dem Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

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

Um auf diese Elemente zuzugreifen, müssen Sie einfach den zusätzlichen Schritt mit einem weiteren Punkt an das Ende anhängen. Probieren Sie diese in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch den Code Ihrer Methoden durchgehen und jede Instanz von

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

## Klammer-Notation

Die Klammer-Notation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen.
Anstelle der Verwendung von [Punkt-Notation](#punkt-notation) wie diese:

```js
person.age;
person.name.first;
```

Können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — anstelle einer Indexnummer zur Auswahl eines Elements verwenden Sie den Namen, der mit dem Wert jedes Mitglieds assoziiert ist.
Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Strings Werten zu, genauso wie Arrays Zahlen Werten zuordnen.

Die Punkt-Notation wird allgemein der Klammer-Notation vorgezogen, da sie prägnanter und leichter zu lesen ist.
Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen.
Wenn zum Beispiel der Name einer Objekteigenschaft in einer Variablen gehalten wird, können Sie die Punkt-Notation nicht verwenden, um den Wert zuzugreifen, aber Sie können den Wert mit der Klammer-Notation zugreifen.

Im folgenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der im `propertyName` benannten Eigenschaft abzurufen.

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

Bisher haben wir uns nur das Abrufen (oder **Erhalten**) von Objektmitgliedern angesehen — Sie können den Wert von Objektmitgliedern auch **festlegen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie festlegen möchten (mit Punkt- oder Klammer-Notation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Probieren Sie, die obigen Zeilen einzugeben, und rufen Sie dann die Mitglieder erneut ab, um zu sehen, wie sich diese geändert haben, auf diese Weise:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Mitgliedern endet nicht nur bei der Aktualisierung der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Probieren Sie diese in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Sie können nun Ihre neuen Mitglieder ausprobieren:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammer-Notation ist, dass sie nicht nur verwendet werden kann, um Mitgliederwerte dynamisch festzulegen, sondern auch Mitgliedsnamen. Angenommen, wir möchten, dass Benutzer benutzerdefinierte Werttypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingabefelder eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert dem `person` Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, fügen Sie die folgenden Zeilen in Ihren Code ein, direkt unterhalb der schließenden geschweiften Klammer des `person` Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie nun und geben Sie Folgendes in Ihr Texteingabefeld ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punkt-Notation nicht möglich, die nur einen wörtlichen Mitgliedsnamen akzeptieren kann, nicht aber einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben möglicherweise etwas leicht Merkwürdiges in unseren Methoden bemerkt. Schauen Sie sich zum Beispiel diese an:

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this`-Schlüsselwort bezieht sich in der Regel auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns verdeutlichen, was wir mit einem vereinfachten Paar von Personenobjekten meinen:

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! Ich bin Chris."; `person2.introduceSelf()` gibt "Hi! Ich bin Deepti." aus. Dies passiert, weil sich beim Aufruf der Methode `this` auf das Objekt bezieht, auf dem die Methode aufgerufen wird, was es ermöglicht, dass dieselbe Methodendefinition für mehrere Objekte funktioniert.

Dies ist nicht besonders nützlich, wenn Sie Objektliterale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum genau gleichen Ergebnis führt, aber es wird essenziell, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, ausschreiben und wenn wir einige Eigenschaften des Objekts ändern wollen - wie das Hinzufügen einer `height`-Eigenschaft - müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit, die "Form" eines Objekts zu definieren — die Menge der Methoden und die Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, während wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` nimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle mit dieser Funktion erstellten Objekte gleich sein. Dies ist ein sehr gängiges Muster zur Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert gut, ist aber etwas umständlich: wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Ein besserer Weg besteht darin, einen **Konstruktor** zu verwenden. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}}-Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird:

- ein neues Objekt erstellt
- `this` an das neue Objekt gebunden, sodass Sie `this` in Ihrem Konstruktorcode referenzieren können
- der Code im Konstruktor ausgeführt
- das neue Objekt zurückgegeben.

Konstruktoren beginnen aus Konvention mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Daher könnten wir unser Beispiel so umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass die Punkt-Notation, die Sie verwendet haben, sehr vertraut ist. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen mit genau derselben Art von Objektstrukturen aufgebaut sind, die wir hier betrachtet haben, wenn auch komplexere als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Also, als Sie String-Methoden wie:

```js
myString.split(",");
```

verwendet haben, haben Sie eine Methode verwendet, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code einen String erstellen, wird dieser String automatisch als Instanz von `String` erstellt und hat daher mehrere gängige Methoden und Eigenschaften verfügbar.

Wenn Sie auf das Document Object Model mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Funktionen der Seite wie ihre URL repräsentiert. Auch hier bedeutet das, dass sie mehrere gängige Methoden und Eigenschaften verfügbar hat.

Das Gleiche gilt für so ziemlich jedes andere eingebaute Objekt oder jede andere API, die Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel dafür ist die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — sie erfordert, dass Sie für jede Benachrichtigung, die Sie auslösen möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, Folgendes in Ihrer JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich an die wichtigsten Informationen? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics).

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende unseres ersten Artikels zu JS-Objekten erreicht — Sie sollten nun eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch schätzen, dass Objekte sehr nützlich als Strukturen zur Speicherung verwandter Daten und Funktionen sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden unseres `person`-Objekts als separate Variablen und Funktionen im Auge zu behalten, wäre es ineffizient und frustrierend, und wir würden das Risiko eingehen, mit anderen Variablen und Funktionen mit denselben Namen in Konflikt zu geraten. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket aufzubewahren, weit weg von Schaden.

Im nächsten Artikel werden wir uns mit **Prototypen** befassen, der grundlegenden Methode, mit der JavaScript es einem Objekt ermöglicht, Eigenschaften von anderen Objekten zu erben.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
