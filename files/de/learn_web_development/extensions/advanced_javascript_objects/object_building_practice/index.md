---
title: Objektbau-Übung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir alle wesentlichen Theorien und Syntaxdetails zu JavaScript-Objekten betrachtet, um Ihnen eine solide Grundlage zu bieten. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen zusätzliche Praxis im Erstellen benutzerdefinierter JavaScript-Objekte bietet, mit einem unterhaltsamen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den JavaScript-Grundlagen
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierte JavaScript-Konzepte, die in den vorherigen Lektionen dieses Moduls behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Übung im Umgang mit Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lass uns einige Bälle hüpfen

In diesem Artikel schreiben wir eine klassische "Bouncing Balls"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumspringen und die Farbe ändern, wenn sie sich berühren. Das fertige Beispiel wird in etwa so aussehen:

![Screenshot einer Webseite mit dem Titel "Bouncing Balls". 23 Bälle in verschiedenen Pastellfarben und Größen sind über einen schwarzen Bildschirm verteilt, mit langen Spuren dahinter, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel verwendet die [Canvas API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) zum Zeichnen der Bälle auf dem Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) API zur Animation der gesamten Anzeige — es ist kein vorheriges Wissen über diese APIs notwendig, und wir hoffen, dass Sie nach Abschluss dieses Artikels daran interessiert sind, sie weiter zu erforschen. Unterwegs verwenden wir einige clevere Objekte und zeigen Ihnen ein paar nette Techniken, wie das Abprallen von Bällen von Wänden und die Überprüfung, ob sie sich getroffen haben (auch bekannt als _Kollisionsdetektion_).

## Einstieg

Zunächst machen Sie lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) Dateien. Diese enthalten jeweils:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, um unsere Bälle darauf zu zeichnen, sowie Elemente, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Stile, die hauptsächlich dazu dienen, das `<h1>` zu gestalten und zu positionieren sowie alle Bildlaufleisten oder Ränder um den Rand der Seite zu entfernen (damit es schön aussieht).
3. Ein JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht ungefähr so aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript holt sich eine Referenz auf das `<canvas>`-Element und ruft dann die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) darauf auf, um uns einen Kontext zu geben, auf dem wir zu zeichnen beginnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das direkt den Zeichenbereich der Leinwand repräsentiert und uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als Nächstes setzen wir Konstanten namens `width` und `height` sowie die Breite und Höhe des Canvas-Elements (repräsentiert durch die `canvas.width` und `canvas.height`-Eigenschaften), um der Breite und Höhe des Browser-Viewports (dem Bereich, in dem die Webseite angezeigt wird — dieser kann über die Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) ermittelt werden) zu entsprechen.

Beachten Sie, dass wir mehrere Zuweisungen zusammenketten, um die Variablen schneller festzulegen — dies ist völlig in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die Funktion `random()` nimmt zwei Zahlen als Argumente und gibt eine zufällige Zahl im Bereich zwischen den beiden zurück. Die Funktion `randomRGB()` erzeugt eine zufällige Farbe, die als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Zeichenkette dargestellt wird.

## Modellieren eines Balls in unserem Programm

Unser Programm wird viele Bälle enthalten, die über den Bildschirm hüpfen. Da sich diese Bälle alle gleich verhalten, macht es Sinn, sie mit einem Objekt darzustellen. Beginnen wir damit, die folgende Klassendefinition am Ende unseres Codes hinzuzufügen.

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

Bis jetzt enthält diese Klasse nur einen Konstruktor, in dem wir die Eigenschaften initialisieren können, die jeder Ball benötigt, um in unserem Programm zu funktionieren:

- `x` und `y`-Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Dies kann zwischen 0 (oben linke Ecke) und der Breite und Höhe des Browser-Viewports (unten rechte Ecke) liegen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit zugewiesen; diese Werte werden in realen Begriffen regelmäßig zu den `x`/`y` Koordinatenwerten hinzugefügt, wenn wir die Bälle animieren, um sie bei jedem Frame um diesen Betrag zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius in Pixeln.

Das behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle in unserem Programm tatsächlich etwas tun.

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

