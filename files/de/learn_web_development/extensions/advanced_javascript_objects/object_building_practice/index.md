---
title: Objektbaupraxis
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir alle wesentlichen JavaScript-Objekttheorien und Syntaxdetails betrachtet, um Ihnen eine solide Basis zu geben. In diesem Artikel tauchen wir in eine praktische Übung ein, bei der Sie etwas mehr Übung im Erstellen von benutzerdefinierten JavaScript-Objekten erhalten, mit einem unterhaltsamen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierte JavaScript-Konzepte, die in früheren Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Übung im Gebrauch von Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle springen lassen

In diesem Artikel werden wir ein klassisches "springende Bälle"-Demo schreiben, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumspringen und ihre Farbe ändern, wenn sie sich berühren. Das fertige Beispiel sieht ungefähr so aus:

![Screenshot einer Webseite mit dem Titel "Bouncing balls". 23 Bälle in verschiedenen Pastellfarben und Größen sind auf einem schwarzen Bildschirm sichtbar, mit langen Spuren hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel verwendet die [Canvas API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics), um die Bälle auf den Bildschirm zu zeichnen, und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API, um das gesamte Display zu animieren — Sie müssen keine Vorkenntnisse über diese APIs haben, und wir hoffen, dass Sie nach der Lektüre dieses Artikels neugierig darauf werden, mehr darüber zu erfahren. Unterwegs werden wir einige raffinierte Objekte verwenden und Ihnen ein paar nette Techniken zeigen, wie das Abprallen der Bälle an Wänden und das Prüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionserkennung_).

## Erste Schritte

Erstellen Sie zunächst lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Diese enthalten respektive Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, um unsere Bälle zu zeichnen, und Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Styles, die hauptsächlich dazu dienen, das `<h1>` zu gestalten und zu positionieren, und alle Bildlaufleisten oder Ränder am Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Ein JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz zum `<canvas>`-Element und ruft dann die [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode darauf auf, um uns einen Kontext zu geben, auf dem wir anfangen können zu zeichnen. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich des Canvas darstellt und es uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes legen wir Konstanten namens `width` und `height` fest und stellen die Breite und Höhe des Canvas-Elements (durch die Eigenschaften `canvas.width` und `canvas.height` dargestellt) auf die Breite und Höhe des Browser-Viewports (dem Bereich, in dem die Webseite erscheint — dies kann über die Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) erhalten werden).

Beachten Sie, dass wir mehrere Zuweisungen miteinander verketten, um die Variablen schneller einzurichten — das ist völlig okay.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die `random()`-Funktion nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen diesen beiden zurück. Die `randomRGB()`-Funktion erzeugt eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-String dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle haben, die auf dem Bildschirm herumspringen. Da sich diese Bälle alle auf die gleiche Weise verhalten werden, ist es sinnvoll, sie mit einem Objekt darzustellen. Lassen Sie uns beginnen, indem wir die folgende Klassendefinition am Ende unseres Codes hinzufügen.

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

Bisher enthält diese Klasse nur einen Konstruktor, in dem wir die Eigenschaften initialisieren können, die jeder Ball benötigt, um in unserem Programm zu funktionieren:

- `x`- und `y`-Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm beginnt. Diese können zwischen 0 (oben links) und der Breite und Höhe des Browser-Viewports (unten rechts) liegen.
- Horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit gegeben; in realen Begriffen werden diese Werte regelmäßig zu den `x`-/`y`-Koordinatenwerten addiert, wenn wir die Bälle animieren, um sie in jedem Frame um diese Strecke zu bewegen.
- `color` — jeder Ball bekommt eine Farbe.
- `size` — jeder Ball bekommt eine Größe — dies ist sein Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir möchten, dass unsere Bälle tatsächlich etwas in unserem Programm tun.

### Zeichnung des Balls

Fügen Sie zuerst die folgende `draw()`-Methode der `Ball`-Klasse hinzu:

