---
title: Grundlagen von JavaScript-Objekten
short-title: Objects
slug: Learn_web_development/Core/Scripting/Object_basics
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

In diesem Artikel werden wir uns die grundlegende JavaScript-Objektsyntax ansehen und einige JavaScript-Funktionen, die wir bereits früher im Kurs gesehen haben, erneut aufgreifen. Dabei wiederholen wir die Tatsache, dass viele der Funktionen, mit denen Sie bereits gearbeitet haben, Objekte sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass in JavaScript die meisten Dinge Objekte sind, und dass Sie wahrscheinlich Objekte jedes Mal verwendet haben, wenn Sie JavaScript berührt haben.</li>
          <li>Grundsyntax: Objektliterale, Eigenschaften und Methoden, Verschachteln von Objekten und Arrays in Objekten.</li>
          <li>Verwendung von Konstruktoren, um ein neues Objekt zu erstellen.</li>
          <li>Objektbereich und <code>this</code>.</li>
          <li>Zugriff auf Eigenschaften und Methoden — Klammer- und Punkt-Syntax.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen des Objekts

Ein Objekt ist eine Sammlung verwandter Daten und/oder Funktionen. Diese bestehen in der Regel aus mehreren Variablen und Funktionen (die im Inneren von Objekten als Eigenschaften und Methoden bezeichnet werden). Lassen Sie uns ein Beispiel durchgehen, um zu verstehen, wie sie aussehen.

Zu Beginn machen Sie eine lokale Kopie unserer [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) Datei. Diese enthält sehr wenig — ein {{HTMLElement("script")}}-Element, in das wir unseren Quellcode schreiben können. Wir verwenden dies als Grundlage, um die grundlegende Objektsyntax zu erkunden. Während Sie mit diesem Beispiel arbeiten, sollten Sie Ihre [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) geöffnet haben und bereit sein, einige Befehle einzugeben.

Wie bei vielen Dingen in JavaScript beginnt das Erstellen eines Objekts oft mit der Definition und Initialisierung einer Variablen. Versuchen Sie, die folgende Zeile unter den JavaScript-Code zu schreiben, der sich bereits in Ihrer Datei befindet, dann speichern und aktualisieren Sie:

```js
const person = {};
```

