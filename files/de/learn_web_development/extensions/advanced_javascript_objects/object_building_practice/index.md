---
title: Objektbauübung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir uns alle wesentlichen JavaScript-Objekttheorien und -syntaxdetails angesehen, um Ihnen eine solide Basis zu bieten. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen mehr Übung im Erstellen von benutzerdefinierten JavaScript-Objekten bietet und dabei ein unterhaltsames und farbenfrohes Ergebnis liefert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierten JavaScript-Konzepten, die in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        Üben Sie die Verwendung von Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns ein paar Bälle hüpfen

In diesem Artikel schreiben wir ein klassisches "hüpfende Bälle"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden über den Bildschirm hüpfen und ihre Farbe ändern, wenn sie sich berühren. Das fertige Beispiel sieht in etwa so aus:

![Screenshot einer Webseite mit dem Titel "Hüpfende Bälle". 23 Bälle in verschiedenen Pastellfarben und -größen sind über einen schwarzen Bildschirm verteilt, mit langen Schleiern hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel wird die [Canvas-API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) zum Zeichnen der Bälle auf den Bildschirm verwenden und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API zur Animation der gesamten Anzeige — Sie müssen keine Vorkenntnisse zu diesen APIs haben, und wir hoffen, dass Sie, wenn Sie diesen Artikel abgeschlossen haben, interessiert sind, diese weiter zu erkunden. Unterwegs nutzen wir einige fähige Objekte und zeigen Ihnen ein paar nette Techniken, wie das Abprallen der Bälle von Wänden und das Überprüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionserkennung_).

## Erste Schritte

Zu Beginn erstellen Sie lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) Dateien. Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element zum Zeichnen unserer Bälle und Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Styles, die hauptsächlich dazu dienen, das `<h1>` zu stylen und zu positionieren und jegliche Bildlaufleisten oder Ränder um den Rand der Seite zu entfernen (damit es schön und ordentlich aussieht).
3. Ein JavaScript, das dient, um das `<canvas>`-Element einzurichten und eine allgemeine Funktion bereitzustellen, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz auf das `<canvas>`-Element und ruft dann die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) darauf auf, um uns einen Kontext zu geben, auf dem wir anfangen können zu zeichnen. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand repräsentiert und uns erlaubt, 2D-Formen darauf zu zeichnen.

Als Nächstes setzen wir Konstanten namens `width` und `height` und die Breite und Höhe des Canvas-Elements (repräsentiert durch die `canvas.width` und `canvas.height` Eigenschaften), um der Breite und Höhe des Browser-Viewports zu entsprechen (dem Bereich, in dem die Webseite erscheint — dieser kann von den Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) abgerufen werden).

Beachten Sie, dass wir mehrere Zuweisungen verketten, um die Variablen schneller zu setzen — das ist vollkommen in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und liefert eine Zufallszahl im Bereich zwischen den beiden. Die Funktion `randomRGB()` generiert eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-String dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle haben, die über den Bildschirm hüpfen. Da sich diese Bälle alle auf die gleiche Weise verhalten, macht es Sinn, sie mit einem Objekt darzustellen. Fügen wir unten in unserem Code die folgende Klassendefinition hinzu.

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

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann zwischen 0 (obere linke Ecke) bis zur Breite und Höhe des Browser-Viewports (untere rechte Ecke) liegen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit gegeben; in realen Begriffen werden diese Werte regelmäßig zu den `x`/`y` Koordinatenwerten addiert, wenn wir die Bälle animieren, um sie um diese Menge in jedem Frame zu bewegen.
- `color` — jeder Ball bekommt eine Farbe.
- `size` — jeder Ball bekommt eine Größe — das ist sein Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle in unserem Programm tatsächlich etwas tun.

### Zeichnen des Balls

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