```js
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

Mithilfe dieser Funktion können wir dem Ball mitteilen, dass er sich auf den Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des zuvor definierten 2D-Canvas-Kontextes (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe wir für die Form wünschen — wir setzen ihn auf die `color`-Eigenschaft unseres Balls.
- Danach verwenden wir die [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode, um eine Bogenform auf dem Papier zu zeichnen. Ihre Parameter sind:

  - Die `x`- und `y`-Position des Mittelpunkts des Bogens — wir spezifizieren die `x`- und `y`-Eigenschaften des Balls.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten zwei Parameter geben an, zwischen wie vielen Grad um den Kreis der Bogen gezeichnet wird. Hier geben wir 0 Grad bis `2 * PI` an, was dem Äquivalent von 360 Grad in Bogenmaß entspricht (ärgerlicherweise muss man dies im Bogenmaß angeben). Das ergibt einen vollständigen Kreis. Hätten Sie nur `1 * PI` angegeben, erhielten Sie einen Halbkreis (180 Grad).

- Zuletzt verwenden wir die [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode, welche im Wesentlichen "den mit `beginPath()` gestarteten Pfad zeichnen und den von `fillStyle` angegebenen Bereich mit der angegebenen Farbe füllen" aussagt.

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie dann die Seite, damit sich die Canvas-Größe auf den kleineren sichtbaren Viewport ändert, der vorhanden ist, wenn die Konsole geöffnet wird.
3. Geben Sie Folgendes ein, um eine neue Instanz des Balls zu erstellen:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Versuchen Sie, seine Mitglieder aufzurufen:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Wenn Sie die letzte Zeile eingeben, sollten Sie sehen, wie sich der Ball irgendwo auf der Leinwand selbst zeichnet.

### Aktualisieren der Ball-Daten

Wir können den Ball in Position zeichnen, aber um ihn tatsächlich zu bewegen, benötigen wir eine Art Aktualisierungsfunktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

```js
update() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
```

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand der Leinwand erreicht hat. Wenn dies der Fall ist, kehren wir die Polarität der entsprechenden Geschwindigkeit um, um den Ball in die entgegengesetzte Richtung zu bewegen. Wenn der Ball beispielsweise nach oben (negative `velY`) unterwegs war, wird die vertikale Geschwindigkeit so geändert, dass er stattdessen nach unten (positive `velY`) zu reisen beginnt.

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer als die Breite des Canvas ist (der Ball bewegt sich über den rechten Rand).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball bewegt sich über den linken Rand).
- ob die `y`-Koordinate größer als die Höhe des Canvas ist (der Ball bewegt sich über den unteren Rand).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball bewegt sich über den oberen Rand).

In jedem Fall beziehen wir die `size` des Balls in die Berechnung ein, da die `x`-/`y`-Koordinaten in der Mitte des Balls liegen, wir jedoch möchten, dass der Rand des Balls vom Umriss abprallt — wir möchten nicht, dass der Ball halbwegs aus dem Bildschirm herausragt, bevor er zurückzuspringen beginnt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird tatsächlich jedes Mal bewegt, wenn diese Methode aufgerufen wird.

Das wird vorerst ausreichen; lassen Sie uns mit etwas Animation weitermachen!

## Animation des Balls

Jetzt machen wir das noch etwas spannender. Wir werden nun beginnen, Bälle zum Canvas hinzuzufügen und sie zu animieren.

Zuerst müssen wir einen Ort schaffen, an dem alle unsere Bälle gespeichert werden, und dann diesen Ort mit Bällen füllen. Der folgende Code übernimmt diese Aufgabe — fügen Sie ihn jetzt an das Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` mit zufälligen Werten, die mit unseren `random()`- und `randomRGB()`-Funktionen erzeugt wurden, und fügt sie dann an das Ende unseres balls-Arrays an, aber nur solange, bis die Anzahl der Bälle im Array weniger als 25 beträgt. Wenn wir 25 Bälle im Array haben, werden keine weiteren Bälle hinzugefügt. Sie können die Zahl in `balls.length < 25` variieren, um mehr oder weniger Bälle im Array zu haben. Je nach Rechenleistung Ihres Computers/Browsers könnte das Angeben mehrerer Tausend Bälle die Animation stark verlangsamen!

Fügen Sie als nächstes Folgendes an das Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, enthalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht für jeden Frame der Animation zu rendern; dies ist die Basis für die meisten Spiele und andere Programme dieser Art. Unsere `loop()`-Funktion tut Folgendes:

- Sie setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe des Canvas mithilfe von `fillRect()` (die vier Parameter geben eine Startkoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, die Zeichnung des vorherigen Frames zu bedecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie nur lange Schlangen, die sich auf der Leinwand bewegen, anstatt Bälle, die sich bewegen! Die Farbe der Füllung wird auf semi-transparentes `rgb(0 0 0 / 25%)` eingestellt, um die vorherigen paar Frames leicht durchscheinen zu lassen, was die kleinen Spuren hinter den Bällen erzeugt, während sie sich bewegen. Wenn Sie 0.25 auf 1 ändern, werden Sie sie nicht mehr sehen. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen, den es hat.
- Schleift durch alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und führt dann die notwendigen Updates für Position und Geschwindigkeit für den nächsten Frame durch.
- Sie führt die Funktion mit der `requestAnimationFrame()`-Methode erneut aus — wenn diese Methode wiederholt ausgeführt wird und derselben Funktionsname übergeben wird, führt sie diese Funktion einige Male pro Sekunde aus, um eine gleichmäßige Animation zu erzeugen. Dies wird im Allgemeinen rekursiv gemacht — das bedeutet, dass die Funktion sich jedes Mal selbst aufruft, sodass sie immer wieder ausgeführt wird.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das ist es mit den Grundlagen — versuchen Sie es zu speichern und zu aktualisieren, um Ihre springenden Bälle zu testen!

## Hinzufügen von Kollisionserkennung

Jetzt machen wir es ein bisschen spaßiger, indem wir eine Kollisionserkennung zu unserem Programm hinzufügen, damit unsere Bälle wissen, wenn sie einen anderen Ball getroffen haben.

Fügen Sie zuerst die folgende Methodendefinition zu Ihrer `Ball`-Klasse hinzu.

```js
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
```

Diese Methode ist ein wenig komplex, also machen Sie sich keine Sorgen, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball überprüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Um dies zu tun, beginnen wir eine weitere `for...of`-Schleife, um durch alle Bälle im `balls[]`-Array zu laufen.
- Unmittelbar innerhalb der For-Schleife verwenden wir eine `if`-Anweisung, um zu überprüfen, ob der aktuelle Ball, der durchlaufen wird, derselbe Ball ist wie der, den wir gerade überprüfen. Wir wollen nicht überprüfen, ob ein Ball mit sich selbst kollidiert! Dazu überprüfen wir, ob der aktuelle Ball (d. h. der Ball, dessen collisionDetect-Methode aufgerufen wird) derselbe ist wie der Schleifenball (d. h. der Ball, auf den sich die aktuelle Iteration der For-Schleife in der collisionDetect-Methode bezieht). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur ausgeführt wird, wenn sie **nicht** dieselben sind.
- Dann verwenden wir einen gemeinsamen Algorithmus, um die Kollision von zwei Kreisen zu überprüfen. Wir überprüfen im Wesentlichen, ob einer der beiden Kreisflächen überlappt. Dies wird weiter erklärt in [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection).
- Wenn eine Kollision erkannt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall ändern wir nur die `color`-Eigenschaft beider Kreise auf eine neue Zufallsfarbe. Wir hätten etwas weit Komplexeres machen können, wie die Bälle, die realistisch voneinander abprallen, aber das wäre weit komplexer zu implementieren gewesen. Für solche Physiksimulationen verwenden Entwickler häufig Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/) usw.

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

Speichern und aktualisieren Sie das Demo erneut, und Sie werden sehen, wie Ihre Bälle ihre Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es auch [live laufend](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes zufälliges Beispiel für springende Bälle zu schreiben, indem Sie verschiedene Objekt- und objektorientierte Techniken aus dem gesamten Modul verwendet haben! Dies sollte Ihnen eine nützliche Übung im Gebrauch von Objekten gegeben haben und Ihnen ein gutes Verständnis im echten Kontext gegeben haben.

Das war's für die Unterrichtsstunden über Objekte — es bleibt nur noch übrig, Ihre Fähigkeiten im Modul-Herausforderung zu testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial zur 2D-Leinwand.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Erstellens eines 2D-Spiels unter Verwendung einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
