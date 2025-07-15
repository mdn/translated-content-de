---
title: "Testen Sie Ihre Fähigkeiten: Objektorientiertes JavaScript"
short-title: Objektorientiertes JavaScript
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

Ziel dieses Fähigkeits-Tests ist es einzuschätzen, ob Sie unseren Artikel [Klassen in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
> Falls es einen Fehler in Ihrem Code gibt, wird er im Ergebnisbereich dieser Seite oder in der JavaScript-Konsole protokolliert.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## OOJS 1

In dieser Aufgabe stellen wir Ihnen den Anfang einer Definition für eine `Shape`-Klasse zur Verfügung. Diese hat drei Eigenschaften: `name`, `sides` und `sideLength`. Diese Klasse modelliert nur Formen, bei denen alle Seiten die gleiche Länge haben, wie ein Quadrat oder ein gleichseitiges Dreieck.

Um die Aufgabe zu vervollständigen:

1. Klicken Sie auf **"Abspielen"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie dieser Klasse einen Konstruktor hinzu. Der Konstruktor nimmt Argumente für die Eigenschaften `name`, `sides` und `sideLength` entgegen und initialisiert sie.
3. Fügen Sie eine neue Methode `calcPerimeter()` zur Klasse hinzu, die ihren Umfang (die Länge des äußeren Randes der Form) berechnet und das Ergebnis in die Konsole protokolliert.
4. Erstellen Sie eine neue Instanz der `Shape`-Klasse namens `square`. Geben Sie ihr einen `name` von `square`, `4` `sides` und eine `sideLength` von `5`.
5. Rufen Sie Ihre Methode `calcPerimeter()` auf der Instanz auf, um zu sehen, ob sie das Berechnungsergebnis wie erwartet in der Browser-Konsole protokolliert.
6. Erstellen Sie eine neue Instanz von `Shape` namens `triangle`, mit einem `name` von `triangle`, `3` `sides` und einer `sideLength` von `3`.
7. Rufen Sie `triangle.calcPerimeter()` auf, um zu prüfen, ob es funktioniert.

> [!CALLOUT]
>
> Sie können auch [den Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

<!-- Code shared across examples -->

```css hidden live-sample___oojs-1 live-sample___oojs-2
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```js live-sample___oojs-1
class Shape {
  name;
  sides;
  sideLength;
}
```

{{ EmbedLiveSample("oojs-1", "100%", 60) }}

<details>
<summary>Hier klicken, um die Lösung zu zeigen</summary>

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

1. Klicken Sie auf **"Abspielen"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Erstellen Sie eine `Square`-Klasse, die von `Shape` erbt.
3. Fügen Sie der `Square`-Klasse eine `calcArea()`-Methode hinzu, die ihre Fläche berechnet.
4. Richten Sie den Konstruktor der `Square`-Klasse so ein, dass die `name`-Eigenschaft von `Square`-Objektinstanzen automatisch auf `square` gesetzt wird, und die `sides`-Eigenschaft automatisch auf `4`. Beim Aufrufen des Konstruktors sollten Sie daher nur die `sideLength`-Eigenschaft bereitstellen müssen.
5. Erstellen Sie eine Instanz der `Square`-Klasse namens `square` mit geeigneten Eigenschaftswerten und rufen Sie deren Methoden `calcPerimeter()` und `calcArea()` auf, um zu zeigen, dass es funktioniert.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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
<summary>Hier klicken, um die Lösung zu zeigen</summary>

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
