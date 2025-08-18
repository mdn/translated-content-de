---
title: JavaScript Objekt-Grundlagen
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}

In diesem Artikel werden wir uns die grundlegende JavaScript-Objektsyntax ansehen und einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, erneut betrachten und dabei betonen, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind und dass Sie wahrscheinlich jedes Mal Objekte verwendet haben, wenn Sie JavaScript berührt haben.</li>
          <li>Grundlegende Syntax: Objektliterale, Eigenschaften und Methoden, Objekte und Arrays in Objekten verschachteln.</li>
          <li>Verwenden von Konstruktoren, um ein neues Objekt zu erstellen.</li>
          <li>Objektbereich und <code>this</code>.</li>
          <li>Zugriff auf Eigenschaften und Methoden — Klammer- und Punktnotation.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Objektgrundlagen

Ein Objekt ist eine Sammlung verwandter Daten und/oder Funktionalitäten. Diese bestehen normalerweise aus mehreren Variablen und Funktionen (die als Eigenschaften und Methoden bezeichnet werden, wenn sie innerhalb von Objekten sind). Lassen Sie uns ein Beispiel durcharbeiten, um zu verstehen, wie sie aussehen.

Zu Beginn machen Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir verwenden dies als Grundlage, um die grundlegende Objektsyntax zu erkunden. Während der Arbeit mit diesem Beispiel sollten Sie Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt die Erstellung eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unter dem bereits in Ihrer Datei befindlichen JavaScript-Code einzugeben, diese dann zu speichern und zu aktualisieren:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis ähnlich einer der folgenden Zeilen erhalten:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Job erledigt! Aber dies ist ein leeres Objekt, also können wir damit nicht wirklich viel anfangen. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, damit es so aussieht:

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

Nachdem Sie gespeichert und aktualisiert haben, versuchen Sie, einiges vom Folgenden in die JavaScript-Konsole Ihrer Browser-Devtools einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt einige Daten und Funktionalitäten in Ihrem Objekt und können jetzt mit einer einfachen Syntax auf sie zugreifen.

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall sind durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so gut wie alles sein — in unserem Person-Objekt haben wir eine Zahl, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als Eigenschaften des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt ermöglichen, mit diesen Daten etwas zu tun, und werden als Methoden des Objekts bezeichnet.

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

Von jetzt an werden wir diese kürzere Syntax verwenden.

Ein solches Objekt wird als Objektliteral bezeichnet — wir haben die Objektinhalte buchstäblich aufgeschrieben, als wir es erstellt haben. Dies unterscheidet sich von Objekten, die von Klassen instanziiert werden, auf die wir später noch eingehen werden.

Es ist sehr üblich, ein Objekt mithilfe eines Objektliterals zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Datenelementen in irgendeiner Weise übertragen möchten, zum Beispiel eine Anfrage an den Server senden, um in eine Datenbank eingefügt zu werden. Das Senden eines einzelnen Objekts ist viel effizienter als das Senden mehrerer einzelner Elemente, und es ist einfacher zu handhaben als ein Array, wenn Sie einzelne Elemente anhand ihres Namens identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mithilfe der **Punktnotation** zugegriffen. Der Objektname (person) fungiert als **Namespace** — er muss zuerst eingegeben werden, um auf etwas innerhalb des Objekts zuzugreifen. Danach schreiben Sie einen Punkt und dann das Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Beispielsweise ändern Sie das Mitglied `name` von

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