Mit dieser Funktion können wir dem Ball mitteilen, sich selbst auf den Bildschirm zu zeichnen, indem wir eine Reihe von Mitgliedern des zuvor definierten 2D-Canvas-Kontextes (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf dem Papier zeichnen möchten.
- Als Nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um die Farbe zu definieren, die wir für die Form wünschen — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Anschließend verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Bogenform auf dem Papier zu zeichnen. Die Parameter sind:

  - Die `x`- und `y`-Position des Mittelpunktes des Bogens — wir spezifizieren die `x`- und `y`-Eigenschaften des Balls.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter geben die Start- und Endpunktanzahl der Grad um den Kreis an, zwischen denen der Bogen gezeichnet wird. Hier spezifizieren wir 0 Grad und `2 * PI`, was 360 Grad in Bogenmaß entspricht (ärgerlicherweise muss man dies im Bogenmaß angeben). Das gibt uns einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, erhalten Sie einen Halbkreis (180 Grad).

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Grunde angibt "beende den Zeichenvorgang des Weges, den wir mit `beginPath()` begonnen haben, und fülle den Bereich, den er einnimmt, mit der früher in `fillStyle` angegebenen Farbe."

Sie können Ihr Objekt bereits ausprobieren.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie die Seite, damit sich die Canvas-Größe auf das kleinere sichtbare Viewport ändert, das beim Öffnen der Konsole verbleibt.
3. Geben Sie Folgendes ein, um eine neue Instanz eines Balls zu erstellen:

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

5. Wenn Sie die letzte Zeile eingeben, sollten Sie den Ball irgendwo auf dem Canvas zeichnen sehen.

### Aktualisierung der Ball-Daten

Wir können den Ball an einer Position zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Art Aktualisierungsfunktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand des Canvas erreicht hat. Falls ja, kehren wir die Polarität der entsprechenden Geschwindigkeit um, um den Ball in die entgegengesetzte Richtung reisen zu lassen. Wenn der Ball zum Beispiel nach oben reist (negative `velY`), dann wird die vertikale Geschwindigkeit so geändert, dass er stattdessen nach unten reist (positive `velY`).

In den vier Fällen prüfen wir:

- ob die `x`-Koordinate größer als die Breite des Canvas ist (der Ball geht über den rechten Rand).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball geht über den linken Rand).
- ob die `y`-Koordinate größer als die Höhe des Canvas ist (der Ball geht über den unteren Rand).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball geht über den oberen Rand).

In jedem Fall beziehen wir die `size` des Balls in die Berechnung ein, weil sich die `x`/`y`-Koordinaten in der Mitte des Balls befinden, aber wir möchten, dass der Rand des Balls vom Umfang abprallt — wir wollen nicht, dass der Ball zur Hälfte vom Bildschirm verschwindet, bevor er zurückzuschwingen beginnt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird effektiv jedes Mal bewegt, wenn diese Methode aufgerufen wird.

Das wird für den Moment genügen; machen wir weiter mit etwas Animation!

## Animation des Balls

Jetzt wird's spaßig. Wir werden jetzt beginnen, Bälle auf das Canvas zu setzen und sie zu animieren.

