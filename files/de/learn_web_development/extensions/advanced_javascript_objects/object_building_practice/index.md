---
title: Objektbau-Praxis
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir die wesentliche Theorie und Syntax von JavaScript-Objekten betrachtet und Ihnen eine solide Basis gegeben, von der Sie ausgehen können. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen etwas mehr Übung im Erstellen von benutzerdefinierten JavaScript-Objekten bietet, mit einem unterhaltsamen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von Objekten</a>) und objektorientierten JavaScript-Konzepten, die in vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Übung im Einsatz von Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle hüpfen

In diesem Artikel schreiben wir ein klassisches "Hüpfende Bälle"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden sich auf dem Bildschirm bewegen und die Farbe ändern, wenn sie sich gegenseitig berühren. Das fertige Beispiel wird ungefährt so aussehen:

![Screenshot einer Webseite mit dem Titel "Hüpfende Bälle". 23 Bälle in verschiedenen Pastellfarben und Größen sind über einen schwarzen Bildschirm verteilt, mit langen Spuren hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel wird die [Canvas-API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) verwenden, um die Bälle auf den Bildschirm zu zeichnen, und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-API für die Animation der gesamten Anzeige. Es ist nicht erforderlich, dass Sie Vorkenntnisse über diese APIs haben, und wir hoffen, dass Sie, nachdem Sie diesen Artikel abgeschlossen haben, daran interessiert sein werden, sie weiter zu erkunden. Unterwegs nutzen wir einige schicke Objekte und zeigen Ihnen ein paar nette Techniken wie das Abprallen von Bällen an Wänden und das Überprüfen, ob sie sich gegenseitig getroffen haben (auch als _Kollisionserkennung_ bekannt).

## Erste Schritte

Zuerst erstellen Sie lokale Kopien unserer Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js). Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element zum Zeichnen unserer Bälle und Elementen, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Styles, die hauptsächlich dazu dienen, das `<h1>` zu gestalten und zu positionieren und jegliche Bildlaufleisten oder Rand um den Seitenrand zu entfernen (damit es schön und ordentlich aussieht).
3. Ein JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht so aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript ruft eine Referenz auf das `<canvas>`-Element ab und ruft dann die [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode darauf auf, um uns einen Kontext zu geben, auf dem wir zu zeichnen beginnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich des Canvas darstellt und es uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes legen wir Konstanten mit den Namen `width` und `height` fest und setzen die Breite und Höhe des Canvas-Elements (dargestellt durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports (der Bereich, in dem die Webseite angezeigt wird — dieser kann von den Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) abgerufen werden).

Beachten Sie, dass wir mehrere Zuweisungen miteinander verketten, um die Variablen schneller festzulegen — das ist vollkommen in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und gibt eine zufällige Zahl im Bereich zwischen den beiden zurück. Die Funktion `randomRGB()` generiert eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-String dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle enthalten, die über den Bildschirm hüpfen. Da sich diese Bälle alle gleich verhalten, macht es Sinn, sie durch ein Objekt darzustellen. Fügen Sie nun die folgende Klassendefinition am Ende Ihres Codes hinzu.

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

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann zwischen 0 (obere linke Ecke) und der Breite und Höhe des Browser-Viewports (untere rechte Ecke) variieren.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit zugewiesen; in realen Begriffen werden diese Werte regelmäßig zu den `x`/`y`-Koordinatenwerten hinzugefügt, wenn wir die Bälle animieren, um sie bei jedem Bild um diese Werte zu verschieben.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius, in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle in unserem Programm tatsächlich etwas tun.

### Zeichnen des Balls

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

Mit dieser Funktion können wir dem Ball sagen, dass er sich selbst auf dem Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des zuvor definierten 2D-Canvas-Kontexts (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe die Form haben soll — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Als nächstes verwenden wir die [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode, um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:

  - Die `x`- und `y`-Position des Mittelpunkts des Bogens — wir geben die `x`- und `y`-Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter spezifizieren den Start- und Endwinkel des Bogens in Grad. Hier geben wir 0 Grad und `2 * PI` an, was 360 Grad in Bogenmaß entspricht (ärgerlicherweise müssen Sie dies in Bogenmaß angeben). Das gibt uns einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, würden Sie einen Halbkreis (180 Grad) erhalten.

- Zu guter Letzt verwenden wir die [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode, die im Wesentlichen aussagt: "Beenden Sie das Zeichnen des mit `beginPath()` begonnenen Pfads und füllen Sie die Fläche, die er einnimmt, mit der zuvor in `fillStyle` angegebenen Farbe."

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie dann die Seite, damit die Leinwandgröße auf den kleineren sichtbaren Viewport geändert wird, der übrig bleibt, wenn die Konsole geöffnet wird.
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

5. Wenn Sie die letzte Zeile eingeben, sollten Sie sehen, wie der Ball sich irgendwo auf der Leinwand zeichnet.

### Aktualisierung der Ball-Daten

Wir können den Ball in Position zeichnen, aber um den Ball tatsächlich zu bewegen, brauchen wir eine Art Update-Funktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand der Leinwand erreicht hat. Wenn dies der Fall ist, kehren wir die Polarität der entsprechenden Geschwindigkeit um, um den Ball in die entgegengesetzte Richtung zu bewegen. Wenn der Ball beispielsweise nach oben (negative `velY`) unterwegs war, wird die vertikale Geschwindigkeit geändert, sodass er stattdessen nach unten zu reisen beginnt (positive `velY`).

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer als die Breite der Leinwand ist (der Ball geht über den rechten Rand hinaus).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball geht über den linken Rand hinaus).
- ob die `y`-Koordinate größer als die Höhe der Leinwand ist (der Ball geht über den unteren Rand hinaus).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball geht über den oberen Rand hinaus).

In jedem Fall schließen wir die `size` des Balls in die Berechnung ein, weil die `x`- und `y`-Koordinaten im Zentrum des Balls liegen, aber wir wollen, dass der Rand des Balls vom Umfang abprallt — wir wollen nicht, dass der Ball zur Hälfte vom Bildschirm geht, bevor er anfängt, zurück zu prallen.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird in der Tat jedes Mal bewegt, wenn diese Methode aufgerufen wird.

Das wird fürs Erste reichen; lassen Sie uns mit etwas Animation fortfahren!

## Animation des Balls

Nun lasst uns Spaß haben. Wir werden jetzt beginnen, Bälle auf die Leinwand zu setzen und sie zu animieren.

Zuerst müssen wir einen Speicherplatz für unsere Bälle schaffen und ihn dann füllen. Das Folgende wird diese Aufgabe erfüllen — fügen Sie es jetzt am Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unserer `Ball()`-Klasse mit zufälligen Werten, die von unseren Funktionen `random()` und `randomRGB()` generiert werden, und fügt sie dann mit `push()` ans Ende unseres Balls-Arrays, aber nur solange die Anzahl der Bälle im Array weniger als 25 beträgt. Wenn wir 25 Bälle im Array haben, werden keine weiteren Bälle hinzugefügt. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu erhalten. Je nachdem, wie viel Rechenleistung Ihr Computer/Browser hat, kann das Festlegen mehrerer Tausend Bälle die Animation erheblich verlangsamen!

Fügen Sie als nächstes Folgendes am Ende Ihres Codes hinzu:

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

Alle Programme, die Dinge animieren, beinhalten in der Regel eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und die resultierende Ansicht in jedem Bild der Animation darzustellen; dies ist die Grundlage für die meisten Spiele und ähnliche Programme. Unsere `loop()`-Funktion tut Folgendes:

- Setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz, dann zieht es ein Rechteck dieser Farbe über die gesamte Breite und Höhe des Canvas, mit `fillRect()` (die vier Parameter geben eine Startkoordinate und eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, die Zeichnung des vorherigen Bilds zu verdecken, bevor das nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie statt Bällen, die sich bewegen, nur lange Schlangen, die sich über die Leinwand schlängeln! Die Füllfarbe ist auf halbtransparentes `rgb(0 0 0 / 25%)` gesetzt, um die vorherigen Bilder leicht durchscheinen zu lassen, was die kleinen Spuren hinter den Bällen erzeugt, wenn sie sich bewegen. Wenn Sie 0.25 in 1 ändern, werden Sie sie überhaupt nicht mehr sehen. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, dann die notwendigen Updates für Position und Geschwindigkeit rechtzeitig für das nächste Bild durchzuführen.
- Lässt die Funktion erneut mit der `requestAnimationFrame()`-Methode laufen — wenn diese Methode wiederholt ausgeführt wird und derselbe Funktionsname übergeben wird, führt sie diese Funktion eine bestimmte Anzahl von Malen pro Sekunde aus, um eine flüssige Animation zu erstellen. Dies wird im Allgemeinen rekursiv durchgeführt — was bedeutet, dass die Funktion sich jedes Mal selbst aufruft, also immer wieder läuft.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen der Kollisionserkennung

Nun zu einem kleinen Spaß: Fügen wir unserem Programm eine Kollisionserkennung hinzu, sodass unsere Bälle wissen, wann sie auf einen anderen Ball getroffen sind.

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

Diese Methode ist ein wenig komplex, daher sorgen Sie sich nicht, wenn Sie nicht sofort verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Bei jedem Ball müssen wir jeden anderen Ball überprüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Dazu beginnen wir eine weitere `for...of`-Schleife, um alle Bälle im `balls[]`-Array zu durchlaufen.
- Unmittelbar innerhalb der Schleife verwenden wir ein `if`, um zu überprüfen, ob der aktuelle durchlaufene Ball der gleiche Ball ist wie der, den wir gerade überprüfen. Wir wollen nicht prüfen, ob ein Ball mit sich selbst kollidiert ist! Dazu überprüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen `collisionDetect`-Methode aufgerufen wird) derselbe ist wie der Schleifenball (d.h. der Ball, auf den sich die aktuelle Iteration der Schleife in der `collisionDetect`-Methode bezieht). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code im `if`-Statement nur ausgeführt wird, wenn sie **nicht** gleich sind.
- Dann verwenden wir einen gängigen Algorithmus, um die Kollision von zwei Kreisen zu überprüfen. Wir prüfen im Grunde, ob sich die Bereiche der beiden Kreise überlappen. Dies wird weiter in [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision erkannt wird, wird der Code innerhalb des inneren `if`-Statements ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaften beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas weitaus Komplexeres tun können, wie z.B. die Bälle realistisch abprallen zu lassen, aber das wäre sehr viel komplexer zu implementieren. Für solche Physik-Simulationen verwenden Entwickler in der Regel Spiele- oder Physik-Bibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/) usw.

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
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es auch [live laufend](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, Sie hatten Spaß daran, Ihr eigenes realitätsnahes Beispiel für zufällig hüpfende Bälle zu schreiben und dabei verschiedene objekt- und objektorientierte Techniken aus dem gesamten Modul zu verwenden! Dies sollte Ihnen nützliche Praxis im Einsatz von Objekten und guten realen Kontext gegeben haben.

Das war's mit den Objektlektionen — alles, was jetzt noch bleibt, ist, Ihre Fähigkeiten in der Modul-Herausforderung zu testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Tutorial für Anfänger zur 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel mit purem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Tutorial für Anfänger, das zeigt, wie man ein 2D-Spiel baut.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erläutert die Grundlagen des Aufbaus eines 2D-Spiels mit einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
