---
title: Objektbau-Übung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 46c276b76c9fbf1468070686ecd3abbf64761500
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorhergehenden Artikeln haben wir alle wesentlichen JavaScript-Objekttheorien und Syntaxdetails behandelt und Ihnen eine solide Grundlage gegeben, von der Sie ausgehen können. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen mehr Übung im Erstellen benutzerdefinierter JavaScript-Objekte gibt, mit einem unterhaltsamen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierten JavaScript-Konzepten, die in den vorhergehenden Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Üben von Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lass uns einige Kugeln hüpfen lassen

In diesem Artikel werden wir eine klassische "hüpfende Kugeln"-Demo schreiben, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Kugeln werden auf dem Bildschirm herumhüpfen und ihre Farbe ändern, wenn sie sich berühren. Das fertige Beispiel sieht in etwa so aus:

![Screenshot einer Webseite mit dem Titel "Bouncing balls". 23 Kugeln in verschiedenen Pastellfarben und -größen sind auf einem schwarzen Bildschirm sichtbar, mit langen Spuren hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel verwendet die [Canvas API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) zum Zeichnen der Kugeln auf dem Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API zur Animation der gesamten Anzeige — Sie müssen kein vorheriges Wissen über diese APIs haben, und wir hoffen, dass Sie nach Abschluss dieses Artikels daran interessiert sein werden, sie weiter zu erkunden. Auf dem Weg dorthin werden wir einige clevere Objekte verwenden und Ihnen ein paar nette Techniken zeigen, wie das Abprallen der Kugeln von Wänden und das Überprüfen, ob sie einander getroffen haben (auch bekannt als _Kollisionserkennung_).

## Erste Schritte

Um anzufangen, machen Sie lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css), und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Diese enthalten folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, auf dem unsere Kugeln gezeichnet werden, und Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Stile, die hauptsächlich dazu dienen, das `<h1>` zu gestalten und zu positionieren, und alle Scrollleisten oder Ränder am Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Etwas JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript ruft einen Verweis auf das `<canvas>`-Element auf und ruft dann die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) darauf auf, um uns einen Kontext zu geben, auf dem wir beginnen können zu zeichnen. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand repräsentiert und es uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes legen wir Konstanten namens `width` und `height` fest und setzen die Breite und Höhe des Canvas-Elements (repräsentiert durch die Eigenschaften `canvas.width` und `canvas.height`) gleich der Breite und Höhe des Browser-Ansichtsfensters (dem Bereich, den die Webseite einnimmt — dieser kann von den Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) abgerufen werden).

Beachten Sie, dass wir mehrere Zuordnungen verkettet ausführen, um die Variablen schneller einzurichten — das ist vollkommen in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen den beiden zurück. Die Funktion `randomRGB()` erzeugt eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Zeichenkette dargestellt wird.

## Modellierung einer Kugel in unserem Programm

Unser Programm wird viele Kugeln enthalten, die über den Bildschirm hüpfen. Da sich diese Kugeln alle gleich verhalten, ist es sinnvoll, sie mit einem Objekt darzustellen. Fügen Sie am Ende unseres Codes die folgende Klassendefinition hinzu.

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

Bisher enthält diese Klasse nur einen Konstruktor, in dem wir die Eigenschaften jeder Kugel initialisieren, die sie in unserem Programm benötigt:

- `x`- und `y`-Koordinaten — die horizontalen und vertikalen Koordinaten, an denen die Kugel auf dem Bildschirm beginnt. Diese können zwischen 0 (linke obere Ecke) und der Breite und Höhe des Browser-Ansichtsfensters (rechte untere Ecke) liegen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jede Kugel erhält eine horizontale und vertikale Geschwindigkeit; in realen Begriffen werden diese Werte regelmäßig zu den `x`/`y`-Koordinatenwerten hinzugefügt, wenn wir die Kugeln animieren, um sie bei jedem Frame um so viel zu bewegen.
- `color` — jede Kugel erhält eine Farbe.
- `size` — jede Kugel erhält eine Größe — das ist ihr Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir möchten, dass unsere Kugeln tatsächlich etwas in unserem Programm tun.

### Zeichnen der Kugel

Fügen Sie zuerst die folgende `draw()`-Methode zur `Ball`-Klasse hinzu:

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

