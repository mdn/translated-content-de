---
title: Objektorientierte Programmierung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das für viele Programmiersprachen, einschließlich Java und C++, grundlegend ist. In diesem Artikel geben wir einen Überblick über die Grundkonzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Vorerst beschreiben wir diese Konzepte ohne Bezug auf JavaScript im Besonderen, daher werden alle Beispiele in {{Glossary("Pseudocode", "Pseudocode")}} gegeben.

> [!NOTE]
> Um genau zu sein, die hier beschriebenen Merkmale gehören zu einem bestimmten Stil der OOP, der als **klassenbasiert** oder "klassisch" bezeichnet wird. Wenn Menschen von OOP sprechen, meinen sie im Allgemeinen diesen Typ.

Anschließend betrachten wir in JavaScript, wie Konstruktoren und die Prototypenkette sich auf diese OOP-Konzepte beziehen und wie sie sich unterscheiden. Im nächsten Artikel werden wir einige zusätzliche Funktionen von JavaScript untersuchen, die es einfacher machen, objektorientierte Programme zu implementieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierte JavaScript-Konzepte, die in vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Konzepte der objektorientierten Programmierung (OOP): Klassen, Instanzen, Vererbung und Kapselung.</li>
          <li>Wie diese OOP-Konzepte auf JavaScript angewendet werden und welche Unterschiede es zu einer Sprache wie Java oder C++ gibt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Die objektorientierte Programmierung geht davon aus, dass ein System als eine Sammlung von Objekten modelliert wird, wobei jedes Objekt einen bestimmten Aspekt des Systems repräsentiert. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt bietet eine öffentliche Schnittstelle zu anderen Code-Teilen, die es nutzen wollen, behält aber seinen eigenen privaten, internen Zustand bei; andere Teile des Systems müssen sich nicht darum kümmern, was im Inneren des Objekts passiert.

## Klassen und Instanzen

Wenn wir ein Problem in OOP in Bezug auf Objekte modellieren, erstellen wir abstrakte Definitionen, die die Arten von Objekten repräsentieren, die wir in unserem System haben möchten. Wenn wir beispielsweise eine Schule modellieren, möchten wir vielleicht Objekte haben, die Professoren repräsentieren. Jeder Professor hat einige gemeinsame Eigenschaften: Sie alle haben einen Namen und ein Fach, das sie unterrichten. Zusätzlich können alle Professoren bestimmte Dinge tun: Sie alle können eine Arbeit benoten und sich zu Beginn des Jahres ihren Schülern vorstellen.

Daher könnte `Professor` eine **Klasse** in unserem System sein. Die Definition der Klasse listet die Daten und Methoden auf, die jeder Professor hat.

In Pseudocode könnte eine `Professor`-Klasse so geschrieben werden:

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
- zwei Methoden: `grade()` zum Benoten einer Arbeit und `introduceSelf()` zur Vorstellung.

Eine Klasse alleine tut nichts: Sie ist eine Art Vorlage zur Erstellung von konkreten Objekten dieses Typs. Jeder konkrete Professor, den wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Prozess der Erstellung einer Instanz wird durch eine spezielle Funktion namens **Konstruktor** durchgeführt. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

In der Regel wird der Konstruktor als Teil der Klassendefinition ausgeschrieben, und er hat normalerweise denselben Namen wie die Klasse selbst:

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

Dieser Konstruktor nimmt zwei Parameter, sodass wir die Eigenschaften `name` und `teaches` initialisieren können, wenn wir einen neuen konkreten Professor erstellen.

Jetzt, da wir einen Konstruktor haben, können wir einige Professoren erstellen. Programmiersprachen verwenden oft das Schlüsselwort `new`, um zu signalisieren, dass ein Konstruktor aufgerufen wird.

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

Dies erstellt zwei Objekte, beide Instanzen der `Professor`-Klasse.

## Vererbung

