---
title: JavaScript-Objektgrundlagen
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel betrachten wir die grundlegende JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben. Dadurch wird verdeutlicht, dass viele der Funktionen, mit denen Sie bereits umgegangen sind, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und Sie wahrscheinlich Objekte verwendet haben, jedes Mal, wenn Sie JavaScript berührt haben.</li>
          <li>Grundsyntax: Objektliterale, Eigenschaften und Methoden, Verschachteln von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objektscope und <code>this</code>.</li>
          <li>Zugreifen auf Eigenschaften und Methoden — Klammer- und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Objektgrundlagen

Ein Objekt ist eine Sammlung von verwandten Daten und/oder Funktionalitäten.
Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie innerhalb von Objekten sind).
Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Zunächst erstellen Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir verwenden dies als Grundlage, um grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet und bereit zum Eingeben einiger Befehle haben.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie die folgende Zeile unterhalb des bereits in Ihrer Datei vorhandenen JavaScript-Codes einzugeben, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der untenstehenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Arbeit erledigt! Aber dies ist ein leeres Objekt, also können wir damit nicht wirklich etwas anfangen. Aktualisieren wir das JavaScript-Objekt in unserer Datei, um folgendermaßen auszusehen:

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

Nach dem Speichern und Aktualisieren versuchen Sie, einige der folgenden Befehle in die JavaScript-Konsole Ihrer Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben nun einige Daten und Funktionalitäten in Ihrem Objekt und können jetzt mit einer schönen einfachen Syntax darauf zugreifen!

Also, was passiert hier? Ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt werden, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem Personenobjekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die dem Objekt erlauben, etwas mit diesen Daten zu machen, und werden als die **Methoden** des Objekts bezeichnet.

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

Von nun an verwenden wir diese kürzere Syntax.

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben buchstäblich den Inhalt des Objekts geschrieben, wie wir es erstellt haben. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert werden, die wir später betrachten werden.

Es ist sehr gebräuchlich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Datenelementen auf irgendeine Weise übertragen möchten, zum Beispiel das Senden einer Anfrage an den Server, um in einer Datenbank gespeichert zu werden. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer Elemente einzeln, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente anhand ihres Namens identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit der **Punktnotation** zugegriffen. Der Objektname (person) fungiert als **Namensraum** — er muss zuerst eingegeben werden, um auf alles innerhalb des Objekts zuzugreifen. Als nächstes schreiben Sie einen Punkt, dann das Element, auf das Sie zugreifen möchten — das kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie zum Beispiel, das `name`-Mitglied zu ändern, von

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

Um auf diese Elemente zuzugreifen, müssen Sie nur den zusätzlichen Schritt mit einem weiteren Punkt am Ende verketten. Versuchen Sie dies in der JS-Konsole:

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

ersetzen. Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammernotation

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen.
Anstatt Punktnotation zu verwenden wie hier:

```js
person.age;
person.name.first;
```

Können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — anstelle einer Indexnummer zum Auswählen eines Elements verwenden Sie den Namen, der mit dem Wert eines jeden Mitglieds verbunden ist. Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen zu Werten in der gleichen Weise, wie Arrays Zahlen zu Werten zuordnen.

Punktnotation wird im Allgemeinen über Klammernotation bevorzugt, weil sie prägnanter und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gehalten wird, können Sie mit der Punktnotation nicht auf den Wert zugreifen, aber Sie können den Wert mit der Klammernotation abrufen.

Im Beispiel unten kann die `logProperty()` Funktion `person[propertyName]` verwenden, um den Wert der Eigenschaft abzurufen, die in `propertyName` genannt wird.

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

Bisher haben wir nur das Abrufen (oder **Holen**) von Objektmitgliedern betrachtet — Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mit Punkt- oder Klammernotation), folgendermaßen:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und holen Sie sich dann die Mitglieder erneut, um zu sehen, wie sie sich geändert haben, wie folgt:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Mitgliedern hört nicht nur beim Aktualisieren der Werte vorhandener Eigenschaften und Methoden auf; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie dies in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Nun können Sie Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur Mitgliedswerte dynamisch setzen kann, sondern auch Mitgliedsnamen. Angenommen, wir wollten, dass Benutzer benutzerdefinierte Werttypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte so erhalten:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und Wert dem `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unterhalb der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Jetzt speichern und aktualisieren und folgendes in Ihr Texteingabefeld eingeben:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der oben genannten Methode ist mit Punktnotation nicht möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, nicht einen Variablenwert, der auf einen Namen verweist.

## Was ist "this"?

Möglicherweise haben Sie etwas leicht Merkwürdiges in unseren Methoden bemerkt. Schauen Sie sich zum Beispiel diese an:

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil, wenn die Methode aufgerufen wird, `this` sich auf das Objekt bezieht, auf dem die Methode aufgerufen wird, wodurch dieselbe Methodendefinition für mehrere Objekte funktioniert.

Dies ist nicht allzu nützlich, wenn Sie Objektliterale manuell schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum exakt gleichen Ergebnis führt, aber es wird wesentlich sein, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen den gleichen Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern wollen — wie das Hinzufügen einer `height`-Eigenschaft — dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir hätten gerne eine Möglichkeit, die "Form" eines Objekts zu definieren — die Menge der Methoden und der Eigenschaften, die es haben kann — und dann beliebig viele Objekte zu erstellen, wobei wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` nimmt, um den Wert der `name`-Eigenschaft zu setzen, aber der Wert der `introduceSelf()`-Methode wird für alle Objekte, die mithilfe dieser Funktion erstellt werden, gleich sein. Dieses Muster zur Objekterstellung ist sehr gebräuchlich.

Nun können wir so viele Objekte erstellen, wie wir möchten, und die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert gut, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Möglichkeit ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}}-Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass die Punktnotation, die Sie verwendet haben, sehr vertraut ist. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel durchgearbeitet haben, das eine integrierte Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen genau mit den gleichen Arten von Objektstrukturen gebaut werden, die wir hier betrachtet haben, wenn auch komplexer als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Also wenn Sie String-Methoden wie:

```js
myString.split(",");
```

verwendet haben, haben Sie eine Methode verwendet, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenfolge erstellen, wird diese Zeichenfolge automatisch als eine Instanz von `String` erstellt und hat daher mehrere gängige Methoden und Eigenschaften darauf verfügbar.

Wenn Sie auf das Document Object Model mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die auf einem [`Document`](/de/docs/Web/API/Document) Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird, und die die gesamte Struktur der Seite, Inhalte und andere Funktionen wie ihre URL darstellt. Auch hier bedeutet das, dass sie mehrere gemeinsame Methoden und Eigenschaften darauf verfügbar hat.

Das Gleiche gilt so ziemlich für jedes andere integrierte Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math), und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Als Beispiel benötigt die [Notifications API](/de/docs/Web/API/Notifications_API) – die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen – dass Sie für jede Benachrichtigung, die Sie auslösen möchten, eine neue Objektinstanz mithilfe des Konstruktors instanziieren. Versuchen Sie, das folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics).

## Zusammenfassung

Nun sollten Sie eine gute Vorstellung davon haben, wie Sie mit Objekten in JavaScript arbeiten — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch schätzen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verfolgen, wäre das ineffizient und frustrierend, und wir würden riskieren, mit anderen Variablen und Funktionen, die die gleichen Namen haben, zu kollidieren. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket, abseits aller Gefahren, aufzubewahren.

Im nächsten Artikel werden wir uns mit **DOM-Scripting** befassen, das eine große Menge an grundlegenden Browser-API-Funktionalitäten freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
