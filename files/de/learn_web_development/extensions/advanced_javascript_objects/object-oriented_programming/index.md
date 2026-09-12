---
title: Objektorientierte Programmierung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
l10n:
  sourceCommit: 19179e39c722467775f659c6cb5f9465f4f3d6d6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das für viele Programmiersprachen grundlegend ist, darunter Java und C++. In diesem Artikel geben wir einen Überblick über die grundlegenden Konzepte der OOP. Wir beschreiben drei Hauptkonzepte: **Klassen und Instanzen**, **Vererbung** und **Kapselung**. Zunächst beschreiben wir diese Konzepte ohne besonderen Bezug auf JavaScript, daher werden alle Beispiele in {{Glossary("Pseudocode", "Pseudocode")}} angegeben.

> [!NOTE]
> Genau genommen gehören die hier beschriebenen Merkmale zu einem bestimmten Stil der OOP, der **klassenbasierte** oder „klassische“ OOP genannt wird. Wenn Menschen über OOP sprechen, meinen sie im Allgemeinen diesen Typ.

Danach betrachten wir in JavaScript, wie Konstruktoren und die Prototypenkette mit diesen OOP-Konzepten zusammenhängen und worin sie sich unterscheiden. Im nächsten Artikel betrachten wir einige zusätzliche JavaScript-Funktionen, die die Implementierung objektorientierter Programme erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere mit
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) sowie mit objektorientierten JavaScript-Konzepten, die in vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Konzepte der objektorientierten Programmierung (OOP): Klassen, Instanzen, Vererbung und Kapselung.</li>
          <li>Wie diese OOP-Konzepte auf JavaScript zutreffen und worin die Unterschiede zu einer Sprache wie Java oder C++ bestehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Bei der objektorientierten Programmierung wird ein System als Sammlung von Objekten modelliert, wobei jedes Objekt einen bestimmten Aspekt des Systems darstellt. Objekte enthalten sowohl Funktionen (oder Methoden) als auch Daten. Ein Objekt stellt anderem Code, der es verwenden möchte, eine öffentliche Schnittstelle bereit, behält jedoch seinen eigenen privaten, internen Zustand bei; andere Teile des Systems müssen sich nicht darum kümmern, was innerhalb des Objekts geschieht.

## Klassen und Instanzen

Wenn wir ein Problem in der OOP mithilfe von Objekten modellieren, erstellen wir abstrakte Definitionen, die die Arten von Objekten darstellen, die wir in unserem System haben möchten. Wenn wir beispielsweise eine Schule modellieren würden, könnten wir Objekte benötigen, die Professoren darstellen. Alle Professoren haben bestimmte Eigenschaften gemeinsam: Sie haben alle einen Namen und ein Fach, das sie unterrichten. Außerdem kann jeder Professor bestimmte Dinge tun: Beispielsweise kann jeder eine Arbeit bewerten und sich seinen Studierenden zu Beginn des Jahres vorstellen.

`Professor` könnte also eine **Klasse** in unserem System sein. Die Definition der Klasse listet die Daten und Methoden auf, die jeder Professor besitzt.

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
- zwei Methoden: `grade()` zum Bewerten einer Arbeit und `introduceSelf()` zum Vorstellen.

Für sich allein tut eine Klasse nichts: Sie ist eine Art Vorlage zum Erstellen konkreter Objekte dieses Typs. Jeder konkrete Professor, den wir erstellen, wird als **Instanz** der `Professor`-Klasse bezeichnet. Der Prozess zum Erstellen einer Instanz wird von einer speziellen Funktion namens **Konstruktor** durchgeführt. Wir übergeben dem Konstruktor Werte für jeden internen Zustand, den wir in der neuen Instanz initialisieren möchten.

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

Dieser Konstruktor nimmt zwei Parameter entgegen, sodass wir die Eigenschaften `name` und `teaches` initialisieren können, wenn wir einen neuen konkreten Professor erstellen.

Jetzt, da wir einen Konstruktor haben, können wir einige Professoren erstellen. Programmiersprachen verwenden häufig das Schlüsselwort `new`, um anzuzeigen, dass ein Konstruktor aufgerufen wird.

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

Dadurch werden zwei Objekte erstellt, die beide Instanzen der `Professor`-Klasse sind.

## Vererbung

