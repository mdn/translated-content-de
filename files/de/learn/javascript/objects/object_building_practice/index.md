---
title: Objektaufbau-Übung
slug: Learn/JavaScript/Objects/Object_building_practice
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

In früheren Artikeln haben wir uns alle wesentlichen JavaScript-Objekttheorien und Syntaxdetails angesehen und Ihnen eine solide Grundlage zum Starten gegeben. In diesem Artikel tauchen wir in eine praktische Übung ein und geben Ihnen weitere Praxis im Erstellen benutzerdefinierter JavaScript-Objekte, mit einem unterhaltsamen und bunten Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS,
        Vertrautheit mit den JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und OOJS-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Praxis im Umgang mit Objekten und objektorientierten Techniken in einem realen Kontext zu erhalten.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle hüpfen

In diesem Artikel schreiben wir ein klassisches "Springende Bälle"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumspringen und ihre Farbe ändern, wenn sie sich berühren. Das fertige Beispiel wird ungefähr so aussehen:

![Screenshot einer Webseite mit dem Titel "Springende Bälle". 23 Bälle in verschiedenen Pastellfarben und Größen sind auf einem schwarzen Bildschirm sichtbar, mit langen Spuren dahinter, die auf Bewegung hinweisen.](bouncing-balls.png)

Dieses Beispiel nutzt die [Canvas API](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) zum Zeichnen der Bälle auf dem Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API zur Animation der gesamten Anzeige — Sie müssen keine Vorkenntnisse über diese APIs haben, und wir hoffen, dass Sie, wenn Sie diesen Artikel beendet haben, interessiert daran sind, sie weiter zu erkunden. Auf dem Weg dorthin verwenden wir einige schicke Objekte und zeigen Ihnen ein paar nette Techniken wie das Abprallen von Bällen von Wänden und das Überprüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionsdetektion_).

## Erste Schritte

Erstellen Sie zunächst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css), und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) Dateien. Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element zum Zeichnen unserer Bälle sowie Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Stile, die hauptsächlich dazu dienen, das `<h1>` zu gestalten und zu positionieren und alle Scrollleisten oder Ränder am Rand der Seite zu entfernen (damit es schön und sauber aussieht).
3. Einige JavaScript-Dateien, die das `<canvas>`-Element einrichten und eine allgemeine Funktion bereitstellen, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript ermittelt eine Referenz zum `<canvas>`-Element und ruft die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) darauf auf, um uns einen Kontext zu geben, auf dem wir anfangen können zu zeichnen. Die resultierende Konstante (`ctx`) ist das Objekt, das die Zeichenfläche der Leinwand direkt repräsentiert und uns erlaubt, 2D-Formen darauf zu zeichnen.