Zuerst müssen wir einen Ort erschaffen, um all unsere Bälle zu speichern, und diesen dann füllen. Folgendes wird diese Aufgabe erledigen — fügen Sie es jetzt unten in Ihrem Code hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` mit Zufallswerten, die durch unsere `random()` und `randomRGB()` Funktionen generiert werden, und `push()` es dann an das Ende unseres Arrays von Bällen, aber nur, während die Anzahl der Bälle im Array weniger als 25 beträgt. Wenn wir also 25 Bälle im Array haben, werden keine weiteren Bälle gepusht. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu erhalten. Abhängig davon, wie viel Rechenleistung Ihr Computer/Browser hat, kann das Festlegen von mehreren tausend Bällen die Animation erheblich verlangsamen!

Als Nächstes fügen Sie Folgendes unten in Ihrem Code hinzu:

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht in jedem Frame der Animation zu rendern; dies ist die Grundlage für die meisten Spiele und andere derartige Programme. Unsere `loop()` Funktion macht Folgendes:

- Setzt die Canvas-Füllfarbe auf halbtransparentes Schwarz, dann zeichnet ein Rechteck dieser Farbe über die gesamte Breite und Höhe des Canvas, mittels `fillRect()` (die vier Parameter geben eine Startkoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, den vorherigen Frame zu überdecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie einfach lange Schlangen, die sich über das Canvas winden, anstatt sich bewegender Bälle! Die Farbe der Füllung wird auf halbtransparent gesetzt, `rgb(0 0 0 / 25%)`, um die vorherigen paar Frames leicht durchscheinen zu lassen und so die kleinen Schleier hinter den sich bewegenden Bällen zu erzeugen. Wenn Sie 0.25 zu 1 ändern, werden Sie sie überhaupt nicht mehr sehen. Versuchen Sie, diese Zahl zu variieren, um die Auswirkungen zu sehen.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen und dann die notwendigen Aktualisierungen von Position und Geschwindigkeit für den nächsten Frame durchzuführen.
- Führt die Funktion erneut unter Verwendung der `requestAnimationFrame()`-Methode aus — wenn diese Methode wiederholt ausgeführt und derselben Funktionsname übergeben wird, wird diese Funktion eine festgelegte Anzahl von Malen pro Sekunde ausgeführt, um eine flüssige Animation zu erzeugen. Dies geschieht im Allgemeinen rekursiv — was bedeutet, dass die Funktion sich jedes Mal selbst aufruft, sodass sie immer und immer wieder läuft.

Fügen Sie abschließend die folgende Zeile unten in Ihrem Code hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen von Kollisionserkennung

Nun zum Spaß, lassen Sie uns etwas Kollisionserkennung zu unserem Programm hinzufügen, damit unsere Bälle wissen, wann sie einen anderen Ball getroffen haben.

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

Diese Methode ist etwas komplex, also machen Sie sich keine Sorgen, wenn Sie jetzt nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir überprüfen, ob er mit einem anderen Ball kollidiert ist. Dazu starten wir eine weitere `for...of` Schleife, um alle Bälle im `balls[]` Array zu durchlaufen.
- Unmittelbar innerhalb der Schleife verwenden wir eine `if`-Anweisung, um zu überprüfen, ob der aktuelle Ball, der durchlaufen wird, derselbe Ball ist wie der, den wir gerade überprüfen. Wir wollen nicht prüfen, ob ein Ball mit sich selbst kollidiert ist! Dazu prüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen `collisionDetect` Methode aufgerufen wird) derselbe ist wie der Schleifenball (d.h. der Ball, auf den bei der aktuellen Iteration der `for`-Schleife in der `collisionDetect` Methode verwiesen wird). Dann verwenden wir `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur ausgeführt wird, wenn sie **nicht** gleich sind.
- Dann verwenden wir einen allgemeinen Algorithmus, um die Kollision von zwei Kreisen zu überprüfen. Wir überprüfen im Grunde, ob sich die Bereiche der beiden Kreise überschneiden. Dies wird weiter in [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision erkannt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas weitaus Komplexeres tun können, z. B. die Bälle realistisch voneinander abprallen lassen, aber das wäre weitaus komplexer zu implementieren gewesen. Für solche Physiksimulationen verwenden Entwickler häufig Spiel- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/), usw.

Sie müssen diese Methode auch in jedem Animationsframe aufrufen. Aktualisieren Sie Ihre `loop()`-Funktion, um `ball.collisionDetect()` nach `ball.update()` aufzurufen:

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

Speichern und aktualisieren Sie das Demoprojekt erneut, und Sie werden sehen, wie Ihre Bälle ihre Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß hatten, Ihr eigenes praxisnahes Beispiel mit zufällig hüpfenden Bällen zu schreiben, in dem Sie verschiedene Objekt- und objektorientierte Techniken aus dem gesamten Modul verwenden! Dies sollte Ihnen nützliche Praxis im Umgang mit Objekten und einen guten realen Kontext gegeben haben.

Das war's für die Objektlektionen — alles, was jetzt noch bleibt, ist, dass Sie Ihre Fähigkeiten in der Modul-Herausforderung testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial für das 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen der Erstellung eines 2D-Spiels mit einer JavaScript-Spielbibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
