---
title: Objektorientierte Programmierung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Die objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das grundlegend für viele Programmiersprachen ist, darunter Java und C++. In diesem Artikel geben wir einen Überblick über die grundlegenden Konzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Zurzeit beschreiben wir diese Konzepte ohne besonderen Bezug auf JavaScript, sodass alle Beispiele in {{Glossary("Pseudocode", "Pseudocode")}} gegeben sind.

> [!NOTE]
> Genau genommen sind die hier beschriebenen Merkmale ein bestimmter Stil der OOP, genannt **klassenbasierte** oder "klassische" OOP. Wenn von OOP gesprochen wird, ist dies in der Regel der Typ, der gemeint ist.

Danach betrachten wir in JavaScript, wie Konstruktoren und die Prototypkette sich auf diese OOP-Konzepte beziehen und wie sie sich unterscheiden. Im nächsten Artikel werden wir einige zusätzliche Funktionen von JavaScript betrachten, die es erleichtern, objektorientierte Programme zu implementieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objekt-Grundlagen</a>) und objektorientierten JavaScript-Konzepten, die in früheren Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Konzepte der objektorientierten Programmierung (OOP): Klassen, Instanzen, Vererbung und Kapselung.</li>
          <li>Wie diese OOP-Konzepte in JavaScript angewendet werden und welche Unterschiede es zu einer Sprache wie Java oder C++ gibt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Die objektorientierte Programmierung dreht sich darum, ein System als eine Sammlung von Objekten zu modellieren, wobei jedes Objekt einen bestimmten Aspekt des Systems darstellt. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt stellt eine öffentliche Schnittstelle für anderen Code bereit, der es verwenden möchte, bewahrt jedoch seinen eigenen privaten, internen Zustand; andere Teile des Systems müssen sich nicht darum kümmern, was im Inneren des Objekts vor sich geht.

## Klassen und Instanzen

Wenn wir ein Problem in Bezug auf Objekte in der OOP modellieren, erstellen wir abstrakte Definitionen, die die Arten von Objekten repräsentieren, die wir in unserem System haben möchten. Wenn wir zum Beispiel eine Schule modellieren würden, könnten wir Objekte haben wollen, die Professoren repräsentieren. Jeder Professor hat einige gemeinsame Eigenschaften: Alle haben einen Namen und ein Fach, das sie unterrichten. Außerdem können alle Professoren bestimmte Dinge tun: Sie können ein Papier bewerten und sich zu Beginn des Jahres ihren Studierenden vorstellen, zum Beispiel.

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
- zwei Methoden: `grade()`, um ein Papier zu bewerten und `introduceSelf()`, um sich vorzustellen.

An sich tut eine Klasse nichts: Sie ist eine Art Vorlage zur Erstellung konkreter Objekte dieses Typs. Jeder konkrete Professor, den wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Vorgang der Erstellung einer Instanz wird von einer speziellen Funktion durchgeführt, die als **Konstruktor** bezeichnet wird. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

Im Allgemeinen wird der Konstruktor als Teil der Klassendefinition ausgeschrieben und hat normalerweise denselben Namen wie die Klasse selbst:

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
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

Dies erstellt zwei Objekte, beide Instanzen der `Professor`-Klasse.

## Vererbung

Angenommen, wir möchten in unserer Schule auch Studierende darstellen. Im Gegensatz zu Professoren können Studierende keine Papiere bewerten, lehren kein bestimmtes Fach und gehören einem bestimmten Jahr an.

Jedoch haben Studierende einen Namen und wollen sich möglicherweise auch vorstellen, also könnten wir die Definition einer Student\*innenklasse folgendermaßen schreiben:

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

Es wäre hilfreich, wenn wir darstellen könnten, dass Studierende und Professoren einige Eigenschaften teilen oder genauer gesagt, dass sie auf irgendeiner Ebene _dieselbe Art von Ding_ sind. **Vererbung** lässt uns dies tun.

Wir beginnen damit zu beobachten, dass Studierende und Professoren beide Menschen sind und Menschen Namen haben und sich vorstellen wollen. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen definieren. Dann können `Professor` und `Student` beide von `Person` **ableiten**, indem sie ihre zusätzlichen Eigenschaften hinzufügen:

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

Sie könnten bemerken, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass, obwohl alle Menschen sich vorstellen wollen, die Art und Weise, wie sie es tun, unterschiedlich ist:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

Wir könnten eine Standardimplementation von `introduceSelf()` für Menschen haben, die weder Studierende _noch_ Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

Dieses Merkmal - wenn eine Methode denselben Namen, aber eine unterschiedliche Implementierung in verschiedenen Klassen hat - wird **Polymorphismus** genannt. Wenn eine Methode in einer Unterklasse die Implementation der Superklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Superklasse **überschreibt**.

## Kapselung

Objekte bieten eine Schnittstelle zu anderem Code, der sie verwenden möchte, halten aber ihren eigenen internen Zustand aufrecht. Der interne Zustand des Objekts wird **privat** gehalten, was bedeutet, dass er nur von den eigenen Methoden des Objekts und nicht von anderen Objekten aus zugänglich ist. Den internen Zustand eines Objekts privat zu halten und im Allgemeinen eine klare Trennung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand zu machen, wird als **Kapselung** bezeichnet.

