---
title: Übung zum Erstellen von Objekten
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir uns mit der grundlegenden Theorie und Syntax von JavaScript-Objekten beschäftigt. Damit haben Sie eine solide Ausgangsbasis. In diesem Artikel setzen wir das Gelernte praktisch um: Sie üben, eigene JavaScript-Objekte zu erstellen, und erhalten dabei ein unterhaltsames, farbenfrohes Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere den
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von Objekten</a>) und den Konzepten der objektorientierten Programmierung mit JavaScript, die in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Den Einsatz von Objekten und objektorientierten Techniken
        in einem praxisnahen Kontext üben.
      </td>
    </tr>
  </tbody>
</table>

## Lassen wir ein paar Bälle hüpfen

In diesem Artikel schreiben wir eine klassische Demo mit hüpfenden Bällen, die zeigt, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle hüpfen über den Bildschirm und ändern ihre Farbe, wenn sie einander berühren. Das fertige Beispiel sieht ungefähr so aus:

![Screenshot einer Webseite mit dem Titel „Bouncing balls“. Auf einem schwarzen Bildschirm sind 23 Bälle in verschiedenen Pastellfarben und Größen zu sehen. Lange Spuren hinter ihnen zeigen ihre Bewegung an.](bouncing-balls.png)

In diesem Beispiel verwenden wir die [Canvas API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics), um die Bälle auf dem Bildschirm zu zeichnen, und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API, um die gesamte Darstellung zu animieren. Sie benötigen keine Vorkenntnisse zu diesen APIs. Wir hoffen, dass Sie nach diesem Artikel Lust haben, sie näher zu erkunden. Unterwegs nutzen wir einige praktische Objekte und zeigen Ihnen Techniken, mit denen Bälle von Wänden abprallen und sich Berührungen zwischen Bällen erkennen lassen (auch als _Kollisionserkennung_ bezeichnet).

## Erste Schritte

Erstellen Sie zunächst lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Sie enthalten jeweils Folgendes:

1. Ein einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, auf das wir unsere Bälle zeichnen, sowie Elementen, die CSS und JavaScript in das HTML-Dokument einbinden.
2. Einige einfache Styles, die hauptsächlich das `<h1>` gestalten und positionieren sowie Scrollleisten und Abstände am Seitenrand entfernen, damit die Seite ordentlich aussieht.
3. JavaScript-Code, der das `<canvas>`-Element vorbereitet und eine allgemeine Funktion bereitstellt, die wir später verwenden.

Der erste Teil des Skripts sieht so aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript ruft eine Referenz auf das `<canvas>`-Element ab und verwendet darauf die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um einen Kontext zu erhalten, in dem wir zeichnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das den Zeichenbereich des Canvas direkt repräsentiert und uns ermöglicht, 2D-Formen darauf zu zeichnen.

Anschließend setzen wir die Konstanten `width` und `height` sowie die Breite und Höhe des Canvas-Elements (repräsentiert durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports. Das ist der Bereich, in dem die Webseite angezeigt wird. Seine Maße lassen sich über die Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) ermitteln.

Beachten Sie, dass wir mehrere Zuweisungen verketten, um die Werte schneller zu setzen. Das ist völlig in Ordnung.

Danach folgen zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente entgegen und gibt eine Zufallszahl im Bereich zwischen ihnen zurück. Die Funktion `randomRGB()` erzeugt eine zufällige Farbe als {{cssxref("color_value/rgb")}}-String.

## Einen Ball in unserem Programm modellieren

In unserem Programm hüpfen viele Bälle über den Bildschirm. Da sie sich alle gleich verhalten, ist es sinnvoll, sie durch Objekte darzustellen. Fügen Sie zunächst die folgende Klassendefinition am Ende Ihres Codes hinzu.

```js
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
}
```

Bisher enthält diese Klasse nur einen Konstruktor. Darin initialisieren wir die Eigenschaften, die jeder Ball für seine Funktion in unserem Programm benötigt:

- `x`- und `y`-Koordinaten – die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Sie können zwischen 0 (obere linke Ecke) und der Breite beziehungsweise Höhe des Browser-Viewports (untere rechte Ecke) liegen.
- Horizontale und vertikale Geschwindigkeit (`velX` und `velY`) – jeder Ball erhält eine horizontale und eine vertikale Geschwindigkeit. Bei der Animation werden diese Werte regelmäßig zu den `x`- und `y`-Koordinaten addiert, sodass sich der Ball in jedem Frame entsprechend bewegt.
- `color` – jeder Ball erhält eine Farbe.
- `size` – jeder Ball erhält eine Größe. Sie entspricht seinem Radius in Pixeln.

Damit sind die Eigenschaften abgedeckt. Aber was ist mit den Methoden? Schließlich sollen unsere Bälle im Programm auch etwas tun.

### Den Ball zeichnen

Fügen Sie zunächst die folgende Methode `draw()` zur Klasse `Ball` hinzu:

```js
class Ball {
  // …
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Mit dieser Funktion können wir den Ball anweisen, sich selbst auf den Bildschirm zu zeichnen. Dazu rufen wir nacheinander mehrere Elemente des zuvor definierten 2D-Canvas-Kontexts (`ctx`) auf. Stellen Sie sich den Kontext wie Papier vor, auf das wir nun mit einem Stift zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form zeichnen möchten.
- Danach legen wir mit [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) die Farbe der Form fest. Wir setzen sie auf die Eigenschaft `color` unseres Balls.
- Anschließend zeichnen wir mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) einen Kreisbogen. Ihre Parameter sind:
  - Die Position des Mittelpunkts auf der `x`- und `y`-Achse – hier geben wir die Eigenschaften `x` und `y` des Balls an.
  - Der Radius des Kreisbogens – in diesem Fall die Eigenschaft `size` des Balls.
  - Die letzten beiden Parameter geben den Anfangs- und Endwinkel des Kreisbogens an. Hier verwenden wir 0 und `2 * PI`; Letzteres entspricht 360 Grad im Bogenmaß (diese Angabe muss im Bogenmaß erfolgen). So entsteht ein vollständiger Kreis. Mit nur `1 * PI` würden Sie einen Halbkreis (180 Grad) erhalten.

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill). Sie besagt im Wesentlichen: „Beende den mit `beginPath()` begonnenen Pfad und fülle die von ihm eingeschlossene Fläche mit der zuvor über `fillStyle` festgelegten Farbe.“

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den bisherigen Code und öffnen Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und laden Sie die Seite neu. Dadurch passt sich die Canvas-Größe an den kleineren sichtbaren Viewport an, der bei geöffneter Konsole verbleibt.
3. Geben Sie Folgendes ein, um eine neue Ball-Instanz zu erstellen:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Rufen Sie ihre Elemente auf:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Wenn Sie die letzte Zeile eingeben, sollte sich der Ball irgendwo auf dem Canvas zeichnen.

### Die Daten des Balls aktualisieren

Wir können den Ball an seiner Position zeichnen. Damit er sich tatsächlich bewegt, benötigen wir jedoch eine Funktion zum Aktualisieren seiner Daten. Fügen Sie den folgenden Code in die Klassendefinition von `Ball` ein:

```js
class Ball {
  // …
  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
```

Die ersten vier Teile der Funktion prüfen, ob der Ball den Rand des Canvas erreicht hat. Falls ja, kehren wir das Vorzeichen der entsprechenden Geschwindigkeit um, damit sich der Ball in die entgegengesetzte Richtung bewegt. Wenn sich der Ball beispielsweise nach oben bewegt hat (negatives `velY`), wird die vertikale Geschwindigkeit so geändert, dass er sich stattdessen nach unten bewegt (positives `velY`).

In den vier Fällen prüfen wir:

- ob die `x`-Koordinate größer als die Breite des Canvas ist (der Ball überschreitet den rechten Rand).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball überschreitet den linken Rand).
- ob die `y`-Koordinate größer als die Höhe des Canvas ist (der Ball überschreitet den unteren Rand).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball überschreitet den oberen Rand).

In jedem Fall beziehen wir `size` in die Berechnung ein, weil sich die `x`- und `y`-Koordinaten auf den Mittelpunkt des Balls beziehen. Wir möchten aber, dass der Rand des Balls vom Rand des Canvas abprallt – nicht erst, wenn sich der Ball bereits zur Hälfte außerhalb des Bildschirms befindet.

Die letzten beiden Zeilen addieren den Wert von `velX` zur `x`-Koordinate und den Wert von `velY` zur `y`-Koordinate. Dadurch bewegt sich der Ball bei jedem Aufruf der Methode.

Das genügt fürs Erste. Jetzt kommt die Animation!

## Den Ball animieren

Nun wird es interessant: Wir fügen Bälle zum Canvas hinzu und animieren sie.

Zunächst benötigen wir einen Ort, an dem wir alle Bälle speichern, und müssen ihn mit Bällen füllen. Fügen Sie dazu Folgendes am Ende Ihres Codes hinzu:

```js
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
```

Die `while`-Schleife erstellt mithilfe zufälliger Werte aus unseren Funktionen `random()` und `randomRGB()` jeweils eine neue Instanz von `Ball()` und fügt sie mit `push()` am Ende unseres Ball-Arrays hinzu. Das geschieht nur, solange das Array weniger als 25 Bälle enthält. Sobald 25 Bälle vorhanden sind, werden keine weiteren hinzugefügt. Sie können die Zahl in `balls.length < 25` ändern, um mehr oder weniger Bälle zu erzeugen. Je nach Rechenleistung Ihres Computers oder Browsers können mehrere Tausend Bälle die Animation allerdings erheblich verlangsamen!

Fügen Sie anschließend Folgendes am Ende Ihres Codes hinzu:

```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}
```

Programme, die etwas animieren, verwenden in der Regel eine Animationsschleife. Sie aktualisiert die Informationen im Programm und zeichnet dann für jeden Frame der Animation die daraus resultierende Ansicht. Darauf beruhen die meisten Spiele und ähnliche Programme. Unsere Funktion `loop()` erledigt Folgendes:

- Sie setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz und zeichnet mit `fillRect()` ein Rechteck über die gesamte Breite und Höhe des Canvas. Die vier Parameter geben die Startkoordinaten sowie die Breite und Höhe des Rechtecks an. So wird die Zeichnung des vorherigen Frames überdeckt, bevor der nächste gezeichnet wird. Ohne diesen Schritt würden Sie statt sich bewegender Bälle nur lange, schlangenartige Spuren auf dem Canvas sehen! Die Füllfarbe ist mit `rgb(0 0 0 / 25%)` halbtransparent. Dadurch scheinen einige vorherige Frames leicht durch und erzeugen die kurzen Spuren hinter den bewegten Bällen. Wenn Sie 0,25 auf 1 ändern, sind die Spuren nicht mehr zu sehen. Probieren Sie verschiedene Werte aus, um die Wirkung zu beobachten.
- Sie durchläuft alle Bälle im Array `balls` und ruft für jeden Ball `draw()` und `update()` auf. Dadurch wird er gezeichnet, und seine Position und Geschwindigkeit werden für den nächsten Frame aktualisiert.
- Sie ruft die Funktion mithilfe der Methode `requestAnimationFrame()` erneut auf. Wird diese Methode wiederholt mit derselben Funktion aufgerufen, führt sie die Funktion mehrmals pro Sekunde aus und erzeugt so eine flüssige Animation. Das geschieht normalerweise rekursiv: Die Funktion veranlasst bei jeder Ausführung ihren nächsten Aufruf und läuft dadurch immer wieder.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu. Wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Damit sind die Grundlagen geschafft. Speichern Sie die Dateien und laden Sie die Seite neu, um Ihre hüpfenden Bälle zu testen!

## Kollisionserkennung hinzufügen

Jetzt fügen wir unserem Programm eine Kollisionserkennung hinzu, damit unsere Bälle feststellen können, wenn sie einen anderen Ball berühren.

Fügen Sie zunächst die folgende Methodendefinition zur Klasse `Ball` hinzu.

```js
class Ball {
  // …
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
```

Diese Methode ist etwas komplex. Machen Sie sich also keine Sorgen, wenn Sie noch nicht genau verstehen, wie sie funktioniert. Hier ist eine Erklärung:

- Für jeden Ball müssen wir prüfen, ob er mit einem der anderen Bälle kollidiert. Dazu verwenden wir eine weitere `for...of`-Schleife, die alle Bälle im Array `balls[]` durchläuft.
- Gleich zu Beginn der Schleife prüfen wir mit einer `if`-Anweisung, ob der gerade durchlaufene Ball derselbe Ball ist wie der, für den wir die Kollisionen prüfen. Schließlich soll ein Ball nicht mit sich selbst kollidieren können! Dazu vergleichen wir den aktuellen Ball (also den Ball, dessen Methode collisionDetect aufgerufen wurde) mit dem Ball der Schleife (also dem Ball, auf den sich die aktuelle Iteration der Schleife in der Methode collisionDetect bezieht). Mit `!` kehren wir das Ergebnis der Prüfung um, sodass der Code in der `if`-Anweisung nur ausgeführt wird, wenn es sich **nicht** um denselben Ball handelt.
- Anschließend verwenden wir einen gängigen Algorithmus zur Erkennung von Kollisionen zwischen zwei Kreisen. Im Wesentlichen prüfen wir, ob sich ihre Flächen überschneiden. Weitere Informationen dazu finden Sie unter [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection).
- Wenn eine Kollision erkannt wird, läuft der Code innerhalb der inneren `if`-Anweisung. Hier setzen wir lediglich die Eigenschaft `color` beider Kreise auf eine neue Zufallsfarbe. Wir könnten auch etwas wesentlich Komplexeres tun und die Bälle beispielsweise realistisch voneinander abprallen lassen. Das wäre jedoch deutlich aufwendiger zu implementieren. Für solche Physiksimulationen verwenden Entwickler häufig Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/) oder [Phaser](https://phaser.io/).

Sie müssen diese Methode außerdem in jedem Frame der Animation aufrufen. Aktualisieren Sie Ihre Funktion `loop()`, sodass sie `ball.collisionDetect()` nach `ball.update()` aufruft:

```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}
```

Speichern Sie die Demo und laden Sie sie erneut. Jetzt ändern Ihre Bälle ihre Farbe, wenn sie miteinander kollidieren!

> [!NOTE]
> Falls Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, vergleichen Sie Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js). Sie können sie auch [live ansehen](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html).

## Zusammenfassung

Wir hoffen, Sie hatten Spaß daran, mit den Objekt- und objektorientierten Techniken aus diesem Modul Ihr eigenes Beispiel mit zufällig hüpfenden Bällen zu schreiben! Dabei konnten Sie den Umgang mit Objekten in einem praxisnahen Kontext üben.

Das war die letzte Lektion zu Objekten. Nun können Sie Ihre Fähigkeiten noch in der Modulaufgabe testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) – ein 2D-Canvas-Tutorial für Einsteiger.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript) – ein ausführliches Tutorial für Einsteiger, das zeigt, wie Sie ein 2D-Spiel erstellen.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) – erklärt die Grundlagen zum Erstellen eines 2D-Spiels mit einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
