---
title: JavaScript Objekt Grundlagen
slug: Learn/JavaScript/Objects/Basics
l10n:
  sourceCommit: 50148158dd72162889c2f42d965bf4638cb57606
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

In diesem Artikel werfen wir einen Blick auf die grundlegende Syntax von JavaScript-Objekten und wiederholen einige JavaScript-Features, die wir bereits früher im Kurs gesehen haben, um zu verdeutlichen, dass viele der Ihnen bereits bekannten Funktionen Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit den JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen der Arbeit mit Objekten in JavaScript verstehen: Erstellen von Objekten, Zugreifen auf und Ändern von Objekteigenschaften und Verwenden von Konstruktoren.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung verwandter Daten und/oder Funktionen. Diese bestehen in der Regel aus mehreren Variablen und Funktionen (die innerhalb von Objekten als Eigenschaften und Methoden bezeichnet werden). Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Zu Beginn sollten Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei erstellen. Diese enthält sehr wenig — ein {{HTMLElement("script")}} Element, in das wir unseren Quellcode schreiben werden. Wir werden dies als Grundlage verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie an diesem Beispiel arbeiten, sollten Sie Ihre [Entwicklertools JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unterhalb des JavaScript-Codes, der sich bereits in Ihrer Datei befindet, einzugeben, dann speichern und aktualisieren:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein ähnliches Ergebnis wie eine der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, also können wir nicht viel damit anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, sodass es folgendermaßen aussieht:

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

Nach dem Speichern und Aktualisieren versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Browser-Entwicklungstools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt einige Daten und Funktionen in Ihr Objekt eingebunden und können jetzt mit einer schönen einfachen Syntax auf sie zugreifen!

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z. B. `name` und `age` oben) und einen Wert (z. B. `['Bob', 'Smith']` und `32`) hat. Jedes Namens-/Wertepaar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem `person`-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

Wenn die Mitglieder des Objekts Funktionen sind, gibt es eine einfachere Syntax. Anstelle von `bio: function ()` können wir `bio()` schreiben. Wie dies:

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

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben den Objektinhalt wörtlich geschrieben, als wir es erstellt haben. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe strukturierter, verwandter Datenelemente auf irgendeine Weise übertragen möchten, beispielsweise beim Senden einer Anfrage an den Server, um sie in eine Datenbank zu speichern. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer einzelner Elemente, und es ist einfacher als ein Array zu handhaben, wenn Sie einzelne Elemente mit Namen identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mithilfe der **Punktnotation** zugegriffen. Der Objektname (`person`) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf irgendetwas innerhalb des Objekts zugreifen zu können. Danach schreiben Sie einen Punkt, gefolgt von dem Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft sein, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts, zum Beispiel:

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

Um auf diese Elemente zuzugreifen, fügen Sie einfach einen weiteren Punkt an das Ende an. Versuchen Sie diese in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch durch Ihren Methoden-Code gehen und Instanzen von

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