Angenommen, wir möchten in unserer Schule auch Studierende darstellen. Anders als Professoren können Studierende keine Arbeiten bewerten, sie unterrichten kein bestimmtes Fach und gehören einem bestimmten Jahrgang an.

Studierende haben jedoch einen Namen und möchten sich möglicherweise ebenfalls vorstellen. Daher könnten wir die Definition einer Studierendenklasse wie folgt schreiben:

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

Es wäre hilfreich, wenn wir darstellen könnten, dass Studierende und Professoren einige Eigenschaften gemeinsam haben, oder genauer gesagt, dass sie auf einer bestimmten Ebene _dieselbe Art von Ding_ sind. **Vererbung** ermöglicht uns dies.

Wir beginnen mit der Feststellung, dass Studierende und Professoren beide Menschen sind und Menschen Namen haben sowie sich vorstellen möchten. Wir können dies modellieren, indem wir eine neue Klasse `Person` definieren, in der wir alle gemeinsamen Eigenschaften von Menschen definieren. Dann können sowohl `Professor` als auch `Student` von `Person` **abgeleitet** werden und ihre zusätzlichen Eigenschaften hinzufügen:

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

In diesem Fall würden wir sagen, dass `Person` die **Superklasse** oder **Elternklasse** sowohl von `Professor` als auch von `Student` ist. Umgekehrt sind `Professor` und `Student` **Unterklassen** oder **Kindklassen** von `Person`.

Sie bemerken möglicherweise, dass `introduceSelf()` in allen drei Klassen definiert ist. Der Grund dafür ist, dass sich zwar alle Menschen vorstellen möchten, die Art und Weise, wie sie das tun, jedoch unterschiedlich ist:

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

Wir könnten eine Standardimplementierung von `introduceSelf()` für Menschen haben, die weder Studierende _noch_ Professoren sind:

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

Dieses Merkmal – wenn eine Methode in verschiedenen Klassen denselben Namen, aber eine unterschiedliche Implementierung hat – wird **Polymorphismus** genannt. Wenn eine Methode in einer Unterklasse die Implementierung der Superklasse ersetzt, sagen wir, dass die Unterklasse die Version in der Superklasse **überschreibt**.

## Kapselung

Objekte stellen anderem Code, der sie verwenden möchte, eine Schnittstelle bereit, behalten jedoch ihren eigenen internen Zustand bei. Der interne Zustand des Objekts bleibt **privat**, das heißt, er kann nur durch die eigenen Methoden des Objekts und nicht durch andere Objekte aufgerufen werden. Das Beibehalten des privaten internen Zustands eines Objekts und allgemein das Herstellen einer klaren Trennung zwischen seiner öffentlichen Schnittstelle und seinem privaten internen Zustand wird **Kapselung** genannt.

Dies ist ein nützliches Merkmal, weil es Programmierenden ermöglicht, die interne Implementierung eines Objekts zu ändern, ohne sämtlichen Code suchen und aktualisieren zu müssen, der es verwendet: Es schafft eine Art Firewall zwischen diesem Objekt und dem Rest des Systems.

Angenommen, Studierende dürfen Bogenschießen lernen, wenn sie sich im zweiten Jahrgang oder höher befinden. Wir könnten dies implementieren, indem wir einfach die Eigenschaft `year` des Studierenden verfügbar machen, und anderer Code könnte sie überprüfen, um zu entscheiden, ob der Studierende den Kurs belegen darf:

```js
if (student.year > 1) {
  // allow the student into the class
}
```

Das Problem besteht darin, dass wir, falls wir die Kriterien dafür ändern möchten, ob Studierende Bogenschießen lernen dürfen – indem wir beispielsweise zusätzlich die Zustimmung der Eltern oder Erziehungsberechtigten verlangen –, jede Stelle in unserem System aktualisieren müssten, die diese Prüfung durchführt. Es wäre besser, eine Methode `canStudyArchery()` für `Student`-Objekte zu haben, die die Logik an einer Stelle implementiert:

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

Wenn wir auf diese Weise die Regeln für das Erlernen des Bogenschießens ändern möchten, müssen wir nur die Klasse `Student` aktualisieren, und der gesamte Code, der sie verwendet, funktioniert weiterhin.

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

In Sprachen, die einen solchen Zugriff nicht erzwingen, verwenden Programmierende Namenskonventionen, etwa indem sie den Namen mit einem Unterstrich beginnen lassen, um anzuzeigen, dass die Eigenschaft als privat betrachtet werden sollte.