Mit dieser Funktion können wir den Ball anweisen, sich auf den Bildschirm zu zeichnen, indem wir eine Reihe von Elementen des zuvor definierten 2D-Leinwandkontexts (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unseren Stift anweisen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe die Form haben soll — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Danach verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:

  - Die `x`- und `y`-Position des Bogenmittelpunkts — wir geben die `x`- und `y`-Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter geben die Start- und Endanzahl der Grad um den Kreis an, zwischen denen der Bogen gezeichnet wird. Hier geben wir 0 Grad und `2 * PI` an, was 360 Grad in Radianten entspricht (ärgerlicherweise muss man dies in Radianten angeben). Das ergibt einen vollständigen Kreis. Wenn Sie nur `1 * PI` angegeben hätten, hätten Sie einen Halbkreis (180 Grad) erhalten.

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Grunde besagt "beende das Zeichnen des Pfads, den wir mit `beginPath()` angefangen haben, und fülle den Bereich, den er einnimmt, mit der zuvor in `fillStyle` angegebenen Farbe aus."

Sie können bereits damit beginnen, Ihr Objekt zu testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und laden Sie dann die Seite neu, damit sich die Canvas-Größe auf den kleineren sichtbaren Viewport ändert, der bleibt, wenn die Konsole geöffnet wird.
3. Geben Sie Folgendes ein, um eine neue Ballinstanz zu erstellen:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Versuchen Sie, seine Elemente aufzurufen:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Wenn Sie die letzte Zeile eingeben, sollten Sie sehen, wie sich der Ball irgendwo auf der Leinwand zeichnet.

### Aktualisieren der Ball-Daten

Wir können den Ball an seiner Position zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Art Update-Funktion. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

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

Die ersten vier Teile der Funktion überprüfen, ob der Ball den Rand des Canvas erreicht hat. Wenn dies der Fall ist, kehren wir die Polarität der entsprechenden Geschwindigkeit um, um den Ball in die entgegengesetzte Richtung zu bewegen. Wenn der Ball also zum Beispiel nach oben reist (negative `velY`), wird die vertikale Geschwindigkeit so geändert, dass er stattdessen nach unten reist (positive `velY`).

In den vier Fällen überprüfen wir:

- ob die `x`-Koordinate größer ist als die Breite des Canvas (der Ball bewegt sich am rechten Rand entlang).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball bewegt sich am linken Rand entlang).
- ob die `y`-Koordinate größer ist als die Höhe des Canvas (der Ball bewegt sich am unteren Rand entlang).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball bewegt sich am oberen Rand entlang).

In jedem Fall beziehen wir die `size` des Balls in die Berechnung ein, weil die `x`/`y`-Koordinaten im Zentrum des Balls liegen, aber wir wollen, dass der Rand des Balls vom Umkreis abprallt — wir wollen nicht, dass der Ball zur Hälfte aus dem Bildschirm geht, bevor er zurückprallt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird bei jedem Aufruf dieser Methode effektiv bewegt.

Das wird für den Moment genügen; lassen Sie uns mit etwas Animation fortfahren!

## Animation des Balls

Nun lassen Sie uns das Ganze spaßig machen. Wir werden jetzt beginnen, Bälle auf dem Canvas hinzuzufügen und sie zu animieren.

Zuerst müssen wir irgendwo unsere Bälle speichern und dann bevölkern. Das Folgende wird diesen Job erledigen — fügen Sie es jetzt am Ende Ihres Codes hinzu:

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

Die `while`-Schleife erstellt eine neue Instanz unserer `Ball()`-Funktion mit zufälligen Werten, die mit unseren `random()` und `randomRGB()`-Funktionen generiert wurden, und `push()`t sie ans Ende unserer `balls`-Array, aber nur solange die Anzahl der Bälle im Array kleiner als 25 ist. Wenn also 25 Bälle im Array sind, werden keine weiteren Bälle hinzugefügt. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu erhalten. Je nachdem, wie viel Rechenleistung Ihr Computer oder Browser hat, kann das Angeben von mehreren tausend Bällen die Animation ziemlich verlangsamen!

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

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht bei jedem Frame der Animation zu rendern; dies ist die Grundlage für die meisten Spiele und andere solche Programme. Unsere `loop()`-Funktion tut Folgendes:

