---
title: Objektorientierte Programmierung
slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

Objektorientierte Programmierung (OOP) ist ein Programmierparadigma, welches grundlegend für viele Programmiersprachen ist, darunter Java und C++. In diesem Artikel geben wir einen Überblick über die grundlegenden Konzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Vorerst beschreiben wir diese Konzepte ohne speziellen Bezug auf JavaScript, sodass alle Beispiele im [Pseudocode](/de/docs/Glossary/Pseudocode) angegeben sind.

> [!NOTE]
> Präzise gesagt, die hier beschriebenen Merkmale sind von einer bestimmten Art der OOP, die als **klassenbasiert** oder "klassisch" bezeichnet wird. Wenn von OOP die Rede ist, ist in der Regel dieser Typ gemeint.

Nachfolgend werden wir in JavaScript betrachten, wie Konstruktoren und die Prototypenkette zu diesen OOP-Konzepten in Beziehung stehen und wie sie sich unterscheiden. Im nächsten Artikel werden wir einige zusätzliche Merkmale von JavaScript betrachten, die es einfacher machen, objektorientierte Programme zu implementieren.

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
        >), und Kenntnis der OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        > und <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte der klassenbasierten objektorientierten Programmierung zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

Objektorientierte Programmierung befasst sich mit der Modellierung eines Systems als Sammlung von Objekten, wobei jedes Objekt einen bestimmten Aspekt des Systems repräsentiert. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt bietet eine öffentliche Schnittstelle für anderen Code, der es verwenden möchte, behält jedoch seinen eigenen privaten, internen Zustand bei; andere Teile des Systems müssen sich nicht darum kümmern, was im Inneren des Objekts vor sich geht.

## Klassen und Instanzen

Wenn wir ein Problem in Bezug auf Objekte in der OOP modellieren, erschaffen wir abstrakte Definitionen, die die Arten von Objekten repräsentieren, die wir in unserem System haben möchten. Angenommen, wir modellieren eine Schule, könnten wir Objekte haben wollen, die Professoren repräsentieren. Jeder Professor hat einige gemeinsame Eigenschaften: Sie alle haben einen Namen und ein Fach, das sie unterrichten. Außerdem können alle Professoren bestimmte Dinge tun: Sie können beispielsweise alle eine Arbeit benoten und sich zu Beginn des Jahres ihren Studenten vorstellen.

Also könnte `Professor` eine **Klasse** in unserem System sein. Die Definition der Klasse listet die Daten und Methoden auf, die jeder Professor hat.

Im Pseudocode könnte eine `Professor`-Klasse so geschrieben werden:

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

- zwei Dateneigenschaften: `name` und `teaches`
- zwei Methoden: `grade()` zum Benoten einer Arbeit und `introduceSelf()` um sich selbst vorzustellen.

Allein für sich genommen tut eine Klasse nichts: Sie ist eine Art Vorlage zur Erstellung konkreter Objekte dieses Typs. Jeder konkrete Professor, den wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Prozess der Erstellung einer Instanz wird von einer speziellen Funktion namens **Konstruktor** durchgeführt. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

Im Allgemeinen wird der Konstruktor als Teil der Klassendefinition ausgeschrieben und hat üblicherweise denselben Namen wie die Klasse selbst:

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

Dieser Konstruktor nimmt zwei Parameter an, sodass wir die Eigenschaften `name` und `teaches` initialisieren können, wenn wir einen neuen konkreten Professor erstellen.

Jetzt, da wir einen Konstruktor haben, können wir einige Professoren erstellen. Programmiersprachen verwenden oft das Schlüsselwort `new`, um anzuzeigen, dass ein Konstruktor aufgerufen wird.

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

Das erstellt zwei Objekte, beide Instanzen der `Professor`-Klasse.

## Vererbung

Angenommen, in unserer Schule möchten wir auch Studenten darstellen. Im Gegensatz zu Professoren können Studenten keine Arbeiten benoten, unterrichten kein bestimmtes Fach und gehören einem bestimmten Jahrgang an.

Jedoch haben Studenten auch einen Namen und möchten sich vielleicht ebenfalls vorstellen, sodass wir die Definition einer Studentenklasse so ausschreiben könnten:

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

Es wäre hilfreich, wenn wir darstellen könnten, dass Studenten und Professoren einige Eigenschaften teilen, oder genauer gesagt, dass sie auf irgendeiner Ebene _die gleiche Art von Dingen_ sind. **Vererbung** erlaubt es uns, dies zu tun.

Wir fangen damit an zu beobachten, dass Studenten und Professoren beide Menschen sind, und Menschen haben Namen und möchten sich vorstellen. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen bestimmen. Dann können `Professor` und `Student` beide von `Person` **ableiten**, indem sie ihre zusätzlichen Eigenschaften hinzufügen:

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

In diesem Fall würden wir sagen, dass `Person` die **Superklasse** oder **Elternklasse** von sowohl `Professor` als auch `Student` ist. Umgekehrt sind `Professor` und `Student` **Unterklassen** oder **Kindklassen** von `Person`.

Vielleicht ist Ihnen aufgefallen, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass zwar alle Menschen sich vorstellen möchten, aber auf unterschiedliche Weise:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

Wir könnten eine Standardimplementierung von `introduceSelf()` für Menschen haben, die weder Studenten noch Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

Dieses Merkmal – wenn eine Methode denselben Namen hat, aber in verschiedenen Klassen eine andere Implementierung – wird als **Polymorphie** bezeichnet. Wenn eine Methode in einer Unterklasse die Implementierung der Oberklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Oberklasse **überschreibt**.

## Kapselung

