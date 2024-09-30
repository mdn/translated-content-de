---
title: Objektorientierte Programmierung
slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

Die objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das in vielen Programmiersprachen, einschließlich Java und C++, grundlegend ist. In diesem Artikel geben wir einen Überblick über die grundlegenden Konzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Vorerst beschreiben wir diese Konzepte ohne Bezug auf JavaScript im Speziellen, daher werden alle Beispiele in [Pseudocode](/de/docs/Glossary/Pseudocode) gegeben.

> [!NOTE]
> Genauer gesagt, die hier beschriebenen Merkmale sind Teil eines speziellen Stils der OOP, genannt **klassenbasiert** oder "klassisch" OOP. Wenn von OOP die Rede ist, ist dies im Allgemeinen der Typ, der gemeint ist.

Danach werden wir uns in JavaScript ansehen, wie Konstruktoren und die Prototypenkette mit diesen OOP-Konzepten in Verbindung stehen und wie sie sich unterscheiden. Im nächsten Artikel betrachten wir einige zusätzliche Funktionen von JavaScript, die es erleichtern, objektorientierte Programme zu implementieren.

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
        >), und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        > und <a href="/de/docs/Learn/JavaScript/Objects/Object_prototypes">Objektprototypen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte der klassenbasierten objektorientierten Programmierung.
      </td>
    </tr>
  </tbody>
</table>

Die objektorientierte Programmierung dreht sich darum, ein System als eine Sammlung von Objekten zu modellieren, wobei jedes Objekt einen bestimmten Aspekt des Systems repräsentiert. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt bietet eine öffentliche Schnittstelle für anderen Code, der es verwenden möchte, behält jedoch seinen eigenen privaten, internen Zustand bei; andere Teile des Systems müssen sich nicht darum kümmern, was innerhalb des Objekts vor sich geht.

## Klassen und Instanzen

Wenn wir ein Problem in Bezug auf Objekte in der OOP modellieren, erstellen wir abstrakte Definitionen, die die Arten von Objekten repräsentieren, die wir in unserem System haben möchten. Wenn wir beispielsweise eine Schule modellieren würden, könnten wir Objekte haben wollen, die Professoren repräsentieren. Jeder Professor hat einige gemeinsame Eigenschaften: Sie haben alle einen Namen und ein Fach, das sie unterrichten. Zusätzlich können alle Professoren bestimmte Dinge tun: Sie können alle eine Arbeit bewerten und sich zu Beginn des Jahres ihren Studenten vorstellen.

So könnte `Professor` eine **Klasse** in unserem System sein. Die Definition der Klasse listet die Daten und Methoden auf, die jeder Professor hat.

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
- zwei Methoden: `grade()`, um eine Arbeit zu bewerten, und `introduceSelf()`, um sich vorzustellen.

Allein genommen macht eine Klasse nichts: Sie ist eine Art Vorlage zur Erstellung konkreter Objekte dieses Typs. Jeder konkrete Professor, den wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Prozess der Erstellung einer Instanz wird von einer speziellen Funktion namens **Konstruktor** durchgeführt. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

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

Jetzt, da wir einen Konstruktor haben, können wir einige Professoren erstellen. Programmiersprachen verwenden oft das Schlüsselwort `new`, um anzuzeigen, dass ein Konstruktor aufgerufen wird.

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

Angenommen, in unserer Schule möchten wir auch Studenten repräsentieren. Im Gegensatz zu Professoren können Studenten keine Arbeiten bewerten, unterrichten kein bestimmtes Fach und gehören einem bestimmten Jahrgang an.

Studenten haben jedoch einen Namen und möchten sich möglicherweise auch vorstellen, daher könnten wir eine Definition einer Student-Klasse wie folgt schreiben:

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

Es wäre hilfreich, wenn wir darstellen könnten, dass Studenten und Professoren einige Eigenschaften teilen, oder genauer gesagt, dass sie auf einigen Ebenen dieselbe Art von Dingen sind. **Vererbung** lässt uns dies tun.

Wir beginnen damit, zu beobachten, dass Studenten und Professoren beide Menschen sind und Menschen Namen haben und sich vorstellen möchten. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen definieren. Dann können `Professor` und `Student` beide von `Person` **ableiten**, wobei sie ihre zusätzlichen Eigenschaften hinzufügen:

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

In diesem Fall würden wir sagen, dass `Person` die **Oberklasse** oder **Elternklasse** sowohl von `Professor` als auch von `Student` ist. Umgekehrt sind `Professor` und `Student` **Unterklassen** oder **Kinderklassen** von `Person`.

Sie könnten bemerken, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass sich zwar alle Menschen vorstellen möchten, die Art und Weise, wie sie dies tun, unterschiedlich ist:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

Wir könnten eine Standardimplementierung von `introduceSelf()` für Personen haben, die weder Studenten noch Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

Dieses Merkmal - wenn eine Methode denselben Namen hat, aber eine andere Implementierung in verschiedenen Klassen - wird **Polymorphismus** genannt. Wenn eine Methode in einer Unterklasse die Implementierung der Oberklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Oberklasse **überschreibt**.

## Kapselung

Objekte bieten eine Schnittstelle zu anderem Code, der sie verwenden möchte, behalten jedoch ihren eigenen internen Zustand bei. Der interne Zustand des Objekts wird **privat** gehalten, was bedeutet, dass es nur von den eigenen Methoden des Objekts und nicht von anderen Objekten aus zugänglich ist. Den internen Zustand eines Objekts privat zu halten und generell eine klare Trennung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand zu schaffen, wird **Kapselung** genannt.

