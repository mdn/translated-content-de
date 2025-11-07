---
title: Objektbau Übung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir uns alle wesentlichen JavaScript-Objekttheorien und Syntaxdetails angesehen, die Ihnen eine solide Grundlage bieten. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen mehr Übung im Erstellen benutzerdefinierter JavaScript-Objekte bietet, mit einem lustigen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierten JavaScript-Konzepten, die in den vorherigen Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Üben Sie die Verwendung von Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle springen lassen

In diesem Artikel werden wir ein klassisches "springende Bälle"-Demo schreiben, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumspringen und ihre Farbe ändern, wenn sie sich berühren. Das fertige Beispiel sieht ungefähr so aus:

![Screenshot einer Webseite mit dem Titel "Springende Bälle". 23 Bälle verschiedener Pastellfarben und Größen sind auf einem schwarzen Bildschirm zu sehen, mit langen Spuren, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel wird die [Canvas API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) zum Zeichnen der Bälle auf den Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-API zur Animation der gesamten Anzeige nutzen — Sie müssen keine Vorkenntnisse über diese APIs haben, und wir hoffen, dass Sie, nachdem Sie diesen Artikel abgeschlossen haben, daran interessiert sind, sie weiter zu erkunden. Dabei verwenden wir einige schicke Objekte und zeigen Ihnen ein paar nette Techniken, wie z.B. Bälle von Wänden abprallen zu lassen und zu überprüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionsdetektion_).

## Erste Schritte