Objekte bieten eine Schnittstelle für anderen Code, der sie verwenden möchte, bewahren jedoch ihren eigenen internen Zustand. Der interne Zustand des Objekts wird **privat** gehalten, was bedeutet, dass er nur von den eigenen Methoden des Objekts und nicht von anderen Objekten zugegriffen werden kann. Die Kapselung eines Objekts interner Zustand und die klare Trennung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand wird als **Kapselung** bezeichnet.

Dies ist ein nützliches Feature, weil es Programmierern ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne alle Codes, die es verwenden, finden und aktualisieren zu müssen: Es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Zum Beispiel: Angenommen, Studenten dürfen Bogenschießen lernen, wenn sie im zweiten Jahr oder darüber sind. Wir könnten dies einfach implementieren, indem wir die Eigenschaft `year` des Studenten freigeben, und anderer Code könnte diese zur Entscheidungsfindung verwenden, ob der Student den Kurs belegen kann:

```js
if (student.year > 1) {
  // allow the student into the class
}
```

Das Problem ist, wenn wir die Kriterien ändern müssten, um Studenten Bogenschießen zu erlauben – zum Beispiel, indem zusätzlich die Erlaubnis der Eltern oder Vormunde gefordert wird – müssten wir alle Stellen in unserem System aktualisieren, die diesen Test durchführen. Besser wäre es, eine `canStudyArchery()` Methode auf `Student`-Objekten zu haben, die die Logik an einer Stelle implementiert:

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
  // allow the student into the class
}
```

Auf diese Weise müssen wir, wenn wir die Regeln für das Studieren von Bogenschießen ändern möchten, nur die `Student`-Klasse aktualisieren und der gesamte Code, der sie verwendet, wird weiterhin funktionieren.

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
student.year // error: 'year' is a private property of Student
```

In Sprachen, die keinen Zugriff wie diesen erzwingen, verwenden Programmierer Namenskonventionen, wie zum Beispiel das Voranstellen eines Unterstrichs, um anzugeben, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige der grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben, wie sie in Sprachen wie Java und C++ implementiert werden.

In den beiden vorherigen Artikeln haben wir einige Kernfunktionen von JavaScript angesehen: [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics) und [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes). Diese Funktionen haben sicherlich eine gewisse Beziehung zu einigen der oben beschriebenen OOP-Konzepte.

- **Konstruktoren** in JavaScript bieten uns etwas, das einer Klassendefinition ähnelt, indem sie uns ermöglichen, die "Form" eines Objekts, einschließlich aller darin enthaltenen Methoden, an einer Stelle zu definieren. Aber auch Prototypen können hier verwendet werden. Wenn beispielsweise eine Methode in der `prototype`-Eigenschaft eines Konstruktors definiert wird, dann erhalten alle mit diesem Konstruktor erstellten Objekte diese Methode über ihren Prototypen und wir müssen sie nicht im Konstruktor definieren.

- **Die Prototypkette** scheint eine natürliche Methode zur Implementierung der Vererbung zu sein. Wenn wir beispielsweise ein `Student`-Objekt haben können, dessen Prototyp `Person` ist, dann kann es `name` erben und `introduceSelf()` überschreiben.

Aber es ist wichtig, die Unterschiede zwischen diesen Funktionen und den oben beschriebenen "klassischen" OOP-Konzepten zu verstehen. Wir werden hier einige von ihnen hervorheben.

Erstens sind in der klassenbasierten OOP Klassen und Objekte zwei getrennte Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es einen Unterschied zwischen dem Merkmal, mit dem eine Klasse definiert wird (die Klassensyntax selbst), und dem Merkmal, mit dem ein Objekt instanziiert wird (ein Konstruktor). In JavaScript können und tun wir es oft, Objekte ohne separate Klassendefinition zu erstellen, entweder durch Verwendung einer Funktion oder eines Objektliterals. Dies kann es viel einfacher machen, mit Objekten zu arbeiten, als es in der klassischen OOP der Fall ist.

Zweitens, obwohl eine Prototypkette wie eine Vererbungshierarchie aussieht und sich in manchen Punkten so verhält, unterscheidet sie sich in anderen. Wenn eine Unterklasse instanziiert wird, wird ein einzelnes Objekt erstellt, das Eigenschaften kombiniert, die in der Unterklasse mit Eigenschaften definiert sind, die weiter oben in der Hierarchie definiert sind. Bei der Prototypisierung wird jede Ebene der Hierarchie durch ein separates Objekt dargestellt, und sie sind über die `__proto__`-Eigenschaft miteinander verbunden. Das Verhalten der Prototypkette ist weniger wie Vererbung und mehr wie **Delegation**. Delegation ist ein Programmiermuster, bei dem ein Objekt, wenn es gebeten wird, eine Aufgabe zu erledigen, die Aufgabe entweder selbst ausführen oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe in seinem Namen auszuführen. In vielerlei Hinsicht ist Delegation eine flexiblere Methode zur Kombination von Objekten als Vererbung (zum einen ist es möglich, den Delegaten zur Laufzeit zu ändern oder vollständig zu ersetzen).

Dennoch können Konstruktoren und Prototypen verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Aber sie direkt zu verwenden, um Funktionen wie Vererbung zu implementieren, ist knifflig, daher bietet JavaScript zusätzliche Funktionen, die auf dem Prototypmodell aufgebaut sind und direkter den Konzepten der klassenbasierten OOP entsprechen. Diese zusätzlichen Funktionen sind Gegenstand des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz darauf eingegangen, wie JavaScript-Konstruktoren und -Prototypen mit diesen Konzepten verglichen werden.

Im nächsten Artikel werden wir uns die Funktionen ansehen, die JavaScript bereitstellt, um klassenbasierte objektorientierte Programmierung zu unterstützen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
