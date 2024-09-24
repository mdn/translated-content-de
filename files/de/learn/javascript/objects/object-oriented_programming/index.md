---
title: Objektorientierte Programmierung
slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

Die objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das in vielen Programmiersprachen, einschließlich Java und C++, grundlegend ist. In diesem Artikel geben wir einen Überblick über die grundlegenden Konzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Vorläufig beschreiben wir diese Konzepte ohne Bezugnahme auf JavaScript im Besonderen, daher werden alle Beispiele in {{Glossary("Pseudocode", "Pseudocode")}} gegeben.

> [!NOTE]
> Genau genommen handelt es sich bei den hier beschriebenen Merkmalen um einen bestimmten Stil der OOP, genannt **klassenbasiert** oder "klassische" OOP. Wenn man von OOP spricht, ist dies allgemein die Form, die gemeint ist.

Anschließend werden wir in JavaScript untersuchen, wie Konstruktoren und die Prototypenkette mit diesen OOP-Konzepten in Beziehung stehen und wie sie sich unterscheiden. Im nächsten Artikel schauen wir uns einige zusätzliche JavaScript-Features an, die es einfacher machen, objektorientierte Programme zu implementieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Verständnis von JavaScript-Funktionen, Vertrautheit mit den Grundlagen von JavaScript
        (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung zu Objekten</a
        > und <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objekt-Prototypen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Verständnis von klassenbasierter objektorientierter Programmierung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

Objektorientierte Programmierung befasst sich mit der Modellierung eines Systems als eine Sammlung von Objekten, wobei jedes Objekt einen bestimmten Aspekt des Systems darstellt. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt bietet eine öffentliche Schnittstelle für anderen Code, der es verwenden möchte, bewahrt aber seinen eigenen privaten, internen Zustand; andere Teile des Systems müssen sich nicht darum kümmern, was innerhalb des Objekts vor sich geht.

## Klassen und Instanzen

Wenn wir in der OOP ein Problem im Hinblick auf Objekte modellieren, erstellen wir abstrakte Definitionen, die die Arten von Objekten darstellen, die wir in unserem System haben möchten. Wenn wir beispielsweise eine Schule modellieren, könnten wir Objekte haben wollen, die Professoren darstellen. Jeder Professor hat einige gemeinsame Eigenschaften: Sie alle haben einen Namen und ein Fach, das sie unterrichten. Außerdem können alle Professoren bestimmte Dinge tun: Sie alle können zum Beispiel eine Arbeit bewerten und sich zu Beginn des Jahres ihren Studenten vorstellen.

`Professor` könnte also eine **Klasse** in unserem System sein. Die Definition der Klasse listet die Daten und Methoden auf, die jeder Professor hat.

In Pseudocode könnte eine `Professor`-Klasse folgendermaßen geschrieben werden:

```plain
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()
```

Dies definiert eine `Professor`-Klasse mit:

- zwei Daten-Eigenschaften: `name` und `teaches`
- zwei Methoden: `grade()` zur Bewertung einer Arbeit und `introduceSelf()` zur Selbstvorstellung.

Allein eine Klasse tut nichts: Sie ist eine Art Vorlage zum Erstellen konkreter Objekte dieses Typs. Jedes konkrete Beispiel eines Professors, das wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Vorgang des Erstellens einer Instanz wird von einer speziellen Funktion namens **Konstruktor** durchgeführt. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

Generell wird der Konstruktor als Teil der Klassendefinition ausgeschrieben, und er hat normalerweise denselben Namen wie die Klasse selbst:

```plain
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
```

Dieser Konstruktor nimmt zwei Parameter entgegen, sodass wir die Eigenschaften `name` und `teaches` initialisieren können, wenn wir einen neuen konkreten Professor erstellen.

Nun, da wir einen Konstruktor haben, können wir einige Professoren erstellen. Programmiersprachen verwenden oft das Schlüsselwort `new`, um anzuzeigen, dass ein Konstruktor aufgerufen wird.

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'Mein Name ist Professor Walsh und ich werde Ihr Psychologie-Professor sein.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'Mein Name ist Professor Lillian und ich werde Ihr Poesie-Professor sein.'
```

Dies erstellt zwei Objekte, beide Instanzen der `Professor`-Klasse.

## Vererbung

Angenommen, wir möchten auch Schüler an unserer Schule darstellen. Anders als Professoren können Schüler keine Arbeiten bewerten, unterrichten kein bestimmtes Fach und gehören zu einem bestimmten Jahrgang.

Schüler haben jedoch einen Namen und möchten sich möglicherweise ebenfalls vorstellen, also könnten wir die Definition einer Schülerklasse so aufschreiben:

```plain
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

Es wäre hilfreich, wenn wir darstellen könnten, dass Schüler und Professoren einige Eigenschaften teilen, oder genauer gesagt, dass sie auf irgendeine Ebene dasselbe sind. **Vererbung** ermöglicht dies.

Wir beginnen mit der Beobachtung, dass Schüler und Professoren beide Menschen sind und Menschen Namen haben und sich vorstellen möchten. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen definieren. Dann können sowohl `Professor` als auch `Student` von `Person` **ableiten** und ihre zusätzlichen Eigenschaften hinzufügen:

```plain
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

In diesem Fall würden wir sagen, dass `Person` die **Superklasse** oder **Elternklasse** sowohl von `Professor` als auch `Student` ist. Im Gegensatz dazu sind `Professor` und `Student` **Unterklassen** oder **Kinderklassen** von `Person`.

Vielleicht fällt Ihnen auf, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass sich zwar alle Menschen vorstellen möchten, dies aber auf unterschiedliche Weise tun:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'Mein Name ist Professor Walsh und ich werde Ihr Psychologie-Professor sein.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'Mein Name ist Summers und ich bin im ersten Jahrgang.'
```

Wir könnten eine Standardimplementierung von `introduceSelf()` für Personen haben, die weder Schüler _noch_ Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'Mein Name ist Pratt.'
```

Dieses Merkmal - wenn eine Methode denselben Namen hat, aber in verschiedenen Klassen unterschiedlich implementiert ist - wird **Polymorphismus** genannt. Wenn eine Methode in einer Unterklasse die Implementierung der Oberklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Oberklasse **überschreibt**.

## Kapselung

Objekte bieten eine Schnittstelle zu anderem Code, der sie verwenden möchte, bewahren jedoch ihren eigenen internen Zustand. Der interne Zustand des Objekts bleibt **privat**, was bedeutet, dass er nur durch die eigenen Methoden des Objekts und nicht von anderen Objekten zugänglich ist. Die Kapselung des internen Zustands eines Objekts und die klare Trennung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand wird als **Kapselung** bezeichnet.

Dies ist ein nützliches Merkmal, weil es dem Programmierer ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne alle den Code zu finden und zu aktualisieren, der es verwendet: es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Zum Beispiel, angenommen, Schüler dürfen Bogenschießen lernen, wenn sie im zweiten Jahr oder darüber sind. Wir könnten dies einfach implementieren, indem wir die `year`-Eigenschaft eines Schülers exponieren, und anderer Code könnte dies überprüfen, um zu entscheiden, ob der Schüler den Kurs belegen kann:

```js
if (student.year > 1) {
  // den Schüler in den Kurs aufnehmen
}
```

Das Problem ist, wenn wir die Kriterien ändern, um Schülern das Bogenschießen zu ermöglichen - z.B. indem wir auch die Erlaubnis der Eltern oder eines Vormunds verlangen - müssten wir jeden Ort in unserem System aktualisieren, der diesen Test durchführt. Es wäre besser, eine `canStudyArchery()`-Methode für `Student`-Objekte zu haben, die die Logik an einem Ort implementiert:

```plain
class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
```

```js
if (student.canStudyArchery()) {
  // den Schüler in den Kurs aufnehmen
}
```

Auf diese Weise müssen wir, wenn wir die Regeln für das Bogenschießen ändern wollen, nur die `Student`-Klasse aktualisieren, und der gesamte Code, der sie verwendet, wird weiterhin funktionieren.

In vielen OOP-Sprachen können wir verhindern, dass anderer Code auf den internen Zustand eines Objekts zugreift, indem wir einige Eigenschaften als `private` markieren. Dies wird einen Fehler erzeugen, wenn Code außerhalb des Objekts versucht, darauf zuzugreifen:

```plain
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // Fehler: 'year' ist eine private Eigenschaft von Student
```

In Sprachen, die den Zugriff nicht so erzwingen, verwenden Programmierer Namenskonventionen, wie z.B. das Beginn des Namens mit einem Unterstrich, um anzuzeigen, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige der grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben, wie sie in Sprachen wie Java und C++ implementiert ist.

In den beiden vorangegangenen Artikeln haben wir einige Kernmerkmale von JavaScript untersucht: [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics) und [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes). Diese Merkmale haben sicherlich in gewisser Weise mit einigen der oben beschriebenen OOP-Konzepte zu tun.

- **Konstruktoren** in JavaScript bieten uns etwas Ähnliches wie eine Klassendefinition, die es uns ermöglicht, den "Aufbau" eines Objekts, einschließlich aller darin enthaltenen Methoden, an einem einzigen Ort zu definieren. Aber Prototypen können auch hier verwendet werden. Wenn eine Methode beispielsweise auf der `prototype`-Eigenschaft eines Konstruktors definiert ist, dann erhalten alle mit diesem Konstruktor erstellten Objekte diese Methode über ihr Prototyp, und wir müssen sie nicht im Konstruktor definieren.

- **Die Prototypenkette** erscheint wie eine natürliche Art, Vererbung zu implementieren. Wenn wir beispielsweise ein `Student`-Objekt haben könnten, dessen Prototyp `Person` ist, dann kann es `name` erben und `introduceSelf()` überschreiben.

Aber es ist wichtig, die Unterschiede zwischen diesen Merkmalen und den oben beschriebenen "klassischen" OOP-Konzepten zu verstehen. Wir heben hier einige davon hervor.

Erstens sind in klassenbasierter OOP Klassen und Objekte zwei separate Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es einen Unterschied zwischen dem Feature, das zur Definition einer Klasse verwendet wird (die Klassensyntax selbst) und dem Feature, das zur Instanziierung eines Objekts verwendet wird (ein Konstruktor). In JavaScript können und erstellen wir oft Objekte ohne eine separate Klassendefinition, entweder mit einer Funktion oder einem Objektliteral. Dies kann die Arbeit mit Objekten viel leichter machen als in der klassischen OOP.

Zweitens sieht eine Prototypenkette zwar wie eine Vererbungshierarchie aus und verhält sich in mancher Hinsicht ähnlich, ist jedoch in anderen unterschiedlich. Wenn eine Unterklasse instanziiert wird, wird ein einziges Objekt erstellt, das Eigenschaften enthält, die in der Unterklasse definiert sind, sowie Eigenschaften, die weiter oben in der Hierarchie definiert sind. Mit der Prototypenbildung wird jede Hierarchieebene durch ein separates Objekt repräsentiert, und diese sind über die `__proto__`-Eigenschaft miteinander verbunden. Das Verhalten der Prototypenkette ist weniger wie Vererbung und mehr wie **Delegation**. Delegation ist ein Programmiermuster, bei dem ein Objekt, wenn es aufgefordert wird, eine Aufgabe auszuführen, die Aufgabe entweder selbst durchführen oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe für es durchzuführen. In vielerlei Hinsicht ist die Delegation eine flexiblere Möglichkeit, Objekte zu kombinieren, als die Vererbung (z.B. ist es möglich, den Delegierten zur Laufzeit zu ändern oder vollständig zu ersetzen).

Das gesagt, Konstruktoren und Prototypen können verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Aber sie direkt zu verwenden, um Merkmale wie Vererbung zu implementieren, ist knifflig, daher bietet JavaScript zusätzliche Features, die über das Prototypenmodell gelegt werden, um mehr direkt auf die Konzepte der klassenbasierten OOP abzubilden. Diese zusätzlichen Features sind das Thema des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz untersucht, wie JavaScript-Konstruktoren und -Prototypen mit diesen Konzepten vergleichen.

Im nächsten Artikel werden wir uns die Features ansehen, die JavaScript zur Unterstützung der klassenbasierten objektorientierten Programmierung bietet.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