Angenommen, in unserer Schule möchten wir auch Schüler repräsentieren. Im Gegensatz zu Professoren können Schüler keine Arbeiten benoten, unterrichten kein bestimmtes Fach und gehören zu einem bestimmten Jahrgang.

Allerdings haben Schüler einen Namen und möchten sich vielleicht auch vorstellen, daher könnten wir die Definition einer Schülerklasse so schreiben:

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

Es wäre hilfreich, wenn wir darstellen könnten, dass Schüler und Professoren einige Eigenschaften teilen oder, genauer gesagt, dass sie auf irgendeiner Ebene _die gleiche Art von Sache_ sind. **Vererbung** ermöglicht es uns, dies zu tun.

Wir beginnen mit der Beobachtung, dass sowohl Schüler als auch Professoren Menschen sind und Menschen Namen haben und sich vorstellen möchten. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen definieren. Dann können `Professor` und `Student` beide von `Person` **ableiten**, indem sie ihre zusätzlichen Eigenschaften hinzufügen:

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

In diesem Fall würden wir sagen, dass `Person` die **Superklasse** oder **Elternklasse** von sowohl `Professor` als auch `Student` ist. Im Gegenzug sind `Professor` und `Student` **Unterklassen** oder **Kindklassen** von `Person`.

Sie werden feststellen, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass, obwohl alle Menschen sich vorstellen möchten, sie dies auf unterschiedliche Weise tun:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

Wir könnten eine Standardimplementierung von `introduceSelf()` für Menschen haben, die weder Schüler noch Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

Dieses Merkmal - wenn eine Methode denselben Namen hat, aber eine andere Implementierung in verschiedenen Klassen - wird **Polymorphismus** genannt. Wenn eine Methode in einer Unterklasse die Implementierung der Superklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Superklasse **überschreibt**.

## Kapselung

Objekte bieten eine Schnittstelle zu anderem Code, der sie nutzen möchte, aber bewahren ihren eigenen internen Zustand. Der interne Zustand des Objekts wird **privat** gehalten, was bedeutet, dass er nur von den eigenen Methoden des Objekts und nicht von anderen Objekten aus zugegriffen werden kann. Den internen Zustand eines Objekts privat zu halten und allgemein eine klare Abgrenzung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand zu machen, wird als **Kapselung** bezeichnet.

Dies ist ein nützliches Merkmal, da es dem Programmierer ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne den gesamten Code finden und aktualisieren zu müssen, der es verwendet: Es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Angenommen, Schüler dürfen Bogenschießen studieren, wenn sie im zweiten Jahr oder höher sind. Wir könnten dies einfach umsetzen, indem wir die `year`-Eigenschaft des Schülers offenlegen und anderer Code diese prüfen kann, um zu entscheiden, ob der Schüler den Kurs belegen kann:

```js
if (student.year > 1) {
  // allow the student into the class
}
```

Das Problem ist, wenn wir die Kriterien ändern wollen, nach denen Schüler Bogenschießen studieren dürfen - zum Beispiel indem auch die Erlaubnis der Eltern oder Erziehungsberechtigten erforderlich ist - müssten wir jeden Ort in unserem System aktualisieren, der diesen Test durchführt. Es wäre besser, eine `canStudyArchery()`-Methode auf `Student`-Objekten zu haben, die die Logik an einer Stelle implementiert:

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

Auf diese Weise müssen wir, wenn wir die Regeln über das Studieren von Bogenschießen ändern möchten, nur die `Student`-Klasse aktualisieren, und der gesamte Code, der sie verwendet, wird weiterhin funktionieren.

In vielen OOP-Sprachen können wir anderen Code daran hindern, auf den internen Zustand eines Objekts zuzugreifen, indem wir einige Eigenschaften als `private` kennzeichnen. Dies erzeugt einen Fehler, wenn Code außerhalb des Objekts versucht, auf sie zuzugreifen:

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

