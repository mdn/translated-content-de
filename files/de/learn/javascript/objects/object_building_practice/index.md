---
title: Objekt-Baupraxis
slug: Learn/JavaScript/Objects/Object_building_practice
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

In den vorherigen Artikeln haben wir alle wesentlichen Theorie- und Syntaxdetails zu JavaScript-Objekten behandelt und Ihnen eine solide Grundlage zum Starten gegeben. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen mehr Übung im Erstellen benutzerdefinierter JavaScript-Objekte bietet und dabei ein lustiges und farbenfrohes Ergebnis erzielt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS,
        Vertrautheit mit den Grundlagen von JavaScript (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >) und die Grundlagen von OOJS (siehe
        <a href="/de/docs/Learn/JavaScript/Objects/Basics"
          >Einführung in Objekte</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Übung im Einsatz von Objekten und objektorientierte Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle hüpfen

In diesem Artikel schreiben wir eine klassische "Bouncing Balls"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden über den Bildschirm hüpfen und ihre Farbe ändern, wenn sie sich gegenseitig berühren. Das fertige Beispiel wird in etwa so aussehen:

![Screenshot einer Webseite mit dem Titel "Bouncing balls". 23 Bälle in verschiedenen Pastellfarben und Größen sind über einen schwarzen Bildschirm verteilt, mit langen Spuren dahinter, die Bewegungen anzeigen.](bouncing-balls.png)

Dieses Beispiel nutzt die [Canvas API](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) zum Zeichnen der Bälle auf dem Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API zur Animation der gesamten Anzeige — Sie benötigen keine Vorkenntnisse dieser APIs, und wir hoffen, dass Sie am Ende dieses Artikels neugierig auf diese sein werden. Unterwegs nutzen wir einige praktische Objekte und zeigen Ihnen ein paar schöne Techniken wie Bälle von Wänden abprallen zu lassen und zu prüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionserkennung_).

## Erste Schritte

Zunächst erstellen Sie lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Diese enthalten jeweils folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, auf dem unsere Bälle gezeichnet werden, sowie Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Stile, die hauptsächlich dazu dienen, das `<h1>` zu formatieren und zu positionieren sowie alle Scrollleisten oder Ränder am Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Ein wenig JavaScript, das dazu dient, das `<canvas>`-Element einzurichten und eine allgemeine Funktion zur Verfügung zu stellen, die wir verwenden werden.

