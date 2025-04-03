---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben. Wir betonen dabei, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich jedes Mal, wenn Sie mit JavaScript gearbeitet haben, Objekte verwendet haben.</li>
          <li>Grundsyntax: Objektliterale, Eigenschaften und Methoden, Verschachteln von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren, um ein neues Objekt zu erstellen.</li>
          <li>Objektscope und <code>this</code>.</li>
          <li>Zugreifen auf Eigenschaften und Methoden — Klammer- und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Objektgrundlagen

Ein Objekt ist eine Sammlung von verwandten Daten und/oder Funktionalität.
Diese bestehen in der Regel aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie innerhalb von Objekten sind).
Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html)-Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben. Wir werden dies als Grundlage verwenden, um die grundlegende Objektsyntax zu erforschen. Während der Arbeit mit diesem Beispiel sollten Sie Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit haben, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts häufig mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unter dem bereits in Ihrer Datei vorhandenen JavaScript-Code einzugeben, und speichern und aktualisieren Sie dann:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console), geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein ähnliches Ergebnis wie eine der untenstehenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, sodass wir nicht wirklich viel damit anfangen können. Lassen Sie uns das JavaScript-Objekt in unserer Datei auf Folgendes aktualisieren:

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

Nachdem Sie gespeichert und aktualisiert haben, versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben nun einige Daten und Funktionalität in Ihrem Objekt und können jetzt mit einer schönen, einfachen Syntax darauf zugreifen!

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z. B. `name` und `age` oben) und einen Wert (z. B. `['Bob', 'Smith']` und `32`) hat. Jedes Namens-Wert-Paar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem Beispielobjekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt erlauben, etwas mit diesen Daten zu tun, und werden als **Methoden** des Objekts bezeichnet.

Wenn die Mitglieder des Objekts Funktionen sind, gibt es eine einfachere Syntax. Anstatt `bio: function ()` können wir `bio()` schreiben. So:

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

Ein solches Objekt wird als **Objektliterale** bezeichnet — wir haben buchstäblich den Objektinhalt aufgeschrieben, als wir es erstellt haben. Dies ist anders im Vergleich zu Objekten, die aus Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Datenelementen in irgendeiner Weise übertragen möchten, z. B. beim Senden einer Anfrage an den Server, um sie in eine Datenbank einzutragen. Das Senden eines einzigen Objekts ist viel effizienter als das Senden mehrerer Elemente einzeln, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente nach Namen identifizieren möchten.

## Punkt-Syntax

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit der **Punkt-Syntax** zugegriffen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf irgendetwas innerhalb des Objekts zuzugreifen. Dann schreiben Sie einen Punkt und danach das Element, auf das Sie zugreifen möchten — das kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

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

Um auf diese Elemente zuzugreifen, müssen Sie den zusätzlichen Schritt mit einem weiteren Punkt anhängen. Versuchen Sie diese in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methodencode durchgehen und jede Instanz von

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

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist. Kein Wunder, dass Objekte manchmal **assoziative Arrays** genannt werden — sie ordnen Zeichenfolgen Werten zu, wie Arrays Zahlen Werten zuordnen.

Die Punkt-Syntax wird im Allgemeinen der Klammer-Syntax vorgezogen, da sie kürzer und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gespeichert ist, können Sie mit der Punkt-Syntax nicht auf den Wert zugreifen, aber Sie können den Wert mit der Klammer-Syntax zugreifen.

Im folgenden Beispiel kann die `logProperty()`-Funktion `person[propertyName]` verwenden, um den Wert der Eigenschaft abzurufen, die in `propertyName` benannt ist.

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

Bisher haben wir nur das Abrufen (oder **Holen**) von Objektmitgliedern betrachtet — Sie können auch den Wert von Objektmitgliedern **festlegen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie festlegen möchten (mit Punkt- oder Klammer-Syntax), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und dann die Mitglieder erneut abzurufen, um zu sehen, wie sie sich verändert haben, wie folgt:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Mitgliedern beschränkt sich nicht nur auf das Aktualisieren der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

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

Ein nützlicher Aspekt der Klammer-Syntax ist, dass sie nicht nur dynamische Mitgliedswerte, sondern auch Mitgliedsnamen festlegen kann. Angenommen, wir wollten, dass Benutzer benutzerdefinierte Werttypen in ihren Personendaten speichern, indem sie den Mitgliedsnamen und den Wert in zwei Textfelder eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert dem `person`-Objekt hinzufügen, so:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unter der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Versuchen Sie nun zu speichern und zu aktualisieren und geben Sie Folgendes in Ihr Textfeld ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punkt-Syntax nicht möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, nicht einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben möglicherweise etwas leicht Seltsames in unseren Methoden bemerkt. Betrachten Sie zum Beispiel diese:

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil sich beim Aufrufen der Methode `this` auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es ermöglicht, dass dieselbe Methodendefinition für mehrere Objekte funktioniert.

Dies ist nicht sehr nützlich, wenn Sie Objektliterale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum genau gleichen Ergebnis führt, aber es wird wesentlich, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, erneut ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - beispielsweise eine `height`-Eigenschaft hinzufügen - dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit, die "Form" eines Objekts zu definieren — die Menge an Methoden und die Eigenschaften, die es haben kann — und dann so viele Objekte zu erstellen, wie wir möchten, nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

Die erste Version davon ist nur eine Funktion:

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

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode für alle mit dieser Funktion erstellten Objekte derselbe sein wird. Dies ist ein sehr häufiger Muster beim Erstellen von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, und dabei die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Dies funktioniert gut, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, initialisieren und zurückgeben. Eine bessere Möglichkeit ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}}-Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, damit Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen in der Regel mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. Also könnten wir unser Beispiel so umschreiben:

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

Während Sie diese Beispiele durchgearbeitet haben, haben Sie wahrscheinlich gedacht, dass Ihnen die Punkt-Syntax, die Sie verwendet haben, sehr vertraut vorkommt. Das liegt daran, dass Sie sie im gesamten Kurs verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen genau mit den gleichen Arten von Objektstrukturen erstellt werden, die wir hier betrachtet haben, obwohl sie komplexere sind als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Als Sie beispielsweise Zeichenfolgenmethoden wie:

```js
myString.split(",");
```

verwendet haben, verwendeten Sie eine Methode, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenfolge erstellen, wird diese Zeichenfolge automatisch als Instanz von `String` erstellt und hat daher mehrere gängige Methoden und Eigenschaften, die darauf verfügbar sind.

Als Sie das Document Object Model mit Zeilen wie dieser:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

zugänglich gemacht haben, verwendeten Sie Methoden, die auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Seitenstruktur, den Inhalt und andere Funktionen wie die URL repräsentiert. Auch hier bedeutet dies, dass es mehrere gängige Methoden und Eigenschaften darauf verfügbar hat.

Dasselbe gilt für so ziemlich jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) usw.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — die Sie zwingt, eine neue Objektinstanz mit dem Konstruktor für jede Benachrichtigung, die Sie auslösen möchten, zu instanziieren. Versuchen Sie, das Folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics).

## Zusammenfassung

Sie sollten jetzt eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verwalten, wäre es ineffizient und frustrierend und es bestünde die Gefahr, dass sie mit anderen Variablen und Funktionen kollidieren, die denselben Namen haben. Objekte lassen uns die Informationen sicher in ihrem eigenen Paket aufbewahren, außer Gefahr.

Im nächsten Artikel schauen wir uns **DOM-Scripting** an, das eine große Menge an grundlegendem Browser-API-Funktionalität freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
