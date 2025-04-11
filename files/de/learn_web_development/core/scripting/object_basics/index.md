---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel befassen wir uns mit der grundlegenden JavaScript-Objektsyntax und wiederholen einige JavaScript-Funktionen, die wir bereits früher im Kurs kennengelernt haben. Dies verdeutlicht, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, sowie Vertrautheit mit JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und dass Sie wahrscheinlich jedes Mal, wenn Sie JavaScript verwendet haben, bereits Objekte genutzt haben.</li>
          <li>Grundsyntax: Objektliterale, Eigenschaften und Methoden, Verschachtelung von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren zur Erstellung eines neuen Objekts.</li>
          <li>Objektbereich und <code>this</code>.</li>
          <li>Zugreifen auf Eigenschaften und Methoden — Klammer- und Punktnotierung.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Objekten

Ein Objekt ist eine Sammlung von zusammengehörigen Daten und/oder Funktionalitäten.
Diese bestehen in der Regel aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie in Objekten enthalten sind).
Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Erstellen Sie zunächst eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben. Wir werden dies als Basis verwenden, um die grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzutippen.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unterhalb des bereits vorhandenen JavaScript-Codes in Ihrer Datei einzufügen, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Gut gemacht! Aber das ist ein leeres Objekt, sodass wir nicht wirklich viel damit anfangen können. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, sodass es wie folgt aussieht:

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

Nachdem Sie gespeichert und aktualisiert haben, versuchen Sie, einige der folgenden Dinge in die JavaScript-Konsole Ihrer Browser-Entwicklertools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Jetzt haben Sie einige Daten und Funktionalitäten in Ihrem Objekt und können diese mit einer schönen einfachen Syntax darauf zugreifen!

Was geschieht hier? Nun, ein Objekt besteht aus mehreren Elementen, von denen jedes einen Namen (z. B. `name` und `age` oben) und einen Wert hat (z. B. `['Bob', 'Smith']` und `32`). Jedes Paar aus Namen und Wert muss durch ein Komma getrennt sein, und in jedem Fall sind der Name und der Wert durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektelements kann nahezu alles sein — in unserem Personenobjekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als **Eigenschaften** des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als **Methoden** des Objekts bezeichnet.

Wenn es sich bei den Elementen des Objekts um Funktionen handelt, gibt es eine einfachere Syntax. Anstelle von `bio: function ()` können wir `bio()` schreiben. So:

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

Ein solches Objekt wird als **Objektliteral** bezeichnet — wir haben die Objektinhalte buchstäblich aufgeschrieben, während wir es erstellt haben. Dies ist anders im Vergleich zu Objekten, die aus Klassen instanziiert werden, auf die wir später eingehen werden.

Es ist sehr üblich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Daten in irgendeiner Weise übertragen möchten, z. B. eine Anfrage an den Server senden, um in eine Datenbank aufgenommen zu werden. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer einzelner Elemente, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente anhand ihres Namens identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mit **Punktnotation** zugegriffen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf irgendetwas im Inneren des Objekts zuzugreifen. Danach schreiben Sie einen Punkt, gefolgt von dem Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Versuchen Sie zum Beispiel, das `name`-Element von

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

Um auf diese Elemente zuzugreifen, müssen Sie einfach den zusätzlichen Schritt mit einem weiteren Punkt an das Ende anhängen. Versuchen Sie es mit diesen in der JS-Konsole:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methodencode durchgehen und alle Instanzen von

```js
name[0];
name[1];
```

durch

```js
name.first;
name.last;
```