Mit dieser Funktion können wir der Kugel sagen, dass sie sich auf dem Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des 2D-Canvas-Kontexts, den wir zuvor definiert haben (`ctx`), aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen wollen.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe wir für die Form wünschen — wir setzen sie auf die `color`-Eigenschaft unserer Kugel.
- Dann verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:
  - Die `x`- und `y`-Position des Mittelpunkts des Bogens — wir geben die `x`- und `y`-Eigenschaften der Kugel an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft der Kugel.
  - Die letzten zwei Parameter geben die Start- und Endanzahl der Grad an, zwischen denen der Bogen gezeichnet wird. Hier geben wir 0 Grad und `2 * PI` an, was 360 Grad in Radiant entspricht (ärgerlicherweise müssen Sie dies in Radiant angeben). Das gibt uns einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, hätten Sie einen Halbkreis (180 Grad).

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Wesentlichen sagt: "Schließe das Zeichnen des Pfads ab, den wir mit `beginPath()` begonnen haben, und fülle den Bereich, den er einnimmt, mit der Farbe, die wir zuvor in `fillStyle` angegeben haben."

Sie können Ihr Objekt schon jetzt testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers, und aktualisieren Sie dann die Seite, damit die Canvas-Größe auf das kleinere sichtbare Ansichtsfenster geändert wird, das übrig bleibt, wenn die Konsole geöffnet wird.
3. Geben Sie Folgendes ein, um eine neue Kugelinstanz zu erstellen:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Versuchen Sie, ihre Mitglieder aufzurufen:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Wenn Sie die letzte Zeile eingeben, sollten Sie sehen, wie sich die Kugel irgendwo auf dem Canvas zeichnet.

### Aktualisieren der Kugeldaten

Wir können die Kugel an einer Position zeichnen, aber um die Kugel wirklich zu bewegen, benötigen wir eine Art Update-Funktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion prüfen, ob die Kugel den Rand des Canvas erreicht hat. Wenn dies der Fall ist, kehren wir die Polarität der entsprechenden Geschwindigkeit um, um die Kugel in die entgegengesetzte Richtung zu bewegen. Wenn die Kugel beispielsweise nach oben reiste (negative `velY`), dann wird die vertikale Geschwindigkeit geändert, sodass sie stattdessen nach unten zu reisen beginnt (positive `velY`).

In den vier Fällen prüfen wir:

- ob die `x`-Koordinate größer ist als die Breite des Canvas (die Kugel geht über den rechten Rand hinaus).
- ob die `x`-Koordinate kleiner ist als 0 (die Kugel geht über den linken Rand hinaus).
- ob die `y`-Koordinate größer ist als die Höhe des Canvas (die Kugel geht über den unteren Rand hinaus).
- ob die `y`-Koordinate kleiner ist als 0 (die Kugel geht über den oberen Rand hinaus).

In jedem Fall beziehen wir die `size` der Kugel in die Berechnung ein, weil die `x`/`y`-Koordinaten in der Mitte der Kugel sind, aber wir möchten, dass der Rand der Kugel vom Rand abprallt — wir möchten nicht, dass die Kugel zur Hälfte vom Bildschirm geht, bevor sie zurück zu prallen beginnt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — die Kugel wird in der Praxis jedes Mal bewegt, wenn diese Methode aufgerufen wird.

Das reicht fürs Erste; lassen Sie uns mit etwas Animation weitermachen!

## Animation der Kugel

Nun lassen Sie uns Spaß haben. Wir werden jetzt damit beginnen, Kugeln zum Canvas hinzuzufügen und sie zu animieren.

Zuerst müssen wir einen Ort schaffen, um alle unsere Kugeln zu speichern, und sie dann auffüllen. Das Folgende wird diese Aufgabe erledigen — fügen Sie es jetzt am unteren Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unserer `Ball()` mit zufälligen Werten, die mit unseren Funktionen `random()` und `randomRGB()` generiert werden, und fügt sie dann mit `push()` am Ende unseres Kugel-Arrays hinzu, aber nur solange die Anzahl der Kugeln im Array weniger als 25 beträgt. Sobald wir 25 Kugeln im Array haben, werden keine weiteren Kugeln mehr hinzugefügt. Sie können die Zahl in `balls.length < 25` ändern, um mehr oder weniger Kugeln im Array zu haben. Je nachdem, wie viel Verarbeitungskapazität Ihr Computer/Browser hat, könnte das Festlegen von mehreren tausend Kugeln die Animation ziemlich verlangsamen!

Fügen Sie nun das Folgende am unteren Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann auf jedem Frame der Animation die daraus resultierende Ansicht zu rendern; dies ist die Grundlage für die meisten Spiele und andere solche Programme. Unsere Funktion `loop()` tut Folgendes:

- Sie setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz, und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe des Canvas, mit `fillRect()` (die vier Parameter geben eine Anfangskoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Das dient dazu, die Zeichnung des vorherigen Frames zu überdecken, bevor die nächste gezeichnet wird. Wenn Sie das nicht tun, sehen Sie nur lange Schlangen, die sich über das Canvas schlängeln, anstatt Kugeln, die sich bewegen! Die Füllfarbe ist auf halbtransparentes `rgb(0 0 0 / 25%)` gesetzt, um die vorherigen wenigen Frames leicht durchscheinen zu lassen und so die kleinen Spuren hinter den Kugeln zu erzeugen, während sie sich bewegen. Wenn Sie 0.25 auf 1 ändern, sehen Sie sie überhaupt nicht mehr. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen.
- Sie durchläuft alle Kugeln im `balls`-Array und führt die `draw()`- und `update()`-Funktion jeder Kugel aus, um jede auf dem Bildschirm zu zeichnen und dann die notwendigen Updates von Position und Geschwindigkeit rechtzeitig für den nächsten Frame vorzunehmen.
- Sie führt die Funktion erneut mit der Methode `requestAnimationFrame()` aus — wenn diese Methode wiederholt ausgeführt wird und denselben Funktionsnamen übergeben bekommt, wird die Funktion eine festgelegte Anzahl von Malen pro Sekunde ausgeführt, um eine reibungslose Animation zu erzeugen. Dies wird allgemein rekursiv getan — das bedeutet, dass die Funktion sich selbst jedes Mal aufruft, wenn sie läuft, sodass sie immer und immer wieder läuft.

Fügen Sie abschließend die folgende Zeile am unteren Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für das Wesentliche — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Kugeln zu testen!

## Hinzufügen von Kollisionserkennung

Nun für ein wenig Spaß, fügen wir unserem Programm eine Kollisionserkennung hinzu, sodass unsere Kugeln wissen, wann sie eine andere Kugel getroffen haben.

Fügen Sie zuerst die folgende Methodendefinition zu Ihrer `Ball`-Klasse hinzu.

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

Diese Methode ist ein wenig komplex, machen Sie sich also keine Sorgen, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jede Kugel müssen wir jede andere Kugel überprüfen, um zu sehen, ob sie mit der aktuellen Kugel kollidiert ist. Dazu beginnen wir eine weitere `for...of`-Schleife, um durch alle Kugeln im `balls[]`-Array zu schleifen.
- Unmittelbar innerhalb der Schleife verwenden wir eine `if`-Anweisung, um zu prüfen, ob die aktuelle durchlaufene Kugel dieselbe Kugel ist, wie die, die wir gerade überprüfen. Wir wollen nicht überprüfen, ob eine Kugel mit sich selbst kollidiert! Dazu prüfen wir, ob die aktuelle Kugel (d.h. die Kugel, deren collisionDetect-Methode aufgerufen wird) dieselbe ist wie die Schleifenkugel (d.h. die Kugel, auf die sich die aktuelle Iteration der `for`-Schleife in der collisionDetect-Methode bezieht). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur ausgeführt wird, wenn sie **nicht** dieselbe sind.
- Dann verwenden wir einen gängigen Algorithmus, um die Kollision zweier Kreise zu überprüfen. Wir prüfen im Wesentlichen, ob sich die Bereiche der beiden Kreise überschneiden. Dies wird weiter in [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision festgestellt wird, wird der Code im inneren `if`-Block ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir könnten etwas weit Komplexeres getan haben, zum Beispiel die Kugeln realistisch abprallen zu lassen, aber das wäre wesentlich komplexer zu implementieren gewesen. Für solche Physiksimulationen verwenden Entwickler in der Regel Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/) usw.

Sie müssen diese Methode auch in jedem Frame der Animation aufrufen. Aktualisieren Sie Ihre `loop()`-Funktion, um `ball.collisionDetect()` nach `ball.update()` aufzurufen:

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

Speichern Sie den Code und laden Sie das Demo noch einmal neu, und Sie werden sehen, wie Ihre Kugeln die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie beim Schreiben Ihres eigenen real-weltlichen, zufälligen hüpfenden Kugel-Beispiels Spaß hatten, indem Sie verschiedene Objekte und objektorientierte Techniken aus dem gesamten Modul verwendet haben! Dies sollte Ihnen einige nützliche Übungen im Umgang mit Objekten geben und guten realen Kontext.

Das war's für die Objektlektionen — es bleibt nur noch, dass Sie Ihre Fähigkeiten in der Modulherausforderung testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial für 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Ausbruchsspiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie ein 2D-Spiel gebaut wird.
- [2D-Ausbruchsspiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Aufbaus eines 2D-Spiels mit einer JavaScript-Spielbibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