Um auf diese Elemente zuzugreifen, müssen Sie den zusätzlichen Schritt mit einem weiteren Punkt am Ende der Kette anfügen. Versuchen Sie dies in der JS-Konsole:

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

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen.
Statt die [Punktnotation](#punktnotation) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht der Art und Weise, wie Sie auf die Elemente in einem Array zugreifen, sehr ähnlich und es ist im Grunde dasselbe — statt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den Namen, der mit dem Wert jedes Mitglieds assoziiert ist. Es ist kein Wunder, dass Objekte manchmal **assoziative Arrays** genannt werden — sie ordnen Strings in derselben Weise Werten zu, wie Arrays Zahlen Werten zuordnen.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie prägnanter und leichter lesbar ist.
Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen.
Zum Beispiel, wenn ein Objektname in einer Variablen gehalten wird, können Sie nicht die Punktnotation verwenden, um den Wert zuzugreifen, aber Sie können den Wert mit der Klammernotation zugreifen.

Im folgenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der in `propertyName` benannten Eigenschaft abzurufen.

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

## Objektmitglieder setzen

Bisher haben wir uns nur mit dem Abrufen (oder **Getting**) von Objektmitgliedern befasst — Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (mithilfe von Punkt- oder Klammernotation), so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und dann die Mitglieder erneut abzurufen, um zu sehen, wie sie sich geändert haben, wie folgt:

```js
person.age;
person["name"]["last"];
```

Das Setzen von Mitgliedern hört nicht nur beim Aktualisieren der Werte bestehender Eigenschaften und Methoden auf; Sie können auch völlig neue Mitglieder erstellen. Versuchen Sie diese in der JS-Konsole:

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

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur Mitgliedswerte dynamisch setzen kann, sondern auch die Namen der Mitglieder. Angenommen, wir wollten, dass Benutzer in der Lage sind, benutzerdefinierte Wertetypen in ihren Personendaten zu speichern, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte so abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und Wert dem `person` Objekt so hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unterhalb der schließenden geschweiften Klammer des `person` Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Versuchen Sie nun zu speichern und zu aktualisieren, und geben Sie das Folgende in Ihre Texteingabe ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der obigen Methode ist mit Punktnotation nicht möglich, die nur einen literalen Mitgliedsnamen annehmen kann, nicht einen Variablenwert, der auf einen Namen zeigt.

## Was ist "this"?

Sie haben vielleicht etwas leicht Merkwürdiges in unseren Methoden bemerkt. Schauen Sie sich dieses Beispiel an:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this` Schlüsselwort bezieht sich typischerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies passiert, weil bei Aufruf der Methode `this` sich auf das Objekt bezieht, auf dem die Methode aufgerufen wird, was es der gleichen Methodendefinition ermöglicht, für mehrere Objekte zu funktionieren.

Dies ist nicht besonders nützlich, wenn Sie Objektliterale von Hand aufschreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum genau gleichen Ergebnis führt, aber es wird essentiell, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen den gleichen Code für jedes Objekt, das wir erstellen, ausschreiben, und wenn wir einige Eigenschaften des Objekts ändern wollen — wie z.B. eine `height`-Eigenschaft hinzufügen — dann müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir möchten eine Methode, um die "Form" eines Objekts zu definieren — die Menge an Methoden und die Eigenschaften, die es haben kann — und dann so viele Objekte erstellen, wie wir mögen, indem wir einfach die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Diese Funktion erstellt und gibt jedes Mal ein neues Objekt zurück, wenn wir sie aufrufen. Das Objekt wird zwei Mitglieder haben:

- eine Eigenschaft `name`
- eine Methode `introduceSelf()`.

Beachten Sie, dass `createPerson()` einen Parameter `name` verwendet, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle mithilfe dieser Funktion erstellten Objekte gleich sein. Dies ist ein sehr verbreitetes Muster zur Erstellung von Objekten.

Jetzt können wir so viele Objekte erstellen, wie wir möchten, und dabei die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Dies funktioniert gut, ist aber ein wenig umständlich: wir müssen ein leeres Objekt erstellen, es initialisieren und es zurückgeben. Eine bessere Art ist es, einen **Konstruktor** zu verwenden. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}} Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie in Ihrem Konstruktorcode auf `this` verweisen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen üblicherweise mit einem Großbuchstaben und werden nach dem Typ von Objekt benannt, das sie erstellen. So könnten wir unser Beispiel umschreiben:

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

Während Sie diese Beispiele durchgearbeitet haben, dachten Sie wahrscheinlich, dass die von Ihnen verwendete Punktnotation sehr vertraut ist. Das liegt daran, dass Sie sie während des gesamten Kurses verwendet haben! Jedes Mal, wenn wir ein Beispiel bearbeitet haben, das eine eingebaute Browser-API oder JavaScript-Objekt nutzt, haben wir Objekte verwendet, weil solche Funktionen genau mit den gleichen Arten von Objektstrukturen erstellt wurden, die wir hier betrachten, wenn auch komplexeren als in unseren eigenen einfachen benutzerdefinierten Beispielen.

Also, wenn Sie Zeichenfolgenmethoden wie verwendet haben:

```js
myString.split(",");
```

Sie nutzten eine Methode, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String) Objekt verfügbar ist. Jedes Mal, wenn Sie eine Zeichenfolge in Ihrem Code erstellen, wird diese Zeichenfolge automatisch als Instanz von `String` erstellt und hat daher mehrere allgemeine Methoden und Eigenschaften darauf verfügbar.

Wenn Sie auf das Dokumentobjektmodell mit Zeilen wie dieser zugreifen:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

Sie haben Methoden verwendet, die auf einem [`Document`](/de/docs/Web/API/Document) Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur der Seite, ihren Inhalt und andere Funktionen wie ihre URL darstellt. Wieder bedeutet das, dass es mehrere allgemeine Methoden und Eigenschaften darauf verfügbar hat.

Dasselbe gilt für nahezu jedes andere eingebaute Objekt oder API, das Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) usw.

Beachten Sie, dass integrierte Objekte und APIs nicht immer Objektinstanzen automatisch erstellen. Als Beispiel erfordert die [Notifications API](/de/docs/Web/API/Notifications_API) — die modernen Browsern ermöglicht, Systembenachrichtigungen auszulösen —, dass Sie jedes Mal eine neue Objektinstanz mit dem Konstruktor instanziieren, wenn Sie eine Benachrichtigung auslösen möchten. Versuchen Sie, das Folgende in Ihre JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Zusammenfassung

Sie sollten nun eine gute Vorstellung davon haben, wie man in JavaScript mit Objekten arbeitet — einschließlich der Erstellung Ihrer eigenen einfachen Objekte. Sie sollten auch verstehen, dass Objekte sehr nützlich als Strukturen zum Speichern verwandter Daten und Funktionalitäten sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person`-Objekt als separate Variablen und Funktionen zu verfolgen, wäre es ineffizient und frustrierend, und wir liefen Gefahr, mit anderen Variablen und Funktionen, die die gleichen Namen haben, in Konflikt zu geraten. Objekte erlauben uns, die Informationen sicher in ihrem eigenen Paket aufzubewahren, fern von Schaden.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/Test_your_skills/Object_basics", "Learn_web_development/Core/Scripting")}}