Dies ist ein nützliches Merkmal, da es dem Programmierer ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne den gesamten Code, der es verwendet, finden und aktualisieren zu müssen: Es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Zum Beispiel, angenommen, Studierende dürfen Bogenschießen lernen, wenn sie im zweiten Jahr oder höher sind. Wir könnten dies einfach implementieren, indem wir die Eigenschaft `year` der Studierenden offenlegen, und anderer Code könnte dies prüfen, um zu entscheiden, ob die Studierenden den Kurs besuchen können:

```js
if (student.year > 1) {
  // allow the student into the class
}
```

Das Problem ist, wenn wir uns entscheiden, die Kriterien dafür zu ändern, dass Studierende Bogenschießen lernen dürfen - zum Beispiel, indem wir zusätzlich die Erlaubnis der Eltern oder des Vormunds verlangen - müssten wir jeden Ort in unserem System aktualisieren, an dem dieser Test durchgeführt wird. Es wäre besser, eine `canStudyArchery()`-Methode für `Student`-Objekte zu haben, die die Logik an einem Ort implementiert:

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

Auf diese Weise, wenn wir die Regeln für das Studium des Bogenschießens ändern möchten, müssen wir nur die `Student`-Klasse aktualisieren, und der gesamte Code, der sie verwendet, wird weiterhin funktionieren.

In vielen OOP-Sprachen können wir andere Codes daran hindern, auf den internen Zustand eines Objekts zuzugreifen, indem wir einige Eigenschaften als `private` markieren. Dies erzeugt einen Fehler, wenn Code außerhalb des Objekts versucht, darauf zuzugreifen:

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

In Sprachen, die keinen solchen Zugriff erzwingen, verwenden Programmierer Namenskonventionen, wie z. B. das Voranstellen eines Unterstrichs, um anzugeben, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige der grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben, wie sie in Sprachen wie Java und C++ implementiert ist.

In den beiden vorherigen Artikeln haben wir uns einige Kernfunktionen von JavaScript angesehen: [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics) und [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes). Diese Funktionen haben sicherlich eine Beziehung zu einigen der oben beschriebenen OOP-Konzepte.

- **Konstruktoren** in JavaScript bieten uns etwas Ähnliches wie eine Klassendefinition, die es uns ermöglicht, die "Gestalt" eines Objekts, einschließlich aller darin enthaltenen Methoden, an einem Ort zu definieren. Aber Prototypen können hier auch verwendet werden. Zum Beispiel, wenn eine Methode auf der `prototype`-Eigenschaft eines Konstruktors definiert ist, dann erhalten alle Objekte, die mit diesem Konstruktor erstellt werden, diese Methode über ihren Prototyp, und wir müssen sie nicht im Konstruktor definieren.

- **Die Prototypkette** scheint ein natürlicher Weg zu sein, um Vererbung zu implementieren. Wenn wir zum Beispiel ein `Student`-Objekt haben können, dessen Prototyp `Person` ist, dann kann es `name` erben und `introduceSelf()` überschreiben.

Aber es ist wichtig, die Unterschiede zwischen diesen Funktionen und den oben beschriebenen "klassischen" OOP-Konzepten zu verstehen. Wir werden hier einige davon hervorheben.

Erstens sind in klassenbasierter OOP Klassen und Objekte zwei separate Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es eine Unterscheidung zwischen der Funktion, die verwendet wird, um eine Klasse zu definieren (die Klassensyntax selbst) und der Funktion, die verwendet wird, um ein Objekt zu instanziieren (ein Konstruktor). In JavaScript können und tun wir oft Objekte ohne separate Klassendefinition erstellen, entweder mit einer Funktion oder einem Objektliteral. Dies kann die Arbeit mit Objekten viel leichter machen als in klassischer OOP.

Zweitens, obwohl eine Prototypkette wie eine Vererbungshierarchie aussieht und sich in gewisser Weise so verhält, ist sie in anderen Aspekten unterschiedlich. Wenn eine Unterklasse instanziiert wird, wird ein einziges Objekt erstellt, das Eigenschaften kombiniert, die in der Unterklasse definiert sind, mit Eigenschaften, die weiter oben in der Hierarchie definiert sind. Bei der Prototypisierung wird jede Ebene der Hierarchie durch ein separates Objekt dargestellt, und diese sind über die `__proto__`-Eigenschaft miteinander verknüpft. Das Verhalten der Prototypkette ist weniger wie Vererbung und mehr wie **Delegation**. Delegation ist ein Programmiermuster, bei dem ein Objekt, wenn es aufgefordert wird, eine Aufgabe auszuführen, die Aufgabe selbst ausführen kann oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe in seinem Namen auszuführen. In vielerlei Hinsicht ist die Delegation eine flexiblere Art, Objekte zu kombinieren, als die Vererbung (zum einen ist es möglich, den Delegierten zur Laufzeit zu ändern oder vollständig zu ersetzen).

Das gesagt, können Konstruktoren und Prototypen verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Aber sie direkt zur Implementierung von Funktionen wie Vererbung zu verwenden, ist schwierig, deshalb bietet JavaScript zusätzliche Funktionen, die auf dem Prototypmodell aufbauen und direkter auf die Konzepte der klassenbasierten OOP abbilden. Diese zusätzlichen Funktionen sind das Thema des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz betrachtet, wie JavaScript-Konstruktoren und -Prototypen mit diesen Konzepten verglichen werden.

Im nächsten Artikel werden wir die Funktionen betrachten, die JavaScript zur Unterstützung der klassenbasierten objektorientierten Programmierung bereitstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
