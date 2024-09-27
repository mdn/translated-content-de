---
title: Objektbaupraxis
slug: Learn/JavaScript/Objects/Object_building_practice
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

In vorherigen Artikeln haben wir uns alle wesentlichen Theorien und Syntaxdetails zu JavaScript-Objekten angesehen, um Ihnen eine solide Grundlage zu bieten. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen mehr Übung im Erstellen benutzerdefinierter JavaScript-Objekte bietet, mit einem unterhaltsamen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS,
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
      <th scope="row">Ziel:</th>
      <td>
        Übung im Umgang mit Objekten und objektorientierten Techniken in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle springen lassen

In diesem Artikel schreiben wir eine klassische "Bouncing Balls"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumspringen und die Farbe ändern, wenn sie sich gegenseitig berühren. Das fertige Beispiel wird ungefähr so aussehen:

![Screenshot einer Webseite mit dem Titel "Bouncing balls". 23 Bälle in verschiedenen Pastellfarben und -größen sind über einen schwarzen Bildschirm verteilt sichtbar, mit langen Spuren hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel verwendet die [Canvas-API](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) zum Zeichnen der Bälle auf den Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-API zur Animation des gesamten Displays — Sie benötigen keine Vorkenntnisse über diese APIs, und wir hoffen, dass Sie, nachdem Sie diesen Artikel abgeschlossen haben, daran interessiert sind, sie weiter zu erkunden. Unterwegs verwenden wir einige clevere Objekte und zeigen Ihnen ein paar nette Techniken wie das Abprallen der Bälle von Wänden und das Überprüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Collision Detection_).

## Erste Schritte