ersetzen.

Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammernotation

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen.
Anstelle der Verwendung der [Punktnotation](#punktnotation) wie folgt:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht sehr ähnlich aus wie der Zugriff auf die Elemente in einem Array, und es ist im Grunde dasselbe — anstelle einer Indexnummer zur Auswahl eines Elements verwenden Sie den Namen, der mit dem Wert jedes Elements verknüpft ist.
Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten auf dieselbe Weise zu wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie prägnanter und leichter zu lesen ist.
Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen.
Zum Beispiel, wenn ein Objekteigenschaftsname in einer Variablen gehalten wird, können Sie nicht die Punktnotation verwenden, um auf den Wert zuzugreifen, aber Sie können den Wert mit der Klammernotation abrufen.

Im folgenden Beispiel kann die `logProperty()`-Funktion `person[propertyName]` verwenden, um den Wert der in `propertyName` genannten Eigenschaft abzurufen.

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

## Festlegen von Objektelementen

Bisher haben wir nur das Abrufen (oder **Erhalten**) von Objektelementen betrachtet — Sie können auch den Wert von Objektelementen **festlegen** (aktualisieren), indem Sie das Element, das Sie festlegen möchten (mit Punkt- oder Klammernotation), deklarieren, wie folgt:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und dann die Elemente erneut abzurufen, um zu sehen, wie sie sich geändert haben, etwa so:

```js
person.age;
person["name"]["last"];
```

Das Festlegen von Elementen beschränkt sich nicht nur auf das Aktualisieren der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Elemente erstellen. Versuchen Sie diese in der JS-Konsole:

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Sie können jetzt Ihre neuen Elemente testen:

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur zum dynamischen Festlegen von Elementwerten, sondern auch von Elementnamen verwendet werden kann. Angenommen, wir möchten, dass Benutzer benutzerdefinierte Wertenamen in ihren Personendaten speichern können, indem sie den Eigenschaftsnamen und -wert in zwei Texteingaben eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Eigenschaftsnamen und -wert dem `person`-Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unterhalb der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Jetzt speichern und aktualisieren, und das Folgende in Ihre Texteingabe eingeben:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit der Punktnotation nicht möglich, die nur einen literalen Elementnamen akzeptieren kann, nicht aber einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Vielleicht ist Ihnen in unseren Methoden etwas leicht Ungewöhnliches aufgefallen. Schauen Sie sich zum Beispiel diese an:

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris."; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil sich bei dem Aufruf der Methode `this` auf das Objekt bezieht, auf dem die Methode aufgerufen wurde, was es ermöglicht, dasselbe Methodendefinition für mehrere Objekte zu verwenden.

Dies ist nicht besonders nützlich, wenn Sie Objekthandliterale selbst schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum gleichen Ergebnis führt. Es wird jedoch unerlässlich sein, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt, das wir erstellen, erneut schreiben, und wenn wir einige Eigenschaften des Objekts ändern möchten - wie das Hinzufügen einer `height`-Eigenschaft - müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Möglichkeit haben, die "Form" eines Objekts zu definieren — die Menge an Methoden und Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir möchten, indem wir einfach die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Diese Funktion erstellt und gibt jedes Mal, wenn wir sie aufrufen, ein neues Objekt zurück. Das Objekt hat zwei Elemente:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der `name`-Eigenschaft festzulegen, der Wert der `introduceSelf()`-Methode jedoch für alle mithilfe dieser Funktion erstellten Objekte gleich ist. Dies ist ein sehr verbreitetes Muster für die Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, wobei wir die Definition wiederverwenden:

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
- `this` an das neue Objekt binden, sodass Sie sich in Ihrem Konstruktionscode auf `this` beziehen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen konventionell mit einem Großbuchstaben und sind nach dem Typ des Objekts benannt, das sie erstellen. So könnten wir unser Beispiel so umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich gedacht, dass Ihnen die verwendete Punktnotation sehr vertraut vorkommt. Das liegt daran, dass Sie sie im gesamten Kurs verwendet haben! Jedes Mal, wenn wir an einem Beispiel gearbeitet haben, das eine integrierte Browser-API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, da solche Funktionen genau mit den gleichen Arten von Objektstrukturen erstellt werden, die wir hier betrachtet haben, wenn auch komplexere als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Wenn Sie also Zeichenfolgenmethoden wie diese verwendet haben:

```js
myString.split(",");
```

verwendeten Sie eine Methode, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie eine Zeichenfolge in Ihrem Code erstellen, wird diese Zeichenfolge automatisch als Instanz von `String` erstellt und hat daher mehrere allgemeine Methoden und Eigenschaften, die darauf verfügbar sind.

Wenn Sie auf das Dokumentobjektmodell mit Zeilen wie dieser zugegriffen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

verwendeten Sie Methoden, die auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, genannt `document`, die die gesamte Struktur, den Inhalt und andere Funktionen wie die URL der Seite repräsentiert. Auch hier bedeutet dies, dass darauf mehrere allgemeine Methoden und Eigenschaften verfügbar sind.

Dasselbe gilt für so ziemlich jedes andere integrierte Objekt oder API, die Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass eingebettete Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Ein Beispiel dafür ist die [Notifications-API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen — die erfordert, dass Sie für jede Benachrichtigung, die Sie auslösen möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, das Folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, können Sie sich jedoch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Object_basics).

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie Sie mit Objekten in JavaScript arbeiten — einschließlich der Erstellung eigener einfacher Objekte. Sie sollten auch zu schätzen wissen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalität sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verwalten, wäre es ineffizient und frustrierend, und wir würden das Risiko eingehen, mit anderen Variablen und Funktionen, die denselben Namen haben, in Konflikt zu geraten. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket zurückzuhalten, aus dem Weg von Schaden.

Im nächsten Artikel werden wir uns das **DOM-Scripting** ansehen, das eine große Menge an grundlegender Browser-API-Funktionalität freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