## Klammernotation

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Anstatt die [Punktnotation](#punktnotation) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist.
Kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Strings Werten zu, genauso wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird allgemein gegenüber der Klammernotation bevorzugt, da sie prägnanter und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Wenn beispielsweise der Name einer Objekteigenschaft in einer Variablen gespeichert ist, können Sie die Punktnotation nicht verwenden, um auf den Wert zuzugreifen, aber Sie können auf den Wert mit der Klammernotation zugreifen.

Im folgenden Beispiel kann die `logProperty()`-Funktion `person[propertyName]` verwenden, um den Wert der im `propertyName` benannten Eigenschaft abzurufen.

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

## Festlegen von Objektmitgliedern

Bis jetzt haben wir nur das Abrufen (oder **Lesen**) von Objektmitgliedern angesehen — Sie können auch den Wert von Objektmitgliedern **festlegen** (aktualisieren), indem Sie das Mitglied, das Sie festlegen möchten, deklarieren (mit Punkt- oder Klammernotation), wie folgt:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und dann die Mitglieder erneut abzurufen, um zu sehen, wie sie sich geändert haben, zum Beispiel so:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Mitgliedern hört nicht nur bei der Aktualisierung der Werte bestehender Eigenschaften und Methoden auf; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

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

Ein nützlicher Aspekt der Klammernotation ist, dass Sie damit nicht nur Mitgliedswerte dynamisch festlegen, sondern auch Mitgliedsnamen festlegen können. Angenommen, wir möchten, dass Benutzer benutzerdefinierte Wertetypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte folgendermaßen abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und Wert dem `person`-Objekt folgendermaßen hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen direkt unter der schließenden geschweiften Klammer des `person`-Objekts in Ihren Code einzufügen:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Versuchen Sie nun zu speichern und zu aktualisieren und die folgenden Werte in Ihre Texteingabe einzugeben:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt auf die oben beschriebene Weise ist mit der Punktnotation nicht möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, nicht jedoch einen Variablenwert, der auf einen Namen zeigt.

## Was bedeutet "this"?

Sie haben in unseren Methoden vielleicht etwas Merkwürdiges bemerkt. Sehen Sie sich zum Beispiel diese Methode an:

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

Sie fragen sich wahrscheinlich, was "this" bedeutet. Das `this`-Schlüsselwort bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil, wenn die Methode aufgerufen wird, `this` sich auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es derselben Methodendefinition ermöglicht, für mehrere Objekte zu funktionieren.

Dies ist nicht besonders nützlich, wenn Sie Objektliterale von Hand schreiben, da die Verwendung des Objekt-Namens (`person1` und `person2`) das genau gleiche Ergebnis liefert, aber es wird essentiell sein, wenn wir anfangen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eins erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen den gleichen Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - wie das Hinzufügen einer `height`-Eigenschaft - dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit haben, die "Form" eines Objekts zu definieren — die Menge der Methoden und Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, wobei wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle Objekte, die mit dieser Funktion erstellt werden, derselbe sein. Dies ist ein sehr gebräuchliches Muster zur Erstellung von Objekten.

Nun können wir so viele Objekte erstellen, wie wir möchten, wobei wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Dies funktioniert einwandfrei, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Methode besteht darin, einen **Konstruktor** zu verwenden. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}}-Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Nach Konvention beginnt ein Konstruktor mit einem Großbuchstaben und wird nach der Art des Objekts benannt, das er erstellt. Daher könnten wir unser Beispiel folgendermaßen umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich festgestellt, dass Ihnen die verwendete Punktnotation sehr vertraut war. Das liegt daran, dass Sie sie im gesamten Kurs verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das ein integriertes Browser-API oder JavaScript-Objekt verwendet, haben wir Objekte verwendet, weil solche Funktionen genau mit den gleichen Arten von Objektstrukturen aufgebaut sind, die wir hier betrachtet haben, wenn auch komplexere als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Also, wenn Sie String-Methoden wie:

```js
myString.split(",");
```

verwendet haben, haben Sie eine Methode verwendet, die für ein [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code einen String erstellen, wird dieser automatisch als Instanz von `String` erstellt und hat dadurch mehrere gemeinsame Methoden und Eigenschaften zur Verfügung.

Als Sie auf das Document Object Model zugegriffen haben, indem Sie Zeilen wie diese geschrieben haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die für ein [`Document`](/de/docs/Web/API/Document) Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Merkmale der Seite wie ihre URL repräsentiert. Auch hier bedeutet dies, dass es mehrere gemeinsame Methoden und Eigenschaften gibt, die darauf verfügbar sind.

Dasselbe gilt für praktisch jedes andere integrierte Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass integrierte Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel dafür ist die [Notifications API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — die erfordert, dass Sie eine neue Objektinstanz mit dem Konstruktor für jede Benachrichtigung instanziieren, die Sie auslösen möchten. Versuchen Sie, die folgenden Zeilen in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen von Objekten](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics).

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende unseres ersten Artikels über JS-Objekte erreicht — Sie sollten jetzt eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung eigener einfacher Objekte. Sie sollten auch schätzen, dass Objekte sehr nützlich als Strukturen zur Speicherung verwandter Daten und Funktionen sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verfolgen, wäre dies ineffizient und frustrierend und wir würden das Risiko eingehen, in Konflikt mit anderen Variablen und Funktionen zu geraten, die denselben Namen haben. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket aufzubewahren, außerhalb der Gefahrenzone.

Im nächsten Artikel werden wir uns mit **Prototypen** beschäftigen, die die fundamentale Methode sind, mit der JavaScript es einem Objekt ermöglicht, Eigenschaften von anderen Objekten zu erben.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