Beginnen Sie damit, lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) Dateien zu erstellen. Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, um unsere Bälle darauf zu zeichnen, sowie Elemente, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Stile, die hauptsächlich dazu dienen, das `<h1>` zu stylen und zu positionieren und alle Scrollbars oder Ränder um den Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Ein JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz auf das `<canvas>`-Element und ruft dann die [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode auf, um uns einen Kontext zu geben, auf dem wir zeichnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand repräsentiert und es uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes setzen wir Konstanten namens `width` und `height` sowie die Breite und Höhe des Canvas-Elements (repräsentiert durch die `canvas.width`- und `canvas.height`-Eigenschaften) auf die Breite und Höhe des Browser-Viewports (dem Bereich, in dem die Webseite erscheint — dies kann von den [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)-Eigenschaften abgerufen werden) gleich.

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

Die `random()`-Funktion nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen den beiden zurück. Die `randomRGB()`-Funktion generiert eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-String dargestellt wird.

## Ein Modell für einen Ball in unserem Programm erstellen

Unser Programm wird viele Bälle haben, die auf dem Bildschirm herumspringen. Da sich diese Bälle alle auf die gleiche Weise verhalten werden, ist es sinnvoll, sie mit einem Objekt darzustellen. Fügen Sie zunächst die folgende Klassendefinition am Ende unseres Codes hinzu.

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

Bisher enthält diese Klasse nur einen Konstruktor, in dem wir die Eigenschaften jedes Balls initialisieren können, die er benötigt, um in unserem Programm zu funktionieren:

- `x`- und `y`-Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann von 0 (obere linke Ecke) bis zur Breite und Höhe des Browser-Viewports (untere rechte Ecke) reichen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jeder Ball erhält eine horizontale und vertikale Geschwindigkeit; in realen Begriffen werden diese Werte regelmäßig zu den `x`- und `y`-Koordinatenwerten addiert, wenn wir die Bälle animieren, um sie um diese Menge in jedem Frame zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass sich unsere Bälle tatsächlich in unserem Programm verhalten.

### Den Ball zeichnen

Fügen Sie zunächst die folgende `draw()`-Methode zur `Ball`-Klasse hinzu:

```js
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

Mit dieser Funktion können wir dem Ball mitteilen, dass er sich selbst auf den Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des zuvor definierten 2D-Canvas-Kontextes (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt möchten wir unseren Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe wir der Form geben möchten — wir setzen es auf die `color`-Eigenschaft unseres Balls.
- Dann verwenden wir die [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode, um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:

  - Die `x`- und `y`-Position des Mittelpunktes des Bogens — wir geben die `x`- und `y`-Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter spezifizieren die Start- und Endposition (in Grad) um den Kreis, zwischen denen der Bogen gezeichnet wird. Hier spezifizieren wir 0 Grad und `2 * PI`, was dem Äquivalent von 360 Grad in Radiant entspricht (ärgerlicherweise müssen Sie dies in Radiant angeben). Das ergibt einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, würden Sie einen Halbkreis (180 Grad) bekommen.

- Als letztes verwenden wir die [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode, die im Wesentlichen besagt: "Beenden Sie das Zeichnen des Weges, den wir mit `beginPath()` gestartet haben, und füllen Sie den Bereich, den er einnimmt, mit der zuvor in `fillStyle` angegebenen Farbe."

Sie können bereits beginnen, Ihr Objekt zu testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie dann die Seite, damit sich die Canvas-Größe an den kleineren sichtbaren Viewport anpasst, der verbleibt, wenn die Konsole geöffnet wird.
3. Geben Sie Folgendes ein, um eine neue Ball-Instanz zu erstellen:

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

5. Wenn Sie die letzte Zeile eingeben, sollten Sie sehen, wie sich der Ball an einer beliebigen Position auf der Leinwand zeichnet.

### Die Daten des Balls aktualisieren

Wir können den Ball an einer Position zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Art Aktualisierungsfunktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand der Leinwand erreicht hat. Wenn ja, kehren wir die Polarität der relevanten Geschwindigkeit um, um den Ball in die entgegengesetzte Richtung zu bewegen. Wenn z. B. der Ball sich nach oben bewegt (negative `velY`), wird die vertikale Geschwindigkeit geändert, damit er sich stattdessen nach unten bewegt (positive `velY`).

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer ist als die Breite der Leinwand (der Ball bewegt sich über den rechten Rand hinaus).
- ob die `x`-Koordinate kleiner ist als 0 (der Ball bewegt sich über den linken Rand hinaus).
- ob die `y`-Koordinate größer ist als die Höhe der Leinwand (der Ball bewegt sich über den unteren Rand hinaus).
- ob die `y`-Koordinate kleiner ist als 0 (der Ball bewegt sich über den oberen Rand hinaus).

In jedem Fall berücksichtigen wir die `size` des Balls in der Berechnung, da die `x`/`y`-Koordinaten im Zentrum des Balls liegen, aber wir möchten, dass der Rand des Balls vom Rand abprallt — wir möchten nicht, dass der Ball zur Hälfte aus dem Bildschirm verschwindet, bevor er zurückspringt.

Die letzten beiden Zeilen addieren den `velX`-Wert zu den `x`-Koordinaten und den `velY`-Wert zu den `y`-Koordinaten — der Ball wird in Wirklichkeit bewegt, jedes Mal wenn diese Methode aufgerufen wird.

Das reicht fürs Erste aus, lassen Sie uns einige Animationen erstellen!

## Den Ball animieren

Nun lassen Sie uns Spaß haben. Wir werden jetzt anfangen, Bälle auf die Leinwand zu setzen und sie zu animieren.

Zuerst brauchen wir einen Platz, um all unsere Bälle zu speichern, und dann müssen wir ihn füllen. Das folgende wird diesen Job erledigen — fügen Sie es jetzt am Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` unter Verwendung zufälliger Werte, die mit unseren `random()`- und `randomRGB()`-Funktionen erzeugt wurden, und `push()`t sie an das Ende unseres `balls`-Arrays, aber nur solange die Anzahl der Bälle im Array kleiner als 25 ist. Wenn wir 25 Bälle im Array haben, werden keine weiteren Bälle hinzugefügt. Sie können versuchen, die Zahl in `balls.length < 25` zu ändern, um mehr oder weniger Bälle im Array zu bekommen. Abhängig von der Verarbeitungsleistung Ihres Computers/Browsers könnte die Angabe mehrerer tausend Bälle die Animation ziemlich verlangsamen!

Fügen Sie als nächstes das Folgende am Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und das resultierende Bild in jedem Frame der Animation zu rendern; dies ist die Grundlage der meisten Spiele und anderer solcher Programme. Unsere `loop()`-Funktion tut Folgendes:

- Setzt die Füllfarbe der Leinwand auf semi-transparentes Schwarz und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe der Leinwand mit `fillRect()` (die vier Parameter liefern eine Startkoordinate sowie eine Breite und Höhe für das gezeichnete Rechteck). Dies dient dazu, die Zeichnung des vorherigen Frames zu verdecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, werden Sie lange Schlangen sehen, die sich über die Leinwand schlängeln, anstatt Bälle, die sich bewegen! Die Farbe der Füllung ist auf halbtransparent `rgb(0 0 0 / 25%)` gesetzt, um den Anschein zu erwecken, dass die vorherigen wenigen Frames leicht durchscheinen und somit die kleinen Spuren hinter den Bällen erzeugen, die sich bewegen. Wenn Sie 0.25 auf 1 ändern, werden Sie sie überhaupt nicht mehr sehen. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen, den es hat.
- Schleift durch alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und führt dann die notwendigen Updates zu Position und Geschwindigkeit für den nächsten Frame durch.
- Führt die Funktion erneut mit der Methode `requestAnimationFrame()` aus — wenn diese Methode wiederholt ausgeführt wird und denselben Funktionsnamen übergeben wird, führt sie diese Funktion eine bestimmte Anzahl von Malen pro Sekunde aus, um eine reibungslose Animation zu erstellen. Dies wird im Allgemeinen rekursiv gemacht — das bedeutet, dass die Funktion sich selbst bei jedem Lauf aufruft, sodass sie immer wieder ausgeführt wird.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Kollisionserkennung hinzufügen

Jetzt ein bisschen Spaß, indem wir unserer Programm die Fähigkeit hinzufügen, Kollisionen zu erkennen, damit unsere Bälle wissen, wenn sie auf einen anderen Ball getroffen sind.

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

Diese Methode ist ein wenig komplex, sodass es kein Problem ist, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball prüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Zu diesem Zweck starten wir eine weitere `for...of`-Schleife, um durch alle Bälle im `balls[]`-Array zu schleifen.
- Direkt innerhalb der for-Schleife verwenden wir eine `if`-Anweisung, um zu prüfen, ob der aktuelle Ball, durch den geschleift wird, derselbe Ball ist wie derjenige, den wir derzeit prüfen. Wir wollen nicht prüfen, ob ein Ball mit sich selbst kollidiert! Um dies zu tun, prüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen `collisionDetect`-Methode aufgerufen wird) derselbe ist wie der Schleifenball (d.h. der Ball, der durch die aktuelle Iteration der for-Schleife in der `collisionDetect`-Methode referenziert wird). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur dann ausgeführt wird, wenn sie **nicht** identisch sind.
- Wir verwenden dann einen gängigen Algorithmus, um die Kollision von zwei Kreisen zu überprüfen. Im Wesentlichen überprüfen wir, ob sich die Bereiche der beiden Kreise überschneiden. Dies wird weiter in der [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision erkannt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas viel Komplexeres tun können, wie die Bälle realistisch voneinander abprallen lassen, aber das wäre viel komplexer zu implementieren gewesen. Für solche physikalischen Simulationen neigen Entwickler dazu, Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/), etc. zu verwenden.

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

Speichern und aktualisieren Sie das Demo wieder, und Sie werden sehen, wie Ihre Bälle die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes reales Beispiel zum zufälligen Springen von Bällen zu schreiben und dabei verschiedene Objekt- und objektorientierte Techniken aus dem gesamten Modul zu verwenden! Dies sollte Ihnen einige nützliche Erfahrungen im Umgang mit Objekten und einen guten realen Kontext gegeben haben.

Das war's für Objektartikel — alles, was jetzt noch bleibt, ist, dass Sie Ihre Fähigkeiten bei der Objektbewertung testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfängerleitfaden zur Verwendung von 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Aufbaus eines 2D-Spiels mit einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