## OOP und JavaScript

In diesem Artikel haben wir einige grundlegende Merkmale der klassenbasierten objektorientierten Programmierung beschrieben, wie sie in Sprachen wie Java und C++ implementiert ist.

In den beiden vorherigen Artikeln haben wir einige zentrale JavaScript-Funktionen betrachtet: [Konstruktoren](/de/docs/Learn_web_development/Core/Scripting/Object_basics) und [Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes). Diese Funktionen stehen sicherlich in gewisser Beziehung zu einigen der oben beschriebenen OOP-Konzepte.

- **Konstruktoren** in JavaScript bieten uns etwas Ähnliches wie eine Klassendefinition und ermöglichen es uns, die „Form“ eines Objekts, einschließlich aller enthaltenen Methoden, an einer Stelle zu definieren. Hier können jedoch auch Prototypen verwendet werden. Wenn beispielsweise eine Methode in der Eigenschaft `prototype` eines Konstruktors definiert ist, erhalten alle mit diesem Konstruktor erstellten Objekte diese Methode über ihren Prototypen, und wir müssen sie nicht im Konstruktor definieren.

- **Die Prototypenkette** scheint eine natürliche Möglichkeit zur Implementierung von Vererbung zu sein. Wenn wir beispielsweise ein `Student`-Objekt haben können, dessen Prototyp `Person` ist, kann es `name` erben und `introduceSelf()` überschreiben.

Es lohnt sich jedoch, die Unterschiede zwischen diesen Funktionen und den oben beschriebenen „klassischen“ OOP-Konzepten zu verstehen. Hier heben wir einige davon hervor.

Erstens sind Klassen und Objekte in der klassenbasierten OOP zwei getrennte Konstrukte, und Objekte werden immer als Instanzen von Klassen erstellt. Außerdem gibt es einen Unterschied zwischen dem Merkmal, mit dem eine Klasse definiert wird (der Klassensyntax selbst), und dem Merkmal, mit dem ein Objekt instanziiert wird (einem Konstruktor). In JavaScript können und werden Objekte häufig ohne eine separate Klassendefinition erstellt, entweder mithilfe einer Funktion oder eines Objektliterals. Dadurch kann die Arbeit mit Objekten wesentlich leichtergewichtig sein als in der klassischen OOP.

Zweitens sieht eine Prototypenkette zwar wie eine Vererbungshierarchie aus und verhält sich in mancher Hinsicht auch so, unterscheidet sich jedoch in anderen Punkten. Wenn eine Unterklasse instanziiert wird, wird ein einzelnes Objekt erstellt, das in der Unterklasse definierte Eigenschaften mit Eigenschaften kombiniert, die weiter oben in der Hierarchie definiert sind. Bei der Prototypisierung wird jede Ebene der Hierarchie durch ein separates Objekt dargestellt, und sie werden über die Eigenschaft `__proto__` miteinander verknüpft. Das Verhalten der Prototypenkette ähnelt weniger der Vererbung und mehr der **Delegation**. Delegation ist ein Programmiermuster, bei dem ein Objekt eine Aufgabe entweder selbst ausführen oder ein anderes Objekt (seinen **Delegierten**) bitten kann, die Aufgabe in seinem Namen auszuführen. In vielerlei Hinsicht ist Delegation eine flexiblere Art, Objekte zu kombinieren, als Vererbung (unter anderem ist es möglich, den Delegierten zur Laufzeit zu ändern oder vollständig zu ersetzen).

Konstruktoren und Prototypen können jedoch verwendet werden, um klassenbasierte OOP-Muster in JavaScript zu implementieren. Sie direkt zur Implementierung von Merkmalen wie Vererbung zu verwenden, ist jedoch schwierig. Daher bietet JavaScript zusätzliche Funktionen, die auf dem Prototypenmodell aufbauen und direkter den Konzepten der klassenbasierten OOP entsprechen. Diese zusätzlichen Funktionen sind Gegenstand des nächsten Artikels.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Merkmale der klassenbasierten objektorientierten Programmierung beschrieben und kurz betrachtet, wie JavaScript-Konstruktoren und -Prototypen mit diesen Konzepten verglichen werden können.

Im nächsten Artikel betrachten wir die Funktionen, die JavaScript zur Unterstützung der klassenbasierten objektorientierten Programmierung bereitstellt.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