- Setzt die Füllfarbe des Canvas auf halbtransparentes Schwarz und zeichnet dann ein Rechteck der Farbe über die gesamte Breite und Höhe des Canvas, mit `fillRect()` (die vier Parameter geben eine Startkoordinate sowie eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, den vorherigen Frame der Zeichnung zu überdecken, bevor der nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie nur lange Schlangen, die sich auf der Leinwand hin und her bewegen, anstatt Bälle, die sich bewegen! Die Füllfarbe ist auf halbtransparentes `rgb(0 0 0 / 25%)` gesetzt, um die vorherigen paar Frames leicht durchscheinen zu lassen, was die kleinen Spuren hinter den Bällen erzeugt, während sie sich bewegen. Wenn Sie 0.25 in 1 ändern, sehen Sie sie überhaupt nicht mehr. Versuchen Sie, diese Zahl zu variieren, um zu sehen, welchen Effekt es hat.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden auf dem Bildschirm zu zeichnen, und dann die notwendigen Updates zu Position und Geschwindigkeit für den nächsten Frame vorzunehmen.
- Führt die Funktion erneut mit der `requestAnimationFrame()`-Methode aus — wenn diese Methode wiederholt und der gleiche Funktionsname übergeben wird, führt sie diese Funktion eine festgelegte Anzahl von Malen pro Sekunde aus, um eine reibungslose Animation zu erzeugen. Dies erfolgt im Allgemeinen rekursiv — das bedeutet, dass die Funktion sich selbst jedes Mal aufruft, wenn sie ausgeführt wird, sodass sie immer wieder ausgeführt wird.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, sie zu speichern und neu zu laden, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen der Kollisionsdetektion

Nun ein wenig Spaß, lassen Sie uns eine Kollisionsdetektion zu unserem Programm hinzufügen, damit unsere Bälle wissen, wann sie auf einen anderen Ball treffen.

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

Diese Methode ist etwas komplex, also machen Sie sich keine Sorgen, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball überprüfen, um festzustellen, ob er mit dem aktuellen Ball kollidiert ist. Dazu starten wir eine weitere `for...of`-Schleife, um durch alle Bälle im `balls[]`-Array zu schleifen.
- Unmittelbar innerhalb der Schleife verwenden wir eine `if`-Anweisung, um zu überprüfen, ob der aktuelle Ball, der durchlaufen wird, derselbe Ball ist wie der, den wir derzeit überprüfen. Wir wollen nicht überprüfen, ob ein Ball mit sich selbst kollidiert! Dazu überprüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen collisionDetect-Methode aufgerufen wird) derselbe ist wie der Schleifenball (d.h. der Ball, auf den sich die aktuelle Iteration der Schleife in der collisionDetect-Methode bezieht). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur ausgeführt wird, wenn sie **nicht** gleich sind.
- Dann verwenden wir einen gängigen Algorithmus, um die Kollision zweier Kreise zu überprüfen. Wir überprüfen im Wesentlichen, ob sich die Bereiche der beiden Kreise überlappen. Dies wird weiter in der [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection) erklärt.
- Wenn eine Kollision festgestellt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft der beiden Kreise auf eine neue zufällige Farbe. Wir hätten etwas weitaus Komplexeres machen können, wie zum Beispiel die Bälle realistisch voneinander abprallen zu lassen, aber das wäre weitaus komplizierter zu implementieren gewesen. Für solche Physiksimulationen tendieren Entwickler dazu, Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/), etc. zu verwenden.

Diese Methode müssen Sie auch in jedem Frame der Animation aufrufen. Aktualisieren Sie Ihre `loop()`-Funktion, um `ball.collisionDetect()` nach `ball.update()` aufzurufen:

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

Speichern und aktualisieren Sie die Demo erneut, und Sie werden sehen, wie Ihre Bälle die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (auch zu sehen als [Live-Demo](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)).

## Zusammenfassung

Wir hoffen, dass Sie Spaß daran hatten, Ihr eigenes reales Beispiel für zufällig hüpfende Bälle zu schreiben, unter Verwendung verschiedener Objekt- und objektorientierter Techniken aus dem gesamten Modul! Dies sollte Ihnen einige nützliche Übung im Umgang mit Objekten und einen guten realen Kontext gegeben haben.

Das war's für die Objektlektionen — es bleibt nur noch, Ihre Fähigkeiten im Modultest herauszufordern.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial für 2D-Leinwände.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen der Erstellung eines 2D-Spiels mit einer JavaScript-Spielebibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