Sichern Sie sich zunächst lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element zum Zeichnen unserer Bälle und Elemente, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Styles, die hauptsächlich dazu dienen, das `<h1>` zu stylen und zu positionieren und alle Scrollleisten oder Ränder um den Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Ein JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz auf das `<canvas>`-Element und ruft dann die [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode auf, um uns einen Kontext zu geben, auf dem wir zeichnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand darstellt und uns das Zeichnen von 2D-Formen darauf ermöglicht.

Als nächstes legen wir Konstanten namens `width` und `height` fest und die Breite und Höhe des Canvas-Elements (dargestellt durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports (dem Bereich, auf dem die Webseite erscheint — dieser kann über die Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) ermittelt werden).

Beachten Sie, dass wir mehrere Zuweisungen zusammen verketten, um die Variablen schneller zu setzen — das ist völlig in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich zwischen den beiden zurück. Die Funktion `randomRGB()` generiert eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-String dargestellt wird.

## Ein Ball in unserem Programm modellieren

Unser Programm wird viele Bälle enthalten, die auf dem Bildschirm herumspringen. Da sich diese Bälle alle auf die gleiche Weise verhalten, macht es Sinn, sie mit einem Objekt darzustellen. Fügen wir am Ende unseres Codes die folgende Klassen-Definition hinzu.

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

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann zwischen 0 (oben links in der Ecke) und der Breite und Höhe des Browser-Viewports (unten rechts in der Ecke) variieren.
- Horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit zugewiesen; in realen Begriffen werden diese Werte regelmäßig zu den `x`/`y`-Koordinatenwerten hinzugefügt, wenn wir die Bälle animieren, um sie bei jedem Frame so weit zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle tatsächlich etwas in unserem Programm tun.

### Den Ball zeichnen

Fügen Sie zunächst die folgende `draw()`-Methode zur `Ball`-Klasse hinzu:

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

Mit dieser Funktion können wir dem Ball mitteilen, dass er sich auf dem Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des 2D-Canvas-Kontextes aufrufen, den wir zuvor definiert haben (`ctx`). Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, darauf etwas zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe zu definieren, die wir für die Form haben möchten — wir setzen sie auf die `color`-Eigenschaft unseres Balles.
- Anschließend verwenden wir die [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode, um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:
  - Die `x` und `y` Position des Mittelpunkts des Bogens — wir geben die `x` und `y`-Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter geben den Start- und den Endgrad der Kreise an, zwischen denen der Bogen gezeichnet wird. Hier geben wir 0 Grad und `2 * PI` an, was 360 Grad im Bogenmaß entspricht (ärgerlicherweise muss man das im Bogenmaß angeben). Das ergibt einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, bekämen Sie einen Halbkreis (180 Grad).

- Zuletzt verwenden wir die [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode, die im Wesentlichen aussagt: "Beenden Sie das Zeichnen des Pfades, den wir mit `beginPath()` angefangen haben, und füllen Sie den Bereich, den dieser einnimmt, mit der Farbe, die wir zuvor in `fillStyle` angegeben haben."

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den Code bis jetzt und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und laden Sie die Seite neu, damit sich die Canvas-Größe auf den kleineren sichtbaren Bereich ändert, der verbleibt, wenn die Konsole geöffnet wird.
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

### Die Daten des Balls aktualisieren

Wir können den Ball an Ort und Stelle zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Art Aktualisierungsfunktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand des Canvas erreicht hat. Wenn ja, kehren wir die Polarität der entsprechenden Geschwindigkeit um, damit sich der Ball in die entgegengesetzte Richtung bewegt. Wenn der Ball zum Beispiel nach oben reiste (negative `velY`), wird die vertikale Geschwindigkeit so geändert, dass er stattdessen nach unten zu reisen beginnt (positive `velY`).

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer als die Breite des Canvas ist (der Ball geht über den rechten Rand).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball geht über den linken Rand).
- ob die `y`-Koordinate größer als die Höhe des Canvas ist (der Ball geht über den unteren Rand).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball geht über den oberen Rand).

In jedem Fall berücksichtigen wir die `size` des Balls bei der Berechnung, weil die `x`/`y`-Koordinaten im Zentrum des Balls sind, aber wir möchten, dass der Rand des Balls vom Umfang abprallt — wir wollen nicht, dass der Ball zur Hälfte vom Bildschirm geht, bevor er abprallt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball bewegt sich tatsächlich, jedes Mal, wenn diese Methode aufgerufen wird.

Das ist vorläufig genug; fangen wir mit etwas Animation an!

## Den Ball animieren

Jetzt wird es Spaß machen. Wir werden nun anfangen, Bälle zum Canvas hinzuzufügen und sie zu animieren.

Zuerst müssen wir irgendwo unsere Bälle speichern und dann befüllen. Folgendes wird diese Aufgabe erfüllen — fügen Sie es jetzt an den unteren Bereich Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` unter Verwendung von Zufallswerten, die mit unseren Funktionen `random()` und `randomRGB()` generiert werden, dann `push()` es an das Ende unseres `balls`-Arrays, aber nur solange die Anzahl der Bälle im Array kleiner als 25 ist. Sobald wir 25 Bälle im Array haben, werden keine weiteren Bälle hinzugefügt. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu haben. Je nachdem, wie viel Rechenleistung Ihr Computer/Browser hat, könnte das Angeben von mehreren tausend Bällen die Animation erheblich verlangsamen!

Fügen Sie als Nächstes folgendes am Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht bei jedem Frame der Animation darzustellen; dies ist die Basis der meisten Spiele und anderer solcher Programme. Unsere `loop()`-Funktion macht Folgendes:

- Setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz und zeichnet dann ein Rechteck mit der Farbe über die gesamte Breite und Höhe des Canvases, indem `fillRect()` verwendet wird (die vier Parameter geben eine Startkoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, die Zeichnung des vorherigen Frames abzudecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie nur lange Schlangen, die sich über das Canvas schlängeln, anstatt sich bewegende Bälle! Die Farbe der Füllung wird auf halbtransparentes `rgb(0 0 0 / 25%)` gesetzt, um die vorherigen wenigen Frames leicht durchscheinen zu lassen, was die kleinen Spuren hinter den Bällen erzeugt, wenn sie sich bewegen. Wenn Sie 0.25 auf 1 ändern, sehen Sie sie überhaupt nicht mehr. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen, den es hat.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und führt dann die erforderlichen Aktualisierungen von Position und Geschwindigkeit für den nächsten Frame durch.
- Führt die Funktion erneut mit der `requestAnimationFrame()`-Methode aus — wenn diese Methode wiederholt ausgeführt und derselben Funktionsname übergeben wird, läuft diese Funktion eine festgelegte Anzahl von Malen pro Sekunde, um eine reibungslose Animation zu erstellen. Dies wird im Allgemeinen rekursiv gemacht — was bedeutet, dass die Funktion sich selbst zu jedem Zeitpunkt, an dem sie ausgeführt wird, aufruft, sodass sie immer und immer wieder ausgeführt wird.

Fügen Sie schließlich die folgende Zeile am unteren Rand Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu erneuern, um Ihre springenden Bälle zu testen!

## Kollisionsdetektion hinzufügen

Jetzt ein bisschen Spaß, lassen Sie uns etwas Kollisionsdetektion in unser Programm hinzufügen, damit unsere Bälle wissen, wann sie einen anderen Ball getroffen haben.

Fügen Sie zunächst die folgende Methodendefinition zu Ihrer `Ball`-Klasse hinzu.

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

Diese Methode ist ein wenig komplex, also machen Sie sich keine Sorgen, wenn Sie zunächst nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball überprüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Dazu starten wir eine weitere `for...of`-Schleife, um durch alle Bälle im `balls[]`-Array zu iterieren.
- Unmittelbar innerhalb der for-Schleife verwenden wir eine `if`-Anweisung, um zu prüfen, ob der aktuelle Ball der gleiche Ball ist wie der, den wir gerade überprüfen. Wir möchten nicht überprüfen, ob ein Ball mit sich selbst kollidiert ist! Dazu überprüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen `collisionDetect`-Methode aufgerufen wird) der gleiche ist wie der Schleifenball (d.h. der Ball, auf den sich die aktuelle Iteration der for-Schleife in der `collisionDetect`-Methode bezieht). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur dann ausgeführt wird, wenn sie **nicht** gleich sind.
- Dann verwenden wir einen gängigen Algorithmus, um die Kollision von zwei Kreisen zu überprüfen. Wir überprüfen im Wesentlichen, ob Bereiche der beiden Kreise überlappen. Dies wird weiter erklärt in [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection).
- Wenn eine Kollision festgestellt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas viel Komplexeres tun können, wie zum Beispiel die Bälle realistisch abprallen zu lassen, aber das wäre viel komplexer zu implementieren. Für solche Physiksimulationen verwenden Entwickler in der Regel Spiele- oder Physik-Bibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/), usw.

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

Speichern und aktualisieren Sie das Demo erneut, und Sie werden sehen, wie Ihre Bälle die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Probleme haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes zufälliges springende Bälle-Beispiel zu schreiben, unter Verwendung verschiedener Objekt- und objektorientierter Techniken aus dem ganzen Modul! Dies sollte Ihnen nützliche Übung im Umgang mit Objekten und einen guten realen Kontext gegeben haben.

Das war’s für die Objektlektionen — es bleibt Ihnen nur noch, Ihre Fähigkeiten im Modul-Challenge zu testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial zum 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen für den Aufbau eines 2D-Spiels mit einer JavaScript-Spielbibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
