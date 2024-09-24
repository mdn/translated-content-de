---
title: Grundlagen von JavaScript-Objekten
slug: Learn/JavaScript/Objects/Basics
l10n:
  sourceCommit: 50148158dd72162889c2f42d965bf4638cb57606
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

In diesem Artikel schauen wir uns grundlegende JavaScript-Objektsyntax an und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben. Dabei wird deutlich, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen der Arbeit mit Objekten in JavaScript verstehen: Objekte erstellen, auf Objekt-Eigenschaften zugreifen und diese ändern, sowie Konstruktoren verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung von verwandten Daten und/oder Funktionalitäten. Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie sich innerhalb von Objekten befinden). Gehen wir ein Beispiel durch, um zu verstehen, wie sie aussehen.

Zunächst erstellen Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html)-Datei. Sie enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir werden dies als Grundlage verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [Entwickler-Tools JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts häufig damit, dass Sie eine Variable definieren und initialisieren. Versuchen Sie, die folgende Zeile unter dem JavaScript-Code einzugeben, der bereits in Ihrer Datei vorhanden ist. Speichern Sie dann und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, das ähnlich wie eine der folgenden Zeilen aussieht:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Job erledigt! Aber das ist ein leeres Objekt, sodass wir nicht viel damit anfangen können. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, sodass es so aussieht:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} ist ${this.age} Jahre alt.`);
  },
  introduceSelf: function () {
    console.log(`Hi! Ich bin ${this.name[0]}.`);
  },
};
```

Nach dem Speichern und Aktualisieren, versuchen Sie einige der folgenden Befehle in der JavaScript-Konsole der Entwickler-Tools Ihres Browsers einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith ist 32 Jahre alt."
person.introduceSelf();
// "Hi! Ich bin Bob."
```

Sie haben jetzt einige Daten und Funktionalitäten in Ihrem Objekt und können nun mit einer schönen einfachen Syntax darauf zugreifen!

Was läuft hier ab? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z. B. `name` und `age`) und einen Wert (z. B. `['Bob', 'Smith']` und `32`) hat. Jedes Namens-/Wertepaar muss durch ein Komma getrennt werden, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem Person-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als die **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als die **Methoden** des Objekts bezeichnet.

Wenn es sich bei den Mitgliedern des Objekts um Funktionen handelt, gibt es eine einfachere Syntax. Anstelle von `bio: function ()` können wir `bio()` schreiben. So:

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} ist ${this.age} Jahre alt.`);
  },
  introduceSelf() {
    console.log(`Hi! Ich bin ${this.name[0]}.`);
  },
};
```

Von nun an werden wir diese kürzere Syntax verwenden.

Ein solches Objekt wird als **Objektliterale** bezeichnet — wir haben den Inhalt des Objekts buchstäblich niedergeschrieben, während wir es erstellen. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Datenelementen auf irgendeine Weise übertragen möchten, zum Beispiel das Senden einer Anfrage an den Server, um in eine Datenbank eingefügt zu werden. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer einzelner Elemente, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente mit Namen identifizieren möchten.

## Punktnotation

Wie oben gezeigt, haben Sie auf die Eigenschaften und Methoden des Objekts mithilfe der **Punktnotation** zugegriffen. Der Objektname (person) fungiert als **Namensraum** — er muss zuerst eingegeben werden, um auf etwas innerhalb des Objekts zuzugreifen. Dann schreiben Sie einen Punkt und das Element, auf das Sie zugreifen möchten — das kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer Methode des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie beispielsweise, das `name`-Mitglied von

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

Zu ändern.

Um auf diese Elemente zuzugreifen, müssen Sie den zusätzlichen Schritt mit einem weiteren Punkt an das Ende hängen. Versuchen Sie diese Befehle in der JS-Konsole:

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

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Anstatt [Punktnotation](#punktnotation) wie diese zu verwenden:

```js
person.age;
person.name.first;
```

Können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — statt einer Indexnummer zum Auswählen eines Elements zu verwenden, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds verknüpft ist. Kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten zu, genauso wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie kürzer und leichter zu lesen ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Beispielsweise, wenn ein Objekt-Eigenschaftenname in einer Variablen gehalten wird, können Sie die Punktnotation nicht verwenden, um den Wert abzurufen, aber Sie können den Wert mit der Klammernotation abrufen.

Im unten stehenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der Eigenschaft abzurufen, die in `propertyName` benannt wurde.

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

Bisher haben wir uns nur mit dem Abrufen (oder **Erhalten**) von Objektmitgliedern befasst — Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mit Punkt- oder Klammernotation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben, und rufen Sie die Mitglieder dann erneut ab, um zu sehen, wie sie sich geändert haben, etwa so:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Mitgliedern beschränkt sich nicht nur auf die Aktualisierung der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Auf Wiedersehen, alle zusammen!");
};
```

Sie können nun Ihre neuen Mitglieder testen:

```js
person["eyes"];
person.farewell();
// "Auf Wiedersehen, alle zusammen!"
```

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur verwendet werden kann, um Mitgliedswerte dynamisch festzulegen, sondern auch Mitgliedernamen. Angenommen, wir möchten Benutzern erlauben, benutzerdefinierte Werttypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und -wert in zwei Texteinträge eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert zum `person`-Objekt wie folgt hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unter der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie nun und geben Sie folgendes in Ihr Texteingabefeld ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist nicht mit der Punktnotation möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, nicht jedoch einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben möglicherweise etwas Bemerkenswertes in unseren Methoden bemerkt. Sehen Sie sich beispielsweise diese an:

```js
introduceSelf() {
  console.log(`Hi! Ich bin ${this.name[0]}.`);
}
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this`-Schlüsselwort bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

Lassen Sie uns veranschaulichen, was wir meinen, mit einem vereinfachten Paar von Person-Objekten:

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! Ich bin ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! Ich bin ${this.name}.`);
  },
};
```

In diesem Fall gibt `person1.introduceSelf()` "Hi! Ich bin Chris." aus; `person2.introduceSelf()` gibt "Hi! Ich bin Deepti." aus. Dies geschieht, weil beim Aufruf der Methode `this` auf das Objekt verweist, auf dem die Methode aufgerufen wird, was es derselben Methodendefinition ermöglicht, für mehrere Objekte zu funktionieren.

Dies ist nicht besonders nützlich, wenn Sie Objektliterale von Hand ausschreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum gleichen Ergebnis führt, aber es wird unerlässlich sein, wenn wir anfangen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, was das Thema des nächsten Abschnitts ist.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - wie das Hinzufügen einer `height`-Eigenschaft - dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit, die "Form" eines Objekts zu definieren — die Menge der Methoden und der Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, wobei wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

Die erste Version davon ist nur eine Funktion:

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! Ich bin ${this.name}.`);
  };
  return obj;
}
```

Diese Funktion erstellt und gibt jedes Mal, wenn wir sie aufrufen, ein neues Objekt zurück. Das Objekt wird zwei Mitglieder haben:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Man merkt, dass `createPerson()` einen Parameter `name` übernimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle mit dieser Funktion erstellten Objekte gleich sein. Dies ist ein sehr gängiges Muster zum Erstellen von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, indem wir die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! Ich bin Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! Ich bin Frankie."
```

Dies funktioniert gut, ist aber ein bisschen umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und zurückgeben. Eine bessere Möglichkeit ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem Schlüsselwort {{jsxref("operators/new", "new")}} aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie sich in Ihrem Konstruktionscode auf `this` beziehen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen aus Konvention mit einem Großbuchstaben und werden nach dem Typ des Objekts benannt, das sie erstellen. Also könnten wir unser Beispiel so umschreiben:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! Ich bin ${this.name}.`);
  };
}
```

Um `Person()` als Konstruktor aufzurufen, verwenden wir `new`:

```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! Ich bin Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! Ich bin Frankie."
```

## Sie haben die ganze Zeit Objekte verwendet

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich bemerkt, dass Ihnen die verwendete Punktnotation sehr vertraut ist. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir an einem Beispiel gearbeitet haben, das eine eingebaute Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen mit genau denselben Arten von Objektstrukturen erstellt werden, die wir uns hier angesehen haben, wenn auch komplexere als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Wenn Sie also Zeichenkettenmethoden wie:

```js
myString.split(",");
```

verwendet haben, haben Sie eine Methode eines [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekts verwendet. Jedes Mal, wenn Sie in Ihrem Code eine Zeichenkette erstellen, wird diese automatisch als Instanz von `String` erstellt und hat daher mehrere allgemeine Methoden und Eigenschaften darauf verfügbar.

Wenn Sie auf das Document Object Model mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden eines [`Document`](/de/docs/Web/API/Document)-Objekts verwendet. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird, welche die gesamte Seitenstruktur, den Inhalt und andere Merkmale wie ihre URL repräsentiert. Auch hier bedeutet das, dass darauf mehrere allgemeine Methoden und Eigenschaften verfügbar sind.

Das Gleiche gilt für so gut wie jedes andere eingebaute Objekt oder jede API, die Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebaute Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel ist die [Notifications API](/de/docs/Web/API/Notifications_API) — die modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — erfordert, dass Sie eine neue Objektinstanz für jede Benachrichtigung, die Sie auslösen möchten, mit dem Konstruktor instanziieren. Versuchen Sie, das Folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hallo!");
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Im Abschnitt [Testen Sie Ihr Wissen: Grundlagen von Objekten](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics) finden Sie einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen vor dem Weiterlesen gemerkt haben.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende unseres ersten Artikels über JS-Objekte erreicht — Sie sollten jetzt eine gute Vorstellung davon haben, wie Sie mit Objekten in JavaScript arbeiten können, einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verfolgen, wäre das ineffizient und frustrierend. Wir würden das Risiko eingehen, mit anderen Variablen und Funktionen mit denselben Namen zu kollidieren. Objekte lassen uns die Informationen sicher in ihrem eigenen Paket, aus der Gefahrenzone, eingeschlossen, aufbewahren.

Im nächsten Artikel werden wir uns mit **Prototypen** befassen, der fundamentalen Möglichkeit, wie JavaScript ein Objekt von anderen Objekten erben lässt.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
