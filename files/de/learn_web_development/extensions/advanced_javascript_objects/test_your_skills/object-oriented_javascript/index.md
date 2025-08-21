---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
short-title: "Test: Objektorientiertes JavaScript"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
l10n:
  sourceCommit: 46c276b76c9fbf1468070686ecd3abbf64761500
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unser [Klassen in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) Artikel verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Benutzungsleitfaden. Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns aufnehmen.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Anfang einer Definition für eine `Shape`-Klasse zur Verfügung. Diese hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten die gleiche Länge haben, wie ein Quadrat oder ein gleichseitiges Dreieck.

Um die Aufgabe zu vervollständigen:

1. Fügen Sie dieser Klasse einen Konstruktor hinzu. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` und initialisiert sie.
2. Fügen Sie der Klasse eine neue Methode `calcPerimeter()` hinzu, die ihren Umfang (die Länge des äußeren Randes der Form) berechnet und das Ergebnis in die Konsole loggt.
3. Erstellen Sie eine neue Instanz der `Shape`-Klasse namens `square`. Geben Sie ihr einen `name` von `square`, `4` `sides` und eine `sideLength` von `5`.
4. Rufen Sie Ihre `calcPerimeter()` Methode auf der Instanz auf, um zu sehen, ob das Berechnungsergebnis wie erwartet in der Browser-Konsole angezeigt wird.
5. Erstellen Sie eine neue Instanz von `Shape` namens `triangle`, mit einem `name` von `triangle`, `3` `sides` und einer `sideLength` von `3`.
6. Rufen Sie `triangle.calcPerimeter()` auf, um zu überprüfen, ob es funktioniert.

```js live-sample___oojs-1
class Shape {
  name;
  sides;
  sideLength;
}
```

{{ EmbedLiveSample("oojs-1", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JS könnte in etwa so aussehen:

```js
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
```

</details>

## OOJS 2

Nun ist es an der Zeit, etwas Vererbung ins Spiel zu bringen.

Um die Aufgabe zu vervollständigen:

1. Erstellen Sie eine `Square`-Klasse, die von `Shape` erbt.
2. Fügen Sie `Square` eine `calcArea()` Methode hinzu, die ihre Fläche berechnet.
3. Richten Sie den `Square`-Konstruktor so ein, dass die `name` Eigenschaft der `Square` Objektinstanzen automatisch auf `square` und die `sides` Eigenschaft automatisch auf `4` gesetzt werden. Beim Aufruf des Konstruktors sollten Sie daher nur die `sideLength` Eigenschaft angeben müssen.
4. Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit geeigneten Eigenschaftswerten und rufen Sie ihre `calcPerimeter()` und `calcArea()` Methoden auf, um zu zeigen, dass es funktioniert.

```js live-sample___oojs-2
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("oojs-2", "100%", 60) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JS könnte in etwa so aussehen:

```js
// ...
// Don't edit the code above here!

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(
      `The ${this.name}'s area is ${this.sideLength * this.sideLength} squared.`,
    );
  }
}

const square = new Square(4);

square.calcPerimeter();
square.calcArea();
```

</details>

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