Dies ist ein nützliches Merkmal, da es dem Programmierer ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne überall den Code aktualisieren zu müssen, der es verwendet: Es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Angenommen, Studenten dürfen Bogenschießen lernen, wenn sie im zweiten Jahr oder höher sind. Wir könnten dies implementieren, indem wir die `year`-Eigenschaft des Studenten freigeben und anderer Code dies untersuchen könnte, um zu entscheiden, ob der Student den Kurs belegen kann:

```js
if (student.year > 1) {
  // allow the student into the class
}
```

Das Problem ist, wenn wir die Kriterien ändern möchten, um Studenten zu erlauben, Bogenschießen zu lernen - beispielsweise indem zusätzlich die Erlaubnis der Eltern oder Erziehungsberechtigten erforderlich ist - müssten wir jede Stelle in unserem System aktualisieren, die diesen Test durchführt. Es wäre besser, eine `canStudyArchery()`-Methode bei Student-Objekten zu haben, die die Logik an einer Stelle implementiert:

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

Auf diese Weise, wenn wir die Regeln über das Studium von Bogenschießen ändern möchten, müssen wir nur die `Student`-Klasse aktualisieren, und der gesamte Code, der es verwendet, wird weiterhin funktionieren.

In vielen OOP-Sprachen können wir verhindern, dass anderer Code auf den internen Zustand eines Objekts zugreift, indem wir einige Eigenschaften als `private` markieren. Dies erzeugt einen Fehler, wenn Code außerhalb des Objekts versucht, auf sie zuzugreifen:

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

In Sprachen, die den Zugriff nicht so erzwingen, verwenden Programmierer Namenskonventionen, wie z.B. das Voranstellen eines Unterstrichs, um anzuzeigen, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige der grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung, wie sie in Sprachen wie Java und C++ implementiert sind, beschrieben.

In den beiden vorhergehenden Artikeln haben wir uns einige der Kernfunktionen von JavaScript angesehen: [Konstruktoren](/de/docs/Learn/JavaScript/Objects/Basics) und [Prototypen](/de/docs/Learn/JavaScript/Objects/Object_prototypes). Diese Funktionen haben sicherlich einige Beziehungen zu einigen der oben beschriebenen OOP-Konzepte.

- **Konstruktoren** in JavaScript bieten uns etwas wie eine Klassendefinition, die es uns ermöglicht, die "Form" eines Objekts, einschließlich aller Methoden, die es enthält, an einem Ort zu definieren. Aber Prototypen können hier ebenfalls verwendet werden. Wenn eine Methode beispielsweise auf der `prototype`-Eigenschaft eines Konstruktors definiert ist, erhalten alle Objekte, die mit diesem Konstruktor erstellt werden, diese Methode über ihren Prototyp, und wir müssen sie nicht im Konstruktor definieren.

- **Die Prototypenkette** scheint ein natürlicher Weg zu sein, um Vererbung zu implementieren. Wenn wir beispielsweise ein `Student`-Objekt haben könnten, dessen Prototyp `Person` ist, dann kann es `name` erben und `introduceSelf()` überschreiben.

Aber es ist wichtig, die Unterschiede zwischen diesen Funktionen und den oben beschriebenen "klassischen" OOP-Konzepten zu verstehen. Wir werden hier einige davon hervorheben.

Erstens sind Klassen und Objekte in klassenbasierter OOP zwei separate Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es einen Unterschied zwischen der Funktion, die zur Definition einer Klasse verwendet wird (der Klassensyntax selbst), und der Funktion, die zur Instanziierung eines Objekts verwendet wird (ein Konstruktor). In JavaScript können und erstellen wir oft Objekte ohne eine separate Klassendefinition, entweder durch eine Funktion oder ein Objektliteral. Dies kann die Arbeit mit Objekten viel leichter machen als in klassischer OOP.

Zweitens sieht eine Prototypenkette zwar wie eine Vererbungshierarchie aus und verhält sich in gewisser Weise so, ist aber in anderer Hinsicht anders. Wenn eine Unterklasse instanziiert wird, wird ein einzelnes Objekt erstellt, das die in der Unterklasse definierten Eigenschaften mit denen kombiniert, die weiter oben in der Hierarchie definiert sind. Bei der Prototypisierung wird jede Ebene der Hierarchie durch ein separates Objekt repräsentiert, und diese sind über die `__proto__`-Eigenschaft miteinander verbunden. Das Verhalten der Prototypenkette entspricht weniger der Vererbung und mehr der **Delegation**. Delegation ist ein Programmiermuster, bei dem ein Objekt, wenn es aufgefordert wird, eine Aufgabe auszuführen, diese Aufgabe selbst ausführen oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe in seinem Auftrag auszuführen. In vielerlei Hinsicht ist Delegation eine flexiblere Methode zur Kombination von Objekten als Vererbung (unter anderem ist es möglich, den Delegierten zur Laufzeit zu ändern oder komplett zu ersetzen).

Das gesagt, können Konstruktoren und Prototypen verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Aber sie direkt zu verwenden, um Funktionen wie Vererbung zu implementieren, ist schwierig, daher bietet JavaScript zusätzliche Funktionen, die auf dem Prototypmodell aufbauen und direkter auf die Konzepte der klassenbasierten OOP abzielen. Diese zusätzlichen Funktionen sind Thema des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz betrachtet, wie JavaScript-Konstruktoren und Prototypen mit diesen Konzepten verglichen werden.

Im nächsten Artikel betrachten wir die Funktionen, die JavaScript bereitstellt, um die klassenbasierte objektorientierte Programmierung zu unterstützen.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