Der erste Teil des Skripts sieht so aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz zum `<canvas>`-Element und ruft dann die [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode darauf auf, um uns einen Kontext zu geben, auf dem wir zeichnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand darstellt und uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes setzen wir Konstanten namens `width` und `height` und die Breite und Höhe des Canvas-Elements (dargestellt durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports (der Bereich, in dem die Webseite erscheint — dieser kann durch die Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) ermittelt werden).

Beachten Sie, dass wir mehrere Zuweisungen zusammenketten, um die Variablen schneller einzurichten — das ist völlig in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen den beiden zurück. Die Funktion `randomRGB()` generiert eine Zufallsfarbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-String dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle zeigen, die über den Bildschirm hüpfen. Da sich diese Bälle alle gleich verhalten, ergibt es Sinn, sie mit einem Objekt darzustellen. Lassen Sie uns mit der folgenden Klassendefinition am Ende unseres Codes beginnen.

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

Diese Klasse enthält bisher nur einen Konstruktor, in dem wir die Eigenschaften initialisieren können, die jeder Ball benötigt, um in unserem Programm zu funktionieren:

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm beginnt. Dies kann zwischen 0 (linke obere Ecke) und der Breite und Höhe des Browser-Viewports (rechte untere Ecke) variieren.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jeder Ball erhält eine horizontale und vertikale Geschwindigkeit; diese Werte werden in realen Zahlen regelmäßig zu den `x`/`y`-Koordinatenwerten addiert, wenn wir die Bälle animieren, um sie um diesen Betrag in jedem Frame zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius in Pixeln.

Das behandelt die Eigenschaften, aber wie sieht es mit den Methoden aus? Wir wollen, dass unsere Bälle tatsächlich etwas in unserem Programm tun.

### Den Ball zeichnen

Fügen Sie zuerst die folgende `draw()`-Methode zur `Ball`-Klasse hinzu:

```js
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

Mit dieser Funktion können wir dem Ball sagen, dass er sich selbst auf dem Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des 2D-Canvas-Kontextes aufrufen, den wir zuvor definiert haben (`ctx`). Der Kontext ist wie das Papier, und jetzt wollen wir unseren Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf dem Papier zeichnen möchten.
- Anschließend verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe der Form zu definieren — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Als Nächstes verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:

  - Die `x`- und `y`-Position des Zentrums des Bogens — wir spezifizieren die `x`- und `y`-Eigenschaften des Balls.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter geben den Anfangs- und Endwinkel des Bogens an. Hier geben wir 0 Grad und `2 * PI` an, was dem vollständigen Kreis (360 Grad in Radianten) entspricht (ärgerlicherweise müssen Sie dies in Radianten angeben). Das ergibt einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, würden Sie einen Halbkreis (180 Grad) erhalten.

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Wesentlichen festlegt: „Beende das Zeichnen des Pfads, den wir mit `beginPath()` begonnen haben, und fülle den von ihm eingenommenen Bereich mit der Farbe, die wir zuvor in `fillStyle` angegeben haben.“

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie dann die Seite, damit die Leinwandgröße an den kleineren sichtbaren Viewport angepasst wird, der bleibt, wenn die Konsole geöffnet wird.
3. Geben Sie Folgendes ein, um eine neue Ballinstanz zu erstellen:

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

5. Wenn Sie die letzte Zeile eingeben, sollte der Ball sich irgendwo auf der Leinwand zeichnen.

### Aktualisieren der Balldaten

Wir können den Ball in Position zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Art Aktualisierungsfunktion. Fügen Sie folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand der Leinwand erreicht hat. Falls ja, kehren wir die Polarität der jeweiligen Geschwindigkeit um, damit der Ball in die entgegengesetzte Richtung reist. Wenn der Ball also nach oben unterwegs war (negative `velY`), wird die vertikale Geschwindigkeit so geändert, dass er stattdessen nach unten reist (positive `velY`).

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer ist als die Breite der Leinwand (der Ball bewegt sich über den rechten Rand).
- ob die `x`-Koordinate kleiner ist als 0 (der Ball bewegt sich über den linken Rand).
- ob die `y`-Koordinate größer ist als die Höhe der Leinwand (der Ball bewegt sich über den unteren Rand).
- ob die `y`-Koordinate kleiner ist als 0 (der Ball bewegt sich über den oberen Rand).

In jedem Fall berücksichtigen wir die `size` des Balls in der Berechnung, da die `x`/`y`-Koordinaten im Zentrum des Balls liegen, aber wir möchten, dass der Rand des Balls am Umfang abprallt — wir möchten nicht, dass der Ball halb von der Leinwand geht, bevor er zurückprallt.

Die letzten zwei Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird in jedem Fall bei jedem Aufruf dieser Methode in Bewegung gesetzt.

Das reicht vorerst; lassen Sie uns mit etwas Animation fortfahren!

## Animation des Balls

Jetzt macht's Spaß. Wir werden jetzt Bälle zur Leinwand hinzufügen und sie animieren.

Zuerst müssen wir einen Platz schaffen, um alle Bälle zu speichern und sie dann zu befüllen. Das folgende wird diese Aufgabe erfüllen — fügen Sie es jetzt an das Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()`, indem sie mit unseren Funktionen `random()` und `randomRGB()` zufällige Werte generiert und diese dann mit `push()` an das Ende unseres balls-Arrays anhängt, jedoch nur, solange die Anzahl der Bälle im Array kleiner als 25 ist. Also, wenn wir 25 Bälle im Array haben, werden keine weiteren Bälle angehängt. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu erhalten. Je nachdem, wie viel Rechenleistung Ihr Computer/Browser hat, könnte die Angabe mehrerer Tausend Bälle die Animation erheblich verlangsamen!

Fügen Sie als Nächstes das folgende Code-Beispiel an das Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten in der Regel eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht in jedem Frame der Animation zu rendern; dies ist die Grundlage für die meisten Spiele und ähnliche Programme. Unsere `loop()`-Funktion tut Folgendes:

- Setzt die Füllfarbe der Leinwand auf halbtransparentes Schwarz und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe der Leinwand, mit `fillRect()` (die vier Parameter geben eine Startkoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, die Zeichnung des vorherigen Frames zu überdecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie nur lange Schlangen, die sich über die Leinwand schlängeln, anstatt Bälle, die sich bewegen! Die Farbe des Füllens ist auf halbtransparent eingestellt, `rgb(0 0 0 / 25%)`, um die vorherigen Frames leicht durchscheinen zu lassen und so die kleinen Spuren hinter den Bällen zu erzeugen, während sie sich bewegen. Wenn Sie 0.25 in 1 ändern, sehen Sie sie überhaupt nicht mehr. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen, den sie hat.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()` und `update()` Methoden jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und dann die notwendigen Updates zu Position und Geschwindigkeit in der Zeit für den nächsten Frame durchzuführen.
- Führt die Funktion erneut mit der `requestAnimationFrame()`-Methode aus — wenn diese Methode wiederholt ausgeführt und demselben Funktionsnamen übergeben wird, führt sie diese Funktion eine festgelegte Anzahl von Malen pro Sekunde aus, um eine flüssige Animation zu erstellen. Dies geschieht in der Regel rekursiv — was bedeutet, dass die Funktion sich selbst jedes Mal aufruft, wenn sie ausgeführt wird, sodass sie immer wieder läuft.

Fügen Sie schließlich die folgende Zeile an das Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen von Kollisionserkennung

Nun zum Spaß, lassen Sie uns etwas Kollisionserkennung zu unserem Programm hinzufügen, damit unsere Bälle wissen, wann sie einen anderen Ball getroffen haben.

Fügen Sie zunächst die folgende Methodendefinition zu Ihrer `Ball`-Klasse hinzu.

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

Diese Methode ist etwas komplex, daher machen Sie sich keine Sorgen, wenn Sie nicht sofort verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball überprüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Um dies zu tun, starten wir eine weitere `for...of` Schleife, um alle Bälle im `balls[]`-Array zu durchlaufen.
- Unmittelbar innerhalb der for-Schleife verwenden wir eine `if`-Bedingung, um zu überprüfen, ob der aktuelle durchlaufene Ball derselbe Ball wie derjenige ist, den wir gerade überprüfen. Wir möchten nicht prüfen, ob ein Ball mit sich selbst kollidiert ist! Um dies zu tun, überprüfen wir, ob der aktuelle Ball (d. h. der Ball, dessen collisionDetect-Methode aufgerufen wird) derselbe ist wie der Schleifenball (also der Ball, auf den sich die aktuelle Iteration der for-Schleife in der collisionDetect-Methode bezieht). Wir verwenden dann `!`, um die Prüfung zu negieren, sodass der Code innerhalb der `if`-Bedingung nur dann ausgeführt wird, wenn sie **nicht** dieselben sind.
- Wir verwenden dann einen allgemeinen Algorithmus, um die Kollision von zwei Kreisen zu prüfen. Wir überprüfen im Wesentlichen, ob sich die Flächen der beiden Kreise überlappen. Dies wird weiter in [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision entdeckt wird, wird der Code innerhalb der inneren `if`-Bedingung ausgeführt. In diesem Fall setzen wir nur die `color` Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas weitaus Komplexeres machen können, etwa die Bälle realistisch abprallen zu lassen, aber das wäre viel komplizierter zu implementieren gewesen. Für solche Physiksimulationen verwenden Entwickler in der Regel Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/) usw.

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

Speichern und aktualisieren Sie die Demo erneut, und Sie werden sehen, dass Ihre Bälle ihre Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Probleme haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (siehe auch die [Live-Demo hier](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes reales Beispiel mit zufällig hüpfenden Bällen zu schreiben, wobei verschiedene Objekt- und objektorientierte Techniken aus dem gesamten Modul verwendet wurden! Dies sollte Ihnen einige nützliche Übungen zur Verwendung von Objekten und guten realen Kontext gegeben haben.

Das war's für die Artikel über Objekte — jetzt bleibt nur noch, dass Sie Ihre Fähigkeiten in der Objektbewertung testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Leitfaden für Anfänger zur Verwendung von 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit purem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Einsteiger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Erstellens eines 2D-Spiels mit einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