Als Nächstes setzen wir Konstanten, genannt `width` und `height`, sowie die Breite und Höhe des Canvas-Elements (repräsentiert durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports (dem Bereich, in dem die Webseite erscheint — dieser kann mit den Eigenschaften {{domxref("Window.innerWidth")}} und {{domxref("Window.innerHeight")}} abgerufen werden).

Beachten Sie, dass wir mehrere Zuweisungen zusammenketten, um die Variablen schneller zu setzen — das ist völlig in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die `random()`-Funktion nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen den beiden zurück. Die `randomRGB()`-Funktion erzeugt eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Zeichenfolge dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle nutzen, die über den Bildschirm springen. Da sich diese Bälle alle gleich verhalten, ist es sinnvoll, sie mit einem Objekt zu repräsentieren. Lassen Sie uns mit der folgenden Klassendefinition am Ende unseres Codes beginnen:

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

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann zwischen 0 (obere linke Ecke) und der Breite und Höhe des Browser-Viewports (untere rechte Ecke) liegen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit zugewiesen; in der Praxis werden diese Werte regelmäßig zu den `x`/`y`-Koordinatenwerten hinzugefügt, wenn wir die Bälle animieren, um sie bei jedem Frame um diesen Betrag zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jede Kugel erhält eine Größe — das ist ihr Radius, in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle in unserem Programm tatsächlich etwas tun.

### Zeichnen des Balls

Fügen Sie zuerst die folgende `draw()`-Methode zur `Ball`-Klasse hinzu:

```js
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

Mit dieser Funktion können wir den Ball anweisen, sich selbst auf den Bildschirm zu zeichnen, indem wir eine Reihe von Membern des vorher definierten 2D-Canvas-Kontexts (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt möchten wir unseren Stift anweisen, darauf etwas zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf dem Papier zeichnen möchten.
- Als Nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe zu definieren, in der wir die Form zeichnen möchten — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Danach verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Kreisform auf dem Papier zu zeichnen. Die Parameter sind:

  - Die `x` und `y` Position des Zentrums des Bogens — wir geben die `x` und `y` Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size` Eigenschaft des Balls.
  - Die letzten zwei Parameter spezifizieren den Anfangs- und Endgrad, um den der Bogen gezeichnet wird. Hier geben wir 0 Grad und `2 * PI` an, was dem Äquivalent von 360 Grad im Bogenmaß entspricht (ärgerlicherweise muss man hier das Bogenmaß angeben). Das ergibt einen kompletten Kreis. Wenn Sie nur `1 * PI` angegeben hätten, bekämen Sie einen Halbkreis (180 Grad).

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Wesentlichen angibt: „Schließen Sie das Zeichnen des mit `beginPath()` begonnenen Weges ab und füllen Sie den Bereich, den es einnimmt, mit der zuvor in `fillStyle` angegebenen Farbe.“

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den Code bisher und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und laden Sie dann die Seite neu, damit die Größe des Canvas auf den kleineren sichtbaren Bereich reduziert wird, der übrig bleibt, wenn die Konsole öffnet.
3. Geben Sie das Folgende ein, um eine neue Ballinstanz zu erstellen:

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

5. Wenn Sie die letzte Zeile eingeben, sollte der Ball sich irgendwo auf dem Canvas zeichnen.

### Aktualisierung der Ball-Daten

Wir können den Ball an Ort und Stelle zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Aktualisierungsfunktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion prüfen, ob der Ball den Rand des Canvas erreicht hat. Falls ja, ändern wir die Polarität der entsprechenden Geschwindigkeit, um den Ball in die entgegengesetzte Richtung zu bewegen. Wenn der Ball z. B. nach oben fährt (negative `velY`), dann wird die vertikale Geschwindigkeit geändert, sodass er stattdessen nach unten fährt (positive `velY`).

In den vier Fällen prüfen wir:

- wenn die `x` Koordinate größer als die Breite des Canvas ist (der Ball geht vom rechten Rand ab).
- wenn die `x` Koordinate kleiner als 0 ist (der Ball geht vom linken Rand ab).
- wenn die `y` Koordinate größer als die Höhe des Canvas ist (der Ball geht vom unteren Rand ab).
- wenn die `y` Koordinate kleiner als 0 ist (der Ball geht vom oberen Rand ab).

In jedem Fall beziehen wir die `size` des Balls in die Berechnung mit ein, da die `x`/`y` Koordinaten im Zentrum des Balls liegen, aber wir möchten, dass der Rand des Balls vom Rand abprallt — wir möchten nicht, dass der Ball zur Hälfte vom Bildschirm geht, bevor er zurückprallt.

Die letzten beiden Zeilen addieren den `velX` Wert zur `x` Koordinate und den `velY` Wert zur `y` Koordinate — der Ball wird bei jedem Aufruf dieser Methode effektiv bewegt.

Das reicht fürs Erste; machen wir mit etwas Animation weiter!

## Animation des Balls

Jetzt wird's spannend. Wir werden jetzt Bälle zum Canvas hinzufügen und sie animieren.

Zuerst müssen wir einen Ort erstellen, um alle unsere Bälle zu speichern, und sie dann füllen. Das folgende wird diese Aufgabe erledigen — fügen Sie es jetzt an das Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` mit zufälligen Werten, die mit unseren `random()` und `randomRGB()`-Funktionen erzeugt wurden, und `push()` sie dann ans Ende unseres Balls-Arrays, aber nur solange die Anzahl der Bälle im Array kleiner als 25 ist. Wenn wir 25 Bälle im Array haben, werden keine neuen Bälle hinzugefügt. Sie können die Anzahl bei `balls.length < 25` variieren, um mehr oder weniger Bälle im Array zu erhalten. Je nachdem, wie viel Rechenleistung Ihr Computer/Browsers hat, könnte es die Animation verlangsamen, wenn Sie mehrere Tausend Bälle spezifizieren!

Fügen Sie als Nächstes Folgendes am Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht auf jedem Frame der Animation zu rendern; dies ist die Basis für die meisten Spiele und sonstige Programme. Unsere `loop()`-Funktion tut Folgendes:

- Setzt die Canvas-Füllfarbe auf halbtransparentes Schwarz und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe der Leinwand, indem `fillRect()` verwendet wird (die vier Parameter liefern eine Anfangskoordinate sowie eine Breite und Höhe für das gezeichnete Rechteck). Das dient dazu, die vorherige Frame-Zeichnung zu bedecken, bevor die nächste gezeichnet wird. Wenn Sie das nicht tun, sehen Sie nur lange Schlangen, die sich über die Leinwand bewegen, anstatt Bälle, die sich bewegen! Die Füllfarbe ist auf halbtransparent gesetzt, `rgb(0 0 0 / 25%)`, um die vorherigen paar Frames leicht durchscheinen zu lassen, was die kleinen Spuren hinter den Bällen erzeugt, während sie sich bewegen. Wenn Sie 0.25 auf 1 setzen, werden Sie sie überhaupt nicht mehr sehen. Probieren Sie, diese Zahl zu variieren, um den Effekt zu sehen.
- Schleifen Sie durch alle Bälle in dem `balls` Array, und führen Sie die `draw()` und `update()` Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und führen Sie dann die notwendigen Aktualisierungen von Position und Geschwindigkeit für den nächsten Frame durch.
- Führen Sie die Funktion erneut mit der `requestAnimationFrame()`-Methode aus: Immer wenn diese Methode wiederholt ausgeführt und derselben Funktionsname übergeben wird, wird diese Methode mehrmals pro Sekunde ausgeführt, um eine flüssige Animation zu erzeugen. Dies wird im Allgemeinen rekursiv durchgeführt — das bedeutet, dass die Funktion sich selbst aufruft, jedes Mal wenn sie ausgeführt wird, sodass sie immer wieder ausgeführt wird.

Fügen Sie schließlich die folgende Zeile unten in Ihren Code ein — wir müssen die Funktion einmal aufrufen, damit die Animation startet.

```js
loop();
```

Das ist es für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen der Kollisionsdetektion

Jetzt ein bisschen Spaß, lassen Sie uns der Anwendung eine Kollisionsdetektion hinzufügen, damit unsere Bälle wissen, wann sie einen anderen Ball getroffen haben.

Fügen Sie zuerst die folgende Methodendefinition zu Ihrer `Ball` Klasse hinzu.

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

Diese Methode ist ein wenig komplex, machen Sie sich also keine Sorgen, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball prüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Dazu starten wir eine weitere `for...of` Schleife, um durch alle Bälle im `balls[]` Array zu schleifen.
- Direkt innerhalb der Schleife verwenden wir eine `if` Anweisung, um zu prüfen, ob der aktuell durchlaufene Ball derselbe ist wie der, den wir derzeit überprüfen. Wir wollen nicht prüfen, ob ein Ball mit sich selbst kollidiert ist! Dazu prüfen wir, ob der aktuelle Ball (d. h. der Ball, dessen collisionDetect Methode aufgerufen wird) derselbe ist wie der Schleifenball (d. h. der Ball, auf den der aktuelle Durchlauf der Schleife in der collisionDetect Methode verweist). Dann verwenden wir `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if` Anweisung nur ausgeführt wird, wenn sie **nicht** gleich sind.
- Wir verwenden dann einen gängigen Algorithmus, um die Kollision von zwei Kreisen zu prüfen. Wir prüfen im Grunde, ob ein Bereich der beiden Kreise überlappt. Dies wird in [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection) weiter erklärt.
- Wenn eine Kollision erkannt wird, wird der Code innerhalb der inneren `if` Anweisung ausgeführt. In diesem Fall setzen wir nur die `color` Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas weitaus Komplexeres machen können, wie z.B. die Bälle realistisch abprallen zu lassen, aber das wäre weitaus komplexer zu implementieren gewesen. Für solche Physik-Simulationen neigen Entwickler dazu, Spiele- oder Physik-Bibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/), etc. zu verwenden.

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

Speichern und aktualisieren Sie die Demo erneut, und Sie werden sehen, dass Ihre Bälle die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es auch [live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) in Aktion).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes reales Beispiel für zufällige springende Bälle zu schreiben und verschiedene Objekt- und objektorientierte Techniken aus dem gesamten Modul zu verwenden! Dies sollte Ihnen nützliche Praxis im Umgang mit Objekten vermittelt haben und einen guten realen Kontext gegeben haben.

Das war's für Objektartikel — alles, was jetzt noch bleibt, ist, dass Sie Ihre Fähigkeiten im Objektbewertungstest prüfen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfängerleitfaden zur Nutzung von 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit purem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Einsteiger-Tutorial, das zeigt, wie man ein 2D-Spiel entwickelt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Bauens eines 2D-Spiels unter Verwendung einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