Öffnen Sie nun die [JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#the_javascript_console) Ihres Browsers, geben Sie `person` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>. Sie sollten ein Ergebnis erhalten, das einer der folgenden Zeilen ähnelt:

```plain
[object Object]
Object { }
{ }
```

Herzlichen Glückwunsch, Sie haben gerade Ihr erstes Objekt erstellt. Aufgabe erledigt! Aber dies ist ein leeres Objekt, sodass wir damit nicht viel anfangen können. Lassen Sie uns das JavaScript-Objekt in unserer Datei aktualisieren, um so auszusehen:

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

Nachdem Sie gespeichert und aktualisiert haben, versuchen Sie, einige der folgenden Eingaben in die JavaScript-Konsole Ihres Browserentwicklungswerkzeugs einzugeben:

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

Sie haben jetzt einige Daten und Funktionen in Ihrem Objekt und können mit einer schönen einfachen Syntax darauf zugreifen!

Was passiert hier? Nun, ein Objekt besteht aus mehreren Mitgliedern, von denen jedes einen Namen (z.B. `name` und `age` oben) und einen Wert (z.B. `['Bob', 'Smith']` und `32`) hat. Jedes Name/Wert-Paar muss durch ein Komma getrennt sein, und der Name und der Wert in jedem Fall werden durch einen Doppelpunkt getrennt. Die Syntax folgt immer diesem Muster:

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

Der Wert eines Objektmitglieds kann so ziemlich alles sein — in unserem `person` Objekt haben wir eine Nummer, ein Array und zwei Funktionen. Die ersten beiden Elemente sind Datenelemente und werden als Eigenschaften des Objekts bezeichnet. Die letzten beiden Elemente sind Funktionen, die es dem Objekt ermöglichen, etwas mit diesen Daten zu tun, und werden als Methoden des Objekts bezeichnet.

Wenn es sich bei den Mitgliedern des Objekts um Funktionen handelt, gibt es eine einfachere Syntax. Anstelle von `bio: function ()` können wir `bio()` schreiben. So wie hier:

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

Ein solches Objekt wird als **Objektliteral** bezeichnet – wir haben den Objektinhalt wortwörtlich geschrieben, als wir es erstellt haben. Dies unterscheidet sich von Objekten, die aus Klassen instanziiert werden, die wir später noch betrachten werden.

Es ist sehr gebräuchlich, ein Objekt mit einem Objektliteral zu erstellen, wenn Sie eine Reihe von strukturierten, verwandten Datenelementen in irgendeiner Weise übertragen möchten, zum Beispiel beim Senden einer Anfrage an den Server, um sie in eine Datenbank einzufügen. Das Senden eines einzelnen Objekts ist viel effizienter, als mehrere Elemente einzeln zu senden, und es ist einfacher zu bearbeiten als ein Array, wenn Sie einzelne Elemente namentlich identifizieren möchten.

## Punktnotation

Oben haben Sie auf die Eigenschaften und Methoden des Objekts mithilfe der **Punktnotation** zugegriffen. Der Objektname (`person`) fungiert als **Namespace** – er muss zuerst eingegeben werden, um auf alles im Inneren des Objekts zuzugreifen. Anschließend schreiben Sie einen Punkt und dann das Element, auf das Sie zugreifen möchten — dies kann der Name einer einfachen Eigenschaft, ein Element einer Array-Eigenschaft oder ein Aufruf einer der Methoden des Objekts sein, zum Beispiel:

```js
person.age;
person.bio();
```

### Objekte als Objekteigenschaften

Eine Objekteigenschaft kann selbst ein Objekt sein. Beispielsweise versuchen Sie, das `name`-Mitglied von

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

Um auf diese Elemente zuzugreifen, müssen Sie nur den zusätzlichen Schritt mit einem weiteren Punkt am Ende anhängen. Probieren Sie diese in der JS-Konsole aus:

```js
person.name.first;
person.name.last;
```

Wenn Sie dies tun, müssen Sie auch Ihren Methodencode durchgehen und alle Vorkommen von

```js
name[0];
name[1];
```

zu

```js
name.first;
name.last;
```

ändern.

Andernfalls funktionieren Ihre Methoden nicht mehr.

## Klammernotation

Die Klammernotation bietet eine alternative Möglichkeit, auf Objekteigenschaften zuzugreifen. Anstatt [Punktnotation](#punktnotation) wie folgt zu verwenden:

```js
person.age;
person.name.first;
```

können Sie stattdessen eckige Klammern verwenden:

```js
person["age"];
person["name"]["first"];
```

Dies sieht der Art und Weise, wie Sie auf die Elemente in einem Array zugreifen, sehr ähnlich, und es ist im Grunde dasselbe — anstatt eine Indexnummer zu verwenden, um ein Element auszuwählen, verwenden Sie den mit dem Wert eines jeden Mitglieds verbundenen Namen. Es ist kein Wunder, dass Objekte manchmal als **assoziative Arrays** bezeichnet werden — sie ordnen Zeichenfolgen Werten zu, genauso wie es Arrays mit Zahlen tun.

Die Punktnotation wird im Allgemeinen der Klammernotation vorgezogen, da sie kürzer und leichter lesbar ist. Es gibt jedoch einige Fälle, in denen Sie eckige Klammern verwenden müssen. Beispielsweise können Sie, wenn ein Objekteigenschaftsname in einer Variable gehalten wird, die Punktnotation nicht verwenden, um auf den Wert zuzugreifen, aber Sie können den Wert mit der Klammernotation abrufen.

Im folgenden Beispiel kann die Funktion `logProperty()` `person[propertyName]` verwenden, um den Wert der in `propertyName` benannten Eigenschaft zu abrufen.

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

Bisher haben wir uns nur das Abrufen (oder **Getten**) von Objektmitgliedern angesehen – Sie können auch den Wert von Objektmitgliedern **setzen** (aktualisieren), indem Sie das Mitglied deklarieren, das Sie setzen möchten (unter Verwendung der Punkt- oder Klammernotation), zum Beispiel so:

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

Versuchen Sie, die obigen Zeilen einzugeben und anschließend die Mitglieder erneut abzurufen, um zu sehen, wie sie sich geändert haben, wie folgt:

```js
person.age;
person["name"]["last"];
```

Das Einstellen von Mitgliedern beschränkt sich nicht nur auf das Aktualisieren der Werte vorhandener Eigenschaften und Methoden; Sie können auch völlig neue Mitglieder erstellen. Probieren Sie diese in der JS-Konsole aus:

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

Ein nützlicher Aspekt der Klammernotation ist, dass sie nicht nur Mitgliedswerte dynamisch setzen kann, sondern auch Mitgliedsnamen. Angenommen, wir möchten, dass Benutzer benutzerdefinierte Werttypen in ihren Personendaten speichern können, indem sie den Mitgliedsnamen und den Wert in zwei Texteingaben eingeben. Wir könnten diese Werte folgendermaßen abrufen:

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Wir könnten dann diesen neuen Mitgliedsnamen und -wert dem `person`-Objekt wie folgt hinzufügen:

```js
person[myDataName] = myDataValue;
```

Um dies zu testen, versuchen Sie, die folgenden Zeilen in Ihren Code einzufügen, direkt unter der schließenden geschweiften Klammer des `person`-Objekts:

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Speichern und aktualisieren Sie nun und geben Sie Folgendes in Ihre Texteingabe ein:

```js
person.height;
```

Das Hinzufügen einer Eigenschaft zu einem Objekt mit der oben genannten Methode ist mit der Punktnotation nicht möglich, die nur einen literalen Mitgliedsnamen akzeptieren kann, nicht einen mit einem Namen verweisenden Variablenwert.

## Was ist "this"?

Sie haben vielleicht etwas leicht Seltsames in unseren Methoden bemerkt. Sehen Sie sich zum Beispiel diese an:

```js
const person = {
  // …
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

Sie fragen sich wahrscheinlich, was "this" ist. Das `this`-Schlüsselwort bezieht sich normalerweise auf das aktuelle Objekt, in dem der Code ausgeführt wird. Im Kontext einer Objektmethode bezieht sich `this` auf das Objekt, auf dem die Methode aufgerufen wurde.

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

In diesem Fall gibt `person1.introduceSelf()` "Hi! I'm Chris." aus; `person2.introduceSelf()` gibt "Hi! I'm Deepti." aus. Dies geschieht, weil sich `this` beim Aufrufen der Methode auf das Objekt bezieht, auf dem die Methode aufgerufen wird, was es derselben Methodendefinition ermöglicht, für mehrere Objekte zu funktionieren.

Dies ist nicht sehr nützlich, wenn Sie Objektliterale von Hand schreiben, da die Verwendung des Objektnamens (`person1` und `person2`) zum exakt gleichen Ergebnis führt, aber es wird essentiell, wenn wir beginnen, **Konstruktoren** zu verwenden, um mehr als ein Objekt aus einer einzigen Objektdefinition zu erstellen, und das ist das Thema des nächsten Abschnitts.

## Einführung in Konstruktoren

Die Verwendung von Objektliteralen ist in Ordnung, wenn Sie nur ein Objekt erstellen müssen, aber wenn Sie mehr als eines erstellen müssen, wie im vorherigen Abschnitt, sind sie ernsthaft unzureichend. Wir müssen denselben Code für jedes Objekt wiederholen, das wir erstellen, und wenn wir einige Eigenschaften des Objekts ändern möchten - wie zum Beispiel eine `height`-Eigenschaft hinzufügen - müssen wir daran denken, jedes Objekt zu aktualisieren.

Wir hätten gerne eine Möglichkeit, die "Form" eines Objekts — die Menge der Methoden und Eigenschaften, die es haben kann — zu definieren und anschließend so viele Objekte zu erstellen, wie wir möchten, wobei wir nur die Werte für die Eigenschaften aktualisieren, die unterschiedlich sind.

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

Beachten Sie, dass `createPerson()` einen Parameter `name` übernimmt, um den Wert der `name`-Eigenschaft festzulegen, aber der Wert der `introduceSelf()`-Methode wird für alle mithilfe dieser Funktion erstellten Objekte derselbe sein. Dies ist ein sehr häufiges Muster zur Erstellung von Objekten.

Nun können wir so viele Objekte erstellen, wie wir möchten, und die Definition wiederverwenden:

```js
const salva = createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

Das funktioniert gut, ist aber etwas umständlich: Wir müssen ein leeres Objekt erstellen, es initialisieren und es zurückgeben. Ein besserer Weg ist die Verwendung eines **Konstruktors**. Ein Konstruktor ist einfach eine Funktion, die mit dem {{jsxref("operators/new", "new")}}-Schlüsselwort aufgerufen wird. Wenn Sie einen Konstruktor aufrufen, wird er:

- ein neues Objekt erstellen
- `this` an das neue Objekt binden, sodass Sie sich in Ihrem Konstruktorkode auf `this` beziehen können
- den Code im Konstruktor ausführen
- das neue Objekt zurückgeben.

Konstruktoren beginnen üblicherweise mit einem Großbuchstaben und sind nach dem Objekttyp benannt, den sie erstellen. Wir könnten unser Beispiel also so umschreiben:

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

Während Sie diese Beispiele durchgegangen sind, haben Sie wahrscheinlich bemerkt, dass die verwendete Punktnotation Ihnen sehr vertraut vorkommt. Das liegt daran, dass Sie diese bereits im gesamten Kurs verwendet haben! Jedes Mal, wenn wir an einem Beispiel gearbeitet haben, das eine im Browser integrierte API oder ein JavaScript-Objekt verwendet, haben wir Objekte verwendet, weil solche Funktionen genau mit den gleichen Arten von Objektstrukturen aufgebaut sind, die wir uns hier angesehen haben, wenn auch mit komplexeren als in unseren eigenen grundlegenden benutzerdefinierten Beispielen.

Wenn Sie also String-Methoden wie:

```js
myString.split(",");
```

verwendet haben, haben Sie eine Methode verwendet, die auf einem [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Objekt verfügbar ist. Jedes Mal, wenn Sie in Ihrem Code einen String erstellen, wird dieser String automatisch als Instanz von `String` erstellt und hat daher mehrere gebräuchliche Methoden und Eigenschaften zur Verfügung.

Als Sie das Document Object Model mit Zeilen wie dieser angesprochen haben:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

haben Sie Methoden verwendet, die auf einem [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar sind. Für jede geladene Webseite wird eine Instanz von `Document` erstellt, die `document` genannt wird und die gesamte Struktur, den Inhalt und andere Funktionen wie die URL der Seite repräsentiert. Auch hier bedeutet dies, dass es mehrere gebräuchliche Methoden und Eigenschaften zur Verfügung hat.

Gleiches gilt für praktisch jedes andere integrierte Objekt oder jede API, die Sie verwendet haben — [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und so weiter.

Beachten Sie, dass integrierte Objekte und APIs nicht immer automatisch Objektinstanzen erstellen. Zum Beispiel erfordert die [Notifications API](/de/docs/Web/API/Notifications_API) — die es modernen Browsern ermöglicht, Systembenachrichtigungen abzuschicken —, dass Sie für jede Benachrichtigung, die Sie abfeuern möchten, eine neue Objektinstanz mit dem Konstruktor instanziieren. Versuchen Sie, Folgendes in Ihrer JavaScript-Konsole einzugeben:

```js
const myNotification = new Notification("Hello!");
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Object_basics).

## Zusammenfassung

Sie sollten jetzt eine gute Vorstellung davon haben, wie man mit Objekten in JavaScript arbeitet — einschließlich der Erstellung eigener einfacher Objekte. Sie sollten auch schätzen, dass Objekte als Strukturen zum Speichern verwandter Daten und Funktionen sehr nützlich sind — wenn Sie versuchen würden, alle Eigenschaften und Methoden in unserem `person` Objekt als separate Variablen und Funktionen zu verfolgen, wäre es ineffizient und frustrierend, und wir würden das Risiko eingehen, mit anderen Variablen und Funktionen zu kollidieren, die dieselben Namen haben. Objekte ermöglichen es uns, die Informationen sicher in ihrem eigenen Paket zu sichern, außerhalb von Gefahr.

Im nächsten Artikel werden wir uns mit **DOM-Scripting** befassen, das eine große Menge grundlegender Browser-API-Funktionalität freischaltet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Image_gallery","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