In Sprachen, die keinen Zugriff wie diesen erzwingen, verwenden Programmierer Namenskonventionen, wie das Voranstellen des Namens mit einem Unterstrich, um anzuzeigen, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige der grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben, wie sie in Sprachen wie Java und C++ implementiert sind.

In den beiden vorherigen Artikeln haben wir uns einige der Kernfunktionen von JavaScript angesehen: [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics) und [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes). Diese Funktionen haben sicherlich einige Beziehungen zu einigen der oben beschriebenen OOP-Konzepte.

- **Konstruktoren** in JavaScript bieten uns etwas Ähnliches wie eine Klassendefinition, die es uns ermöglicht, die "Form" eines Objekts, einschließlich aller darin enthaltenen Methoden, an einem Ort zu definieren. Aber Prototypen können hier auch verwendet werden. Wenn zum Beispiel eine Methode in der `prototype`-Eigenschaft eines Konstruktors definiert wird, dann erhalten alle mit diesem Konstruktor erstellten Objekte diese Methode über ihren Prototyp, und wir müssen sie nicht im Konstruktor definieren.

- **die Prototypenkette** erscheint als natürlicher Weg, um Vererbung zu implementieren. Wenn wir beispielsweise ein `Student`-Objekt haben können, dessen Prototyp `Person` ist, dann kann es `name` erben und `introduceSelf()` überschreiben.

Es ist jedoch wichtig, die Unterschiede zwischen diesen Funktionen und den oben beschriebenen "klassischen" OOP-Konzepten zu verstehen. Wir werden hier einige davon hervorheben.

Erstens, in klassenbasierter OOP sind Klassen und Objekte zwei separate Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es eine Unterscheidung zwischen dem Merkmal, mit dem eine Klasse definiert wird (der Klassensyntax selbst) und dem Merkmal, mit dem ein Objekt instanziiert wird (ein Konstruktor). In JavaScript können wir Objekte jedoch oft ohne separate Klassendefinition erstellen, entweder mithilfe einer Funktion oder eines Objektliterals. Dies kann die Arbeit mit Objekten viel leichter machen als in klassischer OOP.

Zweitens, obwohl eine Prototypenkette wie eine Vererbungshierarchie aussieht und sich in einigen Aspekten so verhält, ist sie in anderen unterschiedlich. Wenn eine Unterklasse instanziiert wird, wird ein einzelnes Objekt erstellt, das die in der Unterklasse definierten Eigenschaften mit den weiter oben in der Hierarchie definierten Eigenschaften kombiniert. Bei der Prototypierung wird jede Ebene der Hierarchie durch ein separates Objekt dargestellt, und diese sind über die `__proto__`-Eigenschaft miteinander verbunden. Das Verhalten der Prototypenkette ähnelt eher **Delegation** als Vererbung. Delegation ist ein Programmiermuster, bei dem ein Objekt, wenn es aufgefordert wird, eine Aufgabe zu erfüllen, die Aufgabe selbst erledigen kann oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe in seinem Namen zu erledigen. In vielen Aspekten ist Delegation eine flexiblere Möglichkeit, Objekte zu kombinieren, als Vererbung (unter anderem kann der Delegat zur Laufzeit geändert oder vollständig ersetzt werden).

Das heißt, Konstruktoren und Prototypen können verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Aber sie direkt zu benutzen, um Funktionen wie Vererbung zu implementieren, ist schwierig, daher bietet JavaScript zusätzliche Funktionen, die über das Prototypmodell hinausgehen und direkter auf die Konzepte der klassenbasierten OOP abzielen. Diese zusätzlichen Funktionen sind Gegenstand des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz betrachtet, wie JavaScript-Konstruktoren und -Prototypen mit diesen Konzepten verglichen werden.

Im nächsten Artikel werden wir die Features untersuchen, die JavaScript bietet, um klassenbasierte objektorientierte Programmierung zu unterstützen.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
